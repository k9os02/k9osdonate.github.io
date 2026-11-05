// Nút "Sao chép" mặc định bị ẩn; chỉ hiện khi JavaScript chạy được.
// Không có JS thì địa chỉ vẫn chọn (nhấp một lần) và sao chép thủ công được.
document.querySelectorAll("button[data-copy]").forEach((btn) => {
  btn.hidden = false;
  const label = btn.textContent;
  btn.addEventListener("click", async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      ok = true;
    } catch (_) {}
    btn.textContent = ok ? "Đã sao chép" : "Hãy chọn và sao chép thủ công";
    btn.classList.add("done");
    setTimeout(() => {
      btn.textContent = label;
      btn.classList.remove("done");
    }, 1800);
  });
});

// Thẻ công cụ CoinGlass nổi bật trên trang chính.
const toolsSection = document.createElement("section");
toolsSection.setAttribute("aria-labelledby", "tools-title");
toolsSection.innerHTML = `
  <h2 id="tools-title">Công cụ crypto</h2>
  <p class="note">Một công cụ tham khảo để theo dõi dữ liệu thị trường.</p>
  <a class="tool-card" href="https://www.coinglass.com/?ref_code=BPELEA" target="_blank" rel="noopener noreferrer sponsored" aria-label="Mở CoinGlass trong tab mới">
    <span class="tool-icon" aria-hidden="true">CG</span>
    <span class="tool-copy">
      <span class="tool-kicker">CRYPTO MARKET DATA</span>
      <span class="tool-name">CoinGlass</span>
      <span class="tool-description">Theo dõi dữ liệu và xu hướng thị trường crypto.</span>
    </span>
    <span class="tool-cta">Khám phá <span aria-hidden="true">↗</span></span>
  </a>
`;

const toolStyles = document.createElement("style");
toolStyles.textContent = `
  .tool-card {
    position: relative; isolation: isolate; overflow: hidden;
    display: flex; align-items: center; gap: 1rem;
    padding: 1.15rem 1.25rem;
    border: 1px solid rgba(61,245,255,.32); border-radius: 1rem;
    background: linear-gradient(115deg, rgba(61,245,255,.10), rgba(19,17,43,.96) 48%, rgba(255,61,154,.09));
    box-shadow: 0 12px 36px rgba(0,0,0,.2);
    text-decoration: none; transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
  }
  .tool-card::after {
    content: ""; position: absolute; z-index: -1; width: 10rem; height: 10rem;
    right: 12%; top: -7rem; border-radius: 50%;
    background: rgba(61,245,255,.13); filter: blur(28px); transition: opacity .2s ease;
  }
  .tool-card:hover { transform: translateY(-3px); border-color: var(--cyan); box-shadow: 0 16px 42px rgba(61,245,255,.12); }
  .tool-icon {
    display: grid; place-items: center; flex: none; width: 3.25rem; height: 3.25rem;
    border: 1px solid rgba(61,245,255,.4); border-radius: .9rem;
    background: linear-gradient(145deg, rgba(61,245,255,.18), rgba(255,61,154,.13));
    color: var(--cyan); font: 700 .9rem var(--mono); letter-spacing: -.08em;
    box-shadow: inset 0 0 18px rgba(61,245,255,.08);
  }
  .tool-copy { display: grid; gap: .12rem; min-width: 0; }
  .tool-kicker { color: var(--cyan); font: 600 .65rem var(--mono); letter-spacing: .12em; }
  .tool-name { color: var(--text); font-size: 1.15rem; font-weight: 650; }
  .tool-description { color: var(--muted); font-size: .88rem; }
  .tool-cta { margin-left: auto; flex: none; color: var(--pink); font-size: .9rem; font-weight: 600; }
  .tool-cta span { display: inline-block; margin-left: .2rem; transition: transform .2s ease; }
  .tool-card:hover .tool-cta span { transform: translate(2px,-2px); }
  @media (max-width: 30rem) {
    .tool-card { align-items: flex-start; flex-wrap: wrap; padding: 1rem; }
    .tool-copy { flex: 1; }
    .tool-cta { width: 100%; margin-left: 4.25rem; }
  }
  @media (prefers-reduced-motion: reduce) { .tool-card, .tool-cta span { transition: none; } }
`;
document.head.append(toolStyles);
const socialSection = document.querySelector('section[aria-labelledby="social-title"]');
if (socialSection) socialSection.before(toolsSection);
