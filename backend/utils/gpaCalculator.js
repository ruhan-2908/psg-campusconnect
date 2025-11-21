const GRADE_POINTS = {
  'A': 4.0,
  'B': 3.5,
  'C': 3.0,
  'D': 2.0,
  'F': 0.0
};

const calculateGrade = (total) => {
  if (total >= 90) return 'A';
  if (total >= 80) return 'B';
  if (total >= 70) return 'C';
  if (total >= 50) return 'D';
  return 'F';
};

const calculateSubjectGPA = (marks, subject) => {
  const { credits, gpaCalculationRule } = subject;
  const { at1, at2, ap, ca1, ca2, sem } = marks;

  let totalMarks = 0;
  let maxMarks = 0;

  if (gpaCalculationRule === '4credit') {
    // 4-credit: 2 ATs (20 each), 2 CAs (15 each), 1 SEM (30)
    totalMarks = (at1 || 0) + (at2 || 0) + (ca1 || 0) + (ca2 || 0) + (sem || 0);
    maxMarks = 20 + 20 + 15 + 15 + 30;
  } else if (gpaCalculationRule === '3credit') {
    // 3-credit: 1 AP (20), 2 CAs (15 each), 1 SEM (50)
    totalMarks = (ap || 0) + (ca1 || 0) + (ca2 || 0) + (sem || 0);
    maxMarks = 20 + 15 + 15 + 50;
  } else if (gpaCalculationRule === '1credit') {
    totalMarks = (at1 || 0) + (ca1 || 0) + (sem || 0);
    maxMarks = 20 + 30 + 50;
  } else if (gpaCalculationRule === '0credit') {
    return { grade: 'N/A', gradePoint: 0, gpa: 0, totalMarks: 0 };
  }

  const normalizedMarks = (totalMarks / maxMarks) * 100;
  const grade = calculateGrade(normalizedMarks);
  const gradePoint = GRADE_POINTS[grade];
  const gpa = (gradePoint * credits) / (credits || 1);

  return {
    totalMarks: Math.round(normalizedMarks),
    grade,
    gradePoint,
    gpa: parseFloat(gpa.toFixed(2))
  };
};

const calculateSemesterGPA = (allMarks) => {
  if (!allMarks || allMarks.length === 0) return 0;
  const totalGPA = allMarks.reduce((sum, m) => sum + (m.gpa || 0), 0);
  const avgGPA = totalGPA / allMarks.length;
  return parseFloat(avgGPA.toFixed(2));
};

module.exports = {
  calculateSubjectGPA,
  calculateSemesterGPA,
  GRADE_POINTS
};