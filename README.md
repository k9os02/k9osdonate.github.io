# k9os donate page

Trang tĩnh nhận ủng hộ crypto và liên kết giới thiệu của k9os.
Live: https://k9os02.github.io/k9osdonate.github.io/

- `index.html`: toàn bộ nội dung và CSS, không phụ thuộc bên ngoài (không CDN, không Google Fonts).
- `copy.js`: nút "Sao chép" (tuỳ chọn, trang vẫn dùng được khi không có JS).
- `gen_qr.py`: tạo lại mã QR khi đổi địa chỉ ví (`pip install segno`).
- Meta CSP trong `index.html` chặn mọi script/tài nguyên từ nguồn ngoài.
