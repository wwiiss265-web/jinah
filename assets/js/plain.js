(function () {
  "use strict";
  var P = window.PROFILE || {}, LIST = window.PROJECTS || [], CATS = window.CATEGORIES || [];
  var ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  var ICON_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>';
  var ICON_WEB = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>';
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function $(s) { return document.querySelector(s); }

  /* header shadow */
  var hd = $(".hd");
  if (hd) { var onS = function () { hd.classList.toggle("is-scrolled", scrollY > 8); }; addEventListener("scroll", onS, { passive: true }); onS(); }

  /* profile text */
  document.querySelectorAll("[data-profile]").forEach(function (el) { el.textContent = P[el.dataset.profile] || ""; });

  /* counts */
  document.querySelectorAll("[data-count]").forEach(function (el) {
    var k = el.dataset.count; el.textContent = k === "all" ? LIST.length : LIST.filter(function (p) { return p.cat === k; }).length;
  });

  /* ---------- works grid ---------- */
  var grid = $("#grid"), filters = $("#filters");
  function card(p, big) {
    var badge = p.video ? '<span class="badge">' + ICON_PLAY + 'VIDEO</span>' : p.site ? '<span class="badge">' + ICON_WEB + 'LIVE SITE</span>' : "";
    var externalSite = p.id === "dongbaek-web" && p.site;
    var href = externalSite ? p.site : "work.html?id=" + encodeURIComponent(p.id);
    return '<a class="card' + (big ? " big" : "") + '" href="' + esc(href) + '"' + (externalSite ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' +
      '<div class="thumb"><img src="' + p.thumb + '" alt="' + esc(p.title) + '" loading="lazy" decoding="async">' + badge +
      '<span class="go" aria-hidden="true">' + ICON_ARROW + "</span></div>" +
      '<div class="meta"><h3>' + esc(p.title) + '</h3><span class="cat">' + esc(p.label) + "</span></div>" +
      "<p>" + esc(p.summary) + "</p></a>";
  }
  function render(key) {
    var items = LIST.filter(function (p) { return key === "all" || p.cat === key; });
    grid.innerHTML = items.map(function (p, i) { return card(p, i < 2); }).join("");
  }
  if (grid && filters) {
    filters.innerHTML = CATS.map(function (c, i) {
      var n = c.key === "all" ? LIST.length : LIST.filter(function (p) { return p.cat === c.key; }).length;
      return '<button type="button" data-k="' + c.key + '" aria-pressed="' + (i === 0) + '">' + esc(c.label) + "<sup>" + n + "</sup></button>";
    }).join("");
    filters.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      filters.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      render(b.dataset.k);
    });
    render("all");
  }

  /* ---------- contact ---------- */
  var cb = $("#contact-box");
  if (cb) {
    var items = [];
    if (P.email) items.push(['EMAIL', P.email, "mailto:" + P.email]);
    if (P.phone) items.push(['PHONE', P.phone, "tel:" + P.phone.replace(/[^0-9+]/g, "")]);
    if (P.instagram) items.push(['INSTAGRAM', P.instagram.replace(/^https?:\/\/(www\.)?/, ""), P.instagram]);
    if (P.github) items.push(['GITHUB', P.github.replace(/^https?:\/\//, ""), P.github]);
    if (P.resume) items.push(['RESUME', "이력서 다운로드 ↓", P.resume]);
    cb.innerHTML = items.map(function (it) {
      var ext = /^https?:/.test(it[2]) ? ' target="_blank" rel="noopener"' : "";
      return '<a class="contact-item" href="' + esc(it[2]) + '"' + ext + "><small>" + it[0] + "</small><strong>" + esc(it[1]) + "</strong></a>";
    }).join("");
  }

  /* ---------- detail page ---------- */
  var dt = $("#detail");
  if (dt) {
    var q = new URLSearchParams(location.search), id = q.get("id");
    var legacy = { "1": "hotplace", "2": "glazedsea", "3": "dongbaek-video", "4": "dongnae", "5": "firstdrive" };
    if (!id && q.get("video")) id = legacy[q.get("video")];
    var idx = LIST.findIndex(function (p) { return p.id === id; });
    if (idx < 0) { location.replace("index.html#works"); return; }
    var p = LIST[idx], prev = LIST[(idx - 1 + LIST.length) % LIST.length], next = LIST[(idx + 1) % LIST.length];
    document.title = p.title + " | 서진아 포트폴리오";
    var facts = [["CATEGORY", esc(p.detailCategory || p.label)]];
    if (p.concept) facts.push(["CONCEPT", esc(p.concept)]);
    if (p.role) facts.push(["ROLE", esc(p.role)]);
    if (p.tools && p.tools.length) facts.push(["TOOLS", esc(p.tools.join(" · "))]);
    if (p.keywords && p.keywords.length) facts.push(["KEYWORD", '<span class="kw">' + p.keywords.map(function (k) { return "<em>" + esc(k) + "</em>"; }).join("") + "</span>"]);

    var media = "";
    if (p.video) {
      media = '<div class="dt-media"><video controls playsinline preload="metadata" poster="' + p.thumb + '" src="' + p.video + '"></video></div>';
      if (p.stills) media += '<div class="stills"><h2>주요 장면</h2><div class="stills-grid' + (p.stillsContain ? " contain" : "") + '">' +
        p.stills.map(function (s, i) { return '<img src="assets/img/opt/still/' + s + '.webp" alt="' + esc(p.title) + " 장면 " + (i + 1) + '" loading="lazy">'; }).join("") + "</div></div>";
    } else if (p.site) {
      media = '<a class="dt-media dt-site" href="' + p.site + '" target="_blank" rel="noopener"><img src="' + p.thumb + '" alt="' + esc(p.title) + '"><span class="btn btn-dark open">사이트 열기 ' + ICON_ARROW + "</span></a>";
    } else if (p.detail) {
      media = '<div class="dt-long' + (p.previewVideo || p.prototype ? ' dt-interactive' : '') + '"><img src="' + p.detail + '" alt="' + esc(p.title) + ' 상세 디자인">' +
        (p.previewVideo ? '<button type="button" class="dt-image-link dt-preview-link" aria-label="앱 영상 미리보기 재생" data-preview-video="' + esc(p.previewVideo) + '"></button>' : '') +
        (p.prototype ? '<a class="dt-image-link dt-prototype-link" href="' + esc(p.prototype) + '" target="_blank" rel="noopener noreferrer" aria-label="Figma 앱 프로토타입 체험하기 (새 창)"></a>' : '') +
        '</div>';
    }

    dt.innerHTML =
      '<div class="wrap dt-top"><a class="back" href="index.html#works"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>전체 작업</a></div>' +
      '<div class="wrap dt-head"><div><h1>' + esc(p.title) + '</h1><p class="summary">' + esc(p.summary) + "</p>" +
      (p.site ? '<div class="btns"><a class="btn btn-dark" href="' + p.site + '" target="_blank" rel="noopener">라이브 사이트 보기 ' + ICON_ARROW + "</a></div>" : "") +
      '</div><div class="facts">' + facts.map(function (f) { return '<div class="fact"><b>' + f[0] + "</b><span>" + f[1] + "</span></div>"; }).join("") + "</div></div>" +
      '<div class="wrap">' + media +
      '<nav class="pager" aria-label="다른 작업"><a href="work.html?id=' + prev.id + '"><small>← PREV</small><strong>' + esc(prev.title) + '</strong></a>' +
      '<a class="next" href="work.html?id=' + next.id + '"><small>NEXT →</small><strong>' + esc(next.title) + "</strong></a></nav></div>";
    // The buttons are placed over the two printed buttons in d_07.png.
    var previewButton = dt.querySelector("[data-preview-video]");
    if (previewButton) previewButton.addEventListener("click", function () {
      var overlay = document.createElement("div");
      overlay.className = "dt-video-overlay";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-label", "앱 영상 미리보기");
      overlay.innerHTML = '<div class="dt-video-dialog"><button type="button" class="dt-video-close" aria-label="영상 닫기">×</button><video controls autoplay playsinline preload="metadata" src="' + esc(previewButton.dataset.previewVideo) + '"></video></div>';
      document.body.appendChild(overlay);
      var close = overlay.querySelector(".dt-video-close"), video = overlay.querySelector("video");
      var previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      function dismiss() {
        video.pause(); overlay.remove(); document.body.style.overflow = previousOverflow;
        document.removeEventListener("keydown", onKey); previewButton.focus();
      }
      function onKey(e) { if (e.key === "Escape") dismiss(); }
      close.addEventListener("click", dismiss);
      overlay.addEventListener("click", function (e) { if (e.target === overlay) dismiss(); });
      document.addEventListener("keydown", onKey);
      close.focus();
      video.play().catch(function () {});
    });
    scrollTo(0, 0);
  }

  /* ---------- reveal ---------- */
  var rv = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .12 });
    rv.forEach(function (el) { io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add("in"); });
})();
