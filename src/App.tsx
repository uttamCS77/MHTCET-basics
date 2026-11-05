import React, { useState } from 'react';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { SubjectView } from './components/SubjectView';
import { Top20View } from './components/Top20View';
import { ManifestView } from './components/ManifestView';
import { QuizView } from './components/QuizView';
import { SubjectType } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<'dashboard' | 'subject' | 'top20' | 'manifest' | 'quiz'>('dashboard');
  const [activeSubject, setActiveSubject] = useState<SubjectType>('Physics');
  const [quizTopic, setQuizTopic] = useState<string>('Moment of Inertia & Parallel/Perpendicular Axes');

  const handleNavigate = (view: 'dashboard' | 'subject' | 'top20' | 'manifest', subject?: SubjectType) => {
    if (subject) {
      setActiveSubject(subject);
    }
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubject = (subject: SubjectType) => {
    setActiveSubject(subject);
    setActiveView('subject');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = (topicName: string, subject: SubjectType) => {
    setQuizTopic(topicName);
    setActiveSubject(subject);
    setActiveView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      
      {/* Top Bar Navigation */}
      <Header
        activeView={activeView}
        activeSubject={activeSubject}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === 'dashboard' && (
          <DashboardView
            onSelectSubject={handleSelectSubject}
            onNavigateTop20={() => { setActiveView('top20'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {activeView === 'subject' && (
          <SubjectView
            subject={activeSubject}
            onSelectSubject={setActiveSubject}
            onStartQuiz={handleStartQuiz}
          />
        )}

        {activeView === 'top20' && (
          <Top20View
            onStartQuiz={handleStartQuiz}
          />
        )}

        {activeView === 'manifest' && (
          <ManifestView />
        )}

        {activeView === 'quiz' && (
          <QuizView
            topicName={quizTopic}
            subject={activeSubject}
            onBackToAnalysis={() => { setActiveView('subject'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">MHT CET Preparation Engine</span>
            <span aria-hidden="true">·</span>
            <span>2022–2026 Academic Research Corpus</span>
          </div>
          <div className="text-center sm:text-right text-slate-400">
            Data sourced from official State Common Entrance Test Cell Maharashtra shift keys & ExamSide archival records.<br />
            2026 examination statistics are designated N/A pending administration.
          </div>
        </div>
      </footer>

    </div>
  );
}
