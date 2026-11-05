export type SubjectType = 'Physics' | 'Chemistry' | 'Mathematics';

export type PriorityLevel = 'Very High' | 'High' | 'Moderate' | 'Low';

export interface TopicFrequency {
  name: string;
  subtopic: string;
  c22: number;
  c23: number;
  c24: number;
  c25: number;
  c26: string | number; // 'N/A' for 2026 pending exam
  total: number;
  avgPerPaper: number;
  paperCoverage: number; // percentage, e.g. 92.5
  subjectWeightage: number; // percentage of subject total questions
  priority: PriorityLevel;
  uniqueQuestions: number;
  totalOccurrences: number;
  rationale: string;
}

export interface ChapterData {
  chapter: string;
  classLevel: 'Class 12' | 'Class 11';
  topics: TopicFrequency[];
  totalQuestions: number;
}

export interface QuestionItem {
  id: string;
  year: number | string;
  exam: string;
  date: string;
  shift: string;
  subject: SubjectType;
  chapter: string;
  topic: string;
  subtopic: string;
  question_text: string;
  options: string[];
  correct_answer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  answer_source: 'Official State CET Cell Key' | 'Independently Verified' | 'Answer not verified';
  explanation: string;
  source_url: string;
  duplicate_group_id?: string;
  marks: number;
}

export interface PaperManifestItem {
  year: number;
  date: string;
  shift: string;
  physicsQs: number;
  chemistryQs: number;
  mathQs: number;
  totalQs: number;
  status: 'Verified' | 'Pending Exam Administration';
  source: string;
}
