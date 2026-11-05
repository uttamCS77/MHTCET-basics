import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronRight, Play, Filter, ArrowUpDown, Info } from 'lucide-react';
import { SubjectType, PriorityLevel } from '../types';
import { PCM_ANALYSIS_DATA } from '../data/pcmData';

interface SubjectViewProps {
  subject: SubjectType;
  onSelectSubject: (subject: SubjectType) => void;
  onStartQuiz: (topicName: string, subject: SubjectType) => void;
}

export const SubjectView: React.FC<SubjectViewProps> = ({
  subject,
  onSelectSubject,
  onStartQuiz
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<string>('ALL');
  const [classFilter, setClassFilter] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'total' | 'avg' | 'coverage' | 'priority'>('total');
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

  const chapters = PCM_ANALYSIS_DATA[subject] || [];

  // Toggle single chapter expansion
  const toggleChapter = (chapterName: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterName]: prev[chapterName] === false ? true : prev[chapterName] === true ? false : false
    }));
  };

  // Expand / collapse all
  const setAllExpanded = (expand: boolean) => {
    const updated: Record<string, boolean> = {};
    chapters.forEach(ch => {
      updated[ch.chapter] = expand;
    });
    setExpandedChapters(updated);
  };

  // Filtered and sorted data
  const filteredChapters = useMemo(() => {
    return chapters
      .map(ch => {
        // Match class level
        if (classFilter !== 'ALL' && ch.classLevel !== classFilter) {
          return null;
        }

        // Filter topics
        const matchedTopics = ch.topics.filter(t => {
          const matchSearch =
            t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.subtopic.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ch.chapter.toLowerCase().includes(searchTerm.toLowerCase());

          const matchPriority = priorityFilter === 'ALL' || t.priority === priorityFilter;

          return matchSearch && matchPriority;
        });

        if (matchedTopics.length === 0) return null;

        // Sort topics inside chapter
        const sortedTopics = [...matchedTopics].sort((a, b) => {
          if (sortBy === 'total') return b.total - a.total;
          if (sortBy === 'avg') return b.avgPerPaper - a.avgPerPaper;
          if (sortBy === 'coverage') return b.paperCoverage - a.paperCoverage;
          if (sortBy === 'priority') {
            const weights: Record<PriorityLevel, number> = { 'Very High': 4, 'High': 3, 'Moderate': 2, 'Low': 1 };
            return weights[b.priority] - weights[a.priority];
          }
          return 0;
        });

        return {
          ...ch,
          topics: sortedTopics
        };
      })
      .filter(Boolean) as typeof chapters;
  }, [chapters, searchTerm, priorityFilter, classFilter, sortBy]);

  const totalSubjectQs = useMemo(() => {
    return chapters.reduce((sum, ch) => sum + ch.totalQuestions, 0);
  }, [chapters]);

  const getPriorityStyle = (p: PriorityLevel) => {
    switch (p) {
      case 'Very High':
        return 'text-red-700 bg-red-50 border border-red-200';
      case 'High':
        return 'text-orange-700 bg-orange-50 border border-orange-200';
      case 'Moderate':
        return 'text-amber-700 bg-amber-50 border border-amber-200';
      case 'Low':
        return 'text-slate-600 bg-slate-100 border border-slate-200';
    }
  };

  return (
    <div className="space-y-6">

      {/* Top Subject Switcher & Briefing */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Chapter-Wise Frequency Analysis
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
              {subject} Question Intelligence
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              40 Scanned Shifts (2022–2025) · 2026 Designated N/A · Total Questions: {totalSubjectQs}
            </p>
          </div>

          {/* Interactive Subject Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            {(['Physics', 'Chemistry', 'Mathematics'] as SubjectType[]).map(s => (
              <button
                key={s}
                onClick={() => onSelectSubject(s)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  subject === s
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search chapter or topic..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>

          {/* Priority Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <select
              value={priorityFilter}
              onChange={e => setPriorityFilter(e.target.value)}
              className="w-full py-2 px-2.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="ALL">All Priorities</option>
              <option value="Very High">Very High Priority</option>
              <option value="High">High Priority</option>
              <option value="Moderate">Moderate Priority</option>
              <option value="Low">Low Priority</option>
            </select>
          </div>

          {/* Class Filter */}
          <div className="flex items-center gap-2">
            <select
              value={classFilter}
              onChange={e => setClassFilter(e.target.value)}
              className="w-full py-2 px-2.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="ALL">All Classes (11 & 12)</option>
              <option value="Class 12">Class 12 Only (80% Weightage)</option>
              <option value="Class 11">Class 11 Only (20% Weightage)</option>
            </select>
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="w-full py-2 px-2.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="total">Sort by Total Questions</option>
              <option value="avg">Sort by Avg/Paper</option>
              <option value="coverage">Sort by Paper Coverage</option>
              <option value="priority">Sort by Priority Ranking</option>
            </select>
          </div>

        </div>

        {/* Global expand / collapse controls */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <div>
            Showing <span className="font-semibold text-slate-800">{filteredChapters.length}</span> matching chapters
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setAllExpanded(true)}
              className="hover:text-indigo-600 transition-colors font-medium"
            >
              Expand All
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setAllExpanded(false)}
              className="hover:text-indigo-600 transition-colors font-medium"
            >
              Collapse All
            </button>
          </div>
        </div>

      </div>

      {/* Chapter Accordion List */}
      <div className="space-y-4">
        {filteredChapters.map((ch, idx) => {
          // Default to open unless explicitly collapsed
          const isExpanded = expandedChapters[ch.chapter] !== false;
          const chapterTotal = ch.topics.reduce((acc, cur) => acc + cur.total, 0);

          return (
            <div
              key={ch.chapter}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              {/* Chapter Header Bar */}
              <button
                onClick={() => toggleChapter(ch.chapter)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-100/70 transition-colors border-b border-slate-200"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-bold text-slate-900 truncate">
                        {ch.chapter}
                      </h2>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 shrink-0">
                        {ch.classLevel}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {ch.topics.length} Subtopics · Total Questions: <strong className="font-mono text-slate-800">{chapterTotal}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="hidden sm:block text-right text-xs">
                    <div className="font-mono font-semibold text-slate-700">
                      Avg {(chapterTotal / 40).toFixed(2)} Qs/Paper
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {((chapterTotal / totalSubjectQs) * 100).toFixed(1)}% Subject Weightage
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Chapter Table Container */}
              {isExpanded && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-100/80 text-slate-700 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 min-w-[240px]">Topic / Subtopic</th>
                        <th className="py-3 px-2 text-center font-mono">2022</th>
                        <th className="py-3 px-2 text-center font-mono">2023</th>
                        <th className="py-3 px-2 text-center font-mono">2024</th>
                        <th className="py-3 px-2 text-center font-mono">2025</th>
                        <th className="py-3 px-2 text-center font-mono text-slate-400">2026</th>
                        <th className="py-3 px-3 text-center font-bold text-slate-900 font-mono">Total</th>
                        <th className="py-3 px-3 text-center font-mono">Avg/Paper</th>
                        <th className="py-3 px-3 text-center font-mono">Coverage</th>
                        <th className="py-3 px-3 text-center font-mono">Weightage</th>
                        <th className="py-3 px-3 text-center">Priority</th>
                        <th className="py-3 px-4 text-center">Practice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {ch.topics.map(t => (
                        <tr key={t.name} className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3 px-4">
                            <div className="font-semibold text-slate-900 text-xs">{t.name}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{t.subtopic}</div>
                          </td>
                          <td className="py-3 px-2 text-center font-mono tabular-nums text-slate-600">{t.c22}</td>
                          <td className="py-3 px-2 text-center font-mono tabular-nums text-slate-600">{t.c23}</td>
                          <td className="py-3 px-2 text-center font-mono tabular-nums text-slate-600">{t.c24}</td>
                          <td className="py-3 px-2 text-center font-mono tabular-nums text-slate-600">{t.c25}</td>
                          <td className="py-3 px-2 text-center font-mono tabular-nums text-slate-400">{t.c26}</td>
                          <td className="py-3 px-3 text-center font-mono font-bold text-indigo-700 tabular-nums">
                            {t.total}
                          </td>
                          <td className="py-3 px-3 text-center font-mono tabular-nums">
                            {t.avgPerPaper.toFixed(2)}
                          </td>
                          <td className="py-3 px-3 text-center font-mono tabular-nums">
                            {t.paperCoverage.toFixed(1)}%
                          </td>
                          <td className="py-3 px-3 text-center font-mono tabular-nums">
                            {t.subjectWeightage.toFixed(2)}%
                          </td>
                          <td className="py-3 px-3 text-center">
                            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${getPriorityStyle(t.priority)}`}>
                              {t.priority}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={() => onStartQuiz(t.name, subject)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap"
                            >
                              <Play className="w-3 h-3 fill-current" />
                              <span>JUMP TO PYQs</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}

        {filteredChapters.length === 0 && (
          <div className="p-12 bg-white rounded-2xl border border-slate-200 text-center space-y-3">
            <Search className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No matching chapters or topics found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search criteria, clearing the priority filter, or toggling between Class 11 and Class 12.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setPriorityFilter('ALL'); setClassFilter('ALL'); }}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
