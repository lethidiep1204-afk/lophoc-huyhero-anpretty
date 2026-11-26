# LophocHuyhero-Anpretty — Hướng dẫn sử dụng bản web độc lập

Sổ tay tự học THCS lớp 6–9: Khoa học tự nhiên, Toán (Số và Đại số), Tiếng Anh.
Phiên bản học liệu: 1.0 — 26/11/2026.

## 1. Trong thư mục có gì

| Tệp | Dùng để |
|---|---|
| `index.html` | Giao diện website. Không cần sửa. |
| `hoc-lieu.js` | **Toàn bộ học liệu**: bài giảng, câu hỏi, đáp án, gợi ý, nguồn. Giáo viên chỉ sửa tệp này. |
| `sw.js` | Cho phép dùng khi mất mạng (chỉ khi đã đưa lên web https). |
| `manifest.webmanifest`, `icon.svg`, `icon-192.png`, `icon-512.png` | Biểu tượng, cho phép "Thêm vào màn hình chính" trên điện thoại. |
| `may-chu-ai/worker.js` | (Tùy chọn) Máy chủ trung gian để bật "Hỏi AI tự do". |
| `HUONG-DAN.md` | Tệp này. |

Ngoài thư mục còn có **`LophocHuyhero-Anpretty-1-tep.html`**: bản gộp mọi thứ vào một tệp, tiện gửi qua Zalo, email hoặc USB. Học sinh chỉ cần mở tệp này bằng trình duyệt.

## 2. Mở trên máy (không cần mạng, không cần cài đặt)

1. Giải nén tệp `.zip`.
2. Mở thư mục `LophocHuyhero-Anpretty`, nháy đúp `index.html` (Chrome, Edge, Firefox, Safari đều được).
3. Tiến độ (bài đang học, câu đang làm, lần làm đầu, các lần sửa, câu cần ôn) được lưu **trong trình duyệt của máy đó**. Đổi máy hoặc xóa dữ liệu trình duyệt thì tiến độ bắt đầu lại.

Khi không có mạng, trang dùng phông chữ hệ thống thay cho Be Vietnam Pro; mọi chức năng vẫn chạy.

## 3. Đưa lên web miễn phí

Chọn một trong ba cách. Điều khoản gói miễn phí có thể thay đổi, hãy kiểm tra trên trang của dịch vụ.

**Netlify Drop (nhanh nhất):** vào trang Netlify Drop, kéo thả cả thư mục `LophocHuyhero-Anpretty` vào, nhận liên kết. Tạo tài khoản miễn phí để giữ trang lâu dài và đổi tên miền con.

**Cloudflare Pages:** tạo dự án Pages, chọn "Upload assets" (tải tệp trực tiếp), kéo thả thư mục.

**GitHub Pages:** tạo kho (repository) công khai, tải mọi tệp trong thư mục lên (giữ nguyên cấu trúc), vào Settings → Pages → chọn nhánh `main`, thư mục `/ (root)`.

Sau khi có liên kết `https://…`: học sinh mở một lần khi có mạng, sau đó vẫn dùng được khi mất mạng. Trên điện thoại có thể chọn "Thêm vào màn hình chính".

**Mỗi lần cập nhật học liệu trên web:** sửa `hoc-lieu.js`, mở `sw.js` và tăng số phiên bản (`lophoc-v1` → `lophoc-v2`), rồi tải lại cả hai tệp lên.

## 4. Thêm, sửa câu hỏi

Mở `hoc-lieu.js` bằng Notepad, Notepad++ hoặc VS Code (lưu dạng UTF-8).

