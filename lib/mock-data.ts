export type Role = 'classroom_teacher' | 'grade_admin' | 'super_admin';

export type Classroom = {
  id: string;
  name: string;
  academicYear: string;
  activeStudentCount: number;
};

export type Student = {
  id: string;
  studentId: string;
  rosterNumber: string;
  prefix: string;
  firstName: string;
  lastName: string;
  classroomId: string;
  classroomName: string;
  enrollmentStatus: 'ACTIVE' | 'TRANSFERRED' | 'PENDING_REVIEW';
  statusReason?: string;
  academicYear: string;
  accessCodeHash: string;
};

export type TeacherProfile = {
  id: string;
  authUserId: string;
  displayName: string;
  role: Role;
  classroomIds: string[];
};

export type SurveyAnswer = 'YES' | 'NO' | 'PENDING';

export type SurveyResponse = {
  id: string;
  surveyId: string;
  studentId: string;
  answer: SurveyAnswer;
  submittedAt: string;
  updatedAt: string;
};

export type SurveySettings = {
  title: string;
  description: string;
  academicYear: string;
  transportationFee: number;
  openingDate: string;
  closingDate: string;
  isOpen: boolean;
  destinationNames: string[];
};

export const classrooms: Classroom[] = [
  { id: 'm2-1', name: 'ม.2/1', academicYear: '2569', activeStudentCount: 38 },
  { id: 'm2-2', name: 'ม.2/2', academicYear: '2569', activeStudentCount: 39 },
  { id: 'm2-3', name: 'ม.2/3', academicYear: '2569', activeStudentCount: 41 },
  { id: 'm2-4', name: 'ม.2/4', academicYear: '2569', activeStudentCount: 36 },
  { id: 'm2-5', name: 'ม.2/5', academicYear: '2569', activeStudentCount: 40 },
  { id: 'm2-6', name: 'ม.2/6', academicYear: '2569', activeStudentCount: 37 },
  { id: 'm2-7', name: 'ม.2/7', academicYear: '2569', activeStudentCount: 42 },
  { id: 'm2-8', name: 'ม.2/8', academicYear: '2569', activeStudentCount: 35 },
  { id: 'm2-9', name: 'ม.2/9', academicYear: '2569', activeStudentCount: 38 },
  { id: 'm2-10', name: 'ม.2/10', academicYear: '2569', activeStudentCount: 39 },
  { id: 'm2-11', name: 'ม.2/11', academicYear: '2569', activeStudentCount: 40 },
];

