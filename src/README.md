# 🍌 나나바나나 Studio v2 — Google AI Edition
### 웹툰 상품판매용 제작기 · Made by 미르

---

## 📦 파일 구성

```
nana_banana_gemini/
├── index.html        ← 메인 앱 (이걸 열면 됩니다)
├── style.css         ← 전체 스타일
├── app.js            ← Google Gemini API 연동 로직
├── styles-data.js    ← 70개 스타일 데이터
└── README.md         ← 이 파일
```

---

## 🚀 사용 방법

### 1. API 키 발급
1. [Google AI Studio](https://aistudio.google.com) 접속
2. 로그인 → 왼쪽 메뉴 **Get API Key** 클릭
3. **Create API Key** → 복사

### 2. 앱 실행
- `index.html`을 브라우저에서 열기 (더블클릭)
- 또는 VS Code Live Server / 로컬 서버로 실행

### 3. API 키 입력
- 우측 상단 **⚙️** 버튼 클릭
- API 키 입력 → **저장** → **활성화 테스트**
- 🟢 초록 점 = 정상 작동

### 4. 스토리보드 생성
1. 스타일 선택 (4개 탭, 총 70개)
2. 규칙 설정 입력 (또는 예시 불러오기)
3. 내용 입력
4. **🎬 12컷 스토리보드 생성!** 클릭

### 5. 이미지 생성
- 각 컷 **▼ 이미지 프롬프트** 클릭
- **📋 복사** 버튼으로 영문 프롬프트 복사
- [Google Imagen 3](https://aistudio.google.com) 또는 Midjourney에 붙여넣기

---

## 🎨 스타일 목록 (70개)

| 탭 | 범위 | 개수 |
|----|------|------|
| 현대 웹툰 | W01~W18 | 18개 |
| 애니메이션 | A01~A24 | 24개 |
| 한국 전통/사극 | T01~T24 | 24개 |
| 특수 장르 | S01~S17 | 17개 (아, S01~S17 = 17개, 아니 실제론 S17까지) |

---

## 💾 저장/불러오기

- 생성 후 이름 입력 → **💾 저장** 버튼
- 최대 20개 보관 (localStorage)
- 하단 목록에서 **불러오기** / **삭제** 가능

---

## 🌐 Vercel 배포 방법

```bash
# 1. Vercel CLI 설치
npm i -g vercel

# 2. 이 폴더에서 실행
vercel

# 3. 설정 따라 진행 → 배포 완료!
```

또는 [vercel.com](https://vercel.com) → New Project → 이 폴더 드래그앤드롭

---

## ⚙️ 기술 스택

- **AI**: Google Gemini 2.0 Flash API
- **프론트엔드**: 순수 HTML + CSS + Vanilla JS (프레임워크 없음)
- **저장**: localStorage
- **폰트**: Black Han Sans, Noto Sans KR (Google Fonts)

---

## 📝 커스터마이징

### 모델 변경
`app.js` 내 아래 부분을 수정:
```js
// gemini-2.0-flash → gemini-1.5-pro 등으로 변경 가능
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
```

### 스타일 추가
`styles-data.js`에 아래 형식으로 추가:
```js
{ cat:'webtoon', code:'W19', name:'내 스타일', prompt:'my custom style prompt, full-bleed' },
```

---

🍌 나나바나나 Studio v2 · Powered by Google Gemini AI · Made by 미르
