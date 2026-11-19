// Grade breakdowns, transcribed from Canvas grade printouts (UF_Courses/, not published).
//
// Keyed by the `data-g` attribute on each course row in the page.
//   total       final Canvas percentage (may exceed 100 with extra credit)
//   exams       [name, score, maxPoints, stats?]   (section heading: examsLabel, default "Exams")
//               stats = [low, lowerQuartile, median, upperQuartile, high, mean] for the class
//   categories  [name, percent]
//   notes       short footnotes
window.GRADES = {
  // ---------- Fall 2023 ----------
  COP3504C: {
    total: 98.29,
    exams: [
      ["Midterm (Python)", 105, 100],
      ["Midterm (C++)", 91.5, 100],
      ["Final exam", 90.42, 100],
    ],
    categories: [["Labs", 100.5], ["Projects", 100.25], ["Quizzes", 94], ["Exams", 95.64]],
    notes: ["Class statistics weren't published for these exams."],
  },
  COT3100: {
    total: 99.18,
    exams: [
      ["Exam 1", 120, 120, [63.94, 110, 116.7, 120, 120, 113.34]],
      ["Exam 2", 120, 120, [0, 107.93, 115, 120, 120, 111.47]],
    ],
    categories: [["Homework", 98.98], ["Exams", 100]],
  },
  MAC2313: {
    total: 104.38,
    exams: [
      ["Exam 1", 106, 100, [0, 72, 84, 94, 106, 82.31]],
      ["Exam 2", 102.5, 100, [0, 80, 91, 98, 106, 87.56]],
      ["Exam 3", 99.5, 100, [0, 74.5, 88, 99.5, 106, 84.16]],
      ["Final exam", 102, 100, [0, 66, 84, 96, 108, 78.79]],
    ],
    categories: [["Semester exams", 102.67], ["Final exam", 102], ["Online homework", 98.75], ["Quizzes", 100], ["Lecture quizzes", 100], ["Participation", 100]],
    notes: ["Total includes extra credit."],
  },

  // ---------- Spring 2024 ----------
  CDA3101: {
    total: 98.9,
    exams: [
      ["Examlet 1", 40.1, 40.1, [0, 28.43, 35.1, 40.1, 40.1, 32.69]],
      ["Examlet 2", 40.1, 40.1, [0, 32.1, 36.1, 39.1, 40.1, 34.69]],
      ["Examlet 3", 40, 40, [0, 30, 35, 40, 40, 34.22]],
      ["Examlet 4", 37.1, 40.1, [0, 30.73, 35.1, 38.1, 40.1, 33.59]],
      ["Examlet 5", 40.1, 40.1, [0, 27.1, 32.6, 37.1, 40.1, 30.93]],
      ["Final exam", 97.5, 100, [0, 77.13, 85.5, 91, 100, 83.11]],
    ],
    categories: [["Examlets", 100], ["Programming assignments", 100], ["Buffer overflow", 99], ["Cache simulation", 95], ["Final exam", 97.5], ["Participation", 100]],
    notes: ["A 40/40 makeup examlet replaced Examlet 4 in the Examlets total."],
  },
  COP3530: {
    total: 102.59,
    exams: [
      ["Exam 1", 101, 100, [0, 67, 78.5, 87.25, 102, 75.98]],
      ["Final exam", 98.5, 100, [0, 72.05, 81.33, 88.54, 100, 77.98]],
    ],
    categories: [["Programming quizzes", 99.38], ["Conceptual quizzes", 100], ["Project 1", 100], ["Project 2", 100], ["Final project", 100], ["Discussion", 100]],
    notes: ["Total includes extra credit."],
  },
  MHF3202: {
    total: 93.57,
    exams: [
      ["Exam A", 496, 485, [0, 279, 417, 479.5, 522, 368.68]],
      ["Exam B", 434, 505, [0, 357, 376, 425, 486, 372.95]],
      ["Exam C", 190, 215, [0, 131.5, 177, 194, 220, 157.84]],
    ],
    categories: [["Exams", 92.95], ["Microquizzes", 97.78]],
    notes: ["Exams A and B each combined a take-home and an in-class portion; Exam C was in-class only."],
  },

  // ---------- Fall 2024 ----------
  COP4600: {
    total: 96.66,
    exams: [
      ["Midterm exam", 142.32, 150, [0, 113.83, 125.75, 134.77, 150, 121.83]],
      ["Final exam", 148.83, 180, [0, 130.75, 141.83, 151.95, 173, 137.12]],
    ],
    categories: [["Quizzes", 98.18], ["Exercises", 100], ["Projects", 90.33], ["Midterm exam", 94.88], ["Final exam", 82.69], ["Professionalism", 100]],
  },
  MAS4105: {
    total: 93.41,
    exams: [
      ["Midterm 1 (take-home)", 29, 30, [19, 21.5, 27, 28.5, 30, 25.43]],
      ["Midterm 1 (in-class)", 37, 40, [16, 23, 28, 32.5, 39, 27.61]],
      ["Midterm 2 (take-home)", 30, 30, [20, 28, 30, 30, 30, 28.7]],
      ["Midterm 2 (in-class)", 33, 40, [11, 20, 27, 31, 40, 26.17]],
      ["Final exam", 80, 85, [26, 45, 53, 64.5, 84, 54.35]],
    ],
    categories: [["Homework", 93.75], ["Quizzes", 95], ["Midterms", 92.14], ["Final exam", 94.12]],
  },
  MAS4301: {
    total: 64.53,
    exams: [
      ["Test 1", 1, 3, [0, 0.28, 1.15, 1.6, 2.4, 1.03]],
      ["Test 2", 2, 3, [0.5, 1.4, 1.9, 2.08, 3, 1.77]],
      ["Test 3", 1.6, 3, [1, 1.6, 2.2, 2.7, 3, 2.13]],
      ["Test 4", 2.6, 3, [1.1, 1.35, 2.15, 2.65, 2.8, 1.99]],
      ["Test 5", 2.2, 3, [0.5, 0.88, 1.05, 2.13, 2.5, 1.36]],
      ["Test 6", 3, 3, [1.9, 2.55, 3, 3, 3, 2.73]],
      ["Half-final 1", 2, 3, [0.7, 1.2, 1.8, 2, 3, 1.73]],
      ["Half-final 2", 1.2, 3, [0.2, 0.95, 1.3, 1.75, 3, 1.43]],
    ],
    categories: [["Tests", 68.89], ["Half-final exams", 53.33]],
    notes: ["Lower grade cutoffs: A at 70%, B at 60%, C at 50%."],
  },
  STA3032: {
    total: 102,
    exams: [
      ["Exam 1", 91, 100, [38, 72.25, 82, 90, 100, 79.75]],
      ["Exam 2", 99, 100, [56, 81, 90, 94, 100, 87.02]],
      ["Exam 3", 101, 100, [15, 55, 79, 92, 103, 72.93]],
    ],
    categories: [["Exams", 97], ["Assignments", 99.34]],
  },

  // ---------- Spring 2025 ----------
  CDA4630: {
    total: 94.38,
    exams: [
      ["Midterm", 104, 110, [41, 80.75, 88.5, 97, 110, 87.95]],
      ["Final", 108, 120, [43, 89, 94, 98, 118, 92.66]],
    ],
  },
  CNT4007: {
    total: 94.86,
    exams: [
      ["Exam 1", 31, 38, [3, 24, 28, 31.5, 40.5, 27.4]],
      ["Exam 2", 26, 26, [0, 13.25, 17, 20, 26, 16.44]],
    ],
    categories: [["Homework", 99.06], ["Projects", 100], ["Exam 1", 81.58], ["Exam 2", 100]],
  },
  COP5536: {
    total: 90.5,
    exams: [
      ["Exam 1", 44, 50, [18, 34, 38, 44, 50, 37.99]],
      ["Exam 2", 41, 50, [19, 35.25, 41, 46, 50, 39.54]],
      ["Exam 3", 48, 50, [0, 37, 41, 44.25, 49, 40.1]],
    ],
    categories: [["Assignments", 96], ["Exams", 88.67]],
  },

  // ---------- Fall 2025 ----------
  CIS4930G: {
    total: 102.63,
    exams: [
      ["Exam 1", 35, 40, [0, 20, 27, 34, 39, 26.17]],
      ["Exam 2", 38, 40, [0, 24, 31, 35, 39, 28.46]],
    ],
    categories: [["Assignments", 107.5], ["Exams", 91.25]],
    notes: ["Assignments include bonus points."],
  },
  CNT4731: {
    total: 98.38,
    exams: [
      ["Exam 1", 100, 100, [90, 94.25, 96.5, 98.5, 100, 96]],
      ["Exam 2", 94, 100, [90, 90.75, 93, 93.25, 98, 92.75]],
    ],
  },
  COP4020: {
    total: 97.39,
    exams: [
      ["Quiz 1: Java", 28.5, 30, [0, 25, 26.75, 28, 30, 25.05]],
      ["Quiz 2: Lexing", 28.5, 30, [0, 23.25, 24.75, 26.25, 30, 24.13]],
      ["Quiz 3: Parsing", 26.25, 30, [0, 23.25, 25.25, 26.75, 30.5, 24.11]],
      ["Quiz 4: Evaluation", 30, 30, [0, 23, 25.75, 27.5, 30, 24.42]],
      ["Quiz 5: Analysis", 23.25, 30, [0, 23.75, 25, 26.75, 30, 24.23]],
    ],
    examsLabel: "Quizzes",
    categories: [["Project submissions", 97.22], ["Test submissions", 100], ["Exercises", 97.97], ["Quizzes", 91]],
    notes: ["The lowest of six quizzes was dropped."],
  },
  MAD4203: {
    total: 77.47,
    exams: [
      ["Test 1", 2.5, 3, [1, 1.6, 1.9, 2.5, 3, 1.98]],
      ["Test 2", 3, 3, [0, 0.7, 1.7, 2.5, 3, 1.58]],
      ["Test 3", 2.6, 3, [0.2, 2.2, 2.5, 2.7, 3, 2.33]],
      ["Test 4", 2.2, 3, [0.6, 1.53, 2, 2.7, 3, 2.01]],
      ["Test 5", 1.8, 3, [0, 0.75, 1.25, 1.8, 2.9, 1.26]],
      ["Test 6", 2.6, 3, [0.2, 0.88, 1.6, 2.23, 3, 1.6]],
      ["Half-final 1", 2.4, 3, [0.2, 1.68, 2.25, 2.85, 3, 2.08]],
      ["Half-final 2", 1.6, 3, [0, 1.15, 1.6, 2.35, 2.8, 1.67]],
    ],
    categories: [["Tests", 81.67], ["Half-final exams", 66.67]],
    notes: ["Lower grade cutoffs: A at 70%, B at 60%, C at 50%."],
  },

  // ---------- Spring 2026 ----------
  COP4533: {
    total: 92.9,
    exams: [
      ["Test 1", 95, 100, [0, 73.33, 86.67, 93.33, 100, 80.69]],
      ["Test 2", 100, 100, [0, 50, 64, 76, 100, 60.89]],
      ["Test 3", 88, 100, [0, 82, 86, 90, 100, 84.13]],
      ["Test 4", 84, 100, [0, 66, 80, 88, 100, 75.64]],
    ],
    categories: [["Written assignments", 100], ["Programming assignments", 95], ["Tests", 91.75]],
  },
  EEL6763: {
    total: 92.62,
    exams: [
      ["Midterm exam", 83, 98, [65, 76.75, 84.5, 91, 96, 84.34]],
      ["Final exam", 95, 100, [70, 84, 88, 92.5, 96, 87.84]],
    ],
    categories: [["Labs", 99.4], ["Final project", 95.2], ["Midterm exam", 84.69], ["Final exam", 95]],
  },
  MAD4204: {
    total: 70.87,
    exams: [
      ["Test 1", 1.7, 3, [1, 1.65, 2.1, 2.3, 2.7, 1.94]],
      ["Test 2", 1.5, 3, [1.2, 1.9, 2.4, 2.7, 2.8, 2.26]],
      ["Test 3", 3, 3, [1.5, 1.85, 2.5, 3, 3, 2.4]],
      ["Test 4", 1.7, 3, [0.5, 1.5, 1.8, 2.5, 3, 1.94]],
      ["Test 5", 1.8, 3, [0.7, 1.45, 1.8, 2.3, 3, 1.85]],
      ["Test 6", 3, 3, [0.7, 2.05, 2.7, 2.9, 3, 2.39]],
      ["Half-final 1", 1.5, 3, [0.4, 1.1, 1.5, 1.75, 2.5, 1.47]],
      ["Half-final 2", 2.8, 3, [0.9, 1.8, 2.5, 2.7, 3, 2.2]],
    ],
    categories: [["Tests", 70.56], ["Half-final exams", 71.67]],
    notes: ["Lower grade cutoffs: A at 70%, B at 60%, C at 50%."],
  },
};
