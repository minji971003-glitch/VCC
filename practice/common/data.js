
 // 모든 화면이 데이터를 읽고 쓰는 공통 통로입니다.
 // 본선에서는 이 파일의 안쪽만 구글 시트 연결로 바꾸고, 화면 코드는 그대로 둡니다.
 const REQUIRED_FIELDS = ["id", "name", "major", "grade", "experiences"];
 const INTERVIEW_KEY = "vcc_practice_interviews";

 async function loadStudents() {
   const response = await fetch("../data/students.json", { cache: "no-store" });
   const students = await response.json();
   const problems = [];
   for (const student of students) {
     for (const field of REQUIRED_FIELDS) {
       if (!(field in student)) problems.push(`${student.id || "학생"}: '${field}' 항목이 없습니다`);
     }
   }
   if (problems.length) {
     const box = document.createElement("div");
     box.className = "problem";
     box.id = "data-problem";
     box.textContent = "데이터 약속 위반 - " + problems.join(", ");
     document.querySelector(".app").prepend(box);
   }
   return students;
 }

 function loadInterviews() {
   return JSON.parse(localStorage.getItem(INTERVIEW_KEY) || "[]");
 }

 function saveInterview(record) {
   const all = loadInterviews();
   all.push(record);
   localStorage.setItem(INTERVIEW_KEY, JSON.stringify(all));
 }

 function clearInterviews() {
   localStorage.removeItem(INTERVIEW_KEY);
 }
