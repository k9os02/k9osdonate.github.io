# k9os donate / referral landing page

Một trang web tĩnh dùng để nhận ủng hộ crypto và chia sẻ link referral. Repo này đã được tối ưu để chạy trên GitHub Pages.

## Cấu trúc nhanh

- `index.html`: giao diện chính
- `_config.yml`: metadata cho GitHub Pages

## Bước 1: điền thông tin thật

Mở file `index.html` và tìm phần:

```js
const CONFIG = {
  tagline: "...",
  wallets: [
    { coin: "Bitcoin", network: "Bitcoin (BTC)", address: "YOUR_BTC_ADDRESS" },
    { coin: "Ethereum", network: "Ethereum (ERC-20)", address: "YOUR_ETH_ADDRESS" },
    { coin: "USDT", network: "TRON (TRC-20)", address: "YOUR_USDT_ADDRESS" }
  ],
  cex: [
    { name: "Binance", perk: "Giảm phí giao dịch", url: "https://www.binance.com/..." },
    { name: "OKX", perk: "Giảm phí giao dịch", url: "https://www.okx.com/..." }
  ],
  dex: [
    { name: "Uniswap", perk: "Swap trên Ethereum", url: "https://app.uniswap.org/..." }
  ]
};
```

Thay bằng ví/address và link referral thật của bạn.

## Bước 2: push lên GitHub

1. Commit tất cả thay đổi
2. Push lên nhánh `main`
3. Vào Settings > Pages
4. Chọn "Deploy from a branch"
5. Chọn branch `main`, folder `/root`

## Bước 3: kiểm tra site

Sau khi deploy, trang sẽ có dạng:

- `https://k9os02.github.io/k9osdonate.github.io/`

Nếu bạn dùng custom domain, hãy thêm file `CNAME` với tên domain của bạn.

## Lưu ý quan trọng

- Không bao giờ đưa seed phrase / private key lên website
- Luôn ghi rõ mạng cần gửi (BTC, ERC-20, TRC-20)
- Gửi sai network có thể làm mất tiền
- Link referral nên chỉ dùng khi bạn tin rằng người dùng thấy nó hữu ích

## Tài liệu thêm

- GitHub Pages: https://docs.github.com/pages
- Cấu hình Jekyll: https://jekyllrb.com/docs/configuration/
