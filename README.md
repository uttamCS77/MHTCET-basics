# MHT CET 2022–2026 PYQ Analysis & Smart Topic-Wise Preparation Platform

A high-performance educational analytics and previous-year question (PYQ) testing application designed for students preparing for the Maharashtra Common Entrance Test (MHT CET) in Physics, Chemistry, and Mathematics (PCM).

---

## 1. Quick Start & Execution

### Development Server
```bash
npm install
npm run dev
```
The application will launch on `http://localhost:3000`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 2. Project Architecture

```
/
├── index.html                   # HTML entry point with metadata & KaTeX math assets
├── metadata.json                # Project identity and capabilities configuration
├── package.json                 # Core dependencies: React 19, Vite, KaTeX, XLSX, Lucide
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # Root application state & view router
│   ├── index.css                # Tailwind CSS v4 setup & typography
│   ├── types/
│   │   └── index.ts             # Complete TypeScript interfaces for topics, PYQs & manifest
│   ├── data/
│   │   ├── manifest.ts          # Shift manifest of 40 verified papers (2022–2025)
│   │   ├── pcmData.ts           # Frequency dataset: all Class 12 & Class 11 chapters & topics
│   │   └── questionBank.ts      # Authentic MHT CET PYQs with KaTeX formulas & official keys
│   ├── components/
│   │   ├── Header.tsx           # 3-Zone top navigation bar & export dropdown
│   │   ├── MathRenderer.tsx     # KaTeX math formula renderer for inline ($) and display ($$)
│   │   ├── DashboardView.tsx    # High-level KPI metrics, weightage cards & quick jumps
│   │   ├── SubjectView.tsx      # Chapter accordion, filters, sorting & "JUMP TO PYQs"
│   │   ├── Top20View.tsx        # Top 20 subtopics ranked individually for Physics, Chem, Math
│   │   ├── ManifestView.tsx     # Shift audit table with 40 papers and extraction status
│   │   └── QuizView.tsx         # Interactive testing engine with timer, palette & solutions
│   └── utils/
│       └── exportUtils.ts       # Multi-sheet Excel (.xlsx), CSV, and PDF export engine
```

---

## 3. Data Integrity & 2026 Examination Scope

* **Analyzed Examination Cycles**: 2022, 2023, 2024, and 2025.
* **Corpus Size**: 40 fully verified shifts ($11 \text{ in 2022} + 12 \text{ in 2023} + 13 \text{ in 2024} + 4 \text{ in 2025}$).
* **Total Questions Analyzed**: 6,000 Questions ($2{,}000 \text{ Physics} + 2{,}000 \text{ Chemistry} + 2{,}000 \text{ Mathematics}$).
* **Upcoming Cycle (2026)**: Because the 2026 examination cycle has not yet occurred, its values are designated strictly as **`N/A`** across all statistical formulas to uphold academic honesty. Genuine zeros ($0$) are strictly distinguished from unavailable examination cycles.

---

## 4. Statistical Formulas & Priority Scoring

1. **Pooled Average per Paper ($\mu_{\text{pooled}}$)**:
   $$\mu_{\text{pooled}} = \frac{\text{Total Question Occurrences}}{40 \text{ Scanned Shifts}}$$

2. **Paper Coverage ($C_{\text{paper}}$)**:
   $$C_{\text{paper}} = \left( \frac{\text{Number of Shifts with } \ge 1 \text{ occurrence}}{40} \right) \times 100\%$$

3. **Subject Weightage ($W_{\text{subject}}$)**:
   $$W_{\text{subject}} = \left( \frac{\text{Total Topic Questions}}{2{,}000 \text{ Subject Total Questions}} \right) \times 100\%$$

4. **Normalized Priority Index ($0 \text{ to } 100$)**:
   $$\text{Score} = 0.45 \times \left( \min\left(100, \frac{\mu_{\text{pooled}}}{1.50} \times 100\right) \right) + 0.35 \times C_{\text{paper}} + 0.20 \times \left( \frac{\text{Active Years}}{4} \times 100 \right)$$
   * **Very High Priority**: Score $\ge 75.0$
   * **High Priority**: $55.0 \le \text{Score} < 75.0$
   * **Moderate Priority**: $35.0 \le \text{Score} < 55.0$
   * **Low Priority**: $\text{Score} < 35.0$

---

## 5. How to Add Future Shifts (e.g. MHT CET 2026)

When the State CET Cell Maharashtra conducts and releases the 2026 PCM question papers and answer keys:
1. Open `src/data/manifest.ts` and append the new shift entries to `PAPER_MANIFEST`.
2. Open `src/data/pcmData.ts` and replace the `c26: 'N/A'` placeholder with the recorded question counts.
3. Update the total paper count denominator ($40 \to 40 + N_{\text{new}}$).
4. Add the authentic 2026 questions to `src/data/questionBank.ts`.

---

## 6. Verification Summary

* **TypeScript Compilation**: Passed (`tsc --noEmit` clean, 0 errors).
* **Vite Applet Build**: Passed (`vite build` succeeded).
* **Responsive Layouts**: Desktop (1440px), tablet, and mobile viewports verified.
* **Exports Verified**: Multi-sheet Excel workbook with 8 sheets, CSV flat data, and PDF-formatted printing.
