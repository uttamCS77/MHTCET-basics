import React, { useState, useMemo } from 'react';
import { Play, Award, HelpCircle } from 'lucide-react';
import { SubjectType, PriorityLevel } from '../types';
import { PCM_ANALYSIS_DATA } from '../data/pcmData';

interface Top20ViewProps {
  onStartQuiz: (topicName: string, subject: SubjectType) => void;
}

export const Top20View: React.FC<Top20ViewProps> = ({ onStartQuiz }) => {
  const [activeTab, setActiveTab] = useState<SubjectType>('Physics');

  const top20Data = useMemo(() => {
    const allTopics: Array<any> = [];
    PCM_ANALYSIS_DATA[activeTab].forEach(ch => {
      ch.topics.forEach(t => {
        allTopics.push({
          ...t,
          chapter: ch.chapter,
          classLevel: ch.classLevel
        });
      });
    });

    // Rank by total occurrences descending
    allTopics.sort((a, b) => b.total - a.total);
    return allTopics.slice(0, 20);
  }, [activeTab]);

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

      {/* Header and Subject Switcher */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Statistical Examination Leaders</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
              Top 20 Most Frequent Subtopics
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Ranked across 40 MHT CET PCM shifts (2022–2025). 20 subtopics ranked individually for each subject.
            </p>
          </div>

          {/* Subject Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            {(['Physics', 'Chemistry', 'Mathematics'] as SubjectType[]).map(s => (
              <button
                key={s}
                onClick={() => setActiveTab(s)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === s
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Top 20 {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Top 20 Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100/80 text-slate-700 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-3 text-center font-mono">Rank</th>
                <th className="py-3.5 px-3">Chapter</th>
                <th className="py-3.5 px-4 min-w-[220px]">Subtopic</th>
                <th className="py-3.5 px-2 text-center font-mono">2022</th>
                <th className="py-3.5 px-2 text-center font-mono">2023</th>
                <th className="py-3.5 px-2 text-center font-mono">2024</th>
                <th className="py-3.5 px-2 text-center font-mono">2025</th>
                <th className="py-3.5 px-2 text-center font-mono text-slate-400">2026</th>
                <th className="py-3.5 px-3 text-center font-bold text-slate-900 font-mono">Total</th>
                <th className="py-3.5 px-3 text-center font-mono">Avg/Paper</th>
                <th className="py-3.5 px-3 text-center font-mono">Coverage</th>
                <th className="py-3.5 px-3 text-center">Priority</th>
                <th className="py-3.5 px-4 min-w-[240px]">Data-Driven Rationale</th>
                <th className="py-3.5 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {top20Data.map((item, idx) => (
                <tr key={item.name} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-3 text-center font-mono font-bold text-slate-900">
                    <span className={`inline-block w-6 h-6 rounded-md leading-6 text-center text-xs ${
                      idx < 3 ? 'bg-amber-100 text-amber-900 font-extrabold' : 'bg-slate-100 text-slate-700'
                    }`}>
                      #{idx + 1}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-900 whitespace-nowrap">
                    <div>{item.chapter}</div>
                    <div className="text-[10px] text-slate-400 font-normal">{item.classLevel}</div>
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-900">
                    <div>{item.name}</div>
                  </td>
                  <td className="py-3 px-2 text-center font-mono tabular-nums text-slate-600">{item.c22}</td>
                  <td className="py-3 px-2 text-center font-mono tabular-nums text-slate-600">{item.c23}</td>
                  <td className="py-3 px-2 text-center font-mono tabular-nums text-slate-600">{item.c24}</td>
                  <td className="py-3 px-2 text-center font-mono tabular-nums text-slate-600">{item.c25}</td>
                  <td className="py-3 px-2 text-center font-mono tabular-nums text-slate-400">{item.c26}</td>
                  <td className="py-3 px-3 text-center font-mono font-bold text-indigo-700 tabular-nums">
                    {item.total}
                  </td>
                  <td className="py-3 px-3 text-center font-mono tabular-nums font-semibold">
                    {item.avgPerPaper.toFixed(2)}
                  </td>
                  <td className="py-3 px-3 text-center font-mono tabular-nums">
                    {item.paperCoverage.toFixed(1)}%
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${getPriorityStyle(item.priority)}`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[11px] text-slate-600 leading-relaxed">
                    {item.rationale}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => onStartQuiz(item.name, activeTab)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Attempt PYQs</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
