# LophocHuyhero-Anpretty — Hướng dẫn sử dụng bản web độc lập

Sổ tay tự học THCS lớp 6–9: Khoa học tự nhiên, Toán (Số và Đại số), Tiếng Anh.
Phiên bản học liệu: 1.4 — 26/11/2026 (10 chủ đề lớp 7 và lớp 8, 120 câu; 60 câu đã đối chiếu SGK; có chọn thành viên và thống kê cho Má).

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

## 2b. Thành viên học và thống kê cho Má

- Khi mở web, màn hình đầu tiên là **"Ai đang học hôm nay?"** với hai thành viên **Huyhero** và **Anpretty**. Con phải chọn đúng tên mình mới vào được phần chọn lớp và học bài. Nút 👤 ở góc trên dùng để đổi người học.
- Mỗi con có sổ tiến độ riêng: bài đang học, câu đã làm, lần làm đầu, các lần sửa, câu cần ôn.
- Mục **"Má Điệp yêu con"** cho xem từng con: số câu đã làm, tỉ lệ đúng ngay lần đầu, số câu tự sửa đúng, câu còn sai, số lần xin gợi ý, lần học gần nhất; **những vấn đề nên ôn luyện thêm**; lỗi con hay mắc; kết quả theo chủ đề; các câu còn sai; hoạt động gần đây.
- Tiến độ được lưu **trong trình duyệt của từng máy**. Nếu con học trên máy khác máy của Má: ở trang chủ, con mở **"Gửi kết quả cho Má"**, bấm **"Sao chép mã"** (hoặc "Tải tệp kết quả") và gửi cho Má. Má mở "Má Điệp yêu con" › **"Nhận kết quả của con từ máy khác"**, dán mã (hoặc chọn tệp) rồi bấm **"Nhận kết quả"**.
- Thêm hoặc đổi tên thành viên: sửa `thanhVien: ['Huyhero', 'Anpretty']` trong `caiDat` của `hoc-lieu.js`.
- Không có mật khẩu: con nào cũng có thể bấm tên bạn kia. Nếu cần, nhắc các con chọn đúng tên.

## 3. Đưa lên web miễn phí

Chọn một trong ba cách. Điều khoản gói miễn phí có thể thay đổi, hãy kiểm tra trên trang của dịch vụ.

**Netlify Drop (nhanh nhất):** vào trang Netlify Drop, kéo thả cả thư mục `LophocHuyhero-Anpretty` vào, nhận liên kết. Tạo tài khoản miễn phí để giữ trang lâu dài và đổi tên miền con.

**Cloudflare Pages:** tạo dự án Pages, chọn "Upload assets" (tải tệp trực tiếp), kéo thả thư mục.

**GitHub Pages:** tạo kho (repository) công khai, tải mọi tệp trong thư mục lên (giữ nguyên cấu trúc), vào Settings → Pages → chọn nhánh `main`, thư mục `/ (root)`.

Sau khi có liên kết `https://…`: học sinh mở một lần khi có mạng, sau đó vẫn dùng được khi mất mạng. Trên điện thoại có thể chọn "Thêm vào màn hình chính".

**Mỗi lần cập nhật học liệu trên web:** sửa `hoc-lieu.js`; mở `sw.js` và tăng số phiên bản (ví dụ `lophoc-v2` → `lophoc-v3`); mở `index.html`, tìm `hoc-lieu.js?v=` và đổi chuỗi phía sau thành bất kì chữ mới nào (ví dụ `?v=2026-12-01`). Tải cả ba tệp lên. Nếu chỉ sửa `hoc-lieu.js`, trang vẫn cập nhật nhưng có thể chậm tới khoảng 10 phút.

## 4. Thêm, sửa câu hỏi

Mở `hoc-lieu.js` bằng Notepad, Notepad++ hoặc VS Code (lưu dạng UTF-8).

- Mỗi chủ đề là một khối `const … = { id, lop, mon, phanMon, ten, kienThucTruoc, yeuCauCanDat, bai, cauHoi: [ … ] }`.
- Mỗi câu hỏi nằm trong mảng `cauHoi`. Mẫu đầy đủ có trong trang web, mục **Má Điệp yêu con → Thêm câu hỏi** (có nút sao chép).
- Dạng câu (`loai`): `so` (nhập số), `chon1` (một đáp án), `chonNhieu` (nhiều đáp án — ghi rõ "Chọn TẤT CẢ" trong đề), `chu` (nhập chữ), `mo` (câu mở, chấm theo tiêu chí).
- Mức (`muc`): `co-ban`, `van-dung`, `nang-cao`, kèm `liDoMuc` nêu lí do xếp mức.
- Phân số trong đề: `F(1, 2)`.
- Muốn có câu luyện lại sau khi sửa đúng: thêm `tuongTu: { … }` cùng cấu trúc, `id` kết thúc bằng `-TT`.
- Để một chủ đề mới xuất hiện: thêm khối vào `chuDe: [ … ]` và ghi `id` của nó vào cột thứ ba trong `danhMuc` (ví dụ `['Số và Đại số', 'Số thực', 'toan7-so-thuc']`).

Sau khi lưu, tải lại trang và xem **Má Điệp yêu con → Kiểm tra dữ liệu tự động**. Trang báo thiếu trường, sai cấu trúc, câu một đáp án có hai đáp án đúng, chủ đề thiếu mức…

### Sửa đáp án

- `so`: sửa `dapAn` (số hoặc `'a/b'`), `saiSo` nếu cho phép làm tròn. Lỗi thường gặp: `loi: [{ gt, nhan, phanHoi }]`. Dùng nhãn "Lỗi đổi đơn vị" hoặc "Lỗi dùng công thức" để học sinh biết nguyên nhân.
- `chon1`, `chonNhieu`: đặt `dung: true` ở phương án đúng; mỗi phương án sai nên có `phanHoi`.
- `chu`: liệt kê mọi cách viết đúng trong `chapNhan` (không phân biệt hoa thường, dấu câu). Tiếng Việt thêm `boDau: true` để chấp nhận gõ không dấu.

## 5. Cập nhật nguồn

Hiện có **60/120 câu đã đối chiếu SGK**: 36 câu KHTN 7 (Bài 2, 8, 22 — SGK KHTN 7 Kết nối tri thức, ISBN 978-604-0-30713-2; vị trí ghi trong khối `DC_KHTN7`) và 24 câu Toán 8 (Chương I, II — SGK Toán 8 tập một Kết nối tri thức, bản PDF có dấu "Bản mẫu"; vị trí ghi trong từng câu, hàm `sgk8`). 2 câu là loại B (phỏng theo). 60 câu Toán 7 và Tiếng Anh 7 vẫn "Chờ đối chiếu tài liệu" vì thư mục Drive chưa có SGK Toán 7, Tiếng Anh 7. Giáo viên chưa duyệt câu nào. Với câu khác, sau khi mở sách và đối chiếu:

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

- Đáp án đã được giải lại và kiểm thử tự động (572/572 phép kiểm tra đạt). 60 câu (KHTN 7, Toán 8) đã đối chiếu SGK; 60 câu Toán 7, Tiếng Anh 7 chưa. **Giáo viên chưa duyệt** câu nào.
- Các chủ đề ghi "Đang biên soạn" chỉ là tên dự kiến theo mạch nội dung, chưa đối chiếu số bài, Unit hay trang.
- Tài liệu cần để hoàn tất đối chiếu: xem mục **Má Điệp yêu con → Tài liệu cần bổ sung** trên trang.
