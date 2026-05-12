const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const PRESETS = {
  local: {
    presetKey: "local",
    brandName: "카페 하루",
    heroImageSrc: "./assets/vanilla-cream-latte.png",
    heroImageAlt: "바닐라 크림 라떼",
    notice: "오늘의 추천: 시그니처 라떼 · 디저트 소진 시 조기 마감",
    heroTitle: "오늘, 동네에서 가장 편한 한 잔",
    heroSubtitle: "아침 8시 오픈 · 빠른 테이크아웃 · 편하게 앉아 쉬어도 좋아요.",
    badge1: "원두 2종",
    badge2: "반려동물 동반",
    badge3: "테이크아웃 빠름",
    visualTitle: "Signature",
    visualChip: "Best",
    visualSub: "바닐라 크림 라떼 · 라이트 로스팅",
    headerCta: { label: "길찾기", href: "#location" },
    primaryCta: { label: "길찾기", href: "#location" },
    secondaryCta: { label: "메뉴 보기", href: "#menu" },
    menuLead: "처음 오시면 여기부터 추천해요.",
    menu: [
      { title: "아메리카노", badge: "Best", body: "밸런스 좋은 데일리 커피.", price: "₩4,500", note: "HOT/ICE" },
      { title: "카페라떼", badge: "추천", body: "우유가 달지 않게, 고소하게.", price: "₩5,000", note: "HOT/ICE" },
      { title: "시그니처 라떼", badge: "Signature", body: "바닐라 크림 + 라이트 로스트.", price: "₩5,800", note: "ICE" },
      { title: "오늘의 디저트", badge: "Daily", body: "매일 소량 구워요(조기 품절 가능).", price: "₩6,500~", note: "변동" },
    ],
    calloutTitle: "단골이 되는 가장 쉬운 방법",
    calloutSub: "방문 전, 혼잡 시간/주차 정보를 확인하세요.",
    calloutCta: { label: "운영정보 보기", href: "#location" },
    spaceLead: "편안함을 만드는 디테일을 소개해요.",
    features: [
      { icon: "⏱", title: "빠른 테이크아웃", body: "출근길에도 부담 없이. 주문→수령 동선이 짧아요." },
      { icon: "🫘", title: "원두 2종", body: "고소/산미 취향에 맞게 선택 가능(원두 구매도 가능)." },
      { icon: "🐾", title: "반려동물 동반", body: "리드줄 필수, 다른 손님 배려 부탁드려요." },
      { icon: "🪑", title: "편한 좌석", body: "오래 앉아도 편한 쿠션 좌석 중심." },
      { icon: "🧊", title: "아이스트렌드", body: "얼음과 비율을 안정적으로. 마지막까지 밸런스." },
      { icon: "🎵", title: "과하지 않은 음악", body: "대화하기 편한 볼륨으로 운영해요." },
    ],
    aboutKicker: "ABOUT",
    aboutTitle: "가볍게 들르기 좋은, 작은 쉼",
    aboutBody:
      "계절에 따라 원두를 바꿔요. 산미가 부담스럽지 않도록 밸런스를 맞추고, 디저트는 매일 소량으로 구워 신선함을 지켜요.",
    aboutCheck1: "좌석 24석 · 단체석 1",
    aboutCheck2: "테이크아웃 포장 빠름",
    aboutCheck3: "원두 구매 가능",
    aboutCta: { label: "문의하기", href: "#contact" },
    aboutCta2: { label: "메뉴 보기", href: "#menu" },
    address: "서울시 ○○구 ○○로 00, 1층",
    transit: "지하철 ○○역 2번 출구 도보 6분",
    mapCta: { label: "지도 열기", href: "#" },
    hours: [
      ["월–금", "08:00–20:00"],
      ["토–일", "10:00–21:00"],
      ["브레이크", "없음"],
    ],
    chip1: "주차 2대",
    chip2: "와이파이",
    chip3: "콘센트",
    contactLead: "단체 예약, 홀케이크/픽업, 촬영 문의는 아래로 연락 주세요.",
    phone: "010-0000-0000",
    insta: "@cafe_haru",
    instaHref: "#",
    email: "hello@cafe.com",
    footerLine1: "서울시 ○○구 ○○로 00",
    footerLine2: "사업자등록번호 000-00-00000 · 대표 홍길동",
    footerCta: { label: "길찾기", href: "#location" },
  },

  signature: {
    presetKey: "signature",
    brandName: "카페 루미",
    heroImageSrc: "./assets/vanilla-cream-latte.png",
    heroImageAlt: "바닐라 크림 라떼",
    notice: "오늘만: 시즌 한정 딸기 크림 케이크 · 한정 수량",
    heroTitle: "매일 구워 나오는 시그니처 디저트",
    heroSubtitle: "재료·당도·온도까지 디테일하게. 커피는 디저트와 어울리게 블렌딩했어요.",
    badge1: "시즌 한정",
    badge2: "홀케이크 예약",
    badge3: "선물 포장",
    visualTitle: "Dessert",
    visualChip: "New",
    visualSub: "딸기 크림 케이크 · 오늘 20개",
    headerCta: { label: "메뉴 보기", href: "#menu" },
    primaryCta: { label: "메뉴 보기", href: "#menu" },
    secondaryCta: { label: "예약 문의", href: "#contact" },
    menuLead: "베스트 3 + 시즌 1로 구성했어요.",
    menu: [
      { title: "바스크 치즈케이크", badge: "Best", body: "겉은 쫀득, 속은 부드럽게.", price: "₩7,500", note: "조각" },
      { title: "크림 라떼", badge: "Signature", body: "디저트에 맞는 달콤함과 바디감.", price: "₩6,200", note: "ICE" },
      { title: "레몬 타르트", badge: "추천", body: "산뜻한 산미 + 진한 버터 풍미.", price: "₩7,800", note: "조각" },
      { title: "시즌 케이크", badge: "Season", body: "오늘의 과일로 만드는 한정 메뉴.", price: "₩8,500~", note: "변동" },
    ],
    calloutTitle: "홀케이크/픽업 예약",
    calloutSub: "원하시는 날짜·시간·문구를 남겨주세요.",
    calloutCta: { label: "예약 문의", href: "#contact" },
    spaceLead: "맛을 더 기억하게 만드는 포인트를 담았어요.",
    features: [
      { icon: "🍰", title: "매일 소량 생산", body: "대량 생산 대신, 신선함을 우선해요." },
      { icon: "🥛", title: "크림·당도 조절", body: "과하지 않게, 끝까지 깔끔하게." },
      { icon: "🎁", title: "선물 포장", body: "기념일/선물용 패키지 옵션 제공." },
      { icon: "📅", title: "예약 시스템", body: "홀케이크/픽업은 사전 예약을 권장해요." },
      { icon: "🧾", title: "알레르기 안내", body: "견과/유제품/계란 등 성분을 표기해요." },
      { icon: "📸", title: "포토존", body: "자연광이 예쁜 자리와 배경이 있어요." },
    ],
    aboutKicker: "ABOUT",
    aboutTitle: "디저트는 ‘한 입’이 기억을 만들어요",
    aboutBody:
      "레시피는 단순하게, 재료는 정직하게. 커피는 디저트의 단맛을 받쳐주도록 산미와 바디를 조절했어요.",
    aboutCheck1: "시즌 메뉴는 한정 수량",
    aboutCheck2: "홀케이크 사전 예약",
    aboutCheck3: "선물 포장 옵션",
    aboutCta: { label: "예약 문의", href: "#contact" },
    aboutCta2: { label: "메뉴 보기", href: "#menu" },
    address: "서울시 ○○구 ○○로 00, 2층",
    transit: "버스 ○○정류장 도보 2분",
    mapCta: { label: "지도 열기", href: "#" },
    hours: [
      ["월–금", "11:00–20:00"],
      ["토–일", "11:00–21:00"],
      ["브레이크", "15:30–16:30"],
    ],
    chip1: "예약 픽업",
    chip2: "선물 포장",
    chip3: "시즌 한정",
    contactLead: "홀케이크/픽업 예약은 원하시는 날짜·시간을 함께 알려주세요.",
    phone: "010-0000-0000",
    insta: "@cafe_lumi",
    instaHref: "#",
    email: "hello@cafe.com",
    footerLine1: "서울시 ○○구 ○○로 00",
    footerLine2: "사업자등록번호 000-00-00000 · 대표 홍길동",
    footerCta: { label: "메뉴 보기", href: "#menu" },
  },

  work: {
    presetKey: "work",
    brandName: "카페 포커스",
    heroImageSrc: "./assets/vanilla-cream-latte.png",
    heroImageAlt: "바닐라 크림 라떼",
    notice: "조용한 시간대: 평일 10–12시 · 단체 이용은 문의",
    heroTitle: "콘센트 많은 조용한 작업 카페",
    heroSubtitle: "와이파이 · 넓은 테이블 · 오래 앉아도 편한 의자. 몰입이 되는 환경을 만들었어요.",
    badge1: "콘센트 다수",
    badge2: "와이파이 빠름",
    badge3: "넓은 테이블",
    visualTitle: "Work Mode",
    visualChip: "Quiet",
    visualSub: "대용량 커피 · 디카페인 옵션",
    headerCta: { label: "좌석 보기", href: "#space" },
    primaryCta: { label: "좌석/시설 보기", href: "#space" },
    secondaryCta: { label: "혼잡 시간 확인", href: "#location" },
    menuLead: "작업에 잘 맞는 구성으로 골랐어요.",
    menu: [
      { title: "대용량 아메리카노", badge: "Best", body: "오래 작업할 때 부담 없는 데일리.", price: "₩5,500", note: "ICE" },
      { title: "디카페인 라떼", badge: "추천", body: "늦은 시간에도 편하게.", price: "₩6,000", note: "HOT/ICE" },
      { title: "루이보스 티", badge: "Non-caf", body: "카페인 없이 따뜻하게.", price: "₩5,500", note: "HOT" },
      { title: "스낵/쿠키", badge: "Snack", body: "가볍게 에너지 보충.", price: "₩3,500~", note: "변동" },
    ],
    calloutTitle: "이용 안내(작업 모드)",
    calloutSub: "좌석/콘센트/혼잡 시간·단체 이용 규칙을 확인하세요.",
    calloutCta: { label: "운영정보 보기", href: "#location" },
    spaceLead: "몰입을 방해하지 않는 환경을 만들었어요.",
    features: [
      { icon: "🔌", title: "콘센트", body: "테이블 주변 콘센트 다수. 멀티탭도 일부 비치." },
      { icon: "📶", title: "와이파이", body: "안정적인 속도. 비밀번호는 카운터에 안내." },
      { icon: "🪑", title: "의자/테이블", body: "등받이 있는 의자 + 넓은 상판." },
      { icon: "🔇", title: "조용한 운영", body: "대화 볼륨 가이드, 조용한 음악." },
      { icon: "👥", title: "단체석", body: "미팅용 테이블 1(사전 문의 권장)." },
      { icon: "🧾", title: "장시간 이용", body: "혼잡 시 2시간 권장(현장 안내)." },
    ],
    aboutKicker: "ABOUT",
    aboutTitle: "몰입이 되는 공간은 디테일에서 시작해요",
    aboutBody:
      "작업 환경은 결국 ‘끊김이 없는지’가 핵심이에요. 테이블 간격, 의자, 콘센트, 와이파이까지 기본을 탄탄하게 준비했어요.",
    aboutCheck1: "넓은 테이블 · 좌석 간격",
    aboutCheck2: "콘센트/와이파이 안내",
    aboutCheck3: "혼잡 시간대 공지",
    aboutCta: { label: "이용 문의", href: "#contact" },
    aboutCta2: { label: "좌석 보기", href: "#space" },
    address: "서울시 ○○구 ○○로 00, B1",
    transit: "지하철 ○○역 4번 출구 도보 4분",
    mapCta: { label: "길찾기", href: "#" },
    hours: [
      ["매일", "09:00–22:00"],
      ["혼잡", "평일 12–14시"],
      ["브레이크", "없음"],
    ],
    chip1: "콘센트",
    chip2: "와이파이",
    chip3: "단체석",
    contactLead: "단체 이용/미팅 좌석, 촬영 문의는 사전에 연락 주세요.",
    phone: "010-0000-0000",
    insta: "@cafe_focus",
    instaHref: "#",
    email: "hello@cafe.com",
    footerLine1: "서울시 ○○구 ○○로 00",
    footerLine2: "사업자등록번호 000-00-00000 · 대표 홍길동",
    footerCta: { label: "좌석 보기", href: "#space" },
  },
};

