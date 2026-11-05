import React, { useState, useRef, useEffect } from 'react';
import { Download, ChevronDown, FileSpreadsheet, FileText, Printer } from 'lucide-react';
import { SubjectType } from '../types';
import { exportToExcel, exportToCSV } from '../utils/exportUtils';

interface HeaderProps {
  activeView: 'dashboard' | 'subject' | 'top20' | 'manifest' | 'quiz';
  activeSubject: SubjectType;
  onNavigate: (view: 'dashboard' | 'subject' | 'top20' | 'manifest', subject?: SubjectType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, activeSubject, onNavigate }) => {
  const [exportOpen, setExportOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExportOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8 h-16">
        
        {/* Zone 1: Single element wordmark */}
        <button
          onClick={() => onNavigate('dashboard')}
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2 hover:text-indigo-600 transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-extrabold text-sm shadow-sm">
            CET
          </span>
          <span>MHT CET PCM Analytics</span>
        </button>

        {/* Zone 2: Concise navigation links (single line, whitespace-nowrap) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`whitespace-nowrap shrink-0 transition-colors ${
              activeView === 'dashboard' ? 'text-indigo-600 font-semibold' : 'hover:text-slate-900'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => onNavigate('subject', 'Physics')}
            className={`whitespace-nowrap shrink-0 transition-colors ${
              activeView === 'subject' && activeSubject === 'Physics' ? 'text-indigo-600 font-semibold' : 'hover:text-slate-900'
            }`}
          >
            Physics
          </button>
          <button
            onClick={() => onNavigate('subject', 'Chemistry')}
            className={`whitespace-nowrap shrink-0 transition-colors ${
              activeView === 'subject' && activeSubject === 'Chemistry' ? 'text-indigo-600 font-semibold' : 'hover:text-slate-900'
            }`}
          >
            Chemistry
          </button>
          <button
            onClick={() => onNavigate('subject', 'Mathematics')}
            className={`whitespace-nowrap shrink-0 transition-colors ${
              activeView === 'subject' && activeSubject === 'Mathematics' ? 'text-indigo-600 font-semibold' : 'hover:text-slate-900'
            }`}
          >
            Mathematics
          </button>
          <button
            onClick={() => onNavigate('top20')}
            className={`whitespace-nowrap shrink-0 transition-colors ${
              activeView === 'top20' ? 'text-indigo-600 font-semibold' : 'hover:text-slate-900'
            }`}
          >
            Top 20 Rankings
          </button>
          <button
            onClick={() => onNavigate('manifest')}
            className={`whitespace-nowrap shrink-0 transition-colors ${
              activeView === 'manifest' ? 'text-indigo-600 font-semibold' : 'hover:text-slate-900'
            }`}
          >
            Paper Manifest
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="relative shrink-0" ref={dropdownRef}>
          <button
            onClick={() => setExportOpen(!exportOpen)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Analysis</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {exportOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-xs">
              <div className="px-3 py-1 font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                Excel Workbooks (.xlsx)
              </div>
              <button
                onClick={() => { exportToExcel(); setExportOpen(false); }}
                className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 font-medium"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <span>Complete PCM Analysis (All Sheets)</span>
              </button>
              <button
                onClick={() => { exportToExcel('Physics'); setExportOpen(false); }}
                className="w-full text-left px-3 py-1.5 hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 pl-9"
              >
                <span>Physics Only (.xlsx)</span>
              </button>
              <button
                onClick={() => { exportToExcel('Chemistry'); setExportOpen(false); }}
                className="w-full text-left px-3 py-1.5 hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 pl-9"
              >
                <span>Chemistry Only (.xlsx)</span>
              </button>
              <button
                onClick={() => { exportToExcel('Mathematics'); setExportOpen(false); }}
                className="w-full text-left px-3 py-1.5 hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 pl-9"
              >
                <span>Mathematics Only (.xlsx)</span>
              </button>

              <div className="border-t border-slate-100 my-1"></div>

              <div className="px-3 py-1 font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                Raw CSV Data
              </div>
              <button
                onClick={() => { exportToCSV('All'); setExportOpen(false); }}
                className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 font-medium"
              >
                <FileText className="w-4 h-4 text-sky-600" />
                <span>Download All Data (.csv)</span>
              </button>

              <div className="border-t border-slate-100 my-1"></div>

              <button
                onClick={() => { window.print(); setExportOpen(false); }}
                className="w-full text-left px-3 py-2 hover:bg-slate-50 flex items-center gap-2.5 text-slate-700 font-medium"
              >
                <Printer className="w-4 h-4 text-rose-600" />
                <span>Print / Save as PDF Report</span>
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Mobile secondary nav strip */}
      <div className="lg:hidden flex items-center gap-1 overflow-x-auto px-4 py-2 border-t border-slate-100 text-xs">
        <button
          onClick={() => onNavigate('dashboard')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeView === 'dashboard' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => onNavigate('subject', 'Physics')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeView === 'subject' && activeSubject === 'Physics' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600'
          }`}
        >
          Physics
        </button>
        <button
          onClick={() => onNavigate('subject', 'Chemistry')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeView === 'subject' && activeSubject === 'Chemistry' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600'
          }`}
        >
          Chemistry
        </button>
        <button
          onClick={() => onNavigate('subject', 'Mathematics')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeView === 'subject' && activeSubject === 'Mathematics' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600'
          }`}
        >
          Mathematics
        </button>
        <button
          onClick={() => onNavigate('top20')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeView === 'top20' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600'
          }`}
        >
          Top 20
        </button>
        <button
          onClick={() => onNavigate('manifest')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeView === 'manifest' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600'
          }`}
        >
          Manifest
        </button>
      </div>
    </header>
  );
};
