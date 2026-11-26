/* =====================================================================
   HỌC LIỆU — LophocHuyhero-Anpretty
   Giáo viên chỉ cần sửa tệp này để thêm/sửa câu hỏi, đáp án, nguồn.
   Giao diện (index.html) tự đọc dữ liệu, không cần sửa.
   Xem trang "Dành cho giáo viên" trên web để biết cấu trúc từng trường.
   ===================================================================== */
(function () {
  const TEN_WEB = 'LophocHuyhero-Anpretty';
  const NGAY_SOAN = '26/11/2026';

  // Nguồn loại C — bài tự biên soạn. Mỗi câu gọi hàm này với nội dung đối chiếu RIÊNG của câu đó.
  function tuSoan(canDoiChieu, opt) {
    opt = opt || {};
    return {
      loai: 'C',
      loaiTen: 'Bài tập tự biên soạn cho ' + TEN_WEB,
      nguonBaiTap: 'Nhóm biên soạn ' + TEN_WEB + ' — bản nháp do trợ lí AI (Claude) soạn ngày ' + NGAY_SOAN + ', chưa được giáo viên duyệt.',
      canCu: 'Chờ đối chiếu tài liệu',
      canDoiChieu: canDoiChieu,           // tài liệu + nội dung cụ thể cần mở ra để đối chiếu
      tenTaiLieu: null, donViPhatHanh: null, anBan: null, viTri: null, lienKet: null,
      soLieu: opt.soLieu || null           // ví dụ 'Số liệu giả định dùng cho bài tập'
    };
  }
  // Trạng thái kiểm tra — tách "đáp án" và "nguồn".
  function kt(cach) {
    return {
      dapAn: 'da-kiem-tra',
      cachKiemTra: cach || 'Nhóm biên soạn tự giải lại; đáp án và các lỗi thường gặp được chạy kiểm thử tự động ngày ' + NGAY_SOAN + '.',
      doiChieuNguon: 'cho-doi-chieu',
      giaoVienDuyet: false
    };
  }
  const GIA_DINH = 'Số liệu giả định dùng cho bài tập';
  // Viết phân số đẹp trong đề/lời giải: F(1, 2) → 1/2 dạng tử trên mẫu dưới.
  const F = (a, b) => '<span class="frac"><span>' + a + '</span><span>' + b + '</span></span>';
  const SGK_KHTN7 = 'SGK Khoa học tự nhiên 7, bộ "Kết nối tri thức với cuộc sống" (NXB Giáo dục Việt Nam)';
  const SGK_TOAN7 = 'SGK Toán 7, bộ "Kết nối tri thức với cuộc sống" (NXB Giáo dục Việt Nam)';
  const SGK_TA7 = 'SGK Tiếng Anh 7 Global Success (NXB Giáo dục Việt Nam)';
  const CT_GDPT = 'Chương trình GDPT 2018 (ban hành kèm Thông tư 32/2018/TT-BGDĐT)';

  /* ------------------------------------------------------------------
     CHỦ ĐỀ 1 — VẬT LÍ 7: TỐC ĐỘ CHUYỂN ĐỘNG
     ------------------------------------------------------------------ */
  const vatLi = {
    id: 'vl7-toc-do', lop: 7, mon: 'khtn', phanMon: 'Vật lí', ten: 'Tốc độ chuyển động',
    kienThucTruoc: ['Đổi đơn vị độ dài: 1 km = 1000 m', 'Đổi đơn vị thời gian: 1 h = 60 min = 3600 s', 'Chia số thập phân'],
    yeuCauCanDat: ['Nêu được ý nghĩa của tốc độ: cho biết chuyển động nhanh hay chậm.', 'Tính được tốc độ từ quãng đường và thời gian tương ứng (v = s/t).', 'Dùng và đổi được các đơn vị tốc độ thường gặp: m/s, km/h.'],
    bai: {
      mucTieu: ['giải thích tốc độ cho biết điều gì;', 'tính tốc độ bằng công thức v = s/t;', 'đổi phút sang giờ, m/s sang km/h trước khi so sánh;', 'tính đúng tốc độ trung bình của cả hành trình.'],
      khoiDong: { hoi: 'Hà đi bộ 1 km hết 15 phút. Quân đạp xe 1 km hết 5 phút. Bạn nào chuyển động nhanh hơn? Em dựa vào đâu để biết?', goiY: 'Cùng một quãng đường 1 km, bạn nào mất ít thời gian hơn thì nhanh hơn: Quân. Khi quãng đường khác nhau, ta cần một đại lượng chung để so sánh — đó là tốc độ.' },
      trongTam: [
        '<b>Tốc độ</b> cho biết chuyển động nhanh hay chậm, được xác định bằng quãng đường đi được trong một đơn vị thời gian.',
        'Công thức: <span class="ct">v = <span class="frac"><span>s</span><span>t</span></span></span> &nbsp;(s: quãng đường, t: thời gian đi hết quãng đường đó).',
        'Đơn vị thường dùng: <b>m/s</b> và <b>km/h</b>. 1 m/s = 3,6 km/h.',
        '<b>Quy tắc vàng:</b> đưa s và t về cùng một hệ đơn vị <i>trước</i> khi chia (km với h, hoặc m với s).',
        '<b>Tốc độ trung bình cả hành trình</b> = tổng quãng đường : tổng thời gian (không phải trung bình cộng các tốc độ).'
      ],
      viDu: { de: 'Một ô tô đi 90 km trong 1 giờ 30 phút. Tính tốc độ của ô tô theo km/h và theo m/s.', loiGiai: 'Đổi t = 1 giờ 30 phút = 1,5 h.<br>v = 90 : 1,5 = <b>60 km/h</b>.<br>Đổi sang m/s: 60 km/h = 60 000 m : 3600 s ≈ <b>16,67 m/s</b> (hoặc 60 : 3,6 ≈ 16,67).' },
      nguon: tuSoan(SGK_KHTN7 + ' — phần định nghĩa tốc độ, công thức v = s/t và đơn vị tốc độ; đối chiếu thêm ' + CT_GDPT + ', môn KHTN lớp 7, nội dung Tốc độ.'),
      hoiDap: [
        { tu: ['cong thuc', 'v = s', 'tinh toc do', 'toc do la gi', 'toc do'], tl: 'Tốc độ cho biết chuyển động nhanh hay chậm. Công thức: v = s : t. Nhớ đưa s và t về cùng hệ đơn vị trước: km với giờ, hoặc m với giây.' },
        { tu: ['doi', 'phut', 'gio', 'don vi'], tl: 'Đổi phút ra giờ: chia cho 60. Ví dụ 15 phút = 15 : 60 = 0,25 h. Đổi m/s ra km/h: nhân 3,6.' },
        { tu: ['trung binh'], tl: 'Tốc độ trung bình cả hành trình = tổng quãng đường : tổng thời gian. Không lấy (v1 + v2) : 2, trừ khi hai chặng có thời gian bằng nhau.' }
      ]
    },
    cauHoi: [
      {
        id: 'VL7-01', muc: 'co-ban', liDoMuc: 'Áp dụng trực tiếp v = s/t, dữ kiện đã cùng hệ đơn vị km – h.',
        loai: 'so', de: 'Bạn An đi xe đạp được quãng đường <b>6 km</b> trong <b>0,5 h</b>. Tính tốc độ của An.', donVi: 'km/h',
        dapAn: 12, saiSo: 0.01,
        loi: [
          { gt: 3, nhan: 'Lỗi dùng công thức', phanHoi: 'Em đã nhân s × t (6 × 0,5). Tốc độ là quãng đường <b>chia</b> cho thời gian.' },
          { gt: 0.0833, saiSo: 0.002, nhan: 'Lỗi dùng công thức', phanHoi: 'Em đã lấy thời gian chia quãng đường (0,5 : 6). Hãy đảo lại: v = s : t.' }
        ],
        buoc: { hoi: 'Em viết phép tính em đã dùng: lấy số nào chia cho số nào? Gõ kết quả của 6 : 0,5.', dapAn: 12, dung: 'Đúng: 6 : 0,5 = 12. Em kiểm tra lại xem đã gõ đúng kết quả chưa nhé.', sai: 'Chưa đúng. Chia cho 0,5 cũng là nhân với 2.' },
        goiY: ['Công thức nào liên hệ tốc độ, quãng đường và thời gian?', 'v = s : t = 6 : 0,5. Chia cho 0,5 giống nhân với 2.'],
        viSaoDung: 'v = s : t = 6 km : 0,5 h = 12 km/h. Dữ kiện đã cùng hệ km – h nên chia thẳng.',
        loiGiai: 'v = <span class="frac"><span>s</span><span>t</span></span> = <span class="frac"><span>6 km</span><span>0,5 h</span></span> = <b>12 km/h</b>.',
        giangLai: 'Nghĩ theo cách "mỗi giờ đi được bao nhiêu km": nửa giờ An đi 6 km, vậy cả 1 giờ An đi gấp đôi: 6 × 2 = 12 km. Tốc độ 12 km/h.',
        tienBo: 'Em đã nhận ra tốc độ là quãng đường chia thời gian, không phải nhân.',
        nguon: tuSoan(SGK_KHTN7 + ' — công thức v = s/t và đơn vị km/h.'), kiemTra: kt(),
        tuongTu: {
          id: 'VL7-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, thay dữ kiện.', loai: 'so',
          de: 'Chị Mai chạy xe đạp điện được <b>10 km</b> trong <b>0,5 h</b>. Tính tốc độ của chị Mai.', donVi: 'km/h', dapAn: 20, saiSo: 0.01,
          loi: [{ gt: 5, nhan: 'Lỗi dùng công thức', phanHoi: 'Em đã nhân 10 × 0,5. Hãy chia: v = s : t.' }, { gt: 0.05, saiSo: 0.002, nhan: 'Lỗi dùng công thức', phanHoi: 'Em đã chia t cho s. Đảo lại: s : t.' }],
          goiY: ['v = s : t = 10 : 0,5.'], viSaoDung: '10 km : 0,5 h = 20 km/h.', loiGiai: 'v = 10 : 0,5 = <b>20 km/h</b>.', giangLai: 'Nửa giờ đi 10 km → 1 giờ đi 20 km.',
          nguon: tuSoan(SGK_KHTN7 + ' — công thức v = s/t.'), kiemTra: kt()
        }
      },
      {
        id: 'VL7-02', muc: 'co-ban', liDoMuc: 'Nhận biết ý nghĩa của đại lượng tốc độ.',
        loai: 'chon1', de: 'Tốc độ của một vật cho biết điều gì?',
        phuongAn: [
          { t: 'Chuyển động của vật nhanh hay chậm.', dung: true },
          { t: 'Quãng đường vật đi được.', phanHoi: 'Quãng đường là "đi được bao xa", chưa nói gì về nhanh hay chậm nếu không biết thời gian.' },
          { t: 'Thời gian vật chuyển động.', phanHoi: 'Thời gian chỉ là một yếu tố. Đi lâu chưa chắc đã chậm nếu quãng đường dài.' },
          { t: 'Hướng chuyển động của vật.', phanHoi: 'Tốc độ không cho biết hướng; hai xe đi ngược chiều vẫn có thể cùng tốc độ.' }
        ],
        goiY: ['Hai bạn cùng chạy 100 m: bạn có tốc độ lớn hơn thì về đích thế nào?'],
        viSaoDung: 'Tốc độ là quãng đường đi được trong một đơn vị thời gian, nên nó cho biết chuyển động nhanh hay chậm.',
        loiGiai: 'Đáp án: <b>Chuyển động của vật nhanh hay chậm.</b> Tốc độ càng lớn, vật chuyển động càng nhanh.',
        giangLai: 'Đồng hồ tốc độ trên xe máy chỉ 40 km/h nghĩa là: nếu giữ nguyên như vậy, mỗi giờ xe đi được 40 km. Con số đó nói xe đang đi nhanh hay chậm.',
        tienBo: 'Em đã phân biệt được tốc độ với quãng đường và thời gian.',
        nguon: tuSoan(SGK_KHTN7 + ' — ý nghĩa của tốc độ.'), kiemTra: kt(),
        tuongTu: {
          id: 'VL7-02-TT', muc: 'co-ban', liDoMuc: 'Nhận biết đơn vị tốc độ.', loai: 'chon1', de: 'Đơn vị nào sau đây là đơn vị đo tốc độ?',
          phuongAn: [{ t: 'km', phanHoi: 'km là đơn vị độ dài.' }, { t: 'h', phanHoi: 'h (giờ) là đơn vị thời gian.' }, { t: 'm/s', dung: true }, { t: 'm·s', phanHoi: 'Tốc độ là quãng đường CHIA thời gian, nên đơn vị là m/s, không phải m nhân s.' }],
          goiY: ['Tốc độ = quãng đường : thời gian → đơn vị = đơn vị độ dài / đơn vị thời gian.'], viSaoDung: 'm/s = mét chia giây, đúng dạng quãng đường : thời gian.', loiGiai: '<b>m/s</b>.', giangLai: 'Nhìn công thức v = s : t, đơn vị cũng "chia" như vậy.',
          nguon: tuSoan(SGK_KHTN7 + ' — đơn vị đo tốc độ.'), kiemTra: kt()
        }
      },
      {
        id: 'VL7-03', muc: 'van-dung', liDoMuc: 'Hai bước: đổi đơn vị (m → km, phút → giờ) rồi mới tính tốc độ.',
        loai: 'so', de: 'Bình chạy được <b>900 m</b> trong <b>5 phút</b>. Tính tốc độ của Bình theo đơn vị <b>km/h</b>.', donVi: 'km/h',
        dapAn: 10.8, saiSo: 0.01,
        loi: [
          { gt: 180, nhan: 'Lỗi đổi đơn vị', phanHoi: 'Em đã chia 900 m cho 5 phút, kết quả là <b>m/phút</b>, chưa phải km/h. Hãy đổi 900 m ra km và 5 phút ra giờ trước.' },
          { gt: 0.18, saiSo: 0.001, nhan: 'Lỗi đổi đơn vị', phanHoi: 'Em đã đổi 900 m = 0,9 km nhưng vẫn để thời gian là 5 <b>phút</b>. Cần đổi 5 phút ra giờ.' },
          { gt: 3, nhan: 'Lỗi đổi đơn vị', phanHoi: '3 là tốc độ tính theo <b>m/s</b> (900 m : 300 s). Đề hỏi km/h: nhân thêm 3,6.' },
          { gt: 10800, nhan: 'Lỗi đổi đơn vị', phanHoi: 'Em đã đổi thời gian ra giờ nhưng quãng đường vẫn là mét (ra m/h). Đổi 900 m = 0,9 km.' },
          { gt: 4.5, nhan: 'Lỗi đổi đơn vị', phanHoi: 'Có vẻ em đã đổi 5 phút = 0,2 h (nhầm 1 h = 100 phút?). 1 h = 60 phút nên 5 phút = 5/60 h.' }
        ],
        buoc: { hoi: 'Trước khi kết luận, em cho biết: 5 phút bằng bao nhiêu giờ? (có thể viết phân số hoặc số thập phân)', dapAn: '1/12', saiSo: 0.004, dung: 'Đúng: 5 phút = 5/60 = 1/12 h. Bây giờ em lấy 0,9 km chia cho 1/12 h (tức là nhân 12).', sai: 'Chưa đúng. 1 giờ có 60 phút, nên 5 phút = 5 : 60 giờ.' },
        goiY: ['Đề hỏi km/h, vậy quãng đường cần ở đơn vị nào? Thời gian cần ở đơn vị nào?', '900 m = 0,9 km; 5 phút = 5/60 h = 1/12 h.', 'Chia cho 1/12 chính là nhân với 12.'],
        viSaoDung: 'Đã đổi đúng 900 m = 0,9 km và 5 phút = 1/12 h, nên v = 0,9 × 12 = 10,8 km/h.',
        loiGiai: 's = 900 m = 0,9 km; t = 5 phút = <span class="frac"><span>5</span><span>60</span></span> h = <span class="frac"><span>1</span><span>12</span></span> h.<br>v = 0,9 : <span class="frac"><span>1</span><span>12</span></span> = 0,9 × 12 = <b>10,8 km/h</b>.<br><i>Cách khác:</i> v = 900 m : 300 s = 3 m/s = 3 × 3,6 = 10,8 km/h.',
        giangLai: 'Thử nghĩ theo "1 giờ chạy được bao xa": 1 giờ có 60 phút = 12 lần 5 phút. Mỗi 5 phút Bình chạy 900 m, nên 1 giờ chạy 12 × 900 = 10 800 m = 10,8 km. Vậy 10,8 km/h.',
        tienBo: 'Em đã tự phát hiện và sửa bước đổi đơn vị — bước nhiều bạn hay bỏ quên.',
        nguon: tuSoan(SGK_KHTN7 + ' — đơn vị tốc độ và cách đổi giữa m/s và km/h.', { soLieu: GIA_DINH }), kiemTra: kt(),
        tuongTu: {
          id: 'VL7-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc: đổi đơn vị rồi tính.', loai: 'so',
          de: 'Một chú chó chạy được <b>1,2 km</b> trong <b>4 phút</b>. Tính tốc độ của chú chó theo <b>km/h</b>.', donVi: 'km/h', dapAn: 18, saiSo: 0.01,
          loi: [{ gt: 0.3, nhan: 'Lỗi đổi đơn vị', phanHoi: 'Em chia 1,2 km cho 4 <b>phút</b>, ra km/phút. Hãy đổi 4 phút ra giờ.' }, { gt: 300, nhan: 'Lỗi đổi đơn vị', phanHoi: 'Em ra m/phút (1200 : 4). Đề hỏi km/h.' }, { gt: 5, nhan: 'Lỗi đổi đơn vị', phanHoi: '5 là tốc độ theo m/s (1200 m : 240 s). Nhân 3,6 để ra km/h.' }],
          buoc: { hoi: '4 phút bằng bao nhiêu giờ?', dapAn: '1/15', saiSo: 0.004, dung: 'Đúng: 4/60 = 1/15 h.', sai: '4 phút = 4 : 60 giờ.' },
          goiY: ['4 phút = 4/60 h = 1/15 h.', 'Chia cho 1/15 là nhân 15.'], viSaoDung: '1,2 × 15 = 18 km/h.', loiGiai: 't = 4/60 h = 1/15 h; v = 1,2 × 15 = <b>18 km/h</b>.', giangLai: '1 giờ = 15 lần 4 phút → 15 × 1,2 = 18 km.',
          nguon: tuSoan(SGK_KHTN7 + ' — đổi đơn vị tốc độ.', { soLieu: GIA_DINH }), kiemTra: kt()
        }
      },
      {
        id: 'VL7-04', muc: 'van-dung', liDoMuc: 'Tự chọn cách so sánh: tính tốc độ hai bạn sau khi đổi phút sang giờ.',
        loai: 'chon1', de: 'Lan đi được <b>3 km</b> hết <b>15 phút</b>. Minh đi được <b>5 km</b> hết <b>20 phút</b>. Nhận xét nào đúng?',
        phuongAn: [
          { t: 'Lan nhanh hơn vì Lan đi ít thời gian hơn.', phanHoi: 'Chỉ so thời gian là chưa đủ vì hai bạn đi quãng đường khác nhau. Hãy tính tốc độ của từng bạn.' },
          { t: 'Minh nhanh hơn.', dung: true },
          { t: 'Hai bạn nhanh như nhau.', phanHoi: 'Thử tính: Lan 3 : 0,25 = ? km/h; Minh 5 : (1/3) = ? km/h.' },
          { t: 'Không so sánh được vì thời gian khác nhau.', phanHoi: 'So sánh được! Tốc độ chính là "thước đo chung" khi quãng đường và thời gian khác nhau.' }
        ],
        goiY: ['Đổi 15 phút và 20 phút ra giờ.', 'Lan: 3 : 0,25; Minh: 5 : (1/3).'],
        viSaoDung: 'Lan: 3 : 0,25 = 12 km/h; Minh: 5 : 1/3 = 15 km/h. 15 > 12 nên Minh nhanh hơn.',
        loiGiai: 'Lan: t = 15 phút = 0,25 h → v = 3 : 0,25 = 12 km/h.<br>Minh: t = 20 phút = <span class="frac"><span>1</span><span>3</span></span> h → v = 5 × 3 = 15 km/h.<br>Vậy <b>Minh nhanh hơn</b>.',
        giangLai: 'Quy về cùng 60 phút: Lan 15 phút đi 3 km → 60 phút đi 4 × 3 = 12 km. Minh 20 phút đi 5 km → 60 phút đi 3 × 5 = 15 km. Ai đi xa hơn trong cùng 1 giờ thì nhanh hơn.',
        tienBo: 'Em đã chuyển từ "so thời gian" sang "so tốc độ" — đúng cách so sánh hai chuyển động.',
        nguon: tuSoan(SGK_KHTN7 + ' — so sánh chuyển động nhanh, chậm bằng tốc độ.', { soLieu: GIA_DINH }), kiemTra: kt(),
        tuongTu: {
          id: 'VL7-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Hà đi được <b>2 km</b> hết <b>10 phút</b>. Tú đi được <b>3,5 km</b> hết <b>20 phút</b>. Nhận xét nào đúng?',
          phuongAn: [{ t: 'Hà nhanh hơn.', dung: true }, { t: 'Tú nhanh hơn vì Tú đi được xa hơn.', phanHoi: 'Tú đi xa hơn nhưng cũng mất nhiều thời gian hơn. Hãy tính tốc độ.' }, { t: 'Hai bạn nhanh như nhau.', phanHoi: 'Tính lại: Hà 2 × 6 = ?, Tú 3,5 × 3 = ?' }, { t: 'Không so sánh được.', phanHoi: 'So sánh được bằng tốc độ.' }],
          goiY: ['10 phút = 1/6 h; 20 phút = 1/3 h.'], viSaoDung: 'Hà: 2 × 6 = 12 km/h; Tú: 3,5 × 3 = 10,5 km/h.', loiGiai: 'Hà 12 km/h > Tú 10,5 km/h → <b>Hà nhanh hơn</b>.', giangLai: 'Quy về 60 phút: Hà 6 × 2 = 12 km; Tú 3 × 3,5 = 10,5 km.',
          nguon: tuSoan(SGK_KHTN7 + ' — so sánh tốc độ.', { soLieu: GIA_DINH }), kiemTra: kt()
        }
      },
      {
        id: 'VL7-05', muc: 'nang-cao', liDoMuc: 'Nhiều bước, dễ mắc sai lầm "trung bình cộng tốc độ"; phải phân tích bảng dữ liệu.',
        loai: 'so', de: 'Bảng dưới ghi hành trình đi xe đạp của Khoa. Tính <b>tốc độ trung bình của cả hành trình</b>.', donVi: 'km/h',
        bang: { tieuDe: ['Chặng', 'Quãng đường', 'Thời gian'], dong: [['Chặng 1', '6 km', '0,5 h'], ['Chặng 2', '6 km', '1 h']], ghiChu: GIA_DINH },
        dapAn: 8, saiSo: 0.01,
        loi: [
          { gt: 9, nhan: 'Lỗi dùng công thức', phanHoi: 'Em đã lấy trung bình cộng hai tốc độ (12 + 6) : 2 = 9. Tốc độ trung bình cả hành trình phải là <b>tổng quãng đường : tổng thời gian</b>.' },
          { gt: 18, nhan: 'Lỗi dùng công thức', phanHoi: 'Em đã cộng hai tốc độ (12 + 6). Tốc độ không cộng dồn như vậy được.' },
          { gt: 12, nhan: 'Cần xem lại', phanHoi: '12 km/h chỉ là tốc độ của chặng 1. Đề hỏi cả hành trình.' },
          { gt: 6, nhan: 'Cần xem lại', phanHoi: '6 km/h chỉ là tốc độ của chặng 2. Đề hỏi cả hành trình.' }
        ],
        buoc: { hoi: 'Tổng thời gian của cả hành trình là bao nhiêu giờ?', dapAn: 1.5, saiSo: 0.001, dung: 'Đúng: 1,5 h. Tổng quãng đường là 12 km. Bây giờ em chia.', sai: 'Cộng thời gian hai chặng: 0,5 + 1.' },
        goiY: ['Cả hành trình dài bao nhiêu km? Mất tổng cộng bao nhiêu giờ?', 'Tổng s = 12 km; tổng t = 1,5 h.'],
        viSaoDung: 'v_tb = (6 + 6) : (0,5 + 1) = 12 : 1,5 = 8 km/h.',
        loiGiai: 'Tổng quãng đường: 6 + 6 = 12 km. Tổng thời gian: 0,5 + 1 = 1,5 h.<br>v<sub>tb</sub> = 12 : 1,5 = <b>8 km/h</b>.<br>Lưu ý: (12 + 6) : 2 = 9 km/h là <i>sai</i>, vì Khoa đi chậm lâu hơn (1 h) so với đi nhanh (0,5 h).',
        giangLai: 'Ví dụ đơn giản hơn: em đi 1 giờ với tốc độ 10 km/h rồi đứng yên 1 giờ (0 km/h). Trong 2 giờ em đi được 10 km, tức là trung bình 5 km/h. Nhưng nếu em đi 10 km/h trong 1 giờ rồi đứng yên chỉ 1 phút thì trung bình gần 10 km/h. Thời gian ở mỗi chặng ảnh hưởng tới kết quả, nên ta phải lấy tổng quãng đường chia tổng thời gian.',
        tienBo: 'Em đã tránh được bẫy "trung bình cộng tốc độ" — một sai lầm rất phổ biến.',
        nguon: tuSoan(SGK_KHTN7 + ' — tốc độ và cách tính tốc độ trên cả quãng đường (cần kiểm tra SGK lớp 7 có dùng thuật ngữ "tốc độ trung bình" không).', { soLieu: GIA_DINH }), kiemTra: kt(),
        tuongTu: {
          id: 'VL7-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một người chạy bộ: chặng 1 dài <b>9 km</b> hết <b>0,5 h</b>; chặng 2 dài <b>9 km</b> hết <b>1 h</b>. Tính tốc độ trung bình cả hành trình.', donVi: 'km/h', dapAn: 12, saiSo: 0.01,
          loi: [{ gt: 13.5, nhan: 'Lỗi dùng công thức', phanHoi: 'Em lấy trung bình cộng (18 + 9) : 2. Hãy dùng tổng quãng đường : tổng thời gian.' }, { gt: 27, nhan: 'Lỗi dùng công thức', phanHoi: 'Em cộng hai tốc độ. Hãy dùng tổng s : tổng t.' }],
          buoc: { hoi: 'Tổng quãng đường là bao nhiêu km?', dapAn: 18, saiSo: 0.001, dung: 'Đúng, 18 km trong 1,5 h.', sai: '9 + 9 = ?' },
          goiY: ['Tổng s = 18 km; tổng t = 1,5 h.'], viSaoDung: '18 : 1,5 = 12 km/h.', loiGiai: 'v<sub>tb</sub> = (9 + 9) : (0,5 + 1) = <b>12 km/h</b>.', giangLai: 'Cộng hết quãng đường, cộng hết thời gian, rồi mới chia.',
          nguon: tuSoan(SGK_KHTN7 + ' — tốc độ trên cả quãng đường.', { soLieu: GIA_DINH }), kiemTra: kt()
        }
      },
      {
        id: 'VL7-06', muc: 'nang-cao', liDoMuc: 'Đánh giá một nhận định bằng dữ liệu; phân biệt trường hợp đúng/sai.',
        loai: 'chonNhieu', de: 'Một bạn nhận định: <i>"Tốc độ trung bình của cả hành trình luôn bằng trung bình cộng tốc độ hai chặng."</i> Dựa vào bảng, <b>chọn TẤT CẢ các nhận xét đúng</b>.',
        bang: { tieuDe: ['Hành trình', 'Chặng 1', 'Chặng 2', 'Cả hành trình'], dong: [['X', '30 km trong 1 h (30 km/h)', '50 km trong 1 h (50 km/h)', '80 km trong 2 h'], ['Y', '6 km trong 0,5 h (12 km/h)', '6 km trong 1 h (6 km/h)', '12 km trong 1,5 h']], ghiChu: GIA_DINH },
        phuongAn: [
          { t: 'Nhận định luôn đúng.', phanHoi: 'Hành trình Y là phản ví dụ: trung bình cộng là 9 km/h nhưng tốc độ trung bình thực là 8 km/h.' },
          { t: 'Với hành trình Y, tốc độ trung bình (8 km/h) khác trung bình cộng hai tốc độ (9 km/h), nên nhận định sai.', dung: true },
          { t: 'Với hành trình X, hai chặng có thời gian bằng nhau và tốc độ trung bình (40 km/h) bằng trung bình cộng hai tốc độ.', dung: true },
          { t: 'Tốc độ trung bình của cả hành trình bằng tổng quãng đường chia tổng thời gian.', dung: true }
        ],
        goiY: ['Tính tốc độ trung bình của X: 80 : 2. Của Y: 12 : 1,5.', 'So sánh mỗi kết quả với (v1 + v2) : 2.'],
        viSaoDung: 'X: 80 : 2 = 40 = (30 + 50) : 2 (vì hai chặng cùng thời gian). Y: 12 : 1,5 = 8 ≠ 9. Một phản ví dụ là đủ để bác bỏ chữ "luôn".',
        loiGiai: 'Đáp án đúng: ý 2, 3, 4.<br>X: v<sub>tb</sub> = 80 : 2 = 40 km/h; (30 + 50) : 2 = 40 km/h → bằng nhau.<br>Y: v<sub>tb</sub> = 12 : 1,5 = 8 km/h; (12 + 6) : 2 = 9 km/h → khác nhau.<br>Kết luận: nhận định <b>sai</b>; nó chỉ đúng trong trường hợp đặc biệt hai chặng có thời gian bằng nhau.',
        giangLai: 'Muốn bác bỏ một câu có chữ "luôn", em chỉ cần tìm MỘT trường hợp nó sai. Hành trình Y chính là trường hợp đó. Còn X cho thấy đôi khi nó đúng, nên ta nói "không phải lúc nào cũng đúng".',
        tienBo: 'Em đã dùng dữ liệu để bác bỏ một nhận định — đây là kĩ năng của nhà khoa học.',
        nguon: tuSoan(SGK_KHTN7 + ' — tốc độ trên cả quãng đường; bài phân tích dữ liệu.', { soLieu: GIA_DINH }), kiemTra: kt(),
        tuongTu: {
          id: 'VL7-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu',
          de: 'Bạn Phong đi chặng 1 dài <b>10 km hết 1 h</b>, chặng 2 dài <b>10 km hết 0,5 h</b>, rồi tính tốc độ trung bình bằng (10 + 20) : 2. <b>Chọn TẤT CẢ các nhận xét đúng</b>.',
          phuongAn: [{ t: 'Tốc độ trung bình thực là 20 : 1,5 ≈ 13,3 km/h.', dung: true }, { t: 'Cách tính của Phong cho kết quả 15 km/h.', dung: true }, { t: 'Cách của Phong đúng vì hai chặng dài bằng nhau.', phanHoi: 'Dài bằng nhau chưa đủ; cần thời gian bằng nhau thì trung bình cộng mới đúng.' }, { t: 'Phải lấy tổng quãng đường chia tổng thời gian.', dung: true }],
          goiY: ['Tính 20 : 1,5 và (10 + 20) : 2.'], viSaoDung: '20 : 1,5 ≈ 13,3 ≠ 15.', loiGiai: 'Ý 1, 2, 4 đúng.', giangLai: 'Chặng chậm kéo dài thời gian hơn nên kéo tốc độ trung bình xuống.',
          nguon: tuSoan(SGK_KHTN7 + ' — tốc độ trên cả quãng đường.', { soLieu: GIA_DINH }), kiemTra: kt()
        }
      }
    ]
  };

  /* ------------------------------------------------------------------
     CHỦ ĐỀ 2 — HÓA HỌC 7: NGUYÊN TỬ
     ------------------------------------------------------------------ */
  const hoaHoc = {
    id: 'hh7-nguyen-tu', lop: 7, mon: 'khtn', phanMon: 'Hóa học', ten: 'Nguyên tử',
    kienThucTruoc: ['Chất được tạo nên từ những hạt rất nhỏ', 'Điện tích dương, âm; vật trung hòa về điện', 'Cộng, trừ, chia số tự nhiên'],
    yeuCauCanDat: ['Trình bày được mô hình nguyên tử gồm hạt nhân (proton, neutron) và vỏ electron.', 'Nêu được nguyên tử trung hòa về điện: số proton = số electron.', 'Tính được khối lượng nguyên tử gần đúng theo amu từ số proton và neutron.', 'Mô tả được sự sắp xếp electron theo lớp (với các nguyên tố đầu bảng).'],
    bai: {
      mucTieu: ['kể tên ba loại hạt trong nguyên tử và điện tích của chúng;', 'suy ra số electron từ số proton;', 'tính khối lượng nguyên tử theo amu;', 'xếp electron vào các lớp và tìm số electron lớp ngoài cùng.'],
      khoiDong: { hoi: 'Nguyên tử có chứa hạt mang điện dương và hạt mang điện âm. Vậy vì sao một mẩu sắt bình thường lại không hút hay đẩy mẩu giấy nhỏ?', goiY: 'Vì trong mỗi nguyên tử, tổng điện tích dương bằng tổng điện tích âm: nguyên tử trung hòa về điện.' },
      trongTam: [
        'Nguyên tử gồm <b>hạt nhân</b> ở giữa và <b>vỏ nguyên tử</b> gồm các electron chuyển động xung quanh.',
        'Hạt nhân chứa <b>proton</b> (p, điện tích +1) và <b>neutron</b> (n, không mang điện). Vỏ có <b>electron</b> (e, điện tích −1).',
        'Nguyên tử trung hòa về điện: <b>số p = số e</b>.',
        'Khối lượng: proton ≈ neutron ≈ 1 amu; electron ≈ 0,00055 amu (rất nhỏ). Vì vậy <b>khối lượng nguyên tử ≈ số p + số n</b> (amu).',
        'Electron xếp theo lớp từ trong ra ngoài: lớp 1 tối đa <b>2</b> e, lớp 2 tối đa <b>8</b> e; trong các bài ở đây (số proton đến 18), lớp 3 chứa tối đa 8 e.'
      ],
      viDu: { de: 'Nguyên tử fluorine có 9 proton và 10 neutron. Tìm số electron, khối lượng nguyên tử và số electron ở từng lớp.', loiGiai: 'Số e = số p = <b>9</b>.<br>Khối lượng ≈ 9 + 10 = <b>19 amu</b>.<br>Xếp electron: lớp 1 có 2 e, lớp 2 có 9 − 2 = 7 e → <b>2, 7</b>. Lớp ngoài cùng có 7 electron.' },
      nguon: tuSoan(SGK_KHTN7 + ' — bài về Nguyên tử: mô hình nguyên tử, khối lượng nguyên tử (amu), sự sắp xếp electron.'),
      hoiDap: [
        { tu: ['proton', 'neutron', 'electron', 'hat', 'nguyen tu la gi', 'nguyen tu'], tl: 'Proton (+1) và neutron (không mang điện) ở hạt nhân; electron (−1) ở vỏ. Số proton = số electron.' },
        { tu: ['khoi luong', 'amu'], tl: 'Khối lượng nguyên tử ≈ số proton + số neutron (amu). Electron nhẹ quá nên bỏ qua.' },
        { tu: ['lop', 'sap xep', 'ngoai cung'], tl: 'Lớp 1 tối đa 2 e, lớp 2 tối đa 8 e, xếp từ trong ra ngoài. Lớp ngoài cùng là lớp cuối cùng có electron.' }
      ]
    },
    cauHoi: [
      {
        id: 'HH7-01', muc: 'co-ban', liDoMuc: 'Nhận biết điện tích của các hạt.', loai: 'chon1', de: 'Hạt nào trong nguyên tử mang điện tích <b>dương</b>?',
        phuongAn: [{ t: 'Proton', dung: true }, { t: 'Neutron', phanHoi: 'Neutron không mang điện (trung hòa) — tên của nó gợi chữ "neutral".' }, { t: 'Electron', phanHoi: 'Electron mang điện tích âm.' }, { t: 'Cả proton và electron', phanHoi: 'Electron mang điện âm, nên không thể chọn ý này.' }],
        goiY: ['Hạt nằm trong hạt nhân và mang điện là hạt nào?'], viSaoDung: 'Proton mang điện tích +1, nằm trong hạt nhân.', loiGiai: '<b>Proton</b> (+1).',
        giangLai: 'Mẹo nhớ: Proton – "P" như Plus (+); Electron – vỏ ngoài, âm (−); Neutron – Neutral, không mang điện.', tienBo: 'Em đã phân biệt đúng điện tích ba loại hạt.',
        nguon: tuSoan(SGK_KHTN7 + ' — cấu tạo nguyên tử, điện tích các hạt.'), kiemTra: kt(),
        tuongTu: { id: 'HH7-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Hạt nào trong nguyên tử <b>không mang điện</b>?', phuongAn: [{ t: 'Proton', phanHoi: 'Proton mang điện dương.' }, { t: 'Neutron', dung: true }, { t: 'Electron', phanHoi: 'Electron mang điện âm.' }, { t: 'Hạt nhân', phanHoi: 'Hạt nhân chứa proton nên mang điện dương.' }], goiY: ['Neutral = trung hòa.'], viSaoDung: 'Neutron không mang điện.', loiGiai: '<b>Neutron</b>.', giangLai: 'Neutron ↔ neutral.', nguon: tuSoan(SGK_KHTN7 + ' — điện tích các hạt.'), kiemTra: kt() }
      },
      {
        id: 'HH7-02', muc: 'co-ban', liDoMuc: 'Áp dụng trực tiếp số p = số e.', loai: 'so', de: 'Nguyên tử oxygen có <b>8 proton</b> và 8 neutron. Nguyên tử oxygen có bao nhiêu electron?', donVi: 'electron', dapAn: 8,
        loi: [{ gt: 16, nhan: 'Nhầm đại lượng', phanHoi: '16 là số proton + neutron (liên quan đến khối lượng). Số electron chỉ bằng số proton.' }, { gt: 0, nhan: 'Nhầm khái niệm', phanHoi: 'Nguyên tử nào cũng có electron ở vỏ.' }],
        goiY: ['Nguyên tử trung hòa về điện, vậy số hạt (+) và số hạt (−) quan hệ thế nào?'], viSaoDung: 'Nguyên tử trung hòa về điện nên số e = số p = 8.', loiGiai: 'Số e = số p = <b>8</b>.',
        giangLai: 'Mỗi proton (+1) cần đúng một electron (−1) để "cân" điện tích. Có 8 proton → cần 8 electron. Neutron không mang điện nên không ảnh hưởng.', tienBo: 'Em đã dùng đúng quy tắc số proton = số electron, không để số neutron làm nhiễu.',
        nguon: tuSoan(SGK_KHTN7 + ' — nguyên tử trung hòa về điện.'), kiemTra: kt(),
        tuongTu: { id: 'HH7-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Nguyên tử sodium có <b>11 proton</b> và 12 neutron. Có bao nhiêu electron?', donVi: 'electron', dapAn: 11, loi: [{ gt: 23, nhan: 'Nhầm đại lượng', phanHoi: '23 là p + n. Số e = số p.' }, { gt: 12, nhan: 'Nhầm đại lượng', phanHoi: '12 là số neutron. Số e = số p.' }], goiY: ['Số e = số p.'], viSaoDung: 'Số e = 11.', loiGiai: '<b>11</b>.', giangLai: 'Mỗi proton ghép với một electron.', nguon: tuSoan(SGK_KHTN7 + ' — nguyên tử trung hòa về điện.'), kiemTra: kt() }
      },
      {
        id: 'HH7-03', muc: 'van-dung', liDoMuc: 'Kết hợp hai ý: khối lượng tập trung ở hạt nhân + bỏ qua khối lượng electron.', loai: 'so',
        de: 'Nguyên tử aluminium có <b>13 proton</b> và <b>14 neutron</b>. Khối lượng nguyên tử aluminium xấp xỉ bao nhiêu amu?', donVi: 'amu', dapAn: 27,
        loi: [{ gt: 40, nhan: 'Nhầm khái niệm', phanHoi: 'Em đã cộng cả 13 electron. Electron rất nhẹ (≈ 0,00055 amu) nên khi tính gần đúng ta bỏ qua.' }, { gt: 13, nhan: 'Thiếu dữ kiện', phanHoi: 'Em mới tính proton. Neutron cũng nặng ≈ 1 amu.' }, { gt: 26, nhan: 'Nhầm khái niệm', phanHoi: 'Em đã lấy 2 × 13 (p + e?). Hãy dùng p + n.' }],
        buoc: { hoi: 'Mỗi proton và mỗi neutron nặng khoảng bao nhiêu amu?', dapAn: 1, saiSo: 0.01, dung: 'Đúng, ≈ 1 amu. Vậy 13 proton và 14 neutron nặng khoảng bao nhiêu?', sai: 'Mỗi hạt proton, neutron ≈ 1 amu.' },
        goiY: ['Hạt nào đóng góp gần như toàn bộ khối lượng?', 'Khối lượng ≈ số p + số n.'], viSaoDung: '13 + 14 = 27 amu; electron nhẹ nên bỏ qua.', loiGiai: 'Khối lượng ≈ 13 + 14 = <b>27 amu</b>.',
        giangLai: 'Hãy hình dung: proton và neutron như những quả bóng bowling, electron như hạt cát. Cân cả túi thì gần như chỉ còn tính bóng bowling: 13 + 14 = 27.', tienBo: 'Em đã nhớ rằng khối lượng electron rất nhỏ và chỉ cộng proton với neutron.',
        nguon: tuSoan(SGK_KHTN7 + ' — khối lượng nguyên tử, đơn vị amu.'), kiemTra: kt(),
        tuongTu: { id: 'HH7-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Nguyên tử magnesium có <b>12 proton</b> và <b>12 neutron</b>. Khối lượng nguyên tử xấp xỉ bao nhiêu amu?', donVi: 'amu', dapAn: 24, loi: [{ gt: 36, nhan: 'Nhầm khái niệm', phanHoi: 'Em đã cộng cả electron. Bỏ qua electron.' }, { gt: 12, nhan: 'Thiếu dữ kiện', phanHoi: 'Cộng cả neutron.' }], goiY: ['p + n.'], viSaoDung: '12 + 12 = 24 amu.', loiGiai: '<b>24 amu</b>.', giangLai: 'Chỉ cộng các "quả bóng bowling".', nguon: tuSoan(SGK_KHTN7 + ' — khối lượng nguyên tử.'), kiemTra: kt() }
      },
      {
        id: 'HH7-04', muc: 'van-dung', liDoMuc: 'Hai bước: suy số electron rồi xếp vào lớp theo quy tắc.', loai: 'so',
        de: 'Nguyên tử nitrogen có <b>7 proton</b>. Lớp electron <b>ngoài cùng</b> của nitrogen có bao nhiêu electron?', donVi: 'electron', dapAn: 5,
        loi: [{ gt: 7, nhan: 'Nhầm đại lượng', phanHoi: '7 là tổng số electron. Hãy xếp chúng vào các lớp trước.' }, { gt: 2, nhan: 'Nhầm lớp', phanHoi: '2 là số electron ở lớp thứ nhất (lớp trong cùng). Đề hỏi lớp ngoài cùng.' }, { gt: 8, nhan: 'Nhầm quy tắc', phanHoi: '8 là số electron tối đa của lớp 2, nhưng nitrogen chỉ có 7 electron.' }],
        buoc: { hoi: 'Lớp thứ nhất chứa tối đa bao nhiêu electron?', dapAn: 2, dung: 'Đúng. Vậy sau lớp 1 còn lại 7 − 2 = ? electron cho lớp 2.', sai: 'Lớp 1 tối đa 2 electron.' },
        goiY: ['Nitrogen có bao nhiêu electron?', 'Lớp 1 nhận tối đa 2 e, phần còn lại sang lớp 2.'], viSaoDung: '7 e xếp thành 2, 5 → lớp ngoài cùng có 5 electron.', loiGiai: 'Số e = 7. Lớp 1: 2 e; lớp 2: 7 − 2 = 5 e.<br>Lớp ngoài cùng có <b>5 electron</b>.',
        giangLai: 'Giống xếp khách vào các hàng ghế: hàng đầu chỉ có 2 ghế, hàng thứ hai có 8 ghế. 7 bạn: 2 bạn ngồi hàng đầu, 5 bạn ngồi hàng hai. Hàng ngoài cùng có 5 bạn.', tienBo: 'Em đã xếp electron theo từng lớp thay vì chỉ đếm tổng.',
        nguon: tuSoan(SGK_KHTN7 + ' — sự sắp xếp electron trong các lớp (mô hình nguyên tử Rutherford – Bohr).'), kiemTra: kt(),
        tuongTu: { id: 'HH7-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc, thêm lớp thứ ba.', loai: 'so', de: 'Nguyên tử sulfur có <b>16 proton</b>. Lớp electron ngoài cùng có bao nhiêu electron?', donVi: 'electron', dapAn: 6, loi: [{ gt: 16, nhan: 'Nhầm đại lượng', phanHoi: '16 là tổng số electron.' }, { gt: 8, nhan: 'Nhầm lớp', phanHoi: '8 là số e ở lớp 2. Còn lớp 3.' }, { gt: 2, nhan: 'Nhầm lớp', phanHoi: '2 là lớp trong cùng.' }], buoc: { hoi: 'Sau khi lớp 1 và lớp 2 đã đầy, còn lại bao nhiêu electron?', dapAn: 6, dung: 'Đúng: 16 − 2 − 8 = 6.', sai: '16 − 2 − 8 = ?' }, goiY: ['2, 8, rồi phần còn lại.'], viSaoDung: '16 = 2 + 8 + 6.', loiGiai: 'Xếp 2, 8, 6 → <b>6</b>.', giangLai: 'Hàng 1: 2 ghế, hàng 2: 8 ghế, còn lại ngồi hàng 3.', nguon: tuSoan(SGK_KHTN7 + ' — sắp xếp electron.'), kiemTra: kt() }
      },
      {
        id: 'HH7-05', muc: 'nang-cao', liDoMuc: 'Phát hiện sai lầm trong lời giải của người khác, cần hiểu cả hai quy tắc.', loai: 'chonNhieu',
        de: 'Bạn Nam viết: <i>"Nguyên tử carbon có 6 proton, 6 neutron và 12 electron, nên khối lượng nguyên tử carbon khoảng 24 amu."</i><br><b>Chọn TẤT CẢ các nhận xét đúng</b> về lời giải của Nam.',
        phuongAn: [{ t: 'Số electron phải là 6, vì bằng số proton.', dung: true }, { t: 'Khối lượng nguyên tử carbon phải khoảng 12 amu (6 + 6), không tính electron.', dung: true }, { t: 'Mọi nguyên tử đều có số neutron bằng số proton.', phanHoi: 'Không đúng: ví dụ aluminium có 13 p nhưng 14 n.' }, { t: 'Nguyên tử carbon mang điện dương vì có proton.', phanHoi: 'Nguyên tử trung hòa về điện vì số p = số e.' }],
        goiY: ['Kiểm tra từng con số của Nam bằng hai quy tắc: p = e; khối lượng ≈ p + n.'], viSaoDung: 'Nam sai ở số electron (phải là 6) và ở khối lượng (phải ≈ 12 amu).',
        loiGiai: 'Ý 1 và 2 đúng. Nam đã viết số electron = 12 (sai) và cộng 6 + 6 + 12 = 24 (sai hai lần: sai số e và cộng khối lượng electron).', giangLai: 'Khi chấm bài của bạn, em kiểm tra lần lượt từng số: số e có bằng số p không? Khối lượng có bằng p + n không?', tienBo: 'Em đã soát lỗi trong lời giải của người khác — đó là cách học rất hiệu quả.',
        nguon: tuSoan(SGK_KHTN7 + ' — nguyên tử trung hòa về điện; khối lượng nguyên tử.'), kiemTra: kt(),
        tuongTu: { id: 'HH7-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: 'Bạn Hoa viết: <i>"Nguyên tử sodium có 11 proton, 12 neutron và 12 electron; khối lượng khoảng 35 amu."</i> <b>Chọn TẤT CẢ các nhận xét đúng</b>.', phuongAn: [{ t: 'Số electron phải là 11.', dung: true }, { t: 'Khối lượng phải khoảng 23 amu.', dung: true }, { t: 'Số neutron phải là 11.', phanHoi: 'Số neutron không nhất thiết bằng số proton.' }, { t: 'Vì trung hòa điện nên số proton = số neutron.', phanHoi: 'Trung hòa điện nghĩa là p = e.' }], goiY: ['p = e; khối lượng ≈ p + n.'], viSaoDung: 'e = 11; 11 + 12 = 23 amu.', loiGiai: 'Ý 1, 2 đúng.', giangLai: 'Soát từng con số.', nguon: tuSoan(SGK_KHTN7 + ' — nguyên tử.'), kiemTra: kt() }
      },
      {
        id: 'HH7-06', muc: 'nang-cao', liDoMuc: 'Suy luận nhiều bước từ tổng và hiệu số hạt.', loai: 'so',
        de: 'Nguyên tử X có tổng số hạt proton, neutron và electron là <b>40</b>. Trong đó, số hạt mang điện nhiều hơn số hạt không mang điện là <b>12</b>. Tìm số proton của X.', donVi: 'proton', dapAn: 13,
        loi: [{ gt: 26, nhan: 'Thiếu một bước', phanHoi: '26 là tổng số hạt mang điện (p + e). Vì p = e, hãy chia đôi.' }, { gt: 14, nhan: 'Nhầm đại lượng', phanHoi: '14 là số neutron (hạt không mang điện). Đề hỏi số proton.' }, { gt: 20, nhan: 'Nhầm cách tính', phanHoi: 'Em đã lấy 40 : 2. Hãy tìm số hạt mang điện trước: (40 + 12) : 2.' }],
        buoc: { hoi: 'Số hạt mang điện (proton + electron) là bao nhiêu?', dapAn: 26, dung: 'Đúng: (40 + 12) : 2 = 26. Vì p = e nên p = ?', sai: 'Tổng và hiệu: số lớn = (tổng + hiệu) : 2 = (40 + 12) : 2.' },
        goiY: ['Hạt mang điện: p và e. Hạt không mang điện: n.', 'Dùng bài toán tổng – hiệu: số hạt mang điện = (40 + 12) : 2.', 'Vì p = e nên chia đôi số hạt mang điện.'],
        viSaoDung: 'Hạt mang điện = (40 + 12) : 2 = 26; p = e = 13; n = 14. Kiểm tra: 13 + 13 + 14 = 40 và 26 − 14 = 12.',
        loiGiai: 'Số hạt mang điện (p + e) = (40 + 12) : 2 = 26; số neutron = 40 − 26 = 14.<br>Vì p = e nên p = 26 : 2 = <b>13</b>.<br>Kiểm tra: 13 + 13 + 14 = 40 ✓; 26 − 14 = 12 ✓.',
        giangLai: 'Ví dụ dễ hơn: Lớp có 10 bạn, số bạn nữ hơn số bạn nam 2. Nữ = (10 + 2) : 2 = 6. Ở bài này "nữ" là hạt mang điện, "nam" là neutron. Sau đó nhớ chia đôi vì hạt mang điện gồm cả p và e bằng nhau.',
        tienBo: 'Em đã dùng bài toán tổng – hiệu và nhớ chia đôi vì p = e.', nguon: tuSoan(SGK_KHTN7 + ' — cấu tạo nguyên tử; dạng bài tổng số hạt (cần kiểm tra dạng bài này có trong SGK/SBT lớp 7 không).'), kiemTra: kt(),
        tuongTu: { id: 'HH7-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Nguyên tử Y có tổng số hạt là <b>34</b>; số hạt mang điện nhiều hơn số hạt không mang điện là <b>10</b>. Tìm số proton của Y.', donVi: 'proton', dapAn: 11, loi: [{ gt: 22, nhan: 'Thiếu một bước', phanHoi: '22 là p + e. Chia đôi.' }, { gt: 12, nhan: 'Nhầm đại lượng', phanHoi: '12 là số neutron.' }, { gt: 17, nhan: 'Nhầm cách tính', phanHoi: 'Đừng lấy 34 : 2. Tính (34 + 10) : 2 trước.' }], buoc: { hoi: 'Số hạt mang điện là bao nhiêu?', dapAn: 22, dung: 'Đúng: (34 + 10) : 2 = 22.', sai: '(34 + 10) : 2 = ?' }, goiY: ['(34 + 10) : 2 rồi chia đôi.'], viSaoDung: 'p + e = 22 → p = 11; n = 12; 11 + 11 + 12 = 34 ✓.', loiGiai: 'p = <b>11</b>.', giangLai: 'Tổng – hiệu rồi chia đôi.', nguon: tuSoan(SGK_KHTN7 + ' — cấu tạo nguyên tử.'), kiemTra: kt() }
      }
    ]
  };

  /* ------------------------------------------------------------------
     CHỦ ĐỀ 3 — SINH HỌC 7: QUANG HỢP Ở THỰC VẬT
     ------------------------------------------------------------------ */
  const sinhHoc = {
    id: 'sh7-quang-hop', lop: 7, mon: 'khtn', phanMon: 'Sinh học', ten: 'Quang hợp ở thực vật',
    kienThucTruoc: ['Cấu tạo tế bào thực vật (lục lạp)', 'Lá cây: phiến lá, gân lá, khí khổng', 'Năng lượng và các dạng năng lượng'],
    yeuCauCanDat: ['Nêu được khái niệm, nguyên liệu và sản phẩm của quang hợp.', 'Viết được phương trình quang hợp dạng chữ.', 'Nêu được vai trò của lá cây với chức năng quang hợp.', 'Vận dụng hiểu biết về quang hợp để giải thích hiện tượng, kết quả thí nghiệm.'],
    bai: {
      mucTieu: ['kể đúng nguyên liệu, sản phẩm và điều kiện của quang hợp;', 'viết phương trình quang hợp dạng chữ;', 'dự đoán điều gì xảy ra khi cây thiếu ánh sáng hay thiếu khí carbon dioxide;', 'đọc kết quả thí nghiệm và rút ra kết luận có căn cứ.'],
      khoiDong: { hoi: 'Một hạt đậu nhỏ xíu lớn lên thành cây cao hàng mét. Chất tạo nên thân, lá của cây chủ yếu lấy từ đâu — từ đất, hay từ không khí và nước?', goiY: 'Phần lớn chất hữu cơ của cây được tạo ra nhờ quang hợp, từ khí carbon dioxide trong không khí và nước, nhờ năng lượng ánh sáng.' },
      trongTam: [
        '<b>Quang hợp</b> là quá trình lá cây sử dụng nước và khí carbon dioxide nhờ năng lượng ánh sáng được diệp lục hấp thụ để tổng hợp chất hữu cơ và giải phóng khí oxygen.',
        'Phương trình chữ: <span class="ct">Nước + Carbon dioxide <span class="arrow">→<small>ánh sáng, diệp lục</small></span> Glucose + Oxygen</span>',
        '<b>Lục lạp</b> trong tế bào lá chứa <b>diệp lục</b>, hấp thụ năng lượng ánh sáng.',
        '<b>Khí khổng</b> là nơi khí carbon dioxide đi vào và khí oxygen đi ra. Nước được rễ hút và vận chuyển lên lá.',
        'Năng lượng: quang năng (ánh sáng) được chuyển thành hóa năng tích lũy trong chất hữu cơ.'
      ],
      viDu: { de: 'Vì sao cây trồng lâu ngày trong bóng râm thường còi cọc, lá nhạt màu?', loiGiai: 'Thiếu ánh sáng → diệp lục hấp thụ được ít năng lượng → quang hợp yếu → cây tạo ra ít chất hữu cơ để lớn lên. Vì vậy cây chậm lớn, còi cọc.' },
      nguon: tuSoan(SGK_KHTN7 + ' — bài về Quang hợp ở thực vật (khái niệm, phương trình chữ, vai trò của lá). Lưu ý: các tài liệu thứ cấp tìm được ghi số bài không thống nhất, cần mở SGK để xác định.'),
      hoiDap: [
        { tu: ['nguyen lieu'], tl: 'Nguyên liệu của quang hợp: nước và khí carbon dioxide.' },
        { tu: ['san pham'], tl: 'Sản phẩm của quang hợp: glucose (chất hữu cơ) và khí oxygen.' },
        { tu: ['dieu kien', 'anh sang', 'diep luc', 'quang hop la gi', 'quang hop'], tl: 'Quang hợp cần ánh sáng và diệp lục (có trong lục lạp của tế bào lá).' },
        { tu: ['phuong trinh'], tl: 'Nước + Carbon dioxide → Glucose + Oxygen (điều kiện: ánh sáng, diệp lục).' }
      ]
    },
    cauHoi: [
      {
        id: 'SH7-01', muc: 'co-ban', liDoMuc: 'Nhận biết nguyên liệu của quang hợp.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các chất là <b>nguyên liệu</b> của quá trình quang hợp.',
        phuongAn: [{ t: 'Nước', dung: true }, { t: 'Khí carbon dioxide', dung: true }, { t: 'Khí oxygen', phanHoi: 'Oxygen là sản phẩm được thải ra, không phải nguyên liệu.' }, { t: 'Glucose', phanHoi: 'Glucose là chất hữu cơ được tạo ra — sản phẩm.' }],
        goiY: ['Nguyên liệu nằm ở vế trái của phương trình chữ.'], viSaoDung: 'Nước và carbon dioxide ở vế trái phương trình: Nước + Carbon dioxide → Glucose + Oxygen.', loiGiai: '<b>Nước</b> và <b>khí carbon dioxide</b>.',
        giangLai: 'Giống nấu cơm: gạo và nước là nguyên liệu (cho vào), cơm là sản phẩm (lấy ra). Trong quang hợp, lá "cho vào" nước và carbon dioxide, "lấy ra" glucose và oxygen.', tienBo: 'Em đã tách đúng nguyên liệu với sản phẩm.',
        nguon: tuSoan(SGK_KHTN7 + ' — nguyên liệu và sản phẩm của quang hợp.'), kiemTra: kt(),
        tuongTu: { id: 'SH7-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các chất là <b>sản phẩm</b> của quang hợp.', phuongAn: [{ t: 'Glucose', dung: true }, { t: 'Khí oxygen', dung: true }, { t: 'Nước', phanHoi: 'Nước là nguyên liệu.' }, { t: 'Khí carbon dioxide', phanHoi: 'Carbon dioxide là nguyên liệu.' }], goiY: ['Vế phải của phương trình.'], viSaoDung: 'Glucose và oxygen.', loiGiai: '<b>Glucose, oxygen</b>.', giangLai: 'Sản phẩm = "lấy ra".', nguon: tuSoan(SGK_KHTN7 + ' — sản phẩm của quang hợp.'), kiemTra: kt() }
      },
      {
        id: 'SH7-02', muc: 'co-ban', liDoMuc: 'Nhận biết bào quan thực hiện quang hợp.', loai: 'chon1', de: 'Trong tế bào lá, quang hợp diễn ra ở bào quan nào?',
        phuongAn: [{ t: 'Lục lạp', dung: true }, { t: 'Nhân tế bào', phanHoi: 'Nhân điều khiển hoạt động sống, không chứa diệp lục.' }, { t: 'Không bào', phanHoi: 'Không bào chứa dịch tế bào.' }, { t: 'Thành tế bào', phanHoi: 'Thành tế bào giúp tế bào có hình dạng ổn định.' }],
        goiY: ['Bào quan nào chứa sắc tố màu xanh lục?'], viSaoDung: 'Lục lạp chứa diệp lục hấp thụ ánh sáng.', loiGiai: '<b>Lục lạp</b>.', giangLai: 'Tên gọi đã gợi ý: "lục" là màu xanh lục — lục lạp chứa diệp lục màu xanh.', tienBo: 'Em đã nhớ được nơi diễn ra quang hợp.',
        nguon: tuSoan(SGK_KHTN7 + ' — vai trò của lá và lục lạp trong quang hợp (đối chiếu thêm SGK KHTN 6 – tế bào thực vật).'), kiemTra: kt(),
        tuongTu: { id: 'SH7-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Chất nào trong lá hấp thụ năng lượng ánh sáng để quang hợp?', phuongAn: [{ t: 'Diệp lục', dung: true }, { t: 'Glucose', phanHoi: 'Glucose là sản phẩm.' }, { t: 'Tinh bột', phanHoi: 'Tinh bột là chất dự trữ.' }, { t: 'Nước', phanHoi: 'Nước là nguyên liệu.' }], goiY: ['Sắc tố xanh lục.'], viSaoDung: 'Diệp lục hấp thụ ánh sáng.', loiGiai: '<b>Diệp lục</b>.', giangLai: 'Diệp lục như tấm pin mặt trời của lá.', nguon: tuSoan(SGK_KHTN7 + ' — diệp lục.'), kiemTra: kt() }
      },
      {
        id: 'SH7-03', muc: 'van-dung', liDoMuc: 'Dự đoán kết quả khi thiếu một điều kiện, cần nối kiến thức với tình huống.', loai: 'chon1',
        de: 'Một chậu cây được đặt trong phòng <b>tối hoàn toàn</b> 3 ngày, vẫn được tưới đủ nước. Dự đoán lượng tinh bột trong lá sẽ thế nào?',
        phuongAn: [{ t: 'Tăng lên vì cây vẫn có đủ nước.', phanHoi: 'Nước chỉ là một nguyên liệu. Thiếu ánh sáng thì quang hợp không diễn ra.' }, { t: 'Giảm đi vì không có ánh sáng nên lá không quang hợp tạo chất mới, trong khi chất đã có vẫn bị cây sử dụng.', dung: true }, { t: 'Không thay đổi vì cây đang nghỉ.', phanHoi: 'Cây vẫn sống và vẫn sử dụng chất hữu cơ (hô hấp) cả ngày lẫn đêm.' }, { t: 'Tăng lên vì trong tối cây giữ lại được nhiều nước.', phanHoi: 'Giữ nước không tạo ra tinh bột; tinh bột được tạo từ sản phẩm quang hợp.' }],
        goiY: ['Điều kiện nào của quang hợp đã bị lấy đi?', 'Cây có ngừng sử dụng chất hữu cơ khi ở trong tối không?'], viSaoDung: 'Không có ánh sáng → không quang hợp → không tạo thêm chất hữu cơ; lượng đã có vẫn bị dùng dần.', loiGiai: 'Đáp án: <b>Giảm đi</b>. Thiếu ánh sáng nên không quang hợp; cây vẫn dùng tinh bột dự trữ.',
        giangLai: 'Giống một chiếc ví: quang hợp là "thu nhập", hoạt động sống là "chi tiêu". Ở trong tối, thu nhập bằng 0 nhưng vẫn phải chi, nên tiền trong ví (tinh bột) giảm.', tienBo: 'Em đã dự đoán dựa trên điều kiện ánh sáng của quang hợp.',
        nguon: tuSoan(SGK_KHTN7 + ' — điều kiện ánh sáng của quang hợp; liên hệ quang hợp và sử dụng chất hữu cơ.'), kiemTra: kt(),
        tuongTu: { id: 'SH7-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Nếu bôi kín <b>cả hai mặt</b> một chiếc lá bằng lớp sáp (vaseline) để khí không đi qua khí khổng, rồi chiếu sáng, lá đó sẽ thế nào?', phuongAn: [{ t: 'Tạo nhiều tinh bột hơn vì giữ được nước.', phanHoi: 'Thiếu carbon dioxide thì không tạo được chất hữu cơ.' }, { t: 'Hầu như không tạo thêm tinh bột vì khí carbon dioxide khó đi vào lá.', dung: true }, { t: 'Tạo tinh bột bình thường vì vẫn có ánh sáng.', phanHoi: 'Ánh sáng là cần nhưng chưa đủ; còn thiếu carbon dioxide.' }, { t: 'Thải ra nhiều oxygen hơn.', phanHoi: 'Không quang hợp được thì không thải thêm oxygen.' }], goiY: ['Khí nào đi vào lá qua khí khổng?'], viSaoDung: 'Thiếu carbon dioxide → không quang hợp.', loiGiai: '<b>Hầu như không tạo thêm tinh bột</b>.', giangLai: 'Khí khổng là "cửa" để CO₂ vào.', nguon: tuSoan(SGK_KHTN7 + ' — vai trò của khí khổng trong quang hợp.'), kiemTra: kt() }
      },
      {
        id: 'SH7-04', muc: 'van-dung', liDoMuc: 'Tự nhớ lại và viết đúng thành phần phương trình, không có phương án gợi sẵn.', loai: 'chu', boDau: true,
        de: 'Điền chất còn thiếu vào phương trình quang hợp:<br><span class="ct">Nước + <b>______</b> <span class="arrow">→<small>ánh sáng, diệp lục</small></span> Glucose + Oxygen</span>',
        chapNhan: ['carbon dioxide', 'khí carbon dioxide', 'carbon dioxit', 'khí carbon dioxit', 'co2', 'khí co2', 'cacbon dioxide', 'cacbon dioxit', 'cacbon đioxit', 'khí cacbon dioxit', 'khí cacbonic', 'cacbonic', 'carbonic', 'khí carbonic'],
        loi: [{ mau: '^(khi )?(oxygen|oxi|oxy|o2)$', danhDau: '*', nhan: 'Nhầm nguyên liệu – sản phẩm', phanHoi: 'Oxygen đã có ở vế phải (sản phẩm). Chất còn thiếu là một <b>khí</b> mà lá lấy từ không khí.' }, { mau: '^(nuoc|h2o)$', danhDau: '*', nhan: 'Trùng chất', phanHoi: 'Nước đã có trong phương trình rồi. Hãy nghĩ đến khí lá lấy vào qua khí khổng.' }, { mau: 'nito|nitrogen', danhDau: '*', nhan: 'Nhầm chất', phanHoi: 'Nitrogen không tham gia quang hợp. Khí cần là khí cây "hít" vào khi quang hợp.' }],
        goiY: ['Đó là một khí trong không khí.', 'Con người thở ra khí này, còn cây dùng nó để quang hợp.'], viSaoDung: 'Nguyên liệu của quang hợp là nước và khí carbon dioxide.', loiGiai: 'Nước + <b>Carbon dioxide</b> → Glucose + Oxygen.',
        giangLai: 'Cây và người "trao đổi" khí với nhau: người hít oxygen, thở ra carbon dioxide; lá cây khi quang hợp lấy vào carbon dioxide, thải ra oxygen.', tienBo: 'Em đã viết đúng phương trình quang hợp mà không cần nhìn phương án.',
        nguon: tuSoan(SGK_KHTN7 + ' — phương trình quang hợp dạng chữ (cần đối chiếu cách viết tên chất trong SGK: "carbon dioxide").'), kiemTra: kt('Nhóm biên soạn kiểm tra danh sách cách viết được chấp nhận; chạy kiểm thử tự động ngày ' + NGAY_SOAN + '.'),
        tuongTu: { id: 'SH7-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', boDau: true, de: 'Điền chất còn thiếu:<br><span class="ct">Nước + Carbon dioxide <span class="arrow">→<small>ánh sáng, diệp lục</small></span> <b>______</b> + Oxygen</span>', chapNhan: ['glucose', 'đường glucose', 'chất hữu cơ', 'chất hữu cơ glucose', 'glucozo', 'glucozơ'], loi: [{ mau: 'tinh bot', danhDau: '*', nhan: 'Gần đúng', phanHoi: 'Tinh bột được tạo thành từ glucose. Trong phương trình, sản phẩm được ghi là glucose (chất hữu cơ).' }, { mau: '^(khi )?(oxygen|oxi|oxy|o2)$', danhDau: '*', nhan: 'Trùng chất', phanHoi: 'Oxygen đã có ở vế phải.' }], goiY: ['Một chất hữu cơ có vị ngọt.'], viSaoDung: 'Sản phẩm là glucose và oxygen.', loiGiai: '<b>Glucose</b>.', giangLai: 'Glucose là "đường" do lá tạo ra.', nguon: tuSoan(SGK_KHTN7 + ' — phương trình quang hợp.'), kiemTra: kt() }
      },
      {
        id: 'SH7-05', muc: 'nang-cao', liDoMuc: 'Đọc kết quả thí nghiệm, phân biệt kết luận có căn cứ với kết luận không suy ra được.', loai: 'chonNhieu',
        de: 'Thí nghiệm: Để một chậu cây trong tối 2 ngày. Dùng băng giấy đen che kín một phần lá (cả hai mặt). Đặt cây ngoài nắng 6 giờ, ngắt lá, tẩy màu xanh rồi nhỏ dung dịch iodine (iodine làm tinh bột chuyển xanh tím). <b>Chọn TẤT CẢ các kết luận được thí nghiệm ủng hộ</b>.',
        bang: { tieuDe: ['Phần lá', 'Màu sau khi nhỏ iodine'], dong: [['Không bị che', 'Xanh tím'], ['Bị che bằng giấy đen', 'Không xanh tím (màu vàng nâu của iodine)']], ghiChu: 'Kết quả mô phỏng dùng cho bài tập (dựa trên thí nghiệm phổ biến, chưa đối chiếu SGK)' },
        phuongAn: [{ t: 'Phần lá được chiếu sáng đã tạo ra tinh bột.', dung: true }, { t: 'Lá cần ánh sáng để tạo tinh bột.', dung: true }, { t: 'Thí nghiệm chứng minh quang hợp thải ra khí oxygen.', phanHoi: 'Thí nghiệm này chỉ thử tinh bột, không đo khí oxygen. Kết luận đúng về kiến thức nhưng không được dữ liệu này ủng hộ.' }, { t: 'Để cây trong tối 2 ngày trước thí nghiệm nhằm làm hết tinh bột có sẵn trong lá.', dung: true }],
        goiY: ['Hai phần lá khác nhau ở điều kiện nào? Kết quả khác nhau ra sao?', 'Một kết luận "được dữ liệu ủng hộ" phải suy ra từ chính kết quả đo trong thí nghiệm.'],
        viSaoDung: 'Chỉ khác nhau ở ánh sáng → chỉ phần được chiếu sáng có tinh bột → ánh sáng cần cho tạo tinh bột. Bước để trong tối giúp loại bỏ tinh bột cũ.',
        loiGiai: 'Ý 1, 2, 4 đúng. Ý 3 tuy đúng về kiến thức nhưng thí nghiệm không đo oxygen nên không chứng minh được điều đó.', giangLai: 'Hãy hỏi: "Ta đã đo cái gì?" — ở đây là màu iodine (có tinh bột hay không). Kết luận nào nói về thứ không được đo (như oxygen) thì chưa được thí nghiệm này chứng minh.',
        tienBo: 'Em đã phân biệt "điều em biết" với "điều thí nghiệm chứng minh được".', nguon: tuSoan(SGK_KHTN7 + ' — thí nghiệm chứng minh tinh bột được tạo thành trong quang hợp (kiểm tra SGK có thí nghiệm này và cách mô tả).', { soLieu: 'Kết quả mô phỏng dùng cho bài tập' }), kiemTra: kt(),
        tuongTu: {
          id: 'SH7-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: 'Đặt một cành rong trong ống nghiệm nước, chiếu đèn ở các khoảng cách khác nhau và đếm số bọt khí thoát ra trong 5 phút. <b>Chọn TẤT CẢ các kết luận được dữ liệu ủng hộ</b>.',
          bang: { tieuDe: ['Khoảng cách đèn', 'Số bọt khí / 5 phút'], dong: [['10 cm', '30'], ['20 cm', '18'], ['40 cm', '7']], ghiChu: GIA_DINH },
          phuongAn: [{ t: 'Đèn càng gần (ánh sáng càng mạnh) thì số bọt khí càng nhiều.', dung: true }, { t: 'Có thể dùng số bọt khí để so sánh mức độ quang hợp ở các khoảng cách đèn.', dung: true }, { t: 'Nếu tắt đèn hoàn toàn, số bọt khí sẽ tăng lên.', phanHoi: 'Dữ liệu cho thấy ánh sáng yếu đi thì bọt khí giảm, nên tắt đèn không thể làm tăng.' }, { t: 'Nhiệt độ là yếu tố duy nhất làm thay đổi số bọt khí.', phanHoi: 'Thí nghiệm thay đổi khoảng cách đèn; không có dữ liệu cho thấy nhiệt độ là yếu tố duy nhất.' }],
          goiY: ['Đọc xu hướng của bảng.'], viSaoDung: 'Gần đèn → nhiều bọt → quang hợp mạnh hơn.', loiGiai: 'Ý 1, 2 đúng.', giangLai: 'Nhìn bảng: khoảng cách tăng thì số bọt giảm.', nguon: tuSoan(SGK_KHTN7 + ' — ảnh hưởng của ánh sáng đến quang hợp.', { soLieu: GIA_DINH }), kiemTra: kt()
        }
      },
      {
        id: 'SH7-06', muc: 'nang-cao', liDoMuc: 'Giải thích hiện tượng thực tiễn bằng lập luận nhiều ý; câu mở, đánh giá theo tiêu chí.', loai: 'mo',
        de: 'Dựa vào phương trình quang hợp, hãy giải thích <b>vì sao trồng nhiều cây xanh giúp không khí trong lành hơn</b>. Viết 3–5 câu.',
        tieuChi: [
          { t: 'Nêu được cây lấy khí carbon dioxide từ không khí.', tuDong: { tuKhoa: ['carbon dioxide', 'co2', 'cacbonic', 'carbonic', 'cacbon dioxide'] } },
          { t: 'Nêu được cây thải ra khí oxygen.', tuDong: { tuKhoa: ['oxygen', 'oxi', 'o2'] } },
          { t: 'Nêu điều kiện: quang hợp cần ánh sáng (và diệp lục).', tuDong: { tuKhoa: ['anh sang', 'diep luc'] } },
          { t: 'Có lập luận nối các ý (vì… nên…) và kết luận về không khí trong lành.' },
          { t: 'Viết 3–5 câu, rõ ràng.', tuDong: { soCau: [3, 5] } }
        ],
        baiThamKhao: 'Khi có ánh sáng, lá cây quang hợp: lấy khí carbon dioxide từ không khí và nước để tạo chất hữu cơ, đồng thời thải ra khí oxygen. Nhờ vậy, cây giúp giảm lượng carbon dioxide và bổ sung oxygen cho không khí. Ngoài ra, lá cây còn giữ lại một phần bụi. Vì thế, trồng nhiều cây xanh giúp không khí trong lành hơn.',
        goiY: ['Viết lại phương trình: cây lấy vào khí gì, thải ra khí gì?', 'Nối hai ý bằng "vì vậy" để ra kết luận về không khí.'],
        giupViet: '<b>Dàn ý gợi ý:</b><br>1) Khi có ánh sáng, cây quang hợp…<br>2) Cây lấy vào… và thải ra…<br>3) Vì vậy, không khí…<br><b>Từ nên dùng:</b> quang hợp, carbon dioxide, oxygen, ánh sáng, diệp lục, vì vậy.',
        viSaoDung: 'Bài viết đạt các tiêu chí đã nêu.', loiGiai: 'Xem bài tham khảo.', giangLai: 'Bắt đầu từ phương trình chữ, rồi trả lời: khí nào giảm, khí nào tăng trong không khí? Điều đó tốt cho con người thế nào?', tienBo: 'Em đã dùng kiến thức quang hợp để giải thích một vấn đề thực tế.',
        nguon: tuSoan(SGK_KHTN7 + ' — ý nghĩa của quang hợp đối với tự nhiên và con người.'), kiemTra: kt('Câu mở: nhóm biên soạn kiểm tra tiêu chí và bài tham khảo; máy chỉ kiểm tra sơ bộ theo từ khóa, học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'SH7-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Vào những ngày ít nắng, một số nhà kính trồng rau bật thêm đèn. Hãy giải thích việc làm này bằng kiến thức quang hợp. Viết 2–4 câu.', tieuChi: [{ t: 'Nêu quang hợp cần ánh sáng.', tuDong: { tuKhoa: ['anh sang'] } }, { t: 'Nêu cây tạo ra chất hữu cơ (glucose/tinh bột) nhờ quang hợp.', tuDong: { tuKhoa: ['chat huu co', 'glucose', 'tinh bot'] } }, { t: 'Kết luận: rau lớn nhanh, cho năng suất cao hơn.' }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Quang hợp cần ánh sáng. Ngày ít nắng, cây thiếu ánh sáng nên quang hợp yếu, tạo ít chất hữu cơ. Bật thêm đèn giúp rau quang hợp tốt hơn, lớn nhanh và cho năng suất cao hơn.', goiY: ['Thiếu ánh sáng thì quang hợp thế nào?'], giupViet: 'Dàn ý: Ánh sáng cần cho… → Ngày ít nắng… → Bật đèn giúp…', viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Đèn thay cho ánh nắng.', nguon: tuSoan(SGK_KHTN7 + ' — vai trò của ánh sáng đối với quang hợp.'), kiemTra: kt('Câu mở: kiểm tra sơ bộ theo từ khóa, học sinh tự đối chiếu tiêu chí.') }
      }
    ]
  };

  /* ------------------------------------------------------------------
     CHỦ ĐỀ 4 — TOÁN 7: SỐ HỮU TỈ
     ------------------------------------------------------------------ */
  const toan = {
    id: 'toan7-so-huu-ti', lop: 7, mon: 'toan', phanMon: 'Số và Đại số', ten: 'Số hữu tỉ',
    kienThucTruoc: ['Phân số và các phép tính với phân số (lớp 6)', 'Số nguyên âm, quy tắc dấu (lớp 6)', 'Số thập phân (lớp 6)'],
    yeuCauCanDat: ['Nhận biết được số hữu tỉ và lấy được ví dụ.', 'Biểu diễn được số hữu tỉ trên trục số; tìm được số đối.', 'So sánh được hai số hữu tỉ.', 'Thực hiện được các phép cộng, trừ, nhân, chia số hữu tỉ; vận dụng giải bài toán thực tế.'],
    bai: {
      mucTieu: ['nhận ra một số có phải số hữu tỉ hay không;', 'so sánh và sắp xếp các số hữu tỉ;', 'cộng, trừ, nhân, chia số hữu tỉ đúng thứ tự và đúng dấu;', 'giải bài toán thực tế có phân số "của" một lượng.'],
      khoiDong: { hoi: 'Buổi sáng ở một thị trấn vùng núi, nhiệt độ là −1,5 °C. Đến trưa, nhiệt độ tăng thêm 4' + F(1, 2) + ' °C. Buổi trưa nhiệt độ là bao nhiêu? (số liệu giả định)', goiY: '−1,5 + 4,5 = 3 (°C). Các số như −1,5 và 4' + F(1, 2) + ' đều là số hữu tỉ.' },
      trongTam: [
        '<b>Số hữu tỉ</b> là số viết được dưới dạng ' + F('a', 'b') + ' với a, b là số nguyên, b ≠ 0. Tập hợp số hữu tỉ kí hiệu là <b>ℚ</b>.',
        'Một số hữu tỉ có nhiều cách viết: −0,5 = ' + F('−1', '2') + ' = ' + F('−2', '4') + '. Số nguyên và số thập phân hữu hạn đều là số hữu tỉ.',
        '<b>So sánh:</b> đưa về cùng dạng (phân số cùng mẫu dương, hoặc số thập phân). Trên trục số, số bên trái nhỏ hơn; với hai số âm, số nào xa 0 hơn thì nhỏ hơn.',
        '<b>Cộng, trừ:</b> quy đồng mẫu dương rồi cộng/trừ tử. <b>Nhân:</b> tử × tử, mẫu × mẫu. <b>Chia:</b> nhân với số nghịch đảo.',
        '<b>Thứ tự:</b> nhân, chia trước; cộng, trừ sau. <b>Dấu ngoặc:</b> −(a + b) = −a − b, nên −a − b = −(a + b).'
      ],
      viDu: { de: 'Tính ' + F(3, 4) + ' − ' + F(5, 6) + '.', loiGiai: 'Quy đồng mẫu 12: ' + F(3, 4) + ' = ' + F(9, 12) + '; ' + F(5, 6) + ' = ' + F(10, 12) + '.<br>' + F(9, 12) + ' − ' + F(10, 12) + ' = <b>' + F('−1', 12) + '</b>.' },
      nguon: tuSoan(SGK_TOAN7 + ', tập một — chương về Số hữu tỉ (tập hợp số hữu tỉ; cộng, trừ, nhân, chia số hữu tỉ; thứ tự thực hiện phép tính).'),
      hoiDap: [
        { tu: ['so huu ti', 'la gi', 'dinh nghia'], tl: 'Số hữu tỉ là số viết được dạng a/b với a, b nguyên, b ≠ 0. Ví dụ: −3/4; 0,5; 7.' },
        { tu: ['quy dong', 'cong', 'tru'], tl: 'Cộng/trừ: quy đồng mẫu (dương), rồi cộng/trừ tử số, giữ nguyên mẫu. Không cộng mẫu với mẫu!' },
        { tu: ['so sanh', 'sap xep'], tl: 'Đưa về cùng dạng rồi so. Với số âm: số nào xa 0 hơn thì nhỏ hơn, ví dụ −0,75 < −0,7.' },
        { tu: ['thu tu', 'nhan truoc'], tl: 'Nhân, chia trước; cộng, trừ sau; có ngoặc thì làm trong ngoặc trước.' }
      ]
    },
    cauHoi: [
      {
        id: 'T7-01', muc: 'co-ban', liDoMuc: 'Nhận biết số hữu tỉ theo định nghĩa.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các số là <b>số hữu tỉ</b>.',
        phuongAn: [{ t: '−0,5', dung: true }, { t: F(3, 4), dung: true }, { t: '7', dung: true }, { t: F(5, 0), phanHoi: 'Mẫu số bằng 0 thì biểu thức không có nghĩa, nên không phải là số hữu tỉ.' }, { t: '−1' + F(1, 2), dung: true }],
        goiY: ['Thử viết từng số dưới dạng a/b với b ≠ 0.', '7 = 7/1; −0,5 = −1/2.'], viSaoDung: '−0,5 = −1/2; 3/4; 7 = 7/1; −1 1/2 = −3/2 đều viết được dạng a/b với b ≠ 0. Còn 5/0 có mẫu bằng 0.',
        loiGiai: 'Các số hữu tỉ: <b>−0,5; ' + F(3, 4) + '; 7; −1' + F(1, 2) + '</b>. ' + F(5, 0) + ' không có nghĩa.', giangLai: 'Phép thử nhanh: em có viết được số đó thành "phân số" với mẫu khác 0 không? Được → số hữu tỉ. Số nguyên 7 viết được thành 7/1 nên cũng là số hữu tỉ.',
        tienBo: 'Em đã nhận ra cả số nguyên và số thập phân cũng là số hữu tỉ.', nguon: tuSoan(SGK_TOAN7 + ', tập một — khái niệm số hữu tỉ.'), kiemTra: kt(),
        tuongTu: { id: 'T7-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các số là số hữu tỉ.', phuongAn: [{ t: '0', dung: true }, { t: F('−3', 7), dung: true }, { t: '1,25', dung: true }, { t: F(4, 0), phanHoi: 'Mẫu bằng 0 không có nghĩa.' }], goiY: ['0 = 0/1.'], viSaoDung: '0 = 0/1; −3/7; 1,25 = 5/4.', loiGiai: '<b>0; −3/7; 1,25</b>.', giangLai: 'Viết được dạng a/b, b ≠ 0.', nguon: tuSoan(SGK_TOAN7 + ', tập một — khái niệm số hữu tỉ.'), kiemTra: kt() }
      },
      {
        id: 'T7-02', muc: 'co-ban', liDoMuc: 'Một phép cộng trực tiếp sau khi quy đồng.', loai: 'so', choPhanSo: true,
        de: 'Tính: ' + F(1, 2) + ' + (' + F('−3', 4) + '). <span class="note">Có thể viết phân số (−1/4) hoặc số thập phân (−0,25).</span>', dapAn: '-1/4',
        loi: [
          { gt: '-1/3', nhan: 'Lỗi quy tắc cộng', phanHoi: 'Em đã cộng tử với tử, mẫu với mẫu: (1 − 3)/(2 + 4) = −2/6. Phải <b>quy đồng mẫu</b> trước rồi mới cộng tử.' },
          { gt: '5/4', nhan: 'Lỗi dấu', phanHoi: 'Em đã bỏ dấu "−" của ' + F('−3', 4) + '. Cộng với số âm cũng là trừ đi.' },
          { gt: '1/4', nhan: 'Lỗi dấu', phanHoi: 'Phần số đúng, nhưng dấu chưa đúng: 2/4 − 3/4 âm hay dương?' }
        ],
        buoc: { hoi: 'Khi quy đồng mẫu số 4, phân số ' + F(1, 2) + ' có tử số mới là bao nhiêu?', dapAn: 2, dung: 'Đúng: 1/2 = 2/4. Vậy 2/4 + (−3/4) = ?', sai: '1/2 = ?/4. Nhân cả tử và mẫu với 2.' },
        goiY: ['Mẫu chung của 2 và 4 là 4.', F(1, 2) + ' = ' + F(2, 4) + '. Bây giờ cộng tử: 2 + (−3).'], viSaoDung: '2/4 + (−3/4) = −1/4.', loiGiai: F(1, 2) + ' + (' + F('−3', 4) + ') = ' + F(2, 4) + ' + ' + F('−3', 4) + ' = <b>' + F('−1', 4) + '</b> = −0,25.',
        giangLai: 'Nghĩ bằng tiền: em có nửa cái bánh (2 phần tư), phải trả bạn 3 phần tư cái bánh. Sau khi trả hết, em còn nợ 1 phần tư: −1/4.', tienBo: 'Em đã quy đồng trước khi cộng — không còn cộng mẫu với mẫu nữa.',
        nguon: tuSoan(SGK_TOAN7 + ', tập một — cộng, trừ số hữu tỉ.'), kiemTra: kt(),
        tuongTu: { id: 'T7-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', choPhanSo: true, de: 'Tính: ' + F(2, 3) + ' + (' + F('−5', 6) + ').', dapAn: '-1/6', loi: [{ gt: '-1/3', nhan: 'Lỗi quy tắc cộng', phanHoi: 'Em cộng tử với tử, mẫu với mẫu (−3/9). Hãy quy đồng mẫu 6.' }, { gt: '3/2', nhan: 'Lỗi dấu', phanHoi: 'Em bỏ dấu "−".' }, { gt: '1/6', nhan: 'Lỗi dấu', phanHoi: 'Xem lại dấu: 4/6 − 5/6.' }], buoc: { hoi: F(2, 3) + ' = ?/6. Tử số là bao nhiêu?', dapAn: 4, dung: 'Đúng: 4/6.', sai: 'Nhân tử và mẫu với 2.' }, goiY: ['Mẫu chung 6.'], viSaoDung: '4/6 − 5/6 = −1/6.', loiGiai: '<b>' + F('−1', 6) + '</b>.', giangLai: 'Có 4 phần sáu, trả 5 phần sáu → nợ 1 phần sáu.', nguon: tuSoan(SGK_TOAN7 + ', tập một — cộng số hữu tỉ.'), kiemTra: kt() }
      },
      {
        id: 'T7-03', muc: 'van-dung', liDoMuc: 'Kết hợp hai phép tính khác loại, đổi số thập phân sang phân số, đúng thứ tự thực hiện.', loai: 'so', choPhanSo: true,
        de: 'Tính: (−0,75) · ' + F(4, 3) + ' + ' + F(1, 2) + '.', dapAn: '-1/2',
        loi: [
          { gt: '-11/8', nhan: 'Lỗi thứ tự phép tính', phanHoi: 'Em đã cộng ' + F(4, 3) + ' + ' + F(1, 2) + ' trước rồi mới nhân. Phép <b>nhân phải làm trước</b> phép cộng.' },
          { gt: '3/2', nhan: 'Lỗi dấu', phanHoi: 'Tích (−0,75) · 4/3 mang dấu gì? Một số âm nhân một số dương ra số âm.' },
          { gt: -1, nhan: 'Thiếu bước', phanHoi: '−1 mới là kết quả của phép nhân. Em còn phải cộng thêm 1/2.' }
        ],
        buoc: { hoi: 'Kết quả của phép nhân (−0,75) · ' + F(4, 3) + ' là bao nhiêu?', dapAn: -1, dung: 'Đúng: −3/4 · 4/3 = −1. Giờ em cộng thêm 1/2.', sai: 'Đổi −0,75 = −3/4 rồi nhân với 4/3.' },
        goiY: ['Đổi −0,75 thành phân số.', 'Làm phép nhân trước: −3/4 · 4/3 = ?'], viSaoDung: '−3/4 · 4/3 = −1; −1 + 1/2 = −1/2.',
        loiGiai: '(−0,75) · ' + F(4, 3) + ' + ' + F(1, 2) + ' = ' + F('−3', 4) + ' · ' + F(4, 3) + ' + ' + F(1, 2) + ' = −1 + ' + F(1, 2) + ' = <b>' + F('−1', 2) + '</b>.',
        giangLai: 'Đặt dấu ngoặc "vô hình" quanh phép nhân: [(−0,75) · 4/3] + 1/2. Phần trong ngoặc làm trước. Mẹo: −3/4 và 4/3 là hai số "lật ngược" nhau nên tích bằng −1.', tienBo: 'Em đã làm phép nhân trước phép cộng và giữ đúng dấu.',
        nguon: tuSoan(SGK_TOAN7 + ', tập một — nhân số hữu tỉ; thứ tự thực hiện phép tính.'), kiemTra: kt(),
        tuongTu: { id: 'T7-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', choPhanSo: true, de: 'Tính: (−1,5) · ' + F(2, 3) + ' + ' + F(3, 4) + '.', dapAn: '-1/4', loi: [{ gt: '-17/8', nhan: 'Lỗi thứ tự phép tính', phanHoi: 'Em cộng trước rồi nhân. Nhân trước!' }, { gt: '7/4', nhan: 'Lỗi dấu', phanHoi: 'Tích của số âm với số dương là số âm.' }, { gt: -1, nhan: 'Thiếu bước', phanHoi: 'Còn cộng 3/4.' }], buoc: { hoi: '(−1,5) · 2/3 = ?', dapAn: -1, dung: 'Đúng.', sai: '−3/2 · 2/3 = ?' }, goiY: ['−1,5 = −3/2.'], viSaoDung: '−1 + 3/4 = −1/4.', loiGiai: '<b>' + F('−1', 4) + '</b>.', giangLai: 'Nhân trước, cộng sau.', nguon: tuSoan(SGK_TOAN7 + ', tập một — thứ tự thực hiện phép tính.'), kiemTra: kt() }
      },
      {
        id: 'T7-04', muc: 'van-dung', liDoMuc: 'Tự chọn cách đưa về cùng dạng để so sánh bốn số, có số âm.', loai: 'chon1',
        de: 'Sắp xếp các số sau theo thứ tự <b>tăng dần</b>: −0,6; ' + F('−2', 3) + '; ' + F(1, 2) + '; 0.',
        phuongAn: [
          { t: '−0,6 &lt; ' + F('−2', 3) + ' &lt; 0 &lt; ' + F(1, 2), phanHoi: '−2/3 ≈ −0,667 xa 0 hơn −0,6, nên −2/3 nhỏ hơn. Với số âm, số nào xa 0 hơn thì nhỏ hơn.' },
          { t: F('−2', 3) + ' &lt; −0,6 &lt; 0 &lt; ' + F(1, 2), dung: true },
          { t: F(1, 2) + ' &lt; 0 &lt; −0,6 &lt; ' + F('−2', 3), phanHoi: 'Đây là thứ tự giảm dần (và còn đảo hai số âm). Đề hỏi tăng dần.' },
          { t: F('−2', 3) + ' &lt; −0,6 &lt; ' + F(1, 2) + ' &lt; 0', phanHoi: 'Số dương 1/2 luôn lớn hơn 0.' }
        ],
        goiY: ['Đổi −2/3 ra số thập phân (làm tròn 3 chữ số).', '−2/3 ≈ −0,667. Trên trục số, số nào nằm bên trái hơn?'], viSaoDung: '−0,667 < −0,6 < 0 < 0,5.', loiGiai: 'Đổi ' + F('−2', 3) + ' ≈ −0,667; ' + F(1, 2) + ' = 0,5.<br>Thứ tự tăng dần: <b>' + F('−2', 3) + ' &lt; −0,6 &lt; 0 &lt; ' + F(1, 2) + '</b>.',
        giangLai: 'Nghĩ về nhiệt độ: −0,67 °C lạnh hơn −0,6 °C. Càng lạnh (càng xa 0 về phía âm) thì số càng nhỏ.', tienBo: 'Em đã so sánh đúng hai số âm.',
        nguon: tuSoan(SGK_TOAN7 + ', tập một — thứ tự trong tập hợp số hữu tỉ; biểu diễn trên trục số.'), kiemTra: kt(),
        tuongTu: { id: 'T7-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Sắp xếp theo thứ tự <b>tăng dần</b>: −0,7; ' + F('−3', 4) + '; 0,5; ' + F('−1', 2) + '.', phuongAn: [{ t: F('−3', 4) + ' &lt; −0,7 &lt; ' + F('−1', 2) + ' &lt; 0,5', dung: true }, { t: '−0,7 &lt; ' + F('−3', 4) + ' &lt; ' + F('−1', 2) + ' &lt; 0,5', phanHoi: '−3/4 = −0,75 xa 0 hơn −0,7.' }, { t: F('−1', 2) + ' &lt; −0,7 &lt; ' + F('−3', 4) + ' &lt; 0,5', phanHoi: 'Đảo ngược các số âm rồi.' }, { t: '0,5 &lt; ' + F('−1', 2) + ' &lt; −0,7 &lt; ' + F('−3', 4), phanHoi: 'Đây là thứ tự giảm dần.' }], goiY: ['−3/4 = −0,75; −1/2 = −0,5.'], viSaoDung: '−0,75 < −0,7 < −0,5 < 0,5.', loiGiai: '<b>' + F('−3', 4) + ' &lt; −0,7 &lt; ' + F('−1', 2) + ' &lt; 0,5</b>.', giangLai: 'Lạnh hơn thì nhỏ hơn.', nguon: tuSoan(SGK_TOAN7 + ', tập một — so sánh số hữu tỉ.'), kiemTra: kt() }
      },
      {
        id: 'T7-05', muc: 'nang-cao', liDoMuc: 'Bài toán thực tế nhiều bước, có bẫy "phân số của lượng đang có".', loai: 'so', choPhanSo: true, canPhanSo: true,
        de: 'Một bể nước đang chứa ' + F(3, 4) + ' bể. Buổi sáng dùng hết ' + F(1, 3) + ' <b>lượng nước đang có</b>. Buổi chiều bơm thêm ' + F(1, 6) + ' bể. Hỏi cuối ngày bể chứa bao nhiêu phần bể? <span class="note">Viết kết quả dạng phân số.</span>', dapAn: '2/3',
        loi: [
          { gt: '7/12', nhan: 'Hiểu sai đề', phanHoi: 'Em đã trừ thẳng 1/3 <b>bể</b>. Nhưng đề nói 1/3 <b>lượng nước đang có</b> (tức 1/3 của 3/4 bể). Hãy tính lượng nước dùng buổi sáng trước.' },
          { gt: '1/2', nhan: 'Thiếu bước', phanHoi: '1/2 bể là lượng nước sau buổi sáng. Em còn chưa cộng phần bơm thêm buổi chiều.' },
          { gt: '5/12', nhan: 'Lỗi dấu phép tính', phanHoi: 'Buổi chiều bơm <b>thêm</b> nên phải cộng 1/6, không trừ.' }
        ],
        buoc: { hoi: 'Buổi sáng đã dùng hết bao nhiêu phần bể?', dapAn: '1/4', saiSo: 0.001, dung: 'Đúng: ' + F(1, 3) + ' · ' + F(3, 4) + ' = ' + F(1, 4) + ' bể. Vậy sau buổi sáng còn ' + F(3, 4) + ' − ' + F(1, 4) + ' = ?', sai: '"1/3 của 3/4" nghĩa là 1/3 · 3/4.' },
        goiY: ['"' + F(1, 3) + ' lượng nước đang có" nghĩa là ' + F(1, 3) + ' của ' + F(3, 4) + ' bể.', 'Lượng dùng buổi sáng = ' + F(1, 3) + ' · ' + F(3, 4) + '.', 'Sau buổi sáng còn bao nhiêu? Rồi cộng ' + F(1, 6) + '.'],
        viSaoDung: 'Dùng 1/3 · 3/4 = 1/4 bể; còn 3/4 − 1/4 = 1/2 bể; cộng 1/6 được 2/3 bể.',
        loiGiai: 'Buổi sáng dùng: ' + F(1, 3) + ' · ' + F(3, 4) + ' = ' + F(1, 4) + ' (bể).<br>Sau buổi sáng còn: ' + F(3, 4) + ' − ' + F(1, 4) + ' = ' + F(1, 2) + ' (bể).<br>Cuối ngày: ' + F(1, 2) + ' + ' + F(1, 6) + ' = ' + F(3, 6) + ' + ' + F(1, 6) + ' = ' + F(4, 6) + ' = <b>' + F(2, 3) + '</b> (bể).',
        giangLai: 'Dùng số cụ thể: giả sử cả bể là 12 lít. Bể đang có 3/4 · 12 = 9 lít. Sáng dùng 1/3 của 9 lít = 3 lít, còn 6 lít. Chiều bơm thêm 1/6 · 12 = 2 lít → 8 lít. 8/12 = 2/3 bể.', tienBo: 'Em đã phân biệt "phân số của cả bể" với "phân số của lượng đang có" — chỗ dễ nhầm nhất của bài.',
        nguon: tuSoan(SGK_TOAN7 + ', tập một — vận dụng phép tính số hữu tỉ vào bài toán thực tế.', { soLieu: GIA_DINH }), kiemTra: kt(),
        tuongTu: { id: 'T7-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', choPhanSo: true, canPhanSo: true, de: 'Một thùng sơn đang chứa ' + F(5, 6) + ' thùng. Buổi sáng dùng hết ' + F(2, 5) + ' <b>lượng sơn đang có</b>. Buổi chiều đổ thêm ' + F(1, 4) + ' thùng. Cuối ngày thùng chứa bao nhiêu phần thùng? <span class="note">Viết dạng phân số.</span>', dapAn: '3/4', loi: [{ gt: '41/60', nhan: 'Hiểu sai đề', phanHoi: 'Em trừ thẳng 2/5 thùng. Phải tính 2/5 CỦA 5/6 thùng.' }, { gt: '1/2', nhan: 'Thiếu bước', phanHoi: 'Còn cộng 1/4 buổi chiều.' }, { gt: '1/4', nhan: 'Lỗi dấu phép tính', phanHoi: 'Đổ thêm thì cộng.' }], buoc: { hoi: 'Buổi sáng dùng bao nhiêu phần thùng?', dapAn: '1/3', saiSo: 0.001, dung: 'Đúng: 2/5 · 5/6 = 1/3.', sai: '2/5 · 5/6 = ?' }, goiY: ['2/5 · 5/6 = 1/3.'], viSaoDung: '5/6 − 1/3 = 1/2; 1/2 + 1/4 = 3/4.', loiGiai: '<b>' + F(3, 4) + '</b> thùng.', giangLai: 'Thử với thùng 60 lít: có 50 lít, dùng 20, còn 30, thêm 15 → 45/60 = 3/4.', nguon: tuSoan(SGK_TOAN7 + ', tập một — bài toán thực tế với số hữu tỉ.', { soLieu: GIA_DINH }), kiemTra: kt() }
      },
      {
        id: 'T7-06', muc: 'nang-cao', liDoMuc: 'Phát hiện và sửa sai lầm về quy tắc dấu ngoặc trong lời giải của bạn.', loai: 'so', choPhanSo: true,
        de: 'Bạn Tùng làm như sau: −' + F(1, 2) + ' − ' + F(1, 3) + ' = −(' + F(1, 2) + ' − ' + F(1, 3) + ') = −' + F(1, 6) + '.<br>Lời giải có chỗ sai. Em hãy tìm <b>kết quả đúng</b> của −' + F(1, 2) + ' − ' + F(1, 3) + '.', dapAn: '-5/6',
        loi: [
          { gt: '-1/6', nhan: 'Lặp lại lỗi của bạn', phanHoi: 'Đây chính là kết quả sai của Tùng. Chỗ sai: −a − b = −(a <b>+</b> b), không phải −(a − b).' },
          { gt: '1/6', nhan: 'Lỗi dấu', phanHoi: 'Hai số âm cộng lại không thể ra số dương.' },
          { gt: '-2/5', nhan: 'Lỗi quy tắc cộng', phanHoi: 'Em đã cộng tử với tử, mẫu với mẫu. Hãy quy đồng mẫu 6.' },
          { gt: '5/6', nhan: 'Lỗi dấu', phanHoi: 'Phần số đúng (5/6), nhưng kết quả phải âm.' }
        ],
        buoc: { hoi: 'Viết lại: −' + F(1, 2) + ' − ' + F(1, 3) + ' = −(' + F(1, 2) + ' ? ' + F(1, 3) + '). Dấu cần điền là "+" hay "−"?', chapNhan: ['+', 'cong', 'dau cong', 'dau +'], dung: 'Đúng: −a − b = −(a + b). Vậy kết quả là −(1/2 + 1/3) = ?', sai: 'Thử với số: −2 − 3 = −5 = −(2 + 3). Vậy dấu trong ngoặc là gì?' },
        goiY: ['Thử kiểm tra quy tắc của Tùng bằng số nguyên: −2 − 3 có bằng −(2 − 3) không?', '−a − b = −(a + b).'],
        viSaoDung: '−1/2 − 1/3 = −(1/2 + 1/3) = −(3/6 + 2/6) = −5/6.', loiGiai: 'Tùng sai ở bước bỏ ngoặc: −a − b = −(a <b>+</b> b).<br>−' + F(1, 2) + ' − ' + F(1, 3) + ' = −(' + F(3, 6) + ' + ' + F(2, 6) + ') = <b>−' + F(5, 6) + '</b>.',
        giangLai: 'Nghĩ bằng tiền nợ: em nợ 1/2 nghìn, rồi nợ thêm 1/3 nghìn. Tổng nợ là 1/2 + 1/3 = 5/6 nghìn, nên kết quả là −5/6. Nợ cộng nợ thì nhiều hơn, không ít đi.',
        tienBo: 'Em đã tìm ra lỗi bỏ dấu ngoặc của bạn và tự sửa đúng.', nguon: tuSoan(SGK_TOAN7 + ', tập một — quy tắc dấu ngoặc với số hữu tỉ (kiểm tra SGK trình bày quy tắc này ở bài nào).'), kiemTra: kt(),
        tuongTu: { id: 'T7-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', choPhanSo: true, de: 'Bạn Mai làm: −' + F(3, 4) + ' − ' + F(1, 2) + ' = −(' + F(3, 4) + ' − ' + F(1, 2) + ') = −' + F(1, 4) + '. Tìm <b>kết quả đúng</b>.', dapAn: '-5/4', loi: [{ gt: '-1/4', nhan: 'Lặp lại lỗi của bạn', phanHoi: '−a − b = −(a + b).' }, { gt: '1/4', nhan: 'Lỗi dấu', phanHoi: 'Hai số âm cộng lại vẫn âm.' }, { gt: '-2/3', nhan: 'Lỗi quy tắc cộng', phanHoi: 'Quy đồng mẫu 4.' }], buoc: { hoi: '−3/4 − 1/2 = −(3/4 ? 1/2). Dấu là "+" hay "−"?', chapNhan: ['+', 'cong', 'dau cong', 'dau +'], dung: 'Đúng.', sai: '−a − b = −(a + b).' }, goiY: ['−(3/4 + 1/2).'], viSaoDung: '−(3/4 + 2/4) = −5/4.', loiGiai: '<b>−' + F(5, 4) + '</b>.', giangLai: 'Nợ cộng nợ.', nguon: tuSoan(SGK_TOAN7 + ', tập một — quy tắc dấu ngoặc.'), kiemTra: kt() }
      }
    ]
  };

  /* ------------------------------------------------------------------
     CHỦ ĐỀ 5 — TIẾNG ANH 7: DIỄN ĐẠT SỞ THÍCH BẰNG THÌ HIỆN TẠI ĐƠN
     ------------------------------------------------------------------ */
  const tiengAnh = {
    id: 'ta7-so-thich', lop: 7, mon: 'anh', phanMon: 'Ngữ pháp – Viết', ten: 'Diễn đạt sở thích bằng thì hiện tại đơn',
    kienThucTruoc: ['Thì hiện tại đơn với "I, you, we, they" (lớp 6)', 'Từ vựng về hoạt động giải trí: play, read, collect, watch…', 'Trạng từ tần suất: always, usually, often, sometimes, never'],
    yeuCauCanDat: ['Dùng được like / love / enjoy / hate + V-ing để nói về sở thích.', 'Chia đúng động từ ở thì hiện tại đơn, đặc biệt với he / she / it.', 'Phát hiện và sửa lỗi chia động từ trong câu.', 'Viết được đoạn văn ngắn (40–60 từ) về sở thích.'],
    bai: {
      mucTieu: ['nói về sở thích với like / love / enjoy + V-ing;', 'thêm -s / -es đúng cách cho động từ đi với he, she, it;', 'tìm và sửa lỗi chia động từ;', 'viết đoạn văn ngắn về sở thích và giải thích quy tắc em đã dùng.'],
      khoiDong: { hoi: 'What do you like doing in your free time? Hãy nói hoặc viết một câu tiếng Anh.', goiY: 'Ví dụ: "I like playing football." hoặc "I love reading comics."' },
      trongTam: [
        '<b>like / love / enjoy / hate + V-ing</b>: I <u>enjoy</u> <u>reading</u> books. (like, love, hate cũng có thể + to V; <b>enjoy chỉ + V-ing</b>.)',
        'Thì hiện tại đơn dùng để nói thói quen, sở thích: I / You / We / They + <b>V</b>; He / She / It + <b>V-s/es</b>.',
        'Thêm <b>-es</b> sau o, s, sh, ch, x, z: go → goes, watch → watches. Phụ âm + y → <b>-ies</b>: study → studies. Nguyên âm + y → chỉ thêm -s: play → plays.',
        'Phủ định: don\'t / <b>doesn\'t + V nguyên mẫu</b> (She doesn\'t <u>like</u>…). Câu hỏi: Do / <b>Does + S + V nguyên mẫu</b>? (Does he <u>play</u>…?)',
        'Cụm chỉ tần suất: every day, at weekends, once a week, after school.'
      ],
      viDu: { de: 'Viết 2 câu về Lan, một bạn sưu tầm tem vào mỗi cuối tuần.', loiGiai: 'Lan <b>enjoys collecting</b> stamps. She <b>collects</b> stamps every weekend.<br>(Lan → she → động từ thêm -s; enjoy + V-ing.)' },
      nguon: tuSoan(SGK_TA7 + ' — đơn vị bài học về chủ đề sở thích (Hobbies); phần ngữ pháp thì hiện tại đơn và verbs of liking + V-ing. Chưa ghi số Unit vì chưa mở được sách.'),
      hoiDap: [
        { tu: ['enjoy', 'like', 'v-ing', 'ving'], tl: 'like / love / enjoy / hate + V-ing. "enjoy" chỉ đi với V-ing: She enjoys dancing.' },
        { tu: ['them s', 'them es', '-s', '-es', 'he she it'], tl: 'He/She/It + V-s/es. Thêm -es sau o, s, sh, ch, x, z (goes, watches). Phụ âm + y → ies (studies).' },
        { tu: ['phu dinh', "doesn't", 'doesnt', 'does'], tl: 'Sau doesn\'t / does, động từ trở về nguyên mẫu: She doesn\'t like… / Does he play…?' }
      ]
    },
    cauHoi: [
      {
        id: 'TA7-01', muc: 'co-ban', liDoMuc: 'Chọn dạng động từ với chủ ngữ ngôi thứ ba số ít.', loai: 'chon1', de: 'Choose the correct answer: <i>My sister ______ collecting stamps.</i>',
        phuongAn: [{ t: 'like', phanHoi: '"My sister" = she → động từ cần thêm -s.' }, { t: 'likes', dung: true }, { t: 'liking', phanHoi: 'Câu cần một động từ chia theo chủ ngữ, không dùng V-ing ở vị trí này.' }, { t: 'is like', phanHoi: 'Không dùng "is" trước động từ nguyên mẫu "like".' }],
        goiY: ['"My sister" thay bằng đại từ nào?'], viSaoDung: 'My sister = she → likes; "collecting" là V-ing sau like.', loiGiai: 'My sister <b>likes</b> collecting stamps.', giangLai: 'Mẹo: chủ ngữ là MỘT người khác (không phải I, you) → động từ "đeo" thêm chữ s.',
        tienBo: 'Em đã nhận ra "My sister" là ngôi thứ ba số ít.', nguon: tuSoan(SGK_TA7 + ' — thì hiện tại đơn với chủ ngữ ngôi thứ ba số ít.'), kiemTra: kt(),
        tuongTu: { id: 'TA7-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose the correct answer: <i>He ______ playing the guitar.</i>', phuongAn: [{ t: 'enjoy', phanHoi: 'He → thêm -s.' }, { t: 'enjoys', dung: true }, { t: 'enjoying', phanHoi: 'Cần động từ chia.' }, { t: 'is enjoy', phanHoi: 'Không dùng is + V nguyên mẫu.' }], goiY: ['He → V-s.'], viSaoDung: 'He enjoys…', loiGiai: 'He <b>enjoys</b> playing the guitar.', giangLai: 'He / she / it → V-s.', nguon: tuSoan(SGK_TA7 + ' — thì hiện tại đơn.'), kiemTra: kt() }
      },
      {
        id: 'TA7-02', muc: 'co-ban', liDoMuc: 'Chia một động từ, cần nhớ quy tắc thêm -es.', loai: 'chu',
        de: 'Write the correct form of the verb: <i>She ______ (watch) cartoons every Sunday.</i> <span class="note">Chỉ gõ động từ đã chia.</span>',
        chapNhan: ['watches'],
        loi: [{ mau: '^watchs$', danhDau: 'watchs', nhan: 'Lỗi chính tả -es', phanHoi: '"watch" kết thúc bằng <b>ch</b> nên thêm <b>-es</b>, không phải -s.' }, { mau: '^watch$', danhDau: 'watch', nhan: 'Lỗi chia động từ', phanHoi: 'Với chủ ngữ "She", em cần thay đổi động từ "watch" như thế nào?' }, { mau: 'watching', danhDau: '*', nhan: 'Sai thì', phanHoi: '"every Sunday" nói về thói quen → thì hiện tại đơn, không dùng V-ing.' }],
        goiY: ['She → động từ thêm -s hoặc -es.', '"watch" kết thúc bằng "ch".'], viSaoDung: 'She + V-es; watch kết thúc bằng ch → watches.', loiGiai: 'She <b>watches</b> cartoons every Sunday.', giangLai: 'Thử đọc to "watchs" — rất khó phát âm! Vì vậy với các đuôi s, sh, ch, x, o ta thêm "es" để dễ đọc: watches, goes, fixes.',
        tienBo: 'Em đã nhớ quy tắc thêm -es sau "ch".', nguon: tuSoan(SGK_TA7 + ' — quy tắc thêm -s/-es ở thì hiện tại đơn.'), kiemTra: kt(),
        tuongTu: { id: 'TA7-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, quy tắc -ies.', loai: 'chu', de: 'Write the correct form of the verb: <i>My brother ______ (study) English every evening.</i> <span class="note">Chỉ gõ động từ đã chia.</span>', chapNhan: ['studies'], loi: [{ mau: '^studys$', danhDau: 'studys', nhan: 'Lỗi chính tả -ies', phanHoi: 'Phụ âm + y → đổi y thành i rồi thêm -es: studies.' }, { mau: '^study$', danhDau: 'study', nhan: 'Lỗi chia động từ', phanHoi: '"My brother" = he → động từ cần đổi thế nào?' }], goiY: ['d + y → ies.'], viSaoDung: 'studies.', loiGiai: '<b>studies</b>.', giangLai: 'Phụ âm trước y → ies (study → studies); nguyên âm trước y → s (play → plays).', nguon: tuSoan(SGK_TA7 + ' — quy tắc thêm -s/-es.'), kiemTra: kt() }
      },
      {
        id: 'TA7-03', muc: 'van-dung', liDoMuc: 'Tự tìm vị trí lỗi trong câu và sửa (không có gợi ý vị trí).', loai: 'chu',
        de: 'Find and correct the mistake. Rewrite the sentence: <i>She play badminton after school.</i>',
        chapNhan: ['she plays badminton after school', 'plays'],
        loi: [{ mau: '\\bshe play\\b|^play$', danhDau: 'play', nhan: 'Lỗi chia động từ', phanHoi: 'Với chủ ngữ "She", em cần thay đổi động từ "play" như thế nào?' }, { mau: '\\bplayes\\b|\\bplaies\\b', danhDau: ['playes', 'plaies'], nhan: 'Lỗi chính tả -s', phanHoi: '"play" có nguyên âm a đứng trước y, nên chỉ thêm -s: plays.' }, { mau: '\\bis playing\\b|\\bplaying\\b', danhDau: 'playing', nhan: 'Sai thì', phanHoi: '"after school" nói về thói quen → thì hiện tại đơn.' }],
        goiY: ['Chủ ngữ là "She". Động từ đã chia đúng chưa?'], viSaoDung: 'She + V-s: play → plays (nguyên âm + y chỉ thêm -s).', loiGiai: 'She <b>plays</b> badminton after school.', giangLai: 'Đọc câu và hỏi: "Ai làm?" → She (một người, không phải I/you). "Làm gì?" → play. Với she, động từ phải thêm s: plays.',
        tienBo: 'Em đã tự tìm ra từ sai và sửa "play" thành "plays".', nguon: tuSoan(SGK_TA7 + ' — thì hiện tại đơn; dạng bài tìm và sửa lỗi.'), kiemTra: kt('Nhóm biên soạn kiểm tra các cách viết đúng (cả câu hoặc chỉ từ đã sửa); chạy kiểm thử tự động ngày ' + NGAY_SOAN + '.'),
        tuongTu: { id: 'TA7-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc, đổi động từ (go → goes).', loai: 'chu', de: 'Find and correct the mistake. Rewrite the sentence: <i>My father go fishing at weekends.</i>', chapNhan: ['my father goes fishing at weekends', 'my father goes fishing on weekends', 'my father goes fishing at the weekend', 'goes'], loi: [{ mau: '\\bfather go\\b|^go$', danhDau: 'go', nhan: 'Lỗi chia động từ', phanHoi: '"My father" = he. Động từ "go" cần thay đổi thế nào?' }, { mau: '\\bgos\\b', danhDau: 'gos', nhan: 'Lỗi chính tả -es', phanHoi: '"go" kết thúc bằng o → thêm -es: goes.' }], goiY: ['My father = he.'], viSaoDung: 'he → goes.', loiGiai: 'My father <b>goes</b> fishing at weekends.', giangLai: 'go → goes, do → does.', nguon: tuSoan(SGK_TA7 + ' — thì hiện tại đơn.'), kiemTra: kt() }
      },
      {
        id: 'TA7-04', muc: 'van-dung', liDoMuc: 'Viết lại câu giữ nghĩa, tự chọn cấu trúc; có nhiều đáp án đúng.', loai: 'chu',
        de: 'Rewrite the sentence so that it means the same. Begin with the given words.<br><i>Mai\'s hobby is reading comics.</i><br>→ <b>Mai ______</b>',
        nhieuCachDung: true,
        chapNhan: ['mai likes reading comics', 'mai loves reading comics', 'mai enjoys reading comics', 'mai likes to read comics', 'mai loves to read comics', 'mai is interested in reading comics', 'mai is keen on reading comics', 'mai is fond of reading comics'],
        loi: [{ mau: '^mai (like|love|enjoy)\\b', danhDau: ['like', 'love', 'enjoy'], nhan: 'Lỗi chia động từ', phanHoi: 'Chủ ngữ "Mai" là ngôi thứ ba số ít. Động từ được đánh dấu cần thay đổi thế nào?' }, { mau: '\\benjoys to\\b', danhDau: 'to', nhan: 'Lỗi cấu trúc', phanHoi: '"enjoy" chỉ đi với <b>V-ing</b>: enjoys reading.' }, { mau: '\\b(likes|loves|enjoys|in|on|of) read\\b', danhDau: 'read', nhan: 'Lỗi dạng động từ', phanHoi: 'Sau like / love / enjoy (và sau giới từ) cần <b>V-ing</b>: reading.' }, { mau: '\\breads comics\\b', danhDau: 'reads', nhan: 'Đúng ngữ pháp, chưa đủ nghĩa', phanHoi: '"Mai reads comics" đúng ngữ pháp nhưng chưa nói đây là <b>sở thích</b>. Hãy dùng like / love / enjoy + V-ing.' }],
        goiY: ['"hobby" = điều Mai thích làm.', 'Mai + likes / loves / enjoys + V-ing…'], viSaoDung: 'Câu của em dùng đúng cấu trúc chỉ sở thích và chia động từ đúng với "Mai".',
        loiGiai: 'Các đáp án được chấp nhận:<br>• Mai <b>likes / loves / enjoys reading</b> comics.<br>• Mai <b>likes / loves to read</b> comics.<br>• Mai <b>is interested in / is keen on / is fond of reading</b> comics.',
        giangLai: '"Sở thích của Mai là X" = "Mai thích X". Tiếng Anh: Mai likes X. Vì Mai là "she" nên like → likes; và sau likes dùng V-ing: reading.', tienBo: 'Em đã diễn đạt cùng một ý bằng cấu trúc khác và chia động từ đúng.',
        giupViet: 'Các khung câu em có thể dùng: <b>Mai likes + V-ing</b> / <b>Mai loves + V-ing</b> / <b>Mai enjoys + V-ing</b> / <b>Mai is interested in + V-ing</b>.',
        nguon: tuSoan(SGK_TA7 + ' — verbs of liking + V-ing; dạng bài viết lại câu.'), kiemTra: kt('Nhóm biên soạn liệt kê 8 cách viết đúng; chạy kiểm thử tự động ngày ' + NGAY_SOAN + '. Giáo viên có thể bổ sung cách viết khác vào "chapNhan".'),
        tuongTu: { id: 'TA7-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Rewrite the sentence so that it means the same. Begin with the given words.<br><i>Nam\'s hobby is playing football.</i><br>→ <b>Nam ______</b>', chapNhan: ['nam likes playing football', 'nam loves playing football', 'nam enjoys playing football', 'nam likes to play football', 'nam loves to play football', 'nam is interested in playing football', 'nam is keen on playing football', 'nam is fond of playing football'], loi: [{ mau: '^nam (like|love|enjoy)\\b', danhDau: ['like', 'love', 'enjoy'], nhan: 'Lỗi chia động từ', phanHoi: 'Nam = he → động từ thêm -s.' }, { mau: '\\benjoys to\\b', danhDau: 'to', nhan: 'Lỗi cấu trúc', phanHoi: 'enjoy + V-ing.' }, { mau: '\\b(likes|loves|enjoys|in|on|of) play\\b', danhDau: 'play', nhan: 'Lỗi dạng động từ', phanHoi: 'Cần V-ing: playing.' }], goiY: ['Nam likes + V-ing.'], viSaoDung: 'Đúng cấu trúc sở thích.', loiGiai: 'Nam <b>likes / loves / enjoys playing</b> football (và các cách tương đương).', giangLai: 'Sở thích → like + V-ing.', nguon: tuSoan(SGK_TA7 + ' — verbs of liking + V-ing.'), kiemTra: kt() }
      },
      {
        id: 'TA7-05', muc: 'nang-cao', liDoMuc: 'Phát hiện lỗi trong cả đoạn văn, gồm lỗi sau trợ động từ "doesn\'t".', loai: 'chonNhieu',
        de: 'Read the paragraph. <b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) My best friend Lan loves gardening. (2) She grow vegetables in her backyard. (3) Every morning she waters the plants. (4) She doesn\'t likes using chemicals. (5) Her parents enjoy helping her at weekends.</i>',
        phuongAn: [{ t: 'Câu (1)', phanHoi: 'Câu (1) đúng: Lan → loves; love + V-ing.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', phanHoi: 'Câu (3) đúng: she → waters.' }, { t: 'Câu (4)', dung: true }, { t: 'Câu (5)', phanHoi: 'Câu (5) đúng: "Her parents" là số nhiều → enjoy (không thêm s).' }],
        goiY: ['Với mỗi câu, tìm chủ ngữ rồi kiểm tra động từ.', 'Sau "doesn\'t", động từ ở dạng nào?'], viSaoDung: '(2) grow → grows; (4) doesn\'t likes → doesn\'t like.',
        loiGiai: 'Câu (2) và (4) sai.<br>(2) She <b>grows</b> vegetables…<br>(4) She doesn\'t <b>like</b> using chemicals. (Sau doesn\'t dùng V nguyên mẫu.)<br>Câu (5) đúng vì "Her parents" là số nhiều.',
        giangLai: '"-s" chỉ xuất hiện MỘT lần: hoặc ở động từ (She likes), hoặc ở trợ động từ (She doesn\'t like) — không bao giờ cả hai.', tienBo: 'Em đã soát được lỗi ở cả câu khẳng định và câu phủ định.',
        nguon: tuSoan(SGK_TA7 + ' — thì hiện tại đơn (khẳng định, phủ định); đọc và phát hiện lỗi.'), kiemTra: kt(),
        tuongTu: { id: 'TA7-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc, thêm câu hỏi Does.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) My cousin Huy enjoys making models. (2) He build a new model every month. (3) His sisters don\'t like the noise. (4) Does he spends a lot of money on it? (5) He keeps his models on a shelf.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng: enjoys making.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', phanHoi: 'Đúng: "His sisters" số nhiều → don\'t like.' }, { t: 'Câu (4)', dung: true }, { t: 'Câu (5)', phanHoi: 'Đúng: he → keeps.' }], goiY: ['Sau "Does", động từ ở dạng nào?'], viSaoDung: '(2) builds; (4) Does he spend…?', loiGiai: 'Câu (2), (4) sai.', giangLai: '-s chỉ xuất hiện một lần.', nguon: tuSoan(SGK_TA7 + ' — thì hiện tại đơn, câu hỏi.'), kiemTra: kt() }
      },
      {
        id: 'TA7-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn văn và giải thích quy tắc đã dùng; câu mở, đánh giá theo tiêu chí.', loai: 'mo',
        de: 'Write a short paragraph (<b>40–60 words</b>) about your hobby. Use <b>at least two</b> structures "like / love / enjoy + V-ing" and say <b>how often</b> you do it.<br>Sau đó, ở ô thứ hai, giải thích bằng tiếng Việt <b>một quy tắc</b> em đã dùng.',
        oPhu: { nhan: 'Quy tắc em đã dùng (tiếng Việt)', goiY: 'Ví dụ: Sau enjoy em dùng V-ing…' },
        tieuChi: [
          { t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } },
          { t: 'Có ít nhất 2 cấu trúc like / love / enjoy + V-ing.', tuDong: { mau: '\\b(like|likes|love|loves|enjoy|enjoys|hate|hates) \\w+ing\\b', toiThieu: 2 } },
          { t: 'Có cụm chỉ tần suất (every…, at weekends, often, usually…).', tuDong: { mau: '\\b(every|always|usually|often|sometimes|never|once|twice|at weekends|on weekends|at the weekend)\\b', toiThieu: 1 } },
          { t: 'Động từ chia đúng với chủ ngữ (I like… / My brother likes…).', tuDong: { canhBao: '\\b(he|she|it) (like|love|enjoy|play|go|watch|read|collect|do|have)\\b', thongBao: 'Có thể có lỗi: he/she/it + động từ chưa thêm -s.' } },
          { t: 'Ô thứ hai giải thích được một quy tắc bằng tiếng Việt.', tuDong: { oPhuSoTu: 6 } }
        ],
        baiThamKhao: 'My hobby is drawing. I love drawing animals and I enjoy painting with watercolours. I usually draw for an hour after school, and at weekends I often go to the park to sketch trees. My brother doesn\'t like drawing, but he likes watching me. Drawing makes me feel calm and happy.<br><br><i>Quy tắc:</i> Sau "love" và "enjoy" em dùng động từ thêm -ing (drawing, painting). Với "he" em dùng "likes" và "doesn\'t like".',
        giupViet: '<b>Lập ý 3 phần:</b><br>1) Giới thiệu: My hobby is … / I love …-ing.<br>2) Chi tiết: When/how often? (every day, at weekends) — Who with? — Why do you like it?<br>3) Cảm nghĩ: It makes me feel …<br><b>Từ gợi ý:</b> collecting, gardening, cycling, drawing, playing the guitar, making models; relaxing, creative, healthy.<br><b>Kiểm tra lại:</b> mỗi động từ sau like/love/enjoy có -ing chưa? Câu nói về he/she có động từ thêm -s chưa?',
        goiY: ['Bắt đầu: "My hobby is …" hoặc "I love …-ing".', 'Thêm khi nào em làm (every…, at weekends) và vì sao em thích.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Viết từng câu ngắn trước: (1) I love + V-ing. (2) I usually … (khi nào). (3) I enjoy + V-ing … (4) It makes me feel … Rồi nối lại.',
        tienBo: 'Em đã tự viết đoạn văn và giải thích được quy tắc mình dùng.', nguon: tuSoan(SGK_TA7 + ' — kĩ năng viết đoạn văn về sở thích (phần Writing của đơn vị bài học về Hobbies).'), kiemTra: kt('Câu mở: nhóm biên soạn kiểm tra tiêu chí và bài tham khảo; máy chỉ kiểm tra sơ bộ (đếm từ, tìm cấu trúc), học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'TA7-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc, viết về người khác (he/she).', loai: 'mo', de: 'Write <b>30–50 words</b> about the hobby of a family member. Use he or she, at least one "like / love / enjoy + V-ing", and say how often.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 1 cấu trúc like / love / enjoy + V-ing.', tuDong: { mau: '\\b(likes|loves|enjoys|like|love|enjoy) \\w+ing\\b', toiThieu: 1 } }, { t: 'Có cụm chỉ tần suất.', tuDong: { mau: '\\b(every|always|usually|often|sometimes|never|once|twice|at weekends|on weekends)\\b', toiThieu: 1 } }, { t: 'He/she + động từ thêm -s/-es.', tuDong: { canhBao: '\\b(he|she) (like|love|enjoy|play|go|watch|read|collect|do|have|grow|cook)\\b', thongBao: 'Có thể có lỗi: he/she + động từ chưa thêm -s.' } }], baiThamKhao: 'My grandfather loves gardening. He grows vegetables and flowers in our small garden. He waters the plants every morning and often gives vegetables to our neighbours. He enjoys spending time outdoors because it keeps him healthy.', giupViet: 'Khung: My … loves … He/She … every … He/She enjoys … because …', goiY: ['Bắt đầu: My mother / father / grandmother loves…'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Nhớ: he/she → V-s.', nguon: tuSoan(SGK_TA7 + ' — viết đoạn văn về sở thích.'), kiemTra: kt('Câu mở: kiểm tra sơ bộ, học sinh tự đối chiếu tiêu chí.') }
      }
    ]
  };

  /* ------------------------------------------------------------------
     DANH MỤC CẢ 4 KHỐI — tên chủ đề dự kiến theo mạch nội dung,
     CHƯA đối chiếu số bài / Unit / trang. "id" chỉ có ở chủ đề đã soạn.
     ------------------------------------------------------------------ */
  const danhMuc = {
    6: {
      khtn: [['Vật lí', 'Lực'], ['Vật lí', 'Năng lượng'], ['Hóa học', 'Các thể của chất'], ['Hóa học', 'Oxygen và không khí'], ['Hóa học', 'Hỗn hợp và tách chất'], ['Sinh học', 'Tế bào'], ['Sinh học', 'Đa dạng thế giới sống']],
      toan: [['Số và Đại số', 'Tập hợp các số tự nhiên'], ['Số và Đại số', 'Tính chia hết trong tập hợp số tự nhiên'], ['Số và Đại số', 'Số nguyên'], ['Số và Đại số', 'Phân số'], ['Số và Đại số', 'Số thập phân']],
      anh: [['Ngữ pháp', 'Thì hiện tại đơn và hiện tại tiếp diễn'], ['Ngữ pháp', 'Giới từ chỉ vị trí'], ['Ngữ pháp', 'So sánh hơn của tính từ'], ['Từ vựng', 'Trường học, nhà ở, bạn bè'], ['Đọc hiểu – Viết', 'Đoạn văn miêu tả ngắn']]
    },
    7: {
      khtn: [['Vật lí', 'Tốc độ chuyển động', 'vl7-toc-do'], ['Vật lí', 'Âm thanh'], ['Vật lí', 'Ánh sáng'], ['Vật lí', 'Từ'], ['Hóa học', 'Nguyên tử', 'hh7-nguyen-tu'], ['Hóa học', 'Nguyên tố hóa học'], ['Hóa học', 'Sơ lược bảng tuần hoàn'], ['Hóa học', 'Phân tử và liên kết hóa học'], ['Sinh học', 'Quang hợp ở thực vật', 'sh7-quang-hop'], ['Sinh học', 'Hô hấp tế bào'], ['Sinh học', 'Trao đổi nước và chất dinh dưỡng'], ['Sinh học', 'Cảm ứng, sinh trưởng và sinh sản']],
      toan: [['Số và Đại số', 'Số hữu tỉ', 'toan7-so-huu-ti'], ['Số và Đại số', 'Số thực'], ['Số và Đại số', 'Tỉ lệ thức và đại lượng tỉ lệ'], ['Số và Đại số', 'Biểu thức đại số và đa thức một biến']],
      anh: [['Ngữ pháp – Viết', 'Diễn đạt sở thích bằng thì hiện tại đơn', 'ta7-so-thich'], ['Ngữ pháp', 'Thì quá khứ đơn'], ['Ngữ pháp', 'So sánh: like, as … as, different from'], ['Đọc hiểu', 'Đọc đoạn văn thông tin ngắn'], ['Viết', 'Viết email ngắn']]
    },
    8: {
      khtn: [['Vật lí', 'Khối lượng riêng và áp suất'], ['Vật lí', 'Tác dụng làm quay của lực'], ['Vật lí', 'Điện'], ['Vật lí', 'Nhiệt'], ['Hóa học', 'Phản ứng hóa học'], ['Hóa học', 'Mol và tính theo phương trình hóa học'], ['Hóa học', 'Acid – base – muối'], ['Sinh học', 'Cơ thể người'], ['Sinh học', 'Sinh vật và môi trường']],
      toan: [['Số và Đại số', 'Đa thức nhiều biến'], ['Số và Đại số', 'Hằng đẳng thức đáng nhớ'], ['Số và Đại số', 'Phân thức đại số'], ['Số và Đại số', 'Phương trình bậc nhất một ẩn'], ['Số và Đại số', 'Hàm số bậc nhất']],
      anh: [['Ngữ pháp', 'Động từ chỉ sở thích + V-ing / to V'], ['Ngữ pháp', 'Câu đơn và câu ghép'], ['Ngữ pháp', 'Câu điều kiện loại 1'], ['Đọc hiểu', 'Đọc hiểu bài báo ngắn'], ['Viết', 'Viết đoạn văn nêu ý kiến']]
    },
    9: {
      khtn: [['Vật lí', 'Năng lượng cơ học'], ['Vật lí', 'Ánh sáng: khúc xạ và thấu kính'], ['Vật lí', 'Điện'], ['Hóa học', 'Kim loại'], ['Hóa học', 'Hợp chất hữu cơ và hydrocarbon'], ['Sinh học', 'Di truyền'], ['Sinh học', 'Tiến hóa']],
      toan: [['Số và Đại số', 'Phương trình và hệ hai phương trình bậc nhất hai ẩn'], ['Số và Đại số', 'Bất phương trình bậc nhất một ẩn'], ['Số và Đại số', 'Căn bậc hai và căn bậc ba'], ['Số và Đại số', 'Hàm số y = ax² (a ≠ 0) và phương trình bậc hai một ẩn']],
      anh: [['Ngữ pháp', 'Câu bị động'], ['Ngữ pháp', 'Câu tường thuật'], ['Ngữ pháp', 'Mệnh đề quan hệ'], ['Đọc hiểu', 'Đọc hiểu văn bản dài'], ['Viết', 'Viết thư / bài luận ngắn']]
    }
  };

  window.HOC_LIEU = {
    tenWeb: TEN_WEB,
    phienBan: '1.0 — ' + NGAY_SOAN,
    caiDat: {
      // Địa chỉ máy chủ trung gian AI (tùy chọn). Để trống = chỉ dùng AI qua Claude Artifact (nếu có) hoặc trợ giúp theo bài học.
      aiEndpoint: ''
    },
    mon: {
      khtn: { ten: 'Khoa học tự nhiên', ngan: 'KHTN', moTa: 'Vật lí · Hóa học · Sinh học' },
      toan: { ten: 'Toán', ngan: 'Toán', moTa: 'Số và Đại số' },
      anh: { ten: 'Tiếng Anh', ngan: 'Tiếng Anh', moTa: 'Từ vựng · Ngữ pháp · Đọc · Viết' }
    },
    taiLieuCanBoSung: [
      'SGK Toán 7, tập một — bộ "Kết nối tri thức với cuộc sống" (NXB Giáo dục Việt Nam): chương Số hữu tỉ (tệp PDF hoặc ảnh các trang, kèm năm in/ấn bản).',
      'SGK Khoa học tự nhiên 7 — bộ "Kết nối tri thức với cuộc sống": các bài Tốc độ chuyển động, Nguyên tử, Quang hợp ở thực vật (và bài về các yếu tố ảnh hưởng đến quang hợp nếu có).',
      'SGK Tiếng Anh 7 Global Success (NXB Giáo dục Việt Nam): đơn vị bài học về sở thích (Hobbies) — phần Grammar và Writing; kèm Workbook nếu muốn trích bài tập.',
      'Sách bài tập tương ứng (nếu muốn có câu loại A "trích" hoặc loại B "phỏng theo"), kèm xác nhận quyền sử dụng lại nguyên văn.',
      'Văn bản Chương trình GDPT 2018 môn Toán, môn KHTN, môn Tiếng Anh (Thông tư 32/2018/TT-BGDĐT) từ cổng thông tin Bộ GD&ĐT — để đối chiếu "Yêu cầu cần đạt".'
    ],
    chuDe: [vatLi, hoaHoc, sinhHoc, toan, tiengAnh],
    danhMuc: danhMuc
  };
})();
