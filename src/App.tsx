import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { STYLE_CATS, ALL_STYLES } from './styles-data';

const sliceIntoSquares = (base64Src: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const slices: string[] = [];
      // 이미지의 가로세로 비율을 기반으로 몇 장의 정사각형이 나올지 동적으로 계산 (예: 1:4 비율이면 4장)
      const parts = Math.max(1, Math.round(img.height / img.width));
      const sliceHeight = img.height / parts;
      const sliceWidth = img.width;
      const size = sliceWidth; // 완벽한 정방형(1:1) 크기
      
      for (let i = 0; i < parts; i++) {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, size, size);
          ctx.drawImage(img, 0, i * sliceHeight, sliceWidth, sliceHeight, 0, 0, size, size);
          slices.push(canvas.toDataURL('image/png'));
        }
      }
      resolve(slices);
    };
    img.onerror = reject;
    img.src = base64Src;
  });
};

export default function App() {
  const [selStyle, setSelStyle] = useState('W01');
  const [activeCat, setActiveCat] = useState('webtoon');
  const [currentResult, setCurrentResult] = useState<any>(null);
  
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [apiKeyValue, setApiKeyValue] = useState('');
  const [apiStatus, setApiStatus] = useState({ type: 'none', msg: 'API 키 없음 — 저장 후 테스트 버튼으로 활성화 확인하세요' });
  
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [rules, setRules] = useState('');
  
  const [isAutoGenerating, setIsAutoGenerating] = useState(false);
  const [isGeneratingStoryOnly, setIsGeneratingStoryOnly] = useState(false);
  const [isRecommending, setIsRecommending] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [genStepTxt, setGenStepTxt] = useState('Gemini가 12컷 웹툰 생성 중...');
  
  const [errorMsg, setErrorMsg] = useState('');
  const [rawError, setRawError] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    const k = localStorage.getItem('gemini_api_key');
    if (k) {
      setApiKeyValue(k);
      setApiStatus({ type: 'none', msg: '🔑 저장된 키 불러옴 — [활성화 테스트]로 확인 가능' });
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 2200);
  };

  const parseApiError = (e: any) => {
    const msg = String(e?.message || (typeof e === 'string' ? e : ''));
    const status = e?.status || e?.code || 0;
    
    if (msg.toLowerCase().includes('exceeded quota') || msg.toLowerCase().includes('quota exceeded') || msg.includes('429')) {
      return 'API 사용 할당량(Quota)을 초과했습니다. 무료 버전의 일일/분당 제한에 도달했을 수 있습니다. 잠시 후 다시 시도하거나 다른 API 키를 사용해주세요.';
    }
    
    if (status === 401 || msg.includes('API_KEY_INVALID') || msg.includes('API key not valid') || msg.includes('401')) return 'API 키가 올바르지 않습니다. [설정]에서 키를 다시 확인해주세요.';
    if (status === 403 || msg.includes('403')) {
      if (msg.includes('service is not enabled')) return 'Generative Language API 서비스가 활성화되지 않았습니다. Google Cloud Console에서 해당 API를 사용 설정해야 합니다.';
      if (msg.includes('location is not supported')) return '현재 지역(IP)에서는 이 모델을 사용할 수 없습니다. (VPN 등을 확인하세요)';
      if (msg.includes('permission_denied') || msg.includes('does not have permission')) {
        return 'API 키 권한이 부족합니다. (이 모델은 결제가 등록된 유료 API 키가 필요할 수 있습니다. 화면의 지시에 따라 키를 다시 선택해주세요.)';
      }
      return 'API 키 권한이 없거나 만료되었습니다. (Billing 설정 또는 API 활성화 여부 확인)';
    }
    if (status === 404 || msg.includes('404') || msg.includes('not found')) return '요청한 모델을 찾을 수 없거나 사용할 수 없는 모델입니다.';
    if (status === 400 || msg.includes('400')) return '잘못된 요청입니다. 입력 내용이나 프롬프트를 확인해주세요.';
    if (status >= 500 || msg.includes('500') || msg.includes('503')) return 'Google 서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
    return msg || `오류가 발생했습니다`;
  };

  const getApiKey = () => {
    try {
      if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
    } catch (e) {}
    return localStorage.getItem('gemini_api_key') || '';
  };

  const saveApiKey = () => {
    const key = apiKeyValue.trim();
    if (!key) { setApiStatus({ type: 'err', msg: '키를 먼저 입력해주세요' }); return; }
    localStorage.setItem('gemini_api_key', key);
    setApiStatus({ type: 'none', msg: '💾 저장됨 — [활성화 테스트] 버튼을 눌러 확인하세요' });
    showToast('API 키 저장 완료!');
  };

  const deleteApiKey = () => {
    localStorage.removeItem('gemini_api_key');
    setApiKeyValue('');
    setApiStatus({ type: 'none', msg: 'API 키가 삭제되었습니다' });
    showToast('API 키 삭제됨');
  };

  const testApiKey = async () => {
    const key = apiKeyValue.trim();
    if (!key) { setApiStatus({ type: 'err', msg: 'API 키를 먼저 입력하세요' }); return; }
    setApiStatus({ type: 'none', msg: '테스트 중...' });
    try {
      const ai = new GoogleGenAI({ apiKey: key });
      await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: 'Hello'
      });
      setApiStatus({ type: 'ok', msg: '✅ 활성화 확인! Google Gemini API 정상 작동 중' });
      showToast('API 활성화 확인!');
    } catch (e) {
      setApiStatus({ type: 'err', msg: '❌ ' + parseApiError(e) });
    }
  };

  const recommendRules = async (currentContent = content) => {
    const contentToUse = currentContent.trim();
    const apiKey = getApiKey();
    if (!contentToUse) { showToast('❗ 먼저 내용을 입력해주세요!'); return; }
    if (!apiKey)  { showToast('❗ API 키를 먼저 설정해주세요!'); return; }

    const styleObj = ALL_STYLES.find(s => s.code === selStyle);
    setIsRecommending(true);

    const prompt = `너는 웹툰 광고 기획 전문가야.
아래 [내용]과 [선택 스타일]을 분석해서, 2열×6행(총 12컷) 웹툰 광고에 최적화된 제작 규칙을 만들어줘.

[핵심 지시사항]
반드시 사용자가 선택한 [선택 스타일]의 고유한 분위기, 색감, 작화 특징이 12컷 내내 완벽하게 반영되도록 '등장인물', '톤', '배경'을 아주 구체적으로 묘사해. 내용보다 스타일의 시각적 느낌을 살리는 것이 최우선이야.

반드시 아래 형식으로만 출력해. 마크다운 없이 텍스트만.

- 등장인물: ([선택 스타일]에 완벽히 어울리는 외모·의상·특징 묘사, 12컷 내내 일관성 유지되도록 상세히)
- 톤: ([선택 스타일]의 분위기와 감정에 맞춘 광고 연출 방향)
- 컷당 말풍선 1~2개 필수
- 말풍선 1개당 12~18자 이내
- 스토리 흐름: 1~4컷(문제 공감), 5~8컷(솔루션 제시), 9~10컷(효과 확인), 11~12컷(브랜드 강조 및 행동 유도)
- 배경: ([선택 스타일]에 어울리는 배경 설명)
- 추가규칙: (절대로 컷 모서리에 숫자나 라벨을 넣지 말고, 이미지 상단에 제목이나 로고를 넣지 말 것)

[선택 스타일]: ${styleObj?.name || ''} — ${styleObj?.prompt || ''}

[내용]:
${contentToUse}`;

    try {
      const ai = new GoogleGenAI({ apiKey });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });
      
      const newRules = res.text || '';
      setRules(newRules.trim());
      showToast('✅ AI 규칙 추천 완료! 선택하신 스타일이 반영되었습니다.');
    } catch (e) {
      console.error("AI 규칙 추천 에러:", e);
      const errMsg = parseApiError(e);
      showToast('❌ 추천 실패: ' + errMsg);
      setRules('❌ AI 규칙 추천 실패:\n' + errMsg + '\n\n잠시 후 다시 시도하거나 API 키를 확인해주세요.');
    } finally {
      setIsRecommending(false);
    }
  };

  const generateStoryOnly = async () => {
    const topicToUse = topic.trim();
    const apiKey = getApiKey();

    if (!topicToUse) { showToast('❗ 먼저 간단한 주제를 입력해주세요!'); return; }
    if (!apiKey) { showToast('❗ API 키를 먼저 설정해주세요!'); return; }

    setIsGeneratingStoryOnly(true);

    const storyPrompt = `너는 웹툰 광고 시나리오 작가야.
사용자가 입력한 [핵심 키워드]를 바탕으로, 독자의 공감을 이끌어낼 수 있는 '12컷 웹툰용 스토리'를 작성해줘.

[작성 규칙]
1. 반드시 '불편한 상황(공감) -> 해결책 등장 -> 결과 및 추천'의 3단계 스토리텔링 구조를 갖출 것.
2. 단순한 상품 설명이 아니라, 구체적인 '상황'이나 '대화'가 포함된 시나리오 형태로 써줘.
3. 길이는 공백 포함 150자 내외로 충분히 상세하게 작성할 것.
4. 마크다운이나 특수기호 없이 순수 텍스트로만 출력해.
5. 문장을 끝까지 완결성 있게 작성해. 절대로 중간에 끊지 마.

[예시]
키워드: 갤럭시 S26 최저가 (주인공: 20대 취준생, 안경 쓴 지적인 이미지)
출력: 비싼 휴대폰 가격 때문에 고민하던 20대 취준생 주인공, 우연히 미르통신을 발견합니다. 안경 너머로 비치는 압도적인 성능의 갤럭시 S26 울트라를 전국 최저가로 득템하고 친구들의 부러움을 한 몸에 받게 되는 감동 실화! 지금 바로 미르통신에서 확인하세요.

[핵심 키워드]: ${topicToUse}`;

    try {
      const ai = new GoogleGenAI({ apiKey });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: storyPrompt,
        config: { 
          temperature: 0.7, 
          maxOutputTokens: 1024,
          topP: 0.95,
          topK: 40
        } 
      });

      const generatedStory = (res.text || '').trim();
      setContent(generatedStory);
      showToast('✅ 스토리 완성! 내용을 확인하고 수정할 수 있습니다.');
    } catch (e) {
      console.error("스토리 생성 에러:", e);
      showToast('❌ 스토리 생성 실패: 잠시 후 다시 시도해주세요.');
    } finally {
      setIsGeneratingStoryOnly(false);
    }
  };

  const generateStoryAndRules = async () => {
    const topicToUse = topic.trim();
    const apiKey = getApiKey();

    if (!topicToUse) { showToast('❗ 먼저 간단한 주제를 입력해주세요!'); return; }
    if (!apiKey) { showToast('❗ API 키를 먼저 설정해주세요!'); return; }

    setIsAutoGenerating(true);

    const storyPrompt = `너는 웹툰 광고 시나리오 작가야.
사용자가 입력한 [핵심 키워드]를 바탕으로, 독자의 공감을 이끌어낼 수 있는 '12컷 웹툰용 스토리'를 작성해줘.

[작성 규칙]
1. 반드시 '불편한 상황(공감) -> 해결책 등장 -> 결과 및 추천'의 3단계 스토리텔링 구조를 갖출 것.
2. 단순한 상품 설명이 아니라, 구체적인 '상황'이나 '대화'가 포함된 시나리오 형태로 써줘.
3. 길이는 공백 포함 150자 내외로 충분히 상세하게 작성할 것.
4. 마크다운이나 특수기호 없이 순수 텍스트로만 출력해.
5. 문장을 끝까지 완결성 있게 작성해. 절대로 중간에 끊지 마.

[예시]
키워드: 갤럭시 S26 최저가 (주인공: 20대 취준생, 안경 쓴 지적인 이미지)
출력: 비싼 휴대폰 가격 때문에 고민하던 20대 취준생 주인공, 우연히 미르통신을 발견합니다. 안경 너머로 비치는 압도적인 성능의 갤럭시 S26 울트라를 전국 최저가로 득템하고 친구들의 부러움을 한 몸에 받게 되는 감동 실화! 지금 바로 미르통신에서 확인하세요.

[핵심 키워드]: ${topicToUse}`;

    try {
      const ai = new GoogleGenAI({ apiKey });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: storyPrompt,
        config: { 
          temperature: 0.7, 
          maxOutputTokens: 1024,
          topP: 0.95,
          topK: 40
        } 
      });

      const generatedStory = (res.text || '').trim();
      setContent(generatedStory);
      showToast('✅ 스토리 완성! 이어서 스타일 규칙을 분석합니다...');

      await recommendRules(generatedStory);

      showToast('🎉 원클릭 준비 완료! 이제 웹툰 생성 버튼을 누르세요.');
    } catch (e) {
      console.error("자동 생성 에러:", e);
      showToast('❌ 자동 생성 실패: 잠시 후 다시 시도해주세요.');
    } finally {
      setIsAutoGenerating(false);
    }
  };

  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  const generate = async (type: 'webtoon' | 'insta' = 'webtoon') => {
    const rulesToUse = rules.trim();
    const contentToUse = content.trim();
    
    if ((window as any).aistudio) {
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await (window as any).aistudio.openSelectKey();
      }
    }

    const apiKey = getApiKey();
    
    if (!rulesToUse || !contentToUse) { 
      setErrorMsg('규칙과 내용을 모두 입력해주세요!'); 
      return; 
    }
    if (!apiKey) { 
      setErrorMsg('⚙️ 설정 버튼을 눌러 Google Gemini API 키를 먼저 입력해주세요!'); 
      return; 
    }

    const isInsta = type === 'insta';

    setErrorMsg('');
    setRawError('');
    setCurrentResult(null);
    setIsGenerating(true);
    setGenStepTxt(isInsta ? 'Gemini가 16컷 생성 후 인스타용 정방형으로 분할 중... (30~60초 소요)' : 'Gemini가 12컷 웹툰 이미지 한방에 생성 중... (30~60초 소요)');

    const styleObj = ALL_STYLES.find(s => s.code === selStyle);

    const prompt = isInsta
      ? `너는 인스타그램 피드용 인스타툰(웹툰) 광고 제작 전용 인공지능 "인스타툰마스터"다.
사용자가 입력한 내용을 바탕으로 **무조건 2열×8행(총 16컷)의 고정된 그리드 레이아웃**을 가진 단일 광고 웹툰 이미지를 생성하는 것이 유일한 목적이다.

생성하는 웹툰 이미지는 **반드시** 다음 시각적 및 구조적 조건을 완벽하게 따른다:
- **물리적 구조 (절대 고정):** 단일 이미지 내에 8개의 세로 행이 있으며, 각 행은 중앙을 기준으로 왼쪽 패널과 오른쪽 패널로 완벽하게 나뉩니다. 모든 16개의 패널은 동일한 크기이며, 패널 사이의 경계선이 명확하게 그려져 있습니다. 16컷을 초과하거나 미만인 컷 수, 불균일한 패널 크기, 경계선 없는 레이아웃은 절대 금지합니다.
- **컷별 텍스트 및 말풍선 배치:** 각 컷(1~16)은 독립적인 내용과 말풍선을 가지며, 말풍선은 한국어 텍스트로 12~18자 이내입니다.
- **인물 일관성:** 등장인물의 얼굴·헤어·의상은 16컷 전체에서 완벽한 일관성을 유지합니다.
- **화풍:** 밝고 선명한 고해상도 인스타툰 스타일. (스타일 설명 참고)
- **네거티브 조건 (절대 금지):** 16컷이 아닌 컷 수, 2열 8행 이외의 그리드 레이아웃, 불균일한 패널 크기, 경계선 없는 레이아웃. **특히 이미지 상단/하단에 제목(예: 'Instatoon Master'), 로고, 인스타그램 아이콘을 넣는 행위, 각 컷의 모서리에 숫자나 문자 라벨(예: '1A', '1B', '2A', '2B', '5A' 등)을 표시하는 행위를 엄격히 금지합니다.** 이미지는 오직 16개의 만화 컷으로만 꽉 채워져야 합니다.

이 인스타툰의 목적은 독자가 상품을 구매하도록 설득하는 것이다.
제공된 [내용]이 12컷 분량이더라도, 반드시 16컷으로 자연스럽게 분배하고 시각적 연출을 추가하여 16컷을 꽉 채워야 합니다.
**무조건** 다음 스토리 구조를 따르며, 이는 물리적인 컷 번호에 완벽하게 매핑됩니다:
1~4컷 (행 1~2): 문제 공감 (독자가 공감할 불편함·욕구 표현)
5~8컷 (행 3~4): 상황 심화 및 원인 분석
9~12컷 (행 5~6): 솔루션 제시 (상품/서비스 등장 및 소개)
13~16컷 (행 7~8): 효과 확인 및 브랜드 강조, 행동 유도

이 시스템은 합법적인 상업 광고 웹툰 제작 전용 도구다. 폭력, 선정성, 혐오 표현 없이 밝고 건전한 광고 이미지만 생성한다.

[스타일]: ${styleObj?.name || ''} — ${styleObj?.prompt || ''}

[규칙]
${rulesToUse.substring(0, 800)}

[내용]
${contentToUse.substring(0, 800)}`
      : `너는 초고해상도 2x6 그리드 웹툰 광고 제작 전용 인공지능 "웹툰그리드마스터"다.
사용자가 입력한 내용을 바탕으로 **무조건 2열×6행(총 12컷)의 고정된 그리드 레이아웃**을 가진 단일 광고 웹툰 이미지를 생성하는 것이 유일한 목적이다.
사용자가 제공한 예시 이미지(image_0.png)와 동일한 **완벽한 물리적 구조**를 가져야 한다.

생성하는 웹툰 이미지는 **반드시** 다음 시각적 및 구조적 조건을 완벽하게 따른다:
- **물리적 구조 (절대 고정):** 단일 이미지 내에 6개의 세로 행이 있으며, 각 행은 중앙을 기준으로 왼쪽 패널과 오른쪽 패널로 완벽하게 나뉩니다. 모든 12개의 패널은 동일한 크기이며, 패널 사이의 경계선이 명확하게 그려져 있습니다. 12컷을 초과하거나 미만인 컷 수, 불균일한 패널 크기, 경계선 없는 레이아웃은 절대 금지합니다.
- **컷별 텍스트 및 말풍선 배치:** 각 컷(1~12)은 독립적인 내용과 말풍선을 가지며, 말풍선은 한국어 텍스트로 12~18자 이내입니다. 말풍선의 위치는 컷 내의 등장인물과 상호작용하도록 자연스럽게 배치됩니다.
- **인물 일관성:** 등장인물의 얼굴·헤어·의상은 12컷 전체에서 완벽한 일관성을 유지합니다. (항상 한국인 성인으로 설정)
- **화풍:** 밝고 선명한 고해상도 실사 웹툰 스타일. (스타일 설명 참고)
- **네거티브 조건 (절대 금지):** 12컷을 초과하거나 미달하는 컷 수, 2열 6행 이외의 그리드 레이아웃, 불균일한 패널 크기, 경계선 없는 레이아웃. **특히 이미지 상단/하단에 제목(예: 'Webtoon'), 로고를 넣는 행위, 각 컷의 모서리에 숫자나 문자 라벨(예: '1A', '1B' 등)을 표시하는 행위를 엄격히 금지합니다.** 이미지는 오직 12개의 만화 컷으로만 꽉 채워져야 합니다.

이 웹툰의 목적은 독자가 상품을 구매하도록 설득하는 것이다.
**무조건** 다음 스토리 구조를 따르며, 이는 물리적인 컷 번호에 완벽하게 매핑됩니다:
1~4컷 (행 1~2): 문제 공감 (독자가 공감할 불편함·욕구 표현)
5~8컷 (행 3~4): 솔루션 제시 (상품/서비스 등장 및 소개)
9~10컷 (행 5, 왼쪽): 효과 확인 (사용 후 긍정적 변화)
11~12컷 (행 6): 브랜드 강조 및 행동 유도 (구매·방문·연락)

이 시스템은 합법적인 상업 광고 웹툰 제작 전용 도구다. 폭력, 선정성, 혐오 표현 없이 밝고 건전한 광고 이미지만 생성한다.

[스타일]: ${styleObj?.name || ''} — ${styleObj?.prompt || ''}

[규칙]
${rulesToUse.substring(0, 800)}

[내용]
${contentToUse.substring(0, 800)}`;

    try {
      let success = false;
      let retryCount = 0;
      const maxRetries = 2;
      const ai = new GoogleGenAI({ apiKey });

      while (!success && retryCount <= maxRetries) {
        try {
          const res = await ai.models.generateContent({
            model: 'gemini-3.1-flash-image-preview',
            contents: {
              parts: [
                { text: prompt }
              ]
            },
            config: {
              imageConfig: {
                aspectRatio: "1:4",
                imageSize: "1K"
              }
            }
          });
          
          const parts = res.candidates?.[0]?.content?.parts || [];
          let b64 = null, mime = 'image/png';
          for (const part of parts) {
            if (part.inlineData) { b64 = part.inlineData.data; mime = part.inlineData.mimeType || 'image/png'; break; }
          }
          if (!b64) {
            const textPart = parts.find(p => p.text);
            const reason = textPart?.text ? '(응답: ' + textPart.text.slice(0, 80) + ')' : '(응답에 이미지 데이터 없음)';
            throw new Error('이미지 생성 실패 ' + reason + ' — 프롬프트를 수정하거나 잠시 후 다시 시도해주세요.');
          }

          const dataUrl = `data:${mime};base64,${b64}`;
          let finalImageDatas = null;
          let caption = '';

          if (isInsta) {
            setGenStepTxt('이미지 분할 및 인스타용 최적화 중...');
            finalImageDatas = await sliceIntoSquares(dataUrl);

            setGenStepTxt('인스타그램 캡션 작성 중...');
            try {
              const captionPrompt = `너는 대한민국 최고의 인스타그램 광고 마케팅 전문가이자 카피라이터야.
다음 웹툰 내용을 바탕으로 인스타그램 피드에서 '구매 전환'과 '클릭'을 폭발시킬 수 있는 매력적인 캡션(본문)을 작성해줘.

[내용]
${contentToUse}

[작성 전략: "공감-자극-해결" 컨셉]
1. **강력한 훅(Hook):** 첫 줄에서 타겟의 페인 포인트(Pain Point)를 찌르거나 궁금증을 유발하는 질문으로 시작할 것. (예: "아직도 OO 때문에 고민하세요?", "이거 모르면 손해봅니다..")
2. **공감 및 스토리:** 웹툰의 상황을 짧고 강렬하게 묘사하여 독자의 공감을 이끌어낼 것.
3. **해결책 제시:** 상품/서비스가 어떻게 문제를 해결해주는지 명확하게 언급.
4. **행동 유도(CTA):** "지금 바로 프로필 링크 확인!", "더 알아보기는 DM 주세요!" 등 명확한 다음 행동 지시.
5. **비주얼 요소:** 적절한 이모지를 사용하여 가독성을 높이고 친근한 인스타그램 감성 말투(~해요, ~보세요) 사용.
6. **해시태그:** 관련성 높은 핵심 해시태그 5~8개 포함.

마크다운 기호 없이 바로 복사해서 사용할 수 있는 순수 텍스트로만 출력해줘.`;
              
              const captionRes = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: captionPrompt,
                config: { temperature: 0.7 }
              });
              caption = captionRes.text || '';
            } catch (e) {
              console.error("캡션 생성 실패:", e);
            }
          }

          setCurrentResult({
            _style: styleObj?.name || '',
            _rules: rulesToUse,
            _content: contentToUse,
            _generatedAt: new Date().toLocaleString('ko-KR'),
            _imageData: isInsta ? null : dataUrl,
            _imageDatas: finalImageDatas,
            _isInsta: isInsta,
            _caption: caption
          });
          success = true;
        } catch (e: any) {
          const errMsg = String(e?.message || (typeof e === 'string' ? e : '')).toLowerCase();
          
          if ((errMsg.includes('requested entity was not found') || errMsg.includes('permission_denied') || errMsg.includes('does not have permission') || errMsg.includes('403')) && (window as any).aistudio) {
            await (window as any).aistudio.openSelectKey();
            throw new Error('API 키 권한이 부족합니다. 결제가 등록된 유료 API 키를 다시 선택해주세요.');
          }

          if ((errMsg.includes('할당량') || errMsg.includes('429') || errMsg.includes('quota')) && retryCount < maxRetries) {
            retryCount++;
            setGenStepTxt(`⚠️ 할당량 초과! 10초 후 재시도 중 (${retryCount}/${maxRetries})...`);
            await sleep(10000);
          } else {
            throw e;
          }
        }
      }
    } catch (e: any) {
      console.error("한방 생성 에러:", e);
      const parsedMsg = parseApiError(e);
      setErrorMsg('생성 오류: ' + parsedMsg);
      setRawError(e?.message || JSON.stringify(e));
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadOneShotImage = () => {
    if (!currentResult) { showToast('이미지가 없어요!'); return; }
    const styleName = (currentResult._style || '웹툰').replace(/[\/\\?*:"<>|]/g, '_');
    const dateStr   = new Date().toLocaleDateString('ko-KR').replace(/\.\s*/g,'').replace('.','');
    
    if (currentResult._imageDatas) {
      currentResult._imageDatas.forEach((img: string, idx: number) => {
        const link = document.createElement('a');
        link.download = `나나바나나_인스타툰_${styleName}_${dateStr}_${idx + 1}.png`;
        link.href = img;
        link.click();
      });
      showToast(`🎉 인스타툰 ${currentResult._imageDatas.length}장 다운로드 완료!`);
    } else if (currentResult._imageData) {
      const link = document.createElement('a');
      link.download = `나나바나나_웹툰_${styleName}_${dateStr}.png`;
      link.href = currentResult._imageData;
      link.click();
      showToast('🎉 웹툰 다운로드 완료!');
    }
  };

  const selectedStyleObj = ALL_STYLES.find(x => x.code === selStyle);

  return (
    <>
      <div className="hdr">
        <div className="hdr-inner">
          <div className="h-left">
            <div className="badge">🍌 나나바나나 STUDIO v2 · Google AI Edition</div>
            <h1>웹툰 상품판매용 제작</h1>
            <p>Gemini AI · 내용 입력 → 스타일 선택 → 규칙 설정 → 🎬 한방 생성 · 88개 스타일</p>
          </div>
          <div className="h-right">
            <div className="by">MADE BY</div>
            <div className="nm">미르</div>
            <button className="cog-btn" onClick={() => setIsSettingsOpen(!isSettingsOpen)} title="Google Gemini API 설정">⚙️</button>
          </div>
        </div>
      </div>

      <div className="main">
        <div className={`settings-panel ${isSettingsOpen ? 'open' : ''}`} id="settingsPanel">
          <div className="set-title">⚙️ Google Gemini API 키 설정</div>
          <div className="api-row">
            <input
              className="api-input"
              type="password"
              value={apiKeyValue}
              onChange={(e) => setApiKeyValue(e.target.value)}
              placeholder="AIza...로 시작하는 Google Gemini API 키를 입력하세요"
              autoComplete="off"
            />
            <button className="api-btn" onClick={saveApiKey}>저장</button>
            <button className="api-btn del" onClick={deleteApiKey}>삭제</button>
            <button className="api-btn test" onClick={testApiKey}>활성화 테스트</button>
          </div>
          <div className="api-status">
            <div className={`status-dot dot-${apiStatus.type}`}></div>
            <span style={{ color: apiStatus.type === 'ok' ? '#22cc77' : apiStatus.type === 'err' ? '#f09595' : '#aaa' }}>
              {apiStatus.msg}
            </span>
          </div>
          <p style={{ fontSize: '10px', color: '#555', marginTop: '10px', lineHeight: 1.75 }}>
            💡 <strong style={{ color: '#888' }}>API 키 발급 방법:</strong>
            <a href="https://aistudio.google.com" target="_blank" rel="noreferrer" style={{ color: '#00F5FF' }}>aistudio.google.com</a>
            → 로그인 → 왼쪽 메뉴 <strong style={{ color: '#888' }}>Get API Key</strong> → 새 키 생성 → 복사 후 여기에 붙여넣기<br />
            🔑 Gemini 2.5 Flash 모델을 사용합니다. API 호출은 생성 1회뿐입니다.
          </p>
        </div>

        <div className="sec-lbl">
          <div className="bar" style={{ background: '#00F5FF' }}></div>
          <span className="sec-ttl" style={{ color: '#00F5FF' }}>① 내용 입력</span>
          <span className="tag" style={{ background: '#00F5FF', color: '#0a0a14' }}>상품·스토리 설명</span>
        </div>

        <div style={{ backgroundColor: '#fff9e6', borderLeft: '5px solid #FFD700', padding: '18px 24px', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginTop: 0, fontSize: '17px', color: '#222', marginBottom: '12px' }}>
            🚀 미르릉의 초간단 웹툰 제작 4단계 가이드
          </h3>
          <ol style={{ margin: 0, paddingLeft: '22px', fontSize: '15px', color: '#444', lineHeight: 1.7 }}>
            <li>
              <strong>주제 입력:</strong> 홍보할 상품이나 핵심 상황, 인물 묘사를 키워드로 짧게 적어주세요. <br />
              <span style={{ fontSize: '13px', color: '#777' }}>(예: 당근마켓 첫사랑, 아이폰16 학생 특가 할인, 주인공: 20대 단발머리 여성)</span>
            </li>
            <li><strong>스타일 선택:</strong> 아래 메뉴 탭(액션, 판타지, 일상 등)에서 원하는 그림체를 고릅니다.</li>
            <li>
              <strong>자동 완성:</strong> 파란색 <strong>[✨ 버튼 하나로 스토리+규칙 자동 완성!]</strong> 버튼을 누릅니다.<br />
              <span style={{ fontSize: '13px', color: '#4a90e2' }}>(AI가 100자 요약부터 12컷 대본 규칙까지 알아서 다 짜줍니다!)</span>
            </li>
            <li><strong>웹툰 생성:</strong> 세팅된 대본을 확인 후, 맨 아래의 <strong>[🎬 한방에 웹툰 생성!]</strong> 버튼을 누르면 끝!</li>
          </ol>
        </div>

        <div style={{ backgroundColor: '#f0f7ff', borderLeft: '4px solid #4a90e2', padding: '16px 20px', borderRadius: '8px', marginBottom: '24px' }}>
          <h3 style={{ marginTop: 0, fontSize: '16px', color: '#333', marginBottom: '8px' }}>🚀 1단계: 핵심 주제만 간단히 입력하세요!</h3>
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="예: 미르통신 S26 특가, 주인공: 안경 쓴 30대 남성 등 핵심 키워드와 인물 묘사 입력" 
          />
          
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <button 
              onClick={generateStoryAndRules} 
              disabled={isAutoGenerating || isGeneratingStoryOnly}
              style={{ flex: 1, padding: '14px', background: '#4a90e2', color: '#fff', fontSize: '15px', fontWeight: 'bold', border: 'none', borderRadius: '6px', cursor: (isAutoGenerating || isGeneratingStoryOnly) ? 'not-allowed' : 'pointer' }}
            >
              {isAutoGenerating ? (isRecommending ? '🤖 2/2: 규칙 분석 중...' : '✍️ 1/2: 스토리 작성 중...') : '✨ 스토리+규칙 한방에 완성!'}
            </button>
            <button 
              onClick={generateStoryOnly} 
              disabled={isAutoGenerating || isGeneratingStoryOnly}
              style={{ flex: 1, padding: '14px', background: '#fff', color: '#4a90e2', fontSize: '15px', fontWeight: 'bold', border: '2px solid #4a90e2', borderRadius: '6px', cursor: (isAutoGenerating || isGeneratingStoryOnly) ? 'not-allowed' : 'pointer' }}
            >
              {isGeneratingStoryOnly ? '✍️ 스토리 작성 중...' : '📝 스토리만 따로 생성'}
            </button>
          </div>
        </div>

        <textarea
          rows={6}
          style={{ borderColor: '#00F5FF', marginTop: '12px' }}
          placeholder="광고할 상품, 핵심 스토리, 강조할 포인트를 자유롭게 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <div className="sec-lbl">
          <div className="bar" style={{ background: '#FFE600' }}></div>
          <span className="sec-ttl" style={{ color: '#FFE600' }}>② 스타일 선택</span>
          <span className="tag" style={{ background: '#FFE600', color: '#111' }}>{ALL_STYLES.length}개 스타일</span>
        </div>
        
        <div className="cat-tabs">
          {STYLE_CATS.map(c => {
            const n = ALL_STYLES.filter(s => s.cat === c.id).length;
            const on = c.id === activeCat;
            return (
              <div 
                key={c.id}
                className={`cat-tab ${on ? 'on' : ''}`} 
                style={on ? { background: c.color, borderColor: c.color, color: '#111' } : {}} 
                onClick={() => setActiveCat(c.id)}
              >
                {c.name} ({n})
              </div>
            );
          })}
        </div>
        
        <div className="style-grid">
          {ALL_STYLES.filter(s => s.cat === activeCat).map(s => (
            <div key={s.code} className={`sb ${s.code === selStyle ? 'on' : ''}`} onClick={() => setSelStyle(s.code)}>
              <div className="sb-code">{s.code}</div>
              <div className="sb-name">{s.name}</div>
            </div>
          ))}
        </div>
        <div className="style-info">
          {selectedStyleObj ? `선택됨: ${selectedStyleObj.code} ${selectedStyleObj.name} — ${selectedStyleObj.prompt.substring(0, 90)}...` : ''}
        </div>

        <div className="sec-lbl">
          <div className="bar" style={{ background: '#FF3CAC' }}></div>
          <span className="sec-ttl" style={{ color: '#FF3CAC' }}>③ 규칙 설정</span>
          <span className="tag" style={{ background: '#FF3CAC', color: '#fff' }}>직접 입력 or AI 추천</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
          <button 
            className="ex-btn" 
            onClick={() => recommendRules()}
            disabled={isRecommending}
            style={{ flex: 'none', background: '#FF3CAC', borderColor: '#FF3CAC', color: '#fff', fontWeight: 700 }}
          >
            {isRecommending ? '🤖 AI 분석 중...' : '🤖 AI 규칙 추천'}
          </button>
          <span style={{ fontSize: '11px', color: '#666' }}>내용·스타일 입력 후 누르면 AI가 최적 규칙을 자동 생성해드려요</span>
        </div>
        <textarea
          rows={10}
          style={{ borderColor: '#FF3CAC' }}
          placeholder="등장인물, 톤, 말풍선 규칙 등을 입력하세요 — 또는 위 AI 추천 버튼을 누르세요"
          value={rules}
          onChange={(e) => setRules(e.target.value)}
        ></textarea>

        <div className="btn-row" style={{ display: 'flex', gap: '12px' }}>
          <button className="gen-btn" onClick={() => generate('webtoon')} disabled={isGenerating} style={{ flex: 1 }}>
            {isGenerating ? '⏳ 생성 중...' : '🎬 한방에 웹툰 생성! (12컷)'}
          </button>
          <button className="gen-btn insta-btn" onClick={() => generate('insta')} disabled={isGenerating} style={{ flex: 1, background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', borderColor: 'transparent', color: '#fff' }}>
            {isGenerating ? '⏳ 생성 중...' : '📱 인스타용 생성! (16컷/4장)'}
          </button>
        </div>

        {errorMsg && (
          <div className="err-box" style={{ display: 'block' }}>
            ⚠️ {errorMsg}
            {rawError && (
              <>
                <br /><br />
                <span style={{ fontSize: '11px', color: '#ffaaaa' }}>[상세 에러 로그]<br />{rawError}</span>
              </>
            )}
          </div>
        )}

        {isGenerating && (
          <div className="loading" style={{ display: 'flex' }}>
            <div className="spinner"></div>
            <div className="step-txt">{genStepTxt}</div>
          </div>
        )}

        {currentResult && (
          <div id="resultBox">
            <div className="sum-card">
              <div className="sum-ttl">✅ {currentResult._isInsta ? `인스타툰 (4컷 x ${currentResult._imageDatas?.length || 4}장)` : '웹툰'} 생성 완료
                <span style={{ fontSize: '10px', color: '#666', fontWeight: 400, marginLeft: '8px' }}>
                  {currentResult._style || ''} · {currentResult._generatedAt || ''}
                </span>
              </div>
            </div>

            <div style={{ textAlign: 'center', margin: '16px 0', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
              {currentResult._imageDatas ? (
                currentResult._imageDatas.map((img: string, idx: number) => (
                  <img 
                    key={idx}
                    src={img}
                    alt={`Generated Instatoon ${idx + 1}`}
                    style={{ maxWidth: '100%', width: '400px', borderRadius: '12px', border: '2px solid #e6683c', boxShadow: '0 4px 24px rgba(230,104,60,.15)' }} 
                  />
                ))
              ) : (
                <img 
                  src={currentResult._imageData}
                  alt="Generated Webtoon"
                  style={{ maxWidth: '100%', borderRadius: '12px', border: '2px solid #FFE600', boxShadow: '0 4px 24px rgba(255,230,0,.15)' }} 
                />
              )}
            </div>

            <div className="webtoon-action-bar">
              <button className="dl-full-btn" onClick={downloadOneShotImage}>
                {currentResult._isInsta ? `⬇️ 인스타툰 ${currentResult._imageDatas?.length || 4}장 모두 다운로드` : '⬇️ 웹툰 PNG 다운로드'}
              </button>
            </div>

            {currentResult._caption && (
              <div style={{ marginTop: '20px', padding: '20px', background: '#fff', borderRadius: '12px', border: '2px solid #e6683c', textAlign: 'left', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '12px', color: '#e6683c', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>📝</span> 인스타그램 캡션 (본문)
                </h3>
                <textarea 
                  readOnly 
                  value={currentResult._caption} 
                  style={{ width: '100%', height: '180px', padding: '12px', borderRadius: '8px', border: '1px solid #e9ecef', fontSize: '14px', color: '#000', resize: 'vertical', marginBottom: '12px', backgroundColor: '#f8f9fa', lineHeight: '1.6', fontWeight: '500' }}
                />
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(currentResult._caption);
                    showToast('📋 캡션이 클립보드에 복사되었습니다!');
                  }}
                  style={{ width: '100%', padding: '14px', background: '#e6683c', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}
                >
                  📋 캡션 복사하기
                </button>
              </div>
            )}
          </div>
        )}

        <div className="footer">
          🍌 나나바나나 Studio v2 · Powered by Google Gemini AI · Made by 미르
        </div>
      </div>

      <div className={`toast ${toastMsg ? 'show' : ''}`}>{toastMsg}</div>
    </>
  );
}
