import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Database, Filter } from 'lucide-react';
import { PAPER_MANIFEST, MANIFEST_SUMMARY } from '../data/manifest';

export const ManifestView: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('ALL');

  const filteredShifts = selectedYear === 'ALL'
    ? PAPER_MANIFEST
    : PAPER_MANIFEST.filter(p => String(p.year) === selectedYear);

  return (
    <div className="space-y-6">

      {/* Audit Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full Audit Trail & Paper Manifest</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
              MHT CET Scanned Shifts Manifest (2022–2026)
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Every paper and shift verified against State CET Cell Maharashtra answer keys and master examination papers.
            </p>
          </div>

          {/* Year Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              className="py-1.5 px-3 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="ALL">All Years (2022–2025)</option>
              <option value="2022">2022 Shifts (11)</option>
              <option value="2023">2023 Shifts (12)</option>
              <option value="2024">2024 Shifts (13)</option>
              <option value="2025">2025 Shifts (4)</option>
            </select>
          </div>
        </div>

        {/* Audit Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-3 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl">
            <div className="text-[10px] text-slate-400 font-semibold uppercase">Total Shifts</div>
            <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">{MANIFEST_SUMMARY.totalPapersScanned}</div>
            <div className="text-[10px] text-emerald-600 font-medium mt-0.5">100% Scanned</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <div className="text-[10px] text-slate-400 font-semibold uppercase">Physics Qs</div>
            <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">{MANIFEST_SUMMARY.totalPhysicsQs}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">50 Qs / Shift</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <div className="text-[10px] text-slate-400 font-semibold uppercase">Chemistry Qs</div>
            <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">{MANIFEST_SUMMARY.totalChemistryQs}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">50 Qs / Shift</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <div className="text-[10px] text-slate-400 font-semibold uppercase">Mathematics Qs</div>
            <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">{MANIFEST_SUMMARY.totalMathematicsQs}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">50 Qs / Shift</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <div className="text-[10px] text-slate-400 font-semibold uppercase">Total Extracted</div>
            <div className="text-xl font-bold text-indigo-600 font-mono mt-0.5">{MANIFEST_SUMMARY.totalQuestions}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">PCM Total Corpus</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <div className="text-[10px] text-slate-400 font-semibold uppercase">2026 Cycle</div>
            <div className="text-xl font-bold text-amber-600 font-mono mt-0.5">N/A</div>
            <div className="text-[10px] text-amber-700 font-medium mt-0.5">Pending Session</div>
          </div>
        </div>
      </div>

      {/* Manifest Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100/80 text-slate-700 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 font-mono">Exam Year</th>
                <th className="py-3 px-4">Exam Date</th>
                <th className="py-3 px-4">Shift Designation</th>
                <th className="py-3 px-3 text-center font-mono">Physics</th>
                <th className="py-3 px-3 text-center font-mono">Chemistry</th>
                <th className="py-3 px-3 text-center font-mono">Mathematics</th>
                <th className="py-3 px-4 text-center font-mono font-bold">Total Qs</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4">Verification Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredShifts.map((p, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{p.year}</td>
                  <td className="py-2.5 px-4 text-slate-800">{p.date}</td>
                  <td className="py-2.5 px-4 font-semibold text-indigo-700">{p.shift}</td>
                  <td className="py-2.5 px-3 text-center font-mono text-slate-600">{p.physicsQs}</td>
                  <td className="py-2.5 px-3 text-center font-mono text-slate-600">{p.chemistryQs}</td>
                  <td className="py-2.5 px-3 text-center font-mono text-slate-600">{p.mathQs}</td>
                  <td className="py-2.5 px-4 text-center font-mono font-bold text-slate-900">{p.totalQs}</td>
                  <td className="py-2.5 px-4 text-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{p.status}</span>
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-[11px] text-slate-500 font-mono">
                    {p.source}
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
