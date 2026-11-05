import React from 'react';
import { ArrowRight, BookOpen, Layers, Target, CheckCircle2, AlertCircle } from 'lucide-react';
import { SubjectType } from '../types';
import { PCM_ANALYSIS_DATA } from '../data/pcmData';

interface DashboardViewProps {
  onSelectSubject: (subject: SubjectType) => void;
  onNavigateTop20: () => void;
  onStartQuiz: (topicName: string, subject: SubjectType) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onSelectSubject,
  onNavigateTop20,
  onStartQuiz
}) => {
  return (
    <div className="space-y-10">

      {/* Hero Briefing Strip */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Official Examination Corpus</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" /> 40 Verified Shifts
            </span>
            <span aria-hidden="true">·</span>
            <span>2022–2026 Scope</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
            MHT CET Previous-Year Question Frequency & Weightage Intelligence
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Data-backed analysis across Physics, Chemistry, and Mathematics. Every frequency count, average per paper, and paper coverage metric is derived from actual shift-by-shift examination records.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onSelectSubject('Physics')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2"
            >
              <span>Explore Physics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectSubject('Chemistry')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2"
            >
              <span>Explore Chemistry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectSubject('Mathematics')}
              className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2"
            >
              <span>Explore Mathematics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onNavigateTop20}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
            >
              View Top 20 Subtopics
            </button>
          </div>
        </div>

        {/* 2026 Scope Notice */}
        <div className="mt-6 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800">2026 Examination Status Notice:</strong> As MHT CET 2026 has not yet been administered by the State Common Entrance Test Cell, Maharashtra, its question count fields are designated as <code className="px-1 py-0.5 bg-slate-200 rounded text-slate-900 font-mono">N/A</code> across all statistical calculations to maintain authentic data integrity. Genuine zeros (<code className="font-mono">0</code>) are strictly distinguished from pending examination cycles.
          </div>
        </div>
      </section>

      {/* Primary KPI Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Scanned Examination Shifts</div>
          <div className="text-3xl font-extrabold text-slate-900 mt-1 font-mono tabular-nums">40</div>
          <div className="text-[11px] text-slate-500 mt-1">11 ('22) · 12 ('23) · 13 ('24) · 4 ('25)</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Analyzed PCM Questions</div>
          <div className="text-3xl font-extrabold text-indigo-600 mt-1 font-mono tabular-nums">6,000</div>
          <div className="text-[11px] text-slate-500 mt-1">2,000 per Subject Section</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Mapped Chapters</div>
          <div className="text-3xl font-extrabold text-slate-900 mt-1 font-mono tabular-nums">47</div>
          <div className="text-[11px] text-slate-500 mt-1">Class 12 (80%) + Class 11 (20%)</div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Granular Subtopics</div>
          <div className="text-3xl font-extrabold text-slate-900 mt-1 font-mono tabular-nums">147</div>
          <div className="text-[11px] text-slate-500 mt-1">With 5-Year Frequency Metrics</div>
        </div>
      </section>

      {/* Subject Section Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Subject Overview & High-Yield Topics</h2>
          <span className="text-xs text-slate-500">MHT CET Syllabus Blueprint</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Physics Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Section 1</span>
                <span className="text-xs text-slate-400">50 Questions / Shift</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Physics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strong focus on mechanics, electromagnetism, and wave optics with formula-oriented calculations.
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Top Frequency Topic:</span>
                  <span className="font-semibold text-slate-800">Moment of Inertia</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">5-Year Occurrences:</span>
                  <span className="font-mono font-bold text-indigo-600">81 Qs (2.03/paper)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Paper Coverage:</span>
                  <span className="font-mono font-bold text-slate-800">92.5%</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2">
              <button
                onClick={() => onSelectSubject('Physics')}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                View Chapter Breakdown
              </button>
            </div>
          </div>

          {/* Chemistry Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Section 2</span>
                <span className="text-xs text-slate-400">50 Questions / Shift</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Chemistry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dominated by first order kinetics, colligative properties, coordinate nomenclature, and organic named reactions.
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Top Frequency Topic:</span>
                  <span className="font-semibold text-slate-800">1st Order Kinetics</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">5-Year Occurrences:</span>
                  <span className="font-mono font-bold text-emerald-600">83 Qs (2.08/paper)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Paper Coverage:</span>
                  <span className="font-mono font-bold text-slate-800">95.0%</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2">
              <button
                onClick={() => onSelectSubject('Chemistry')}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                View Chapter Breakdown
              </button>
            </div>
          </div>

          {/* Mathematics Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Section 3</span>
                <span className="text-xs text-slate-400">50 Qs · 100 Marks (2x Weight)</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Mathematics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Critical scoring differentiator; calculus, matrices, vectors, and mathematical logic form the dominant yield.
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Top Frequency Topic:</span>
                  <span className="font-semibold text-slate-800">Definite Integrals (King)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">5-Year Occurrences:</span>
                  <span className="font-mono font-bold text-sky-600">91 Qs (2.28/paper)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Paper Coverage:</span>
                  <span className="font-mono font-bold text-slate-800">97.5%</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2">
              <button
                onClick={() => onSelectSubject('Mathematics')}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                View Chapter Breakdown
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Jump: Top 5 Highest Yield Topics Nationwide */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">High-Yield Quick Practice</h3>
            <p className="text-xs text-slate-500">Instant jump to previous year questions from the top recurring subtopics</p>
          </div>
          <button
            onClick={onNavigateTop20}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>See All Top 20 Lists</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { name: 'Properties of Definite Integrals (King Property)', subj: 'Mathematics' as SubjectType, total: 91, avg: 2.28, ch: 'Definite Integration' },
            { name: 'Inverse of Matrix by Adjoint Method & System Equations', subj: 'Mathematics' as SubjectType, total: 84, avg: 2.10, ch: 'Matrices' },
            { name: 'Integrated Rate Law for 1st Order Reactions & Half-Life', subj: 'Chemistry' as SubjectType, total: 83, avg: 2.08, ch: 'Chemical Kinetics' },
            { name: 'Moment of Inertia & Parallel/Perpendicular Axes', subj: 'Physics' as SubjectType, total: 81, avg: 2.03, ch: 'Rotational Dynamics' },
            { name: 'Logical Equivalence, Truth Tables & Statement Negations', subj: 'Mathematics' as SubjectType, total: 81, avg: 2.03, ch: 'Mathematical Logic' },
            { name: 'Derivative of Inverse Trigonometric & Parametric Forms', subj: 'Mathematics' as SubjectType, total: 77, avg: 1.93, ch: 'Differentiation' },
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] text-slate-500 truncate">{item.subj} · {item.ch}</div>
                <div className="text-xs font-semibold text-slate-900 truncate">{item.name}</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">{item.total} Qs · {item.avg.toFixed(2)} / paper</div>
              </div>
              <button
                onClick={() => onStartQuiz(item.name, item.subj)}
                className="shrink-0 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-semibold rounded-md shadow-sm transition-colors whitespace-nowrap"
              >
                Jump to PYQs
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Transparent Scoring Explainer */}
      <section className="bg-slate-100 rounded-2xl p-6 text-xs text-slate-600 space-y-3">
        <h3 className="font-bold text-slate-800 text-sm">Statistical Metrics & Priority Index Methodology</h3>
        <p className="leading-relaxed">
          Every priority level is generated using a normalized 0–100 index based strictly on verifiable frequency data across the 40 shifts:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-[11px] bg-white p-4 rounded-xl border border-slate-200">
          <div>
            <div className="font-bold text-slate-800">1. Five-Year Pooled Average (45%)</div>
            <div className="text-slate-500 mt-1">Total Occurrences / 40 Shifts</div>
          </div>
          <div>
            <div className="font-bold text-slate-800">2. Paper Coverage (35%)</div>
            <div className="text-slate-500 mt-1">% of shifts with ≥ 1 occurrence</div>
          </div>
          <div>
            <div className="font-bold text-slate-800">3. Multi-Year Consistency (20%)</div>
            <div className="text-slate-500 mt-1">Appearance across 2022–2025</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-1 text-[11px]">
          <span><strong className="text-red-700">Very High:</strong> Score ≥ 75.0 (Mandatory high-yield focus)</span>
          <span><strong className="text-orange-700">High:</strong> 55.0 – 74.9 (Tested in majority of shifts)</span>
          <span><strong className="text-amber-700">Moderate:</strong> 35.0 – 54.9 (Periodic occurrences)</span>
          <span><strong className="text-slate-600">Low:</strong> &lt; 35.0 (Infrequent appearances)</span>
        </div>
      </section>

    </div>
  );
};
