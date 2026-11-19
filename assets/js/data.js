/* =========================================================
   PLAIN. 포트폴리오 데이터
   - 이 파일만 고치면 메인/상세 페이지가 함께 바뀝니다.
   - 값이 비어 있는("") 항목은 화면에 표시되지 않습니다.
   ========================================================= */

window.PROFILE = {
  name: "서진아",
  nameEn: "SEO JINAH",
  role: "Graphic · UI · Video Designer",
  // ▼ 아래 연락처를 채우면 Contact 영역에 자동으로 나타납니다.
  email: "",        // 예: "jinah@gmail.com"
  phone: "",        // 예: "010-0000-0000"
  instagram: "",    // 예: "https://instagram.com/아이디"
  github: "https://github.com/wwiiss265-web",
  resume: ""        // 이력서 PDF 경로. 예: "assets/resume.pdf"
};

window.CATEGORIES = [
  { key: "all",    label: "All" },
  { key: "design", label: "Graphic" },
  { key: "appui",  label: "App UI" },
  { key: "video",  label: "Video · AI" },
  { key: "team",   label: "Team Project" }
  ,{
    id: "canon3d",
    cat: "video",
    detailCategory: "3D 오브젝트 광고 영상",
    label: "MOTION GRAPHICS",
    title: "Canon EOS M200 3D 광고 영상",
    summary: "After Effects를 활용해 제작한 3D 오브젝트 광고 영상입니다. 카메라 제품의 형태와 디테일을 강조하며, 짧고 임팩트 있게 브랜드 무드를 전달하도록 구성했습니다.",
    concept: "다운로드한 3D 카메라 오브젝트를 활용해 제품의 각도와 디테일을 감각적으로 보여주는 모션 광고",
    role: "기획 · 편집 · 모션그래픽",
    tools: ["After Effects"],
    keywords: ["#3D오브젝트", "#카메라광고", "#AfterEffects", "#모션그래픽"],
    thumb: "assets/img/opt/thumb/canon3d.webp",
    video: "assets/video/canon-eos-m200-3d.mp4",
    stills: ["canon3d-01", "canon3d-02", "canon3d-03", "canon3d-04"]
  }

];

