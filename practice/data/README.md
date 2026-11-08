# 데이터 약속표

모든 화면은 아래 이름 그대로 데이터를 읽고 씁니다. 이름을 바꾸려면 먼저 팀에 알립니다.
모든 데이터는 가상입니다. 실제 학생 정보는 올리지 않습니다.

## students.json (학생 1명)

| 이름 | 형식 | 뜻 |
|---|---|---|
| id | 글자 | 학생 번호. 화면 사이를 잇는 열쇠 (예: S001) |
| name | 글자 | 가상 이름 |
| major | 글자 | 가상 전공 |
| grade | 숫자 | 학년 |
| experiences | 목록 | 경험 목록. 없으면 빈 목록 |
| experiences[].area | 글자 | 교환학생, 인턴십, 비교과 중 하나 |
| experiences[].program | 글자 | 프로그램 이름 |
| experiences[].hasReport | 참/거짓 | 공개 동의한 보고서가 있는지 |

## 인터뷰 결과 (브라우저 저장소, 연습용)

| 이름 | 형식 | 뜻 |
|---|---|---|
| studentId | 글자 | students.json의 id와 같은 값 |
| route | 글자 | curious, short, detailed 중 하나 |
| answers | 목록 | 질문(q)과 답변(a)의 목록 |
| savedAt | 글자 | 저장 시각 |
