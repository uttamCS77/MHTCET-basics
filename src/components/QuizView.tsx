import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Clock,
  ExternalLink,
  Shuffle,
  Filter,
  Award,
  AlertTriangle
} from 'lucide-react';
import { QuestionItem, SubjectType } from '../types';
import { getQuestionsByTopic } from '../data/questionBank';
import { MathRenderer } from './MathRenderer';

interface QuizViewProps {
  topicName: string;
  subject: SubjectType;
  onBackToAnalysis: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  topicName,
  subject,
  onBackToAnalysis
}) => {
  // Load questions
  const initialQuestions = useMemo(() => {
    return getQuestionsByTopic(topicName, subject);
  }, [topicName, subject]);

  const [questions, setQuestions] = useState<QuestionItem[]>(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isRandomized, setIsRandomized] = useState(false);
  const [yearFilter, setYearFilter] = useState<string>('ALL');
  const [showOnlyUnanswered, setShowOnlyUnanswered] = useState(false);
  const [showOnlyIncorrect, setShowOnlyIncorrect] = useState(false);

  // Timer effect
  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => {
      setTimerSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  // Handle year filter and question shuffling
  useEffect(() => {
    let list = getQuestionsByTopic(topicName, subject);

    if (yearFilter !== 'ALL') {
      list = list.filter(q => String(q.year) === yearFilter);
      if (list.length === 0) {
        list = getQuestionsByTopic(topicName, subject);
      }
    }

    if (isRandomized) {
      list = [...list].sort(() => Math.random() - 0.5);
    }

    setQuestions(list);
    setCurrentIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setIsSubmitted(false);
    setTimerSeconds(0);
  }, [topicName, subject, yearFilter, isRandomized]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optIndex
    }));
  };

  const handleClearAnswer = () => {
    if (isSubmitted) return;
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
  };

  const handleToggleReview = () => {
    setMarkedForReview(prev => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const handleRestart = () => {
    setUserAnswers({});
    setMarkedForReview({});
    setIsSubmitted(false);
    setCurrentIndex(0);
    setTimerSeconds(0);
    setShowOnlyUnanswered(false);
    setShowOnlyIncorrect(false);
  };

  // Evaluation Metrics
  const quizResults = useMemo(() => {
    if (!isSubmitted) return null;

    let score = 0;
    let totalPossible = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    questions.forEach((q, idx) => {
      totalPossible += q.marks;
      const userChoice = userAnswers[idx];
      if (userChoice === undefined) {
        unattemptedCount++;
      } else if (userChoice === q.correct_answer) {
        correctCount++;
        score += q.marks;
      } else {
        incorrectCount++;
      }
    });

    const accuracy = questions.length > 0 
      ? ((correctCount / (correctCount + incorrectCount || 1)) * 100).toFixed(1)
      : '0.0';

    return {
      score,
      totalPossible,
      correctCount,
      incorrectCount,
      unattemptedCount,
      accuracy
    };
  }, [isSubmitted, questions, userAnswers]);

  // Format timer
  const formattedTime = useMemo(() => {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, [timerSeconds]);

  const attemptedCount = Object.keys(userAnswers).length;

  return (
    <div className="space-y-6">

      {/* Top Banner & Control Deck */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <button
              onClick={onBackToAnalysis}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to {subject} Analysis</span>
            </button>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {topicName}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-800">{subject}</span>
              <span aria-hidden="true">·</span>
              <span>{questions.length} Authentic MHT CET PYQs</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" /> Official Answer Keys
              </span>
            </div>
          </div>

          {/* Timer and Action Controls */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 bg-slate-100 rounded-lg flex items-center gap-2 text-slate-700 font-mono text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{formattedTime}</span>
            </div>

            {!isSubmitted ? (
              <button
                onClick={() => setIsSubmitted(true)}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                Submit Test
              </button>
            ) : (
              <button
                onClick={handleRestart}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restart Test</span>
              </button>
            )}
          </div>
        </div>

        {/* Practice Filters & Toggles */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            {/* Year Filter */}
            <div className="flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={yearFilter}
                onChange={e => setYearFilter(e.target.value)}
                disabled={isSubmitted}
                className="py-1 px-2 border border-slate-200 rounded-md text-xs bg-white text-slate-700 disabled:opacity-50"
              >
                <option value="ALL">All Exam Years</option>
                <option value="2024">2024 Shift PYQs</option>
                <option value="2023">2023 Shift PYQs</option>
                <option value="2022">2022 Shift PYQs</option>
                <option value="2025">2025 Shift PYQs</option>
              </select>
            </div>

            {/* Randomize order */}
            <button
              onClick={() => setIsRandomized(!isRandomized)}
              disabled={isSubmitted}
              className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-colors flex items-center gap-1.5 ${
                isRandomized ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              } disabled:opacity-50`}
            >
              <Shuffle className="w-3 h-3" />
              <span>Shuffle Order</span>
            </button>
          </div>

          <div className="text-slate-500 font-medium">
            Progress: <span className="text-slate-900 font-mono font-bold">{attemptedCount}</span> of <span className="font-mono">{questions.length}</span> Attempted
          </div>
        </div>
      </div>

      {/* Main Two-Column Stage: Left (Question & Options) + Right (Palette & Result) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">

        {/* Left Column (3/4 on desktop) */}
        <div className="lg:col-span-3 space-y-6">

          {/* Question Card */}
          {currentQ ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              
              {/* Question Header Metadata */}
              <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-slate-900 px-2 py-0.5 bg-slate-100 rounded">
                    Q{currentIndex + 1}
                  </span>
                  <span>MHT CET {currentQ.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-indigo-600 font-medium">{currentQ.shift} ({currentQ.date})</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-slate-700">Marks: <strong className="text-emerald-600">+{currentQ.marks}</strong></span>
                  <button
                    onClick={handleToggleReview}
                    disabled={isSubmitted}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors border ${
                      markedForReview[currentIndex]
                        ? 'bg-amber-50 border-amber-300 text-amber-800 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    } disabled:opacity-50`}
                  >
                    {markedForReview[currentIndex] ? (
                      <>
                        <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
                        <span>Marked</span>
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                        <span>Review</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Question Body */}
              <div className="text-base sm:text-lg text-slate-900 leading-relaxed font-normal">
                <MathRenderer content={currentQ.question_text} />
              </div>

              {/* Options Stack */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((optText, optIdx) => {
                  const isSelected = userAnswers[currentIndex] === optIdx;
                  const isCorrect = currentQ.correct_answer === optIdx;

                  let borderClass = 'border-slate-200 hover:border-slate-300 bg-white';

                  if (isSubmitted) {
                    if (isCorrect) {
                      borderClass = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-semibold';
                    } else if (isSelected && !isCorrect) {
                      borderClass = 'border-rose-400 bg-rose-50/70 text-rose-950 line-through';
                    }
                  } else if (isSelected) {
                    borderClass = 'border-indigo-600 bg-indigo-50/50 text-indigo-950 ring-1 ring-indigo-600';
                  }

                  const labels = ['A', 'B', 'C', 'D'];

                  return (
                    <div
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`p-4 rounded-xl border ${borderClass} flex items-center gap-3.5 cursor-pointer transition-colors`}
                    >
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs font-mono shrink-0 ${
                        isSelected && !isSubmitted
                          ? 'bg-indigo-600 text-white'
                          : isSubmitted && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isSubmitted && isSelected && !isCorrect
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {labels[optIdx]}
                      </span>

                      <div className="text-sm text-slate-800 flex-grow">
                        <MathRenderer content={optText} inline={true} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Question Footer Actions */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  {!isSubmitted && userAnswers[currentIndex] !== undefined && (
                    <button
                      onClick={handleClearAnswer}
                      className="text-xs text-slate-400 hover:text-slate-600 font-medium"
                    >
                      Clear Selection
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
                    disabled={currentIndex === 0}
                    className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg transition-colors disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))}
                    disabled={currentIndex === questions.length - 1}
                    className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </div>

            </div>
          ) : (
            <div className="p-12 bg-white rounded-2xl border border-slate-200 text-center">
              No questions found for the selected filter criteria.
            </div>
          )}

          {/* Solution & Explanation Card (Post-Submission) */}
          {isSubmitted && currentQ && (
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Official Answer & Step-by-Step Explanation</span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-200/80 text-emerald-900 font-semibold font-mono">
                  {currentQ.answer_source}
                </span>
              </div>

              <div className="text-xs text-emerald-900 space-y-2">
                <div>
                  <strong>Correct Answer:</strong> Option {['A', 'B', 'C', 'D'][currentQ.correct_answer]} (
                  <MathRenderer content={currentQ.options[currentQ.correct_answer]} inline={true} />)
                </div>
                <div className="pt-2 leading-relaxed">
                  <strong>Derivation:</strong>
                  <div className="mt-1">
                    <MathRenderer content={currentQ.explanation} />
                  </div>
                </div>
              </div>

              {currentQ.source_url && (
                <div className="pt-3 border-t border-emerald-200/60 text-[11px] text-emerald-800 flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                  <a
                    href={currentQ.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-emerald-950"
                  >
                    Inspect original verified source paper record
                  </a>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Right Column: Palette, Stats, and Performance Result (1/4 on desktop) */}
        <div className="lg:col-span-1 space-y-4">

          {/* Result Card after test submission */}
          {isSubmitted && quizResults && (
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Test Performance</span>
              </div>

              <div className="text-center p-4 bg-slate-50 rounded-xl space-y-1">
                <div className="text-xs text-slate-500 font-medium">Final Score</div>
                <div className="text-3xl font-extrabold text-slate-900 font-mono">
                  {quizResults.score} <span className="text-sm text-slate-400">/ {quizResults.totalPossible}</span>
                </div>
                <div className="text-xs font-semibold text-emerald-700">
                  {quizResults.accuracy}% Accuracy
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Correct:
                  </span>
                  <span className="font-mono font-bold text-slate-900">{quizResults.correctCount}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="flex items-center gap-1.5 text-rose-700 font-medium">
                    <XCircle className="w-3.5 h-3.5" /> Incorrect:
                  </span>
                  <span className="font-mono font-bold text-slate-900">{quizResults.incorrectCount}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Unanswered:</span>
                  <span className="font-mono font-bold text-slate-900">{quizResults.unattemptedCount}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Time Taken:</span>
                  <span className="font-mono font-bold text-slate-900">{formattedTime}</span>
                </div>
              </div>
            </div>
          )}

          {/* Question Palette Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Question Palette</span>
              <span className="font-mono text-slate-500">{attemptedCount}/{questions.length} Attempted</span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = userAnswers[idx] !== undefined;
                const isMarked = !!markedForReview[idx];

                let bgClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200';

                if (isSubmitted) {
                  if (userAnswers[idx] === q.correct_answer) {
                    bgClass = 'bg-emerald-600 text-white font-bold';
                  } else if (isAnswered) {
                    bgClass = 'bg-rose-600 text-white font-bold';
                  } else {
                    bgClass = 'bg-slate-200 text-slate-600';
                  }
                } else if (isMarked) {
                  bgClass = 'bg-amber-500 text-white font-bold';
                } else if (isAnswered) {
                  bgClass = 'bg-indigo-600 text-white font-bold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg text-xs font-mono transition-all flex items-center justify-center ${bgClass} ${
                      isCurrent ? 'ring-2 ring-indigo-500 ring-offset-2' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-slate-100 text-[11px] space-y-1.5 text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-indigo-600"></span>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-amber-500"></span>
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-slate-200"></span>
                <span>Unattempted</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
