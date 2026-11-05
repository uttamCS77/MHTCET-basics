import * as XLSX from 'xlsx';
import { SubjectType } from '../types';
import { PCM_ANALYSIS_DATA } from '../data/pcmData';
import { PAPER_MANIFEST } from '../data/manifest';

export function exportToExcel(focusSubject?: SubjectType) {
  const wb = XLSX.utils.book_new();

  // 1. Overview Sheet
  const overviewRows = [
    ['MHT CET 2022–2026 PCM PREVIOUS-YEAR QUESTION ANALYSIS & INTELLIGENCE REPORT'],
    ['Exam Scope', 'Maharashtra Common Entrance Test (MHT CET) - Physics, Chemistry, Mathematics'],
    ['Analyzed Years', '2022, 2023, 2024, 2025 (40 Verified Shifts Completed)'],
    ['Upcoming Exam Cycle (2026)', 'Designated strictly as N/A (Pending State CET Cell administration)'],
    ['Total Questions Analyzed', '6,000 Questions (2,000 Physics, 2,000 Chemistry, 2,000 Mathematics)'],
    ['Denominators', '2022: 11 Shifts | 2023: 12 Shifts | 2024: 13 Shifts | 2025: 4 Shifts (Total: 40)'],
    ['Class Distribution', 'Class 12 (80% Weightage) | Class 11 (20% Weightage)'],
    ['Export Generated At', new Date().toLocaleString()]
  ];
  const wsOverview = XLSX.utils.aoa_to_sheet(overviewRows);
  XLSX.utils.book_append_sheet(wb, wsOverview, 'Overview');

  const subjects: SubjectType[] = focusSubject ? [focusSubject] : ['Physics', 'Chemistry', 'Mathematics'];

  // 2. Subject-wise detailed sheets
  subjects.forEach(subj => {
    const tableRows = [
      ['Chapter', 'Class', 'Topic / Subtopic', '2022', '2023', '2024', '2025', '2026', 'Total Qs', 'Avg/Paper', 'Paper Coverage', 'Subject Weightage', 'Priority', 'Analytical Rationale']
    ];

    PCM_ANALYSIS_DATA[subj].forEach(ch => {
      ch.topics.forEach(t => {
        tableRows.push([
          ch.chapter,
          ch.classLevel,
          t.name,
          String(t.c22),
          String(t.c23),
          String(t.c24),
          String(t.c25),
          String(t.c26),
          String(t.total),
          t.avgPerPaper.toFixed(2),
          `${t.paperCoverage.toFixed(1)}%`,
          `${t.subjectWeightage.toFixed(2)}%`,
          t.priority,
          t.rationale
        ]);
      });
    });

    const wsSubj = XLSX.utils.aoa_to_sheet(tableRows);
    XLSX.utils.book_append_sheet(wb, wsSubj, subj);
  });

  // 3. Top 20 Sheets for each subject
  ['Physics', 'Chemistry', 'Mathematics'].forEach(subjName => {
    const subj = subjName as SubjectType;
    const allTopics: Array<any> = [];
    PCM_ANALYSIS_DATA[subj].forEach(ch => {
      ch.topics.forEach(t => {
        allTopics.push({ ...t, chapter: ch.chapter, classLevel: ch.classLevel });
      });
    });

    allTopics.sort((a, b) => b.total - a.total);
    const top20 = allTopics.slice(0, 20);

    const top20Rows = [
      ['Rank', 'Chapter', 'Class', 'Important Subtopic', '2022', '2023', '2024', '2025', '2026', 'Total Qs', 'Avg/Paper', 'Coverage', 'Priority', 'Why This Priority (Data-Driven)']
    ];

    top20.forEach((t, idx) => {
      top20Rows.push([
        String(idx + 1),
        t.chapter,
        t.classLevel,
        t.name,
        String(t.c22),
        String(t.c23),
        String(t.c24),
        String(t.c25),
        String(t.c26),
        String(t.total),
        t.avgPerPaper.toFixed(2),
        `${t.paperCoverage.toFixed(1)}%`,
        t.priority,
        t.rationale
      ]);
    });

    const wsTop20 = XLSX.utils.aoa_to_sheet(top20Rows);
    XLSX.utils.book_append_sheet(wb, wsTop20, `Top 20 ${subj}`);
  });

  // 4. Paper Manifest Sheet
  const manifestRows = [
    ['Exam Year', 'Date', 'Shift', 'Physics Qs', 'Chemistry Qs', 'Mathematics Qs', 'Total Questions', 'Status', 'Official Key Verification Source']
  ];
  PAPER_MANIFEST.forEach(p => {
    manifestRows.push([
      String(p.year),
      p.date,
      p.shift,
      String(p.physicsQs),
      String(p.chemistryQs),
      String(p.mathQs),
      String(p.totalQs),
      p.status,
      p.source
    ]);
  });
  const wsManifest = XLSX.utils.aoa_to_sheet(manifestRows);
  XLSX.utils.book_append_sheet(wb, wsManifest, 'Paper Coverage');

  const fileName = focusSubject 
    ? `MHT_CET_2022_2026_${focusSubject}_Intelligence.xlsx`
    : `MHT_CET_2022_2026_Complete_PCM_Intelligence.xlsx`;

  XLSX.writeFile(wb, fileName);
}

export function exportToCSV(subject: SubjectType | 'All') {
  let csvContent = 'Subject,Chapter,Class,Topic,2022,2023,2024,2025,2026,Total_Questions,Avg_Per_Paper,Paper_Coverage,Subject_Weightage,Priority,Rationale\n';

  const targetSubjects: SubjectType[] = subject === 'All' 
    ? ['Physics', 'Chemistry', 'Mathematics'] 
    : [subject];

  targetSubjects.forEach(s => {
    PCM_ANALYSIS_DATA[s].forEach(ch => {
      ch.topics.forEach(t => {
        const row = [
          s,
          `"${ch.chapter.replace(/"/g, '""')}"`,
          ch.classLevel,
          `"${t.name.replace(/"/g, '""')}"`,
          t.c22,
          t.c23,
          t.c24,
          t.c25,
          t.c26,
          t.total,
          t.avgPerPaper.toFixed(2),
          `"${t.paperCoverage.toFixed(1)}%"`,
          `"${t.subjectWeightage.toFixed(2)}%"`,
          t.priority,
          `"${t.rationale.replace(/"/g, '""')}"`
        ].join(',');
        csvContent += row + '\n';
      });
    });
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `MHT_CET_2022_2026_${subject}_Topic_Analysis.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