export const students: Student[] = [
  { id: 's-001', studentId: 'ST-001', rosterNumber: '01', prefix: 'ด.ญ.', firstName: 'กัญชพร', lastName: 'ทาทอง', classroomId: 'm2-2', classroomName: 'ม.2/2', enrollmentStatus: 'TRANSFERRED', academicYear: '2569', accessCodeHash: 'demo-hash-1', statusReason: 'ย้ายออกจากโรงเรียน' },
  { id: 's-002', studentId: 'ST-002', rosterNumber: '02', prefix: 'ด.ช.', firstName: 'ณัฐพงศ์', lastName: 'สิงห์ทอง', classroomId: 'm2-2', classroomName: 'ม.2/2', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-2' },
  { id: 's-003', studentId: 'ST-003', rosterNumber: '03', prefix: 'ด.ญ.', firstName: 'พรนภัส', lastName: 'ไพศาล', classroomId: 'm2-2', classroomName: 'ม.2/2', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-3' },
  { id: 's-004', studentId: 'ST-004', rosterNumber: '04', prefix: 'ด.ช.', firstName: 'วิชาญ', lastName: 'ภู่ทอง', classroomId: 'm2-1', classroomName: 'ม.2/1', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-4' },
  { id: 's-005', studentId: 'ST-005', rosterNumber: '05', prefix: 'ด.ญ.', firstName: 'อริสา', lastName: 'จันทร์เพ็ญ', classroomId: 'm2-1', classroomName: 'ม.2/1', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-5' },
  { id: 's-006', studentId: 'ST-006', rosterNumber: '06', prefix: 'ด.ช.', firstName: 'ปกรณ์', lastName: 'ศรีสุข', classroomId: 'm2-3', classroomName: 'ม.2/3', enrollmentStatus: 'PENDING_REVIEW', academicYear: '2569', accessCodeHash: 'demo-hash-6', statusReason: 'รอตรวจสอบข้อมูล' },
  { id: 's-007', studentId: 'ST-007', rosterNumber: '07', prefix: 'ด.ญ.', firstName: 'ชุติมา', lastName: 'รัตนกุล', classroomId: 'm2-3', classroomName: 'ม.2/3', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-7' },
  { id: 's-008', studentId: 'ST-008', rosterNumber: '08', prefix: 'ด.ช.', firstName: 'อภิวัฒน์', lastName: 'วิชัย', classroomId: 'm2-4', classroomName: 'ม.2/4', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-8' },
  { id: 's-009', studentId: 'ST-009', rosterNumber: '09', prefix: 'ด.ญ.', firstName: 'นภัสสร', lastName: 'ไตรรงค์', classroomId: 'm2-4', classroomName: 'ม.2/4', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-9' },
  { id: 's-010', studentId: 'ST-010', rosterNumber: '10', prefix: 'ด.ช.', firstName: 'ศุภกร', lastName: 'คมกฤส', classroomId: 'm2-5', classroomName: 'ม.2/5', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-10' },
  { id: 's-011', studentId: 'ST-011', rosterNumber: '11', prefix: 'ด.ญ.', firstName: 'อารียา', lastName: 'ชูสกุล', classroomId: 'm2-5', classroomName: 'ม.2/5', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-11' },
  { id: 's-012', studentId: 'ST-012', rosterNumber: '12', prefix: 'ด.ช.', firstName: 'พีระ', lastName: 'สุขเกษม', classroomId: 'm2-6', classroomName: 'ม.2/6', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-12' },
  { id: 's-013', studentId: 'ST-013', rosterNumber: '13', prefix: 'ด.ญ.', firstName: 'กานต์', lastName: 'จิตต์สมัย', classroomId: 'm2-6', classroomName: 'ม.2/6', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-13' },
  { id: 's-014', studentId: 'ST-014', rosterNumber: '14', prefix: 'ด.ช.', firstName: 'ชินวัตร', lastName: 'ทวีศักดิ์', classroomId: 'm2-7', classroomName: 'ม.2/7', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-14' },
  { id: 's-015', studentId: 'ST-015', rosterNumber: '15', prefix: 'ด.ญ.', firstName: 'ญาณิศา', lastName: 'นาคะ', classroomId: 'm2-7', classroomName: 'ม.2/7', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-15' },
  { id: 's-016', studentId: 'ST-016', rosterNumber: '16', prefix: 'ด.ช.', firstName: 'ยศภัทร', lastName: 'สมบูรณ์', classroomId: 'm2-8', classroomName: 'ม.2/8', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-16' },
  { id: 's-017', studentId: 'ST-017', rosterNumber: '17', prefix: 'ด.ญ.', firstName: 'เบญจมาศ', lastName: 'สิทธิไพร', classroomId: 'm2-8', classroomName: 'ม.2/8', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-17' },
  { id: 's-018', studentId: 'ST-018', rosterNumber: '18', prefix: 'ด.ช.', firstName: 'กิตติธัช', lastName: 'วรเดช', classroomId: 'm2-9', classroomName: 'ม.2/9', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-18' },
  { id: 's-019', studentId: 'ST-019', rosterNumber: '19', prefix: 'ด.ญ.', firstName: 'วริศรา', lastName: 'พุทธิเมธา', classroomId: 'm2-9', classroomName: 'ม.2/9', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-19' },
  { id: 's-020', studentId: 'ST-020', rosterNumber: '20', prefix: 'ด.ช.', firstName: 'เอกชัย', lastName: 'อุ่นศรี', classroomId: 'm2-10', classroomName: 'ม.2/10', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-20' },
  { id: 's-021', studentId: 'ST-021', rosterNumber: '21', prefix: 'ด.ญ.', firstName: 'วรรณพร', lastName: 'สิริกาญจน์', classroomId: 'm2-10', classroomName: 'ม.2/10', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-21' },
  { id: 's-022', studentId: 'ST-022', rosterNumber: '22', prefix: 'ด.ช.', firstName: 'ภาคิน', lastName: 'ประภัสสร', classroomId: 'm2-11', classroomName: 'ม.2/11', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-22' },
  { id: 's-023', studentId: 'ST-023', rosterNumber: '23', prefix: 'ด.ญ.', firstName: 'ประภา', lastName: 'คำแหง', classroomId: 'm2-11', classroomName: 'ม.2/11', enrollmentStatus: 'ACTIVE', academicYear: '2569', accessCodeHash: 'demo-hash-23' },
];

export const surveySettings: SurveySettings = {
  title: 'ทัศนศึกษา จังหวัดบุรีรัมย์',
  description: 'สำรวจความประสงค์เข้าร่วมกิจกรรมทัศนศึกษา ระดับชั้นมัธยมศึกษาปีที่ 2 โรงเรียนสังขะ',
  academicYear: '2569',
  transportationFee: 160,
  openingDate: '2026-11-01',
  closingDate: '2026-11-30',
  isOpen: true,
  destinationNames: ['ภูม่านฟ้า', 'เขากระโดง', 'สนามช้างอารีน่า'],
};

export const teacherProfiles: TeacherProfile[] = [
  { id: 't-001', authUserId: 'teacher-01', displayName: 'ครูเมธา ศรีสวัสดิ์', role: 'classroom_teacher', classroomIds: ['m2-2'] },
  { id: 't-002', authUserId: 'teacher-02', displayName: 'ครูศิริลักษณ์ จันทร์พร', role: 'classroom_teacher', classroomIds: ['m2-3', 'm2-4'] },
  { id: 't-003', authUserId: 'admin-grade', displayName: 'นางสาวปรียาภรณ์ มั่นคง', role: 'grade_admin', classroomIds: classrooms.map((c) => c.id) },
  { id: 't-004', authUserId: 'super-admin', displayName: 'ผู้ดูแลระบบ', role: 'super_admin', classroomIds: classrooms.map((c) => c.id) },
];

export const surveyResponses: SurveyResponse[] = [
  { id: 'r-001', surveyId: 'survey-01', studentId: 's-002', answer: 'YES', submittedAt: '2026-11-05T09:15:00+07:00', updatedAt: '2026-11-05T09:15:00+07:00' },
  { id: 'r-002', surveyId: 'survey-01', studentId: 's-003', answer: 'NO', submittedAt: '2026-11-06T12:10:00+07:00', updatedAt: '2026-11-06T12:10:00+07:00' },
  { id: 'r-003', surveyId: 'survey-01', studentId: 's-005', answer: 'YES', submittedAt: '2026-11-07T15:40:00+07:00', updatedAt: '2026-11-07T15:40:00+07:00' },
  { id: 'r-004', surveyId: 'survey-01', studentId: 's-009', answer: 'YES', submittedAt: '2026-11-08T10:05:00+07:00', updatedAt: '2026-11-08T10:05:00+07:00' },
];

export function getStudentById(studentId: string) {
  return students.find((student) => student.id === studentId) ?? null;
}

export function getTeacherByAuthUser(authUserId: string) {
  return teacherProfiles.find((teacher) => teacher.authUserId === authUserId) ?? null;
}

export function canAccessClassroom(teacher: TeacherProfile | null, classroomId: string) {
  if (!teacher) return false;
  if (teacher.role === 'grade_admin' || teacher.role === 'super_admin') return true;
  return teacher.classroomIds.includes(classroomId);
}

export function getActiveStudentsForClassroom(classroomId: string) {
  return students.filter((s) => s.classroomId === classroomId && s.enrollmentStatus === 'ACTIVE');
}

export function getStudentName(student: Student) {
  return `${student.prefix} ${student.firstName} ${student.lastName}`;
}

export function formatThaiDate(date: string | Date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('th-TH', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Bangkok',
  }).format(d);
}

export function calculateClassroomSurveyStats(classroomId: string) {
  const activeStudents = getActiveStudentsForClassroom(classroomId);
  const responded = surveyResponses.filter((response) => {
    const student = getStudentById(response.studentId);
    return student?.classroomId === classroomId && student.enrollmentStatus === 'ACTIVE';
  });

  const yesCount = responded.filter((response) => response.answer === 'YES').length;
  const noCount = responded.filter((response) => response.answer === 'NO').length;
  const unanswered = activeStudents.length - responded.length;

  return {
    totalActive: activeStudents.length,
    yesCount,
    noCount,
    unanswered,
    completionRate: activeStudents.length === 0 ? 0 : Math.round((responded.length / activeStudents.length) * 100),
    estimatedFee: yesCount * surveySettings.transportationFee,
  };
}

export function calculateGradeSurveyStats() {
  const allActive = students.filter((s) => s.enrollmentStatus === 'ACTIVE');
  const allResponses = surveyResponses.filter((response) => {
    const student = getStudentById(response.studentId);
    return student?.enrollmentStatus === 'ACTIVE';
  });

  const yes = allResponses.filter((response) => response.answer === 'YES').length;
  const no = allResponses.filter((response) => response.answer === 'NO').length;
  const unanswered = allActive.length - allResponses.length;

  return {
    totalStudents: allActive.length,
    yes,
    no,
    unanswered,
    transferred: students.filter((s) => s.enrollmentStatus === 'TRANSFERRED').length,
    completionRate: allActive.length === 0 ? 0 : Math.round((allResponses.length / allActive.length) * 100),
    estimatedFee: yes * surveySettings.transportationFee,
  };
}

export function getClassroomStatsSummary() {
  return classrooms.map((classroom) => ({
    ...classroom,
    ...calculateClassroomSurveyStats(classroom.id),
  }));
}