- Mỗi chủ đề là một khối `const … = { id, lop, mon, phanMon, ten, kienThucTruoc, yeuCauCanDat, bai, cauHoi: [ … ] }`.
- Mỗi câu hỏi nằm trong mảng `cauHoi`. Mẫu đầy đủ có trong trang web, mục **Dành cho giáo viên → Thêm câu hỏi** (có nút sao chép).
- Dạng câu (`loai`): `so` (nhập số), `chon1` (một đáp án), `chonNhieu` (nhiều đáp án — ghi rõ "Chọn TẤT CẢ" trong đề), `chu` (nhập chữ), `mo` (câu mở, chấm theo tiêu chí).
- Mức (`muc`): `co-ban`, `van-dung`, `nang-cao`, kèm `liDoMuc` nêu lí do xếp mức.
- Phân số trong đề: `F(1, 2)`.
- Muốn có câu luyện lại sau khi sửa đúng: thêm `tuongTu: { … }` cùng cấu trúc, `id` kết thúc bằng `-TT`.
- Để một chủ đề mới xuất hiện: thêm khối vào `chuDe: [ … ]` và ghi `id` của nó vào cột thứ ba trong `danhMuc` (ví dụ `['Số và Đại số', 'Số thực', 'toan7-so-thuc']`).

Sau khi lưu, tải lại trang và xem **Dành cho giáo viên → Kiểm tra dữ liệu tự động**. Trang báo thiếu trường, sai cấu trúc, câu một đáp án có hai đáp án đúng, chủ đề thiếu mức…

### Sửa đáp án

- `so`: sửa `dapAn` (số hoặc `'a/b'`), `saiSo` nếu cho phép làm tròn. Lỗi thường gặp: `loi: [{ gt, nhan, phanHoi }]`. Dùng nhãn "Lỗi đổi đơn vị" hoặc "Lỗi dùng công thức" để học sinh biết nguyên nhân.
- `chon1`, `chonNhieu`: đặt `dung: true` ở phương án đúng; mỗi phương án sai nên có `phanHoi`.
- `chu`: liệt kê mọi cách viết đúng trong `chapNhan` (không phân biệt hoa thường, dấu câu). Tiếng Việt thêm `boDau: true` để chấp nhận gõ không dấu.

## 5. Cập nhật nguồn

Hiện **toàn bộ 60 câu là loại C — bài tập tự biên soạn**, căn cứ kiến thức "Chờ đối chiếu tài liệu", giáo viên chưa duyệt. Sau khi mở sách và đối chiếu một câu:

1. Thay `nguon: tuSoan(…)` bằng đối tượng nguồn đầy đủ (mẫu A/B có trong trang, mục **Cập nhật nguồn**). Chỉ ghi trang, số bài khi đã thấy trong sách.
2. Đổi `kiemTra.doiChieuNguon` thành `'da-doi-chieu'` và `giaoVienDuyet` thành `true`.
3. Câu tự chuyển sang "Ngân hàng đã xác minh" trong bảng kiểm kê.

## 6. Bật "Hỏi AI tự do" (tùy chọn)

Không bật thì gia sư vẫn chạy miễn phí ở chế độ **Trợ giúp theo bài học**.

1. Chọn một dịch vụ AI có hạn mức miễn phí và có kiểu API "chat completions" giống OpenAI; lấy khóa API.
2. Tạo Cloudflare Worker (gói miễn phí), dán nội dung `may-chu-ai/worker.js`, đặt các biến `API_URL`, `API_KEY` (Secret), `MODEL`, `ALLOW_ORIGIN`.
3. Chép địa chỉ worker vào `caiDat.aiEndpoint` trong `hoc-lieu.js`.

**Không bao giờ ghi khóa API vào `index.html` hay `hoc-lieu.js`.** Khi hết hạn mức hoặc mất kết nối, trang tự chuyển về Trợ giúp theo bài học và giữ nguyên bài làm.

## 7. Lưu ý trước khi giao cho học sinh

- Đáp án đã được giải lại và kiểm thử tự động (262/262 phép kiểm tra đạt), nhưng **chưa đối chiếu SGK** và **giáo viên chưa duyệt**.
- Các chủ đề ghi "Đang biên soạn" chỉ là tên dự kiến theo mạch nội dung, chưa đối chiếu số bài, Unit hay trang.
- Tài liệu cần để hoàn tất đối chiếu: xem mục **Dành cho giáo viên → Tài liệu cần bổ sung** trên trang.