function setText(bindKey, value) {
  $$(`[data-bind="${bindKey}"]`).forEach((el) => {
    el.textContent = value;
  });
}

function setLink(bindKey, { label, href }) {
  $$(`[data-bind="${bindKey}"]`).forEach((el) => {
    if (label != null) el.textContent = label;
    if (href != null) el.setAttribute("href", href);
  });
}

function renderMenu(menu) {
  const host = $('[data-bind="menuCards"]');
  host.innerHTML = "";
  for (const item of menu) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-top">
        <div class="card-title"></div>
        <div class="card-badge"></div>
      </div>
      <div class="card-body"></div>
      <div class="card-foot">
        <div class="price"></div>
        <div class="small"></div>
      </div>
    `;
    $(".card-title", card).textContent = item.title;
    $(".card-badge", card).textContent = item.badge;
    $(".card-body", card).textContent = item.body;
    $(".price", card).textContent = item.price;
    $(".small", card).textContent = item.note;
    host.appendChild(card);
  }
}

function renderFeatures(features) {
  const host = $('[data-bind="featureCards"]');
  host.innerHTML = "";
  for (const f of features) {
    const el = document.createElement("article");
    el.className = "feature";
    el.innerHTML = `
      <div class="feature-k"><span aria-hidden="true"></span><div></div></div>
      <div class="feature-v"></div>
    `;
    $(".feature-k span", el).textContent = f.icon;
    $(".feature-k div", el).textContent = f.title;
    $(".feature-v", el).textContent = f.body;
    host.appendChild(el);
  }
}

function renderHours(hours) {
  const host = $('[data-bind="hours"]');
  host.innerHTML = "";
  for (const [k, v] of hours) {
    const row = document.createElement("div");
    row.className = "hours-row" + (k === "브레이크" ? " muted" : "");
    row.innerHTML = `<div></div><div></div>`;
    row.children[0].textContent = k;
    row.children[1].textContent = v;
    host.appendChild(row);
  }
}

function applyPreset(key) {
  const p = PRESETS[key] ?? PRESETS.local;

  document.documentElement.setAttribute("data-preset", p.presetKey);

  const heroImage = $('[data-ui="heroImage"]');
  if (heroImage) {
    heroImage.setAttribute("src", p.heroImageSrc);
    heroImage.setAttribute("alt", p.heroImageAlt);
  }

  setText("brandName", p.brandName);
  setText("brandNameFooter", p.brandName);
  setText("brandNameSmall", p.brandName);
  setText("notice", p.notice);
  setText("heroTitle", p.heroTitle);
  setText("heroSubtitle", p.heroSubtitle);
  setText("badge1", p.badge1);
  setText("badge2", p.badge2);
  setText("badge3", p.badge3);
  setText("visualTitle", p.visualTitle);
  setText("visualChip", p.visualChip);
  setText("visualSub", p.visualSub);

  setLink("headerCta", p.headerCta);
  setLink("primaryCta", p.primaryCta);
  setLink("secondaryCta", p.secondaryCta);

  setText("menuLead", p.menuLead);
  renderMenu(p.menu);
  setText("calloutTitle", p.calloutTitle);
  setText("calloutSub", p.calloutSub);
  setLink("calloutCta", p.calloutCta);

  setText("spaceLead", p.spaceLead);
  renderFeatures(p.features);

  setText("aboutKicker", p.aboutKicker);
  setText("aboutTitle", p.aboutTitle);
  setText("aboutBody", p.aboutBody);
  setText("aboutCheck1", p.aboutCheck1);
  setText("aboutCheck2", p.aboutCheck2);
  setText("aboutCheck3", p.aboutCheck3);
  setLink("aboutCta", p.aboutCta);
  setLink("aboutCta2", p.aboutCta2);

  setText("address", p.address);
  setText("transit", p.transit);
  setLink("mapCta", p.mapCta);
  renderHours(p.hours);
  setText("chip1", p.chip1);
  setText("chip2", p.chip2);
  setText("chip3", p.chip3);

  setText("contactLead", p.contactLead);
  setText("footerLine1", p.footerLine1);
  setText("footerLine2", p.footerLine2);
  setLink("footerCta", p.footerCta);

  const phoneA = $('[data-bind="phoneLink"]');
  phoneA.textContent = p.phone;
  phoneA.setAttribute("href", `tel:${p.phone}`);

  const instaA = $('[data-bind="instaLink"]');
  instaA.textContent = p.insta;
  instaA.setAttribute("href", p.instaHref || "#");

  const emailA = $('[data-bind="emailLink"]');
  emailA.textContent = p.email;
  emailA.setAttribute("href", `mailto:${p.email}`);

  // Update segmented selection state
  $$('[data-action="preset"]').forEach((btn) => {
    btn.setAttribute("aria-selected", btn.dataset.preset === p.presetKey ? "true" : "false");
  });
}

function getPreferredTheme() {
  const saved = localStorage.getItem("cafe_theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("cafe_theme", theme);
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme") || getPreferredTheme();
  setTheme(cur === "dark" ? "light" : "dark");
}

function wireUI() {
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-action]");
    if (!t) return;

    const action = t.dataset.action;
    if (action === "preset") {
      applyPreset(t.dataset.preset);
      return;
    }
    if (action === "themeToggle") {
      toggleTheme();
      return;
    }
    if (action === "scrollTop") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (action === "navToggle") {
      const nav = $('[data-ui="mobileNav"]');
      const willShow = nav.hasAttribute("hidden");
      if (willShow) nav.removeAttribute("hidden");
      else nav.setAttribute("hidden", "");
      t.setAttribute("aria-label", willShow ? "메뉴 닫기" : "메뉴 열기");
      t.setAttribute("aria-expanded", willShow ? "true" : "false");
      return;
    }
  });

  const form = $('[data-ui="contactForm"]');
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !message) return;
    alert("데모입니다. 실제 전송 연동은 script.js에서 추가하세요.");
    form.reset();
  });
}

function init() {
  setText("year", String(new Date().getFullYear()));

  setTheme(getPreferredTheme());

  // Default to local preset on load
  applyPreset("local");

  wireUI();
}

init();