window.PROJECTS = [
  {
    id: "dongbaek-web",
    cat: "team",
    detailCategory: "팀 프로젝트 · 웹사이트",
    label: "TEAM PROJECT · WEB",
    title: "동백커피 브랜드 홈페이지",
    summary: "동백커피 브랜드의 메인·메뉴·브랜드·캐릭터 소개 페이지를 반응형 웹사이트로 구현한 팀 프로젝트입니다.",
    concept: "좋은 커피가 더 나은 내일을 만든다 — 따뜻한 동백의 이미지를 담은 카페 브랜드 사이트",
    role: "",
    tools: ["HTML", "CSS", "JavaScript"],
    keywords: ["#반응형웹", "#브랜드사이트", "#메뉴필터", "#캐릭터"],
    thumb: "assets/img/opt/thumb/dongbaek-web.webp",
    site: "https://dongbaek.dothome.co.kr/"
  },
  {
    id: "wardrobe",
    cat: "appui",
    detailCategory: "앱 UI 디자인",
    label: "APP UI DESIGN",
    title: "스마트 옷장 앱 · 오늘 뭐 입지?",
    summary: "날씨와 일정, 보유한 의류를 바탕으로 나에게 어울리는 코디를 제안하는 스마트 옷장 앱입니다. 반복되는 코디 고민을 줄이고 옷장을 효율적으로 관리하도록 기획했습니다.",
    concept: "Soft · Neat · Intuitive — 부드럽고 정돈된, 직관적인 UI",
    role: "기획 · 정보구조도 · 무드보드 · 스타일가이드 · 와이어프레임 · UI 디자인",
    tools: ["Figma"],
    keywords: ["#날씨코디", "#디지털옷장", "#코디추천", "#앱디자인"],
    thumb: "assets/img/opt/thumb/wardrobe.webp",
    detail: "assets/img/details/d_07.png",
    previewVideo: "assets/video/app-preview.mp4",
    prototype: "https://www.figma.com/proto/8ODNqLLR3QjRqfuoiij9dS/%EC%95%B1-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%84%9C%EC%A7%84%EC%95%84?node-id=211-2189&t=VedqaZB1IgKG8TM0-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=44%3A471&show-proto-sidebar=1&fuid=1660832775505314825"
  },
  {
    id: "glazedsea",
    cat: "video",
    detailCategory: "AI 광고 영상",
    label: "AI ADVERTISEMENT",
    title: "Glazed Sea",
    summary: "반짝이는 바다의 빛과 여름의 청량함을 담아, 헤어 액세서리의 매력을 감각적으로 표현한 AI 광고 영상입니다.",
    concept: "바다의 빛과 물결에서 영감을 받은 헤어 액세서리 광고",
    role: "AI 기획 · 영상 생성 · 편집",
    tools: ["Google Flow", "Premiere Pro"],
    keywords: ["#GlazedSea", "#AI광고", "#헤어액세서리", "#바다의빛"],
    thumb: "assets/img/opt/thumb/glazedsea.webp",
    video: "assets/video/ai-ad.mp4",
    stills: ["ai-scene-01", "ai-scene-02", "ai-scene-03", "ai-scene-04"]
  },
  {
    id: "banner",
    cat: "design",
    detailCategory: "관광 홍보 배너",
    label: "BANNER DESIGN",
    title: "해운대 블루라인파크 관광 배너",
    summary: "해안 절경과 해변열차의 매력을 담아 해운대 블루라인파크를 소개하는 관광 홍보 배너입니다. 다양한 규격에 맞춰 배너 5종을 제작했습니다.",
    concept: "철길 · 바다 · 달리는 낭만의 기억 — 옛 동해남부선 폐철길을 따라 펼쳐지는 해안 풍경",
    role: "관광 홍보 배너 디자인 (타깃: 국내외 관광객)",
    tools: ["Photoshop", "Illustrator", "미리캔버스"],
    keywords: ["#관광홍보", "#배너5종", "#해변열차", "#부산"],
    thumb: "assets/img/opt/thumb/banner.webp",
    detail: "assets/img/opt/detail/banner.webp"
  },
  {
    id: "character",
    cat: "design",
    detailCategory: "캐릭터 디자인",
    label: "CHARACTER DESIGN",
    title: "호야 · 부산광복동트리축제 캐릭터",
    summary: "부산 광복동의 겨울 빛 트리 축제를 대표하는 캐릭터를 개발해, 매장과 축제 내 PB 상품·홍보물에 활용할 수 있도록 디자인한 프로젝트입니다.",
    concept: "눈꽃과 빛으로 물드는 광복동, 따뜻한 온기를 전하는 작은 요정",
    role: "캐릭터 기획 · 디자인 · 굿즈 활용안",
    tools: [],
    keywords: ["#캐릭터", "#지역축제", "#광복동", "#굿즈"],
    thumb: "assets/img/opt/thumb/character.webp",
    detail: "assets/img/opt/detail/character.webp"
  },
  {
    id: "firstdrive",
    cat: "video",
    detailCategory: "AI 광고 영상",
    label: "AI ADVERTISEMENT",
    title: "First Drive",
    summary: "AI 영상 생성 기술로 제작한 대리운전 광고 영상입니다. Google Flow로 도심 야경과 주행 장면, 인물 중심의 시네마틱한 장면을 구현하고 Premiere Pro로 흐름과 분위기를 완성했습니다.",
    concept: "AI로 구현한 반전의 광고 스토리",
    role: "AI 영상 기획 · 영상 생성 · 편집",
    tools: ["Google Flow", "Premiere Pro"],
    keywords: ["#FirstDrive", "#AI광고", "#대리운전광고", "#시네마틱"],
    thumb: "assets/img/opt/thumb/firstdrive.webp",
    video: "assets/video/firstdrive.mp4",
    stills: ["firstdrive1", "firstdrive2", "firstdrive3", "firstdrive4"],
    stillsContain: true
  },
  {
    id: "book",
    cat: "design",
    detailCategory: "북커버 디자인",
    label: "BOOK COVER DESIGN",
    title: "초정리 편지",
    summary: "세종대왕과 한글을 배우는 소년 장운의 이야기를 따뜻한 일러스트로 풀어낸 북커버 디자인입니다. (배유안 著 · 창비)",
    concept: "한글이 전한 가장 따뜻한 선물 — ‘글이 세상을 바꾸는 따뜻한 힘’",
    role: "콘셉트 · 일러스트 · 타이포그래피 · 표지 디자인",
    tools: [],
    keywords: ["#북커버", "#일러스트", "#한글", "#역사동화"],
    thumb: "assets/img/opt/thumb/book.webp",
    detail: "assets/img/opt/detail/book.webp"
  },
  {
    id: "porong",
    cat: "design",
    detailCategory: "브랜드 디자인",
    label: "BRAND DESIGN",
    title: "포롱포롱 · 첫 감성 유아책 브랜드",
    summary: "아이의 작은 일상을 따뜻하게 기록하는 유아책 브랜드입니다. 유아가 세상과 교감할 때 느끼는 호기심과 포근함에서 영감을 받아 로고와 컬러 시스템을 만들었습니다.",
    concept: "날카로운 직선을 배제한 둥근 형태감과 파스텔 톤으로 전하는 정서적 안정감",
    role: "브랜드 네이밍 · 로고 · 컬러 시스템",
    tools: [],
    keywords: ["#따뜻함", "#첫경험", "#파스텔톤", "#몽글몽글"],
    thumb: "assets/img/opt/thumb/porong.webp",
    detail: "assets/img/opt/detail/porong.webp"
  },
  {
    id: "dongbaek-video",
    cat: "video",
    detailCategory: "카페 홍보 영상",
    label: "PROMOTION VIDEO",
    title: "동백커피 카페 홍보 영상",
    summary: "동백커피의 공간과 브랜드 분위기를 촬영하고, 감각적인 화면 구성과 모션 그래픽으로 담아낸 카페 홍보 영상입니다.",
    concept: "카페의 공간과 분위기, 브랜드의 따뜻한 감성을 전달하는 홍보 영상",
    role: "기획 · 촬영 · 편집",
    tools: ["After Effects"],
    keywords: ["#동백커피", "#카페홍보", "#촬영", "#모션그래픽"],
    thumb: "assets/img/opt/thumb/dongbaek-video.webp",
    video: "assets/video/dongbaek-coffee.mp4",
    stills: ["01_cafe-interior", "02_gift-boxes", "03_barista-coffee", "04_enjoy-your-moment"]
  },
  {
    id: "poster",
    cat: "design",
    detailCategory: "캠페인 포스터",
    label: "POSTER DESIGN",
    title: "엔진OFF 지구ON",
    summary: "일상 속 환경 보호 실천을 안내하는 캠페인 포스터입니다. 삭막한 도심을 친환경적인 풍경으로 전환해, 자전거와 대중교통 이용으로 탄소 배출을 줄이는 이동 문화를 시각화했습니다.",
    concept: "우리의 작은 실천이 모여 더 푸른 지구를 만든다",
    role: "캠페인 포스터 디자인 · 컬러 시스템",
    tools: [],
    keywords: ["#환경캠페인", "#친환경이동", "#포스터"],
    thumb: "assets/img/opt/thumb/poster.webp",
    detail: "assets/img/opt/detail/poster.webp"
  },
  {
    id: "cardnews",
    cat: "design",
    detailCategory: "카드뉴스 디자인",
    label: "CARD NEWS DESIGN",
    title: "도라지진액 · 동백커피 카드뉴스",
    summary: "제품과 서비스의 매력을 효과적으로 소개하고 신뢰감 있는 브랜드 이미지를 구축하기 위한 카드뉴스 시리즈입니다.",
    concept: "브라운 계열의 색감으로 신뢰감과 편안함을 표현한 간결한 레이아웃",
    role: "카드뉴스 기획 · 디자인",
    tools: ["미리캔버스"],
    keywords: ["#카드뉴스", "#SNS콘텐츠", "#프리미엄"],
    thumb: "assets/img/opt/thumb/cardnews.webp",
    detail: "assets/img/opt/detail/cardnews.webp"
  },
  {
    id: "dongnae",
    cat: "video",
    detailCategory: "축제 영상",
    label: "FESTIVAL VIDEO",
    title: "동래읍성역사축제",
    summary: "부산 동래의 역사와 문화를 만날 수 있는 동래읍성역사축제 소개 영상입니다. 축제 현장과 방문객의 활기찬 모습을 리듬감 있게 구성하고, After Effects 연출로 축제의 에너지를 전달했습니다.",
    concept: "역사와 문화가 어우러지는 동래 축제의 생동감 있는 순간",
    role: "기획 · 촬영 · 편집",
    tools: ["After Effects"],
    keywords: ["#동래읍성역사축제", "#부산축제", "#지역문화", "#모션그래픽"],
    thumb: "assets/img/opt/thumb/dongnae.webp",
    video: "assets/video/dongnae-festival.mp4",
    stills: ["dongnae_01", "dongnae_02", "dongnae_03", "dongnae_04"],
    stillsContain: true
  },
  {
    id: "hotplace",
    cat: "video",
    detailCategory: "공간 소개 영상",
    label: "TRAVEL VIDEO",
    title: "나만의 핫플레이스 · 옥련선원",
    summary: "전통 공간의 풍경과 그 안에 담긴 이야기를 영상으로 기록한 여행 콘텐츠입니다.",
    concept: "공간의 분위기와 장면을 따라가는 감성 여행 영상",
    role: "기획 · 촬영 · 편집",
    tools: ["Premiere Pro"],
    keywords: ["#나만의핫플레이스", "#전통공간", "#여행영상"],
    thumb: "assets/img/opt/thumb/hotplace.webp",
    video: "assets/video/hotplace.mp4",
    stills: ["hotplace-01", "hotplace-02", "hotplace-03", "hotplace-04"]
  }
  ,{
    id: "canon3d",
    cat: "video",
    detailCategory: "3D 오브젝트 광고 영상",
    label: "MOTION GRAPHICS",
    title: "Canon EOS M200 3D 광고 영상",
    summary: "After Effects를 활용해 제작한 3D 오브젝트 광고 영상입니다. 카메라 제품의 형태와 디테일을 강조하며, 짧고 임팩트 있게 브랜드 무드를 전달하도록 구성했습니다.",
    concept: "다운로드한 3D 카메라 오브젝트를 활용해 제품의 각도와 디테일을 감각적으로 보여주는 모션 광고",
    role: "기획 · 편집 · 모션그래픽",
    tools: ["After Effects"],
    keywords: ["#3D오브젝트", "#카메라광고", "#AfterEffects", "#모션그래픽"],
    thumb: "assets/img/opt/thumb/canon3d.webp",
    video: "assets/video/canon-eos-m200-3d.mp4",
    stills: ["canon3d-01", "canon3d-02", "canon3d-03", "canon3d-04"]
  }

];
