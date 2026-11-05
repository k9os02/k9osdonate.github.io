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
