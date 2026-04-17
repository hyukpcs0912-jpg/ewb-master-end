// 나나바나나 스튜디오 — 스타일 데이터 (88개)
// Made by 미르 · 업데이트: 기존 70개 + 프롬프트 개선 + 신규 18개

export const STYLE_CATS = [
  { id: 'webtoon', name: '현대 웹툰',        color: '#FFE600' },
  { id: 'anime',   name: '애니메이션',        color: '#FF3CAC' },
  { id: 'trad',    name: '한국 전통/사극',    color: '#00F5FF' },
  { id: 'special', name: '특수 장르',         color: '#7B2FBE' },
  { id: 'action', name: '🔥 액션/스포츠', color: '#ff6b6b' },
  { id: 'fantasy', name: '✨ 판타지/로판', color: '#cc5de8' },
  { id: 'thriller', name: '😱 스릴러/호러', color: '#adb5bd' },
  { id: 'slice', name: '🌸 일상/감성', color: '#fcc419' },
  { id: 'etc', name: '⚙️ 기타', color: '#94d82d' },
];

export const ALL_STYLES = [
  // ────────────────────────────────────────
  // 기타 (ETC01~ETC19)
  // ────────────────────────────────────────
  { cat:'etc', code:'ETC01', name:'K-학습만화', 
    prompt:'K-educational comic book style, cute chibi SD characters, bold clean outlines, vibrant high-saturation colors, clear cel shading, bright educational atmosphere, high quality 2D digital painting' },
  { cat:'etc', code:'ETC02', name:'어반 스케치', 
    prompt:'urban sketch style, black ink pen on textured white paper, expressive line art, cross-hatching shadows, high contrast black and white drawing, architect sketchbook aesthetic, artistic and manual feel' },
  { cat:'etc', code:'ETC03', name:'네오-하이브리드 시티', 
    prompt:'neo-vibrant hybrid cityscape, travel poster style, vector lines mixed with lithograph texture, digital collage elements, vibrant color overlaps, traditional and modern fusion, flat but textured' },
  { cat:'etc', code:'ETC04', name:'하이엔드 단체화보', 
    prompt:'high-end minimalist fashion editorial style, cinematic studio lighting, charismatic model poses, luxury fashion brand atmosphere, clean and crisp editorial photography aesthetic' },
  { cat:'etc', code:'ETC05', name:'신문 헤드라인', 
    prompt:'vintage newspaper print style, aged newsprint texture, classic typography fonts, high contrast monochromatic ink photos, authentic printed texture, analog journalism aesthetic' },
  { cat:'etc', code:'ETC06', name:'SF 전쟁터', 
    prompt:'epic cinematic sci-fi war style, huge futuristic battle cruisers, alien biological structures, dramatic orange and blue lighting, high-tech metal and organic textures, debris and smoke' },
  { cat:'etc', code:'ETC07', name:'심플 인포그래픽', 
    prompt:'minimalist clean infographic style, flat design, icon-based visual metaphors, simple and clear color palette, easy to understand visual communication, bright and modern aesthetic' },
  { cat:'etc', code:'ETC08', name:'추억의 파편', 
    prompt:'surreal memory fragments style, floating glass shards acting as windows, cinematic high contrast lighting, moody dark concrete background, vibrant memories glowing inside glass' },
  { cat:'etc', code:'ETC09', name:'구름 위 미니어처', 
    prompt:'3D miniature island floating above white clouds, isometric city rendering, C4D Octane Render style, DreamWorks 3D animation look, soft lighting, exquisite micro world details' },
  { cat:'etc', code:'ETC10', name:'극단적 감성 카드', 
    prompt:'dramatic cinematic postcard style, intense emotional expressions with tears of triumph, gold-foil elegant calligraphy, epic lighting, majestic backgrounds like sunrise or deep space' },
  { cat:'etc', code:'ETC11', name:'서정적 하이브리드', 
    prompt:'experimental hybrid lyric art, impasto oil paint texture on handmade paper, dreamlike watercolor bleeding, sharp sunlight and shadows, avant-garde multimedia art style' },
  { cat:'etc', code:'ETC12', name:'세이넨 망가', 
    prompt:'high-detail Seinen manga style, heavy ink hatching, dense screentones, grayscale monochrome with selective glowing neon blue and violet accents on eyes, high-tension cinematic perspective' },
  { cat:'etc', code:'ETC13', name:'가이드 웹툰', 
    prompt:'professional 2D guide webtoon style, chibi SD character design, clean bold outlines, flat cel shading with soft pastel colors, minimalist white background, clear instructional layout' },
  { cat:'etc', code:'ETC14', name:'수사 코르크 보드', 
    prompt:'detective investigation cork board style, vintage polaroids and maps pinned with red strings, moody noir atmosphere, single warm spotlight, mystery thriller aesthetic, detailed realistic textures' },
  { cat:'etc', code:'ETC15', name:'행사장 셀카 POV', 
    prompt:'first-person POV selfie style, wide angle lens distortion, immersive crowded event background, historical or futuristic setting, smiling into the camera lens with realistic arm stretching' },
  { cat:'etc', code:'ETC16', name:'기억의 리얼 칠링', 
    prompt:'Lomo LC-A vintage film style, bird eye view, sea of black and white fashion photos, striking color contrast on main subject, heavy vignetting, film grain, nostalgic cinematic atmosphere' },
  { cat:'etc', code:'ETC17', name:'스크린 팝업', 
    prompt:'dynamic 3D pop-out style, character breaking through smartphone screen, flying glass shards, strong perspective distortion, hybrid of hyper-realism and digital surrealism' },
  { cat:'etc', code:'ETC18', name:'구름 위 산책', 
    prompt:'ethereal cinematic walk on clouds, golden hour lighting, wide shot of fluffy golden cloud sea, soft rim light, hyper-realistic textures, peaceful dreamlike composition' },
  { cat:'etc', code:'ETC19', name:'순정만화 클래식', 
    prompt:'classic 1970s-80s shoujo manga style, large sparkling eyes with stars, falling roses and ribbons decoration, professional screentone patterns, romantic high-contrast ink lineart' },

  // ────────────────────────────────────────
  // 현대 웹툰 (W01~W21)
  // ────────────────────────────────────────
  { cat:'webtoon', code:'W01', name:'네이버 웹툰 감성',
    prompt:'clean Korean webtoon style, smooth lineart, soft gradient shading, expressive faces, storytelling composition, full-bleed' },
  { cat:'webtoon', code:'W02', name:'하이퀄 일러 웹툰',
    prompt:'high detail webtoon illustration, polished shading, refined character design, cinematic color grading, full-bleed' },
  { cat:'webtoon', code:'W03', name:'세미리얼 웹툰',
    prompt:'semi-realistic Korean webtoon style, soft shading, emotional expression, cinematic lighting, full-bleed' },
  { cat:'webtoon', code:'W04', name:'로맨스 웹툰',
    prompt:'romantic webtoon style, soft lighting, delicate expression, warm tones, emotional storytelling, full-bleed' },
  { cat:'webtoon', code:'W05', name:'다크 웹툰',
    prompt:'dark tone webtoon style, deep shadows, moody lighting, tension-heavy composition, full-bleed' },
  { cat:'webtoon', code:'W06', name:'고요한 정적 웹툰',
    prompt:'still composition webtoon, minimal movement, emotional silence, soft lighting, full-bleed' },
  { cat:'webtoon', code:'W07', name:'POV 몰입 웹툰',
    prompt:'first-person perspective webtoon, immersive scene, viewer inside story, emotional POV framing, full-bleed' },
  { cat:'webtoon', code:'W08', name:'소프트 애니 감성',
    prompt:'soft anime style webtoon, gentle colors, emotional tone, clean rendering, full-bleed' },
  { cat:'webtoon', code:'W09', name:'로맨스 애니 웹툰',
    prompt:'romantic anime webtoon style, soft lighting, warm tones, emotional expression, full-bleed' },
  { cat:'webtoon', code:'W10', name:'극장판 웹툰',
    prompt:'cinematic anime movie webtoon style, high detail background, dramatic lighting, emotional storytelling, full-bleed' },
  { cat:'webtoon', code:'W11', name:'현대 라이트 노벨',
    prompt:'modern webtoon style, light novel cover illustration, clean and crisp cel shading, highly detailed and trendy character design, sharp line art, eye-catching vibrant colors, high resolution, full-bleed' },
  { cat:'webtoon', code:'W12', name:'로맨스 판타지',
    prompt:'Korean romance fantasy webtoon style, elegant and opulent aristocratic outfits, glittering jewels, extremely detailed sparkling eyes, soft glowing lighting, luxurious palace background, romantic and dramatic atmosphere, full-bleed' },
  { cat:'webtoon', code:'W13', name:'다크 로맨스/누아르',
    prompt:'dark romance anime style, gothic elegance, moody and seductive atmosphere, deep shadows, crimson red accents, elegant but dangerous vibe, wealthy and secretive background, full-bleed' },
  { cat:'webtoon', code:'W14', name:'해학적 야담 웹툰',
    prompt:'Korean webtoon with subtle ink wash texture, traditional paper grain, muted earthy color palette with pops of color, exaggerated comedic facial expressions, dynamic composition, humorous atmosphere, full-bleed' },
  { cat:'webtoon', code:'W15', name:'가짜 애니 스크린샷',
    prompt:'fake anime screenshot, 16:9 aspect ratio, TV broadcast aesthetic, cinematic composition, depth of field, full-bleed' },
  { cat:'webtoon', code:'W16', name:'어반 느와르',
    prompt:'urban noir anime style, dark alleyway at night, neon signs, rain on the ground, high contrast, moody dramatic lighting, full-bleed' },
  { cat:'webtoon', code:'W17', name:'영화적 2D 애니',
    prompt:'cinematic 2D anime illustration style, soft warm daylight, muted earthy color tones, smooth hand-painted shading, gentle brown line art, realistic anime facial expressions, soft background depth, full-bleed, no cel shading, no vector lines, no 3D' },
  { cat:'webtoon', code:'W18', name:'피부질감 부드러운 2D',
    prompt:'modern 2D anime illustration, warm nostalgic lighting, soft painterly shading, modern bedtime story 2D digital illustration style, soft rounded character design, clean smooth shading, muted color palette, cozy and calming atmosphere, round and soft facial shapes, chubby cheeks, smooth curved jawlines, full-bleed, no harsh contrast, no text' },
  { cat:'webtoon', code:'W19', name:'세미리얼 사극 웹툰',
    prompt:'semi-realistic Korean webtoon style, Joseon dynasty setting, hanbok, soft shading, emotional expression, cinematic lighting, full-bleed' },
  { cat:'webtoon', code:'W20', name:'다크 사극 웹툰',
    prompt:'dark tone webtoon style, deep shadows, moody lighting, tension-heavy composition, historical Korean setting, Joseon atmosphere, full-bleed' },
  { cat:'webtoon', code:'W21', name:'로맨스 사극 웹툰',
    prompt:'romantic webtoon style, soft lighting, delicate expression, warm tones, emotional storytelling, historical Korean Joseon setting, hanbok costume, full-bleed' },

  // ────────────────────────────────────────
  // 애니메이션 (A01~A28)
  // ────────────────────────────────────────
  { cat:'anime', code:'A01', name:'기본 셀셰이딩',
    prompt:'clean anime style, crisp lineart, cel shading, expressive eyes, clean color separation, polished 2D anime illustration, full-bleed' },
  { cat:'anime', code:'A02', name:'소녀만화 로맨스',
    prompt:'soft shoujo anime style, delicate linework, pastel palette, sparkling eyes, romantic mood, elegant composition, full-bleed' },
  { cat:'anime', code:'A03', name:'청춘 일상 애니',
    prompt:'slice of life anime style, soft clean lineart, warm lighting, natural pose, cozy atmosphere, everyday animation aesthetic, full-bleed' },
  { cat:'anime', code:'A04', name:'극장판 감성 애니',
    prompt:'cinematic anime movie style, painterly background, dramatic lighting, emotional composition, richly detailed environment, full-bleed' },
  { cat:'anime', code:'A05', name:'스튜디오 감성 애니',
    prompt:'whimsical anime style, soft natural colors, storybook atmosphere, expressive character acting, detailed fantasy background, full-bleed' },
  { cat:'anime', code:'A06', name:'하늘·빛 연출 애니',
    prompt:'anime style with luminous skies, glowing sunset light, reflective atmosphere, emotionally cinematic background, detailed clouds, full-bleed' },
  { cat:'anime', code:'A07', name:'고퀄 일상 애니',
    prompt:'polished anime style, gentle lighting, refined facial features, soft emotional acting, clean interiors, everyday beauty, full-bleed' },
  { cat:'anime', code:'A08', name:'90년대 일본 애니',
    prompt:'retro 1990s anime style, classic cel animation look, slightly muted palette, vintage linework, nostalgic character design, full-bleed' },
  { cat:'anime', code:'A09', name:'80년대 복고 애니',
    prompt:'retro 1980s anime aesthetic, bold hair shapes, analog cel feel, classic shading, nostalgic Japanese animation vibe, full-bleed' },
  { cat:'anime', code:'A10', name:'비주얼노벨 캐릭터',
    prompt:'visual novel anime style, front-facing character presentation, clean costume details, polished shading, dialogue-scene ready, full-bleed' },
  { cat:'anime', code:'A11', name:'치비 스타일',
    prompt:'chibi anime style, super deformed proportions, oversized head, tiny body, adorable expression, bright clean colors, kawaii aesthetic, full-bleed' },
  { cat:'anime', code:'A12', name:'90년대 레트로',
    prompt:'90s retro anime style, traditional cel animation, vintage color palette, VHS aesthetic, slight film grain, nostalgic and lo-fi atmosphere, full-bleed' },
  { cat:'anime', code:'A13', name:'스튜디오 지브리',
    prompt:'Studio Ghibli style, hand-drawn traditional animation, soft watercolor backgrounds, highly detailed lush nature, whimsical and peaceful atmosphere, beautiful natural lighting, full-bleed' },
  { cat:'anime', code:'A14', name:'신카이 마코토',
    prompt:'Makoto Shinkai style, breathtaking cinematic lighting, dramatic lens flare, hyper-detailed clouds and gorgeous sky, photorealistic background, vibrant and emotional color grading, full-bleed' },
  { cat:'anime', code:'A15', name:'지브리풍 스타일 1',
    prompt:'Studio Ghibli style, 2D anime, cel-shading, vintage color palette, focus on facial expressions, soft lighting, full-bleed, close-up shot' },
  { cat:'anime', code:'A16', name:'지브리풍 스타일 2',
    prompt:'Anime scene, Studio Ghibli style, Korean traditional setting, warm muted color palette, light brown and beige tones, subtle film grain, detailed 2D animation, soft lighting, depth of field, full-bleed' },
  { cat:'anime', code:'A17', name:'지브리 감성 힐링',
    prompt:'hand-painted whimsical anime, soft natural light, storybook mood, gentle color palette, emotional atmosphere, detailed background, warm cinematic feeling, full-bleed' },
  { cat:'anime', code:'A18', name:'하이엔드 일러스트',
    prompt:'premium anime illustration style, ultra clean lineart, refined details, elegant color balance, polished commercial artwork, full-bleed' },
  { cat:'anime', code:'A19', name:'게임 컷신형',
    prompt:'anime game cutscene style, cinematic pose, dramatic perspective, polished character rendering, story-driven mood, full-bleed' },
  { cat:'anime', code:'A20', name:'JRPG 캐릭터 아트',
    prompt:'JRPG anime style, fantasy costume detail, heroic stance, polished promotional illustration, richly designed world feel, full-bleed' },
  { cat:'anime', code:'A21', name:'음악 MV 애니',
    prompt:'anime music video style, dramatic lighting, stylized motion feel, emotional performance pose, vivid stage or abstract background, full-bleed' },
  { cat:'anime', code:'A22', name:'로맨틱 판타지 애니',
    prompt:'romantic fantasy anime style, elegant costume, glowing magical accents, dreamy atmosphere, soft cinematic beauty, full-bleed' },
  { cat:'anime', code:'A23', name:'전투 콘셉트 아트',
    prompt:'anime concept art style, dynamic action scene, environment storytelling, explosion effects, cinematic composition, detailed cel shading, full-bleed' },
  { cat:'anime', code:'A24', name:'한국고전 애니무비',
    prompt:'Korean historical anime movie style, hand-drawn 2D cel animation, round and soft facial shapes, chubby cheeks, smooth curved jawlines, realistic but softened anime face proportions, warm pastel palette, flat cinematic shading, subtle emotional acting, 4k, ultra detailed, full-bleed' },
  { cat:'anime', code:'A25', name:'완전 애니메 사극',
    prompt:'anime-style Korean historical scene, cel shading, expressive characters, dramatic lighting, stylized composition, Joseon dynasty, full-bleed' },
  { cat:'anime', code:'A26', name:'판타지 애니 사극',
    prompt:'fantasy anime historical setting, mystical light, epic mood, Joseon era costumes, magical elements, cinematic anime style, full-bleed' },
  { cat:'anime', code:'A27', name:'일본풍 사극 애니',
    prompt:'Japanese anime historical style, refined lineart, cinematic lighting, emotional acting, period costume, dramatic atmosphere, full-bleed' },
  { cat:'anime', code:'A28', name:'다크 애니 사극',
    prompt:'dark anime style Korean historical, heavy shadows, tension, dramatic composition, Joseon setting, full-bleed' },

  // ────────────────────────────────────────
  // 한국 전통/사극 (T01~T27)
  // ────────────────────────────────────────
  { cat:'trad', code:'T01', name:'전래동화 수채화',
    prompt:'Korean folktale watercolor illustration style, soft hand-painted texture, warm afternoon sunlight, gentle pastel color palette, paper texture visible, no sharp lines, no anime style, nostalgic Korean audiobook thumbnail illustration, full-bleed' },
  { cat:'trad', code:'T02', name:'2000년대 한국애니',
    prompt:'classic 2000s Korean TV cel animation style, bold black outlines, flat color shading, single-tone shadow blocks, dramatic folktale confrontation scene, broadcast animation look, smooth curved jawlines, full-bleed' },
  { cat:'trad', code:'T03', name:'한국 전래동화 2D',
    prompt:'modern 2D anime illustration style, warm nostalgic lighting, expressive surprised faces, soft painterly shading, perfect for Korean story audiobook thumbnail, full-bleed, no text, no harsh contrast' },
  { cat:'trad', code:'T04', name:'현대적 한국민화',
    prompt:'modern Korean folktale anime illustration style, soft cinematic lighting, subtle skin shading, warm sepia tones, soft depth of field background, hand-painted digital anime look, full-bleed' },
  { cat:'trad', code:'T05', name:'조선풍속화 스타일1',
    prompt:'traditional Korean genre painting style, soft ink outlines with gentle color washes, aged paper texture, warm muted earth tones, historical storytelling, calm nostalgic mood, smooth curved jawlines, gentle innocent facial structure, full-bleed' },
  { cat:'trad', code:'T06', name:'조선풍속화 스타일2',
    prompt:'painted in Korean late-Joseon genre painting style pungsokhwa, soft ink-and-wash with light color fills sumuk-damchae, visible brush strokes, uneven natural ink outlines, muted pastel hanbok colors, flat perspective, no shading, no realism, no 3D, traditional Korean documentary painting on aged paper, full-bleed' },
  { cat:'trad', code:'T07', name:'한국역사 드라마 애니',
    prompt:'Korean historical drama animation style, bright clean line art illustration, soft lighting, high detail, professional webtoon art, full-bleed' },
  { cat:'trad', code:'T08', name:'전래동화 힐링 일러스트',
    prompt:'traditional Korean folktale watercolor healing illustration, soft ink outlines with gentle color washes, visible aged paper texture, muted pastel warm earth tones, calm nostalgic peaceful mood, soft brush stroke feeling, no harsh contrast, perfect for Korean healing and sleep audiobook illustration, full-bleed' },
  { cat:'trad', code:'T09', name:'레트로 전래동화 2D',
    prompt:'warm sepia-tinted Korean folktale 2D digital illustration, soft retro color grading, muted green and brown palette, medium-thick dark brown outlines, soft cel-style shading with gentle gradients, slightly big-head semi-deformed characters, expressive but simple facial features, calm storybook atmosphere, full-bleed, no text' },
  { cat:'trad', code:'T10', name:'한국 사극 웹툰 (군중)',
    prompt:'Korean historical webtoon animation style, clean and precise line art, soft muted pastel color palette, expressive exaggerated crowd reactions, flat but cinematic shading, traditional Joseon architecture background, balanced composition, professional webtoon illustration quality, full-bleed' },
  { cat:'trad', code:'T11', name:'전래동화 로맨스 2D',
    prompt:'Korean folktale romance 2D animation style, warm golden-hour lighting, soft painterly shading, gentle emotional facial expressions, natural hand-holding pose, pastoral countryside background, muted earthy tones, calm nostalgic mood, full-bleed, no harsh contrast' },
  { cat:'trad', code:'T12', name:'조선시대 풍속 웹툰',
    prompt:'Joseon-era Korean genre webtoon illustration style, clean ink outlines, muted traditional hanbok colors, soft indoor lighting, expressive facial acting, balanced storytelling composition, flat perspective with modern polish, full-bleed' },
  { cat:'trad', code:'T13', name:'낭만적인 야담 애니',
    prompt:'modern Korean webtoon illustration, warm romantic sunset lighting, soft cel-shading, clean lines, expressive faces, hanbok details, emotional and hopeful atmosphere, detailed pastoral background, 4k, full-bleed' },
  { cat:'trad', code:'T14', name:'조선 궁중 카툰 애니',
    prompt:'Korean palace cartoon animation style, bold expressive facial features, exaggerated eye expressions, vivid hanbok colors, thick clean outlines, flat shading, humorous dramatic tension, traditional interior background, 2D cel-style look, full-bleed' },
  { cat:'trad', code:'T15', name:'애니메 사극',
    prompt:'anime-style Korean historical scene, cel shading, expressive characters, dramatic lighting, full-bleed' },
  { cat:'trad', code:'T16', name:'다크 애니 사극',
    prompt:'dark anime style Korean historical, heavy shadows, tension, dramatic composition, full-bleed' },
  { cat:'trad', code:'T17', name:'로맨스 판타지 사극',
    prompt:'Korean historical fantasy anime, romantic atmosphere, glowing magical lighting, hanbok costume with fantasy elements, cinematic mood, full-bleed' },
  { cat:'trad', code:'T18', name:'사극 판타지 웹툰',
    prompt:'Korean historical fantasy webtoon, mystical lighting, subtle magical elements, cinematic mood, full-bleed' },
  { cat:'trad', code:'T19', name:'궁중 로열 웹툰',
    prompt:'palace setting Korean webtoon, royal hanbok, gold accents, elegant composition, full-bleed' },
  { cat:'trad', code:'T20', name:'생활형 사극 웹툰',
    prompt:'daily life Joseon setting webtoon, natural lighting, realistic tone, grounded storytelling, full-bleed' },
  { cat:'trad', code:'T21', name:'수묵화 스타일',
    prompt:'traditional Korean ink painting style, brush strokes, minimal color, hanok and hanbok elements, poetic artistic composition, full-bleed' },
  { cat:'trad', code:'T22', name:'수채화 사극',
    prompt:'watercolor painting style Korean historical, soft edges, muted tones, dreamy atmosphere, full-bleed' },
  { cat:'trad', code:'T23', name:'판타지 사극',
    prompt:'fantasy Korean historical setting, mystical lighting, magical elements, dramatic composition, full-bleed' },
  { cat:'trad', code:'T24', name:'전통 패턴 강조',
    prompt:'Korean patterns, hanbok textures, decorative elements, cultural detail, traditional pattern emphasis, full-bleed' },
  { cat:'trad', code:'T25', name:'해학적 야담 웹툰',
    prompt:'Korean webtoon subtle ink wash texture, traditional paper grain, muted earthy color palette with pops of color, exaggerated comedic facial expressions, dynamic composition, humorous atmosphere, full-bleed' },
  { cat:'trad', code:'T26', name:'기묘한 야담 흑백',
    prompt:'eerie monochromatic Korean folk tale illustration, rough ink brushstrokes, high contrast charcoal textures, mysterious and spooky atmosphere, ghost story aesthetic, minimal color red accents optional, traditional village night scene, full-bleed' },
  { cat:'trad', code:'T27', name:'기괴한 야담 수묵채색',
    prompt:'eerie Korean folk tale style, dark ink wash with vivid ghostly colors deep red and pale blue, blurred edges, smoky atmosphere, supernatural mystery mood, traditional brush texture, hauntingly beautiful, full-bleed' },

  // ────────────────────────────────────────
  // 특수 장르 (S01~S22)
  // ────────────────────────────────────────
  { cat:'special', code:'S01', name:'삼국지 수묵 액션',
    prompt:'dynamic traditional East Asian ink wash painting sumi-e, bold expressive brushstrokes, powerful battlefield action, swirling ink clouds, heroic character poses, muted ink tones with gold and red accents, epic scale, full-bleed' },
  { cat:'special', code:'S02', name:'역사 다큐 서사',
    prompt:'historical documentary-style epic illustration, war-record storytelling composition, ember red and smoke-drenched color grading, realistic fire-lit atmosphere, narration-friendly wide framing, painterly digital realism, heavy historical weight and tragedy tone, full-bleed' },
  { cat:'special', code:'S03', name:'기묘한 야담 흑백',
    prompt:'eerie monochromatic Korean folk tale illustration, rough ink brushstrokes, high contrast charcoal textures, mysterious and spooky atmosphere, ghost story aesthetic, minimal color red accents optional, traditional village night scene, full-bleed' },
  { cat:'special', code:'S04', name:'기괴한 야담 수묵채색',
    prompt:'eerie Korean folk tale style, dark ink wash with vivid ghostly colors deep red and pale blue, blurred edges, smoky atmosphere, supernatural mystery mood, traditional brush texture, hauntingly beautiful, full-bleed' },
  { cat:'special', code:'S05', name:'동양 무협 웹툰',
    prompt:'Korean webtoon manhwa art style, sharp and clean digital line art with detailed ink linework, cinematic cell shading, martial arts Wuxia Murim theme, heroic swordsman in traditional oriental robes, glowing ethereal spirit energy effects dark aura swirl white spirit dragon, dramatic lighting, high-contrast digital illustration, vibrant yet grounded colors, full-bleed' },
  { cat:'special', code:'S06', name:'현대 판타지 무협',
    prompt:'Korean webtoon manhwa art style, sharp and clean digital line art with detailed ink linework, cinematic cell shading, martial arts Wuxia Murim theme, glowing ethereal spirit energy effects, dramatic lighting, high-contrast digital illustration, vibrant yet grounded colors, full-bleed' },
  { cat:'special', code:'S07', name:'전통 수묵화 필치',
    prompt:'traditional oriental ink wash painting style, sumi-e aesthetic, bold brush strokes, charcoal textures, splashes of ink, minimalist mountain background, high-contrast black and white with subtle gold accents, dynamic movement, fluid martial arts poses, ancient parchment texture, full-bleed' },
  { cat:'special', code:'S08', name:'거친 먹선 세이넨',
    prompt:'dark gritty seinen manhwa style, heavy ink hatching, rough textures, visceral martial arts action, weathered traditional armor, scars and sweat details, moody atmosphere, monochromatic with deep shadows, cinematic framing, sharp angular lines, realistic anatomy, full-bleed' },
  { cat:'special', code:'S09', name:'사무라이 애니',
    prompt:'samurai anime style, flowing kimono or armor, dramatic pose, wind effects, cinematic cel shading, historical Japanese mood, full-bleed' },
  { cat:'special', code:'S10', name:'닌자 애니',
    prompt:'ninja anime style, stealth pose, dynamic action, sharp cel shading, moonlit atmosphere, fast movement energy, full-bleed' },
  { cat:'special', code:'S11', name:'학원물 애니',
    prompt:'school anime style, Japanese school uniform, youthful expression, clean background, polished everyday anime look, full-bleed' },
  { cat:'special', code:'S12', name:'스포츠 애니',
    prompt:'sports anime style, tense pose, sweat highlights, powerful motion, dramatic framing, competitive energy, full-bleed' },
  { cat:'special', code:'S13', name:'요괴·퇴마 애니',
    prompt:'supernatural anime style, spiritual aura, talismans, eerie blue lighting, Japanese occult fantasy mood, full-bleed' },
  { cat:'special', code:'S14', name:'미스터리 애니',
    prompt:'suspenseful anime style, subdued palette, cinematic shadows, psychological mood, detailed urban or interior setting, full-bleed' },
  { cat:'special', code:'S15', name:'호러 애니',
    prompt:'horror anime style, unsettling expression, eerie atmosphere, dark composition, sharp contrast, ominous background, full-bleed' },
  { cat:'special', code:'S16', name:'감성 여행 애니',
    prompt:'scenic anime style, beautiful countryside or cityscape, traveler character, atmospheric lighting, emotional cinematic mood, full-bleed' },
  { cat:'special', code:'S17', name:'동양풍 수묵화 애니',
    prompt:'oriental anime style, traditional ink wash painting aesthetic, graceful brush strokes, elegant and flowing lines, muted and atmospheric cinematic colors, wuxia fantasy feel, full-bleed' },
  { cat:'special', code:'S18', name:'무협 웹툰 스타일2',
    prompt:'Korean webtoon manhwa art style, sharp and clean digital line art, cinematic cell shading, martial arts Wuxia Murim theme, heroic swordsman in oriental robes, glowing ethereal spirit energy effects, dynamic high-contrast digital illustration, vibrant yet grounded colors, full-bleed' },
  { cat:'special', code:'S19', name:'SF 사이버펑크 애니',
    prompt:'sci-fi cyberpunk anime style, futuristic neon city, holographic UI elements, dramatic rim lighting, high-tech character design, cinematic composition, full-bleed' },
  { cat:'special', code:'S20', name:'동화 판타지 애니',
    prompt:'fantasy fairy tale anime style, magical sparkles, dreamy pastel palette, enchanted forest background, whimsical character design, storybook aesthetic, full-bleed' },
  { cat:'special', code:'S21', name:'감성 드라마 애니',
    prompt:'emotional drama anime style, cinematic close-up, tear or intense expression, moody lighting, soft focus background, powerful storytelling mood, full-bleed' },
  { cat:'special', code:'S22', name:'역사 서사 애니무비',
    prompt:'historical epic anime movie style, wide cinematic framing, dramatic battlefield or palace scene, rich detailed backgrounds, emotional storytelling, painterly digital illustration, full-bleed' },

  {
    code: 'ACT01',
    name: '다크 사무라이',
    prompt: '[STYLE] 어둡고 극적인 분위기의 일본 사무라이 애니메이션 화풍. 묵직하고 거친 선화, 강렬한 명암 대비가 특징입니다. 먹구름 낀 하늘, 휘날리는 낙엽, 비장한 전사의 표정과 섬세한 갑옷 묘사 등 진지한 시대극 연출에 최적화되어 있습니다.',
    cat: 'action'
  },
  {
    code: 'FAN01',
    name: '다크 판타지 CG',
    prompt: '[STYLE] 고퀄리티 다크 판타지 게임의 CG 일러스트 스타일. 어둡고 장엄한 배경(불타는 성, 폐허 등)과 빛나는 마법 이펙트, 디테일한 무기와 갑옷 묘사가 특징입니다. 극적인 조명과 비장한 스토리를 담아내는 연출에 적합합니다.',
    cat: 'fantasy'
  },
  {
    code: 'FAN02',
    name: '로맨스 판타지',
    prompt: '[STYLE] 화려하고 우아한 웹소설/라이트노벨 표지 일러스트 스타일. 반짝이는 빛 효과, 부드러운 파스텔 톤 색감, 화려한 드레스와 장신구를 착용한 미형 캐릭터 묘사가 돋보입니다. 밝고 신비로운 마법 도서관이나 궁전 배경에 어울립니다.',
    cat: 'fantasy'
  },
  {
    code: 'SLC01',
    name: '지브리풍 힐링',
    prompt: '[STYLE] 따뜻하고 서정적인 극장판 애니메이션 스타일. 수채화 느낌의 아름다운 자연 배경(노을 지는 계단식 논, 시골 풍경 등), 부드러운 빛의 묘사, 향수를 불러일으키는 감성적이고 따뜻한 톤이 특징입니다.',
    cat: 'slice'
  },
  {
    code: 'THR01',
    name: '광기 호러',
    prompt: '[STYLE] 섬뜩하고 기괴한 심리 호러 애니메이션 화풍. 짙은 그림자, 창백한 피부, 광기가 어린 소름 돋는 눈빛 묘사가 핵심입니다. 어둡고 음침한 뒷골목 배경과 핏기 없는 차가운 색감이 공포감을 극대화합니다.',
    cat: 'thriller'
  },
  {
    code: 'THR02',
    name: '미스터리 추리',
    prompt: '[STYLE] 차갑고 건조한 톤의 미스터리 스릴러 애니메이션 화풍. 비 오는 어두운 밤, 스산한 골목길, 플래시 불빛 등 느와르적인 연출이 특징입니다. 사실적인 인물 비율과 긴장감 넘치는 무거운 분위기를 조성합니다.',
    cat: 'thriller'
  },
  {
    code: 'ACT02',
    name: '퇴마 소년만화',
    prompt: '[STYLE] 화려한 마법 이펙트가 돋보이는 열혈 소년만화 애니메이션 화풍. 날카롭고 선명한 선화, 빛나는 부적과 요괴 등 판타지 배틀 요소가 강합니다. 역동적인 액션 포즈와 뚜렷한 색감이 특징입니다.',
    cat: 'action'
  },
  {
    code: 'ACT03',
    name: '열혈 하이틴 스포츠',
    prompt: '[STYLE] 강렬한 속도감과 박진감이 넘치는 스포츠 애니메이션 화풍. 하이 콘트라스트 명암, 땀방울 묘사, 모션 블러 효과, 역동적인 구도(스파이크 등)를 통해 뜨거운 경기장의 열기와 에너지를 완벽하게 전달합니다.',
    cat: 'action'
  },
  {
    code: 'SLC02',
    name: '청춘 학원물',
    prompt: '[STYLE] 밝고 청량한 분위기의 미소녀 학원물 애니메이션 일러스트. 깔끔한 선화, 화사하고 따뜻한 색감, 일상적이고 포근한 학교 교실 배경이 특징입니다. 캐릭터의 밝은 표정과 디테일한 교복 묘사가 돋보입니다.',
    cat: 'slice'
  },
  {
    code: 'ACT04',
    name: '닌자 액션',
    prompt: '[STYLE] 스피디하고 스타일리시한 닌자 액션 애니메이션 화풍. 보름달이 뜬 푸른빛의 밤하늘 색감, 기와지붕 위를 달리는 날렵한 캐릭터 묘사, 검의 궤적을 표현하는 만화적인 이펙트 선이 액션성을 강조합니다.',
    cat: 'action'
  },
  {
    code: 'FAN03',
    name: '순정 벚꽃 로맨스', // Image 19
    prompt: '[STYLE] 반짝이고 화사한 순정 만화 및 로맨스 애니메이션 화풍. 흩날리는 벚꽃, 파스텔 톤의 부드러운 색감, 반짝이는 눈망울과 섬세한 머리카락 묘사가 특징입니다. 풋풋하고 설레는 로맨스 연출에 최적화되어 있습니다.',
    cat: 'fantasy'
  },
  {
    code: 'SLC03',
    name: 'SD 치비 애니', // Image 10 (이전에 언급하신 치비 스타일 정식 추가!)
    prompt: '[STYLE] 귀엽고 아기자기한 2등신 치비(Chibi)/SD 만화 스타일. 둥글둥글한 선화, 밝고 쨍한 색감, 단순화되었지만 특징이 뚜렷한 캐릭터와 배경 묘사가 특징입니다. 코믹하고 귀여운 연출에 적합합니다.',
    cat: 'slice'
  },
  {
    code: 'SLC04',
    name: '비주얼 노벨', // Image 11
    prompt: '[STYLE] 깔끔하고 정교한 미소녀 연애 시뮬레이션(비주얼 노벨) 게임 CG 화풍. 정면을 응시하는 캐릭터 중심의 구도, 부드러운 채색, 디테일한 교실 배경과 화사한 햇살 묘사가 돋보입니다.',
    cat: 'slice'
  },
  {
    code: 'ACT05',
    name: '8090 네오 레트로', // Image 12
    prompt: '[STYLE] 80~90년대 셀 애니메이션 특유의 거친 질감과 색감을 살린 레트로 사이버펑크/SF 화풍. 네온사인, 진한 명암, 볼륨감 있는 헤어스타일 등 클래식한 일본 애니메이션의 감성을 완벽하게 재현합니다.',
    cat: 'action'
  },
  {
    code: 'SLC05',
    name: '90s 아날로그 감성', // Image 13
    prompt: '[STYLE] 90년대 초반 TV 애니메이션 특유의 따뜻하고 차분한 아날로그 화풍. 노을 진 하굣길, 빛바랜 듯한 빈티지한 색감, 펜선이 살아있는 배경 묘사로 향수와 아련함을 자극합니다.',
    cat: 'slice'
  },
  {
    code: 'SLC06',
    name: '모던 일상 치유물', // Image 14
    prompt: '[STYLE] 차분하고 따뜻한 현대 일상 및 치유물 애니메이션 화풍. 햇살이 비치는 아늑한 방, 책장, 커피 등 생활감이 묻어나는 소품 묘사와 편안하고 부드러운 색감이 심리적인 안정감을 줍니다.',
    cat: 'slice'
  },
  {
    code: 'SLC07',
    name: '빛의 마술사 풍경', // Image 15
    prompt: '[STYLE] 압도적인 빛의 묘사와 웅장한 하늘 풍경이 돋보이는 고퀄리티 극장판 애니메이션 화풍. 드라마틱한 구름, 반짝이는 수면, 세밀한 배경 디테일로 서정적이고 벅찬 감동을 줍니다.',
    cat: 'slice'
  },
  {
    code: 'FAN04',
    name: '동화풍 어드벤처', // Image 16
    prompt: '[STYLE] 유럽의 동화책을 연상시키는 맑은 수채화풍 판타지 애니메이션 스타일. 신비로운 숲, 빛나는 마법석, 귀여운 동물 동료 등 모험심을 자극하는 아기자기하고 디테일한 묘사가 특징입니다.',
    cat: 'fantasy'
  },
  {
    code: 'SLC08',
    name: '해질녘 감성 뷰', // Image 17
    prompt: '[STYLE] 푸른빛과 붉은빛이 섞인 매직 아워(해질녘)의 감성적인 애니메이션 일러스트. 바닷가 마을, 지나가는 기차, 바람에 흩날리는 머리카락 등 그리움과 여운이 남는 연출에 최적화되어 있습니다.',
    cat: 'slice'
  },
  {
    code: 'SLC09',
    name: '코지 로파이(Lo-Fi)', // Image 18
    prompt: '[STYLE] 편안하고 여유로운 로파이(Lo-Fi) 감성의 애니메이션 일러스트. 따뜻한 오후의 햇살, 책상에 마주 앉은 캐릭터들, 고양이와 커피 등 소소하고 평화로운 분위기를 파스텔 톤으로 그려냅니다.',
    cat: 'slice'
  },
  {
    code: 'SLC10',
    name: '명랑 코믹 사극', // Image 03 (조선시대 코믹)
    prompt: '[STYLE] 한국의 전통적인 조선 시대를 배경으로 한 밝고 명랑한 코믹 2D 애니메이션 스타일. 굵고 뚜렷한 외곽선, 단색 위주의 깔끔한 채색, 캐릭터들의 익살스럽고 과장된 표정 연기가 특징입니다. 유쾌하고 코믹한 연출에 최적화되어 있습니다.',
    cat: 'slice'
  },
  {
    code: 'SLC11',
    name: '화사한 일상 애니', // Image 20 (버블티 소녀)
    prompt: '[STYLE] 밝고 산뜻한 현대 배경의 일상물 애니메이션 화풍. 파스텔 톤의 화사한 색감, 깔끔하고 귀여운 캐릭터 디자인, 맑은 날씨의 공원이나 거리 등 평화롭고 싱그러운 분위기를 연출합니다.',
    cat: 'slice'
  },
  {
    code: 'SLC12',
    name: '동화풍 시골 감성', // Image 21 (수채화 할머니와 손녀)
    prompt: '[STYLE] 포근하고 서정적인 수채화 풍의 동화책 일러스트 스타일. 따뜻한 색감과 부드러운 붓터치로 그려진 시골 풍경, 자연과 어우러진 인물들(할머니, 아이, 고양이 등)이 힐링과 향수를 자극합니다.',
    cat: 'slice'
  },
  {
    code: 'ACT06',
    name: 'SF 메카닉 액션', // Image 22 (SF 로봇 전투)
    prompt: '[STYLE] 블록버스터급 SF 메카닉 애니메이션 화풍. 거대한 로봇과 전사들의 치열한 전투, 거친 폭발 효과, 불꽃과 파편이 튀는 역동적인 구도, 하이 콘트라스트의 강렬한 조명과 금속 질감 묘사가 압도적입니다.',
    cat: 'action'
  },
  {
    code: 'FAN05',
    name: '달빛 로판', // Image 23 (밤의 로맨스 판타지)
    prompt: '[STYLE] 화려하고 낭만적인 웹소설 표지풍 로맨스 판타지 일러스트. 은은한 달빛이 비치는 밤의 성곽, 반짝이는 파티클 효과, 우아한 드레스와 제복을 입은 아름다운 남녀 캐릭터의 설레는 분위기를 극대화합니다.',
    cat: 'fantasy'
  },
  {
    code: 'SLC13',
    name: '네온 아이돌 스테이지', // Image 24 (아이돌 무대)
    prompt: '[STYLE] 화려한 아이돌 음악 애니메이션(MV) 화풍. 화려한 네온사인, 강렬한 무대 조명, 반짝이는 이펙트, 열창하는 캐릭터의 역동적인 포즈와 화려한 무대 의상이 콘서트장의 에너지를 전달합니다.',
    cat: 'slice'
  },
  {
    code: 'FAN06',
    name: '정통 판타지 RPG', // Image 25 (여기사 판타지)
    prompt: '[STYLE] 웅장한 하이 판타지 RPG 게임의 고퀄리티 일러스트 화풍. 빛나는 검, 디테일한 문양이 새겨진 갑옷, 떠있는 섬과 폭포 등 신비로운 판타지 배경이 모험의 시작을 알리는 벅찬 느낌을 줍니다.',
    cat: 'fantasy'
  },
  {
    code: 'ACT07',
    name: '화려한 무협 액션', // Image 무협 (용의 기운)
    prompt: '[STYLE] 역동적이고 강렬한 동양 무협 액션 웹툰/애니메이션 화풍. 검에서 뿜어져 나오는 용 형상의 푸른 기운, 속도감을 강조하는 먹물 느낌의 집중선과 이펙트, 험준한 산세 배경이 무협 특유의 카타르시스를 줍니다.',
    cat: 'action'
  },
  {
    code: 'THR03',
    name: '수묵화 동양 호러', // Image 01 (한복 귀신)
    prompt: '[STYLE] 동양적인 수묵화 기법으로 그려진 등골 서늘한 호러 일러스트. 먹의 번짐을 활용한 어둡고 스산한 배경, 무채색 톤 속에서 섬뜩하게 돋보이는 붉은 피의 색채 대비가 한국적인 공포(원귀, 구미호 등)를 자아냅니다.',
    cat: 'thriller'
  },
  {
    code: 'THR04',
    name: '기묘한 민담 마을', // Image 02 (밤의 전통 마을)
    prompt: '[STYLE] 음산하고 기묘한 한국 전통 민담/괴담 스타일의 수묵화 화풍. 짙은 안개가 깔린 밤의 초가집 마을, 창백한 달빛, 붉은 청사초롱, 희미하게 보이는 귀신 실루엣이 긴장감과 소름 돋는 분위기를 연출합니다.',
    cat: 'thriller'
  },
  {
    code: 'FAN07',
    name: '궁중 로맨스 사극', // Image 13 (궁궐 벚꽃 로맨스)
    prompt: '[STYLE] 화려하고 우아한 한국 궁중 로맨스 사극 웹툰 화풍. 흩날리는 벚꽃, 아름다운 한복의 색채와 섬세한 자수, 단아한 궁궐 배경이 어우러져 설레고 로맨틱한 분위기를 극대화합니다.',
    cat: 'fantasy'
  },
  {
    code: 'SLC14',
    name: '명랑 저잣거리 코믹', // Image 04 (자빠지는 양반)
    prompt: '[STYLE] 유쾌하고 익살스러운 조선시대 장터/저잣거리 코믹 애니메이션 스타일. 거친 펜 터치, 만화적인 리액션과 과장된 표정, 굵고 강렬한 먹물 튀김 효과가 유머러스한 상황을 돋보이게 합니다.',
    cat: 'slice'
  },
  {
    code: 'FAN08',
    name: '아련한 사극 로맨스', // Image 05 (노을 진 시골길 로맨스)
    prompt: '[STYLE] 따뜻하고 아련한 분위기의 한국 사극 로맨스 일러스트. 붉은 노을이 내려앉은 전통 마을 배경, 파스텔 톤의 부드러운 채색, 다정하게 마주 보는 남녀의 감성적인 연출이 특징입니다.',
    cat: 'fantasy'
  },
  {
    code: 'SLC15',
    name: '정겨운 한옥 일상', // Image 06 (다과를 나누는 여인들)
    prompt: '[STYLE] 평화롭고 정겨운 조선시대 양반가 일상물 애니메이션 화풍. 깔끔한 선화, 차분하고 따뜻한 색감, 한옥 대청마루에서 다과를 즐기는 캐릭터들의 온화하고 편안한 분위기를 담아냅니다.',
    cat: 'slice'
  },
  {
    code: 'FAN09',
    name: '동화풍 조선 마을', // Image 07 (논둑길 걷는 커플)
    prompt: '[STYLE] 부드러운 수채화 질감의 조선시대 동화풍 일러스트. 황금빛으로 물든 들판과 초가집 마을 배경, 둥글둥글하고 귀여운 그림체가 포근하고 서정적인 한국의 미를 표현합니다.',
    cat: 'fantasy'
  },
  {
    code: 'SLC16',
    name: '북적이는 한양 장터', // Image 08 (군중이 많은 장터)
    prompt: '[STYLE] 활기차고 북적이는 조선시대 한양 저잣거리 애니메이션 화풍. 다양한 계층의 인물들, 수많은 군중 묘사, 선명한 단색 채색이 특징이며, 시끌벅적하고 생동감 넘치는 군중씬에 최적화되어 있습니다.',
    cat: 'slice'
  },
  {
    code: 'ACT08',
    name: '장엄한 사극 전쟁', // Image 09 (불타는 성곽 앞 장수)
    prompt: '[STYLE] 무겁고 장엄한 분위기의 역사/사극 전쟁 애니메이션 화풍. 불타는 성곽, 자욱한 연기, 짙은 명암 대비, 묵직하고 거친 터치가 돋보이며, 비장하고 스케일이 큰 전장 연출에 적합합니다.',
    cat: 'action'
  },
  {
    code: 'ACT09',
    name: '수묵화 무장 전투', // Image 10 (말을 탄 장수들의 난전)
    prompt: '[STYLE] 전통 수묵담채화 기법을 활용한 역동적인 전장/액션 일러스트. 거칠고 힘 있는 붓터치, 먹의 번짐을 활용한 모래바람과 연기 묘사가 말을 타고 돌진하는 장수들의 역동적인 액션을 극대화합니다.',
    cat: 'action'
  },
  {
    code: 'SLC17',
    name: '전래동화 숲속 친구', // Image 11 (선비와 동물들)
    prompt: '[STYLE] 맑고 귀여운 느낌의 한국 전래동화 일러스트. 단순하고 깔끔한 선화, 부드러운 파스텔 톤 색감, 숲속에서 동물들과 교감하는 인물 묘사가 아이들에게 친숙하고 따뜻한 느낌을 줍니다.',
    cat: 'slice'
  },
  {
    code: 'SLC18',
    name: '포근한 수채화 풍경', // Image 12 (수채화 시골 풍경)
    prompt: '[STYLE] 맑고 투명한 수채화 기법으로 그려진 아름다운 한국 시골 마을 풍경 일러스트. 겹겹이 이어진 산맥, 잔잔한 냇가, 초가집과 마루에 앉은 인물들이 마음을 편안하게 힐링해 주는 감성을 선사합니다.',
    cat: 'slice'
  },
  {
    code: 'SLC19',
    name: '클래식 극장판 감성', // Image 23 (지브리풍 소녀)
    prompt: '[STYLE] 80~90년대 명작 극장판 애니메이션(지브리 등) 스타일. 맑고 투명한 색감, 둥글고 부드러운 인물 선화, 들꽃과 파란 하늘 등 자연과 어우러진 순수하고 서정적인 감성이 돋보입니다.',
    cat: 'slice'
  },
  {
    code: 'SLC20',
    name: '조선 풍속화 일상', // Image 14 (조선시대 장터 풍속화)
    prompt: '[STYLE] 한국의 전통 풍속화를 현대적으로 재해석한 일러스트 화풍. 한지에 그린 듯한 질감, 담백한 붓선과 물 빠진 듯한 은은한 채색으로 조선시대 백성들의 일상과 장터 풍경을 정겹게 담아냅니다.',
    cat: 'slice'
  },
  {
    code: 'FAN10',
    name: '신비로운 고전 설화', // Image 15 (선비와 영혼/선녀)
    prompt: '[STYLE] 한국 고전 설화나 전설을 연상시키는 신비로운 동양화풍. 밤하늘의 달빛, 구름을 타고 내려오는 선녀나 영혼, 부드러운 전통 색채가 몽환적이고 신비로운 판타지 분위기를 자아냅니다.',
    cat: 'fantasy'
  },
  {
    code: 'SLC21',
    name: '가을 한옥 로맨스', // Image 16 (한복 입고 등불 든 소녀)
    prompt: '[STYLE] 따뜻한 가을 햇살이 비치는 한옥 마당 배경의 현대적인 웹툰 화풍. 디테일한 한복 무늬, 은은한 청사초롱 불빛, 포근하고 감성적인 색채가 단아한 아름다움을 보여줍니다.',
    cat: 'slice'
  },
  {
    code: 'SLC22',
    name: '몽글몽글 유아 동화', // Image 17 (침대에서 책 읽는 아이)
    prompt: '[STYLE] 유아용 몽글몽글한 동화책 일러스트 스타일. 둥글고 귀여운 캐릭터 묘사, 부드러운 파스텔 톤과 따뜻한 수면등 조명이 아이들의 순수하고 포근한 일상이나 잠자리 연출에 제격입니다.',
    cat: 'slice'
  },
  {
    code: 'SLC23',
    name: '카페 창가 로파이', // Image 18 (카페 창밖을 보는 소녀)
    prompt: '[STYLE] 차분하고 감성적인 현대 로파이(Lo-Fi) 애니메이션 화풍. 카페 창밖을 바라보는 인물, 섬세한 빛 반사, 커피와 책 등 감성적인 소품들이 어우러져 쓸쓸하면서도 평온한 무드를 연출합니다.',
    cat: 'slice'
  },
  {
    code: 'FAN11',
    name: '전래동화 호랑이', // Image 19 (나무꾼과 호랑이)
    prompt: '[STYLE] 한국 전래동화(햇님달님, 호랑이 형님 등) 삽화 스타일. 굵고 선명한 테두리, 구수한 인물 표정, 친근하게 묘사된 호랑이와 울창한 소나무 숲 배경이 이야기보따리를 풀어놓는 듯한 느낌을 줍니다.',
    cat: 'fantasy'
  },
  {
    code: 'ACT10',
    name: '도깨비 퇴마 애니', // Image 20 (소년과 도깨비 대결)
    prompt: '[STYLE] 한국 TV 애니메이션 스타일의 액션 화풍. 깔끔하고 굵직한 셀 애니메이션 선화, 탈을 쓴 도깨비와의 대치 상황, 검은 기운이 맴도는 이펙트 등 박진감 넘치고 명확한 액션 묘사가 특징입니다.',
    cat: 'action'
  },
  {
    code: 'SLC24',
    name: '할머니의 옛날이야기', // Image 21 (할머니, 손녀, 엿보는 호랑이)
    prompt: '[STYLE] 따뜻한 수채화 톤의 한국 전래동화 표지 스타일. 질감이 살아있는 종이 배경, 다정한 할머니와 손녀, 몰래 지켜보는 귀여운 호랑이 등 향수를 자극하고 마음이 따뜻해지는 힐링 화풍입니다.',
    cat: 'slice'
  },
  {
    code: 'SLC25',
    name: '평화로운 가을 농촌', // Image 22 (시골길 걷는 소녀와 전통 마을)
    prompt: '[STYLE] 정갈하고 차분한 선화 위주의 풍경 일러스트. 가을빛으로 물든 전통 마을, 돌담길, 벼가 익어가는 계단식 논 등 한국의 평화로운 시골 일상을 서정적이고 섬세하게 담아냅니다.',
    cat: 'slice'
  },
  {
    code: 'ACT11',
    name: '현대 도시 무협', // Image 27 (현대 도시 배경의 무사)
    prompt: '[STYLE] 현대 도시와 무협 판타지가 결합된 화려한 액션 웹툰 화풍. 비 오는 밤의 빌딩 숲 배경, 빛나는 신수(새)와 검기를 다루는 캐릭터, 푸른빛의 네온과 마법 효과가 어우러져 세련되고 강렬한 액션씬을 연출합니다.',
    cat: 'action'
  },
  {
    code: 'SLC26',
    name: '따뜻한 옛날 일상', // Image 24 (마루에 앉은 할머니와 소녀)
    prompt: '[STYLE] 옛날 한국의 정겹고 따뜻한 일상을 담은 레트로 애니메이션 스타일. 감나무가 있는 한옥 마당, 다정하게 손을 잡은 할머니와 소녀, 부드러운 햇살 묘사가 가족애와 뭉클한 감동을 전해줍니다.',
    cat: 'slice'
  },
  {
    code: 'ACT12',
    name: '흑백 느와르 극화', // Image 25 (흑백 검술 액션)
    prompt: '[STYLE] 거칠고 강렬한 펜선이 돋보이는 흑백 극화/만화 스타일. 날카로운 명암 대비(스크린톤), 처절하고 묵직한 무기 타격감, 사실적이고 진지한 캐릭터 묘사가 다크 판타지나 느와르 액션에 최적화되어 있습니다.',
    cat: 'action'
  },
  {
    code: 'ACT13',
    name: '역동적 수묵 타격', // Image 26 (수묵화 발차기)
    prompt: '[STYLE] 동양의 수묵화 기법을 극대화한 역동적인 무협 액션 일러스트. 먹물이 튀는 듯한 강렬한 타격감(발차기 등), 여백의 미가 느껴지는 산수화 배경, 붓의 필력이 느껴지는 거친 선화가 액션의 쾌감을 살려줍니다.',
    cat: 'action'
  }
];
