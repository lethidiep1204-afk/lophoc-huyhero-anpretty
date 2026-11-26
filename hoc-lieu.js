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
        'Electron xếp thành từng lớp, từ trong ra ngoài: lớp thứ nhất (trong cùng) tối đa <b>2</b> electron, lớp thứ hai tối đa <b>8</b> electron. Electron ở lớp ngoài cùng quyết định tính chất hoá học của nguyên tố. (Trong các bài ở đây, số proton không quá 18 nên lớp thứ ba chứa không quá 8 electron.)'
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
        de: 'Nguyên tử nhôm (aluminium) có <b>13 proton</b> và <b>14 neutron</b>. Khối lượng nguyên tử aluminium xấp xỉ bao nhiêu amu?', donVi: 'amu', dapAn: 27,
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
          goiY: ['Đọc xu hướng của bảng.'], viSaoDung: 'Gần đèn → nhiều bọt → quang hợp mạnh hơn.', loiGiai: 'Ý 1, 2 đúng. Lưu ý: SGK cũng nêu ánh sáng quá mạnh có thể làm giảm hiệu quả quang hợp, nên kết luận chỉ đúng trong phạm vi số liệu của thí nghiệm.', giangLai: 'Nhìn bảng: khoảng cách tăng thì số bọt giảm.', nguon: tuSoan(SGK_KHTN7 + ' — ảnh hưởng của ánh sáng đến quang hợp.', { soLieu: GIA_DINH }), kiemTra: kt()
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

  /* ==================================================================
     ĐỢT 1 — TOÁN 7: SỐ THỰC; TỈ LỆ THỨC VÀ ĐẠI LƯỢNG TỈ LỆ;
     BIỂU THỨC ĐẠI SỐ VÀ ĐA THỨC MỘT BIẾN  (soạn ngày 26/11/2026)
     ================================================================== */
  const SGK_TOAN7_T2 = 'SGK Toán 7, tập hai, bộ "Kết nối tri thức với cuộc sống" (NXB Giáo dục Việt Nam)';
  const soThuc = {
    id: 'toan7-so-thuc', lop: 7, mon: 'toan', phanMon: 'Số và Đại số', ten: 'Số thực',
    kienThucTruoc: ['Số hữu tỉ và các phép tính', 'Số thập phân hữu hạn', 'Bình phương của một số'],
    yeuCauCanDat: ['Nhận biết được số vô tỉ, số thực; số thập phân vô hạn tuần hoàn và không tuần hoàn.', 'Tính được căn bậc hai số học của số chính phương; dùng máy tính cầm tay tính căn bậc hai.', 'Nhận biết được số đối, giá trị tuyệt đối của số thực.', 'Làm tròn số theo yêu cầu.'],
    bai: {
      mucTieu: ['phân biệt số hữu tỉ và số vô tỉ;', 'tính căn bậc hai số học và không mắc lỗi "căn của tổng";', 'tính giá trị tuyệt đối của số thực;', 'làm tròn kết quả đúng hàng được yêu cầu.'],
      khoiDong: { hoi: 'Một hình vuông có diện tích 2 m². Cạnh của nó dài bao nhiêu mét? Em có tìm được một phân số nào bình phương lên đúng bằng 2 không?', goiY: 'Cạnh dài √2 m ≈ 1,414… m. Không có phân số nào bình phương bằng 2: √2 là một số vô tỉ.' },
      trongTam: [
        'Số hữu tỉ viết được dưới dạng số thập phân hữu hạn hoặc <b>vô hạn tuần hoàn</b> (ví dụ ' + F(1, 3) + ' = 0,(3)). Số thập phân <b>vô hạn không tuần hoàn</b> là <b>số vô tỉ</b> (ví dụ √2 = 1,41421…, π).',
        'Số hữu tỉ và số vô tỉ gọi chung là <b>số thực</b>. Tập hợp số thực kí hiệu là <b>ℝ</b>.',
        '<b>Căn bậc hai số học</b> của a ≥ 0 là số không âm √a sao cho (√a)² = a. Ví dụ √49 = 7. Lưu ý: √(a + b) <b>khác</b> √a + √b.',
        '<b>Giá trị tuyệt đối</b> |x| là khoảng cách từ x đến 0 trên trục số: |x| = x nếu x ≥ 0; |x| = −x nếu x &lt; 0. Luôn có |x| ≥ 0.',
        '<b>Làm tròn</b> đến một hàng: nhìn chữ số ngay bên phải hàng đó; nếu ≥ 5 thì cộng 1 vào hàng đó, nếu &lt; 5 thì giữ nguyên, rồi bỏ các chữ số phía sau.'
      ],
      viDu: { de: 'Tính √64 + |−2,5| và làm tròn √10 đến hàng phần mười.', loiGiai: '√64 + |−2,5| = 8 + 2,5 = <b>10,5</b>.<br>√10 ≈ 3,162… Chữ số hàng phần trăm là 6 ≥ 5 nên làm tròn được <b>3,2</b>.' },
      nguon: tuSoan(SGK_TOAN7 + ', tập một — chương về Số thực (số vô tỉ, căn bậc hai số học, số thực, giá trị tuyệt đối, làm tròn).'),
      hoiDap: [
        { tu: ['vo ti', 'so thuc', 'huu ti'], tl: 'Số vô tỉ là số thập phân vô hạn không tuần hoàn (như √2, π). Số hữu tỉ và số vô tỉ hợp thành số thực.' },
        { tu: ['can', 'can bac hai'], tl: '√a (a ≥ 0) là số không âm mà bình phương bằng a: √49 = 7. Không được tách √(a + b) thành √a + √b.' },
        { tu: ['tuyet doi'], tl: '|x| là khoảng cách từ x đến 0, nên luôn không âm: |−3,5| = 3,5; |2| = 2.' },
        { tu: ['lam tron'], tl: 'Nhìn chữ số ngay sau hàng cần làm tròn: từ 5 trở lên thì cộng 1, dưới 5 thì giữ nguyên.' }
      ]
    },
    cauHoi: [
      {
        id: 'T7B-01', muc: 'co-ban', liDoMuc: 'Nhận biết số vô tỉ.', loai: 'chon1', de: 'Số nào sau đây là <b>số vô tỉ</b>?',
        phuongAn: [{ t: '0,(3)', phanHoi: '0,(3) là số thập phân vô hạn <b>tuần hoàn</b>, bằng 1/3 — số hữu tỉ.' }, { t: '√9', phanHoi: '√9 = 3, là số nguyên nên là số hữu tỉ.' }, { t: '√2', dung: true }, { t: F('−7', 4), phanHoi: 'Đây là phân số nên là số hữu tỉ.' }],
        goiY: ['Thử tính hoặc đổi từng số: số nào không viết được thành phân số?'], viSaoDung: '√2 = 1,41421… là số thập phân vô hạn không tuần hoàn.', loiGiai: '<b>√2</b> là số vô tỉ. 0,(3) = 1/3; √9 = 3; −7/4 đều là số hữu tỉ.',
        giangLai: 'Đừng nhìn dấu căn mà kết luận ngay: √9 có dấu căn nhưng bằng 3. Hãy tính thử: nếu ra số "đẹp" (nguyên, phân số) thì là hữu tỉ.', tienBo: 'Em đã biết tính thử trước khi kết luận số vô tỉ.',
        nguon: tuSoan(SGK_TOAN7 + ', tập một — khái niệm số vô tỉ.'), kiemTra: kt(),
        tuongTu: { id: 'T7B-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Số nào sau đây là <b>số hữu tỉ</b>?', phuongAn: [{ t: '√3', phanHoi: '√3 = 1,732… vô hạn không tuần hoàn.' }, { t: 'π', phanHoi: 'π là số vô tỉ.' }, { t: '√25', dung: true }, { t: '0,1010010001… (số chữ số 0 tăng dần)', phanHoi: 'Không lặp lại theo chu kì nên là số vô tỉ.' }], goiY: ['Tính √25.'], viSaoDung: '√25 = 5.', loiGiai: '<b>√25</b> = 5.', giangLai: 'Tính thử từng số.', nguon: tuSoan(SGK_TOAN7 + ', tập một — số hữu tỉ, số vô tỉ.'), kiemTra: kt() }
      },
      {
        id: 'T7B-02', muc: 'co-ban', liDoMuc: 'Tính trực tiếp căn bậc hai số học của số chính phương.', loai: 'so', de: 'Tính: √49 − √16.', dapAn: 3,
        loi: [{ gt: 5.745, saiSo: 0.01, nhan: 'Lỗi quy tắc căn', phanHoi: 'Em đã tính √(49 − 16) = √33. Đề yêu cầu tính từng căn rồi mới trừ: √49 − √16.' }, { gt: 33, nhan: 'Chưa lấy căn', phanHoi: 'Em đã lấy 49 − 16. Cần tính √49 và √16 trước.' }, { gt: -3, nhan: 'Lỗi dấu', phanHoi: '√49 lớn hơn √16 nên hiệu dương.' }],
        buoc: { hoi: '√49 bằng bao nhiêu?', dapAn: 7, dung: 'Đúng. Còn √16 = ?', sai: 'Số nào bình phương bằng 49?' },
        goiY: ['Số nào bình phương bằng 49? Bằng 16?'], viSaoDung: '√49 = 7, √16 = 4, 7 − 4 = 3.', loiGiai: '√49 − √16 = 7 − 4 = <b>3</b>.', giangLai: '√49 hỏi: "số không âm nào nhân với chính nó được 49?" → 7 (vì 7 · 7 = 49).', tienBo: 'Em đã tính từng căn trước, không gộp dưới một dấu căn.',
        nguon: tuSoan(SGK_TOAN7 + ', tập một — căn bậc hai số học.'), kiemTra: kt(),
        tuongTu: { id: 'T7B-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính: √100 − √64.', dapAn: 2, loi: [{ gt: 6, nhan: 'Lỗi quy tắc căn', phanHoi: 'Em đã tính √(100 − 64) = √36. Hãy tính từng căn.' }, { gt: 36, nhan: 'Chưa lấy căn', phanHoi: 'Cần lấy căn từng số.' }], buoc: { hoi: '√64 = ?', dapAn: 8, dung: 'Đúng.', sai: '8 · 8 = 64.' }, goiY: ['√100 = 10.'], viSaoDung: '10 − 8 = 2.', loiGiai: '<b>2</b>.', giangLai: 'Tìm số nhân chính nó.', nguon: tuSoan(SGK_TOAN7 + ', tập một — căn bậc hai số học.'), kiemTra: kt() }
      },
      {
        id: 'T7B-03', muc: 'van-dung', liDoMuc: 'Kết hợp giá trị tuyệt đối với cộng trừ, chú ý dấu trừ trước |…|.', loai: 'so', de: 'Tính: |−3,5| + |2,5| − |−4|.', dapAn: 2,
        loi: [{ gt: -5, nhan: 'Quên giá trị tuyệt đối', phanHoi: 'Em đã bỏ dấu |…| mà giữ nguyên số âm. |−3,5| = 3,5 và |−4| = 4.' }, { gt: 10, nhan: 'Lỗi dấu phép tính', phanHoi: '|−4| = 4, nhưng phía trước là dấu <b>trừ</b>: … − 4.' }, { gt: 3, nhan: 'Quên giá trị tuyệt đối', phanHoi: 'Em đã tính −3,5 + 2,5 − (−4). Phải lấy giá trị tuyệt đối trước: 3,5 + 2,5 − 4.' }],
        buoc: { hoi: '|−3,5| bằng bao nhiêu?', dapAn: 3.5, saiSo: 0.001, dung: 'Đúng: 3,5. Tương tự |−4| = 4.', sai: 'Giá trị tuyệt đối là khoảng cách đến 0, luôn không âm.' },
        goiY: ['Tính từng giá trị tuyệt đối trước.', '3,5 + 2,5 − 4.'], viSaoDung: '3,5 + 2,5 − 4 = 2.', loiGiai: '|−3,5| + |2,5| − |−4| = 3,5 + 2,5 − 4 = <b>2</b>.', giangLai: 'Coi |…| như "khoảng cách": −3,5 cách 0 là 3,5 bước; −4 cách 0 là 4 bước. Thay các khoảng cách vào rồi cộng trừ như thường.', tienBo: 'Em đã tính giá trị tuyệt đối trước và giữ đúng dấu phép tính.',
        nguon: tuSoan(SGK_TOAN7 + ', tập một — giá trị tuyệt đối của một số thực.'), kiemTra: kt(),
        tuongTu: { id: 'T7B-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính: |−4,2| + |−1,8| − |3|.', dapAn: 3, loi: [{ gt: -9, nhan: 'Quên giá trị tuyệt đối', phanHoi: 'Phải lấy |−4,2| = 4,2 và |−1,8| = 1,8.' }, { gt: 9, nhan: 'Lỗi dấu phép tính', phanHoi: 'Trước |3| là dấu trừ.' }], buoc: { hoi: '|−4,2| + |−1,8| = ?', dapAn: 6, saiSo: 0.001, dung: 'Đúng: 6. Còn trừ 3.', sai: '4,2 + 1,8 = ?' }, goiY: ['4,2 + 1,8 − 3.'], viSaoDung: '6 − 3 = 3.', loiGiai: '<b>3</b>.', giangLai: 'Thay khoảng cách vào.', nguon: tuSoan(SGK_TOAN7 + ', tập một — giá trị tuyệt đối.'), kiemTra: kt() }
      },
      {
        id: 'T7B-04', muc: 'van-dung', liDoMuc: 'Hai bước: nhận ra cạnh = √diện tích, rồi làm tròn đúng hàng.', loai: 'so',
        de: 'Một mảnh vườn hình vuông có diện tích <b>50 m²</b>. Tính độ dài cạnh mảnh vườn, <b>làm tròn đến hàng phần mười</b>. <span class="note">Có thể dùng máy tính cầm tay.</span>', donVi: 'm', dapAn: 7.1, saiSo: 0.001,
        loi: [{ gt: 25, nhan: 'Lỗi công thức', phanHoi: 'Em đã lấy 50 : 2. Diện tích hình vuông = cạnh × cạnh, nên cạnh = √50.' }, { gt: 12.5, nhan: 'Lỗi công thức', phanHoi: 'Em đã lấy 50 : 4 (nhầm với chu vi). Cạnh = √diện tích.' }, { gt: 7.07, saiSo: 0.001, nhan: 'Lỗi làm tròn', phanHoi: '7,07 là làm tròn đến hàng phần <b>trăm</b>. Đề yêu cầu hàng phần <b>mười</b>.' }, { gt: 7, nhan: 'Lỗi làm tròn', phanHoi: '7 là làm tròn đến hàng đơn vị. Đề yêu cầu hàng phần mười (một chữ số sau dấu phẩy).' }],
        buoc: { hoi: 'Bấm máy tính: √50 ≈ ? (ghi 3 chữ số sau dấu phẩy)', dapAn: 7.071, saiSo: 0.0015, dung: 'Đúng: 7,071… Chữ số hàng phần trăm là 7 ≥ 5, nên hàng phần mười tăng thêm 1.', sai: 'Cạnh = √50. Dùng máy tính để bấm.' },
        goiY: ['Diện tích hình vuông = cạnh · cạnh.', '√50 ≈ 7,071. Nhìn chữ số hàng phần trăm.'], viSaoDung: '√50 ≈ 7,07… → làm tròn đến hàng phần mười được 7,1 m.', loiGiai: 'Cạnh = √50 ≈ 7,071… (m). Chữ số hàng phần trăm là 7 ≥ 5 nên làm tròn được <b>7,1 m</b>.',
        giangLai: 'Thử đoán: 7 · 7 = 49 (gần 50), 8 · 8 = 64. Vậy cạnh nằm giữa 7 và 8, gần 7. Máy tính cho 7,071… "Hàng phần mười" là chữ số đầu tiên sau dấu phẩy.', tienBo: 'Em đã dùng đúng căn bậc hai và làm tròn đúng hàng.',
        nguon: tuSoan(SGK_TOAN7 + ', tập một — căn bậc hai số học; làm tròn số (cần đối chiếu cách SGK diễn đạt yêu cầu làm tròn).', { soLieu: GIA_DINH }), kiemTra: kt(),
        tuongTu: { id: 'T7B-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một tấm thảm hình vuông có diện tích <b>20 m²</b>. Tính độ dài cạnh, <b>làm tròn đến hàng phần mười</b>.', donVi: 'm', dapAn: 4.5, saiSo: 0.001, loi: [{ gt: 10, nhan: 'Lỗi công thức', phanHoi: 'Cạnh = √20, không phải 20 : 2.' }, { gt: 5, nhan: 'Lỗi công thức', phanHoi: 'Cạnh = √20, không phải 20 : 4.' }, { gt: 4.47, saiSo: 0.001, nhan: 'Lỗi làm tròn', phanHoi: 'Đó là hàng phần trăm.' }, { gt: 4.4, saiSo: 0.001, nhan: 'Lỗi làm tròn', phanHoi: '√20 ≈ 4,472: chữ số hàng phần trăm là 7 ≥ 5 nên phải tăng lên 4,5.' }], buoc: { hoi: '√20 ≈ ? (3 chữ số sau dấu phẩy)', dapAn: 4.472, saiSo: 0.0015, dung: 'Đúng.', sai: 'Bấm √20.' }, goiY: ['√20 ≈ 4,472.'], viSaoDung: '4,47… → 4,5.', loiGiai: '<b>4,5 m</b>.', giangLai: 'Nhìn chữ số thứ hai sau dấu phẩy.', nguon: tuSoan(SGK_TOAN7 + ', tập một — làm tròn số.', { soLieu: GIA_DINH }), kiemTra: kt() }
      },
      {
        id: 'T7B-05', muc: 'nang-cao', liDoMuc: 'Đánh giá nhiều khẳng định, cần phản ví dụ.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các khẳng định đúng.',
        phuongAn: [{ t: 'Mọi số nguyên đều là số thực.', dung: true }, { t: 'Tổng của hai số vô tỉ luôn là số vô tỉ.', phanHoi: 'Phản ví dụ: √2 + (−√2) = 0 là số hữu tỉ.' }, { t: 'Số đối của √3 là −√3.', dung: true }, { t: '|x| ≥ 0 với mọi số thực x.', dung: true }, { t: '0,1010010001… (số chữ số 0 tăng dần) là số hữu tỉ.', phanHoi: 'Dãy chữ số không lặp theo chu kì nên đây là số vô tỉ.' }],
        goiY: ['Với câu có chữ "luôn", thử tìm một phản ví dụ.'], viSaoDung: 'Ý 1, 3, 4 đúng; ý 2 có phản ví dụ √2 + (−√2) = 0; ý 5 là số vô tỉ.', loiGiai: 'Đáp án: ý 1, 3, 4.', giangLai: 'Muốn bác bỏ "luôn luôn", chỉ cần một ví dụ sai. Với số vô tỉ, hãy thử ghép √2 với −√2.', tienBo: 'Em đã dùng phản ví dụ để kiểm tra khẳng định.',
        nguon: tuSoan(SGK_TOAN7 + ', tập một — số thực, số đối, giá trị tuyệt đối.'), kiemTra: kt(),
        tuongTu: { id: 'T7B-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các khẳng định đúng.', phuongAn: [{ t: 'Mọi số hữu tỉ đều là số thực.', dung: true }, { t: 'Tích của hai số vô tỉ luôn là số vô tỉ.', phanHoi: 'Phản ví dụ: √2 · √2 = 2.' }, { t: '|−√5| = √5.', dung: true }, { t: '√4 là số vô tỉ.', phanHoi: '√4 = 2.' }], goiY: ['Thử √2 · √2.'], viSaoDung: 'Ý 1, 3 đúng.', loiGiai: 'Ý 1, 3.', giangLai: 'Tìm phản ví dụ.', nguon: tuSoan(SGK_TOAN7 + ', tập một — số thực.'), kiemTra: kt() }
      },
      {
        id: 'T7B-06', muc: 'nang-cao', liDoMuc: 'Phát hiện sai lầm phổ biến √(a + b) = √a + √b và tính lại.', loai: 'so',
        de: 'Bạn An viết: √(16 + 9) = √16 + √9 = 4 + 3 = 7.<br>Lời giải có chỗ sai. Em hãy tính <b>đúng</b> √(16 + 9).', dapAn: 5,
        loi: [{ gt: 7, nhan: 'Lặp lại lỗi của bạn', phanHoi: 'Không được tách căn của một tổng: √(16 + 9) ≠ √16 + √9. Hãy cộng trong ngoặc trước.' }, { gt: 25, nhan: 'Chưa lấy căn', phanHoi: '16 + 9 = 25, còn phải lấy căn.' }],
        buoc: { hoi: 'Trong ngoặc, 16 + 9 = ?', dapAn: 25, dung: 'Đúng. Vậy √25 = ?', sai: 'Cộng trong ngoặc trước.' },
        goiY: ['Làm trong ngoặc (dưới dấu căn) trước.'], viSaoDung: '√(16 + 9) = √25 = 5, khác 7.', loiGiai: '√(16 + 9) = √25 = <b>5</b>. An sai vì √(a + b) ≠ √a + √b (ví dụ này cho 5 ≠ 7).',
        giangLai: 'Nghĩ hình học: tam giác vuông có hai cạnh 3 và 4 thì cạnh huyền 5, không phải 3 + 4 = 7. Căn của tổng không bằng tổng các căn.', tienBo: 'Em đã phát hiện được lỗi "tách căn" và tự tính lại đúng.',
        nguon: tuSoan(SGK_TOAN7 + ', tập một — căn bậc hai số học.'), kiemTra: kt(),
        tuongTu: { id: 'T7B-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Bạn Bình viết: √(36 + 64) = √36 + √64 = 14. Tính <b>đúng</b> √(36 + 64).', dapAn: 10, loi: [{ gt: 14, nhan: 'Lặp lại lỗi của bạn', phanHoi: 'Không tách căn của một tổng.' }, { gt: 100, nhan: 'Chưa lấy căn', phanHoi: 'Còn lấy căn.' }], buoc: { hoi: '36 + 64 = ?', dapAn: 100, dung: 'Đúng.', sai: 'Cộng trước.' }, goiY: ['Cộng trước, lấy căn sau.'], viSaoDung: '√100 = 10.', loiGiai: '<b>10</b>.', giangLai: 'Căn của tổng ≠ tổng các căn.', nguon: tuSoan(SGK_TOAN7 + ', tập một — căn bậc hai số học.'), kiemTra: kt() }
      }
    ]
  };

  const tiLe = {
    id: 'toan7-ti-le-thuc', lop: 7, mon: 'toan', phanMon: 'Số và Đại số', ten: 'Tỉ lệ thức và đại lượng tỉ lệ',
    kienThucTruoc: ['Phân số bằng nhau', 'Tỉ số của hai số', 'Phép nhân, chia số hữu tỉ'],
    yeuCauCanDat: ['Nhận biết tỉ lệ thức và tính chất; tìm số chưa biết trong tỉ lệ thức.', 'Vận dụng tính chất dãy tỉ số bằng nhau.', 'Nhận biết đại lượng tỉ lệ thuận, tỉ lệ nghịch; giải bài toán thực tế.'],
    bai: {
      mucTieu: ['tìm số chưa biết trong tỉ lệ thức bằng tích chéo;', 'phân biệt tỉ lệ thuận với tỉ lệ nghịch;', 'giải bài toán mua bán, năng suất;', 'chia một số thành các phần tỉ lệ cho trước.'],
      khoiDong: { hoi: 'Mua 2 kg cam hết 50 nghìn đồng. Mua 4 kg hết bao nhiêu? Còn nếu 2 người ăn hết hộp bánh trong 4 ngày thì 4 người ăn hết trong mấy ngày? Hai bài khác nhau ở đâu?', goiY: 'Bài cam: số kg gấp đôi → tiền gấp đôi (100 nghìn) — tỉ lệ thuận. Bài bánh: số người gấp đôi → số ngày giảm một nửa (2 ngày) — tỉ lệ nghịch.' },
      trongTam: [
        '<b>Tỉ lệ thức</b> là đẳng thức của hai tỉ số: ' + F('a', 'b') + ' = ' + F('c', 'd') + '. Tính chất: <b>a · d = b · c</b> (tích chéo).',
        '<b>Dãy tỉ số bằng nhau:</b> ' + F('a', 'b') + ' = ' + F('c', 'd') + ' = ' + F('a + c', 'b + d') + ' (khi các mẫu khác 0).',
        '<b>Tỉ lệ thuận:</b> y = k · x (k ≠ 0). x gấp bao nhiêu lần thì y gấp bấy nhiêu lần; tỉ số ' + F('y', 'x') + ' không đổi.',
        '<b>Tỉ lệ nghịch:</b> y = ' + F('a', 'x') + ' hay x · y = a (a ≠ 0). x gấp bao nhiêu lần thì y giảm bấy nhiêu lần; tích x · y không đổi.',
        '<b>Chia theo tỉ lệ</b> m : n : p: tính tổng số phần, tìm giá trị một phần, rồi nhân với số phần của mỗi đối tượng.'
      ],
      viDu: { de: 'Tìm x biết ' + F('x', 3) + ' = ' + F(10, 6) + '.', loiGiai: 'Tích chéo: x · 6 = 3 · 10 = 30, nên x = 30 : 6 = <b>5</b>.' },
      nguon: tuSoan(SGK_TOAN7_T2 + ' — chương về Tỉ lệ thức và đại lượng tỉ lệ.'),
      hoiDap: [
        { tu: ['ti le thuc', 'tich cheo', 'tim x'], tl: 'Trong tỉ lệ thức a/b = c/d, ta có a · d = b · c. Dùng tích chéo để tìm số chưa biết.' },
        { tu: ['ti le thuan'], tl: 'Tỉ lệ thuận: y = k · x; x tăng mấy lần thì y tăng bấy nhiêu lần; y : x không đổi.' },
        { tu: ['ti le nghich'], tl: 'Tỉ lệ nghịch: x · y = a không đổi; x tăng mấy lần thì y giảm bấy nhiêu lần.' },
        { tu: ['chia', 'phan'], tl: 'Chia theo tỉ lệ: cộng số phần → tìm một phần → nhân với số phần mỗi bên.' }
      ]
    },
    cauHoi: [
      {
        id: 'T7C-01', muc: 'co-ban', liDoMuc: 'Áp dụng trực tiếp tính chất tích chéo.', loai: 'so', de: 'Tìm x biết ' + F('x', 4) + ' = ' + F(6, 8) + '.', dapAn: 3,
        loi: [{ gt: 12, nhan: 'Đặt nhầm vị trí', phanHoi: 'Em đã tính 8 · 6 : 4. Tích chéo đúng là x · 8 = 4 · 6.' }, { gt: 5.333, saiSo: 0.01, nhan: 'Đặt nhầm vị trí', phanHoi: 'Em đã tính 4 · 8 : 6. Tích chéo đúng là x · 8 = 4 · 6.' }, { gt: 24, nhan: 'Thiếu bước', phanHoi: '24 là 4 · 6 = x · 8. Còn chia cho 8.' }],
        buoc: { hoi: 'Tích chéo: x · 8 = 4 · 6 = ?', dapAn: 24, dung: 'Đúng: x · 8 = 24, vậy x = ?', sai: '4 · 6 = ?' },
        goiY: ['Nhân chéo: x · 8 = 4 · 6.'], viSaoDung: 'x · 8 = 24 → x = 3. Kiểm tra: 3/4 = 6/8 ✓.', loiGiai: 'x · 8 = 4 · 6 = 24 ⇒ x = <b>3</b>.', giangLai: 'Cách khác: 6/8 rút gọn được 3/4. Vậy x/4 = 3/4 nên x = 3.', tienBo: 'Em đã nhân chéo đúng cặp số.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — tỉ lệ thức và tính chất.'), kiemTra: kt(),
        tuongTu: { id: 'T7C-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tìm x biết ' + F('x', 6) + ' = ' + F(10, 15) + '.', dapAn: 4, loi: [{ gt: 25, nhan: 'Đặt nhầm vị trí', phanHoi: 'x · 15 = 6 · 10.' }, { gt: 9, nhan: 'Đặt nhầm vị trí', phanHoi: 'x · 15 = 6 · 10.' }, { gt: 60, nhan: 'Thiếu bước', phanHoi: 'Còn chia cho 15.' }], buoc: { hoi: '6 · 10 = ?', dapAn: 60, dung: 'Đúng.', sai: 'Nhân.' }, goiY: ['10/15 = 2/3.'], viSaoDung: 'x = 60 : 15 = 4.', loiGiai: '<b>4</b>.', giangLai: 'Rút gọn 10/15 = 2/3 = 4/6.', nguon: tuSoan(SGK_TOAN7_T2 + ' — tỉ lệ thức.'), kiemTra: kt() }
      },
      {
        id: 'T7C-02', muc: 'co-ban', liDoMuc: 'Nhận biết công thức tỉ lệ thuận.', loai: 'chon1', de: 'Cho y tỉ lệ thuận với x theo hệ số tỉ lệ 3. Khi x = 5 thì y bằng bao nhiêu?',
        phuongAn: [{ t: '15', dung: true }, { t: F(5, 3), phanHoi: 'Đây là x : 3. Tỉ lệ thuận: y = k · x.' }, { t: '8', phanHoi: 'Em đã cộng 3 + 5. Tỉ lệ thuận là phép nhân.' }, { t: F(3, 5), phanHoi: 'Đây là 3 : x — công thức của tỉ lệ nghịch.' }],
        goiY: ['Công thức: y = k · x.'], viSaoDung: 'y = 3 · 5 = 15.', loiGiai: 'y = k · x = 3 · 5 = <b>15</b>.', giangLai: 'Ví dụ: mỗi quyển vở 3 nghìn đồng (k = 3). Mua 5 quyển hết 3 · 5 = 15 nghìn.', tienBo: 'Em đã dùng đúng công thức tỉ lệ thuận.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — đại lượng tỉ lệ thuận.'), kiemTra: kt(),
        tuongTu: { id: 'T7C-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, tỉ lệ nghịch.', loai: 'chon1', de: 'Cho y tỉ lệ nghịch với x theo hệ số tỉ lệ 12. Khi x = 4 thì y bằng bao nhiêu?', phuongAn: [{ t: '3', dung: true }, { t: '48', phanHoi: '48 = 12 · 4 là công thức tỉ lệ thuận.' }, { t: '16', phanHoi: 'Em đã cộng.' }, { t: F(1, 3), phanHoi: 'Đây là 4 : 12. Tỉ lệ nghịch: y = a : x.' }], goiY: ['y = a : x.'], viSaoDung: '12 : 4 = 3.', loiGiai: '<b>3</b>.', giangLai: 'x · y = 12.', nguon: tuSoan(SGK_TOAN7_T2 + ' — đại lượng tỉ lệ nghịch.'), kiemTra: kt() }
      },
      {
        id: 'T7C-03', muc: 'van-dung', liDoMuc: 'Nhận ra quan hệ tỉ lệ thuận trong tình huống mua bán, hai bước.', loai: 'so', de: 'Mua 4 quyển vở cùng loại hết 36 nghìn đồng. Hỏi mua 7 quyển như thế hết bao nhiêu nghìn đồng?', donVi: 'nghìn đồng', dapAn: 63,
        loi: [{ gt: 9, nhan: 'Thiếu bước', phanHoi: '9 nghìn là giá một quyển. Còn nhân với 7.' }, { gt: 20.571, saiSo: 0.01, nhan: 'Nhầm tỉ lệ nghịch', phanHoi: 'Mua nhiều vở hơn thì tốn nhiều tiền hơn — đây là tỉ lệ <b>thuận</b>, không phải nghịch.' }, { gt: 39, nhan: 'Lỗi cách tính', phanHoi: 'Em đã cộng thêm 3 nghìn. Hãy tìm giá một quyển trước.' }],
        buoc: { hoi: 'Giá một quyển vở là bao nhiêu nghìn đồng?', dapAn: 9, dung: 'Đúng: 36 : 4 = 9. Vậy 7 quyển = ?', sai: '36 : 4 = ?' },
        goiY: ['Số vở và số tiền là hai đại lượng tỉ lệ thuận.', 'Tìm giá một quyển trước.'], viSaoDung: '36 : 4 = 9; 9 · 7 = 63.', loiGiai: 'Giá một quyển: 36 : 4 = 9 (nghìn đồng). 7 quyển: 9 · 7 = <b>63</b> nghìn đồng.<br>Cách khác: ' + F('x', 7) + ' = ' + F(36, 4) + ' ⇒ x = 63.',
        giangLai: 'Hỏi: mua nhiều hơn thì tiền nhiều hơn hay ít hơn? Nhiều hơn → tỉ lệ thuận → tìm "một đơn vị" rồi nhân lên.', tienBo: 'Em đã nhận ra đúng quan hệ tỉ lệ thuận.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — bài toán về đại lượng tỉ lệ thuận.', { soLieu: GIA_DINH }), kiemTra: kt(),
        tuongTu: { id: 'T7C-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Mua 5 kg gạo hết 90 nghìn đồng. Mua 8 kg gạo cùng loại hết bao nhiêu nghìn đồng?', donVi: 'nghìn đồng', dapAn: 144, loi: [{ gt: 18, nhan: 'Thiếu bước', phanHoi: 'Đó là giá 1 kg.' }, { gt: 56.25, saiSo: 0.01, nhan: 'Nhầm tỉ lệ nghịch', phanHoi: 'Đây là tỉ lệ thuận.' }], buoc: { hoi: 'Giá 1 kg?', dapAn: 18, dung: 'Đúng.', sai: '90 : 5.' }, goiY: ['90 : 5 = 18.'], viSaoDung: '18 · 8 = 144.', loiGiai: '<b>144</b> nghìn đồng.', giangLai: 'Tìm giá 1 kg.', nguon: tuSoan(SGK_TOAN7_T2 + ' — tỉ lệ thuận.', { soLieu: GIA_DINH }), kiemTra: kt() }
      },
      {
        id: 'T7C-04', muc: 'van-dung', liDoMuc: 'Nhận ra quan hệ tỉ lệ nghịch (năng suất), dễ nhầm thành tỉ lệ thuận.', loai: 'so', de: '4 người làm xong một công việc trong 6 ngày. Hỏi 8 người (năng suất mỗi người như nhau) làm xong công việc đó trong bao nhiêu ngày?', donVi: 'ngày', dapAn: 3,
        loi: [{ gt: 12, nhan: 'Nhầm tỉ lệ thuận', phanHoi: 'Nhiều người hơn thì làm <b>nhanh hơn</b>, số ngày phải giảm. Đây là tỉ lệ nghịch.' }, { gt: 24, nhan: 'Thiếu bước', phanHoi: '24 là tổng số "ngày công" (4 · 6). Còn chia cho 8 người.' }, { gt: 2, nhan: 'Lỗi tính', phanHoi: 'Kiểm tra lại: 4 · 6 = 24; 24 : 8 = ?' }],
        buoc: { hoi: 'Nếu chỉ 1 người làm thì cần bao nhiêu ngày?', dapAn: 24, dung: 'Đúng: 24 ngày. 8 người thì chia đều: 24 : 8 = ?', sai: '4 người mất 6 ngày → 1 người mất 4 · 6 ngày.' },
        goiY: ['Số người tăng thì số ngày tăng hay giảm?', 'Số người · số ngày = không đổi.'], viSaoDung: '4 · 6 = 8 · x ⇒ x = 3.', loiGiai: 'Số người và số ngày tỉ lệ nghịch: 4 · 6 = 8 · x ⇒ x = 24 : 8 = <b>3</b> ngày.',
        giangLai: 'Nghĩ về "ngày công": việc này cần tổng cộng 4 · 6 = 24 ngày công. 8 người cùng làm thì mỗi ngày được 8 ngày công, cần 24 : 8 = 3 ngày.', tienBo: 'Em đã nhận ra đây là tỉ lệ nghịch.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — bài toán về đại lượng tỉ lệ nghịch.', { soLieu: GIA_DINH }), kiemTra: kt(),
        tuongTu: { id: 'T7C-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: '6 máy cày (như nhau) cày xong một cánh đồng trong 10 ngày. Hỏi 15 máy như thế cày xong trong bao nhiêu ngày?', donVi: 'ngày', dapAn: 4, loi: [{ gt: 25, nhan: 'Nhầm tỉ lệ thuận', phanHoi: 'Nhiều máy hơn thì xong nhanh hơn.' }, { gt: 60, nhan: 'Thiếu bước', phanHoi: '60 là tổng "ngày máy". Chia cho 15.' }], buoc: { hoi: '1 máy cần bao nhiêu ngày?', dapAn: 60, dung: 'Đúng.', sai: '6 · 10.' }, goiY: ['6 · 10 = 15 · x.'], viSaoDung: '60 : 15 = 4.', loiGiai: '<b>4</b> ngày.', giangLai: 'Ngày công.', nguon: tuSoan(SGK_TOAN7_T2 + ' — tỉ lệ nghịch.', { soLieu: GIA_DINH }), kiemTra: kt() }
      },
      {
        id: 'T7C-05', muc: 'nang-cao', liDoMuc: 'Chia theo tỉ lệ nhiều bước (dãy tỉ số bằng nhau).', loai: 'so', de: 'Ba lớp 7A, 7B, 7C quyên góp được tất cả 120 quyển sách. Số sách của ba lớp tỉ lệ với 3; 4; 5. Hỏi lớp 7C quyên góp được bao nhiêu quyển?', donVi: 'quyển', dapAn: 50,
        loi: [{ gt: 40, nhan: 'Nhầm đối tượng', phanHoi: '40 là số sách lớp 7B (4 phần). Lớp 7C ứng với 5 phần.' }, { gt: 30, nhan: 'Nhầm đối tượng', phanHoi: '30 là số sách lớp 7A.' }, { gt: 10, nhan: 'Thiếu bước', phanHoi: '10 là giá trị <b>một phần</b>. Lớp 7C có 5 phần.' }, { gt: 24, nhan: 'Lỗi cách chia', phanHoi: 'Em đã lấy 120 : 5. Phải chia cho <b>tổng số phần</b> 3 + 4 + 5 = 12.' }],
        buoc: { hoi: 'Tổng số phần là 3 + 4 + 5 = 12. Mỗi phần ứng với bao nhiêu quyển?', dapAn: 10, dung: 'Đúng: 120 : 12 = 10. Lớp 7C có 5 phần → ?', sai: '120 : 12 = ?' },
        goiY: ['Gọi số sách là a, b, c: a/3 = b/4 = c/5.', 'Dùng dãy tỉ số bằng nhau: (a + b + c)/(3 + 4 + 5) = 120/12.'], viSaoDung: 'Một phần = 120 : 12 = 10; 7C = 5 · 10 = 50.',
        loiGiai: 'Gọi số sách của 7A, 7B, 7C là a, b, c. Ta có ' + F('a', 3) + ' = ' + F('b', 4) + ' = ' + F('c', 5) + ' = ' + F('a + b + c', '3 + 4 + 5') + ' = ' + F(120, 12) + ' = 10.<br>Vậy c = 5 · 10 = <b>50</b> quyển (a = 30, b = 40; kiểm tra 30 + 40 + 50 = 120 ✓).',
        giangLai: 'Vẽ sơ đồ: 7A ■■■, 7B ■■■■, 7C ■■■■■ — tổng 12 ô bằng nhau chứa 120 quyển. Mỗi ô 10 quyển. 7C có 5 ô.', tienBo: 'Em đã chia theo tổng số phần và chọn đúng đối tượng.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — tính chất dãy tỉ số bằng nhau; bài toán chia tỉ lệ.', { soLieu: GIA_DINH }), kiemTra: kt(),
        tuongTu: { id: 'T7C-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Chia 150 cây giống cho ba đội theo tỉ lệ 2; 3; 5. Đội thứ ba nhận bao nhiêu cây?', donVi: 'cây', dapAn: 75, loi: [{ gt: 45, nhan: 'Nhầm đối tượng', phanHoi: 'Đó là đội thứ hai.' }, { gt: 30, nhan: 'Nhầm đối tượng', phanHoi: 'Đó là đội thứ nhất.' }, { gt: 15, nhan: 'Thiếu bước', phanHoi: 'Đó là một phần.' }], buoc: { hoi: 'Mỗi phần bao nhiêu cây?', dapAn: 15, dung: 'Đúng: 150 : 10.', sai: '150 : (2 + 3 + 5).' }, goiY: ['Tổng 10 phần.'], viSaoDung: '5 · 15 = 75.', loiGiai: '<b>75</b> cây.', giangLai: 'Vẽ ô.', nguon: tuSoan(SGK_TOAN7_T2 + ' — dãy tỉ số bằng nhau.', { soLieu: GIA_DINH }), kiemTra: kt() }
      },
      {
        id: 'T7C-06', muc: 'nang-cao', liDoMuc: 'Phân tích bảng giá trị để nhận ra loại tỉ lệ và hệ số, rồi dự đoán.', loai: 'chonNhieu',
        de: 'Cho bảng giá trị của hai đại lượng x và y. <b>Chọn TẤT CẢ</b> các nhận xét đúng.', bang: { tieuDe: ['x', '2', '4', '5', '10'], dong: [['y', '10', '5', '4', '2']], ghiChu: GIA_DINH },
        phuongAn: [{ t: 'y tỉ lệ nghịch với x.', dung: true }, { t: 'y tỉ lệ thuận với x.', phanHoi: 'x tăng thì y giảm; tỉ số y : x không bằng nhau (5; 1,25; …).' }, { t: 'Hệ số tỉ lệ là 20.', dung: true }, { t: 'Khi x = 8 thì y = 2,5.', dung: true }],
        goiY: ['Tính tích x · y ở từng cột.', 'Nếu tích luôn bằng nhau thì là tỉ lệ nghịch.'], viSaoDung: 'x · y = 20 ở mọi cột → tỉ lệ nghịch, hệ số 20; x = 8 ⇒ y = 20 : 8 = 2,5.', loiGiai: 'Ý 1, 3, 4 đúng. 2 · 10 = 4 · 5 = 5 · 4 = 10 · 2 = 20.',
        giangLai: 'Phép thử nhanh: tỉ số y/x không đổi → tỉ lệ thuận; tích x · y không đổi → tỉ lệ nghịch.', tienBo: 'Em đã kiểm tra bằng số liệu trước khi kết luận loại tỉ lệ.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — nhận biết đại lượng tỉ lệ thuận, tỉ lệ nghịch qua bảng giá trị.', { soLieu: GIA_DINH }), kiemTra: kt(),
        tuongTu: { id: 'T7C-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: 'Cho bảng giá trị. <b>Chọn TẤT CẢ</b> các nhận xét đúng.', bang: { tieuDe: ['x', '1', '2', '3', '4'], dong: [['y', '3', '6', '9', '12']], ghiChu: GIA_DINH }, phuongAn: [{ t: 'y tỉ lệ thuận với x.', dung: true }, { t: 'Hệ số tỉ lệ (y theo x) là 3.', dung: true }, { t: 'y tỉ lệ nghịch với x.', phanHoi: 'Tích x · y thay đổi (3; 12; …).' }, { t: 'Khi x = 10 thì y = 13.', phanHoi: 'y = 3 · 10 = 30.' }], goiY: ['Tính y : x.'], viSaoDung: 'y : x = 3.', loiGiai: 'Ý 1, 2.', giangLai: 'Tỉ số không đổi → tỉ lệ thuận.', nguon: tuSoan(SGK_TOAN7_T2 + ' — tỉ lệ thuận.', { soLieu: GIA_DINH }), kiemTra: kt() }
      }
    ]
  };

  const daThuc = {
    id: 'toan7-da-thuc', lop: 7, mon: 'toan', phanMon: 'Số và Đại số', ten: 'Biểu thức đại số và đa thức một biến',
    kienThucTruoc: ['Lũy thừa với số mũ tự nhiên', 'Quy tắc dấu khi nhân số âm', 'Thứ tự thực hiện phép tính'],
    yeuCauCanDat: ['Tính được giá trị của biểu thức đại số.', 'Nhận biết đa thức một biến, bậc, hệ số, hệ số tự do; thu gọn và sắp xếp đa thức.', 'Thực hiện cộng, trừ đa thức một biến.', 'Nhận biết nghiệm của đa thức một biến.'],
    bai: {
      mucTieu: ['thay số vào biểu thức mà không sai dấu;', 'thu gọn đa thức và tìm bậc, hệ số;', 'cộng, trừ hai đa thức;', 'tìm nghiệm của đa thức bậc nhất và dùng nghiệm để tìm hệ số chưa biết.'],
      khoiDong: { hoi: 'Một chiếc taxi tính 12 nghìn đồng cho km đầu và 15 nghìn đồng cho mỗi km tiếp theo. Viết biểu thức tính tiền cho quãng đường x km (x ≥ 1). Đi 5 km hết bao nhiêu? (số liệu giả định)', goiY: 'Tiền = 12 + 15(x − 1) (nghìn đồng). Với x = 5: 12 + 15 · 4 = 72 nghìn đồng.' },
      trongTam: [
        '<b>Giá trị của biểu thức</b>: thay số vào biến (số âm đặt trong ngoặc), rồi tính theo thứ tự. Nhớ: (−1)² = 1, (−2)³ = −8.',
        '<b>Đa thức một biến</b> là tổng các đơn thức của cùng một biến, ví dụ P(x) = 5x³ − 2x⁴ + x − 7.',
        '<b>Thu gọn</b>: cộng các hạng tử cùng bậc. <b>Bậc</b> của đa thức (đã thu gọn, khác 0) là số mũ lớn nhất của biến. <b>Hệ số tự do</b> là hạng tử không chứa biến. Số khác 0 là đa thức bậc 0.',
        '<b>Cộng, trừ</b> đa thức: bỏ ngoặc (trước ngoặc có dấu − thì đổi dấu mọi hạng tử trong ngoặc), rồi thu gọn.',
        '<b>Nghiệm</b> của đa thức P(x) là giá trị x = a làm P(a) = 0.'
      ],
      viDu: { de: 'Thu gọn và tìm bậc của P(x) = 2x² + 3x − x² + 5 − 4x.', loiGiai: 'P(x) = (2x² − x²) + (3x − 4x) + 5 = <b>x² − x + 5</b>. Bậc của P(x) là <b>2</b>, hệ số tự do là 5.' },
      nguon: tuSoan(SGK_TOAN7_T2 + ' — chương về Biểu thức đại số và đa thức một biến.'),
      hoiDap: [
        { tu: ['gia tri', 'thay'], tl: 'Thay số vào biến, đặt số âm trong ngoặc: x = −1 thì 2x² = 2 · (−1)² = 2.' },
        { tu: ['bac'], tl: 'Bậc của đa thức một biến (đã thu gọn) là số mũ lớn nhất của biến.' },
        { tu: ['thu gon', 'cung bac'], tl: 'Thu gọn: cộng các hạng tử cùng lũy thừa của x, ví dụ 3x² + 2x² = 5x².' },
        { tu: ['nghiem'], tl: 'a là nghiệm của P(x) nếu P(a) = 0. Với đa thức bậc nhất ax + b, nghiệm là x = −b/a.' }
      ]
    },
    cauHoi: [
      {
        id: 'T7D-01', muc: 'co-ban', liDoMuc: 'Thay số trực tiếp vào biểu thức.', loai: 'so', de: 'Tính giá trị của biểu thức 2x² − 3x + 1 tại x = −1.', dapAn: 6,
        loi: [{ gt: 0, nhan: 'Lỗi dấu', phanHoi: 'Em đã tính −3x thành −3. Với x = −1: −3 · (−1) = +3.' }, { gt: 2, nhan: 'Lỗi lũy thừa số âm', phanHoi: 'Em đã tính (−1)² = −1. Thật ra (−1)² = (−1) · (−1) = 1.' }, { gt: -4, nhan: 'Lỗi dấu', phanHoi: 'Kiểm tra lại cả (−1)² và −3 · (−1).' }],
        buoc: { hoi: '(−1)² bằng bao nhiêu?', dapAn: 1, dung: 'Đúng. Còn −3 · (−1) = ?', sai: '(−1) · (−1) = ?' },
        goiY: ['Thay x = −1, nhớ đặt trong ngoặc: 2 · (−1)² − 3 · (−1) + 1.'], viSaoDung: '2 · 1 + 3 + 1 = 6.', loiGiai: '2 · (−1)² − 3 · (−1) + 1 = 2 + 3 + 1 = <b>6</b>.', giangLai: 'Luôn viết số âm trong ngoặc khi thay vào. Hai dấu trừ nhân nhau thành dấu cộng.', tienBo: 'Em đã giữ đúng dấu khi thay số âm vào biểu thức.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — giá trị của biểu thức đại số.'), kiemTra: kt(),
        tuongTu: { id: 'T7D-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính giá trị của biểu thức 3x² + 2x − 5 tại x = −2.', dapAn: 3, loi: [{ gt: 11, nhan: 'Lỗi dấu', phanHoi: '2 · (−2) = −4.' }, { gt: -21, nhan: 'Lỗi lũy thừa số âm', phanHoi: '(−2)² = 4, không phải −4.' }], buoc: { hoi: '(−2)² = ?', dapAn: 4, dung: 'Đúng.', sai: '(−2)·(−2).' }, goiY: ['3 · 4 + 2 · (−2) − 5.'], viSaoDung: '12 − 4 − 5 = 3.', loiGiai: '<b>3</b>.', giangLai: 'Đặt số âm trong ngoặc.', nguon: tuSoan(SGK_TOAN7_T2 + ' — giá trị của biểu thức.'), kiemTra: kt() }
      },
      {
        id: 'T7D-02', muc: 'co-ban', liDoMuc: 'Nhận biết bậc của đa thức chưa sắp xếp.', loai: 'chon1', de: 'Bậc của đa thức P(x) = 5x³ − 2x⁴ + x − 7 là:',
        phuongAn: [{ t: '3', phanHoi: '5x³ đứng đầu nhưng chưa phải hạng tử có số mũ lớn nhất.' }, { t: '4', dung: true }, { t: '5', phanHoi: '5 là hệ số, không phải số mũ.' }, { t: '−7', phanHoi: '−7 là hệ số tự do.' }],
        goiY: ['Tìm số mũ lớn nhất của x.'], viSaoDung: 'Hạng tử −2x⁴ có số mũ lớn nhất là 4.', loiGiai: 'Bậc là <b>4</b> (hạng tử −2x⁴).', giangLai: 'Sắp xếp lại theo lũy thừa giảm: −2x⁴ + 5x³ + x − 7. Hạng tử đầu cho biết bậc.', tienBo: 'Em đã tìm bậc theo số mũ, không theo vị trí hay hệ số.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — bậc của đa thức một biến.'), kiemTra: kt(),
        tuongTu: { id: 'T7D-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Bậc của đa thức Q(x) = 7 − 3x² + 2x⁵ − x là:', phuongAn: [{ t: '2', phanHoi: 'Còn x⁵.' }, { t: '5', dung: true }, { t: '7', phanHoi: '7 là hệ số tự do.' }, { t: '3', phanHoi: '3 là hệ số.' }], goiY: ['Số mũ lớn nhất.'], viSaoDung: '2x⁵ → bậc 5.', loiGiai: '<b>5</b>.', giangLai: 'Sắp xếp lại.', nguon: tuSoan(SGK_TOAN7_T2 + ' — bậc của đa thức.'), kiemTra: kt() }
      },
      {
        id: 'T7D-03', muc: 'van-dung', liDoMuc: 'Phải thu gọn trước khi đọc hệ số.', loai: 'so', de: 'Thu gọn đa thức P(x) = 3x² − 5x + 2x² + x − 4, rồi cho biết <b>hệ số của x</b>.', dapAn: -4,
        loi: [{ gt: -5, nhan: 'Chưa thu gọn', phanHoi: 'Còn hạng tử +x cùng bậc với −5x. Hãy cộng: −5x + x.' }, { gt: 4, nhan: 'Lỗi dấu', phanHoi: '−5 + 1 = −4, kết quả âm.' }, { gt: 5, nhan: 'Nhầm hạng tử', phanHoi: '5 là hệ số của x². Đề hỏi hệ số của x.' }, { gt: -6, nhan: 'Lỗi dấu', phanHoi: '+x có hệ số +1: −5 + 1, không phải −5 − 1.' }],
        buoc: { hoi: 'Hai hạng tử chứa x là −5x và x. Tổng hệ số −5 + 1 = ?', dapAn: -4, dung: 'Đúng.', sai: '−5 + 1 = ?' },
        goiY: ['Gom các hạng tử chứa x: −5x + x.'], viSaoDung: 'P(x) = 5x² − 4x − 4, hệ số của x là −4.', loiGiai: 'P(x) = (3x² + 2x²) + (−5x + x) − 4 = 5x² − 4x − 4. Hệ số của x là <b>−4</b>.', giangLai: 'Tô màu: các hạng tử x² một màu, các hạng tử x một màu, rồi cộng từng nhóm.', tienBo: 'Em đã thu gọn trước khi đọc hệ số.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — thu gọn đa thức một biến.'), kiemTra: kt(),
        tuongTu: { id: 'T7D-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Thu gọn Q(x) = 4x³ − 2x + 2x³ + 7x − 1, rồi cho biết <b>hệ số của x</b>.', dapAn: 5, loi: [{ gt: -2, nhan: 'Chưa thu gọn', phanHoi: 'Cộng −2x + 7x.' }, { gt: 6, nhan: 'Nhầm hạng tử', phanHoi: '6 là hệ số của x³.' }, { gt: 9, nhan: 'Lỗi dấu', phanHoi: '−2 + 7.' }], buoc: { hoi: '−2 + 7 = ?', dapAn: 5, dung: 'Đúng.', sai: 'Tính lại.' }, goiY: ['−2x + 7x.'], viSaoDung: 'Q(x) = 6x³ + 5x − 1.', loiGiai: '<b>5</b>.', giangLai: 'Gom nhóm.', nguon: tuSoan(SGK_TOAN7_T2 + ' — thu gọn đa thức.'), kiemTra: kt() }
      },
      {
        id: 'T7D-04', muc: 'van-dung', liDoMuc: 'Hai bước: thu gọn rồi tìm nghiệm.', loai: 'so', choPhanSo: true, de: 'Tìm nghiệm của đa thức B(x) = 3x − 12 + x.', dapAn: 3,
        loi: [{ gt: 4, nhan: 'Chưa thu gọn', phanHoi: 'Em đã giải 3x − 12 = 0 mà quên hạng tử +x. Thu gọn: 4x − 12.' }, { gt: -3, nhan: 'Lỗi chuyển vế', phanHoi: '4x − 12 = 0 ⇒ 4x = 12 (chuyển vế đổi dấu) ⇒ x = 3.' }, { gt: 12, nhan: 'Thiếu bước', phanHoi: '4x = 12, còn chia cho 4.' }],
        buoc: { hoi: 'Thu gọn B(x) được a·x − 12. Hệ số a bằng bao nhiêu?', dapAn: 4, dung: 'Đúng: B(x) = 4x − 12. Giải 4x − 12 = 0.', sai: '3x + x = ?x' },
        goiY: ['Thu gọn: 3x + x = 4x.', 'Giải 4x − 12 = 0.'], viSaoDung: 'B(x) = 4x − 12 = 0 ⇒ x = 3. Kiểm tra: B(3) = 9 − 12 + 3 = 0 ✓.', loiGiai: 'B(x) = 4x − 12. B(x) = 0 ⇔ 4x = 12 ⇔ x = <b>3</b>.', giangLai: 'Nghiệm là số làm đa thức bằng 0. Thử x = 3: 3 · 3 − 12 + 3 = 0. Đúng!', tienBo: 'Em đã thu gọn trước khi tìm nghiệm.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — nghiệm của đa thức một biến.'), kiemTra: kt(),
        tuongTu: { id: 'T7D-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', choPhanSo: true, de: 'Tìm nghiệm của đa thức C(x) = 5x + 10 − 3x.', dapAn: -5, loi: [{ gt: 5, nhan: 'Lỗi chuyển vế', phanHoi: '2x = −10.' }, { gt: -2, nhan: 'Chưa thu gọn', phanHoi: 'Quên −3x.' }, { gt: 2, nhan: 'Chưa thu gọn', phanHoi: 'Thu gọn: 2x + 10.' }], buoc: { hoi: 'Thu gọn được a·x + 10, a = ?', dapAn: 2, dung: 'Đúng.', sai: '5 − 3.' }, goiY: ['2x + 10 = 0.'], viSaoDung: 'x = −5.', loiGiai: '<b>−5</b>.', giangLai: 'Thử lại: C(−5) = 0.', nguon: tuSoan(SGK_TOAN7_T2 + ' — nghiệm của đa thức.'), kiemTra: kt() }
      },
      {
        id: 'T7D-05', muc: 'nang-cao', liDoMuc: 'Dùng định nghĩa nghiệm để lập và giải điều kiện tìm hệ số.', loai: 'so', choPhanSo: true, de: 'Cho đa thức P(x) = x² + ax − 6. Biết x = 2 là một nghiệm của P(x). Tìm a.', dapAn: 1,
        loi: [{ gt: -1, nhan: 'Lỗi chuyển vế', phanHoi: '2a − 2 = 0 ⇒ 2a = 2 ⇒ a = 1.' }, { gt: -5, nhan: 'Lỗi dấu', phanHoi: 'Có vẻ em đã viết +6 thay vì −6. P(2) = 4 + 2a − 6.' }, { gt: 2, nhan: 'Thiếu bước', phanHoi: '2a = 2, còn chia cho 2.' }],
        buoc: { hoi: 'Thay x = 2: P(2) = 2² + 2a − 6 = 2a + b. Số b bằng bao nhiêu?', dapAn: -2, dung: 'Đúng: P(2) = 2a − 2. Vì 2 là nghiệm nên 2a − 2 = 0.', sai: '4 − 6 = ?' },
        goiY: ['x = 2 là nghiệm nghĩa là P(2) = 0.', 'Thay x = 2: 4 + 2a − 6 = 0.'], viSaoDung: '4 + 2a − 6 = 0 ⇒ a = 1. Kiểm tra: P(x) = x² + x − 6, P(2) = 4 + 2 − 6 = 0 ✓.', loiGiai: 'P(2) = 0 ⇔ 4 + 2a − 6 = 0 ⇔ 2a = 2 ⇔ a = <b>1</b>.',
        giangLai: 'Câu "x = 2 là nghiệm" là một manh mối: nó cho ta phương trình P(2) = 0. Chỉ còn một ẩn là a, giải như bài tìm x quen thuộc.', tienBo: 'Em đã biến điều kiện "là nghiệm" thành phương trình để tìm hệ số.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — nghiệm của đa thức một biến (dạng tìm hệ số: kiểm tra có trong SGK/SBT lớp 7 không).'), kiemTra: kt(),
        tuongTu: { id: 'T7D-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', choPhanSo: true, de: 'Cho P(x) = x² + ax + 3. Biết x = −1 là một nghiệm của P(x). Tìm a.', dapAn: 4, loi: [{ gt: -4, nhan: 'Lỗi dấu', phanHoi: 'a · (−1) = −a: 1 − a + 3 = 0.' }, { gt: 2, nhan: 'Lỗi tính', phanHoi: '1 + 3 = 4.' }], buoc: { hoi: 'P(−1) = 1 − a + 3 = b − a. b = ?', dapAn: 4, dung: 'Đúng: 4 − a = 0.', sai: '(−1)² + 3 = ?' }, goiY: ['P(−1) = 0.'], viSaoDung: 'a = 4; P(x) = x² + 4x + 3, P(−1) = 0 ✓.', loiGiai: '<b>4</b>.', giangLai: 'Thay rồi giải.', nguon: tuSoan(SGK_TOAN7_T2 + ' — nghiệm của đa thức.'), kiemTra: kt() }
      },
      {
        id: 'T7D-06', muc: 'nang-cao', liDoMuc: 'Cộng, trừ đa thức và kiểm tra nhiều khẳng định về kết quả.', loai: 'chonNhieu',
        de: 'Cho A(x) = 2x³ − x + 5 và B(x) = −2x³ + 3x² − 4. <b>Chọn TẤT CẢ</b> các khẳng định đúng.',
        phuongAn: [{ t: 'A(x) + B(x) = 3x² − x + 1.', dung: true }, { t: 'A(x) + B(x) có bậc 3.', phanHoi: '2x³ + (−2x³) = 0, nên tổng chỉ còn bậc 2.' }, { t: 'A(x) − B(x) = 4x³ − 3x² − x + 9.', dung: true }, { t: 'Hệ số tự do của A(x) − B(x) là 1.', phanHoi: '5 − (−4) = 9. Trừ một số âm là cộng.' }],
        goiY: ['Cộng/trừ từng nhóm cùng bậc: x³, x², x, hệ số tự do.', 'Khi trừ B(x), đổi dấu mọi hạng tử của B.'], viSaoDung: 'A + B = 0x³ + 3x² − x + 1; A − B = 4x³ − 3x² − x + 9.',
        loiGiai: 'Ý 1 và 3 đúng.<br>A + B = (2x³ − 2x³) + 3x² − x + (5 − 4) = 3x² − x + 1 (bậc 2).<br>A − B = 2x³ − x + 5 + 2x³ − 3x² + 4 = 4x³ − 3x² − x + 9.',
        giangLai: 'Viết hai đa thức thẳng cột theo bậc (x³ | x² | x | số), rồi cộng hoặc trừ từng cột — giống phép tính cột dọc.', tienBo: 'Em đã đổi dấu đúng khi trừ đa thức và nhận ra bậc có thể giảm.',
        nguon: tuSoan(SGK_TOAN7_T2 + ' — phép cộng và phép trừ đa thức một biến.'), kiemTra: kt(),
        tuongTu: { id: 'T7D-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: 'Cho A(x) = x² − 3x + 2 và B(x) = −x² + 3x + 5. <b>Chọn TẤT CẢ</b> các khẳng định đúng.', phuongAn: [{ t: 'A(x) + B(x) = 7.', dung: true }, { t: 'A(x) + B(x) là đa thức bậc 0.', dung: true }, { t: 'A(x) − B(x) = 2x² − 6x − 3.', dung: true }, { t: 'A(x) + B(x) = 2x² + 7.', phanHoi: 'x² + (−x²) = 0.' }], goiY: ['Cộng từng cột.'], viSaoDung: 'Các hạng tử chứa x triệt tiêu, còn 7.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Cột dọc.', nguon: tuSoan(SGK_TOAN7_T2 + ' — cộng, trừ đa thức.'), kiemTra: kt() }
      }
    ]
  };


  /* ==================================================================
     ĐỢT 2 — TOÁN 8 (đối chiếu SGK Toán 8 tập một, Kết nối tri thức)
     Soạn ngày 26/11/2026. Câu hỏi tự biên soạn; căn cứ kiến thức là
     các trang SGK đã đọc (bản PDF trong thư mục Drive "Tin 8").
     ================================================================== */
  const SGK_TOAN8_DOC = {
    tenTaiLieu: 'Toán 8, tập một (bộ sách "Kết nối tri thức với cuộc sống")',
    tacGia: 'Hà Huy Khoái (Tổng Chủ biên); Cung Thế Anh, Nguyễn Huy Đoan (đồng Chủ biên) và nhóm tác giả',
    donViPhatHanh: 'Nhà xuất bản Giáo dục Việt Nam',
    anBan: 'Bản PDF có dấu "BẢN MẪU" trên bìa; phần văn bản đọc được không có trang bản quyền/ISBN — nên đối chiếu lại số trang với sách in',
    banDoc: 'Bản PDF trong thư mục Google Drive "Bo sach ket noi tri thuc 6 - 7 - 8 - 9" › "Tin 8"; đọc ngày 26/11/2026'
  };
  const sgk8 = (viTri, ghiChu) => Object.assign(tuSoan(null), SGK_TOAN8_DOC, { canCu: 'Đã đối chiếu: SGK Toán 8 tập một — ' + viTri, viTri, ghiChu: ghiChu || null });
  const kt8 = () => Object.assign(kt(), { doiChieuNguon: 'da-doi-chieu', ngayDoiChieu: '26/11/2026' });
  const S = (b, e) => b + '<sup>' + e + '</sup>';

  const daThuc8 = {
    id: 'toan8-da-thuc', lop: 8, mon: 'toan', phanMon: 'Số và Đại số', ten: 'Đa thức nhiều biến',
    sgk: 'SGK Toán 8 tập một — Chương I, Bài 1–5, trang 5–24',
    yccdGhiChu: 'Đã đối chiếu với phần "Kiến thức, kĩ năng" của Bài 1, 2, 4, 5 trong SGK Toán 8 tập một.',
    kienThucTruoc: ['Đa thức một biến, cộng trừ đa thức một biến (lớp 7)', 'Luỹ thừa: a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>', 'Quy tắc dấu ngoặc'],
    yeuCauCanDat: ['Nhận biết đơn thức, đơn thức thu gọn, hệ số, phần biến, bậc của đơn thức; đơn thức đồng dạng.', 'Nhận biết đa thức, hạng tử, đa thức thu gọn và bậc của đa thức.', 'Thực hiện cộng, trừ, nhân đa thức; chia đa thức cho đơn thức trong trường hợp chia hết.'],
    bai: {
      mucTieu: ['thu gọn đơn thức và tìm bậc;', 'nhận ra đơn thức đồng dạng và cộng trừ chúng;', 'nhân đa thức với đa thức, bỏ ngoặc đúng dấu;', 'kiểm tra một đa thức có chia hết cho đơn thức không và thực hiện phép chia.'],
      khoiDong: { hoi: 'Một hình hộp chữ nhật có ba kích thước x, y và 2x (đơn vị cm). Viết biểu thức tính thể tích. Biểu thức đó có mấy biến?', goiY: 'V = x · y · 2x = 2x²y (cm³). Đây là một đơn thức của hai biến x và y.' },
      trongTam: [
        '<b>Đơn thức</b> là một số, một biến hoặc tích của số với các biến. <b>Đơn thức thu gọn</b>: chỉ gồm một số, hoặc tích của một số với các biến, mỗi biến xuất hiện một lần dưới dạng luỹ thừa. Phần số là <b>hệ số</b>, phần còn lại là <b>phần biến</b>.',
        '<b>Bậc</b> của đơn thức thu gọn (hệ số khác 0) là tổng số mũ của các biến. Ví dụ ' + S('5x', 2) + S('y', 3) + 'z có bậc 2 + 3 + 1 = 6. Mỗi số khác 0 là đơn thức bậc 0.',
        '<b>Đơn thức đồng dạng</b>: hệ số khác 0 và có cùng phần biến. Cộng (trừ) đơn thức đồng dạng: cộng (trừ) các hệ số, giữ nguyên phần biến.',
        '<b>Đa thức</b> là tổng của những đơn thức (mỗi đơn thức là một <b>hạng tử</b>). Đa thức thu gọn không có hai hạng tử đồng dạng. <b>Bậc của đa thức</b> là bậc của hạng tử có bậc cao nhất trong dạng thu gọn.',
        '<b>Nhân</b>: nhân hệ số với hệ số, phần biến với phần biến; nhân đa thức với đa thức thì nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng lại.',
        '<b>Chia</b>: đơn thức A chia hết cho đơn thức B (B ≠ 0) khi mỗi biến của B đều là biến của A với số mũ không lớn hơn số mũ của nó trong A. Đa thức chia hết cho đơn thức B khi mọi hạng tử chia hết cho B; khi đó chia từng hạng tử rồi cộng lại.'
      ],
      viDu: { de: 'Thu gọn và tìm bậc của đa thức P = 3' + S('x', 2) + 'y − 2xy + ' + S('x', 2) + 'y + 5xy − 4.', loiGiai: 'P = (3' + S('x', 2) + 'y + ' + S('x', 2) + 'y) + (−2xy + 5xy) − 4 = <b>4' + S('x', 2) + 'y + 3xy − 4</b>.<br>Bậc của các hạng tử: 3; 2; 0. Vậy P có <b>bậc 3</b>.' },
      nguon: sgk8('Chương I "Đa thức", Bài 1–5, trang 5–24 (khung kiến thức trọng tâm của từng bài)'),
      hoiDap: [
        { tu: ['bac', 'don thuc'], tl: 'Bậc của đơn thức thu gọn = tổng số mũ các biến. Nhớ biến không ghi số mũ thì số mũ là 1.' },
        { tu: ['dong dang'], tl: 'Hai đơn thức đồng dạng: hệ số khác 0 và phần biến giống hệt nhau (cùng biến, cùng số mũ từng biến).' },
        { tu: ['nhan'], tl: 'Nhân đa thức với đa thức: nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các tích.' },
        { tu: ['chia', 'chia het'], tl: 'A chia hết cho đơn thức B khi mỗi biến của B có mặt trong A với số mũ không lớn hơn số mũ trong A.' }
      ]
    },
    cauHoi: [
      {
        id: 'T8A-01', muc: 'co-ban', liDoMuc: 'Áp dụng trực tiếp định nghĩa bậc của đơn thức.', loai: 'so', de: 'Tìm bậc của đơn thức −3' + S('x', 2) + S('y', 3) + 'z.', dapAn: 6,
        loi: [{ gt: -3, nhan: 'Nhầm hệ số', phanHoi: '−3 là hệ số. Bậc là tổng số mũ của các biến.' }, { gt: 5, nhan: 'Quên số mũ 1', phanHoi: 'Biến z không ghi số mũ nghĩa là số mũ bằng 1. Em cộng thêm số mũ của z.' }, { gt: 3, nhan: 'Nhầm định nghĩa', phanHoi: '3 chỉ là số mũ lớn nhất. Bậc của đơn thức là <b>tổng</b> các số mũ.' }],
        buoc: { hoi: 'Số mũ của biến z là bao nhiêu?', dapAn: 1, dung: 'Đúng: z = z¹. Bây giờ cộng 2 + 3 + 1.', sai: 'Biến không ghi số mũ thì số mũ là 1.' },
        goiY: ['Cộng số mũ của x, y và z.'], viSaoDung: '2 + 3 + 1 = 6.', loiGiai: 'Bậc = 2 + 3 + 1 = <b>6</b> (hệ số −3 không ảnh hưởng đến bậc).', giangLai: 'Hãy viết đầy đủ: x · x · y · y · y · z — đếm có 6 thừa số biến. Bậc chính là số thừa số biến đó.', tienBo: 'Em đã nhớ cộng cả số mũ 1 của biến không ghi số mũ.',
        nguon: sgk8('Bài 1 "Đơn thức" (trang 5–10), mục 1 "Đơn thức và đơn thức thu gọn" — đơn thức thu gọn, bậc của đơn thức'), kiemTra: kt8(),
        tuongTu: { id: 'T8A-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tìm bậc của đơn thức 5x' + S('y', 4) + S('z', 2) + '.', dapAn: 7, loi: [{ gt: 5, nhan: 'Nhầm hệ số', phanHoi: '5 là hệ số.' }, { gt: 6, nhan: 'Quên số mũ 1', phanHoi: 'x có số mũ 1.' }, { gt: 4, nhan: 'Nhầm định nghĩa', phanHoi: 'Bậc là tổng số mũ.' }], buoc: { hoi: 'Số mũ của x?', dapAn: 1, dung: 'Đúng.', sai: 'x = x¹.' }, goiY: ['1 + 4 + 2.'], viSaoDung: '1 + 4 + 2 = 7.', loiGiai: '<b>7</b>.', giangLai: 'Đếm số thừa số biến.', nguon: sgk8('Bài 1 (trang 5–10), mục 1'), kiemTra: kt8() }
      },
      {
        id: 'T8A-02', muc: 'co-ban', liDoMuc: 'Nhận biết đơn thức đồng dạng.', loai: 'chon1', de: 'Đơn thức nào sau đây <b>đồng dạng</b> với 4' + S('x', 2) + 'y?',
        phuongAn: [{ t: '−7' + S('x', 2) + 'y', dung: true }, { t: '4x' + S('y', 2), phanHoi: 'Cùng hệ số 4 nhưng số mũ của x và y bị đổi chỗ, nên phần biến khác.' }, { t: '4' + S('x', 2) + S('y', 2), phanHoi: 'Số mũ của y là 2, khác 1.' }, { t: '4' + S('x', 2) + 'yz', phanHoi: 'Có thêm biến z nên phần biến khác.' }],
        goiY: ['Đồng dạng chỉ cần cùng phần biến (hệ số khác 0), hệ số có thể khác nhau.'], viSaoDung: '−7x²y có cùng phần biến x²y với 4x²y.', loiGiai: '<b>−7' + S('x', 2) + 'y</b>.', giangLai: 'Bỏ hệ số đi, so "phần chữ" còn lại: x²y với x²y giống hệt → đồng dạng. Hệ số giống nhau không quan trọng.', tienBo: 'Em đã so phần biến, không bị hệ số giống nhau đánh lừa.',
        nguon: sgk8('Bài 1 "Đơn thức" (trang 5–10), mục 2 "Đơn thức đồng dạng"'), kiemTra: kt8(),
        tuongTu: { id: 'T8A-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Đơn thức nào <b>đồng dạng</b> với −2x' + S('y', 3) + '?', phuongAn: [{ t: '5x' + S('y', 3), dung: true }, { t: '−2' + S('x', 3) + 'y', phanHoi: 'Số mũ bị đổi chỗ.' }, { t: 'x' + S('y', 3) + 'z', phanHoi: 'Thêm biến z.' }, { t: '−2' + S('x', 2) + S('y', 2), phanHoi: 'Phần biến khác.' }], goiY: ['So phần biến.'], viSaoDung: 'Cùng phần biến xy³.', loiGiai: '<b>5x' + S('y', 3) + '</b>.', giangLai: 'Bỏ hệ số, so phần chữ.', nguon: sgk8('Bài 1 (trang 5–10), mục 2'), kiemTra: kt8() }
      },
      {
        id: 'T8A-03', muc: 'van-dung', liDoMuc: 'Hai bước: thu gọn đơn thức (nhân hệ số, cộng số mũ) rồi tìm bậc.', loai: 'so', de: 'Thu gọn đơn thức 5' + S('x', 2) + 'y · (−2)x' + S('y', 3) + ' rồi cho biết <b>bậc</b> của nó.', dapAn: 7,
        loi: [{ gt: -10, nhan: 'Nhầm hệ số', phanHoi: '−10 là hệ số sau khi thu gọn. Đề hỏi bậc.' }, { gt: 3, nhan: 'Nhầm định nghĩa', phanHoi: '3 là số mũ của x (hoặc lớn nhất). Bậc = tổng số mũ.' }, { gt: 6, nhan: 'Lỗi luỹ thừa', phanHoi: 'Có vẻ em nhân số mũ thay vì cộng, hoặc bỏ sót. x² · x = x³; y · y³ = y⁴.' }],
        buoc: { hoi: 'Sau khi thu gọn được −10x<sup>a</sup>y<sup>b</sup>. Số mũ a của x bằng bao nhiêu?', dapAn: 3, dung: 'Đúng: x² · x = x³. Còn y · y³ = y⁴. Vậy bậc = ?', sai: 'x² · x¹ = x<sup>2+1</sup>.' },
        goiY: ['Nhân hệ số: 5 · (−2). Nhân luỹ thừa cùng biến: cộng số mũ.'], viSaoDung: 'Thu gọn được −10x³y⁴, bậc 3 + 4 = 7.', loiGiai: '5' + S('x', 2) + 'y · (−2)x' + S('y', 3) + ' = (5 · (−2)) · (' + S('x', 2) + ' · x) · (y · ' + S('y', 3) + ') = −10' + S('x', 3) + S('y', 4) + '. Bậc: 3 + 4 = <b>7</b>.',
        giangLai: 'Gom theo ba ngăn: ngăn số (5 và −2), ngăn x (x² và x), ngăn y (y và y³). Trong mỗi ngăn biến, cộng số mũ.', tienBo: 'Em đã thu gọn đúng trước khi tìm bậc.',
        nguon: sgk8('Bài 1 (trang 5–10), mục 1 (thu gọn đơn thức); Bài 4 "Phép nhân đa thức", trang 19 (quy tắc nhân hai đơn thức)'), kiemTra: kt8(),
        tuongTu: { id: 'T8A-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Thu gọn đơn thức 4xy · (−2)' + S('x', 2) + S('y', 2) + ' rồi cho biết <b>bậc</b>.', dapAn: 6, loi: [{ gt: -8, nhan: 'Nhầm hệ số', phanHoi: 'Đó là hệ số.' }, { gt: 3, nhan: 'Nhầm định nghĩa', phanHoi: 'Bậc = tổng số mũ.' }], buoc: { hoi: 'Số mũ của x sau khi thu gọn?', dapAn: 3, dung: 'Đúng.', sai: 'x · x².' }, goiY: ['−8x³y³.'], viSaoDung: '3 + 3 = 6.', loiGiai: '−8' + S('x', 3) + S('y', 3) + ', bậc <b>6</b>.', giangLai: 'Gom ba ngăn.', nguon: sgk8('Bài 1 (trang 5–10); Bài 4, trang 19'), kiemTra: kt8() }
      },
      {
        id: 'T8A-04', muc: 'van-dung', liDoMuc: 'Hai bước: cộng hai đa thức (thu gọn hạng tử đồng dạng) rồi tính giá trị.', loai: 'so',
        de: 'Cho A = 3' + S('x', 2) + 'y − 2xy + 5 và B = −' + S('x', 2) + 'y + 4xy − 1. Tính giá trị của <b>A + B</b> tại x = 2, y = 1.', dapAn: 16,
        loi: [{ gt: 10, nhan: 'Nhầm phép tính', phanHoi: '10 là giá trị của A − B. Đề hỏi A + B.' }, { gt: 13, nhan: 'Thiếu bước', phanHoi: '13 mới là giá trị của A. Còn cộng thêm B.' }, { gt: 8, nhan: 'Lỗi dấu', phanHoi: 'Kiểm tra lại dấu khi cộng các hạng tử đồng dạng: −2xy + 4xy = +2xy.' }],
        buoc: { hoi: 'Thu gọn A + B được 2' + S('x', 2) + 'y + m·xy + 4. Hệ số m bằng bao nhiêu?', dapAn: 2, dung: 'Đúng: −2xy + 4xy = 2xy. Giờ thay x = 2, y = 1.', sai: '−2 + 4 = ?' },
        goiY: ['Cộng các hạng tử đồng dạng: x²y với x²y, xy với xy, số với số.', 'A + B = 2x²y + 2xy + 4.'], viSaoDung: 'A + B = 2x²y + 2xy + 4 = 2·4·1 + 2·2·1 + 4 = 16.',
        loiGiai: 'A + B = (3' + S('x', 2) + 'y − ' + S('x', 2) + 'y) + (−2xy + 4xy) + (5 − 1) = 2' + S('x', 2) + 'y + 2xy + 4.<br>Tại x = 2, y = 1: 2 · 4 · 1 + 2 · 2 · 1 + 4 = <b>16</b>.<br>(Kiểm tra: A = 13, B = 3, A + B = 16 ✓)', giangLai: 'Cách kiểm tra nhanh: tính riêng A và B tại x = 2, y = 1 rồi cộng. Hai cách phải ra cùng một số.', tienBo: 'Em đã thu gọn đúng và thay số chính xác.',
        nguon: sgk8('Bài 3 "Phép cộng và phép trừ đa thức", trang 15–16; Bài 2 "Đa thức", trang 12 (thu gọn đa thức)'), kiemTra: kt8(),
        tuongTu: { id: 'T8A-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Cho A = ' + S('x', 2) + 'y + 3xy − 2 và B = 2' + S('x', 2) + 'y − xy + 6. Tính giá trị của <b>A + B</b> tại x = 1, y = 2.', dapAn: 14, loi: [{ gt: -2, nhan: 'Nhầm phép tính', phanHoi: 'Đó là A − B.' }, { gt: 6, nhan: 'Thiếu bước', phanHoi: 'Đó mới là A.' }], buoc: { hoi: 'Thu gọn A + B = 3x²y + m·xy + 4. m = ?', dapAn: 2, dung: 'Đúng.', sai: '3 − 1.' }, goiY: ['3x²y + 2xy + 4.'], viSaoDung: '6 + 4 + 4 = 14.', loiGiai: '<b>14</b>.', giangLai: 'Tính riêng A, B rồi cộng để kiểm tra.', nguon: sgk8('Bài 3, trang 15–16'), kiemTra: kt8() }
      },
      {
        id: 'T8A-05', muc: 'nang-cao', liDoMuc: 'Nhiều bước: nhân đa thức, bỏ ngoặc có dấu trừ, thu gọn, phát hiện biểu thức không phụ thuộc x.', loai: 'so',
        de: 'Rút gọn biểu thức P = (x + 2y)(x − y) − x(x + y), rồi tính giá trị của P tại x = 3, y = −1.', dapAn: -2,
        loi: [{ gt: -8, nhan: 'Lỗi dấu khi bỏ ngoặc', phanHoi: 'Khi bỏ ngoặc −x(x + y) = −x² − xy, em cần đổi dấu <b>cả</b> hạng tử xy.' }, { gt: 2, nhan: 'Lỗi dấu', phanHoi: '(−1)² = 1 nhưng còn hệ số −2 phía trước: −2y² = −2.' }, { gt: 7, nhan: 'Lỗi nhân đa thức', phanHoi: 'Có vẻ em bỏ sót một tích khi nhân (x + 2y)(x − y). Phải đủ 4 tích: x·x, x·(−y), 2y·x, 2y·(−y).' }],
        buoc: { hoi: 'Khai triển (x + 2y)(x − y) được ' + S('x', 2) + ' + a·xy − 2' + S('y', 2) + '. Hệ số a bằng bao nhiêu?', dapAn: 1, dung: 'Đúng: −xy + 2xy = xy. Giờ trừ đi x² + xy.', sai: 'Cộng −xy và 2xy.' },
        goiY: ['Khai triển (x + 2y)(x − y) đủ 4 tích.', 'Trừ x(x + y) = x² + xy: đổi dấu cả hai hạng tử.'], viSaoDung: 'P = −2y²; tại y = −1, P = −2 (không phụ thuộc x).',
        loiGiai: '(x + 2y)(x − y) = ' + S('x', 2) + ' − xy + 2xy − 2' + S('y', 2) + ' = ' + S('x', 2) + ' + xy − 2' + S('y', 2) + '.<br>P = ' + S('x', 2) + ' + xy − 2' + S('y', 2) + ' − ' + S('x', 2) + ' − xy = <b>−2' + S('y', 2) + '</b>.<br>Tại y = −1: P = −2 · 1 = <b>−2</b>. Giá trị của P không phụ thuộc vào x.',
        giangLai: 'Kiểm tra bằng số: thay luôn x = 3, y = −1 vào biểu thức ban đầu: (3 − 2)(3 + 1) − 3(3 − 1) = 4 − 6 = −2. Nếu bài rút gọn của em cho kết quả khác, em đã sai ở bước khai triển.', tienBo: 'Em đã bỏ ngoặc có dấu trừ đúng và nhận ra P không phụ thuộc x.',
        nguon: sgk8('Bài 4 "Phép nhân đa thức", trang 20 (quy tắc nhân đơn thức với đa thức, nhân đa thức với đa thức)'), kiemTra: kt8(),
        tuongTu: { id: 'T8A-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Rút gọn Q = (2x − y)(x + y) − 2x(x + y), rồi tính giá trị tại x = 2, y = 1.', dapAn: -3, loi: [{ gt: 5, nhan: 'Lỗi dấu khi bỏ ngoặc', phanHoi: 'Đổi dấu cả hai hạng tử khi trừ 2x(x + y).' }, { gt: 3, nhan: 'Lỗi dấu', phanHoi: 'Q = −xy − y², tại x = 2, y = 1 ra số âm.' }], buoc: { hoi: '(2x − y)(x + y) = 2x² + a·xy − y². a = ?', dapAn: 1, dung: 'Đúng.', sai: '2xy − xy.' }, goiY: ['Q = −xy − y².'], viSaoDung: '−2 − 1 = −3.', loiGiai: 'Q = −xy − ' + S('y', 2) + ' = <b>−3</b>.', giangLai: 'Thay số vào biểu thức gốc để kiểm tra: (4 − 1)(3) − 4·3 = −3.', nguon: sgk8('Bài 4, trang 20'), kiemTra: kt8() }
      },
      {
        id: 'T8A-06', muc: 'nang-cao', liDoMuc: 'Phân tích điều kiện chia hết cho từng đơn thức và kiểm tra kết quả phép chia.', loai: 'chonNhieu',
        de: 'Cho A = 12' + S('x', 3) + S('y', 2) + ' − 6' + S('x', 2) + S('y', 3) + ' + 3' + S('x', 2) + S('y', 2) + '. <b>Chọn TẤT CẢ</b> các khẳng định đúng.',
        phuongAn: [{ t: 'A chia hết cho đơn thức 3' + S('x', 2) + 'y.', dung: true }, { t: 'A chia hết cho đơn thức ' + S('x', 3) + 'y.', phanHoi: 'Hạng tử −6x²y³ chỉ có x², số mũ nhỏ hơn 3, nên không chia hết.' }, { t: 'A : 3' + S('x', 2) + S('y', 2) + ' = 4x − 2y + 1.', dung: true }, { t: 'A : 3' + S('x', 2) + 'y = 4xy − 2' + S('y', 2) + ' + y.', dung: true }],
        goiY: ['Đa thức chia hết cho đơn thức B khi <b>mọi</b> hạng tử đều chia hết cho B.', 'Chia từng hạng tử rồi cộng lại để kiểm tra ý 3 và 4.'], viSaoDung: 'Ý 1, 3, 4 đúng; ý 2 sai vì hạng tử x²y³ không chia hết cho x³y.',
        loiGiai: 'Ý 1, 3, 4 đúng.<br>A : 3' + S('x', 2) + S('y', 2) + ' = 4x − 2y + 1.<br>A : 3' + S('x', 2) + 'y = 4xy − 2' + S('y', 2) + ' + y.<br>A không chia hết cho ' + S('x', 3) + 'y vì hạng tử −6' + S('x', 2) + S('y', 3) + ' có số mũ của x là 2 &lt; 3.',
        giangLai: 'Phép thử: với mỗi biến trong đơn thức chia, nhìn số mũ <b>nhỏ nhất</b> của biến đó trong các hạng tử của A. Ở đây x nhỏ nhất là 2, y nhỏ nhất là 2. Đơn thức chia chỉ được có x với số mũ ≤ 2 và y với số mũ ≤ 2.', tienBo: 'Em đã kiểm tra điều kiện chia hết cho từng hạng tử.',
        nguon: sgk8('Bài 5 "Phép chia đa thức cho đơn thức", mục 1–2, trang 23–24 (điều kiện chia hết; quy tắc chia đa thức cho đơn thức)'), kiemTra: kt8(),
        tuongTu: { id: 'T8A-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: 'Cho A = 10' + S('x', 2) + S('y', 3) + ' + 5x' + S('y', 2) + ' − 15' + S('x', 3) + S('y', 2) + '. <b>Chọn TẤT CẢ</b> các khẳng định đúng.', phuongAn: [{ t: 'A chia hết cho 5x' + S('y', 2) + '.', dung: true }, { t: 'A chia hết cho x' + S('y', 3) + '.', phanHoi: 'Hạng tử 5xy² chỉ có y².' }, { t: 'A : 5x' + S('y', 2) + ' = 2xy + 1 − 3' + S('x', 2) + '.', dung: true }, { t: 'A chia hết cho 5' + S('x', 2) + 'y.', phanHoi: 'Hạng tử 5xy² chỉ có x¹.' }], goiY: ['Số mũ nhỏ nhất của x là 1, của y là 2.'], viSaoDung: 'Ý 1, 3 đúng.', loiGiai: 'Ý 1, 3.', giangLai: 'Nhìn số mũ nhỏ nhất.', nguon: sgk8('Bài 5, trang 23–24'), kiemTra: kt8() }
      }
    ]
  };

  const hangDangThuc8 = {
    id: 'toan8-hang-dang-thuc', lop: 8, mon: 'toan', phanMon: 'Số và Đại số', ten: 'Hằng đẳng thức đáng nhớ và ứng dụng',
    sgk: 'SGK Toán 8 tập một — Chương II, Bài 6–9, từ trang 29',
    yccdGhiChu: 'Đã đối chiếu với phần "Kiến thức, kĩ năng" của Bài 6, 7, 8, 9 trong SGK Toán 8 tập một.',
    kienThucTruoc: ['Nhân đa thức với đa thức (Chương I)', 'Luỹ thừa bậc hai, bậc ba', 'Thu gọn đa thức'],
    yeuCauCanDat: ['Mô tả các hằng đẳng thức: hiệu hai bình phương, bình phương của một tổng/hiệu, lập phương của một tổng/hiệu, tổng/hiệu hai lập phương.', 'Vận dụng hằng đẳng thức để tính nhanh, rút gọn và tính giá trị biểu thức.', 'Phân tích đa thức thành nhân tử bằng cách đặt nhân tử chung, nhóm hạng tử, sử dụng hằng đẳng thức.'],
    bai: {
      mucTieu: ['viết đúng bảy hằng đẳng thức đáng nhớ;', 'tính nhanh như 99 · 101 hay 103² mà không cần máy tính;', 'tính x² + y², a³ + b³ khi biết tổng (hiệu) và tích;', 'phân tích đa thức thành nhân tử để tìm x.'],
      khoiDong: { hoi: 'Không dùng máy tính, em có tính được 99 · 101 trong 5 giây không? Gợi ý: 99 = 100 − 1 và 101 = 100 + 1.', goiY: '99 · 101 = (100 − 1)(100 + 1) = 100² − 1² = 9999. Đó là hằng đẳng thức hiệu hai bình phương.' },
      trongTam: [
        '<b>Hiệu hai bình phương:</b> ' + S('A', 2) + ' − ' + S('B', 2) + ' = (A − B)(A + B).',
        '<b>Bình phương của một tổng/hiệu:</b> ' + S('(A + B)', 2) + ' = ' + S('A', 2) + ' + 2AB + ' + S('B', 2) + '; ' + S('(A − B)', 2) + ' = ' + S('A', 2) + ' − 2AB + ' + S('B', 2) + '.',
        '<b>Lập phương của một tổng/hiệu:</b> ' + S('(A + B)', 3) + ' = ' + S('A', 3) + ' + 3' + S('A', 2) + 'B + 3A' + S('B', 2) + ' + ' + S('B', 3) + '; ' + S('(A − B)', 3) + ' = ' + S('A', 3) + ' − 3' + S('A', 2) + 'B + 3A' + S('B', 2) + ' − ' + S('B', 3) + '.',
        '<b>Tổng/hiệu hai lập phương:</b> ' + S('A', 3) + ' + ' + S('B', 3) + ' = (A + B)(' + S('A', 2) + ' − AB + ' + S('B', 2) + '); ' + S('A', 3) + ' − ' + S('B', 3) + ' = (A − B)(' + S('A', 2) + ' + AB + ' + S('B', 2) + ').',
        '<b>Phân tích đa thức thành nhân tử</b> là biến đổi đa thức thành tích của những đa thức. Ba cách: đặt nhân tử chung; sử dụng hằng đẳng thức; nhóm các hạng tử.'
      ],
      viDu: { de: 'Phân tích ' + S('x', 3) + ' − 9x thành nhân tử.', loiGiai: S('x', 3) + ' − 9x = x(' + S('x', 2) + ' − 9) (đặt nhân tử chung) = <b>x(x − 3)(x + 3)</b> (hiệu hai bình phương).' },
      nguon: sgk8('Chương II "Hằng đẳng thức đáng nhớ và ứng dụng": Bài 6 (trang 29–33), Bài 7 (trang 34–36), Bài 8 (từ trang 37), Bài 9 (từ trang 42)'),
      hoiDap: [
        { tu: ['binh phuong', 'tong', 'hieu'], tl: '(A + B)² = A² + 2AB + B²; (A − B)² = A² − 2AB + B². Đừng quên hạng tử 2AB!' },
        { tu: ['hieu hai binh phuong'], tl: 'A² − B² = (A − B)(A + B). Dùng để tính nhanh 99 · 101 = 100² − 1.' },
        { tu: ['lap phuong'], tl: '(A + B)³ = A³ + 3A²B + 3AB² + B³; A³ + B³ = (A + B)(A² − AB + B²).' },
        { tu: ['nhan tu', 'phan tich'], tl: 'Phân tích thành nhân tử: thử đặt nhân tử chung trước, rồi xem có dùng được hằng đẳng thức hay nhóm hạng tử không.' }
      ]
    },
    cauHoi: [
      {
        id: 'T8B-01', muc: 'co-ban', liDoMuc: 'Áp dụng trực tiếp hiệu hai bình phương để tính nhanh.', loai: 'so', de: 'Tính nhanh: 99 · 101.', dapAn: 9999,
        loi: [{ gt: 10000, nhan: 'Thiếu một bước', phanHoi: '10000 = 100². Theo hằng đẳng thức còn phải trừ 1² = 1.' }, { gt: 9801, nhan: 'Nhầm công thức', phanHoi: '9801 = 99². Hãy viết 99 · 101 = (100 − 1)(100 + 1).' }, { gt: 10001, nhan: 'Lỗi dấu', phanHoi: '(A − B)(A + B) = A² <b>−</b> B².' }],
        buoc: { hoi: '99 · 101 = (100 − 1)(100 + 1) = 100² − ? (em nhập số cần trừ)', dapAn: 1, dung: 'Đúng: 100² − 1² = 10000 − 1.', sai: 'B = 1 nên B² = 1.' },
        goiY: ['Viết 99 = 100 − 1, 101 = 100 + 1.'], viSaoDung: '(100 − 1)(100 + 1) = 100² − 1 = 9999.', loiGiai: '99 · 101 = (100 − 1)(100 + 1) = 100² − 1² = <b>9999</b>.', giangLai: 'Hai số cách đều 100 (một số kém 1, một số hơn 1). Tích của chúng luôn bằng 100² trừ đi bình phương khoảng cách: 10000 − 1.', tienBo: 'Em đã dùng hằng đẳng thức để tính nhanh.',
        nguon: sgk8('Bài 6 (trang 29–33), mục "Hiệu hai bình phương"'), kiemTra: kt8(),
        tuongTu: { id: 'T8B-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính nhanh: 49 · 51.', dapAn: 2499, loi: [{ gt: 2500, nhan: 'Thiếu một bước', phanHoi: 'Còn trừ 1.' }, { gt: 2401, nhan: 'Nhầm công thức', phanHoi: 'Đó là 49².' }], buoc: { hoi: '49 · 51 = 50² − ?', dapAn: 1, dung: 'Đúng.', sai: '1² = 1.' }, goiY: ['(50 − 1)(50 + 1).'], viSaoDung: '2500 − 1.', loiGiai: '<b>2499</b>.', giangLai: 'Cách đều 50.', nguon: sgk8('Bài 6 (trang 29–33)'), kiemTra: kt8() }
      },
      {
        id: 'T8B-02', muc: 'co-ban', liDoMuc: 'Nhận biết khai triển đúng của bình phương một hiệu.', loai: 'chon1', de: 'Khai triển ' + S('(x − 3)', 2) + ' được:',
        phuongAn: [{ t: S('x', 2) + ' − 9', phanHoi: 'Đây là lỗi hay gặp: (A − B)² ≠ A² − B². Còn thiếu hạng tử −2AB.' }, { t: S('x', 2) + ' − 6x + 9', dung: true }, { t: S('x', 2) + ' + 6x + 9', phanHoi: 'Đây là (x + 3)². Với bình phương một hiệu, hạng tử giữa mang dấu −.' }, { t: S('x', 2) + ' − 3x + 9', phanHoi: 'Hạng tử giữa là 2 · x · 3 = 6x, không phải 3x.' }],
        goiY: ['(A − B)² = A² − 2AB + B² với A = x, B = 3.'], viSaoDung: 'x² − 2·x·3 + 3² = x² − 6x + 9.', loiGiai: S('(x − 3)', 2) + ' = ' + S('x', 2) + ' − 2·x·3 + ' + S('3', 2) + ' = <b>' + S('x', 2) + ' − 6x + 9</b>.', giangLai: 'Thử với x = 5: (5 − 3)² = 4. Thay vào từng phương án: chỉ 25 − 30 + 9 = 4 đúng. Kiểm tra bằng số là cách bắt lỗi rất nhanh!', tienBo: 'Em đã nhớ hạng tử 2AB.',
        nguon: sgk8('Bài 6 (trang 29–33), mục "Bình phương của một hiệu"'), kiemTra: kt8(),
        tuongTu: { id: 'T8B-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Khai triển ' + S('(2x + 1)', 2) + ' được:', phuongAn: [{ t: '4' + S('x', 2) + ' + 4x + 1', dung: true }, { t: '4' + S('x', 2) + ' + 1', phanHoi: 'Thiếu 2AB.' }, { t: '2' + S('x', 2) + ' + 4x + 1', phanHoi: '(2x)² = 4x².' }, { t: '4' + S('x', 2) + ' + 2x + 1', phanHoi: '2·2x·1 = 4x.' }], goiY: ['A = 2x, B = 1.'], viSaoDung: '4x² + 4x + 1.', loiGiai: '<b>4' + S('x', 2) + ' + 4x + 1</b>.', giangLai: 'Thử x = 1: 3² = 9.', nguon: sgk8('Bài 6 (trang 29–33), mục "Bình phương của một tổng"'), kiemTra: kt8() }
      },
      {
        id: 'T8B-03', muc: 'van-dung', liDoMuc: 'Tự chọn cách tách số để dùng bình phương một tổng khi tính nhẩm.', loai: 'so', de: 'Tính nhanh: ' + S('103', 2) + '.', dapAn: 10609,
        loi: [{ gt: 10009, nhan: 'Thiếu hạng tử 2AB', phanHoi: 'Em đã tính 100² + 3² mà quên 2 · 100 · 3.' }, { gt: 10309, nhan: 'Sai hạng tử 2AB', phanHoi: 'Hạng tử giữa là 2 · 100 · 3 = 600, không phải 300.' }, { gt: 10600, nhan: 'Thiếu B²', phanHoi: 'Còn cộng 3² = 9.' }],
        buoc: { hoi: 'Viết 103² = (100 + 3)². Hạng tử 2AB = 2 · 100 · 3 bằng bao nhiêu?', dapAn: 600, dung: 'Đúng. Vậy 10000 + 600 + 9 = ?', sai: '2 · 100 · 3 = ?' },
        goiY: ['103 = 100 + 3.'], viSaoDung: '10000 + 600 + 9 = 10609.', loiGiai: S('103', 2) + ' = ' + S('(100 + 3)', 2) + ' = 10000 + 600 + 9 = <b>10609</b>.', giangLai: 'Vẽ hình vuông cạnh 103 chia thành: một hình vuông 100 × 100, hai hình chữ nhật 100 × 3 và một hình vuông nhỏ 3 × 3. Cộng diện tích: 10000 + 300 + 300 + 9.', tienBo: 'Em đã nhớ đủ ba hạng tử của bình phương một tổng.',
        nguon: sgk8('Bài 6 (trang 29–33), mục "Bình phương của một tổng"'), kiemTra: kt8(),
        tuongTu: { id: 'T8B-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc, bình phương một hiệu.', loai: 'so', de: 'Tính nhanh: ' + S('98', 2) + '.', dapAn: 9604, loi: [{ gt: 9996, nhan: 'Thiếu hạng tử 2AB', phanHoi: 'Quên −2·100·2.' }, { gt: 10404, nhan: 'Lỗi dấu', phanHoi: '(100 − 2)²: hạng tử giữa mang dấu −.' }], buoc: { hoi: '2·100·2 = ?', dapAn: 400, dung: 'Đúng.', sai: 'Nhân.' }, goiY: ['98 = 100 − 2.'], viSaoDung: '10000 − 400 + 4.', loiGiai: '<b>9604</b>.', giangLai: 'Hình vuông bị cắt bớt.', nguon: sgk8('Bài 6 (trang 29–33), mục "Bình phương của một hiệu"'), kiemTra: kt8() }
      },
      {
        id: 'T8B-04', muc: 'van-dung', liDoMuc: 'Biến đổi hằng đẳng thức để tính một biểu thức từ hiệu và tích.', loai: 'so', de: 'Cho x − y = 3 và xy = 4. Tính ' + S('x', 2) + ' + ' + S('y', 2) + '.', dapAn: 17,
        loi: [{ gt: 1, nhan: 'Lỗi dấu', phanHoi: 'Từ (x − y)² = x² + y² − 2xy suy ra x² + y² = (x − y)² <b>+</b> 2xy.' }, { gt: 9, nhan: 'Thiếu bước', phanHoi: '9 mới là (x − y)². Còn cộng 2xy.' }, { gt: 13, nhan: 'Thiếu hệ số 2', phanHoi: 'Phải cộng 2xy = 8, không phải xy = 4.' }],
        buoc: { hoi: 'Ta có ' + S('(x − y)', 2) + ' = ' + S('x', 2) + ' + ' + S('y', 2) + ' − k·xy. Hệ số k bằng bao nhiêu?', dapAn: 2, dung: 'Đúng. Vậy x² + y² = (x − y)² + 2xy = 9 + 8.', sai: '(A − B)² = A² − 2AB + B².' },
        goiY: ['Viết (x − y)² theo hằng đẳng thức.', 'x² + y² = (x − y)² + 2xy.'], viSaoDung: '9 + 2 · 4 = 17.', loiGiai: S('x', 2) + ' + ' + S('y', 2) + ' = ' + S('(x − y)', 2) + ' + 2xy = 9 + 8 = <b>17</b>.<br>(Kiểm tra: x = 4, y = 1 thoả mãn; 16 + 1 = 17 ✓)', giangLai: 'Không cần tìm x, y. Chỉ cần "nối" điều cần tìm với điều đã biết qua hằng đẳng thức (x − y)².', tienBo: 'Em đã dùng hằng đẳng thức để tính mà không cần tìm x, y.',
        nguon: sgk8('Bài 6 (trang 29–33), mục "Bình phương của một hiệu"'), kiemTra: kt8(),
        tuongTu: { id: 'T8B-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Cho x + y = 5 và xy = 6. Tính ' + S('x', 2) + ' + ' + S('y', 2) + '.', dapAn: 13, loi: [{ gt: 37, nhan: 'Lỗi dấu', phanHoi: 'x² + y² = (x + y)² − 2xy.' }, { gt: 25, nhan: 'Thiếu bước', phanHoi: 'Còn trừ 2xy.' }, { gt: 19, nhan: 'Thiếu hệ số 2', phanHoi: 'Trừ 2xy = 12.' }], buoc: { hoi: '(x + y)² = x² + y² + k·xy. k = ?', dapAn: 2, dung: 'Đúng.', sai: '2AB.' }, goiY: ['25 − 12.'], viSaoDung: '13.', loiGiai: '<b>13</b> (x = 2, y = 3: 4 + 9 ✓).', giangLai: 'Nối điều cần tìm với điều đã biết.', nguon: sgk8('Bài 6 (trang 29–33), mục "Bình phương của một tổng"'), kiemTra: kt8() }
      },
      {
        id: 'T8B-05', muc: 'nang-cao', liDoMuc: 'Nhiều bước với lập phương của một tổng; tính a³ + b³ từ tổng và tích.', loai: 'so', de: 'Cho a + b = 4 và ab = 3. Tính ' + S('a', 3) + ' + ' + S('b', 3) + '.', dapAn: 28,
        loi: [{ gt: 64, nhan: 'Thiếu bước', phanHoi: '64 = (a + b)³. Theo hằng đẳng thức còn phải trừ 3ab(a + b).' }, { gt: 100, nhan: 'Lỗi dấu', phanHoi: 'a³ + b³ = (a + b)³ <b>−</b> 3ab(a + b).' }, { gt: 52, nhan: 'Thiếu nhân tử', phanHoi: 'Em đã trừ 3(a + b) = 12. Phải trừ 3ab(a + b) = 3 · 3 · 4 = 36.' }],
        buoc: { hoi: 'Từ ' + S('(a + b)', 3) + ' = ' + S('a', 3) + ' + ' + S('b', 3) + ' + 3ab(a + b), hãy tính 3ab(a + b).', dapAn: 36, dung: 'Đúng: 3 · 3 · 4 = 36. Vậy a³ + b³ = 64 − 36.', sai: '3 · ab · (a + b) = 3 · 3 · 4.' },
        goiY: ['(a + b)³ = a³ + 3a²b + 3ab² + b³ = a³ + b³ + 3ab(a + b).', 'Hoặc dùng a³ + b³ = (a + b)(a² − ab + b²).'], viSaoDung: '64 − 36 = 28.',
        loiGiai: S('a', 3) + ' + ' + S('b', 3) + ' = ' + S('(a + b)', 3) + ' − 3ab(a + b) = 64 − 36 = <b>28</b>.<br>Cách khác: a² + b² = 16 − 6 = 10; ' + S('a', 3) + ' + ' + S('b', 3) + ' = (a + b)(a² − ab + b²) = 4 · (10 − 3) = 28.<br>Kiểm tra: a = 1, b = 3 thoả mãn; 1 + 27 = 28 ✓.',
        giangLai: 'Tìm thử hai số có tổng 4, tích 3: đó là 1 và 3. Khi đó 1³ + 3³ = 28. Hằng đẳng thức giúp ta tính được kể cả khi không đoán ra a, b.', tienBo: 'Em đã tách được (a + b)³ để rút ra a³ + b³.',
        nguon: sgk8('Bài 7 "Lập phương của một tổng hay một hiệu" (trang 34–36); Bài 8 "Tổng và hiệu hai lập phương" (từ trang 37)'), kiemTra: kt8(),
        tuongTu: { id: 'T8B-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Cho a + b = 5 và ab = 4. Tính ' + S('a', 3) + ' + ' + S('b', 3) + '.', dapAn: 65, loi: [{ gt: 125, nhan: 'Thiếu bước', phanHoi: 'Còn trừ 3ab(a + b).' }, { gt: 185, nhan: 'Lỗi dấu', phanHoi: 'Phải trừ.' }], buoc: { hoi: '3ab(a + b) = ?', dapAn: 60, dung: 'Đúng.', sai: '3·4·5.' }, goiY: ['125 − 60.'], viSaoDung: '65.', loiGiai: '<b>65</b> (a = 1, b = 4: 1 + 64 ✓).', giangLai: 'Đoán a, b để kiểm tra.', nguon: sgk8('Bài 7–8, từ trang 34'), kiemTra: kt8() }
      },
      {
        id: 'T8B-06', muc: 'nang-cao', liDoMuc: 'Phân tích thành nhân tử kết hợp hai cách, phát hiện sai lầm chia cả hai vế cho x.', loai: 'chonNhieu',
        de: '<b>Chọn TẤT CẢ</b> các giá trị của x thoả mãn ' + S('x', 3) + ' − 4x = 0.',
        phuongAn: [{ t: 'x = −2', dung: true }, { t: 'x = 0', dung: true }, { t: 'x = 2', dung: true }, { t: 'x = 4', phanHoi: 'Thử lại: 64 − 16 = 48 ≠ 0.' }, { t: 'x = −4', phanHoi: 'Thử lại: −64 + 16 = −48 ≠ 0.' }],
        goiY: ['Đặt nhân tử chung x, rồi dùng hiệu hai bình phương.', 'Tích bằng 0 khi một trong các thừa số bằng 0. Đừng chia hai vế cho x vì sẽ mất nghiệm x = 0.'], viSaoDung: 'x³ − 4x = x(x − 2)(x + 2) = 0 ⇔ x ∈ {−2; 0; 2}.',
        loiGiai: S('x', 3) + ' − 4x = x(' + S('x', 2) + ' − 4) = x(x − 2)(x + 2).<br>Tích bằng 0 khi x = 0 hoặc x − 2 = 0 hoặc x + 2 = 0, tức là <b>x ∈ {−2; 0; 2}</b>.<br>Sai lầm hay gặp: chia hai vế cho x được x² = 4 và bỏ mất nghiệm x = 0.',
        giangLai: 'Hãy coi x³ − 4x như "x nhân với (x² − 4)". Một tích bằng 0 thì ít nhất một thừa số bằng 0 — nên phải xét cả trường hợp x = 0.', tienBo: 'Em đã phân tích thành nhân tử và không để mất nghiệm x = 0.',
        nguon: sgk8('Bài 9 "Phân tích đa thức thành nhân tử", từ trang 42 (đặt nhân tử chung; sử dụng hằng đẳng thức)'), kiemTra: kt8(),
        tuongTu: { id: 'T8B-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các giá trị của x thoả mãn ' + S('x', 3) + ' − 9x = 0.', phuongAn: [{ t: 'x = −3', dung: true }, { t: 'x = 0', dung: true }, { t: 'x = 3', dung: true }, { t: 'x = 9', phanHoi: '729 − 81 ≠ 0.' }], goiY: ['x(x − 3)(x + 3).'], viSaoDung: '{−3; 0; 3}.', loiGiai: '<b>x ∈ {−3; 0; 3}</b>.', giangLai: 'Không chia cho x.', nguon: sgk8('Bài 9, từ trang 42'), kiemTra: kt8() }
      }
    ]
  };

  /* ==================================================================
     ĐỐI CHIẾU SGK — KHOA HỌC TỰ NHIÊN 7 (đã mở và đọc ngày 26/11/2026)
     Giáo viên sửa vị trí ở đây nếu dùng ấn bản khác. Số trang theo số in trên sách.
     ================================================================== */
  const SGK_KHTN7_DOC = {
    tenTaiLieu: 'Khoa học tự nhiên 7 (bộ sách "Kết nối tri thức với cuộc sống")',
    tacGia: 'Vũ Văn Hùng (Tổng Chủ biên); Mai Văn Hưng, Lê Kim Long, Bùi Gia Thịnh (đồng Chủ biên) và nhóm tác giả',
    donViPhatHanh: 'Nhà xuất bản Giáo dục Việt Nam',
    anBan: 'Bản quyền 2022 · ISBN 978-604-0-30713-2 · Mã số G1HH7K001H22',
    banDoc: 'Bản PDF trong thư mục Google Drive "Bo sach ket noi tri thuc 6 - 7 - 8 - 9" › "Tin 7" (chia sẻ cho giáo viên); đọc ngày 26/11/2026'
  };
  // [id, vị trí, loại ('C' hoặc 'B'), phần đã thay đổi (với B), ghi chú]
  const DC_KHTN7 = [
    ['VL7-01', 'Bài 8 "Tốc độ chuyển động", mục I, trang 45 (công thức 8.1: v = s/t)'],
    ['VL7-01-TT', 'Bài 8, mục I, trang 45 (công thức 8.1)'],
    ['VL7-02', 'Bài 8, mục I, trang 45–46 (khái niệm tốc độ chuyển động)'],
    ['VL7-02-TT', 'Bài 8, mục II, trang 46 (Bảng 8.1 — các đơn vị đo tốc độ thường dùng)'],
    ['VL7-03', 'Bài 8, mục II, trang 46 (đơn vị m/s, km/h; 1 m/s = 3,6 km/h)'],
    ['VL7-03-TT', 'Bài 8, mục II, trang 46 (đổi đơn vị tốc độ)'],
    ['VL7-04', 'Bài 8, mục I, trang 45 (hai cách xác định sự nhanh, chậm; công thức 8.1)'],
    ['VL7-04-TT', 'Bài 8, mục I, trang 45'],
    ['VL7-05', 'Bài 8, trang 46 (khung kiến thức: "tốc độ trung bình của chuyển động")'],
    ['VL7-05-TT', 'Bài 8, trang 46 (tốc độ trung bình)'],
    ['VL7-06', 'Bài 8, trang 46 (tốc độ trung bình; s = v.t và t = s/v)'],
    ['VL7-06-TT', 'Bài 8, trang 46 (tốc độ trung bình)'],
    ['HH7-01', 'Bài 2 "Nguyên tử", mục II–III, trang 15–17 (hạt nhân mang điện dương: proton mang điện dương, neutron không mang điện; electron mang điện âm)'],
    ['HH7-01-TT', 'Bài 2, trang 15–18 (neutron không mang điện)'],
    ['HH7-02', 'Bài 2, trang 17 (nguyên tử trung hoà về điện: tổng số proton bằng tổng số electron)'],
    ['HH7-02-TT', 'Bài 2, trang 17'],
    ['HH7-03', 'Bài 2, mục IV "Khối lượng nguyên tử", trang 18 — dữ kiện lấy từ câu hỏi 2 của mục này (nguyên tử nhôm 13p, 14n)', 'B',
      'Giữ dữ kiện nguyên tử nhôm (13p, 14n); đổi yêu cầu từ so sánh khối lượng nhôm với đồng sang tính khối lượng nguyên tử nhôm theo amu; thêm phản hồi cho các lỗi thường gặp.'],
    ['HH7-03-TT', 'Bài 2, mục IV, trang 18 (đơn vị amu; proton ≈ neutron ≈ 1 amu; electron ≈ 0,00055 amu)'],
    ['HH7-04', 'Bài 2, trang 15 và 17 (lớp electron thứ nhất tối đa 2 electron, lớp thứ hai tối đa 8 electron; Hình 2.5 nguyên tử nitrogen)'],
    ['HH7-04-TT', 'Bài 2, trang 15, 17–18 (các lớp electron; Hình 2.6 sơ đồ ba lớp electron của chlorine)'],
    ['HH7-05', 'Bài 2, trang 17–18 (số proton = số electron; khối lượng nguyên tử tập trung ở hạt nhân)'],
    ['HH7-05-TT', 'Bài 2, trang 17–18'],
    ['HH7-06', 'Bài 2, trang 16–18 (thành phần hạt nhân, vỏ nguyên tử; số proton = số electron)', 'C', null, 'Dạng bài "tổng số hạt" không có trong Bài 2 của SGK; đây là bài nâng cao tự biên soạn dựa trên kiến thức của bài.'],
    ['HH7-06-TT', 'Bài 2, trang 16–18', 'C', null, 'Dạng bài nâng cao, không có trong SGK.'],
    ['SH7-01', 'Bài 22 "Quang hợp ở thực vật", mục I, trang 101 (Bảng 22.1, Hình 22.1, phương trình tổng quát)'],
    ['SH7-01-TT', 'Bài 22, mục I, trang 101'],
    ['SH7-02', 'Bài 22, mục I, trang 101 (bào quan quang hợp là lục lạp); trang 103 (Bảng 22.2)'],
    ['SH7-02-TT', 'Bài 22, trang 101 và 103 (lục lạp chứa diệp lục, hấp thụ năng lượng ánh sáng)'],
    ['SH7-03', 'Bài 22, trang 101–102; Bài 24 "Thực hành: Chứng minh quang hợp ở cây xanh", trang 108 (bước đặt cây trong bóng tối 2 ngày)'],
    ['SH7-03-TT', 'Bài 22, trang 103 (Bảng 22.2: vai trò của khí khổng trong quang hợp)'],
    ['SH7-04', 'Bài 22, mục I.2 "Phương trình tổng quát", trang 101'],
    ['SH7-04-TT', 'Bài 22, mục I.2, trang 101 (glucose liên kết tạo thành tinh bột)'],
    ['SH7-05', 'Bài 24 "Thực hành: Chứng minh quang hợp ở cây xanh", mục II.1 "Thí nghiệm chứng minh tinh bột được tạo thành trong quang hợp", trang 108–109', 'B',
      'Giữ cách tiến hành của thí nghiệm trong SGK; thêm bảng kết quả mô phỏng và đổi yêu cầu thành chọn các kết luận được dữ liệu ủng hộ.'],
    ['SH7-05-TT', 'Bài 23 "Một số yếu tố ảnh hưởng đến quang hợp", mục I.1 "Ánh sáng", trang 104; Bài 24, trang 108 (mẫu vật rong đuôi chó)'],
    ['SH7-06', 'Bài 22, trang 101–103 (nguyên liệu, sản phẩm; trao đổi chất và chuyển hoá năng lượng)'],
    ['SH7-06-TT', 'Bài 23, mục I.1 "Ánh sáng", trang 104; Bài 22, trang 103 (mục "Em có thể")']
  ];
  const BAI_KHTN7 = {
    'vl7-toc-do': { sgk: 'SGK KHTN 7 — Bài 8, trang 45–48', viTri: 'Bài 8 "Tốc độ chuyển động", trang 45–46 (đã đọc mục tiêu, mục I, mục II)', yccd: 'Đã đối chiếu với mục tiêu Bài 8 trong SGK KHTN 7 (trang 45).' },
    'hh7-nguyen-tu': { sgk: 'SGK KHTN 7 — Bài 2, trang 14–18', viTri: 'Bài 2 "Nguyên tử", trang 15–18 (mục II, III, IV và "Em đã học")', yccd: 'Đã đối chiếu với nội dung Bài 2 trong SGK KHTN 7 (trang 14–18).' },
    'sh7-quang-hop': { sgk: 'SGK KHTN 7 — Bài 22, trang 101–103', viTri: 'Bài 22 "Quang hợp ở thực vật", trang 101–103 (mục tiêu, mục I, Bảng 22.2, "Em đã học")', yccd: 'Đã đối chiếu với mục tiêu Bài 22 trong SGK KHTN 7 (trang 101).' }
  };
  function apDungDoiChieu(chuDe) {
    const map = Object.fromEntries(DC_KHTN7.map(r => [r[0], r]));
    chuDe.forEach(t => {
      const b = BAI_KHTN7[t.id]; if (!b) return;
      t.sgk = b.sgk; t.yccdGhiChu = b.yccd;
      t.bai.nguon = Object.assign({}, t.bai.nguon, SGK_KHTN7_DOC, { canCu: 'Đã đối chiếu: SGK KHTN 7 — ' + b.viTri, viTri: b.viTri, canDoiChieu: null });
      t.cauHoi.forEach(q => [q, q.tuongTu].forEach(x => {
        const r = x && map[x.id]; if (!r) return;
        const [, viTri, loai, thayDoi, ghiChu] = r;
        const n = Object.assign({}, x.nguon, SGK_KHTN7_DOC, { viTri, canCu: 'Đã đối chiếu: SGK KHTN 7 — ' + viTri, canDoiChieu: null, ghiChu: ghiChu || null });
        if (loai === 'B') Object.assign(n, { loai: 'B', loaiTen: 'Bài tập phỏng theo SGK Khoa học tự nhiên 7 (Kết nối tri thức)', thayDoi });
        x.nguon = n;
        x.kiemTra = Object.assign({}, x.kiemTra, { doiChieuNguon: 'da-doi-chieu', ngayDoiChieu: '26/11/2026' });
      }));
    });
  }

  /* ==================================================================
     ĐỢT 3 — LỚP 6 (soạn ngày 26/11/2026)
     Câu hỏi tự biên soạn (loại C). Căn cứ kiến thức: tên bài và số trang
     đọc từ MỤC LỤC sách giáo viên lớp 6 bộ "Kết nối tri thức với cuộc sống"
     (bản PDF trong thư mục Drive "Tin 6"). Số trang là trang SGV, chưa đối
     chiếu số trang SGK học sinh.
     ================================================================== */
  const SGV_TOAN6 = {
    ngan: 'SGV Toán 6',
    tenTaiLieu: 'Toán 6 — Sách giáo viên (bộ "Kết nối tri thức với cuộc sống")',
    tacGia: 'Hà Huy Khoái (Tổng Chủ biên), Nguyễn Huy Đoan (Chủ biên), Nguyễn Cao Cường, Trần Mạnh Cường, Doãn Minh Cường, Sĩ Đức Quang, Lưu Bá Thắng (theo bìa sách)',
    donViPhatHanh: 'Nhà xuất bản Giáo dục Việt Nam',
    anBan: 'Bản PDF 221 trang; chưa xem trang ghi năm in, ISBN',
    banDoc: 'Bản PDF trong thư mục Google Drive "Tin 6"; đọc mục lục ngày 26/11/2026'
  };
  const SGV_KHTN6 = {
    ngan: 'SGV Khoa học tự nhiên 6',
    tenTaiLieu: 'Khoa học tự nhiên 6 — Sách giáo viên (bộ "Kết nối tri thức với cuộc sống")',
    tacGia: 'Chờ đối chiếu (chưa đọc trang ghi tên tác giả)',
    donViPhatHanh: 'Nhà xuất bản Giáo dục Việt Nam',
    anBan: 'Bản PDF 235 trang; chưa xem trang ghi năm in, ISBN',
    banDoc: 'Bản PDF trong thư mục Google Drive "Tin 6"; đọc mục lục ngày 26/11/2026'
  };
  const SGV_TA6 = {
    ngan: 'SGV Tiếng Anh 6 Global Success',
    tenTaiLieu: 'Tiếng Anh 6 Global Success — Sách giáo viên (bộ "Kết nối tri thức với cuộc sống")',
    tacGia: 'Hoàng Văn Vân (Tổng Chủ biên), Nguyễn Thị Chi (Chủ biên), Lê Kim Dung, Phan Chí Nghĩa, Vũ Mai Trang, Lương Quỳnh Trang, Nguyễn Quốc Tuấn (theo bìa sách)',
    donViPhatHanh: 'Nhà xuất bản Giáo dục Việt Nam (hợp tác Pearson)',
    anBan: 'Bản PDF 193 trang; chưa xem trang ghi năm in, ISBN',
    banDoc: 'Bản PDF trong thư mục Google Drive "Tin 6"; đọc phần Objectives của Unit 1, 3, 4 và Review 1 ngày 26/11/2026'
  };
  const sgv6 = (doc, viTri) => Object.assign(tuSoan(null), doc, {
    canCu: 'Đã đối chiếu: ' + doc.ngan + ' — ' + viTri, viTri,
    ghiChu: doc === SGV_TA6 ? 'Đối chiếu theo mục tiêu (Objectives) của Unit trong SGV; chưa ghi số trang SGK học sinh.' : 'Số trang là trang sách giáo viên (theo mục lục SGV); chưa đối chiếu số trang SGK học sinh.'
  });
  const N6T = v => sgv6(SGV_TOAN6, v), N6K = v => sgv6(SGV_KHTN6, v), N6A = v => sgv6(SGV_TA6, v);
  const K6 = c => Object.assign(kt(c), { doiChieuNguon: 'da-doi-chieu', ngayDoiChieu: NGAY_SOAN });
  const YCCD6 = 'Yêu cầu cần đạt do nhóm biên soạn tóm tắt theo tên bài trong mục lục SGV; chưa đối chiếu nguyên văn Chương trình GDPT 2018.';

  /* ---------------- TOÁN 6 ---------------- */
  const t6TapHop = {
    id: 'toan6-so-tu-nhien', lop: 6, mon: 'toan', phanMon: 'Số và Đại số', ten: 'Tập hợp các số tự nhiên',
    sgk: 'SGV Toán 6 — Chương I, Bài 1–7, SGV tr. 26–49', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Bốn phép tính với số tự nhiên (tiểu học)', 'Thứ tự trong biểu thức có ngoặc'],
    yeuCauCanDat: ['Viết tập hợp bằng cách liệt kê và chỉ ra tính chất đặc trưng; dùng kí hiệu ∈, ∉.', 'Đọc, viết số La Mã đơn giản.', 'Thực hiện phép tính luỹ thừa với số mũ tự nhiên; nhân, chia hai luỹ thừa cùng cơ số.', 'Thực hiện đúng thứ tự các phép tính.'],
    bai: {
      mucTieu: ['đếm đúng số phần tử của một tập hợp;', 'đọc số La Mã;', 'nhân, chia hai luỹ thừa cùng cơ số;', 'tính biểu thức theo đúng thứ tự.'],
      khoiDong: { hoi: 'Lớp em có các bạn tên An, Bình, Chi. Hãy viết tập hợp M các bạn đó. Bình có thuộc M không?', goiY: 'M = {An; Bình; Chi}. Bình ∈ M.' },
      trongTam: [
        '<b>Tập hợp</b>: viết các phần tử trong dấu { }, cách nhau bởi dấu ";". a thuộc A viết a ∈ A, không thuộc viết a ∉ A.',
        'ℕ = {0; 1; 2; 3; …} là tập hợp số tự nhiên; ℕ* là tập hợp số tự nhiên <b>khác 0</b>.',
        'Số La Mã: I = 1, V = 5, X = 10. Chữ nhỏ đứng <b>trước</b> chữ lớn thì trừ (IV = 4, IX = 9); đứng <b>sau</b> thì cộng (VI = 6, XI = 11).',
        '<b>Luỹ thừa</b>: a<sup>n</sup> = a · a · … · a (n thừa số). ' + S('a', 'm') + ' · ' + S('a', 'n') + ' = ' + S('a', 'm+n') + '; ' + S('a', 'm') + ' : ' + S('a', 'n') + ' = ' + S('a', 'm−n') + ' (a ≠ 0, m ≥ n).',
        '<b>Thứ tự thực hiện</b>: ngoặc tròn ( ) → ngoặc vuông [ ] → ngoặc nhọn { }; trong mỗi bước: luỹ thừa → nhân, chia → cộng, trừ.'
      ],
      viDu: { de: 'Tính 3 + 2 · ' + S('4', 2) + '.', loiGiai: 'Luỹ thừa trước: ' + S('4', 2) + ' = 16. Nhân: 2 · 16 = 32. Cộng: 3 + 32 = <b>35</b>.' },
      nguon: N6T('Chương I "Tập hợp các số tự nhiên", Bài 1–7 (SGV tr. 26–49)'),
      hoiDap: [
        { tu: ['luy thua', 'so mu'], tl: 'Nhân hai luỹ thừa cùng cơ số: giữ cơ số, <b>cộng</b> số mũ. Chia: giữ cơ số, <b>trừ</b> số mũ.' },
        { tu: ['thu tu', 'ngoac'], tl: 'Làm trong ngoặc trước. Trong mỗi bước: luỹ thừa → nhân chia → cộng trừ.' },
        { tu: ['la ma'], tl: 'Chữ nhỏ đứng trước chữ lớn thì trừ (IX = 9), đứng sau thì cộng (XI = 11).' },
        { tu: ['phan tu', 'tap hop'], tl: 'Liệt kê từng phần tử rồi đếm; chú ý dấu ≤ (có lấy) và < (không lấy).' }
      ]
    },
    cauHoi: [
      {
        id: 'T6A-01', muc: 'co-ban', liDoMuc: 'Liệt kê phần tử theo tính chất đặc trưng rồi đếm.', loai: 'so',
        de: 'Tập hợp A = {x ∈ ℕ | 3 ≤ x &lt; 9} có bao nhiêu phần tử?', dapAn: 6,
        loi: [{ gt: 7, nhan: 'Nhầm dấu bất đẳng thức', phanHoi: 'Dấu "&lt; 9" nghĩa là <b>không</b> lấy số 9.' }, { gt: 5, nhan: 'Nhầm dấu bất đẳng thức', phanHoi: 'Dấu "3 ≤" nghĩa là <b>có</b> lấy số 3.' }],
        buoc: { hoi: 'Phần tử nhỏ nhất của A là số nào?', dapAn: 3, dung: 'Đúng. Phần tử lớn nhất là 8. Đếm từ 3 đến 8.', sai: '"3 ≤ x" nghĩa là x có thể bằng 3.' },
        goiY: ['Liệt kê: A = {3; 4; …}.'], viSaoDung: 'A = {3; 4; 5; 6; 7; 8} có 6 phần tử.', loiGiai: 'A = {3; 4; 5; 6; 7; 8} → <b>6</b> phần tử.',
        giangLai: '"≤" có gạch dưới nghĩa là "nhỏ hơn <b>hoặc bằng</b>" → lấy cả số đó. "&lt;" không có gạch → không lấy.', tienBo: 'Em đã đọc đúng dấu ≤ và &lt;.',
        nguon: N6T('Bài 1 "Tập hợp" (SGV tr. 27)'), kiemTra: K6(),
        tuongTu: { id: 'T6A-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, thêm ℕ*.', loai: 'so', de: 'Tập hợp B = {x ∈ ℕ* | x ≤ 7} có bao nhiêu phần tử?', dapAn: 7, loi: [{ gt: 8, nhan: 'Nhầm ℕ*', phanHoi: 'ℕ* không có số 0.' }, { gt: 6, nhan: 'Nhầm dấu bất đẳng thức', phanHoi: '"≤ 7" có lấy số 7.' }], buoc: { hoi: 'Phần tử nhỏ nhất của B?', dapAn: 1, dung: 'Đúng: ℕ* bắt đầu từ 1.', sai: 'ℕ* không chứa 0.' }, goiY: ['ℕ* bắt đầu từ 1.'], viSaoDung: 'B = {1; …; 7}.', loiGiai: '<b>7</b> phần tử.', giangLai: 'Dấu * nghĩa là bỏ số 0.', nguon: N6T('Bài 1 "Tập hợp" (SGV tr. 27)'), kiemTra: K6() }
      },
      {
        id: 'T6A-02', muc: 'co-ban', liDoMuc: 'Đọc số La Mã theo quy tắc cộng, trừ.', loai: 'chon1', de: 'Số La Mã <b>XIV</b> biểu thị số nào?',
        phuongAn: [{ t: '14', dung: true }, { t: '16', phanHoi: 'Đó là XVI. Ở XIV, I đứng <b>trước</b> V nên IV = 5 − 1 = 4.' }, { t: '4', phanHoi: 'Em quên chữ X = 10 ở đầu.' }, { t: '114', phanHoi: 'Số La Mã không ghép chữ số như số thập phân.' }],
        goiY: ['Tách: X | IV.'], viSaoDung: 'X = 10, IV = 4 → 14.', loiGiai: 'XIV = X + IV = 10 + 4 = <b>14</b>.', giangLai: 'Đọc từ trái sang phải theo từng cụm: X (10), rồi IV (I đứng trước V → 5 − 1).', tienBo: 'Em đã nhận ra cụm IV.',
        nguon: N6T('Bài 2 "Cách ghi số tự nhiên" (SGV tr. 29)'), kiemTra: K6(),
        tuongTu: { id: 'T6A-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Số La Mã <b>XXIX</b> biểu thị số nào?', phuongAn: [{ t: '29', dung: true }, { t: '31', phanHoi: 'Đó là XXXI. IX = 9.' }, { t: '21', phanHoi: 'Em đọc thành XXI.' }, { t: '19', phanHoi: 'Có hai chữ X.' }], goiY: ['Tách: XX | IX.'], viSaoDung: '20 + 9.', loiGiai: '<b>29</b>.', giangLai: 'IX: I trước X → 10 − 1 = 9.', nguon: N6T('Bài 2 (SGV tr. 29)'), kiemTra: K6() }
      },
      {
        id: 'T6A-03', muc: 'van-dung', liDoMuc: 'Kết hợp hai quy tắc nhân và chia luỹ thừa cùng cơ số.', loai: 'so',
        de: 'Tính: ' + S('2', 3) + ' · ' + S('2', 4) + ' : ' + S('2', 5) + '.', dapAn: 4,
        loi: [{ gt: 128, nhan: 'Lỗi luỹ thừa', phanHoi: 'Khi nhân hai luỹ thừa cùng cơ số, em <b>cộng</b> số mũ (3 + 4), không nhân số mũ.' }, { gt: 2, nhan: 'Chưa tính giá trị', phanHoi: '2 là số mũ của kết quả. Đề yêu cầu tính giá trị: ' + S('2', 2) + ' = ?' }],
        buoc: { hoi: 'Kết quả viết dưới dạng 2<sup>n</sup>. n bằng bao nhiêu?', dapAn: 2, dung: 'Đúng: 3 + 4 − 5 = 2. Vậy giá trị là 2² = ?', sai: 'Cộng số mũ khi nhân, trừ khi chia: 3 + 4 − 5.' },
        goiY: ['Nhân: cộng số mũ. Chia: trừ số mũ.'], viSaoDung: S('2', 3) + ' · ' + S('2', 4) + ' : ' + S('2', 5) + ' = ' + S('2', 2) + ' = 4.', loiGiai: S('2', '3+4−5') + ' = ' + S('2', 2) + ' = <b>4</b>.',
        giangLai: 'Viết ra cho dễ thấy: ' + S('2', 3) + ' · ' + S('2', 4) + ' là 3 + 4 = 7 thừa số 2. Chia cho 5 thừa số 2 thì còn 2 thừa số: 2 · 2 = 4.', tienBo: 'Em đã cộng và trừ số mũ đúng quy tắc.',
        nguon: N6T('Bài 6 "Luỹ thừa với số mũ tự nhiên" (SGV tr. 41)'), kiemTra: K6(),
        tuongTu: { id: 'T6A-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính: ' + S('3', 5) + ' · ' + S('3', 2) + ' : ' + S('3', 4) + '.', dapAn: 27, loi: [{ gt: 729, nhan: 'Lỗi luỹ thừa', phanHoi: 'Cộng số mũ khi nhân, không nhân số mũ.' }, { gt: 3, nhan: 'Chưa tính giá trị', phanHoi: 'Đó là số mũ. Tính 3³.' }], buoc: { hoi: 'Kết quả là 3<sup>n</sup>. n = ?', dapAn: 3, dung: 'Đúng: 5 + 2 − 4 = 3.', sai: '5 + 2 − 4.' }, goiY: ['5 + 2 − 4.'], viSaoDung: '3³ = 27.', loiGiai: S('3', 3) + ' = <b>27</b>.', giangLai: 'Đếm số thừa số 3 còn lại.', nguon: N6T('Bài 6 (SGV tr. 41)'), kiemTra: K6() }
      },
      {
        id: 'T6A-04', muc: 'van-dung', liDoMuc: 'Biểu thức có ngoặc tròn, ngoặc vuông và luỹ thừa.', loai: 'so',
        de: 'Tính: 2 · [48 − ' + S('(7 − 3)', 2) + '] + 5.', dapAn: 69,
        loi: [{ gt: 85, nhan: 'Lỗi luỹ thừa', phanHoi: 'Có vẻ em tính 4² = 4 · 2 = 8. Thực ra 4² = 4 · 4.' }, { gt: 74, nhan: 'Lỗi thứ tự phép tính', phanHoi: 'Em đã cộng 5 vào trong ngoặc. Phép nhân 2 · [ ] phải làm trước phép cộng 5.' }],
        buoc: { hoi: 'Giá trị của ' + S('(7 − 3)', 2) + ' là bao nhiêu?', dapAn: 16, dung: 'Đúng. Trong ngoặc vuông: 48 − 16 = 32.', sai: '7 − 3 = 4; 4² = 4 · 4.' },
        goiY: ['Làm ngoặc tròn → luỹ thừa → ngoặc vuông → nhân → cộng.'], viSaoDung: '2 · (48 − 16) + 5 = 64 + 5 = 69.', loiGiai: '(7 − 3)² = 4² = 16; 48 − 16 = 32; 2 · 32 = 64; 64 + 5 = <b>69</b>.',
        giangLai: 'Gạch chân từng bước và viết lại cả biểu thức sau mỗi bước — mỗi lần chỉ làm một phép.', tienBo: 'Em đã làm đúng thứ tự từ trong ra ngoài.',
        nguon: N6T('Bài 7 "Thứ tự thực hiện các phép tính" (SGV tr. 45)'), kiemTra: K6(),
        tuongTu: { id: 'T6A-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính: 3 · [50 − ' + S('(9 − 4)', 2) + '] − 7.', dapAn: 68, loi: [{ gt: 113, nhan: 'Lỗi luỹ thừa', phanHoi: '5² = 5 · 5 = 25, không phải 10.' }, { gt: 54, nhan: 'Lỗi thứ tự phép tính', phanHoi: 'Nhân 3 · [ ] trước rồi mới trừ 7.' }], buoc: { hoi: '(9 − 4)² = ?', dapAn: 25, dung: 'Đúng.', sai: '5 · 5.' }, goiY: ['Ngoặc tròn → luỹ thừa → ngoặc vuông.'], viSaoDung: '3 · 25 − 7.', loiGiai: '<b>68</b>.', giangLai: 'Mỗi lần một phép.', nguon: N6T('Bài 7 (SGV tr. 45)'), kiemTra: K6() }
      },
      {
        id: 'T6A-05', muc: 'nang-cao', liDoMuc: 'Tìm x: phải tính vế phải có luỹ thừa rồi giải ngược hai bước.', loai: 'so',
        de: 'Tìm số tự nhiên x, biết: 2 · x + ' + S('3', 2) + ' = ' + S('5', 2) + ' − ' + S('2', 3) + ' + 12.', dapAn: 10,
        loi: [{ gt: 20, nhan: 'Thiếu bước', phanHoi: '20 là giá trị của 2 · x. Còn phải chia cho 2.' }, { gt: 19, nhan: 'Lỗi tìm số hạng', phanHoi: 'Tìm số hạng chưa biết: lấy tổng <b>trừ</b> số hạng đã biết (29 − 9), không cộng.' }],
        buoc: { hoi: 'Vế phải ' + S('5', 2) + ' − ' + S('2', 3) + ' + 12 bằng bao nhiêu?', dapAn: 29, dung: 'Đúng. Vậy 2x + 9 = 29.', sai: '25 − 8 + 12.' },
        goiY: ['Tính vế phải trước.', '2x + 9 = 29 → 2x = 29 − 9.'], viSaoDung: '2x = 20 → x = 10.', loiGiai: 'Vế phải: 25 − 8 + 12 = 29. 2x + 9 = 29 ⇒ 2x = 20 ⇒ x = <b>10</b>.<br>Thử lại: 2 · 10 + 9 = 29 ✓',
        giangLai: 'Coi "2x" là một ô trống: ô + 9 = 29 → ô = 20. Rồi 2 · x = 20 → x = 10. Luôn thử lại bằng cách thay x vào.', tienBo: 'Em đã giải ngược đúng hai bước và thử lại.',
        nguon: N6T('Bài 5 "Phép nhân và phép chia số tự nhiên" (SGV tr. 37); Bài 6–7 (SGV tr. 41–45)'), kiemTra: K6(),
        tuongTu: { id: 'T6A-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tìm số tự nhiên x, biết: 3 · x − ' + S('2', 2) + ' = ' + S('4', 2) + ' + ' + S('2', 3) + ' − 1.', dapAn: 9, loi: [{ gt: 27, nhan: 'Thiếu bước', phanHoi: '27 là 3 · x. Chia tiếp cho 3.' }], buoc: { hoi: 'Vế phải bằng bao nhiêu?', dapAn: 23, dung: 'Đúng: 3x − 4 = 23.', sai: '16 + 8 − 1.' }, goiY: ['3x − 4 = 23 → 3x = 23 + 4.'], viSaoDung: '3x = 27 → x = 9.', loiGiai: 'x = <b>9</b>.', giangLai: 'Số bị trừ = hiệu + số trừ.', nguon: N6T('Bài 5–7 (SGV tr. 37–45)'), kiemTra: K6() }
      },
      {
        id: 'T6A-06', muc: 'nang-cao', liDoMuc: 'Đánh giá nhiều khẳng định, cần phát hiện lỗi quy tắc luỹ thừa.', loai: 'chonNhieu',
        de: '<b>Chọn TẤT CẢ</b> các khẳng định đúng.',
        phuongAn: [{ t: S('2', 3) + ' · ' + S('2', 2) + ' = ' + S('2', 5), dung: true }, { t: S('3', 6) + ' : ' + S('3', 2) + ' = ' + S('3', 3), phanHoi: 'Chia thì trừ số mũ: 6 − 2 = 4, không chia 6 : 2.' }, { t: S('10', 3) + ' = 1000', dung: true }, { t: S('2', 4) + ' = ' + S('4', 2), dung: true }, { t: S('2', 3) + ' = 6', phanHoi: '2³ = 2 · 2 · 2 = 8, không phải 2 · 3.' }],
        goiY: ['Tính thử từng vế.', 'Chia luỹ thừa cùng cơ số: trừ số mũ.'], viSaoDung: 'Ý 1, 3, 4 đúng (2⁴ = 16 = 4²).', loiGiai: 'Đúng: 2³·2² = 2⁵; 10³ = 1000; 2⁴ = 16 = 4². Sai: 3⁶ : 3² = 3⁴; 2³ = 8.',
        giangLai: 'Khi nghi ngờ, hãy tính ra số cụ thể ở hai vế rồi so sánh.', tienBo: 'Em đã kiểm tra từng khẳng định bằng cách tính.',
        nguon: N6T('Bài 6 "Luỹ thừa với số mũ tự nhiên" (SGV tr. 41)'), kiemTra: K6(),
        tuongTu: { id: 'T6A-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các khẳng định đúng.', phuongAn: [{ t: S('5', 2) + ' · 5 = ' + S('5', 3), dung: true }, { t: S('7', 8) + ' : ' + S('7', 4) + ' = ' + S('7', 2), phanHoi: '8 − 4 = 4.' }, { t: S('2', 5) + ' = 32', dung: true }, { t: S('3', 2) + ' = ' + S('2', 3), phanHoi: '9 ≠ 8.' }], goiY: ['5 = 5¹.'], viSaoDung: 'Ý 1, 3.', loiGiai: 'Ý 1 và 3 đúng.', giangLai: 'Tính ra số cụ thể.', nguon: N6T('Bài 6 (SGV tr. 41)'), kiemTra: K6() }
      }
    ]
  };

  const t6ChiaHet = {
    id: 'toan6-chia-het', lop: 6, mon: 'toan', phanMon: 'Số và Đại số', ten: 'Tính chia hết trong tập hợp số tự nhiên',
    sgk: 'SGV Toán 6 — Chương II, Bài 8–12, SGV tr. 50–72', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Phép chia hết và phép chia có dư', 'Luỹ thừa (Chương I)'],
    yeuCauCanDat: ['Vận dụng dấu hiệu chia hết cho 2, 5, 3, 9.', 'Nhận biết số nguyên tố, hợp số; phân tích một số ra thừa số nguyên tố.', 'Tìm ƯCLN, BCNN và vận dụng giải bài toán thực tế.'],
    bai: {
      mucTieu: ['nhận ra số chia hết cho 2, 5, 3, 9;', 'nhận biết số nguyên tố;', 'tìm ƯCLN và BCNN bằng phân tích ra thừa số nguyên tố;', 'chọn đúng ƯCLN hay BCNN cho bài toán thực tế.'],
      khoiDong: { hoi: 'Có 12 cái kẹo chia đều cho các bạn, mỗi bạn được số kẹo như nhau và không thừa. Có thể chia cho mấy bạn?', goiY: '1, 2, 3, 4, 6 hoặc 12 bạn — đó là các <b>ước</b> của 12.' },
      trongTam: [
        'Dấu hiệu: chữ số tận cùng chẵn → chia hết cho <b>2</b>; tận cùng 0 hoặc 5 → chia hết cho <b>5</b>; tổng các chữ số chia hết cho 3 (cho 9) → số đó chia hết cho <b>3</b> (cho <b>9</b>).',
        '<b>Số nguyên tố</b>: số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó. Số 0 và 1 không là số nguyên tố, cũng không là hợp số.',
        '<b>ƯCLN</b>: phân tích ra thừa số nguyên tố, lấy các thừa số <b>chung</b>, mỗi thừa số lấy số mũ <b>nhỏ nhất</b>.',
        '<b>BCNN</b>: lấy các thừa số chung <b>và riêng</b>, mỗi thừa số lấy số mũ <b>lớn nhất</b>.',
        'Bài toán "chia đều nhiều nhất" → ƯCLN. Bài toán "lại gặp nhau sớm nhất / ít nhất" → BCNN.'
      ],
      viDu: { de: 'Tìm ƯCLN(24, 36) và BCNN(24, 36).', loiGiai: '24 = ' + S('2', 3) + ' · 3; 36 = ' + S('2', 2) + ' · ' + S('3', 2) + '.<br>ƯCLN = ' + S('2', 2) + ' · 3 = <b>12</b>; BCNN = ' + S('2', 3) + ' · ' + S('3', 2) + ' = <b>72</b>.' },
      nguon: N6T('Chương II "Tính chia hết trong tập hợp các số tự nhiên", Bài 8–12 (SGV tr. 50–72)'),
      hoiDap: [
        { tu: ['ucln', 'uoc chung'], tl: 'ƯCLN: thừa số chung, số mũ nhỏ nhất.' },
        { tu: ['bcnn', 'boi chung'], tl: 'BCNN: thừa số chung và riêng, số mũ lớn nhất.' },
        { tu: ['nguyen to'], tl: 'Số nguyên tố > 1 và chỉ có 2 ước: 1 và chính nó. Ví dụ 2, 3, 5, 7, 11, 13.' },
        { tu: ['dau hieu', 'chia het cho 3', 'chia het cho 9'], tl: 'Cộng các chữ số: tổng chia hết cho 3 (9) thì số đó chia hết cho 3 (9).' }
      ]
    },
    cauHoi: [
      {
        id: 'T6B-01', muc: 'co-ban', liDoMuc: 'Áp dụng trực tiếp dấu hiệu chia hết cho 2 và 5.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các số chia hết cho <b>cả 2 và 5</b>.',
        phuongAn: [{ t: '120', dung: true }, { t: '135', phanHoi: '135 tận cùng là 5 (lẻ) nên không chia hết cho 2.' }, { t: '250', dung: true }, { t: '402', phanHoi: '402 tận cùng là 2 nên không chia hết cho 5.' }],
        goiY: ['Chia hết cho cả 2 và 5 ⇔ tận cùng là 0.'], viSaoDung: '120 và 250 tận cùng là 0.', loiGiai: '<b>120; 250</b>.', giangLai: 'Chia hết cho 2: tận cùng chẵn. Chia hết cho 5: tận cùng 0 hoặc 5. Cả hai cùng lúc: chỉ có tận cùng 0.', tienBo: 'Em đã kết hợp hai dấu hiệu.',
        nguon: N6T('Bài 9 "Dấu hiệu chia hết" (SGV tr. 55)'), kiemTra: K6(),
        tuongTu: { id: 'T6B-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, dấu hiệu 3 và 9.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các số chia hết cho <b>cả 3 và 9</b>.', phuongAn: [{ t: '1 260', dung: true }, { t: '2 034', dung: true }, { t: '1 236', phanHoi: 'Tổng chữ số 12: chia hết cho 3, không chia hết cho 9.' }, { t: '4 501', phanHoi: 'Tổng chữ số 10.' }], goiY: ['Tính tổng các chữ số.'], viSaoDung: '1+2+6+0 = 9; 2+0+3+4 = 9.', loiGiai: '<b>1 260; 2 034</b>.', giangLai: 'Chia hết cho 9 thì chắc chắn chia hết cho 3.', nguon: N6T('Bài 9 (SGV tr. 55)'), kiemTra: K6() }
      },
      {
        id: 'T6B-02', muc: 'co-ban', liDoMuc: 'Nhận biết số nguyên tố theo định nghĩa.', loai: 'chon1', de: 'Số nào sau đây là <b>số nguyên tố</b>?',
        phuongAn: [{ t: '1', phanHoi: 'Số 1 chỉ có một ước nên không là số nguyên tố.' }, { t: '9', phanHoi: '9 = 3 · 3, có ước 3.' }, { t: '17', dung: true }, { t: '21', phanHoi: '21 = 3 · 7.' }],
        goiY: ['Thử chia cho 2, 3, 5, 7.'], viSaoDung: '17 chỉ có hai ước 1 và 17.', loiGiai: '<b>17</b>.', giangLai: 'Số nguyên tố "không chia được cho ai" ngoài 1 và chính nó. Thử chia cho các số nguyên tố nhỏ 2, 3, 5, 7.', tienBo: 'Em đã kiểm tra ước của từng số.',
        nguon: N6T('Bài 10 "Số nguyên tố" (SGV tr. 58)'), kiemTra: K6(),
        tuongTu: { id: 'T6B-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Số nào sau đây là <b>số nguyên tố</b>?', phuongAn: [{ t: '27', phanHoi: '27 = 3 · 9.' }, { t: '29', dung: true }, { t: '33', phanHoi: '33 = 3 · 11.' }, { t: '51', phanHoi: '51 = 3 · 17 (tổng chữ số 6 chia hết cho 3).' }], goiY: ['Dùng dấu hiệu chia hết cho 3.'], viSaoDung: '29 chỉ có ước 1 và 29.', loiGiai: '<b>29</b>.', giangLai: 'Thử chia cho 2, 3, 5.', nguon: N6T('Bài 10 (SGV tr. 58)'), kiemTra: K6() }
      },
      {
        id: 'T6B-03', muc: 'van-dung', liDoMuc: 'Phân tích hai số ra thừa số nguyên tố rồi áp dụng quy tắc ƯCLN.', loai: 'so', de: 'Tìm ƯCLN(36, 48).', dapAn: 12,
        loi: [{ gt: 144, nhan: 'Nhầm ƯCLN với BCNN', phanHoi: '144 là BCNN. ƯCLN lấy số mũ <b>nhỏ nhất</b>.' }, { gt: 6, nhan: 'Chưa phải lớn nhất', phanHoi: '6 là một ước chung nhưng chưa lớn nhất.' }, { gt: 4, nhan: 'Thiếu thừa số', phanHoi: 'Em quên thừa số chung 3.' }],
        buoc: { hoi: '36 = 2² · 3², 48 = 2⁴ · 3. Thừa số 2 trong ƯCLN lấy với số mũ bao nhiêu?', dapAn: 2, dung: 'Đúng — số mũ nhỏ nhất. Thừa số 3 lấy số mũ 1.', sai: 'Lấy số mũ nhỏ nhất giữa 2 và 4.' },
        goiY: ['Phân tích 36 và 48 ra thừa số nguyên tố.'], viSaoDung: 'ƯCLN = 2² · 3 = 12.', loiGiai: '36 = ' + S('2', 2) + ' · ' + S('3', 2) + '; 48 = ' + S('2', 4) + ' · 3. ƯCLN = ' + S('2', 2) + ' · 3 = <b>12</b>.',
        giangLai: 'Kiểm tra: 36 : 12 = 3 và 48 : 12 = 4; 3 và 4 không còn ước chung nào khác 1 → 12 là lớn nhất.', tienBo: 'Em đã lấy đúng số mũ nhỏ nhất.',
        nguon: N6T('Bài 11 "Ước chung. Ước chung lớn nhất" (SGV tr. 63)'), kiemTra: K6(),
        tuongTu: { id: 'T6B-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tìm ƯCLN(60, 72).', dapAn: 12, loi: [{ gt: 360, nhan: 'Nhầm ƯCLN với BCNN', phanHoi: 'Đó là BCNN.' }, { gt: 6, nhan: 'Chưa phải lớn nhất', phanHoi: 'Còn ước chung lớn hơn.' }], buoc: { hoi: '60 = 2²·3·5; 72 = 2³·3². Số mũ của 2 trong ƯCLN?', dapAn: 2, dung: 'Đúng.', sai: 'Nhỏ nhất của 2 và 3.' }, goiY: ['Thừa số chung: 2 và 3.'], viSaoDung: '2²·3.', loiGiai: '<b>12</b>.', giangLai: '60:12 = 5, 72:12 = 6.', nguon: N6T('Bài 11 (SGV tr. 63)'), kiemTra: K6() }
      },
      {
        id: 'T6B-04', muc: 'van-dung', liDoMuc: 'Tìm BCNN, dễ nhầm với tích hai số.', loai: 'so', de: 'Tìm BCNN(12, 18).', dapAn: 36,
        loi: [{ gt: 216, nhan: 'Lấy tích', phanHoi: '216 = 12 · 18 là một bội chung nhưng chưa nhỏ nhất.' }, { gt: 6, nhan: 'Nhầm BCNN với ƯCLN', phanHoi: '6 là ƯCLN. BCNN lấy số mũ <b>lớn nhất</b>.' }, { gt: 72, nhan: 'Chưa phải nhỏ nhất', phanHoi: '72 là bội chung nhưng còn bội chung nhỏ hơn.' }],
        buoc: { hoi: '12 = 2² · 3, 18 = 2 · 3². Thừa số 3 trong BCNN lấy số mũ bao nhiêu?', dapAn: 2, dung: 'Đúng. BCNN = 2² · 3².', sai: 'Lấy số mũ lớn nhất.' },
        goiY: ['Thừa số chung và riêng, số mũ lớn nhất.'], viSaoDung: 'BCNN = 2² · 3² = 36.', loiGiai: 'BCNN = ' + S('2', 2) + ' · ' + S('3', 2) + ' = <b>36</b>.', giangLai: 'Liệt kê bội của 18: 18, 36, … — 36 chia hết cho 12 → BCNN = 36.', tienBo: 'Em đã không nhầm BCNN với tích.',
        nguon: N6T('Bài 12 "Bội chung. Bội chung nhỏ nhất" (SGV tr. 67)'), kiemTra: K6(),
        tuongTu: { id: 'T6B-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tìm BCNN(15, 20).', dapAn: 60, loi: [{ gt: 300, nhan: 'Lấy tích', phanHoi: 'Chưa nhỏ nhất.' }, { gt: 5, nhan: 'Nhầm BCNN với ƯCLN', phanHoi: 'Đó là ƯCLN.' }], buoc: { hoi: '15 = 3·5; 20 = 2²·5. Số mũ của 2 trong BCNN?', dapAn: 2, dung: 'Đúng.', sai: 'Lớn nhất.' }, goiY: ['2²·3·5.'], viSaoDung: '60.', loiGiai: '<b>60</b>.', giangLai: 'Bội của 20: 20, 40, 60 — 60 chia hết cho 15.', nguon: N6T('Bài 12 (SGV tr. 67)'), kiemTra: K6() }
      },
      {
        id: 'T6B-05', muc: 'nang-cao', liDoMuc: 'Mô hình hoá tình huống thực tế, phải nhận ra cần BCNN.', loai: 'so',
        de: 'An cứ 6 ngày trực thư viện một lần, Bình cứ 8 ngày một lần. Hôm nay hai bạn cùng trực. Sau <b>ít nhất</b> bao nhiêu ngày nữa hai bạn lại cùng trực?', dapAn: 24, soLieu: GIA_DINH,
        loi: [{ gt: 48, nhan: 'Lấy tích', phanHoi: '48 ngày nữa cũng cùng trực, nhưng chưa phải sớm nhất.' }, { gt: 2, nhan: 'Nhầm BCNN với ƯCLN', phanHoi: '"Lại gặp nhau sớm nhất" → BCNN, không phải ƯCLN.' }, { gt: 14, nhan: 'Chọn sai phép tính', phanHoi: 'Không cộng 6 + 8. Số ngày cần là bội của cả 6 và 8.' }],
        buoc: { hoi: '6 = 2 · 3; 8 = 2³. Thừa số 2 trong BCNN có số mũ bao nhiêu?', dapAn: 3, dung: 'Đúng. BCNN = 2³ · 3.', sai: 'Lấy số mũ lớn nhất.' },
        goiY: ['Số ngày phải chia hết cho cả 6 và 8.', 'Ít nhất → nhỏ nhất → BCNN.'], viSaoDung: 'BCNN(6, 8) = 24.', loiGiai: 'Số ngày cần tìm là BCNN(6, 8) = ' + S('2', 3) + ' · 3 = <b>24</b> ngày.',
        giangLai: 'Lập bảng: ngày An trực: 6, 12, 18, 24…; ngày Bình trực: 8, 16, 24… Số đầu tiên chung là 24.', tienBo: 'Em đã nhận ra bài toán cần BCNN.',
        nguon: N6T('Bài 12 "Bội chung. Bội chung nhỏ nhất" (SGV tr. 67)'), kiemTra: K6(),
        tuongTu: { id: 'T6B-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Xe buýt tuyến A cứ 10 phút có một chuyến, tuyến B cứ 15 phút. Lúc 7 giờ hai tuyến cùng xuất bến. Sau ít nhất bao nhiêu phút lại cùng xuất bến?', dapAn: 30, loi: [{ gt: 150, nhan: 'Lấy tích', phanHoi: 'Chưa sớm nhất.' }, { gt: 5, nhan: 'Nhầm BCNN với ƯCLN', phanHoi: 'Cần BCNN.' }, { gt: 25, nhan: 'Chọn sai phép tính', phanHoi: 'Không cộng.' }], buoc: { hoi: 'Số mũ của 5 trong BCNN(10, 15)?', dapAn: 1, dung: 'Đúng.', sai: '10 = 2·5; 15 = 3·5.' }, goiY: ['BCNN(10, 15).'], viSaoDung: '30.', loiGiai: '<b>30</b> phút.', giangLai: 'Lập bảng 10, 20, 30 / 15, 30.', nguon: N6T('Bài 12 (SGV tr. 67)'), kiemTra: K6() }
      },
      {
        id: 'T6B-06', muc: 'nang-cao', liDoMuc: 'Bài toán thực tế hai bước: tìm ƯCLN rồi trả lời đúng câu hỏi.', loai: 'so',
        de: 'Cô giáo có 48 quyển vở và 36 cái bút, muốn chia thành các phần quà như nhau (mỗi phần có số vở như nhau, số bút như nhau) với <b>nhiều phần quà nhất</b>. Mỗi phần quà có bao nhiêu <b>quyển vở</b>?', dapAn: 4,
        loi: [{ gt: 12, nhan: 'Chưa trả lời đúng câu hỏi', phanHoi: '12 là số phần quà. Đề hỏi số quyển vở trong mỗi phần.' }, { gt: 3, nhan: 'Nhầm đối tượng', phanHoi: '3 là số bút mỗi phần. Đề hỏi số vở.' }],
        buoc: { hoi: 'Có nhiều nhất bao nhiêu phần quà?', dapAn: 12, dung: 'Đúng: ƯCLN(48, 36) = 12. Mỗi phần có 48 : 12 vở.', sai: 'Số phần quà là ước chung lớn nhất của 48 và 36.' },
        goiY: ['Số phần quà nhiều nhất = ƯCLN(48, 36).', 'Rồi chia 48 cho số phần.'], viSaoDung: 'ƯCLN = 12 phần; 48 : 12 = 4 vở.', loiGiai: 'ƯCLN(48, 36) = 12 phần quà. Mỗi phần: 48 : 12 = <b>4</b> quyển vở (và 36 : 12 = 3 bút).',
        giangLai: 'Gạch chân câu hỏi cuối đề trước khi giải để biết mình cần tìm gì.', tienBo: 'Em đã đi đủ hai bước và trả lời đúng câu hỏi.',
        nguon: N6T('Bài 11 "Ước chung. Ước chung lớn nhất" (SGV tr. 63)'), kiemTra: K6(),
        tuongTu: { id: 'T6B-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Có 60 cái kẹo và 45 cái bánh, chia thành các túi như nhau với nhiều túi nhất. Mỗi túi có bao nhiêu <b>cái bánh</b>?', dapAn: 3, loi: [{ gt: 15, nhan: 'Chưa trả lời đúng câu hỏi', phanHoi: '15 là số túi.' }, { gt: 4, nhan: 'Nhầm đối tượng', phanHoi: '4 là số kẹo mỗi túi.' }], buoc: { hoi: 'Nhiều nhất bao nhiêu túi?', dapAn: 15, dung: 'Đúng.', sai: 'ƯCLN(60, 45).' }, goiY: ['ƯCLN(60, 45) = 15.'], viSaoDung: '45 : 15 = 3.', loiGiai: '<b>3</b> cái bánh.', giangLai: 'Gạch chân câu hỏi.', nguon: N6T('Bài 11 (SGV tr. 63)'), kiemTra: K6() }
      }
    ]
  };

  const t6SoNguyen = {
    id: 'toan6-so-nguyen', lop: 6, mon: 'toan', phanMon: 'Số và Đại số', ten: 'Số nguyên',
    sgk: 'SGV Toán 6 — Chương III, Bài 13–17, SGV tr. 73–93', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Bốn phép tính với số tự nhiên', 'Tia số'],
    yeuCauCanDat: ['Nhận biết số nguyên âm, biểu diễn và so sánh số nguyên.', 'Cộng, trừ, nhân số nguyên; vận dụng quy tắc dấu ngoặc.', 'Giải bài toán thực tế có số âm (nhiệt độ, độ cao…).'],
    bai: {
      mucTieu: ['so sánh số nguyên âm;', 'cộng hai số nguyên khác dấu;', 'trừ một số nguyên âm;', 'bỏ dấu ngoặc đúng dấu và nhân số nguyên.'],
      khoiDong: { hoi: 'Nhiệt độ ở Sa Pa sáng nay là −2 °C, buổi trưa tăng thêm 7 °C. Buổi trưa nhiệt độ là bao nhiêu?', goiY: '−2 + 7 = 5 (°C).' },
      trongTam: [
        'Trên trục số nằm ngang, số bên trái nhỏ hơn số bên phải. Với số âm: số nào có <b>giá trị tuyệt đối lớn hơn thì nhỏ hơn</b> (−10 &lt; −2).',
        'Cộng hai số <b>cùng dấu</b>: cộng hai phần số, giữ dấu chung. Cộng hai số <b>khác dấu</b>: lấy phần số lớn trừ phần số nhỏ, đặt dấu của số có phần số lớn hơn.',
        '<b>Trừ</b>: a − b = a + (−b). Trừ một số âm là cộng số đối của nó: 7 − (−5) = 7 + 5.',
        '<b>Quy tắc dấu ngoặc</b>: bỏ ngoặc có dấu "−" đứng trước thì <b>đổi dấu tất cả</b> số hạng trong ngoặc.',
        '<b>Nhân</b>: cùng dấu → kết quả dương; khác dấu → kết quả âm.'
      ],
      viDu: { de: 'Tính (−8) + 3 − (−6).', loiGiai: '(−8) + 3 = −5; −5 − (−6) = −5 + 6 = <b>1</b>.' },
      nguon: N6T('Chương III "Số nguyên", Bài 13–17 (SGV tr. 73–93)'),
      hoiDap: [
        { tu: ['khac dau', 'cong'], tl: 'Khác dấu: lấy phần số lớn trừ phần số nhỏ, đặt dấu của số có phần số lớn hơn.' },
        { tu: ['tru so am', 'tru'], tl: 'Trừ số âm = cộng số dương: a − (−b) = a + b.' },
        { tu: ['dau ngoac', 'bo ngoac'], tl: 'Trước ngoặc có dấu trừ: đổi dấu <b>mọi</b> số hạng trong ngoặc khi bỏ ngoặc.' },
        { tu: ['nhan', 'dau'], tl: '(−)·(−) = (+); (−)·(+) = (−).' }
      ]
    },
    cauHoi: [
      {
        id: 'T6C-01', muc: 'co-ban', liDoMuc: 'Cộng hai số nguyên khác dấu.', loai: 'so', de: 'Tính: (−15) + 9.', dapAn: -6,
        loi: [{ gt: 6, nhan: 'Lỗi dấu', phanHoi: 'Phần số của −15 lớn hơn nên kết quả mang dấu <b>âm</b>.' }, { gt: -24, nhan: 'Lỗi quy tắc cộng', phanHoi: 'Hai số khác dấu: lấy phần số lớn <b>trừ</b> phần số nhỏ, không cộng.' }, { gt: 24, nhan: 'Lỗi quy tắc cộng', phanHoi: 'Hai số khác dấu thì trừ phần số, không cộng.' }],
        buoc: { hoi: 'Phần số lớn trừ phần số nhỏ: 15 − 9 = ?', dapAn: 6, dung: 'Đúng. Dấu lấy theo −15 (phần số lớn hơn).', sai: '15 − 9.' },
        goiY: ['Hai số khác dấu.'], viSaoDung: '15 − 9 = 6, dấu âm.', loiGiai: '(−15) + 9 = −(15 − 9) = <b>−6</b>.', giangLai: 'Nghĩ như tiền: nợ 15 nghìn, trả được 9 nghìn → vẫn nợ 6 nghìn, tức −6.', tienBo: 'Em đã đặt dấu đúng.',
        nguon: N6T('Bài 14 "Phép cộng và phép trừ số nguyên" (SGV tr. 78)'), kiemTra: K6(),
        tuongTu: { id: 'T6C-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính: 12 + (−20).', dapAn: -8, loi: [{ gt: 8, nhan: 'Lỗi dấu', phanHoi: 'Phần số của −20 lớn hơn → dấu âm.' }, { gt: -32, nhan: 'Lỗi quy tắc cộng', phanHoi: 'Khác dấu thì trừ phần số.' }], buoc: { hoi: '20 − 12 = ?', dapAn: 8, dung: 'Đúng.', sai: '20 − 12.' }, goiY: ['Khác dấu.'], viSaoDung: '−8.', loiGiai: '<b>−8</b>.', giangLai: 'Có 12, nợ 20 → còn nợ 8.', nguon: N6T('Bài 14 (SGV tr. 78)'), kiemTra: K6() }
      },
      {
        id: 'T6C-02', muc: 'co-ban', liDoMuc: 'So sánh số nguyên âm.', loai: 'chon1', de: 'Số nào <b>lớn nhất</b> trong các số: −7; −2; −10; −5?',
        phuongAn: [{ t: '−7', phanHoi: '−7 nằm bên trái −2 trên trục số.' }, { t: '−2', dung: true }, { t: '−10', phanHoi: '−10 là số nhỏ nhất. Với số âm, phần số càng lớn thì số càng nhỏ.' }, { t: '−5', phanHoi: '−5 &lt; −2.' }],
        goiY: ['Số âm nào gần 0 nhất thì lớn nhất.'], viSaoDung: '−2 gần 0 nhất.', loiGiai: '<b>−2</b>.', giangLai: 'Nhiệt độ −2 °C ấm hơn −10 °C, nên −2 lớn hơn.', tienBo: 'Em đã so sánh số âm đúng.',
        nguon: N6T('Bài 13 "Tập hợp các số nguyên" (SGV tr. 74)'), kiemTra: K6(),
        tuongTu: { id: 'T6C-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Số nào <b>nhỏ nhất</b>: −3; 0; −8; 2?', phuongAn: [{ t: '−3', phanHoi: '−3 &gt; −8.' }, { t: '0', phanHoi: '0 lớn hơn mọi số âm.' }, { t: '−8', dung: true }, { t: '2', phanHoi: 'Số dương lớn hơn số âm.' }], goiY: ['Xa 0 nhất về bên trái.'], viSaoDung: '−8.', loiGiai: '<b>−8</b>.', giangLai: '−8 °C lạnh hơn −3 °C.', nguon: N6T('Bài 13 (SGV tr. 74)'), kiemTra: K6() }
      },
      {
        id: 'T6C-03', muc: 'van-dung', liDoMuc: 'Kết hợp trừ số âm và cộng số âm.', loai: 'so', de: 'Tính: 7 − (−5) + (−12).', dapAn: 0,
        loi: [{ gt: -10, nhan: 'Lỗi trừ số âm', phanHoi: '7 − (−5) = 7 + 5 = 12, không phải 2.' }, { gt: 24, nhan: 'Lỗi dấu', phanHoi: 'Cộng (−12) là trừ 12.' }],
        buoc: { hoi: '7 − (−5) = ?', dapAn: 12, dung: 'Đúng. Còn 12 + (−12).', sai: 'Trừ số âm là cộng số dương.' },
        goiY: ['7 − (−5) = 7 + 5.'], viSaoDung: '12 + (−12) = 0.', loiGiai: '7 − (−5) + (−12) = 7 + 5 − 12 = <b>0</b>.', giangLai: 'Hai dấu trừ đứng liền nhau "− (−" biến thành dấu cộng.', tienBo: 'Em đã đổi đúng phép trừ số âm.',
        nguon: N6T('Bài 14 "Phép cộng và phép trừ số nguyên" (SGV tr. 78)'), kiemTra: K6(),
        tuongTu: { id: 'T6C-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính: −6 − (−9) + (−4).', dapAn: -1, loi: [{ gt: -19, nhan: 'Lỗi trừ số âm', phanHoi: '−6 − (−9) = −6 + 9.' }, { gt: 7, nhan: 'Lỗi dấu', phanHoi: 'Cộng (−4) là trừ 4.' }], buoc: { hoi: '−6 − (−9) = ?', dapAn: 3, dung: 'Đúng.', sai: '−6 + 9.' }, goiY: ['− (− = +.'], viSaoDung: '3 − 4.', loiGiai: '<b>−1</b>.', giangLai: 'Hai dấu trừ liền nhau thành cộng.', nguon: N6T('Bài 14 (SGV tr. 78)'), kiemTra: K6() }
      },
      {
        id: 'T6C-04', muc: 'van-dung', liDoMuc: 'Nhân số nguyên rồi cộng, cần quy tắc dấu ở hai tích.', loai: 'so', de: 'Tính: (−4) · (−5) + (−3) · 6.', dapAn: 2,
        loi: [{ gt: -38, nhan: 'Lỗi dấu phép nhân', phanHoi: '(−4) · (−5) cùng dấu → kết quả <b>dương</b> 20.' }, { gt: 38, nhan: 'Lỗi dấu phép nhân', phanHoi: '(−3) · 6 khác dấu → kết quả âm −18.' }, { gt: -2, nhan: 'Lỗi dấu', phanHoi: '20 + (−18) = 2, mang dấu dương.' }],
        buoc: { hoi: '(−4) · (−5) = ?', dapAn: 20, dung: 'Đúng. (−3) · 6 = −18.', sai: 'Cùng dấu → dương.' },
        goiY: ['Cùng dấu → dương; khác dấu → âm.'], viSaoDung: '20 − 18 = 2.', loiGiai: '20 + (−18) = <b>2</b>.', giangLai: 'Đếm số dấu trừ trong một tích: chẵn → dương, lẻ → âm.', tienBo: 'Em đã nắm quy tắc dấu phép nhân.',
        nguon: N6T('Bài 16 "Phép nhân số nguyên" (SGV tr. 86)'), kiemTra: K6(),
        tuongTu: { id: 'T6C-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính: (−6) · (−3) + (−2) · 7.', dapAn: 4, loi: [{ gt: -32, nhan: 'Lỗi dấu phép nhân', phanHoi: '(−6)·(−3) = +18.' }, { gt: 32, nhan: 'Lỗi dấu phép nhân', phanHoi: '(−2)·7 = −14.' }, { gt: -4, nhan: 'Lỗi dấu', phanHoi: '18 − 14 dương.' }], buoc: { hoi: '(−6)·(−3) = ?', dapAn: 18, dung: 'Đúng.', sai: 'Cùng dấu.' }, goiY: ['Dấu.'], viSaoDung: '18 − 14.', loiGiai: '<b>4</b>.', giangLai: 'Đếm dấu trừ.', nguon: N6T('Bài 16 (SGV tr. 86)'), kiemTra: K6() }
      },
      {
        id: 'T6C-05', muc: 'nang-cao', liDoMuc: 'Bỏ ngoặc có dấu trừ và nhóm số hạng để tính nhanh.', loai: 'so', de: 'Tính nhanh: 125 − (125 − 47) + (−47 + 30).', dapAn: 30,
        loi: [{ gt: -64, nhan: 'Lỗi dấu khi bỏ ngoặc', phanHoi: 'Khi bỏ ngoặc −(125 − 47), số −47 trong ngoặc đổi thành <b>+47</b>.' }],
        buoc: { hoi: 'Bỏ ngoặc: 125 − (125 − 47) = 125 − 125 + ? (điền số)', dapAn: 47, dung: 'Đúng. Biểu thức thành 125 − 125 + 47 − 47 + 30.', sai: 'Dấu trừ trước ngoặc đổi dấu cả −47.' },
        goiY: ['Bỏ ngoặc, rồi nhóm các số đối nhau.'], viSaoDung: '(125 − 125) + (47 − 47) + 30 = 30.', loiGiai: '= 125 − 125 + 47 − 47 + 30 = 0 + 0 + 30 = <b>30</b>.', giangLai: 'Tìm các cặp số đối (như 125 và −125) — tổng của chúng bằng 0, gạch đi cho gọn.', tienBo: 'Em đã bỏ ngoặc đúng dấu và tính nhanh.',
        nguon: N6T('Bài 15 "Quy tắc dấu ngoặc" (SGV tr. 83)'), kiemTra: K6(),
        tuongTu: { id: 'T6C-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính nhanh: 210 − (210 − 56) + (−56 + 18).', dapAn: 18, loi: [{ gt: -94, nhan: 'Lỗi dấu khi bỏ ngoặc', phanHoi: '−(210 − 56) = −210 + 56.' }], buoc: { hoi: '210 − (210 − 56) = 210 − 210 + ?', dapAn: 56, dung: 'Đúng.', sai: 'Đổi dấu −56 thành +56.' }, goiY: ['Nhóm số đối.'], viSaoDung: '18.', loiGiai: '<b>18</b>.', giangLai: 'Gạch cặp số đối.', nguon: N6T('Bài 15 (SGV tr. 83)'), kiemTra: K6() }
      },
      {
        id: 'T6C-06', muc: 'nang-cao', liDoMuc: 'Mô hình hoá thay đổi nhiệt độ bằng phép cộng, trừ số nguyên nhiều bước.', loai: 'so',
        de: 'Lúc 6 giờ sáng nhiệt độ ở một trạm đo là −8 °C. Đến trưa nhiệt độ tăng 11 °C, đến tối lại giảm 6 °C. Nhiệt độ buổi tối là bao nhiêu độ C?', dapAn: -3, soLieu: GIA_DINH,
        loi: [{ gt: 9, nhan: 'Sai chiều thay đổi', phanHoi: '"Giảm 6 °C" là trừ 6, không cộng.' }, { gt: -25, nhan: 'Sai chiều thay đổi', phanHoi: '"Tăng 11 °C" là cộng 11.' }, { gt: 3, nhan: 'Thiếu bước', phanHoi: '3 °C là nhiệt độ buổi trưa. Còn giảm 6 °C nữa.' }],
        buoc: { hoi: 'Nhiệt độ buổi trưa là bao nhiêu?', dapAn: 3, dung: 'Đúng: −8 + 11 = 3. Buổi tối: 3 − 6.', sai: '−8 + 11.' },
        goiY: ['Tăng → cộng; giảm → trừ.'], viSaoDung: '−8 + 11 − 6 = −3.', loiGiai: '−8 + 11 − 6 = 3 − 6 = <b>−3</b> °C.', giangLai: 'Vẽ trục số: bắt đầu ở −8, đi sang phải 11 bước tới 3, rồi sang trái 6 bước tới −3.', tienBo: 'Em đã chuyển lời văn thành phép tính số nguyên.',
        nguon: N6T('Bài 14 "Phép cộng và phép trừ số nguyên" (SGV tr. 78)'), kiemTra: K6(),
        tuongTu: { id: 'T6C-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một tàu ngầm đang ở độ cao −45 m (dưới mực nước biển). Tàu nổi lên 20 m rồi lặn xuống thêm 12 m. Tàu ở độ cao bao nhiêu mét?', dapAn: -37, soLieu: GIA_DINH, loi: [{ gt: -13, nhan: 'Sai chiều thay đổi', phanHoi: 'Lặn xuống là trừ.' }, { gt: -77, nhan: 'Sai chiều thay đổi', phanHoi: 'Nổi lên là cộng.' }, { gt: -25, nhan: 'Thiếu bước', phanHoi: 'Còn lặn thêm 12 m.' }], buoc: { hoi: 'Sau khi nổi lên, tàu ở độ cao nào?', dapAn: -25, dung: 'Đúng.', sai: '−45 + 20.' }, goiY: ['Nổi lên → cộng.'], viSaoDung: '−25 − 12.', loiGiai: '<b>−37</b> m.', giangLai: 'Vẽ trục số thẳng đứng.', nguon: N6T('Bài 14 (SGV tr. 78)'), kiemTra: K6() }
      }
    ]
  };

  const t6PhanSo = {
    id: 'toan6-phan-so', lop: 6, mon: 'toan', phanMon: 'Số và Đại số', ten: 'Phân số',
    sgk: 'SGV Toán 6 — Chương VI, Bài 23–27, SGV tr. 131–149', yccdGhiChu: YCCD6,
    kienThucTruoc: ['ƯCLN, BCNN (Chương II)', 'Số nguyên (Chương III)'],
    yeuCauCanDat: ['Nhận biết phân số bằng nhau, rút gọn về phân số tối giản.', 'Cộng, trừ, nhân, chia phân số.', 'Giải hai bài toán về phân số: tìm giá trị phân số của một số; tìm một số biết giá trị phân số của nó.'],
    bai: {
      mucTieu: ['rút gọn phân số về tối giản;', 'quy đồng mẫu để cộng, trừ;', 'chia phân số bằng cách nhân với nghịch đảo;', 'phân biệt hai bài toán về phân số.'],
      khoiDong: { hoi: 'Một chiếc bánh chia 8 phần bằng nhau, em ăn 2 phần. Em đã ăn mấy phần của chiếc bánh? Viết bằng hai phân số khác nhau.', goiY: F(2, 8) + ' = ' + F(1, 4) + ' chiếc bánh.' },
      trongTam: [
        '<b>Rút gọn</b>: chia cả tử và mẫu cho một ước chung (≠ 1). Phân số <b>tối giản</b> khi tử và mẫu chỉ có ước chung là 1 và −1 (chia cho ƯCLN là ra ngay).',
        '<b>Cộng, trừ</b>: quy đồng mẫu (thường dùng BCNN của các mẫu) rồi cộng, trừ tử, giữ mẫu chung. <b>Không</b> cộng mẫu với mẫu.',
        '<b>Nhân</b>: tử nhân tử, mẫu nhân mẫu. <b>Chia</b>: nhân với <b>phân số nghịch đảo</b> của số chia: ' + F('a', 'b') + ' : ' + F('c', 'd') + ' = ' + F('a', 'b') + ' · ' + F('d', 'c') + '.',
        'Tìm <b>' + F('m', 'n') + ' của số b</b>: tính b · ' + F('m', 'n') + '.',
        'Tìm <b>một số biết ' + F('m', 'n') + ' của nó bằng a</b>: tính a : ' + F('m', 'n') + '.'
      ],
      viDu: { de: 'Tính ' + F(1, 2) + ' + ' + F(1, 3) + '.', loiGiai: 'Mẫu chung 6: ' + F(3, 6) + ' + ' + F(2, 6) + ' = <b>' + F(5, 6) + '</b>.' },
      nguon: N6T('Chương VI "Phân số", Bài 23–27 (SGV tr. 131–149)'),
      hoiDap: [
        { tu: ['rut gon', 'toi gian'], tl: 'Chia cả tử và mẫu cho ƯCLN của chúng để được phân số tối giản.' },
        { tu: ['cong', 'quy dong'], tl: 'Quy đồng mẫu rồi cộng tử; không cộng mẫu với mẫu.' },
        { tu: ['chia', 'nghich dao'], tl: 'Chia cho một phân số = nhân với phân số nghịch đảo của nó.' },
        { tu: ['tim mot so', 'bai toan'], tl: '"m/n của b" → nhân. "m/n của nó là a" → chia a cho m/n.' }
      ]
    },
    cauHoi: [
      {
        id: 'T6D-01', muc: 'co-ban', liDoMuc: 'Rút gọn về phân số tối giản.', loai: 'chon1', de: 'Phân số tối giản bằng ' + F(18, 24) + ' là:',
        phuongAn: [{ t: F(3, 4), dung: true }, { t: F(9, 12), phanHoi: 'Bằng nhau nhưng chưa tối giản: 9 và 12 còn ước chung 3.' }, { t: F(6, 8), phanHoi: 'Chưa tối giản: còn chia được cho 2.' }, { t: F(4, 3), phanHoi: 'Em đã đảo tử và mẫu.' }],
        goiY: ['ƯCLN(18, 24) = 6.'], viSaoDung: '18 : 6 = 3; 24 : 6 = 4.', loiGiai: F(18, 24) + ' = ' + F('18 : 6', '24 : 6') + ' = <b>' + F(3, 4) + '</b>.', giangLai: 'Chia cho ƯCLN thì chỉ cần một lần là tối giản.', tienBo: 'Em đã rút gọn đến tối giản.',
        nguon: N6T('Bài 23 "Mở rộng phân số. Phân số bằng nhau" (SGV tr. 132)'), kiemTra: K6(),
        tuongTu: { id: 'T6D-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Phân số tối giản bằng ' + F(20, 35) + ' là:', phuongAn: [{ t: F(4, 7), dung: true }, { t: F(8, 14), phanHoi: 'Chưa tối giản.' }, { t: F(7, 4), phanHoi: 'Đảo tử mẫu.' }, { t: F(10, 17), phanHoi: '35 : 2 không phải số tự nhiên — em chia chưa đúng.' }], goiY: ['ƯCLN(20, 35) = 5.'], viSaoDung: '4/7.', loiGiai: '<b>' + F(4, 7) + '</b>.', giangLai: 'Chia cho ƯCLN.', nguon: N6T('Bài 23 (SGV tr. 132)'), kiemTra: K6() }
      },
      {
        id: 'T6D-02', muc: 'co-ban', liDoMuc: 'Cộng hai phân số khác mẫu.', loai: 'so', de: 'Tính ' + F(1, 4) + ' + ' + F(2, 3) + '. <span class="note">Viết kết quả dạng phân số, ví dụ 5/6.</span>', dapAn: '11/12', canPhanSo: true,
        loi: [{ gt: '3/7', nhan: 'Lỗi quy tắc cộng', phanHoi: 'Em đã cộng tử với tử, mẫu với mẫu. Phải quy đồng mẫu trước.' }],
        buoc: { hoi: 'Mẫu chung nhỏ nhất của 4 và 3 là bao nhiêu?', dapAn: 12, dung: 'Đúng: ' + F(3, 12) + ' + ' + F(8, 12) + '.', sai: 'BCNN(4, 3).' },
        goiY: ['Quy đồng mẫu 12.'], viSaoDung: '3/12 + 8/12 = 11/12.', loiGiai: F(3, 12) + ' + ' + F(8, 12) + ' = <b>' + F(11, 12) + '</b>.', giangLai: 'Một phần tư cái bánh cộng hai phần ba cái bánh không thể ra 3/7 (nhỏ hơn cả nửa cái). Phải cắt cùng cỡ — chia cả hai thành phần mười hai.', tienBo: 'Em đã quy đồng trước khi cộng.',
        nguon: N6T('Bài 25 "Phép cộng và phép trừ phân số" (SGV tr. 139)'), kiemTra: K6(),
        tuongTu: { id: 'T6D-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính ' + F(2, 5) + ' + ' + F(1, 3) + '. <span class="note">Viết dạng phân số.</span>', dapAn: '11/15', canPhanSo: true, loi: [{ gt: '3/8', nhan: 'Lỗi quy tắc cộng', phanHoi: 'Phải quy đồng mẫu.' }], buoc: { hoi: 'Mẫu chung nhỏ nhất?', dapAn: 15, dung: 'Đúng.', sai: 'BCNN(5, 3).' }, goiY: ['Mẫu 15.'], viSaoDung: '6/15 + 5/15.', loiGiai: '<b>' + F(11, 15) + '</b>.', giangLai: 'Cắt cùng cỡ.', nguon: N6T('Bài 25 (SGV tr. 139)'), kiemTra: K6() }
      },
      {
        id: 'T6D-03', muc: 'van-dung', liDoMuc: 'Chia phân số: nghịch đảo đúng phân số rồi rút gọn.', loai: 'so', de: 'Tính ' + F(3, 4) + ' : ' + F(9, 8) + '. <span class="note">Viết dạng phân số tối giản hoặc phân số bằng nó.</span>', dapAn: '2/3', canPhanSo: true,
        loi: [{ gt: '27/32', nhan: 'Lỗi phép chia', phanHoi: 'Em đã nhân thẳng hai phân số. Chia thì nhân với <b>nghịch đảo</b> của số chia.' }, { gt: '3/2', nhan: 'Đảo nhầm phân số', phanHoi: 'Chỉ đảo phân số <b>chia</b> (' + F(9, 8) + '), giữ nguyên ' + F(3, 4) + '.' }],
        buoc: { hoi: 'Nghịch đảo của ' + F(9, 8) + ' là phân số nào? (viết dạng a/b)', dapAn: '8/9', dung: 'Đúng: ' + F(3, 4) + ' · ' + F(8, 9) + '.', sai: 'Đổi chỗ tử và mẫu.' },
        goiY: ['a/b : c/d = a/b · d/c.'], viSaoDung: '3/4 · 8/9 = 24/36 = 2/3.', loiGiai: F(3, 4) + ' · ' + F(8, 9) + ' = ' + F(24, 36) + ' = <b>' + F(2, 3) + '</b>.', giangLai: 'Câu thần chú: "giữ – đổi – lật": giữ phân số đầu, đổi ":" thành "·", lật phân số sau.', tienBo: 'Em đã lật đúng phân số chia.',
        nguon: N6T('Bài 26 "Phép nhân và phép chia phân số" (SGV tr. 142)'), kiemTra: K6(),
        tuongTu: { id: 'T6D-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính ' + F(5, 6) + ' : ' + F(10, 9) + '. <span class="note">Viết dạng phân số.</span>', dapAn: '3/4', canPhanSo: true, loi: [{ gt: '25/27', nhan: 'Lỗi phép chia', phanHoi: 'Nhân với nghịch đảo.' }, { gt: '4/3', nhan: 'Đảo nhầm phân số', phanHoi: 'Chỉ lật phân số chia.' }], buoc: { hoi: 'Nghịch đảo của 10/9?', dapAn: '9/10', dung: 'Đúng.', sai: 'Đổi tử mẫu.' }, goiY: ['Giữ – đổi – lật.'], viSaoDung: '45/60 = 3/4.', loiGiai: '<b>' + F(3, 4) + '</b>.', giangLai: 'Giữ – đổi – lật.', nguon: N6T('Bài 26 (SGV tr. 142)'), kiemTra: K6() }
      },
      {
        id: 'T6D-04', muc: 'van-dung', liDoMuc: 'Bài toán tìm giá trị phân số của một số.', loai: 'so', de: 'Lớp 6A có 40 học sinh, trong đó ' + F(2, 5) + ' số học sinh thích bóng đá. Có bao nhiêu học sinh thích bóng đá?', dapAn: 16, soLieu: GIA_DINH,
        loi: [{ gt: 100, nhan: 'Nhầm dạng bài', phanHoi: 'Em đã chia 40 cho ' + F(2, 5) + '. Tìm ' + F(2, 5) + ' <b>của</b> 40 thì nhân.' }, { gt: 8, nhan: 'Thiếu bước', phanHoi: '8 mới là ' + F(1, 5) + ' của 40. Cần ' + F(2, 5) + '.' }],
        buoc: { hoi: F(1, 5) + ' của 40 là bao nhiêu?', dapAn: 8, dung: 'Đúng. Vậy ' + F(2, 5) + ' là 2 · 8.', sai: '40 : 5.' },
        goiY: ['Giá trị ' + F(2, 5) + ' của 40 = 40 · ' + F(2, 5) + '.'], viSaoDung: '40 · 2/5 = 16.', loiGiai: '40 · ' + F(2, 5) + ' = <b>16</b> học sinh.', giangLai: 'Chia 40 bạn thành 5 nhóm đều nhau (mỗi nhóm 8 bạn), lấy 2 nhóm: 16 bạn.', tienBo: 'Em đã nhận ra dạng "phân số của một số".',
        nguon: N6T('Bài 27 "Hai bài toán về phân số" (SGV tr. 144)'), kiemTra: K6(),
        tuongTu: { id: 'T6D-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một quyển sách dày 48 trang. Nam đã đọc ' + F(3, 4) + ' quyển. Nam đã đọc bao nhiêu trang?', dapAn: 36, loi: [{ gt: 64, nhan: 'Nhầm dạng bài', phanHoi: 'Phải nhân, không chia.' }, { gt: 12, nhan: 'Thiếu bước', phanHoi: 'Đó là 1/4.' }], buoc: { hoi: '1/4 của 48?', dapAn: 12, dung: 'Đúng.', sai: '48 : 4.' }, goiY: ['48 · 3/4.'], viSaoDung: '36.', loiGiai: '<b>36</b> trang.', giangLai: 'Chia 4 nhóm, lấy 3.', nguon: N6T('Bài 27 (SGV tr. 144)'), kiemTra: K6() }
      },
      {
        id: 'T6D-05', muc: 'nang-cao', liDoMuc: 'Bài toán ngược: tìm một số biết giá trị phân số của nó (dễ nhầm với bài toán xuôi).', loai: 'so', de: 'Bình đã tiết kiệm được 36 nghìn đồng, bằng ' + F(3, 5) + ' số tiền cần để mua một cuốn truyện. Cuốn truyện giá bao nhiêu nghìn đồng?', dapAn: 60, soLieu: GIA_DINH,
        loi: [{ gt: '108/5', nhan: 'Nhầm dạng bài', phanHoi: 'Em đã tính ' + F(3, 5) + ' của 36. Ở đây 36 mới là ' + F(3, 5) + ' giá truyện, nên phải <b>chia</b> 36 cho ' + F(3, 5) + '.' }, { gt: 12, nhan: 'Thiếu bước', phanHoi: '12 là ' + F(1, 5) + ' giá cuốn truyện. Giá cả cuốn là 5 phần.' }],
        buoc: { hoi: F(1, 5) + ' giá cuốn truyện là bao nhiêu nghìn đồng?', dapAn: 12, dung: 'Đúng: 36 : 3 = 12. Cả cuốn = 5 · 12.', sai: '3 phần là 36 nghìn → 1 phần?' },
        goiY: ['36 nghìn ứng với ' + F(3, 5) + ' giá truyện.', 'Tìm một số biết ' + F(3, 5) + ' của nó: lấy 36 : ' + F(3, 5) + '.'], viSaoDung: '36 : 3/5 = 60.', loiGiai: '36 : ' + F(3, 5) + ' = 36 · ' + F(5, 3) + ' = <b>60</b> nghìn đồng.<br>Thử lại: ' + F(3, 5) + ' · 60 = 36 ✓',
        giangLai: 'Vẽ đoạn thẳng chia 5 ô; 3 ô = 36 nghìn → 1 ô = 12 nghìn → 5 ô = 60 nghìn.', tienBo: 'Em đã phân biệt được bài toán ngược.',
        nguon: N6T('Bài 27 "Hai bài toán về phân số" (SGV tr. 144)'), kiemTra: K6(),
        tuongTu: { id: 'T6D-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Sau một tuần, đội trồng cây trồng được 18 cây, bằng ' + F(2, 7) + ' kế hoạch. Theo kế hoạch đội phải trồng bao nhiêu cây?', dapAn: 63, soLieu: GIA_DINH, loi: [{ gt: '36/7', nhan: 'Nhầm dạng bài', phanHoi: 'Phải chia 18 cho 2/7.' }, { gt: 9, nhan: 'Thiếu bước', phanHoi: 'Đó là 1/7 kế hoạch.' }], buoc: { hoi: '1/7 kế hoạch là bao nhiêu cây?', dapAn: 9, dung: 'Đúng.', sai: '18 : 2.' }, goiY: ['18 : 2/7.'], viSaoDung: '63.', loiGiai: '<b>63</b> cây.', giangLai: '7 ô, 2 ô = 18.', nguon: N6T('Bài 27 (SGV tr. 144)'), kiemTra: K6() }
      },
      {
        id: 'T6D-06', muc: 'nang-cao', liDoMuc: 'Hai bước liên tiếp, phân số của phần còn lại (dễ nhầm lấy phân số của cả cuộn).', loai: 'so',
        de: 'Một cuộn dây dài 60 m. Lần thứ nhất dùng ' + F(1, 4) + ' cuộn dây, lần thứ hai dùng ' + F(2, 3) + ' <b>phần còn lại</b>. Cuộn dây còn lại bao nhiêu mét?', dapAn: 15, soLieu: GIA_DINH,
        loi: [{ gt: 5, nhan: 'Nhầm "phần còn lại"', phanHoi: 'Lần hai dùng ' + F(2, 3) + ' của <b>phần còn lại</b> (45 m), không phải của cả 60 m.' }, { gt: 30, nhan: 'Chưa trả lời đúng câu hỏi', phanHoi: '30 m là số mét dùng lần hai. Đề hỏi phần còn lại.' }, { gt: 45, nhan: 'Thiếu bước', phanHoi: '45 m là phần còn lại sau lần thứ nhất.' }],
        buoc: { hoi: 'Sau lần thứ nhất, còn lại bao nhiêu mét?', dapAn: 45, dung: 'Đúng: 60 − 15 = 45. Lần hai dùng ' + F(2, 3) + ' · 45.', sai: '60 − 60 · 1/4.' },
        goiY: ['Tính phần còn lại sau lần 1.', 'Lần 2 dùng 2/3 của phần đó.'], viSaoDung: 'Còn 45 m; dùng 30 m; còn 15 m.', loiGiai: 'Lần 1: 60 · ' + F(1, 4) + ' = 15 m, còn 45 m.<br>Lần 2: 45 · ' + F(2, 3) + ' = 30 m.<br>Còn lại: 45 − 30 = <b>15</b> m.',
        giangLai: 'Mỗi lần "phần còn lại" thay đổi, em viết rõ: Còn lại = … m, rồi mới tính phân số của nó.', tienBo: 'Em đã tính phân số trên đúng "phần còn lại".',
        nguon: N6T('Bài 27 "Hai bài toán về phân số" (SGV tr. 144)'), kiemTra: K6(),
        tuongTu: { id: 'T6D-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Cửa hàng có 72 kg gạo. Ngày đầu bán ' + F(1, 3) + ' số gạo, ngày thứ hai bán ' + F(3, 4) + ' số gạo <b>còn lại</b>. Cửa hàng còn bao nhiêu ki-lô-gam gạo?', dapAn: 12, soLieu: GIA_DINH, loi: [{ gt: 36, nhan: 'Chưa trả lời đúng câu hỏi', phanHoi: 'Đó là số gạo bán ngày hai.' }, { gt: 48, nhan: 'Thiếu bước', phanHoi: 'Đó là số còn sau ngày đầu.' }], buoc: { hoi: 'Sau ngày đầu còn bao nhiêu kg?', dapAn: 48, dung: 'Đúng.', sai: '72 − 24.' }, goiY: ['3/4 của 48.'], viSaoDung: '48 − 36.', loiGiai: '<b>12</b> kg.', giangLai: 'Viết rõ phần còn lại.', nguon: N6T('Bài 27 (SGV tr. 144)'), kiemTra: K6() }
      }
    ]
  };

  const t6ThapPhan = {
    id: 'toan6-so-thap-phan', lop: 6, mon: 'toan', phanMon: 'Số và Đại số', ten: 'Số thập phân',
    sgk: 'SGV Toán 6 — Chương VII, Bài 28–31, SGV tr. 150–168', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Phân số thập phân', 'Số nguyên âm'],
    yeuCauCanDat: ['So sánh số thập phân (cả số âm).', 'Tính toán với số thập phân.', 'Làm tròn số thập phân.', 'Tính tỉ số phần trăm và giải bài toán phần trăm thực tế.'],
    bai: {
      mucTieu: ['so sánh số thập phân âm;', 'làm tròn đến hàng cho trước;', 'tính biểu thức có số thập phân âm;', 'giải bài toán giảm giá phần trăm.'],
      khoiDong: { hoi: 'Một chiếc áo giá 200 nghìn đồng được giảm 10%. Giá mới là bao nhiêu?', goiY: '10% của 200 nghìn là 20 nghìn; giá mới 180 nghìn đồng.' },
      trongTam: [
        'So sánh hai số thập phân dương: so phần nguyên, rồi lần lượt hàng phần mười, phần trăm… Với số <b>âm</b>: số có phần số lớn hơn thì nhỏ hơn (−2,5 &lt; −2,05).',
        'Cộng, trừ, nhân, chia số thập phân âm làm như số nguyên: xác định dấu rồi tính phần số.',
        '<b>Làm tròn</b> đến một hàng: nhìn chữ số <b>ngay bên phải</b> hàng đó: &lt; 5 thì giữ nguyên, ≥ 5 thì cộng thêm 1 vào hàng làm tròn; bỏ các chữ số phía sau.',
        '<b>Tỉ số phần trăm</b> của a và b: ' + F('a · 100', 'b') + ' %.',
        'Giảm x% rồi giảm tiếp y% <b>không</b> bằng giảm (x + y)%, vì lần sau tính trên giá mới.'
      ],
      viDu: { de: 'Làm tròn 12,367 đến hàng phần mười.', loiGiai: 'Hàng phần mười là 3; chữ số bên phải là 6 ≥ 5 → <b>12,4</b>.' },
      nguon: N6T('Chương VII "Số thập phân", Bài 28–31 (SGV tr. 150–168)'),
      hoiDap: [
        { tu: ['lam tron'], tl: 'Nhìn chữ số ngay bên phải hàng cần làm tròn: ≥ 5 thì tăng 1, &lt; 5 thì giữ.' },
        { tu: ['phan tram', '%'], tl: 'Tỉ số phần trăm = a : b · 100 %. x% của b = b · x : 100.' },
        { tu: ['so sanh', 'am'], tl: 'Số âm nào có phần số lớn hơn thì nhỏ hơn.' },
        { tu: ['giam gia'], tl: 'Giảm lần hai tính trên giá đã giảm lần một.' }
      ]
    },
    cauHoi: [
      {
        id: 'T6E-01', muc: 'co-ban', liDoMuc: 'So sánh số thập phân âm.', loai: 'chon1', de: 'Số nào <b>lớn nhất</b>: −2,5; −2,45; −3,1; −2,05?',
        phuongAn: [{ t: '−2,5', phanHoi: '2,5 &gt; 2,05 nên −2,5 &lt; −2,05.' }, { t: '−2,45', phanHoi: '−2,45 &lt; −2,05.' }, { t: '−3,1', phanHoi: '−3,1 là số nhỏ nhất.' }, { t: '−2,05', dung: true }],
        goiY: ['Số âm gần 0 nhất là số lớn nhất.'], viSaoDung: '2,05 là phần số nhỏ nhất nên −2,05 lớn nhất.', loiGiai: '<b>−2,05</b>.', giangLai: 'So các phần số: 2,05 &lt; 2,45 &lt; 2,5 &lt; 3,1. Đổi chiều cho số âm.', tienBo: 'Em đã so sánh đúng số thập phân âm.',
        nguon: N6T('Bài 28 "Số thập phân" (SGV tr. 151)'), kiemTra: K6(),
        tuongTu: { id: 'T6E-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, số dương.', loai: 'chon1', de: 'Số nào <b>nhỏ nhất</b>: 0,7; 0,07; 0,77; 0,707?', phuongAn: [{ t: '0,7', phanHoi: 'Hàng phần mười là 7.' }, { t: '0,07', dung: true }, { t: '0,77', phanHoi: 'Lớn nhất.' }, { t: '0,707', phanHoi: 'Hàng phần mười là 7.' }], goiY: ['So hàng phần mười.'], viSaoDung: '0,07 có hàng phần mười là 0.', loiGiai: '<b>0,07</b>.', giangLai: 'Viết thêm chữ số 0 cho đủ ba chữ số sau dấu phẩy rồi so.', nguon: N6T('Bài 28 (SGV tr. 151)'), kiemTra: K6() }
      },
      {
        id: 'T6E-02', muc: 'co-ban', liDoMuc: 'Làm tròn đến hàng cho trước.', loai: 'so', de: 'Làm tròn số 3,14159 đến hàng phần trăm.', dapAn: 3.14,
        loi: [{ gt: 3.142, nhan: 'Nhầm hàng làm tròn', phanHoi: 'Đó là làm tròn đến hàng phần nghìn. Hàng phần trăm là chữ số thứ hai sau dấu phẩy.' }, { gt: 3.1, nhan: 'Nhầm hàng làm tròn', phanHoi: 'Đó là hàng phần mười.' }, { gt: 3.15, nhan: 'Lỗi quy tắc làm tròn', phanHoi: 'Chữ số bên phải hàng phần trăm là 1 (&lt; 5) nên giữ nguyên.' }],
        buoc: { hoi: 'Chữ số ngay bên phải hàng phần trăm là chữ số nào?', dapAn: 1, dung: 'Đúng: 1 &lt; 5 → giữ nguyên hàng phần trăm.', sai: '3,14|159 — chữ số đầu tiên sau vạch.' },
        goiY: ['Hàng phần trăm: chữ số thứ hai sau dấu phẩy.'], viSaoDung: '3,14|159 → 1 &lt; 5 → 3,14.', loiGiai: '<b>3,14</b>.', giangLai: 'Kẻ một vạch ngay sau hàng cần làm tròn, chỉ nhìn chữ số đầu tiên sau vạch.', tienBo: 'Em đã xác định đúng hàng làm tròn.',
        nguon: N6T('Bài 30 "Làm tròn và ước lượng" (SGV tr. 159)'), kiemTra: K6(),
        tuongTu: { id: 'T6E-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Làm tròn số 8,4762 đến hàng phần mười.', dapAn: 8.5, loi: [{ gt: 8.4, nhan: 'Lỗi quy tắc làm tròn', phanHoi: 'Chữ số sau là 7 ≥ 5 → tăng 1.' }, { gt: 8.48, nhan: 'Nhầm hàng làm tròn', phanHoi: 'Đó là hàng phần trăm.' }], buoc: { hoi: 'Chữ số ngay bên phải hàng phần mười?', dapAn: 7, dung: 'Đúng.', sai: '8,4|762.' }, goiY: ['8,4|762.'], viSaoDung: '8,5.', loiGiai: '<b>8,5</b>.', giangLai: 'Kẻ vạch.', nguon: N6T('Bài 30 (SGV tr. 159)'), kiemTra: K6() }
      },
      {
        id: 'T6E-03', muc: 'van-dung', liDoMuc: 'Thứ tự phép tính với số thập phân âm.', loai: 'so', de: 'Tính: (−2,5) · 4 + 1,8 : 0,6.', dapAn: -7,
        loi: [{ gt: 13, nhan: 'Lỗi dấu', phanHoi: '(−2,5) · 4 khác dấu → kết quả âm (−10).' }, { gt: '-41/3', saiSo: 0.01, nhan: 'Lỗi thứ tự phép tính', phanHoi: 'Phép chia 1,8 : 0,6 phải làm trước phép cộng.' }],
        buoc: { hoi: '1,8 : 0,6 = ?', dapAn: 3, dung: 'Đúng. Còn −10 + 3.', sai: '18 : 6.' },
        goiY: ['Nhân, chia trước; cộng sau.'], viSaoDung: '−10 + 3 = −7.', loiGiai: '(−2,5) · 4 = −10; 1,8 : 0,6 = 3; −10 + 3 = <b>−7</b>.', giangLai: 'Chia 1,8 : 0,6: nhân cả hai số với 10 → 18 : 6 = 3.', tienBo: 'Em đã làm đúng thứ tự và dấu.',
        nguon: N6T('Bài 29 "Tính toán với số thập phân" (SGV tr. 154)'), kiemTra: K6(),
        tuongTu: { id: 'T6E-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính: 3,6 : (−1,2) + 0,5 · 8.', dapAn: 1, loi: [{ gt: 7, nhan: 'Lỗi dấu', phanHoi: '3,6 : (−1,2) âm.' }, { gt: -20, nhan: 'Lỗi thứ tự phép tính', phanHoi: 'Nhân 0,5 · 8 trước.' }], buoc: { hoi: '3,6 : (−1,2) = ?', dapAn: -3, dung: 'Đúng.', sai: 'Khác dấu → âm.' }, goiY: ['−3 + 4.'], viSaoDung: '1.', loiGiai: '<b>1</b>.', giangLai: '36 : 12 = 3.', nguon: N6T('Bài 29 (SGV tr. 154)'), kiemTra: K6() }
      },
      {
        id: 'T6E-04', muc: 'van-dung', liDoMuc: 'Tính tỉ số phần trăm trong tình huống thực tế.', loai: 'so', de: 'Lớp 6B có 40 học sinh, 14 bạn đạt danh hiệu học sinh giỏi. Số học sinh giỏi chiếm bao nhiêu phần trăm số học sinh của lớp? <span class="note">Chỉ ghi số, ví dụ 25.</span>', dapAn: 35, soLieu: GIA_DINH,
        loi: [{ gt: 0.35, nhan: 'Chưa nhân 100', phanHoi: '0,35 là tỉ số. Đổi sang phần trăm: nhân 100.' }, { gt: '40/14', saiSo: 0.01, nhan: 'Đảo tỉ số', phanHoi: 'Tỉ số của số HS giỏi <b>so với</b> số HS cả lớp: 14 : 40.' }],
        buoc: { hoi: '14 : 40 = ? (số thập phân)', dapAn: 0.35, dung: 'Đúng. 0,35 = 35%.', sai: '14 : 40.' },
        goiY: ['14 : 40 · 100.'], viSaoDung: '14 · 100 : 40 = 35.', loiGiai: F('14 · 100', '40') + ' % = <b>35%</b>.', giangLai: 'Nếu lớp có 100 bạn thì có bao nhiêu bạn giỏi? 40 bạn có 14 → 100 bạn có 14 · 100 : 40 = 35.', tienBo: 'Em đã đổi tỉ số sang phần trăm.',
        nguon: N6T('Bài 31 "Một số bài toán về tỉ số và tỉ số phần trăm" (SGV tr. 162)'), kiemTra: K6(),
        tuongTu: { id: 'T6E-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một đội có 25 bạn, 9 bạn là nữ. Số bạn nữ chiếm bao nhiêu phần trăm? <span class="note">Chỉ ghi số.</span>', dapAn: 36, soLieu: GIA_DINH, loi: [{ gt: 0.36, nhan: 'Chưa nhân 100', phanHoi: 'Nhân 100.' }], buoc: { hoi: '9 : 25 = ?', dapAn: 0.36, dung: 'Đúng.', sai: '9 : 25.' }, goiY: ['9 · 100 : 25.'], viSaoDung: '36.', loiGiai: '<b>36%</b>.', giangLai: '25 bạn → 100 bạn: nhân 4.', nguon: N6T('Bài 31 (SGV tr. 162)'), kiemTra: K6() }
      },
      {
        id: 'T6E-05', muc: 'nang-cao', liDoMuc: 'Hai lần giảm giá liên tiếp; phải nhận ra lần hai tính trên giá mới.', loai: 'so', de: 'Một đôi giày giá 250 000 đồng. Cửa hàng giảm 20%, sau đó giảm tiếp 10% trên giá đã giảm. Giá cuối cùng là bao nhiêu đồng?', dapAn: 180000, soLieu: GIA_DINH,
        loi: [{ gt: 175000, nhan: 'Cộng phần trăm', phanHoi: 'Không giảm 20% + 10% = 30% của giá ban đầu. Lần hai tính trên giá <b>đã giảm</b>.' }, { gt: 200000, nhan: 'Thiếu bước', phanHoi: '200 000 đồng là giá sau lần giảm thứ nhất.' }, { gt: 20000, nhan: 'Chưa trả lời đúng câu hỏi', phanHoi: 'Đó là số tiền giảm ở lần hai.' }],
        buoc: { hoi: 'Giá sau lần giảm thứ nhất là bao nhiêu đồng?', dapAn: 200000, dung: 'Đúng. Lần hai giảm 10% của 200 000.', sai: '250 000 − 20% · 250 000.' },
        goiY: ['Giảm 20% → còn 80%.', 'Giảm tiếp 10% → còn 90% của giá mới.'], viSaoDung: '250 000 · 0,8 · 0,9 = 180 000.', loiGiai: 'Lần 1: 250 000 · 80% = 200 000 đ.<br>Lần 2: 200 000 · 90% = <b>180 000</b> đ.',
        giangLai: 'Mẹo: "giảm x%" = "còn (100 − x)%". Nhân lần lượt từng phần còn lại.', tienBo: 'Em đã tính lần giảm thứ hai trên giá mới.',
        nguon: N6T('Bài 31 "Một số bài toán về tỉ số và tỉ số phần trăm" (SGV tr. 162)'), kiemTra: K6(),
        tuongTu: { id: 'T6E-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một chiếc cặp giá 400 000 đồng, giảm 25% rồi giảm tiếp 10% trên giá đã giảm. Giá cuối là bao nhiêu đồng?', dapAn: 270000, soLieu: GIA_DINH, loi: [{ gt: 260000, nhan: 'Cộng phần trăm', phanHoi: 'Lần hai tính trên giá mới.' }, { gt: 300000, nhan: 'Thiếu bước', phanHoi: 'Đó là giá sau lần 1.' }], buoc: { hoi: 'Giá sau lần 1?', dapAn: 300000, dung: 'Đúng.', sai: '400 000 · 75%.' }, goiY: ['75% rồi 90%.'], viSaoDung: '270 000.', loiGiai: '<b>270 000</b> đ.', giangLai: 'Giảm x% = còn (100 − x)%.', nguon: N6T('Bài 31 (SGV tr. 162)'), kiemTra: K6() }
      },
      {
        id: 'T6E-06', muc: 'nang-cao', liDoMuc: 'Tìm x: phải tính phần trăm của một số rồi tìm số bị trừ.', loai: 'so', de: 'Tìm x, biết: x − 2,5 = 30% của 12.', dapAn: 6.1,
        loi: [{ gt: 1.1, nhan: 'Lỗi tìm số bị trừ', phanHoi: 'x là số bị trừ: x = hiệu + số trừ = 3,6 + 2,5.' }, { gt: 362.5, nhan: 'Lỗi phần trăm', phanHoi: '30% của 12 = 12 · 30 : 100, không phải 30 · 12.' }],
        buoc: { hoi: '30% của 12 bằng bao nhiêu?', dapAn: 3.6, dung: 'Đúng. x − 2,5 = 3,6.', sai: '12 · 30 : 100.' },
        goiY: ['Tính 30% của 12 trước.'], viSaoDung: 'x = 3,6 + 2,5 = 6,1.', loiGiai: '30% của 12 = 3,6. x − 2,5 = 3,6 ⇒ x = <b>6,1</b>.<br>Thử lại: 6,1 − 2,5 = 3,6 ✓', giangLai: 'Số bị trừ = hiệu + số trừ. Thử lại bằng cách thay x vào.', tienBo: 'Em đã kết hợp phần trăm và tìm x.',
        nguon: N6T('Bài 29 (SGV tr. 154); Bài 31 (SGV tr. 162)'), kiemTra: K6(),
        tuongTu: { id: 'T6E-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tìm x, biết: x + 1,4 = 15% của 40.', dapAn: 4.6, loi: [{ gt: 7.4, nhan: 'Lỗi tìm số hạng', phanHoi: 'x = tổng − số hạng đã biết.' }], buoc: { hoi: '15% của 40?', dapAn: 6, dung: 'Đúng.', sai: '40 · 15 : 100.' }, goiY: ['x = 6 − 1,4.'], viSaoDung: '4,6.', loiGiai: '<b>4,6</b>.', giangLai: 'Thử lại.', nguon: N6T('Bài 29, 31 (SGV tr. 154–162)'), kiemTra: K6() }
      }
    ]
  };

  /* ---------------- KHTN 6 ---------------- */
  const vl6Luc = {
    id: 'vl6-luc', lop: 6, mon: 'khtn', phanMon: 'Vật lí', ten: 'Lực trong đời sống',
    sgk: 'SGV KHTN 6 — Chương VIII, Bài 40–45, SGV tr. 178–196', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Đổi đơn vị khối lượng: 1 kg = 1000 g', 'Đo chiều dài (Chương I)'],
    yeuCauCanDat: ['Nêu được lực là sự đẩy hoặc kéo; nhận biết lực tiếp xúc và lực không tiếp xúc.', 'Biểu diễn được lực bằng mũi tên; đọc được độ lớn, hướng của lực.', 'Nêu được độ giãn của lò xo treo vật tỉ lệ với khối lượng vật treo.', 'Nêu được trọng lượng là độ lớn lực hút của Trái Đất; vận dụng: vật 1 kg có trọng lượng khoảng 10 N.', 'Nêu được tác dụng có lợi, có hại của lực ma sát và lực cản của nước.'],
    bai: {
      mucTieu: ['phân biệt lực tiếp xúc và không tiếp xúc;', 'đọc độ lớn, hướng của lực từ mũi tên;', 'tính độ dài lò xo khi treo vật;', 'tính trọng lượng từ khối lượng.'],
      khoiDong: { hoi: 'Khi em đá quả bóng đang nằm yên, quả bóng thay đổi thế nào? Ai tác dụng lực lên quả bóng?', goiY: 'Quả bóng chuyển từ đứng yên sang chuyển động (thay đổi tốc độ); chân em tác dụng lực đẩy lên quả bóng.' },
      trongTam: [
        '<b>Lực</b> là sự đẩy hoặc kéo của vật này lên vật khác. Lực có thể làm vật <b>thay đổi tốc độ</b>, <b>đổi hướng chuyển động</b> hoặc <b>biến dạng</b>.',
        '<b>Lực tiếp xúc</b>: hai vật chạm vào nhau (tay đẩy cửa). <b>Lực không tiếp xúc</b>: không cần chạm (nam châm hút đinh sắt, Trái Đất hút quả táo).',
        'Đơn vị lực là <b>niutơn (N)</b>. Lực được biểu diễn bằng <b>mũi tên</b>: gốc ở điểm đặt, chiều mũi tên là hướng của lực, độ dài tỉ lệ với độ lớn theo tỉ xích.',
        'Trong giới hạn đàn hồi, <b>độ giãn</b> của lò xo treo vật tỉ lệ với khối lượng vật treo. Độ giãn = chiều dài khi treo vật − chiều dài tự nhiên.',
        '<b>Trọng lượng</b> là độ lớn lực hút của Trái Đất lên vật; vật có khối lượng 1 kg có trọng lượng khoảng <b>10 N</b>.',
        '<b>Lực ma sát</b> cản trở chuyển động; có lợi (phanh xe, đi không trượt) hoặc có hại (mòn lốp, xích). Nước cũng có <b>lực cản</b> lên vật chuyển động trong nó.'
      ],
      viDu: { de: 'Một túi gạo 5 kg có trọng lượng khoảng bao nhiêu niutơn?', loiGiai: '1 kg ↔ khoảng 10 N, nên 5 kg ↔ khoảng 5 · 10 = <b>50 N</b>.' },
      nguon: N6K('Chương VIII "Lực trong đời sống", Bài 40–45 (SGV tr. 178–196)'),
      hoiDap: [
        { tu: ['tiep xuc'], tl: 'Lực tiếp xúc: hai vật chạm nhau. Lực không tiếp xúc: hút/đẩy từ xa (nam châm, trọng lực).' },
        { tu: ['lo xo', 'do gian'], tl: 'Độ giãn = chiều dài lúc treo − chiều dài tự nhiên; độ giãn tỉ lệ với khối lượng vật treo.' },
        { tu: ['trong luong', 'niuton', 'newton'], tl: 'Vật 1 kg có trọng lượng khoảng 10 N. Nhớ đổi gam sang kilôgam trước.' },
        { tu: ['ma sat'], tl: 'Ma sát có lợi khi cần giữ, hãm, bám (phanh, đế giày); có hại khi làm mòn, nóng máy, cản chuyển động.' }
      ]
    },
    cauHoi: [
      {
        id: 'VL6A-01', muc: 'co-ban', liDoMuc: 'Nhận biết lực không tiếp xúc.', loai: 'chon1', de: 'Lực nào sau đây là <b>lực không tiếp xúc</b>?',
        phuongAn: [{ t: 'Lực của tay đẩy chiếc xe đạp.', phanHoi: 'Tay chạm vào xe → lực tiếp xúc.' }, { t: 'Lực hút của nam châm lên chiếc đinh sắt ở gần.', dung: true }, { t: 'Lực của chân đá vào quả bóng.', phanHoi: 'Chân chạm bóng → lực tiếp xúc.' }, { t: 'Lực của dây kéo gàu nước.', phanHoi: 'Dây buộc vào gàu → lực tiếp xúc.' }],
        goiY: ['Hai vật có chạm vào nhau không?'], viSaoDung: 'Nam châm hút đinh khi chưa chạm vào.', loiGiai: '<b>Lực hút của nam châm</b>.', giangLai: 'Lực không tiếp xúc "tác dụng từ xa": nam châm, trọng lực của Trái Đất.', tienBo: 'Em đã phân biệt hai loại lực.',
        nguon: N6K('Bài 40 "Lực là gì?" (SGV tr. 178)'), kiemTra: K6(),
        tuongTu: { id: 'VL6A-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Lực nào là <b>lực không tiếp xúc</b>?', phuongAn: [{ t: 'Lực Trái Đất hút quả táo đang rơi.', dung: true }, { t: 'Lực của búa đóng vào đinh.', phanHoi: 'Búa chạm đinh.' }, { t: 'Lực của gió đẩy cánh buồm.', phanHoi: 'Gió (không khí) chạm vào buồm.' }, { t: 'Lực của tay bóp quả bóng.', phanHoi: 'Tay chạm bóng.' }], goiY: ['Có chạm không?'], viSaoDung: 'Trọng lực tác dụng từ xa.', loiGiai: '<b>Lực Trái Đất hút quả táo</b>.', giangLai: 'Quả táo rơi khi không ai chạm vào.', nguon: N6K('Bài 40 (SGV tr. 178)'), kiemTra: K6() }
      },
      {
        id: 'VL6A-02', muc: 'co-ban', liDoMuc: 'Áp dụng trực tiếp: vật 1 kg ↔ khoảng 10 N.', loai: 'so', de: 'Một quả dưa hấu có khối lượng 2,5 kg. Trọng lượng của nó khoảng bao nhiêu niutơn? <span class="note">Chỉ ghi số.</span>', dapAn: 25,
        loi: [{ gt: 2.5, nhan: 'Nhầm khối lượng với trọng lượng', phanHoi: '2,5 là khối lượng (kg). Trọng lượng (N) ≈ 10 lần số kg.' }, { gt: 0.25, nhan: 'Lỗi dùng công thức', phanHoi: 'Em đã chia cho 10. Phải nhân với 10.' }],
        buoc: { hoi: 'Vật 1 kg có trọng lượng khoảng bao nhiêu N?', dapAn: 10, dung: 'Đúng. 2,5 kg → 2,5 · 10.', sai: 'Nhớ: 1 kg ↔ khoảng 10 N.' },
        goiY: ['1 kg ↔ khoảng 10 N.'], viSaoDung: '2,5 · 10 = 25 N.', loiGiai: '2,5 · 10 = <b>25 N</b>.', giangLai: 'Khối lượng (kg) cho biết lượng chất; trọng lượng (N) là độ lớn lực hút của Trái Đất. Số N gấp khoảng 10 lần số kg.', tienBo: 'Em đã phân biệt khối lượng và trọng lượng.',
        nguon: N6K('Bài 43 "Trọng lượng, lực hấp dẫn" (SGV tr. 189)'), kiemTra: K6(),
        tuongTu: { id: 'VL6A-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, cần đổi gam.', loai: 'so', de: 'Một hộp sữa có khối lượng 400 g. Trọng lượng của nó khoảng bao nhiêu niutơn? <span class="note">Chỉ ghi số.</span>', dapAn: 4, loi: [{ gt: 4000, nhan: 'Lỗi đổi đơn vị', phanHoi: 'Đổi 400 g = 0,4 kg trước.' }, { gt: 0.4, nhan: 'Nhầm khối lượng với trọng lượng', phanHoi: '0,4 là số kg.' }], buoc: { hoi: '400 g = ? kg', dapAn: 0.4, dung: 'Đúng.', sai: '400 : 1000.' }, goiY: ['Đổi g → kg.'], viSaoDung: '0,4 · 10 = 4.', loiGiai: '<b>4 N</b>.', giangLai: 'Luôn đổi sang kg trước.', nguon: N6K('Bài 43 (SGV tr. 189)'), kiemTra: K6() }
      },
      {
        id: 'VL6A-03', muc: 'van-dung', liDoMuc: 'Hai bước: tìm độ giãn ứng với 100 g, suy ra độ giãn và chiều dài khi treo 300 g.', loai: 'so',
        de: 'Một lò xo có chiều dài tự nhiên 20 cm. Treo vật 100 g thì lò xo dài 22 cm. Nếu treo vật 300 g (vẫn trong giới hạn đàn hồi) thì lò xo dài bao nhiêu xentimét?', dapAn: 26, soLieu: GIA_DINH,
        loi: [{ gt: 66, nhan: 'Lỗi dùng công thức', phanHoi: 'Không nhân cả chiều dài 22 cm với 3. Chỉ <b>độ giãn</b> mới tỉ lệ với khối lượng.' }, { gt: 6, nhan: 'Chưa trả lời đúng câu hỏi', phanHoi: '6 cm là độ giãn. Đề hỏi chiều dài lò xo.' }, { gt: 24, nhan: 'Lỗi tỉ lệ', phanHoi: '300 g gấp 3 lần 100 g nên độ giãn gấp 3 lần 2 cm.' }],
        buoc: { hoi: 'Khi treo 100 g, lò xo giãn thêm bao nhiêu cm?', dapAn: 2, dung: 'Đúng: 22 − 20 = 2 cm. Treo 300 g giãn 3 · 2 cm.', sai: 'Độ giãn = chiều dài lúc treo − chiều dài tự nhiên.' },
        goiY: ['Độ giãn khi treo 100 g = 22 − 20.', 'Chiều dài mới = chiều dài tự nhiên + độ giãn mới.'], viSaoDung: 'Độ giãn 6 cm → dài 26 cm.', loiGiai: 'Độ giãn với 100 g: 2 cm. Với 300 g: 3 · 2 = 6 cm. Chiều dài: 20 + 6 = <b>26 cm</b>.',
        giangLai: 'Tách chiều dài lò xo thành hai phần: "phần sẵn có" 20 cm (không đổi) và "phần giãn thêm" (tỉ lệ với khối lượng).', tienBo: 'Em đã phân biệt độ giãn và chiều dài.',
        nguon: N6K('Bài 42 "Biến dạng của lò xo" (SGV tr. 186)'), kiemTra: K6(),
        tuongTu: { id: 'VL6A-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Lò xo dài tự nhiên 15 cm. Treo vật 50 g thì dài 16 cm. Treo vật 200 g (trong giới hạn đàn hồi) thì lò xo dài bao nhiêu cm?', dapAn: 19, soLieu: GIA_DINH, loi: [{ gt: 64, nhan: 'Lỗi dùng công thức', phanHoi: 'Chỉ độ giãn tỉ lệ.' }, { gt: 4, nhan: 'Chưa trả lời đúng câu hỏi', phanHoi: 'Đó là độ giãn.' }], buoc: { hoi: 'Độ giãn khi treo 50 g?', dapAn: 1, dung: 'Đúng.', sai: '16 − 15.' }, goiY: ['200 g gấp 4 lần 50 g.'], viSaoDung: '15 + 4.', loiGiai: '<b>19 cm</b>.', giangLai: 'Phần sẵn có + phần giãn.', nguon: N6K('Bài 42 (SGV tr. 186)'), kiemTra: K6() }
      },
      {
        id: 'VL6A-04', muc: 'van-dung', liDoMuc: 'Đọc độ lớn và hướng từ hình biểu diễn lực theo tỉ xích.', loai: 'chon1',
        de: 'Một lực được biểu diễn bằng mũi tên nằm ngang, hướng <b>từ trái sang phải</b>, dài <b>3 đoạn</b>; tỉ xích mỗi đoạn ứng với <b>5 N</b>. Lực này có:',
        phuongAn: [{ t: 'Độ lớn 15 N, hướng từ trái sang phải.', dung: true }, { t: 'Độ lớn 3 N, hướng từ trái sang phải.', phanHoi: '3 là số đoạn. Mỗi đoạn ứng 5 N.' }, { t: 'Độ lớn 15 N, hướng từ phải sang trái.', phanHoi: 'Hướng của lực là chiều mũi tên chỉ tới.' }, { t: 'Độ lớn 8 N, hướng từ trái sang phải.', phanHoi: 'Không cộng 3 + 5; phải nhân số đoạn với giá trị mỗi đoạn.' }],
        goiY: ['Độ lớn = số đoạn × giá trị mỗi đoạn.'], viSaoDung: '3 · 5 = 15 N, hướng theo mũi tên.', loiGiai: '<b>15 N, hướng từ trái sang phải</b>.', giangLai: 'Tỉ xích giống bản đồ: 1 đoạn trên giấy ứng với 5 N ngoài thực tế.', tienBo: 'Em đã đọc đúng mũi tên lực.',
        nguon: N6K('Bài 41 "Biểu diễn lực" (SGV tr. 183)'), kiemTra: K6(),
        tuongTu: { id: 'VL6A-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Mũi tên lực thẳng đứng, hướng <b>từ dưới lên</b>, dài 4 đoạn; mỗi đoạn ứng với 10 N. Lực này có:', phuongAn: [{ t: 'Độ lớn 40 N, hướng từ dưới lên.', dung: true }, { t: 'Độ lớn 4 N, hướng từ dưới lên.', phanHoi: 'Nhân với 10 N.' }, { t: 'Độ lớn 40 N, hướng từ trên xuống.', phanHoi: 'Xem chiều mũi tên.' }, { t: 'Độ lớn 14 N, hướng từ dưới lên.', phanHoi: 'Không cộng.' }], goiY: ['4 · 10.'], viSaoDung: '40 N, lên.', loiGiai: '<b>40 N, hướng từ dưới lên</b>.', giangLai: 'Tỉ xích như bản đồ.', nguon: N6K('Bài 41 (SGV tr. 183)'), kiemTra: K6() }
      },
      {
        id: 'VL6A-05', muc: 'nang-cao', liDoMuc: 'Phân loại nhiều tình huống thực tế theo tác dụng có lợi/có hại của ma sát.', loai: 'chonNhieu',
        de: '<b>Chọn TẤT CẢ</b> các trường hợp lực ma sát <b>có lợi</b>.',
        phuongAn: [{ t: 'Bóp phanh để xe đạp dừng lại.', dung: true }, { t: 'Đế giày bám mặt đường giúp ta đi không bị trượt.', dung: true }, { t: 'Xích xe đạp bị mòn sau thời gian dài sử dụng.', phanHoi: 'Ma sát làm mòn xích → có hại.' }, { t: 'Viết phấn lên bảng để lại nét chữ.', dung: true }, { t: 'Phải dùng rất nhiều sức mới đẩy được thùng hàng nặng trên sàn.', phanHoi: 'Ma sát cản trở việc đẩy → có hại.' }],
        goiY: ['Nếu không có ma sát, việc đó dễ hơn hay khó hơn?'], viSaoDung: 'Phanh, đế giày, viết phấn đều cần ma sát.', loiGiai: 'Có lợi: phanh xe, đế giày bám đường, viết phấn. Có hại: mòn xích, khó đẩy thùng hàng.',
        giangLai: 'Phép thử "mất ma sát": nếu ma sát biến mất mà việc trở nên khó/không làm được → ma sát có lợi. Nếu việc trở nên dễ hơn → ma sát có hại.', tienBo: 'Em đã phân tích từng tình huống.',
        nguon: N6K('Bài 44 "Lực ma sát" (SGV tr. 192)'), kiemTra: K6(),
        tuongTu: { id: 'VL6A-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc, chọn trường hợp có hại.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các trường hợp lực ma sát <b>có hại</b>.', phuongAn: [{ t: 'Lốp ô tô bị mòn dần.', dung: true }, { t: 'Bản lề cửa kêu cót két, khó mở.', dung: true }, { t: 'Rãnh trên lốp xe giúp xe không trượt khi trời mưa.', phanHoi: 'Có lợi.' }, { t: 'Trục quay của máy bị nóng lên khi máy chạy lâu.', dung: true }, { t: 'Cầm chắc được cây bút khi viết.', phanHoi: 'Có lợi.' }], goiY: ['Phép thử "mất ma sát".'], viSaoDung: 'Mòn lốp, cửa kêu, trục nóng.', loiGiai: 'Ý 1, 2, 4.', giangLai: 'Mất ma sát thì dễ hơn → có hại.', nguon: N6K('Bài 44 (SGV tr. 192)'), kiemTra: K6() }
      },
      {
        id: 'VL6A-06', muc: 'nang-cao', liDoMuc: 'Giải thích hiện tượng thực tiễn bằng lực cản của nước; câu mở, đánh giá theo tiêu chí.', loai: 'mo',
        de: 'Vận động viên bơi lội thường mặc đồ bơi bó sát và đội mũ bơi trơn nhẵn. Hãy giải thích việc làm này bằng kiến thức về lực. Viết 2–4 câu.',
        tieuChi: [
          { t: 'Nêu được nước có lực cản lên người chuyển động trong nước.', tuDong: { tuKhoa: ['luc can', 'can tro'] } },
          { t: 'Nêu được đồ bơi bó sát, mũ trơn nhẵn làm giảm lực cản.', tuDong: { tuKhoa: ['giam'] } },
          { t: 'Kết luận: bơi nhanh hơn, đỡ tốn sức.', tuDong: { tuKhoa: ['nhanh', 'it ton', 'do ton', 'de dang'] } },
          { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }
        ],
        baiThamKhao: 'Khi bơi, nước tác dụng lực cản lên cơ thể vận động viên. Đồ bơi bó sát và mũ bơi trơn nhẵn giúp giảm lực cản của nước. Nhờ vậy vận động viên bơi nhanh hơn và đỡ tốn sức hơn.',
        giupViet: 'Dàn ý: (1) Nước có … lên người bơi. (2) Đồ bơi bó sát, mũ trơn giúp … (3) Vì vậy vận động viên …',
        goiY: ['Khi em đi bộ dưới hồ bơi, em thấy khó đi hơn trên cạn — vì sao?'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Thử tưởng tượng mặc áo phao rộng thùng thình rồi bơi: nước "níu" vào áo nhiều hơn → bơi chậm. Đồ bó sát làm nước ít "níu" hơn.', tienBo: 'Em đã giải thích hiện tượng bằng lực cản của nước.',
        nguon: N6K('Bài 45 "Lực cản của nước" (SGV tr. 195)'), kiemTra: K6('Câu mở: nhóm biên soạn kiểm tra tiêu chí và bài tham khảo; máy chỉ kiểm tra sơ bộ theo từ khoá, học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'VL6A-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Vì sao thân tàu thuyền thường được làm thon, nhọn ở phía trước? Viết 2–4 câu.', tieuChi: [{ t: 'Nêu nước có lực cản lên tàu.', tuDong: { tuKhoa: ['luc can', 'can tro'] } }, { t: 'Nêu hình dạng thon nhọn làm giảm lực cản.', tuDong: { tuKhoa: ['giam'] } }, { t: 'Kết luận: tàu đi nhanh hơn / tiết kiệm nhiên liệu.', tuDong: { tuKhoa: ['nhanh', 'tiet kiem'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Khi tàu chạy, nước tác dụng lực cản lên thân tàu. Thân tàu thon, nhọn phía trước giúp giảm lực cản của nước. Nhờ vậy tàu đi nhanh hơn và tiết kiệm nhiên liệu.', giupViet: 'Nước có … → Hình dạng thon giúp … → Vì vậy …', goiY: ['Giống cá có thân thon.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Hình thon "rẽ nước" dễ hơn.', nguon: N6K('Bài 45 (SGV tr. 195)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ theo từ khoá.') }
      }
    ]
  };

  const vl6NangLuong = {
    id: 'vl6-nang-luong', lop: 6, mon: 'khtn', phanMon: 'Vật lí', ten: 'Năng lượng',
    sgk: 'SGV KHTN 6 — Chương IX, Bài 46–51, SGV tr. 197–214', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Lực (Chương VIII)'],
    yeuCauCanDat: ['Nhận biết một số dạng năng lượng: động năng, thế năng, năng lượng nhiệt, ánh sáng, âm thanh, điện, hoá học.', 'Nêu được sự chuyển hoá năng lượng trong một số ví dụ.', 'Nêu được năng lượng hao phí luôn xuất hiện khi chuyển hoá; tính năng lượng hao phí từ số liệu.', 'Phân biệt năng lượng tái tạo và không tái tạo; nêu biện pháp tiết kiệm năng lượng.'],
    bai: {
      mucTieu: ['gọi tên dạng năng lượng;', 'mô tả sự chuyển hoá năng lượng;', 'tính năng lượng hao phí;', 'chọn biện pháp tiết kiệm năng lượng.'],
      khoiDong: { hoi: 'Khi em bật quạt điện, quạt nhận năng lượng gì và tạo ra những gì?', goiY: 'Quạt nhận năng lượng điện; tạo ra chuyển động của cánh quạt (động năng), một ít nhiệt và âm thanh.' },
      trongTam: [
        'Năng lượng có nhiều dạng: <b>động năng</b> (vật chuyển động), <b>thế năng</b> (hấp dẫn, đàn hồi), năng lượng <b>nhiệt</b>, <b>ánh sáng</b>, <b>âm thanh</b>, <b>điện</b>, <b>hoá học</b> (trong thức ăn, nhiên liệu, pin).',
        'Năng lượng có thể <b>truyền</b> từ vật này sang vật khác và <b>chuyển hoá</b> từ dạng này sang dạng khác.',
        'Khi chuyển hoá, luôn có một phần thành năng lượng <b>hao phí</b> (thường là nhiệt). Năng lượng có ích + năng lượng hao phí = năng lượng cung cấp.',
        '<b>Năng lượng tái tạo</b>: Mặt Trời, gió, nước, sinh khối… — được bổ sung liên tục. <b>Không tái tạo</b>: than đá, dầu mỏ, khí tự nhiên — dùng dần sẽ cạn.',
        '<b>Tiết kiệm năng lượng</b>: tắt thiết bị khi không dùng, dùng thiết bị hiệu suất cao (đèn LED), đi bộ/xe đạp quãng ngắn…'
      ],
      viDu: { de: 'Một bóng đèn nhận 60 J năng lượng điện, tạo ra 12 J năng lượng ánh sáng. Năng lượng hao phí là bao nhiêu?', loiGiai: 'Hao phí = 60 − 12 = <b>48 J</b> (chủ yếu thành nhiệt).' },
      nguon: N6K('Chương IX "Năng lượng", Bài 46–51 (SGV tr. 197–214)'),
      hoiDap: [
        { tu: ['hao phi'], tl: 'Hao phí = năng lượng cung cấp − năng lượng có ích.' },
        { tu: ['tai tao'], tl: 'Tái tạo: Mặt Trời, gió, nước, sinh khối. Không tái tạo: than, dầu, khí tự nhiên.' },
        { tu: ['chuyen hoa'], tl: 'Viết theo mũi tên: dạng nhận vào → dạng tạo ra. Ví dụ bếp ga: hoá năng → nhiệt.' },
        { tu: ['dong nang', 'the nang'], tl: 'Động năng: vật đang chuyển động. Thế năng hấp dẫn: vật ở trên cao; thế năng đàn hồi: vật bị nén, kéo giãn.' }
      ]
    },
    cauHoi: [
      {
        id: 'VL6B-01', muc: 'co-ban', liDoMuc: 'Nhận biết dạng năng lượng.', loai: 'chon1', de: 'Quả bóng đang bay trên sân có dạng năng lượng nào dễ nhận thấy nhất?',
        phuongAn: [{ t: 'Động năng', dung: true }, { t: 'Năng lượng điện', phanHoi: 'Quả bóng không có dòng điện.' }, { t: 'Năng lượng hoá học', phanHoi: 'Năng lượng hoá học có trong thức ăn, nhiên liệu, pin.' }, { t: 'Năng lượng âm thanh', phanHoi: 'Bóng đang bay không phát ra âm thanh đáng kể.' }],
        goiY: ['Bóng đang chuyển động.'], viSaoDung: 'Vật chuyển động có động năng.', loiGiai: '<b>Động năng</b>.', giangLai: '"Động" = chuyển động. Mọi vật đang chuyển động đều có động năng.', tienBo: 'Em đã gọi đúng tên dạng năng lượng.',
        nguon: N6K('Bài 47 "Một số dạng năng lượng" (SGV tr. 200)'), kiemTra: K6(),
        tuongTu: { id: 'VL6B-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Thức ăn chúng ta ăn hằng ngày dự trữ năng lượng ở dạng nào?', phuongAn: [{ t: 'Năng lượng hoá học', dung: true }, { t: 'Động năng', phanHoi: 'Thức ăn không chuyển động.' }, { t: 'Năng lượng ánh sáng', phanHoi: 'Không phát sáng.' }, { t: 'Năng lượng điện', phanHoi: 'Không phải.' }], goiY: ['Giống nhiên liệu, pin.'], viSaoDung: 'Năng lượng hoá học.', loiGiai: '<b>Năng lượng hoá học</b>.', giangLai: 'Thức ăn, xăng, pin: năng lượng hoá học.', nguon: N6K('Bài 47 (SGV tr. 200)'), kiemTra: K6() }
      },
      {
        id: 'VL6B-02', muc: 'co-ban', liDoMuc: 'Phân loại nguồn năng lượng tái tạo.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các nguồn năng lượng <b>tái tạo</b>.',
        phuongAn: [{ t: 'Năng lượng Mặt Trời', dung: true }, { t: 'Năng lượng gió', dung: true }, { t: 'Than đá', phanHoi: 'Than đá hình thành qua hàng triệu năm, dùng dần sẽ cạn.' }, { t: 'Dầu mỏ', phanHoi: 'Không tái tạo.' }, { t: 'Năng lượng nước (thuỷ điện)', dung: true }],
        goiY: ['Nguồn nào được thiên nhiên bổ sung liên tục?'], viSaoDung: 'Mặt Trời, gió, nước được bổ sung liên tục.', loiGiai: 'Tái tạo: <b>Mặt Trời, gió, nước</b>.', giangLai: 'Hỏi: "Ngày mai nguồn này còn không?" — nắng, gió, dòng sông vẫn còn; than đá đào lên đốt rồi thì hết.', tienBo: 'Em đã phân loại đúng.',
        nguon: N6K('Bài 50 "Năng lượng tái tạo" (SGV tr. 209)'), kiemTra: K6(),
        tuongTu: { id: 'VL6B-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, chọn không tái tạo.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các nguồn năng lượng <b>không tái tạo</b>.', phuongAn: [{ t: 'Khí tự nhiên', dung: true }, { t: 'Than đá', dung: true }, { t: 'Gió', phanHoi: 'Tái tạo.' }, { t: 'Dầu mỏ', dung: true }, { t: 'Mặt Trời', phanHoi: 'Tái tạo.' }], goiY: ['Nguồn nào dùng dần sẽ cạn?'], viSaoDung: 'Than, dầu, khí.', loiGiai: 'Ý 1, 2, 4.', giangLai: 'Nhiên liệu hoá thạch sẽ cạn.', nguon: N6K('Bài 50 (SGV tr. 209)'), kiemTra: K6() }
      },
      {
        id: 'VL6B-03', muc: 'van-dung', liDoMuc: 'Tính năng lượng hao phí từ số liệu.', loai: 'so', de: 'Một bóng đèn nhận 100 J năng lượng điện và tạo ra 20 J năng lượng ánh sáng. Năng lượng hao phí (chủ yếu là nhiệt) là bao nhiêu jun? <span class="note">Chỉ ghi số.</span>', dapAn: 80, soLieu: GIA_DINH,
        loi: [{ gt: 120, nhan: 'Lỗi dùng công thức', phanHoi: 'Hao phí = cung cấp − có ích, không cộng.' }, { gt: 20, nhan: 'Nhầm có ích với hao phí', phanHoi: '20 J ánh sáng là phần có ích.' }],
        buoc: { hoi: 'Năng lượng có ích + hao phí bằng bao nhiêu jun?', dapAn: 100, dung: 'Đúng — bằng năng lượng cung cấp. Hao phí = 100 − 20.', sai: 'Tổng năng lượng tạo ra bằng năng lượng nhận vào.' },
        goiY: ['Hao phí = cung cấp − có ích.'], viSaoDung: '100 − 20 = 80 J.', loiGiai: '100 − 20 = <b>80 J</b>.', giangLai: 'Năng lượng không tự mất đi: 100 J vào thì phải có 100 J ra, gồm 20 J ánh sáng và phần còn lại là nhiệt.', tienBo: 'Em đã tính đúng năng lượng hao phí.',
        nguon: N6K('Bài 49 "Năng lượng hao phí" (SGV tr. 206)'), kiemTra: K6(),
        tuongTu: { id: 'VL6B-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một quạt điện nhận 200 J năng lượng điện, cánh quạt nhận được 170 J động năng. Năng lượng hao phí là bao nhiêu jun?', dapAn: 30, soLieu: GIA_DINH, loi: [{ gt: 370, nhan: 'Lỗi dùng công thức', phanHoi: 'Trừ, không cộng.' }, { gt: 170, nhan: 'Nhầm có ích với hao phí', phanHoi: 'Đó là phần có ích.' }], buoc: { hoi: 'Có ích + hao phí = ?', dapAn: 200, dung: 'Đúng.', sai: 'Bằng năng lượng cung cấp.' }, goiY: ['200 − 170.'], viSaoDung: '30 J.', loiGiai: '<b>30 J</b>.', giangLai: 'Vào bao nhiêu, ra bấy nhiêu.', nguon: N6K('Bài 49 (SGV tr. 206)'), kiemTra: K6() }
      },
      {
        id: 'VL6B-04', muc: 'van-dung', liDoMuc: 'Mô tả đúng chiều chuyển hoá năng lượng trong thiết bị thực tế.', loai: 'chon1', de: 'Khi đun nước bằng bếp ga, năng lượng chủ yếu chuyển hoá thế nào?',
        phuongAn: [{ t: 'Năng lượng hoá học của khí ga → năng lượng nhiệt', dung: true }, { t: 'Năng lượng điện → năng lượng nhiệt', phanHoi: 'Bếp ga không dùng điện để đun.' }, { t: 'Năng lượng nhiệt → năng lượng hoá học', phanHoi: 'Ngược chiều.' }, { t: 'Động năng → năng lượng nhiệt', phanHoi: 'Nguồn năng lượng là khí ga (nhiên liệu).' }],
        goiY: ['Khí ga là nhiên liệu.'], viSaoDung: 'Nhiên liệu cháy: hoá năng → nhiệt.', loiGiai: '<b>Hoá học → nhiệt</b>.', giangLai: 'Hỏi hai câu: "Nhận vào gì?" (khí ga — hoá học), "Tạo ra gì có ích?" (nhiệt làm nóng nước).', tienBo: 'Em đã xác định đúng chiều chuyển hoá.',
        nguon: N6K('Bài 48 "Sự chuyển hoá năng lượng" (SGV tr. 202)'), kiemTra: K6(),
        tuongTu: { id: 'VL6B-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Tấm pin mặt trời chuyển hoá năng lượng thế nào?', phuongAn: [{ t: 'Năng lượng ánh sáng → năng lượng điện', dung: true }, { t: 'Năng lượng điện → năng lượng ánh sáng', phanHoi: 'Ngược chiều (đó là bóng đèn).' }, { t: 'Năng lượng hoá học → năng lượng điện', phanHoi: 'Đó là pin hoá học (pin con thỏ).' }, { t: 'Động năng → năng lượng điện', phanHoi: 'Đó là máy phát điện gió.' }], goiY: ['Nhận vào ánh nắng.'], viSaoDung: 'Ánh sáng → điện.', loiGiai: '<b>Ánh sáng → điện</b>.', giangLai: 'Nhận vào gì, tạo ra gì.', nguon: N6K('Bài 48 (SGV tr. 202)'), kiemTra: K6() }
      },
      {
        id: 'VL6B-05', muc: 'nang-cao', liDoMuc: 'So sánh hai thiết bị: tính hai lượng hao phí rồi lập tỉ số.', loai: 'so',
        de: 'Đèn LED và đèn sợi đốt đều nhận 50 J năng lượng điện. Đèn LED tạo ra 40 J năng lượng ánh sáng, đèn sợi đốt chỉ tạo ra 5 J. Năng lượng hao phí của đèn sợi đốt <b>gấp bao nhiêu lần</b> của đèn LED?', dapAn: 4.5, soLieu: GIA_DINH,
        loi: [{ gt: 8, nhan: 'So sánh nhầm đại lượng', phanHoi: '8 = 40 : 5 là tỉ số năng lượng <b>có ích</b>. Đề hỏi về năng lượng <b>hao phí</b>.' }, { gt: '2/9', saiSo: 0.001, nhan: 'Đảo tỉ số', phanHoi: 'Đề hỏi hao phí của đèn sợi đốt gấp mấy lần đèn LED: lấy hao phí sợi đốt chia hao phí LED.' }, { gt: 45, nhan: 'Thiếu bước', phanHoi: '45 J là hao phí của đèn sợi đốt. Còn so với đèn LED.' }],
        buoc: { hoi: 'Năng lượng hao phí của đèn LED là bao nhiêu jun?', dapAn: 10, dung: 'Đúng: 50 − 40 = 10 J. Đèn sợi đốt: 50 − 5 = 45 J.', sai: '50 − 40.' },
        goiY: ['Tính hao phí từng đèn.', 'Chia hao phí sợi đốt cho hao phí LED.'], viSaoDung: '45 : 10 = 4,5.', loiGiai: 'LED: 50 − 40 = 10 J. Sợi đốt: 50 − 5 = 45 J. 45 : 10 = <b>4,5</b> lần.<br>→ Dùng đèn LED tiết kiệm năng lượng hơn.',
        giangLai: 'Lập bảng hai cột (LED | sợi đốt), ba hàng (cung cấp | có ích | hao phí). Điền rồi mới so sánh.', tienBo: 'Em đã so sánh hai thiết bị bằng số liệu.',
        nguon: N6K('Bài 49 "Năng lượng hao phí" (SGV tr. 206); Bài 51 "Tiết kiệm năng lượng" (SGV tr. 212)'), kiemTra: K6(),
        tuongTu: { id: 'VL6B-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Động cơ A và B đều nhận 100 J. A tạo ra 80 J có ích, B tạo ra 60 J có ích. Hao phí của B gấp bao nhiêu lần hao phí của A?', dapAn: 2, soLieu: GIA_DINH, loi: [{ gt: 0.75, nhan: 'So sánh nhầm đại lượng', phanHoi: 'Đó là tỉ số phần có ích.' }, { gt: 0.5, nhan: 'Đảo tỉ số', phanHoi: 'Lấy B chia A.' }], buoc: { hoi: 'Hao phí của A?', dapAn: 20, dung: 'Đúng.', sai: '100 − 80.' }, goiY: ['40 : 20.'], viSaoDung: '2.', loiGiai: '<b>2</b> lần.', giangLai: 'Lập bảng.', nguon: N6K('Bài 49 (SGV tr. 206)'), kiemTra: K6() }
      },
      {
        id: 'VL6B-06', muc: 'nang-cao', liDoMuc: 'Đánh giá nhiều hành động, cần hiểu bản chất tiết kiệm năng lượng.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các việc làm giúp <b>tiết kiệm năng lượng</b>.',
        phuongAn: [{ t: 'Tắt đèn, quạt khi ra khỏi phòng.', dung: true }, { t: 'Thay bóng đèn sợi đốt bằng đèn LED.', dung: true }, { t: 'Mở cửa tủ lạnh thật lâu để chọn đồ ăn.', phanHoi: 'Hơi lạnh thoát ra, tủ lạnh phải chạy nhiều hơn → tốn điện.' }, { t: 'Đi xe đạp hoặc đi bộ khi đến nơi gần.', dung: true }, { t: 'Để điều hoà ở 18 °C suốt ngày.', phanHoi: 'Nhiệt độ quá thấp làm máy chạy liên tục, tốn điện.' }],
        goiY: ['Việc nào làm thiết bị chạy ít hơn hoặc hiệu quả hơn?'], viSaoDung: 'Ý 1, 2, 4 giảm năng lượng tiêu thụ.', loiGiai: 'Ý 1, 2, 4 đúng.', giangLai: 'Ba cách tiết kiệm: (1) không dùng khi không cần; (2) dùng thiết bị ít hao phí; (3) thay bằng sức người khi có thể.', tienBo: 'Em đã chọn đúng các việc tiết kiệm năng lượng.',
        nguon: N6K('Bài 51 "Tiết kiệm năng lượng" (SGV tr. 212)'), kiemTra: K6(),
        tuongTu: { id: 'VL6B-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các việc làm <b>gây lãng phí</b> năng lượng.', phuongAn: [{ t: 'Để tivi bật khi không ai xem.', dung: true }, { t: 'Rút sạc điện thoại khi pin đã đầy.', phanHoi: 'Đó là tiết kiệm.' }, { t: 'Bật đèn vào ban ngày dù phòng đủ sáng.', dung: true }, { t: 'Phơi quần áo dưới nắng thay vì dùng máy sấy.', phanHoi: 'Tiết kiệm.' }], goiY: ['Thiết bị chạy mà không cần thiết?'], viSaoDung: 'Ý 1, 3.', loiGiai: 'Ý 1 và 3.', giangLai: 'Không dùng khi không cần.', nguon: N6K('Bài 51 (SGV tr. 212)'), kiemTra: K6() }
      }
    ]
  };

  const hh6TheChat = {
    id: 'hh6-the-chat', lop: 6, mon: 'khtn', phanMon: 'Hóa học', ten: 'Các thể của chất và sự chuyển thể',
    sgk: 'SGV KHTN 6 — Chương II, Bài 9–10, SGV tr. 44–60', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Đo nhiệt độ (Chương I)'],
    yeuCauCanDat: ['Nêu được đặc điểm cơ bản ba thể rắn, lỏng, khí.', 'Phân biệt tính chất vật lí và tính chất hoá học.', 'Gọi tên và giải thích các quá trình nóng chảy, đông đặc, bay hơi, ngưng tụ, sôi.'],
    bai: {
      mucTieu: ['so sánh hình dạng, thể tích, khả năng nén của ba thể;', 'gọi đúng tên quá trình chuyển thể;', 'phân biệt tính chất vật lí, hoá học;', 'suy ra thể của chất từ nhiệt độ nóng chảy và nhiệt độ sôi.'],
      khoiDong: { hoi: 'Viên nước đá để ngoài trời một lúc thì thế nào? Nếu đun tiếp nước đó thì sao?', goiY: 'Nước đá tan thành nước lỏng (nóng chảy); đun tiếp nước bay hơi, sôi thành hơi nước.' },
      trongTam: [
        '<b>Thể rắn</b>: có hình dạng và thể tích xác định, rất khó nén. <b>Thể lỏng</b>: có thể tích xác định nhưng hình dạng theo vật chứa, khó nén. <b>Thể khí</b>: không có hình dạng, thể tích xác định, dễ nén.',
        '<b>Tính chất vật lí</b>: thể, màu, mùi, vị, tính tan, nhiệt độ nóng chảy, nhiệt độ sôi… (không tạo chất mới). <b>Tính chất hoá học</b>: khả năng bị biến đổi thành chất khác (cháy, gỉ, bị phân huỷ).',
        '<b>Nóng chảy</b>: rắn → lỏng. <b>Đông đặc</b>: lỏng → rắn.',
        '<b>Bay hơi</b>: lỏng → hơi (xảy ra ở bề mặt chất lỏng, ở mọi nhiệt độ). <b>Ngưng tụ</b>: hơi → lỏng. <b>Sôi</b>: bay hơi xảy ra cả trong lòng chất lỏng, ở nhiệt độ sôi.',
        'Dưới nhiệt độ nóng chảy: thể rắn. Giữa nhiệt độ nóng chảy và nhiệt độ sôi: thể lỏng. Trên nhiệt độ sôi: thể khí (hơi).'
      ],
      viDu: { de: 'Vì sao giọt nước xuất hiện ở mặt dưới nắp nồi canh đang đun?', loiGiai: 'Hơi nước bốc lên gặp nắp nồi nguội hơn thì <b>ngưng tụ</b> thành giọt nước.' },
      nguon: N6K('Chương II "Chất quanh ta", Bài 9 "Sự đa dạng của chất" (SGV tr. 44) và Bài 10 "Các thể của chất và sự chuyển thể" (SGV tr. 50)'),
      hoiDap: [
        { tu: ['nong chay', 'dong dac'], tl: 'Nóng chảy: rắn → lỏng. Đông đặc: lỏng → rắn (ngược nhau).' },
        { tu: ['bay hoi', 'ngung tu', 'soi'], tl: 'Bay hơi: lỏng → hơi ở bề mặt. Ngưng tụ: hơi → lỏng. Sôi: bay hơi cả trong lòng chất lỏng.' },
        { tu: ['tinh chat vat li', 'tinh chat hoa hoc', 'vat li', 'hoa hoc'], tl: 'Có tạo ra chất mới không? Có → tính chất hoá học; không → tính chất vật lí.' },
        { tu: ['the ran', 'the long', 'the khi'], tl: 'Rắn: giữ hình dạng. Lỏng: chảy, theo hình vật chứa. Khí: lan ra mọi nơi, dễ nén.' }
      ]
    },
    cauHoi: [
      {
        id: 'HH6A-01', muc: 'co-ban', liDoMuc: 'Nhận biết đặc điểm thể rắn.', loai: 'chon1', de: 'Thể nào của chất có <b>cả hình dạng và thể tích xác định</b>?',
        phuongAn: [{ t: 'Thể rắn', dung: true }, { t: 'Thể lỏng', phanHoi: 'Chất lỏng có thể tích xác định nhưng hình dạng theo vật chứa.' }, { t: 'Thể khí', phanHoi: 'Chất khí không có hình dạng và thể tích xác định.' }, { t: 'Cả thể lỏng và thể khí', phanHoi: 'Cả hai đều không có hình dạng xác định.' }],
        goiY: ['Rót sang cốc khác, chất nào vẫn giữ nguyên hình?'], viSaoDung: 'Chất rắn giữ hình dạng và thể tích.', loiGiai: '<b>Thể rắn</b>.', giangLai: 'Viên bi bỏ vào cốc nào cũng tròn; nước đổ vào cốc nào cũng mang hình cốc đó.', tienBo: 'Em đã nhớ đặc điểm thể rắn.',
        nguon: N6K('Bài 10 "Các thể của chất và sự chuyển thể" (SGV tr. 50)'), kiemTra: K6(),
        tuongTu: { id: 'HH6A-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Thể nào của chất <b>dễ bị nén</b> nhất?', phuongAn: [{ t: 'Thể khí', dung: true }, { t: 'Thể lỏng', phanHoi: 'Khó nén.' }, { t: 'Thể rắn', phanHoi: 'Rất khó nén.' }, { t: 'Ba thể như nhau', phanHoi: 'Không đúng.' }], goiY: ['Bơm xe đạp nén gì?'], viSaoDung: 'Khí dễ nén.', loiGiai: '<b>Thể khí</b>.', giangLai: 'Bịt đầu bơm tiêm có không khí, ấn được pít-tông xuống.', nguon: N6K('Bài 10 (SGV tr. 50)'), kiemTra: K6() }
      },
      {
        id: 'HH6A-02', muc: 'co-ban', liDoMuc: 'Gọi tên quá trình chuyển thể.', loai: 'chon1', de: 'Quá trình chất chuyển từ <b>thể lỏng sang thể rắn</b> gọi là gì?',
        phuongAn: [{ t: 'Đông đặc', dung: true }, { t: 'Nóng chảy', phanHoi: 'Nóng chảy là rắn → lỏng (ngược lại).' }, { t: 'Bay hơi', phanHoi: 'Bay hơi là lỏng → hơi.' }, { t: 'Ngưng tụ', phanHoi: 'Ngưng tụ là hơi → lỏng.' }],
        goiY: ['Nước trong khay đá tủ lạnh.'], viSaoDung: 'Lỏng → rắn là đông đặc.', loiGiai: '<b>Đông đặc</b>.', giangLai: '"Đông" như nước đông thành đá; "nóng chảy" như đá chảy ra thành nước.', tienBo: 'Em đã gọi đúng tên quá trình.',
        nguon: N6K('Bài 10 (SGV tr. 50)'), kiemTra: K6(),
        tuongTu: { id: 'HH6A-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Hơi nước gặp lạnh tạo thành giọt nước. Đó là quá trình gì?', phuongAn: [{ t: 'Ngưng tụ', dung: true }, { t: 'Bay hơi', phanHoi: 'Ngược lại.' }, { t: 'Đông đặc', phanHoi: 'Lỏng → rắn.' }, { t: 'Nóng chảy', phanHoi: 'Rắn → lỏng.' }], goiY: ['Hơi → lỏng.'], viSaoDung: 'Ngưng tụ.', loiGiai: '<b>Ngưng tụ</b>.', giangLai: 'Giọt nước trên nắp nồi.', nguon: N6K('Bài 10 (SGV tr. 50)'), kiemTra: K6() }
      },
      {
        id: 'HH6A-03', muc: 'van-dung', liDoMuc: 'Nhận ra quá trình chuyển thể trong hiện tượng đời sống, tự viết tên.', loai: 'chu', boDau: true,
        de: 'Quần áo ướt phơi ngoài nắng một lúc thì khô. Nước trong quần áo đã trải qua quá trình chuyển thể nào? <span class="note">Gõ tên quá trình, có thể gõ không dấu.</span>',
        chapNhan: ['bay hơi', 'sự bay hơi', 'quá trình bay hơi'],
        loi: [{ mau: '\\bsoi\\b', danhDau: 'sôi', nhan: 'Nhầm với sự sôi', phanHoi: 'Nước không sôi ở nhiệt độ ngoài trời. Nước chỉ chuyển thành hơi ở <b>bề mặt</b> — đó là sự bay hơi.' }, { mau: 'ngung tu', danhDau: '*', nhan: 'Ngược chiều', phanHoi: 'Ngưng tụ là hơi → lỏng. Ở đây nước lỏng biến thành hơi.' }, { mau: 'nong chay|dong dac', danhDau: '*', nhan: 'Nhầm quá trình', phanHoi: 'Không có thể rắn nào ở đây. Nước lỏng → hơi nước.' }],
        goiY: ['Nước đi đâu khi quần áo khô?'], viSaoDung: 'Nước lỏng chuyển thành hơi ở bề mặt vải.', loiGiai: '<b>Sự bay hơi</b>.', giangLai: 'Nước không biến mất — nó thành hơi nước bay vào không khí. Nắng và gió làm bay hơi nhanh hơn.', tienBo: 'Em đã gọi đúng tên quá trình trong đời sống.',
        nguon: N6K('Bài 10 (SGV tr. 50)'), kiemTra: K6('Nhóm biên soạn kiểm tra các cách viết đúng (có dấu/không dấu); chạy kiểm thử tự động ngày ' + NGAY_SOAN + '.'),
        tuongTu: { id: 'HH6A-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', boDau: true, de: 'Khi đốt nến, phần sáp gần bấc chảy thành chất lỏng. Đó là quá trình chuyển thể gì? <span class="note">Có thể gõ không dấu.</span>', chapNhan: ['nóng chảy', 'sự nóng chảy', 'quá trình nóng chảy'], loi: [{ mau: 'dong dac', danhDau: '*', nhan: 'Ngược chiều', phanHoi: 'Đông đặc là lỏng → rắn.' }, { mau: 'bay hoi|\\bsoi\\b', danhDau: '*', nhan: 'Nhầm quá trình', phanHoi: 'Sáp rắn → sáp lỏng.' }], goiY: ['Rắn → lỏng.'], viSaoDung: 'Nóng chảy.', loiGiai: '<b>Sự nóng chảy</b>.', giangLai: 'Sáp rắn gặp nóng thì chảy.', nguon: N6K('Bài 10 (SGV tr. 50)'), kiemTra: K6() }
      },
      {
        id: 'HH6A-04', muc: 'van-dung', liDoMuc: 'Phân biệt tính chất vật lí, hoá học qua nhiều phát biểu.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các <b>tính chất vật lí</b> của nước.',
        phuongAn: [{ t: 'Nước là chất lỏng không màu.', dung: true }, { t: 'Nước sôi ở 100 °C (ở áp suất thường).', dung: true }, { t: 'Nước hoà tan được đường, muối.', dung: true }, { t: 'Nước bị phân huỷ thành khí hydrogen và khí oxygen khi có dòng điện.', phanHoi: 'Tạo ra chất mới → tính chất hoá học.' }],
        goiY: ['Có tạo ra chất mới không?'], viSaoDung: 'Màu, nhiệt độ sôi, tính tan là tính chất vật lí.', loiGiai: 'Ý 1, 2, 3 là tính chất vật lí; ý 4 là tính chất hoá học.', giangLai: 'Nước đường cô cạn vẫn lấy lại được đường và nước — không có chất mới. Còn phân huỷ nước thì tạo ra hai khí hoàn toàn khác.', tienBo: 'Em đã dùng tiêu chí "có chất mới không".',
        nguon: N6K('Bài 9 "Sự đa dạng của chất" (SGV tr. 44)'), kiemTra: K6(),
        tuongTu: { id: 'HH6A-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc, chọn tính chất hoá học.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các hiện tượng thể hiện <b>tính chất hoá học</b>.', phuongAn: [{ t: 'Đinh sắt để lâu ngoài trời bị gỉ.', dung: true }, { t: 'Nến cháy tạo ra khí carbon dioxide và hơi nước.', dung: true }, { t: 'Đun đường quá lửa, đường chuyển màu đen và có mùi khét.', dung: true }, { t: 'Nước đá tan thành nước lỏng.', phanHoi: 'Chỉ đổi thể → vật lí.' }], goiY: ['Có chất mới?'], viSaoDung: 'Gỉ, cháy, đường cháy đen tạo chất mới.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Chất mới → hoá học.', nguon: N6K('Bài 9 (SGV tr. 44)'), kiemTra: K6() }
      },
      {
        id: 'HH6A-05', muc: 'nang-cao', liDoMuc: 'Suy luận thể của chất ở nhiều nhiệt độ từ nhiệt độ nóng chảy và sôi.', loai: 'chonNhieu',
        de: 'Chất X có nhiệt độ nóng chảy là −10 °C và nhiệt độ sôi là 120 °C (số liệu giả định). <b>Chọn TẤT CẢ</b> các khẳng định đúng.',
        phuongAn: [{ t: 'Ở −20 °C, X ở thể rắn.', dung: true }, { t: 'Ở 50 °C, X ở thể lỏng.', dung: true }, { t: 'Ở 150 °C, X ở thể khí (hơi).', dung: true }, { t: 'Ở 100 °C, X đang sôi.', phanHoi: 'X sôi ở 120 °C. Ở 100 °C, X vẫn ở thể lỏng (có thể bay hơi ở bề mặt).' }],
        goiY: ['Vẽ trục nhiệt độ, đánh dấu −10 °C và 120 °C.'], viSaoDung: 'Dưới −10: rắn; từ −10 đến 120: lỏng; trên 120: khí.', loiGiai: 'Ý 1, 2, 3 đúng; ý 4 sai vì X sôi ở 120 °C.',
        giangLai: 'Chia trục nhiệt độ thành 3 vùng bởi hai mốc: vùng lạnh (rắn) | vùng giữa (lỏng) | vùng nóng (khí). Đặt từng nhiệt độ vào đúng vùng.', tienBo: 'Em đã suy luận thể của chất từ hai mốc nhiệt độ.',
        nguon: Object.assign(N6K('Bài 10 "Các thể của chất và sự chuyển thể" (SGV tr. 50)'), { soLieu: GIA_DINH }), kiemTra: K6(),
        tuongTu: { id: 'HH6A-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: 'Chất Y nóng chảy ở 40 °C, sôi ở 250 °C (giả định). <b>Chọn TẤT CẢ</b> các khẳng định đúng.', phuongAn: [{ t: 'Ở 25 °C, Y ở thể rắn.', dung: true }, { t: 'Ở 100 °C, Y ở thể lỏng.', dung: true }, { t: 'Ở 300 °C, Y ở thể khí.', dung: true }, { t: 'Ở 30 °C, Y ở thể lỏng.', phanHoi: '30 °C &lt; 40 °C → vẫn rắn.' }], goiY: ['Ba vùng.'], viSaoDung: 'Ý 1, 2, 3.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Chia ba vùng.', nguon: Object.assign(N6K('Bài 10 (SGV tr. 50)'), { soLieu: GIA_DINH }), kiemTra: K6() }
      },
      {
        id: 'HH6A-06', muc: 'nang-cao', liDoMuc: 'Giải thích hiện tượng gồm hai quá trình chuyển thể ngược nhau; câu mở.', loai: 'mo',
        de: 'Sáng mùa đông, em hà hơi vào mặt kính cửa sổ lạnh thì thấy kính bị mờ; một lúc sau kính lại trong. Hãy giải thích bằng sự chuyển thể. Viết 2–4 câu.',
        tieuChi: [
          { t: 'Nêu hơi nước trong hơi thở gặp kính lạnh.', tuDong: { tuKhoa: ['lanh'] } },
          { t: 'Gọi đúng quá trình làm kính mờ: ngưng tụ.', tuDong: { tuKhoa: ['ngung tu'] } },
          { t: 'Gọi đúng quá trình làm kính trong lại: bay hơi.', tuDong: { tuKhoa: ['bay hoi'] } },
          { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }
        ],
        baiThamKhao: 'Hơi thở của em có nhiều hơi nước. Khi gặp mặt kính lạnh, hơi nước ngưng tụ thành những giọt nước rất nhỏ làm kính bị mờ. Một lúc sau, các giọt nước nhỏ này bay hơi hết nên kính trong trở lại.',
        giupViet: 'Dàn ý: (1) Hơi thở có … (2) Gặp kính lạnh, hơi nước … (ngưng tụ) → kính mờ. (3) Sau đó các giọt nước … (bay hơi) → kính trong.',
        goiY: ['Có hai quá trình ngược nhau.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Kính mờ = có nước lỏng li ti (hơi → lỏng). Kính trong lại = nước li ti biến mất (lỏng → hơi).', tienBo: 'Em đã giải thích được hai quá trình chuyển thể.',
        nguon: N6K('Bài 10 (SGV tr. 50)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ theo từ khoá, học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'HH6A-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Lấy cốc nước đá từ tủ lạnh ra, một lúc sau mặt ngoài cốc có nhiều giọt nước. Những giọt nước đó từ đâu ra? Viết 2–4 câu.', tieuChi: [{ t: 'Nêu nước đến từ hơi nước trong không khí.', tuDong: { tuKhoa: ['khong khi'] } }, { t: 'Nêu hơi nước gặp thành cốc lạnh.', tuDong: { tuKhoa: ['lanh'] } }, { t: 'Gọi đúng quá trình ngưng tụ.', tuDong: { tuKhoa: ['ngung tu'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Trong không khí luôn có hơi nước. Khi gặp thành cốc lạnh, hơi nước ngưng tụ thành giọt nước bám ở mặt ngoài cốc. Nước không phải thấm từ trong cốc ra.', giupViet: 'Không khí có … → gặp cốc lạnh … → ngưng tụ.', goiY: ['Nước có thấm qua thuỷ tinh không?'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Hơi nước vô hình trong không khí.', nguon: N6K('Bài 10 (SGV tr. 50)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ theo từ khoá.') }
      }
    ]
  };

  const hh6Oxygen = {
    id: 'hh6-oxygen-khong-khi', lop: 6, mon: 'khtn', phanMon: 'Hóa học', ten: 'Oxygen và không khí',
    sgk: 'SGV KHTN 6 — Chương II, Bài 11, SGV tr. 61–70', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Các thể của chất (Bài 10)', 'Tỉ số phần trăm (Toán 6)'],
    yeuCauCanDat: ['Nêu được một số tính chất của oxygen; vai trò của oxygen với sự sống và sự cháy.', 'Nêu được thành phần của không khí (theo thể tích).', 'Nêu được nguồn gây ô nhiễm không khí và biện pháp bảo vệ môi trường không khí.'],
    bai: {
      mucTieu: ['nêu tính chất vật lí của oxygen;', 'nêu vai trò của oxygen;', 'tính thể tích oxygen trong một lượng không khí;', 'đề xuất biện pháp bảo vệ không khí.'],
      khoiDong: { hoi: 'Úp một cốc thuỷ tinh lên cây nến đang cháy. Điều gì xảy ra? Vì sao?', goiY: 'Nến cháy thêm một lúc rồi tắt, vì oxygen trong cốc bị dùng hết.' },
      trongTam: [
        'Ở điều kiện thường, <b>oxygen</b> là chất khí không màu, không mùi, không vị, ít tan trong nước.',
        'Oxygen <b>duy trì sự sống</b> (hô hấp) và <b>duy trì sự cháy</b>.',
        'Thành phần <b>không khí</b> theo thể tích: khoảng <b>78% nitrogen</b>, <b>21% oxygen</b>, khoảng 1% là các khí khác (carbon dioxide, hơi nước, khí hiếm…).',
        'Ô nhiễm không khí do khí thải xe cộ, nhà máy, đốt rác, cháy rừng… Bảo vệ: trồng cây xanh, dùng phương tiện công cộng, năng lượng sạch, không đốt rác bừa bãi.'
      ],
      viDu: { de: 'Một phòng chứa 100 m³ không khí. Trong đó có khoảng bao nhiêu m³ oxygen?', loiGiai: '21% của 100 m³ = <b>21 m³</b>.' },
      nguon: N6K('Chương II "Chất quanh ta", Bài 11 "Oxygen. Không khí" (SGV tr. 61)'),
      hoiDap: [
        { tu: ['thanh phan', 'phan tram', 'nitrogen'], tl: 'Không khí: khoảng 78% nitrogen, 21% oxygen, 1% khí khác (theo thể tích).' },
        { tu: ['vai tro', 'chay', 'ho hap'], tl: 'Oxygen duy trì sự hô hấp và sự cháy.' },
        { tu: ['o nhiem', 'bao ve'], tl: 'Giảm khí thải (xe, nhà máy, đốt rác) và trồng nhiều cây xanh.' }
      ]
    },
    cauHoi: [
      {
        id: 'HH6B-01', muc: 'co-ban', liDoMuc: 'Nhớ thành phần không khí.', loai: 'chon1', de: 'Oxygen chiếm khoảng bao nhiêu phần trăm thể tích không khí?',
        phuongAn: [{ t: '21%', dung: true }, { t: '78%', phanHoi: '78% là của nitrogen.' }, { t: '1%', phanHoi: '1% là các khí khác.' }, { t: '50%', phanHoi: 'Không đúng.' }],
        goiY: ['Nitrogen chiếm nhiều nhất.'], viSaoDung: 'Oxygen khoảng 21%.', loiGiai: '<b>21%</b>.', giangLai: 'Nhớ bộ ba 78 – 21 – 1 (nitrogen – oxygen – khí khác).', tienBo: 'Em đã nhớ thành phần không khí.',
        nguon: N6K('Bài 11 "Oxygen. Không khí" (SGV tr. 61)'), kiemTra: K6(),
        tuongTu: { id: 'HH6B-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Khí nào chiếm thể tích nhiều nhất trong không khí?', phuongAn: [{ t: 'Nitrogen', dung: true }, { t: 'Oxygen', phanHoi: 'Khoảng 21%.' }, { t: 'Carbon dioxide', phanHoi: 'Rất ít.' }, { t: 'Hơi nước', phanHoi: 'Rất ít.' }], goiY: ['78%.'], viSaoDung: 'Nitrogen 78%.', loiGiai: '<b>Nitrogen</b>.', giangLai: '78 – 21 – 1.', nguon: N6K('Bài 11 (SGV tr. 61)'), kiemTra: K6() }
      },
      {
        id: 'HH6B-02', muc: 'co-ban', liDoMuc: 'Nhận biết vai trò của oxygen.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các vai trò của oxygen.',
        phuongAn: [{ t: 'Duy trì sự hô hấp của người và động vật.', dung: true }, { t: 'Duy trì sự cháy.', dung: true }, { t: 'Dùng để dập tắt đám cháy.', phanHoi: 'Ngược lại: oxygen làm lửa cháy mạnh hơn.' }, { t: 'Là chất khí cây xanh lấy vào để quang hợp.', phanHoi: 'Cây lấy carbon dioxide để quang hợp và thải ra oxygen.' }],
        goiY: ['Không có oxygen thì con người và ngọn lửa thế nào?'], viSaoDung: 'Oxygen duy trì hô hấp và sự cháy.', loiGiai: 'Ý 1 và 2.', giangLai: 'Muốn dập lửa, người ta làm ngọn lửa "thiếu oxygen" (trùm chăn ướt, phủ cát).', tienBo: 'Em đã nêu đúng vai trò của oxygen.',
        nguon: N6K('Bài 11 (SGV tr. 61)'), kiemTra: K6(),
        tuongTu: { id: 'HH6B-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, tính chất vật lí.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các tính chất vật lí của khí oxygen ở điều kiện thường.', phuongAn: [{ t: 'Không màu', dung: true }, { t: 'Không mùi', dung: true }, { t: 'Ít tan trong nước', dung: true }, { t: 'Có màu xanh nhạt', phanHoi: 'Khí oxygen không màu.' }, { t: 'Tan rất nhiều trong nước', phanHoi: 'Ít tan.' }], goiY: ['Không khí ta thở có màu không?'], viSaoDung: 'Ý 1, 2, 3.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Cá thở bằng lượng oxygen ít ỏi hoà tan trong nước.', nguon: N6K('Bài 11 (SGV tr. 61)'), kiemTra: K6() }
      },
      {
        id: 'HH6B-03', muc: 'van-dung', liDoMuc: 'Vận dụng tỉ lệ phần trăm thành phần không khí để tính thể tích.', loai: 'so', de: 'Một phòng học chứa khoảng 200 m³ không khí. Thể tích oxygen trong phòng khoảng bao nhiêu m³? <span class="note">Chỉ ghi số.</span>', dapAn: 42, soLieu: GIA_DINH,
        loi: [{ gt: 156, nhan: 'Nhầm khí', phanHoi: '156 m³ là thể tích nitrogen (78%).' }, { gt: 4200, nhan: 'Chưa chia 100', phanHoi: '21% = 21 : 100. Em quên chia 100.' }, { gt: 158, nhan: 'Nhầm phần cần tính', phanHoi: '158 m³ là các khí không phải oxygen.' }],
        buoc: { hoi: '1% của 200 m³ là bao nhiêu m³?', dapAn: 2, dung: 'Đúng. 21% là 21 · 2.', sai: '200 : 100.' },
        goiY: ['Oxygen ≈ 21%.'], viSaoDung: '200 · 21 : 100 = 42.', loiGiai: '200 · 21% = <b>42 m³</b>.', giangLai: 'Tìm 1% trước (chia 100) rồi nhân với 21.', tienBo: 'Em đã dùng đúng tỉ lệ oxygen.',
        nguon: N6K('Bài 11 (SGV tr. 61)'), kiemTra: K6(),
        tuongTu: { id: 'HH6B-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một căn phòng chứa 150 m³ không khí. Thể tích oxygen khoảng bao nhiêu m³?', dapAn: 31.5, soLieu: GIA_DINH, loi: [{ gt: 117, nhan: 'Nhầm khí', phanHoi: 'Đó là nitrogen.' }, { gt: 3150, nhan: 'Chưa chia 100', phanHoi: 'Chia 100.' }], buoc: { hoi: '1% của 150?', dapAn: 1.5, dung: 'Đúng.', sai: '150 : 100.' }, goiY: ['21 · 1,5.'], viSaoDung: '31,5.', loiGiai: '<b>31,5 m³</b>.', giangLai: 'Tìm 1% trước.', nguon: N6K('Bài 11 (SGV tr. 61)'), kiemTra: K6() }
      },
      {
        id: 'HH6B-04', muc: 'van-dung', liDoMuc: 'Giải thích thí nghiệm bằng vai trò duy trì sự cháy.', loai: 'chon1', de: 'Úp một cốc thuỷ tinh lên cây nến đang cháy, sau một lúc nến tắt. Nguyên nhân chính là:',
        phuongAn: [{ t: 'Oxygen trong cốc đã bị dùng hết.', dung: true }, { t: 'Cốc thuỷ tinh làm nến bị lạnh.', phanHoi: 'Cốc úp lên còn nóng lên vì lửa.' }, { t: 'Nitrogen trong cốc tự sinh ra thêm.', phanHoi: 'Nitrogen không tự sinh ra.' }, { t: 'Hơi nước trong cốc dập tắt nến.', phanHoi: 'Lượng hơi nước rất ít; nguyên nhân chính là thiếu oxygen.' }],
        goiY: ['Sự cháy cần khí gì?'], viSaoDung: 'Hết oxygen, nến không cháy được.', loiGiai: '<b>Oxygen trong cốc đã hết</b>.', giangLai: 'Cốc to hơn thì nến cháy lâu hơn — vì có nhiều oxygen hơn.', tienBo: 'Em đã giải thích thí nghiệm.',
        nguon: N6K('Bài 11 (SGV tr. 61)'), kiemTra: K6(),
        tuongTu: { id: 'HH6B-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Đưa que đóm còn tàn đỏ vào lọ chứa đầy khí oxygen, que đóm bùng cháy. Vì sao?', phuongAn: [{ t: 'Oxygen duy trì sự cháy.', dung: true }, { t: 'Oxygen là nhiên liệu cháy được.', phanHoi: 'Oxygen duy trì sự cháy, que đóm mới là vật cháy.' }, { t: 'Lọ thuỷ tinh nóng.', phanHoi: 'Không phải.' }, { t: 'Oxygen có màu.', phanHoi: 'Không màu.' }], goiY: ['Vai trò của oxygen.'], viSaoDung: 'Duy trì sự cháy.', loiGiai: '<b>Oxygen duy trì sự cháy</b>.', giangLai: 'Nhiều oxygen → cháy mạnh.', nguon: N6K('Bài 11 (SGV tr. 61)'), kiemTra: K6() }
      },
      {
        id: 'HH6B-05', muc: 'nang-cao', liDoMuc: 'Đánh giá nhiều biện pháp thực tế bảo vệ không khí.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các biện pháp góp phần <b>bảo vệ môi trường không khí</b>.',
        phuongAn: [{ t: 'Trồng nhiều cây xanh.', dung: true }, { t: 'Đi xe buýt, xe đạp thay cho xe máy khi có thể.', dung: true }, { t: 'Đốt rơm rạ ngoài đồng sau mùa gặt.', phanHoi: 'Đốt rơm rạ tạo khói bụi, gây ô nhiễm.' }, { t: 'Dùng năng lượng mặt trời thay than đá.', dung: true }, { t: 'Xả khói nhà máy chưa qua xử lý.', phanHoi: 'Gây ô nhiễm.' }],
        goiY: ['Việc nào làm giảm khói bụi, khí thải?'], viSaoDung: 'Ý 1, 2, 4 giảm khí thải hoặc làm sạch không khí.', loiGiai: 'Ý 1, 2, 4.', giangLai: 'Hỏi: việc này làm không khí có thêm khói/khí độc không? Có → gây ô nhiễm.', tienBo: 'Em đã đánh giá đúng các biện pháp.',
        nguon: N6K('Bài 11 (SGV tr. 61)'), kiemTra: K6(),
        tuongTu: { id: 'HH6B-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc, nguồn gây ô nhiễm.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các nguồn <b>gây ô nhiễm</b> không khí.', phuongAn: [{ t: 'Khí thải xe máy, ô tô.', dung: true }, { t: 'Cháy rừng.', dung: true }, { t: 'Đốt rác thải sinh hoạt.', dung: true }, { t: 'Trồng cây xanh ven đường.', phanHoi: 'Làm sạch không khí.' }], goiY: ['Có tạo khói không?'], viSaoDung: 'Ý 1, 2, 3.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Khói, khí thải → ô nhiễm.', nguon: N6K('Bài 11 (SGV tr. 61)'), kiemTra: K6() }
      },
      {
        id: 'HH6B-06', muc: 'nang-cao', liDoMuc: 'Nhiều bước: tính oxygen trong 1 giờ rồi trong nhiều giờ.', loai: 'so',
        de: 'Giả sử mỗi giờ một bạn học sinh hít vào khoảng 500 lít không khí. Trong 4 giờ, bạn đó hít vào khoảng bao nhiêu lít <b>oxygen</b>? (Oxygen chiếm khoảng 21% thể tích không khí.)', dapAn: 420, soLieu: GIA_DINH,
        loi: [{ gt: 2000, nhan: 'Chưa trả lời đúng câu hỏi', phanHoi: '2000 lít là lượng không khí. Đề hỏi lượng oxygen.' }, { gt: 105, nhan: 'Thiếu bước', phanHoi: '105 lít là oxygen trong <b>1 giờ</b>. Đề hỏi 4 giờ.' }, { gt: 1560, nhan: 'Nhầm khí', phanHoi: 'Em dùng 78% (nitrogen).' }],
        buoc: { hoi: 'Trong 1 giờ, bạn đó hít vào bao nhiêu lít oxygen?', dapAn: 105, dung: 'Đúng: 21% · 500 = 105. Nhân với 4.', sai: '500 · 21 : 100.' },
        goiY: ['Tính lượng không khí hoặc oxygen trong 1 giờ trước.'], viSaoDung: '500 · 4 · 21% = 420.', loiGiai: 'Không khí trong 4 giờ: 500 · 4 = 2000 L. Oxygen: 2000 · 21% = <b>420 L</b>.', giangLai: 'Có hai bước nhân: theo số giờ và theo phần trăm. Thứ tự nào cũng được, nhưng phải đủ cả hai.', tienBo: 'Em đã làm đủ các bước.',
        nguon: N6K('Bài 11 (SGV tr. 61)'), kiemTra: K6(),
        tuongTu: { id: 'HH6B-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Giả sử mỗi giờ một người hít vào khoảng 600 lít không khí. Trong 3 giờ người đó hít vào khoảng bao nhiêu lít oxygen (21%)?', dapAn: 378, soLieu: GIA_DINH, loi: [{ gt: 1800, nhan: 'Chưa trả lời đúng câu hỏi', phanHoi: 'Đó là không khí.' }, { gt: 126, nhan: 'Thiếu bước', phanHoi: 'Đó là 1 giờ.' }], buoc: { hoi: 'Oxygen trong 1 giờ?', dapAn: 126, dung: 'Đúng.', sai: '600 · 21%.' }, goiY: ['126 · 3.'], viSaoDung: '378.', loiGiai: '<b>378 L</b>.', giangLai: 'Đủ hai bước nhân.', nguon: N6K('Bài 11 (SGV tr. 61)'), kiemTra: K6() }
      }
    ]
  };

  const hh6HonHop = {
    id: 'hh6-hon-hop', lop: 6, mon: 'khtn', phanMon: 'Hóa học', ten: 'Hỗn hợp và tách chất khỏi hỗn hợp',
    sgk: 'SGV KHTN 6 — Chương IV, Bài 16–17, SGV tr. 91–105', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Các thể của chất, sự bay hơi (Bài 10)'],
    yeuCauCanDat: ['Phân biệt chất tinh khiết và hỗn hợp; hỗn hợp đồng nhất và không đồng nhất.', 'Nhận biết dung dịch, huyền phù, nhũ tương; dung môi và chất tan.', 'Chọn được cách tách chất (lọc, cô cạn, chiết) dựa vào tính chất của chất.'],
    bai: {
      mucTieu: ['phân biệt chất tinh khiết, hỗn hợp;', 'gọi tên dung dịch, huyền phù, nhũ tương;', 'chọn cách tách phù hợp;', 'giải thích vì sao chọn cách tách đó.'],
      khoiDong: { hoi: 'Làm thế nào lấy lại muối từ cốc nước muối?', goiY: 'Đun cho nước bay hơi hết (cô cạn), muối còn lại.' },
      trongTam: [
        '<b>Chất tinh khiết</b> chỉ gồm một chất (nước cất, khí oxygen). <b>Hỗn hợp</b> gồm hai hay nhiều chất trộn lẫn (nước muối, không khí, sữa).',
        '<b>Hỗn hợp đồng nhất</b>: thành phần giống nhau ở mọi vị trí (nước muối). <b>Không đồng nhất</b>: nhìn thấy các thành phần khác nhau (nước cát).',
        '<b>Dung dịch</b>: hỗn hợp đồng nhất của dung môi và chất tan (nước đường). <b>Huyền phù</b>: chất rắn lơ lửng trong chất lỏng (nước phù sa). <b>Nhũ tương</b>: chất lỏng phân tán trong chất lỏng khác (dầu ăn lắc với nước).',
        'Cách tách: <b>lọc</b> — tách chất rắn không tan khỏi chất lỏng; <b>cô cạn</b> — tách chất rắn tan khỏi dung dịch (làm bay hơi dung môi); <b>chiết</b> — tách hai chất lỏng không hoà tan vào nhau.'
      ],
      viDu: { de: 'Nên dùng cách nào để tách cát ra khỏi nước?', loiGiai: 'Cát không tan trong nước → <b>lọc</b>: cát bị giữ lại trên giấy lọc.' },
      nguon: N6K('Chương IV "Hỗn hợp. Tách chất ra khỏi hỗn hợp", Bài 16–17 (SGV tr. 91–105)'),
      hoiDap: [
        { tu: ['loc'], tl: 'Lọc: tách chất rắn KHÔNG tan khỏi chất lỏng.' },
        { tu: ['co can'], tl: 'Cô cạn: làm bay hơi dung môi để lấy chất rắn ĐÃ TAN.' },
        { tu: ['chiet'], tl: 'Chiết: tách hai chất lỏng không tan vào nhau (dầu và nước).' },
        { tu: ['dung dich', 'huyen phu', 'nhu tuong'], tl: 'Dung dịch: đồng nhất. Huyền phù: rắn lơ lửng trong lỏng. Nhũ tương: lỏng phân tán trong lỏng.' }
      ]
    },
    cauHoi: [
      {
        id: 'HH6C-01', muc: 'co-ban', liDoMuc: 'Phân biệt hỗn hợp và chất tinh khiết.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các <b>hỗn hợp</b>.',
        phuongAn: [{ t: 'Nước muối', dung: true }, { t: 'Không khí', dung: true }, { t: 'Nước cất', phanHoi: 'Nước cất chỉ gồm nước → chất tinh khiết.' }, { t: 'Sữa', dung: true }, { t: 'Khí oxygen', phanHoi: 'Chỉ gồm oxygen → chất tinh khiết.' }],
        goiY: ['Có từ hai chất trở lên?'], viSaoDung: 'Nước muối, không khí, sữa có nhiều chất.', loiGiai: 'Ý 1, 2, 4.', giangLai: 'Không khí gồm nitrogen, oxygen… nên là hỗn hợp, dù ta không nhìn thấy.', tienBo: 'Em đã phân biệt đúng.',
        nguon: N6K('Bài 16 "Hỗn hợp các chất" (SGV tr. 91)'), kiemTra: K6(),
        tuongTu: { id: 'HH6C-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các <b>chất tinh khiết</b>.', phuongAn: [{ t: 'Nước cất', dung: true }, { t: 'Khí oxygen', dung: true }, { t: 'Nước biển', phanHoi: 'Có muối và nhiều chất.' }, { t: 'Nước chanh', phanHoi: 'Hỗn hợp.' }, { t: 'Không khí', phanHoi: 'Hỗn hợp nhiều khí.' }], goiY: ['Chỉ một chất.'], viSaoDung: 'Ý 1, 2.', loiGiai: 'Ý 1, 2.', giangLai: 'Một chất duy nhất.', nguon: N6K('Bài 16 (SGV tr. 91)'), kiemTra: K6() }
      },
      {
        id: 'HH6C-02', muc: 'co-ban', liDoMuc: 'Nhận biết nhũ tương.', loai: 'chon1', de: 'Cho dầu ăn vào nước rồi lắc mạnh, ta được:',
        phuongAn: [{ t: 'Nhũ tương', dung: true }, { t: 'Dung dịch', phanHoi: 'Dầu không tan trong nước nên không tạo dung dịch.' }, { t: 'Huyền phù', phanHoi: 'Huyền phù là chất <b>rắn</b> lơ lửng; dầu ăn là chất lỏng.' }, { t: 'Chất tinh khiết', phanHoi: 'Có hai chất.' }],
        goiY: ['Dầu ăn là chất lỏng hay rắn?'], viSaoDung: 'Chất lỏng phân tán trong chất lỏng khác → nhũ tương.', loiGiai: '<b>Nhũ tương</b>.', giangLai: 'Nhũ tương = "lỏng trong lỏng"; huyền phù = "rắn trong lỏng".', tienBo: 'Em đã phân biệt nhũ tương và huyền phù.',
        nguon: N6K('Bài 16 (SGV tr. 91)'), kiemTra: K6(),
        tuongTu: { id: 'HH6C-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Khuấy bột phấn vào nước, các hạt phấn lơ lửng làm nước đục. Đó là:', phuongAn: [{ t: 'Huyền phù', dung: true }, { t: 'Nhũ tương', phanHoi: 'Phấn là chất rắn.' }, { t: 'Dung dịch', phanHoi: 'Phấn không tan.' }, { t: 'Chất tinh khiết', phanHoi: 'Có hai chất.' }], goiY: ['Rắn trong lỏng.'], viSaoDung: 'Huyền phù.', loiGiai: '<b>Huyền phù</b>.', giangLai: 'Rắn trong lỏng.', nguon: N6K('Bài 16 (SGV tr. 91)'), kiemTra: K6() }
      },
      {
        id: 'HH6C-03', muc: 'van-dung', liDoMuc: 'Chọn cách tách dựa vào tính tan.', loai: 'chon1', de: 'Để lấy muối ăn từ nước muối, ta dùng cách nào?',
        phuongAn: [{ t: 'Cô cạn (làm bay hơi nước)', dung: true }, { t: 'Lọc', phanHoi: 'Muối đã tan, đi qua được giấy lọc cùng nước.' }, { t: 'Chiết', phanHoi: 'Chiết dùng cho hai chất lỏng không tan vào nhau.' }, { t: 'Dùng nam châm', phanHoi: 'Muối không bị nam châm hút.' }],
        goiY: ['Muối có tan trong nước không?'], viSaoDung: 'Muối tan → cô cạn.', loiGiai: '<b>Cô cạn</b>.', giangLai: 'Ruộng muối: nắng làm nước biển bay hơi, muối đọng lại — đó chính là cô cạn.', tienBo: 'Em đã chọn cách tách dựa vào tính tan.',
        nguon: N6K('Bài 17 "Tách chất khỏi hỗn hợp" (SGV tr. 100)'), kiemTra: K6(),
        tuongTu: { id: 'HH6C-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Để tách cát ra khỏi nước, ta dùng cách nào?', phuongAn: [{ t: 'Lọc', dung: true }, { t: 'Cô cạn', phanHoi: 'Được cát nhưng mất nước, tốn năng lượng; lọc đơn giản hơn.' }, { t: 'Chiết', phanHoi: 'Cát là chất rắn.' }, { t: 'Hoà tan thêm', phanHoi: 'Cát không tan.' }], goiY: ['Cát không tan.'], viSaoDung: 'Lọc.', loiGiai: '<b>Lọc</b>.', giangLai: 'Giấy lọc giữ hạt rắn không tan.', nguon: N6K('Bài 17 (SGV tr. 100)'), kiemTra: K6() }
      },
      {
        id: 'HH6C-04', muc: 'van-dung', liDoMuc: 'Áp dụng: khối lượng dung dịch = khối lượng chất tan + dung môi, tính ngược.', loai: 'so',
        de: 'Cô cạn 250 g nước biển thì thu được 9 g muối (số liệu giả định). Khối lượng nước đã bay hơi là bao nhiêu gam?', dapAn: 241, soLieu: GIA_DINH,
        loi: [{ gt: 259, nhan: 'Lỗi dùng công thức', phanHoi: 'Nước bay hơi = nước biển − muối còn lại (trừ, không cộng).' }, { gt: 9, nhan: 'Chưa trả lời đúng câu hỏi', phanHoi: '9 g là muối. Đề hỏi nước.' }],
        goiY: ['Nước biển = nước + muối (và chất khác).'], viSaoDung: '250 − 9 = 241 g.', loiGiai: '250 − 9 = <b>241 g</b>.', giangLai: 'Khi cô cạn, chỉ có nước đi ra ngoài; phần còn lại là muối.', tienBo: 'Em đã tính đúng khối lượng nước bay hơi.',
        nguon: N6K('Bài 17 "Tách chất khỏi hỗn hợp" (SGV tr. 100)'), kiemTra: K6(),
        tuongTu: { id: 'HH6C-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Cô cạn 180 g nước muối thu được 6 g muối (giả định). Khối lượng nước đã bay hơi là bao nhiêu gam?', dapAn: 174, soLieu: GIA_DINH, loi: [{ gt: 186, nhan: 'Lỗi dùng công thức', phanHoi: 'Trừ.' }, { gt: 6, nhan: 'Chưa trả lời đúng câu hỏi', phanHoi: 'Đó là muối.' }], goiY: ['180 − 6.'], viSaoDung: '174.', loiGiai: '<b>174 g</b>.', giangLai: 'Chỉ nước bay đi.', nguon: N6K('Bài 17 (SGV tr. 100)'), kiemTra: K6() }
      },
      {
        id: 'HH6C-05', muc: 'nang-cao', liDoMuc: 'Lập quy trình nhiều bước để tách hỗn hợp hai chất rắn.', loai: 'chonNhieu',
        de: 'Có hỗn hợp gồm muối ăn và cát. <b>Chọn TẤT CẢ</b> các bước cần làm để thu được muối ăn sạch.',
        phuongAn: [{ t: 'Hoà tan hỗn hợp vào nước.', dung: true }, { t: 'Lọc để loại bỏ cát, lấy nước lọc.', dung: true }, { t: 'Cô cạn nước lọc để thu muối.', dung: true }, { t: 'Dùng nam châm hút cát.', phanHoi: 'Cát không bị nam châm hút.' }, { t: 'Chiết lấy lớp muối.', phanHoi: 'Chiết dùng cho hai chất lỏng không tan vào nhau.' }],
        goiY: ['Chất nào tan trong nước, chất nào không?'], viSaoDung: 'Hoà tan → lọc → cô cạn.', loiGiai: 'Ba bước: <b>hoà tan → lọc → cô cạn</b>.', giangLai: 'Dùng sự khác nhau về tính tan: muối tan, cát không tan. Hoà tan để "tách đường đi" của hai chất, lọc giữ cát, cô cạn lấy lại muối.', tienBo: 'Em đã lập được quy trình nhiều bước.',
        nguon: N6K('Bài 17 "Tách chất khỏi hỗn hợp" (SGV tr. 100)'), kiemTra: K6(),
        tuongTu: { id: 'HH6C-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: 'Có hỗn hợp dầu ăn và nước. <b>Chọn TẤT CẢ</b> các bước phù hợp để tách riêng hai chất.', phuongAn: [{ t: 'Để yên cho hỗn hợp tách thành hai lớp.', dung: true }, { t: 'Dùng phễu chiết, mở khoá cho lớp nước bên dưới chảy ra trước.', dung: true }, { t: 'Lọc qua giấy lọc.', phanHoi: 'Cả hai đều là chất lỏng.' }, { t: 'Cô cạn hỗn hợp.', phanHoi: 'Mất nước.' }], goiY: ['Dầu nhẹ hơn, nổi lên trên.'], viSaoDung: 'Để lắng, chiết.', loiGiai: 'Ý 1, 2.', giangLai: 'Hai chất lỏng không tan → chiết.', nguon: N6K('Bài 17 (SGV tr. 100)'), kiemTra: K6() }
      },
      {
        id: 'HH6C-06', muc: 'nang-cao', liDoMuc: 'Giải thích lựa chọn phương pháp bằng tính chất của chất; câu mở.', loai: 'mo',
        de: 'Vì sao có thể dùng cách lọc để tách cát ra khỏi nước, nhưng <b>không</b> thể dùng cách lọc để lấy muối ra khỏi nước muối? Viết 2–4 câu.',
        tieuChi: [
          { t: 'Nêu cát không tan, bị giữ lại trên giấy lọc.', tuDong: { tuKhoa: ['khong tan', 'giu lai'] } },
          { t: 'Nêu muối đã tan trong nước, đi qua giấy lọc.', tuDong: { tuKhoa: ['tan'] } },
          { t: 'Nêu cách đúng để lấy muối: cô cạn / làm bay hơi nước.', tuDong: { tuKhoa: ['co can', 'bay hoi'] } },
          { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }
        ],
        baiThamKhao: 'Cát không tan trong nước nên khi lọc, các hạt cát bị giữ lại trên giấy lọc. Muối đã tan trong nước, các hạt muối rất nhỏ đi qua giấy lọc cùng với nước. Vì vậy muốn lấy muối phải cô cạn để nước bay hơi.',
        giupViet: 'Dàn ý: Cát … (không tan) → bị … Muối … (tan) → đi qua … Muốn lấy muối phải …',
        goiY: ['So sánh tính tan của cát và muối.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Giấy lọc giống cái lưới: giữ lại hạt to (cát), cho đi qua thứ đã tan hoàn toàn (muối).', tienBo: 'Em đã giải thích bằng tính tan.',
        nguon: N6K('Bài 17 (SGV tr. 100)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ theo từ khoá, học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'HH6C-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Nước giếng có lẫn đất, cát. Người ta thường để lắng rồi lọc qua bể cát, sỏi. Giải thích vì sao làm như vậy. Viết 2–4 câu.', tieuChi: [{ t: 'Nêu đất cát không tan.', tuDong: { tuKhoa: ['khong tan'] } }, { t: 'Nêu để lắng: hạt nặng chìm xuống.', tuDong: { tuKhoa: ['lang', 'chim'] } }, { t: 'Nêu lọc giữ lại hạt nhỏ.', tuDong: { tuKhoa: ['loc', 'giu lai'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Đất, cát không tan trong nước. Để lắng giúp các hạt nặng chìm xuống đáy. Lọc qua lớp cát, sỏi giữ lại các hạt nhỏ còn lơ lửng nên nước trong hơn.', giupViet: 'Không tan → lắng → lọc.', goiY: ['Hai bước.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Lắng rồi lọc.', nguon: N6K('Bài 17 (SGV tr. 100)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ theo từ khoá.') }
      }
    ]
  };

  const sh6TeBao = {
    id: 'sh6-te-bao', lop: 6, mon: 'khtn', phanMon: 'Sinh học', ten: 'Tế bào – đơn vị cơ sở của sự sống',
    sgk: 'SGV KHTN 6 — Chương V, Bài 18–21, SGV tr. 106–118', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Luỹ thừa của 2 (Toán 6)'],
    yeuCauCanDat: ['Nêu được tế bào là đơn vị cấu trúc và chức năng của cơ thể sống.', 'Nêu được chức năng các thành phần chính: màng tế bào, tế bào chất, nhân.', 'Phân biệt tế bào nhân sơ, nhân thực; tế bào động vật, thực vật.', 'Nêu được sự lớn lên và sinh sản của tế bào; tính số tế bào sau các lần phân chia.'],
    bai: {
      mucTieu: ['nêu chức năng của màng, tế bào chất, nhân;', 'phân biệt tế bào thực vật và động vật;', 'tính số tế bào sau n lần phân chia;', 'vận dụng vào tình huống có thời gian.'],
      khoiDong: { hoi: 'Một tế bào phân chia thành 2. Mỗi tế bào con lại phân chia tiếp. Sau 2 lần có bao nhiêu tế bào?', goiY: '1 → 2 → 4 tế bào.' },
      trongTam: [
        '<b>Tế bào</b> là đơn vị cấu trúc và chức năng của cơ thể sống.',
        'Thành phần chính: <b>màng tế bào</b> (bao bọc, kiểm soát chất ra vào), <b>tế bào chất</b> (nơi diễn ra hầu hết hoạt động sống), <b>nhân</b> hoặc vùng nhân (điều khiển hoạt động sống).',
        '<b>Tế bào nhân sơ</b> (vi khuẩn): chưa có màng nhân. <b>Tế bào nhân thực</b>: có nhân được bao bởi màng nhân.',
        'Tế bào <b>thực vật</b> có thêm <b>thành tế bào</b> và <b>lục lạp</b> (quang hợp) mà tế bào động vật không có.',
        'Tế bào lớn lên đến kích thước nhất định thì phân chia: 1 → 2 → 4 → 8… Sau <b>n</b> lần phân chia, từ 1 tế bào tạo ra <b>' + S('2', 'n') + '</b> tế bào.'
      ],
      viDu: { de: 'Từ 1 tế bào, sau 4 lần phân chia liên tiếp tạo ra bao nhiêu tế bào?', loiGiai: S('2', 4) + ' = <b>16</b> tế bào.' },
      nguon: N6K('Chương V "Tế bào", Bài 18–21 (SGV tr. 106–118)'),
      hoiDap: [
        { tu: ['nhan', 'dieu khien'], tl: 'Nhân điều khiển mọi hoạt động sống của tế bào.' },
        { tu: ['phan chia', 'sinh san'], tl: 'Sau n lần phân chia, 1 tế bào → 2ⁿ tế bào. Có a tế bào ban đầu → a · 2ⁿ.' },
        { tu: ['luc lap', 'thanh te bao', 'thuc vat'], tl: 'Tế bào thực vật có thêm thành tế bào và lục lạp.' },
        { tu: ['nhan so', 'nhan thuc'], tl: 'Nhân sơ: chưa có màng nhân (vi khuẩn). Nhân thực: có màng nhân.' }
      ]
    },
    cauHoi: [
      {
        id: 'SH6A-01', muc: 'co-ban', liDoMuc: 'Nhớ chức năng của nhân tế bào.', loai: 'chon1', de: 'Thành phần nào của tế bào <b>điều khiển</b> mọi hoạt động sống của tế bào?',
        phuongAn: [{ t: 'Nhân tế bào', dung: true }, { t: 'Màng tế bào', phanHoi: 'Màng bao bọc và kiểm soát chất ra vào.' }, { t: 'Tế bào chất', phanHoi: 'Tế bào chất là nơi diễn ra phần lớn hoạt động sống, nhưng không điều khiển.' }, { t: 'Thành tế bào', phanHoi: 'Thành tế bào (ở thực vật) giúp bảo vệ, tạo hình dạng.' }],
        goiY: ['"Trung tâm chỉ huy" của tế bào.'], viSaoDung: 'Nhân điều khiển hoạt động sống.', loiGiai: '<b>Nhân tế bào</b>.', giangLai: 'So sánh với trường học: màng = cổng trường, tế bào chất = các lớp học, nhân = phòng hiệu trưởng.', tienBo: 'Em đã nhớ chức năng của nhân.',
        nguon: N6K('Bài 19 "Cấu tạo và chức năng các thành phần của tế bào" (SGV tr. 108)'), kiemTra: K6(),
        tuongTu: { id: 'SH6A-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Thành phần nào <b>bao bọc</b> tế bào và kiểm soát các chất đi vào, đi ra?', phuongAn: [{ t: 'Màng tế bào', dung: true }, { t: 'Nhân', phanHoi: 'Điều khiển.' }, { t: 'Tế bào chất', phanHoi: 'Nơi diễn ra hoạt động sống.' }, { t: 'Lục lạp', phanHoi: 'Quang hợp.' }], goiY: ['"Cổng trường".'], viSaoDung: 'Màng tế bào.', loiGiai: '<b>Màng tế bào</b>.', giangLai: 'Màng = cổng.', nguon: N6K('Bài 19 (SGV tr. 108)'), kiemTra: K6() }
      },
      {
        id: 'SH6A-02', muc: 'co-ban', liDoMuc: 'Nhận biết bào quan đặc trưng của tế bào thực vật.', loai: 'chon1', de: 'Thành phần nào có ở tế bào lá cây và giúp cây <b>quang hợp</b>?',
        phuongAn: [{ t: 'Lục lạp', dung: true }, { t: 'Màng tế bào', phanHoi: 'Có ở mọi tế bào, không thực hiện quang hợp.' }, { t: 'Nhân', phanHoi: 'Điều khiển hoạt động sống.' }, { t: 'Tế bào chất', phanHoi: 'Chứa các bào quan; quang hợp diễn ra ở lục lạp.' }],
        goiY: ['Chứa chất diệp lục màu xanh.'], viSaoDung: 'Lục lạp chứa diệp lục, thực hiện quang hợp.', loiGiai: '<b>Lục lạp</b>.', giangLai: '"Lục" nghĩa là màu xanh lục — lá xanh nhờ lục lạp.', tienBo: 'Em đã nhận ra lục lạp.',
        nguon: N6K('Bài 19 (SGV tr. 108)'), kiemTra: K6(),
        tuongTu: { id: 'SH6A-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Tế bào vi khuẩn thuộc loại nào?', phuongAn: [{ t: 'Tế bào nhân sơ', dung: true }, { t: 'Tế bào nhân thực', phanHoi: 'Vi khuẩn chưa có màng nhân.' }, { t: 'Tế bào thực vật', phanHoi: 'Không phải.' }, { t: 'Tế bào động vật', phanHoi: 'Không phải.' }], goiY: ['Có màng nhân không?'], viSaoDung: 'Nhân sơ.', loiGiai: '<b>Tế bào nhân sơ</b>.', giangLai: 'Sơ = sơ khai, chưa có màng nhân.', nguon: N6K('Bài 19 (SGV tr. 108)'), kiemTra: K6() }
      },
      {
        id: 'SH6A-03', muc: 'van-dung', liDoMuc: 'Áp dụng quy luật 1 → 2ⁿ.', loai: 'so', de: 'Từ 1 tế bào ban đầu, sau 3 lần phân chia liên tiếp tạo ra bao nhiêu tế bào?', dapAn: 8,
        loi: [{ gt: 6, nhan: 'Lỗi quy luật', phanHoi: 'Không phải 2 · 3. Mỗi lần phân chia, số tế bào <b>gấp đôi</b>: 1 → 2 → 4 → 8.' }, { gt: 3, nhan: 'Nhầm số lần với số tế bào', phanHoi: '3 là số lần phân chia.' }, { gt: 9, nhan: 'Lỗi quy luật', phanHoi: 'Đó là 3². Số tế bào là 2³.' }],
        buoc: { hoi: 'Sau lần phân chia thứ nhất có bao nhiêu tế bào?', dapAn: 2, dung: 'Đúng. Lần 2: 4. Lần 3: ?', sai: '1 tế bào chia đôi.' },
        goiY: ['Mỗi lần: gấp đôi.'], viSaoDung: '2³ = 8.', loiGiai: '1 → 2 → 4 → <b>8</b> (= ' + S('2', 3) + ').', giangLai: 'Vẽ sơ đồ cây: mỗi tế bào tách thành hai nhánh. Đếm số "lá" ở tầng cuối.', tienBo: 'Em đã nắm quy luật gấp đôi.',
        nguon: N6K('Bài 20 "Sự lớn lên và sinh sản của tế bào" (SGV tr. 112)'), kiemTra: K6(),
        tuongTu: { id: 'SH6A-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Từ 1 tế bào, sau 5 lần phân chia liên tiếp tạo ra bao nhiêu tế bào?', dapAn: 32, loi: [{ gt: 10, nhan: 'Lỗi quy luật', phanHoi: 'Gấp đôi mỗi lần.' }, { gt: 25, nhan: 'Lỗi quy luật', phanHoi: 'Đó là 5². Cần 2⁵.' }], buoc: { hoi: 'Sau 3 lần?', dapAn: 8, dung: 'Đúng.', sai: '2³.' }, goiY: ['2⁵.'], viSaoDung: '32.', loiGiai: '<b>32</b>.', giangLai: 'Sơ đồ cây.', nguon: N6K('Bài 20 (SGV tr. 112)'), kiemTra: K6() }
      },
      {
        id: 'SH6A-04', muc: 'van-dung', liDoMuc: 'Mở rộng: nhiều tế bào ban đầu cùng phân chia.', loai: 'so', de: 'Có 4 tế bào cùng phân chia 3 lần liên tiếp. Tổng số tế bào tạo ra là bao nhiêu?', dapAn: 32,
        loi: [{ gt: 8, nhan: 'Thiếu bước', phanHoi: '8 là số tế bào tạo ra từ <b>một</b> tế bào. Có 4 tế bào ban đầu.' }, { gt: 24, nhan: 'Lỗi quy luật', phanHoi: 'Không phải 4 · 2 · 3. Mỗi tế bào tạo ra 2³ = 8.' }, { gt: 12, nhan: 'Lỗi quy luật', phanHoi: 'Mỗi lần phân chia số tế bào gấp đôi, không cộng thêm.' }],
        buoc: { hoi: 'Một tế bào sau 3 lần phân chia tạo ra bao nhiêu tế bào?', dapAn: 8, dung: 'Đúng. 4 tế bào → 4 · 8.', sai: '2³.' },
        goiY: ['Mỗi tế bào tạo 2³ tế bào.'], viSaoDung: '4 · 8 = 32.', loiGiai: '4 · ' + S('2', 3) + ' = 4 · 8 = <b>32</b> tế bào.', giangLai: 'Tính cho một tế bào rồi nhân với số tế bào ban đầu.', tienBo: 'Em đã mở rộng quy luật cho nhiều tế bào.',
        nguon: N6K('Bài 20 (SGV tr. 112)'), kiemTra: K6(),
        tuongTu: { id: 'SH6A-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Có 3 tế bào cùng phân chia 4 lần liên tiếp. Tổng số tế bào tạo ra là bao nhiêu?', dapAn: 48, loi: [{ gt: 16, nhan: 'Thiếu bước', phanHoi: 'Đó là từ một tế bào.' }, { gt: 24, nhan: 'Lỗi quy luật', phanHoi: 'Mỗi tế bào tạo 2⁴.' }], buoc: { hoi: 'Một tế bào sau 4 lần?', dapAn: 16, dung: 'Đúng.', sai: '2⁴.' }, goiY: ['3 · 16.'], viSaoDung: '48.', loiGiai: '<b>48</b>.', giangLai: 'Một tế bào rồi nhân.', nguon: N6K('Bài 20 (SGV tr. 112)'), kiemTra: K6() }
      },
      {
        id: 'SH6A-05', muc: 'nang-cao', liDoMuc: 'So sánh hai loại tế bào, chọn đúng các điểm chung.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các thành phần có ở <b>cả</b> tế bào động vật và tế bào thực vật.',
        phuongAn: [{ t: 'Màng tế bào', dung: true }, { t: 'Tế bào chất', dung: true }, { t: 'Nhân', dung: true }, { t: 'Thành tế bào', phanHoi: 'Chỉ tế bào thực vật có thành tế bào.' }, { t: 'Lục lạp', phanHoi: 'Chỉ tế bào thực vật (ở phần xanh của cây) có lục lạp.' }],
        goiY: ['Ba thành phần chính của mọi tế bào nhân thực.'], viSaoDung: 'Màng, tế bào chất, nhân là thành phần chung.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Lập bảng hai cột "động vật | thực vật". Thực vật = động vật + thành tế bào + lục lạp.', tienBo: 'Em đã so sánh hai loại tế bào.',
        nguon: N6K('Bài 19 (SGV tr. 108); Bài 21 "Thực hành: Quan sát và phân biệt một số loại tế bào" (SGV tr. 116)'), kiemTra: K6(),
        tuongTu: { id: 'SH6A-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc, điểm khác.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các thành phần <b>chỉ có ở tế bào thực vật</b>, không có ở tế bào động vật.', phuongAn: [{ t: 'Thành tế bào', dung: true }, { t: 'Lục lạp', dung: true }, { t: 'Màng tế bào', phanHoi: 'Có ở cả hai.' }, { t: 'Nhân', phanHoi: 'Có ở cả hai.' }], goiY: ['Thực vật = động vật + …'], viSaoDung: 'Ý 1, 2.', loiGiai: 'Ý 1, 2.', giangLai: 'Thành tế bào, lục lạp.', nguon: N6K('Bài 19, 21 (SGV tr. 108–116)'), kiemTra: K6() }
      },
      {
        id: 'SH6A-06', muc: 'nang-cao', liDoMuc: 'Nhiều bước: đổi thời gian ra số lần phân chia rồi tính 2ⁿ.', loai: 'so',
        de: 'Giả sử một loại vi khuẩn cứ 20 phút phân chia một lần. Từ 1 vi khuẩn, sau 2 giờ sẽ có bao nhiêu vi khuẩn?', dapAn: 64, soLieu: GIA_DINH,
        loi: [{ gt: 12, nhan: 'Lỗi quy luật', phanHoi: 'Không phải 2 · 6. Số vi khuẩn gấp đôi sau mỗi lần: 2⁶.' }, { gt: 6, nhan: 'Nhầm số lần với số tế bào', phanHoi: '6 là số lần phân chia.' }, { gt: 32, nhan: 'Lỗi đếm số lần', phanHoi: '2 giờ = 120 phút = 6 lần 20 phút, không phải 5.' }],
        buoc: { hoi: 'Trong 2 giờ, vi khuẩn phân chia bao nhiêu lần?', dapAn: 6, dung: 'Đúng: 120 : 20 = 6. Số vi khuẩn: 2⁶.', sai: 'Đổi 2 giờ = 120 phút rồi chia 20.' },
        goiY: ['Đổi 2 giờ ra phút.', 'Số lần = thời gian : 20 phút.'], viSaoDung: '6 lần → 2⁶ = 64.', loiGiai: '2 giờ = 120 phút → 120 : 20 = 6 lần. Số vi khuẩn: ' + S('2', 6) + ' = <b>64</b>.',
        giangLai: 'Tách bài thành hai câu hỏi nhỏ: (1) Phân chia mấy lần? (2) Sau ngần ấy lần có bao nhiêu tế bào?', tienBo: 'Em đã đổi đơn vị thời gian và tính đúng.',
        nguon: N6K('Bài 20 (SGV tr. 112)'), kiemTra: K6(),
        tuongTu: { id: 'SH6A-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Giả sử một loại vi khuẩn cứ 30 phút phân chia một lần. Từ 1 vi khuẩn, sau 2 giờ 30 phút có bao nhiêu vi khuẩn?', dapAn: 32, soLieu: GIA_DINH, loi: [{ gt: 10, nhan: 'Lỗi quy luật', phanHoi: 'Gấp đôi mỗi lần.' }, { gt: 5, nhan: 'Nhầm số lần với số tế bào', phanHoi: 'Đó là số lần.' }, { gt: 16, nhan: 'Lỗi đếm số lần', phanHoi: '150 : 30 = 5 lần.' }], buoc: { hoi: 'Số lần phân chia?', dapAn: 5, dung: 'Đúng.', sai: '150 : 30.' }, goiY: ['2 giờ 30 phút = 150 phút.'], viSaoDung: '2⁵.', loiGiai: '<b>32</b>.', giangLai: 'Hai câu hỏi nhỏ.', nguon: N6K('Bài 20 (SGV tr. 112)'), kiemTra: K6() }
      }
    ]
  };

  const sh6DaDang = {
    id: 'sh6-da-dang-song', lop: 6, mon: 'khtn', phanMon: 'Sinh học', ten: 'Đa dạng thế giới sống',
    sgk: 'SGV KHTN 6 — Chương VII, Bài 25–39, SGV tr. 129–177', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Tế bào nhân sơ, nhân thực (Chương V)'],
    yeuCauCanDat: ['Nêu được các bậc phân loại sinh vật từ thấp đến cao.', 'Sử dụng được khoá lưỡng phân đơn giản.', 'Nhận biết virus, vi khuẩn, nguyên sinh vật, nấm, thực vật, động vật; nêu vai trò và tác hại.', 'Phân biệt các nhóm thực vật và các nhóm động vật (không xương sống, có xương sống).'],
    bai: {
      mucTieu: ['sắp xếp bậc phân loại;', 'dùng khoá lưỡng phân;', 'phân biệt động vật có xương sống và không xương sống;', 'nêu lợi ích, tác hại của vi sinh vật.'],
      khoiDong: { hoi: 'Con cá, con ếch, con rắn, con chim, con mèo có điểm gì chung?', goiY: 'Đều có xương sống.' },
      trongTam: [
        'Các <b>bậc phân loại</b> từ thấp đến cao: <b>Loài → Chi (giống) → Họ → Bộ → Lớp → Ngành → Giới</b>.',
        '<b>Khoá lưỡng phân</b>: mỗi bước chia các sinh vật thành 2 nhóm theo một đặc điểm đối lập, đến khi tách được từng sinh vật.',
        '<b>Virus</b> chưa có cấu tạo tế bào. <b>Vi khuẩn</b>: tế bào nhân sơ. <b>Nấm</b>, nguyên sinh vật, thực vật, động vật: tế bào nhân thực.',
        '<b>Thực vật</b>: Rêu (chưa có mạch dẫn) → Dương xỉ (có mạch, sinh sản bằng bào tử) → Hạt trần (có hạt, không có quả) → Hạt kín (có hoa, hạt nằm trong quả).',
        '<b>Động vật không xương sống</b>: ruột khoang, giun, thân mềm, chân khớp… <b>Có xương sống</b>: cá, lưỡng cư, bò sát, chim, thú.',
        'Vi khuẩn, nấm có <b>lợi</b> (làm sữa chua, muối dưa, phân giải xác sinh vật, làm men bánh mì) và có <b>hại</b> (gây bệnh, làm hỏng thức ăn).'
      ],
      viDu: { de: 'Dùng khoá: 1a có lông vũ → Chim; 1b không có lông vũ → bước 2. 2a có lông mao → Thú; 2b không có lông mao → khác. Con mèo thuộc nhóm nào?', loiGiai: 'Mèo không có lông vũ (1b) → có lông mao (2a) → <b>Thú</b>.' },
      nguon: N6K('Chương VII "Đa dạng thế giới sống", Bài 25–39 (SGV tr. 129–177)'),
      hoiDap: [
        { tu: ['bac phan loai'], tl: 'Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới (từ thấp đến cao).' },
        { tu: ['khoa luong phan'], tl: 'Đi từng bước, mỗi bước chọn một trong hai đặc điểm đối lập.' },
        { tu: ['virus'], tl: 'Virus chưa có cấu tạo tế bào, chỉ sống ký sinh trong tế bào sinh vật khác.' },
        { tu: ['xuong song'], tl: 'Có xương sống: cá, lưỡng cư, bò sát, chim, thú.' }
      ]
    },
    cauHoi: [
      {
        id: 'SH6B-01', muc: 'co-ban', liDoMuc: 'Nhận biết virus chưa có cấu tạo tế bào.', loai: 'chon1', de: 'Sinh vật nào sau đây <b>chưa có cấu tạo tế bào</b>?',
        phuongAn: [{ t: 'Virus', dung: true }, { t: 'Vi khuẩn', phanHoi: 'Vi khuẩn có cấu tạo tế bào nhân sơ.' }, { t: 'Nấm men', phanHoi: 'Nấm men là tế bào nhân thực.' }, { t: 'Trùng roi', phanHoi: 'Trùng roi là nguyên sinh vật, có tế bào.' }],
        goiY: ['Nhóm nào phải sống nhờ trong tế bào khác?'], viSaoDung: 'Virus chưa có cấu tạo tế bào.', loiGiai: '<b>Virus</b>.', giangLai: 'Virus giống "một gói chỉ dẫn" — phải chui vào tế bào sinh vật khác mới nhân lên được.', tienBo: 'Em đã nhận biết virus.',
        nguon: N6K('Bài 29 "Virus" (SGV tr. 142)'), kiemTra: K6(),
        tuongTu: { id: 'SH6B-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Vi khuẩn có tế bào thuộc loại nào?', phuongAn: [{ t: 'Nhân sơ', dung: true }, { t: 'Nhân thực', phanHoi: 'Chưa có màng nhân.' }, { t: 'Chưa có tế bào', phanHoi: 'Đó là virus.' }, { t: 'Tế bào thực vật', phanHoi: 'Không phải.' }], goiY: ['Màng nhân?'], viSaoDung: 'Nhân sơ.', loiGiai: '<b>Nhân sơ</b>.', giangLai: 'Sơ = sơ khai.', nguon: N6K('Bài 27 "Vi khuẩn" (SGV tr. 134)'), kiemTra: K6() }
      },
      {
        id: 'SH6B-02', muc: 'co-ban', liDoMuc: 'Phân loại động vật có xương sống.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các động vật <b>có xương sống</b>.',
        phuongAn: [{ t: 'Cá chép', dung: true }, { t: 'Ếch đồng', dung: true }, { t: 'Chim bồ câu', dung: true }, { t: 'Giun đất', phanHoi: 'Giun không có xương sống.' }, { t: 'Tôm', phanHoi: 'Tôm có vỏ cứng bên ngoài (chân khớp), không có xương sống.' }],
        goiY: ['Năm nhóm: cá, lưỡng cư, bò sát, chim, thú.'], viSaoDung: 'Cá chép (cá), ếch (lưỡng cư), bồ câu (chim).', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Vỏ cứng bên ngoài (tôm, cua) không phải xương sống — xương sống nằm bên trong cơ thể.', tienBo: 'Em đã phân loại đúng.',
        nguon: N6K('Bài 36 "Động vật" (SGV tr. 164)'), kiemTra: K6(),
        tuongTu: { id: 'SH6B-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các động vật <b>không xương sống</b>.', phuongAn: [{ t: 'Giun đất', dung: true }, { t: 'Ốc sên', dung: true }, { t: 'Châu chấu', dung: true }, { t: 'Rắn', phanHoi: 'Bò sát, có xương sống.' }, { t: 'Cá rô', phanHoi: 'Có xương sống.' }], goiY: ['Năm nhóm có xương sống.'], viSaoDung: 'Ý 1, 2, 3.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Vỏ ngoài không phải xương sống.', nguon: N6K('Bài 36 (SGV tr. 164)'), kiemTra: K6() }
      },
      {
        id: 'SH6B-03', muc: 'van-dung', liDoMuc: 'Sắp xếp đúng toàn bộ thứ tự bậc phân loại.', loai: 'chon1', de: 'Thứ tự các bậc phân loại <b>từ thấp đến cao</b> là:',
        phuongAn: [{ t: 'Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới', dung: true }, { t: 'Giới → Ngành → Lớp → Bộ → Họ → Chi → Loài', phanHoi: 'Đó là từ cao đến thấp.' }, { t: 'Loài → Họ → Chi → Bộ → Lớp → Ngành → Giới', phanHoi: 'Chi phải đứng ngay sau Loài.' }, { t: 'Loài → Chi → Họ → Lớp → Bộ → Ngành → Giới', phanHoi: 'Bộ đứng trước Lớp.' }],
        goiY: ['Bậc thấp nhất là Loài, cao nhất là Giới.'], viSaoDung: 'Loài – Chi – Họ – Bộ – Lớp – Ngành – Giới.', loiGiai: '<b>Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới</b>.', giangLai: 'Câu nhớ tự đặt: "<b>L</b>àm <b>C</b>on <b>H</b>ọc <b>B</b>ài <b>L</b>ớp <b>N</b>ăm <b>G</b>iỏi" (Loài, Chi, Họ, Bộ, Lớp, Ngành, Giới).', tienBo: 'Em đã nhớ đúng thứ tự bậc phân loại.',
        nguon: N6K('Bài 25 "Hệ thống phân loại sinh vật" (SGV tr. 129)'), kiemTra: K6(),
        tuongTu: { id: 'SH6B-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Bậc phân loại nào nằm <b>ngay trên</b> bậc Họ?', phuongAn: [{ t: 'Bộ', dung: true }, { t: 'Chi', phanHoi: 'Chi ở dưới Họ.' }, { t: 'Lớp', phanHoi: 'Lớp ở trên Bộ.' }, { t: 'Loài', phanHoi: 'Thấp nhất.' }], goiY: ['Loài → Chi → Họ → ?'], viSaoDung: 'Bộ.', loiGiai: '<b>Bộ</b>.', giangLai: 'Câu nhớ.', nguon: N6K('Bài 25 (SGV tr. 129)'), kiemTra: K6() }
      },
      {
        id: 'SH6B-04', muc: 'van-dung', liDoMuc: 'Nhận biết nhóm thực vật từ nhiều đặc điểm.', loai: 'chon1', de: 'Nhóm thực vật nào <b>có hoa</b> và <b>hạt nằm trong quả</b>?',
        phuongAn: [{ t: 'Hạt kín', dung: true }, { t: 'Hạt trần', phanHoi: 'Hạt trần có hạt nhưng hạt nằm lộ trên lá noãn, chưa có quả.' }, { t: 'Dương xỉ', phanHoi: 'Dương xỉ sinh sản bằng bào tử, không có hạt.' }, { t: 'Rêu', phanHoi: 'Rêu chưa có mạch dẫn, không có hạt.' }],
        goiY: ['"Kín" nghĩa là hạt được bọc kín.'], viSaoDung: 'Hạt kín: có hoa, quả bọc hạt.', loiGiai: '<b>Hạt kín</b>.', giangLai: 'Quả cam, quả bưởi: hạt nằm kín bên trong → hạt kín. Cây thông: hạt lộ trên nón → hạt trần.', tienBo: 'Em đã phân biệt hạt kín và hạt trần.',
        nguon: N6K('Bài 34 "Thực vật" (SGV tr. 157)'), kiemTra: K6(),
        tuongTu: { id: 'SH6B-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Nhóm thực vật nào <b>chưa có mạch dẫn</b>?', phuongAn: [{ t: 'Rêu', dung: true }, { t: 'Dương xỉ', phanHoi: 'Có mạch dẫn.' }, { t: 'Hạt trần', phanHoi: 'Có mạch dẫn.' }, { t: 'Hạt kín', phanHoi: 'Có mạch dẫn.' }], goiY: ['Nhóm đơn giản nhất.'], viSaoDung: 'Rêu.', loiGiai: '<b>Rêu</b>.', giangLai: 'Rêu nhỏ, sống nơi ẩm vì chưa có mạch dẫn nước.', nguon: N6K('Bài 34 (SGV tr. 157)'), kiemTra: K6() }
      },
      {
        id: 'SH6B-05', muc: 'nang-cao', liDoMuc: 'Dùng khoá lưỡng phân nhiều bước để xác định nhóm.', loai: 'chon1',
        de: 'Cho khoá lưỡng phân:<br>1a. Có lông vũ → <b>Chim</b>. 1b. Không có lông vũ → đến 2.<br>2a. Có lông mao, đẻ con → <b>Thú</b>. 2b. Không có lông mao → đến 3.<br>3a. Da trần, luôn ẩm ướt → <b>Lưỡng cư</b>. 3b. Da khô, có vảy sừng → <b>Bò sát</b>.<br>Một con vật không có lông vũ, không có lông mao, da khô phủ vảy sừng. Nó thuộc nhóm nào?',
        phuongAn: [{ t: 'Bò sát', dung: true }, { t: 'Lưỡng cư', phanHoi: 'Lưỡng cư có da trần, ẩm ướt (bước 3a).' }, { t: 'Thú', phanHoi: 'Con vật không có lông mao (đi theo 2b).' }, { t: 'Chim', phanHoi: 'Con vật không có lông vũ (đi theo 1b).' }],
        goiY: ['Đi lần lượt: 1 → 2 → 3.'], viSaoDung: '1b → 2b → 3b: Bò sát.', loiGiai: '1b → 2b → 3b → <b>Bò sát</b>.', giangLai: 'Lấy bút chỉ vào từng bước, đọc cả "a" và "b", chọn dòng đúng với con vật rồi đi tiếp theo mũi tên.', tienBo: 'Em đã dùng được khoá lưỡng phân.',
        nguon: N6K('Bài 26 "Khoá lưỡng phân" (SGV tr. 132)'), kiemTra: K6(),
        tuongTu: { id: 'SH6B-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Dùng khoá ở câu trước (1a Lông vũ → Chim; 2a Lông mao, đẻ con → Thú; 3a Da trần ẩm → Lưỡng cư; 3b Da khô, vảy sừng → Bò sát). Một con vật không có lông vũ, có lông mao và đẻ con. Nó thuộc nhóm nào?', phuongAn: [{ t: 'Thú', dung: true }, { t: 'Chim', phanHoi: 'Không có lông vũ.' }, { t: 'Bò sát', phanHoi: 'Có lông mao → dừng ở 2a.' }, { t: 'Lưỡng cư', phanHoi: 'Có lông mao.' }], goiY: ['1b → 2a.'], viSaoDung: 'Thú.', loiGiai: '<b>Thú</b>.', giangLai: 'Đi từng bước.', nguon: N6K('Bài 26 (SGV tr. 132)'), kiemTra: K6() }
      },
      {
        id: 'SH6B-06', muc: 'nang-cao', liDoMuc: 'Tự nêu ví dụ lợi ích và tác hại của vi khuẩn; câu mở.', loai: 'mo',
        de: 'Hãy nêu <b>hai</b> vai trò có lợi và <b>một</b> tác hại của vi khuẩn đối với đời sống con người. Viết 2–5 câu.',
        tieuChi: [
          { t: 'Nêu được ít nhất một ví dụ có lợi trong chế biến thực phẩm (sữa chua, muối dưa, làm tương…).', tuDong: { tuKhoa: ['sua chua', 'muoi dua', 'dua muoi', 'tuong', 'nuoc mam', 'che bien'] } },
          { t: 'Nêu được thêm một vai trò có lợi khác (phân giải xác sinh vật, làm phân bón…).', tuDong: { tuKhoa: ['phan giai', 'phan bon', 'xac dong vat', 'xac thuc vat', 'xac sinh vat'] } },
          { t: 'Nêu được một tác hại (gây bệnh, làm hỏng thức ăn).', tuDong: { tuKhoa: ['benh', 'lam hong', 'bi hong', 'hu hong', 'thiu'] } },
          { t: 'Viết 2–5 câu.', tuDong: { soCau: [2, 5] } }
        ],
        baiThamKhao: 'Vi khuẩn được dùng để làm sữa chua và muối dưa cải. Vi khuẩn trong đất phân giải xác động vật, thực vật thành chất dinh dưỡng cho cây. Tuy nhiên, một số vi khuẩn gây bệnh cho người như bệnh tiêu chảy, và làm thức ăn bị hỏng, ôi thiu.',
        giupViet: 'Dàn ý: (1) Trong chế biến thực phẩm, vi khuẩn giúp … (2) Trong tự nhiên, vi khuẩn … (3) Tác hại: một số vi khuẩn …',
        goiY: ['Nghĩ đến món ăn lên men trong nhà em.', 'Vì sao thức ăn để lâu bị ôi thiu?'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Ghi hai cột "Có lợi | Có hại" rồi nghĩ ví dụ ở bếp nhà mình: sữa chua, dưa muối (lợi); cơm thiu (hại).', tienBo: 'Em đã nêu được cả lợi và hại của vi khuẩn.',
        nguon: N6K('Bài 27 "Vi khuẩn" (SGV tr. 134); Bài 28 "Thực hành: Làm sữa chua và quan sát vi khuẩn" (SGV tr. 139)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ theo từ khoá, học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'SH6B-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc, về nấm.', loai: 'mo', de: 'Hãy nêu <b>hai</b> vai trò có lợi và <b>một</b> tác hại của nấm. Viết 2–5 câu.', tieuChi: [{ t: 'Nêu nấm làm thức ăn (nấm rơm, nấm hương…).', tuDong: { tuKhoa: ['thuc an', 'nam rom', 'nam huong', 'nam kim cham', 'mon an'] } }, { t: 'Nêu vai trò khác (men làm bánh mì, phân giải…).', tuDong: { tuKhoa: ['banh mi', 'men', 'phan giai', 'thuoc'] } }, { t: 'Nêu tác hại (gây bệnh, nấm độc, làm mốc đồ ăn).', tuDong: { tuKhoa: ['benh', 'doc', 'moc', 'lam hong', 'bi hong', 'hu hong'] } }, { t: 'Viết 2–5 câu.', tuDong: { soCau: [2, 5] } }], baiThamKhao: 'Nhiều loại nấm như nấm rơm, nấm hương được dùng làm thức ăn. Nấm men được dùng để làm bánh mì. Tuy nhiên, có loại nấm độc gây ngộ độc nếu ăn phải, và nấm mốc làm hỏng thức ăn.', giupViet: 'Lợi: thức ăn, bánh mì. Hại: nấm độc, mốc.', goiY: ['Món nấm em từng ăn.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Hai cột lợi | hại.', nguon: N6K('Bài 32 "Nấm" (SGV tr. 152)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ theo từ khoá.') }
      }
    ]
  };

  /* ---------------- TIẾNG ANH 6 ---------------- */
  const ta6Thi = {
    id: 'ta6-hien-tai', lop: 6, mon: 'anh', phanMon: 'Ngữ pháp', ten: 'Thì hiện tại đơn và hiện tại tiếp diễn',
    sgk: 'SGV Tiếng Anh 6 — Unit 1 (present simple, adverbs of frequency); Unit 3 (present continuous)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 1 và Unit 3 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['Động từ to be: am / is / are', 'Đại từ nhân xưng I, you, he, she, it, we, they'],
    yeuCauCanDat: ['Dùng thì hiện tại đơn để nói thói quen, lịch học; dùng đúng trạng từ tần suất.', 'Dùng thì hiện tại tiếp diễn để nói việc đang xảy ra lúc nói.', 'Nhận ra dấu hiệu của từng thì và tự sửa lỗi chia động từ.', 'Viết đoạn văn ngắn kết hợp hai thì.'],
    bai: {
      mucTieu: ['chia động từ hiện tại đơn với he / she / it;', 'đặt trạng từ tần suất đúng vị trí;', 'chọn thì theo dấu hiệu (every day / now, Look!);', 'tìm và sửa lỗi dùng sai thì.'],
      khoiDong: { hoi: 'What do you usually do after school? What are you doing now?', goiY: 'Ví dụ: "I usually play badminton after school. Now I am learning English."' },
      trongTam: [
        '<b>Hiện tại đơn</b> (thói quen, lịch cố định): I / You / We / They + <b>V</b>; He / She / It + <b>V-s/es</b>. Dấu hiệu: every day, on Mondays, after school, always, usually…',
        '<b>Trạng từ tần suất</b> (always, usually, often, sometimes, rarely, never) đứng <b>trước động từ thường</b> nhưng <b>sau động từ to be</b>: She <u>often</u> walks… / He is <u>never</u> late.',
        '<b>Hiện tại tiếp diễn</b> (đang xảy ra lúc nói): S + <b>am / is / are + V-ing</b>. Dấu hiệu: now, right now, at the moment, Look!, Listen!',
        'Phủ định: don\'t / doesn\'t + V (đơn) — am not / isn\'t / aren\'t + V-ing (tiếp diễn).',
        'Một số động từ chỉ trạng thái (have khi nói "sở hữu", like, know…) thường <b>không</b> dùng ở thì tiếp diễn: She <u>has</u> long hair (không viết "is having").'
      ],
      viDu: { de: 'Viết 2 câu về Nam: thói quen sáng nào cũng chạy bộ; lúc này đang ăn sáng.', loiGiai: 'Nam <b>runs</b> every morning. Right now he <b>is having</b> breakfast.' },
      nguon: N6A('Unit 1 "My New School" — Objectives: use the present simple, use the adverbs of frequency; Unit 3 — Objectives: use the present continuous to talk about things happening now'),
      hoiDap: [
        { tu: ['hien tai don', 'present simple', 'them s'], tl: 'He/She/It + V-s/es (watches, goes, studies). Thói quen: every day, usually…' },
        { tu: ['tiep dien', 'continuous', 'v-ing', 'ving'], tl: 'am/is/are + V-ing cho việc đang xảy ra: now, at the moment, Look!' },
        { tu: ['trang tu', 'always', 'usually', 'never', 'vi tri'], tl: 'Trạng từ tần suất đứng trước động từ thường, sau to be.' }
      ]
    },
    cauHoi: [
      {
        id: 'TA6A-01', muc: 'co-ban', liDoMuc: 'Chọn thì theo dấu hiệu "Look!".', loai: 'chon1', de: 'Choose the correct answer: <i>Look! The children ______ football in the schoolyard.</i>',
        phuongAn: [{ t: 'are playing', dung: true }, { t: 'play', phanHoi: '"Look!" cho biết việc đang xảy ra → thì hiện tại tiếp diễn.' }, { t: 'plays', phanHoi: '"The children" là số nhiều, và cần thì tiếp diễn.' }, { t: 'is playing', phanHoi: '"The children" số nhiều → are, không dùng is.' }],
        goiY: ['"Look!" → việc đang diễn ra.', '"The children" số ít hay số nhiều?'], viSaoDung: 'Look! → tiếp diễn; children số nhiều → are playing.', loiGiai: 'Look! The children <b>are playing</b> football.', giangLai: '"Look!", "Listen!" giống như em đang chỉ tay vào cảnh trước mắt → việc đang xảy ra → am/is/are + V-ing.', tienBo: 'Em đã nhận ra dấu hiệu thì tiếp diễn.',
        nguon: N6A('Unit 3 — Objectives: use the present continuous'), kiemTra: K6(),
        tuongTu: { id: 'TA6A-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose the correct answer: <i>Listen! My sister ______ the piano.</i>', phuongAn: [{ t: 'is playing', dung: true }, { t: 'plays', phanHoi: 'Listen! → đang xảy ra.' }, { t: 'are playing', phanHoi: 'My sister = she → is.' }, { t: 'play', phanHoi: 'Cần thì tiếp diễn.' }], goiY: ['Listen!'], viSaoDung: 'is playing.', loiGiai: 'My sister <b>is playing</b> the piano.', giangLai: 'Listen! → đang xảy ra.', nguon: N6A('Unit 3 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6A-02', muc: 'co-ban', liDoMuc: 'Chia động từ hiện tại đơn với ngôi thứ ba số ít, quy tắc -es.', loai: 'chu',
        de: 'Write the correct form of the verb: <i>Nick ______ (go) to school by bike every day.</i> <span class="note">Chỉ gõ động từ đã chia.</span>',
        chapNhan: ['goes'],
        loi: [{ mau: '^gos$', danhDau: 'gos', nhan: 'Lỗi chính tả -es', phanHoi: '"go" kết thúc bằng <b>o</b> → thêm <b>-es</b>: goes.' }, { mau: '^go$', danhDau: 'go', nhan: 'Lỗi chia động từ', phanHoi: '"Nick" = he. Động từ cần thay đổi thế nào?' }, { mau: 'going', danhDau: '*', nhan: 'Sai thì', phanHoi: '"every day" là thói quen → hiện tại đơn.' }],
        goiY: ['Nick = he.', '"go" kết thúc bằng "o".'], viSaoDung: 'he + goes.', loiGiai: 'Nick <b>goes</b> to school by bike every day.', giangLai: 'Đuôi o, s, sh, ch, x → thêm es: goes, does, watches, fixes.', tienBo: 'Em đã nhớ quy tắc -es.',
        nguon: N6A('Unit 1 — Objectives: use the present simple'), kiemTra: K6(),
        tuongTu: { id: 'TA6A-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Write the correct form of the verb: <i>My mum ______ (watch) the news every evening.</i> <span class="note">Chỉ gõ động từ đã chia.</span>', chapNhan: ['watches'], loi: [{ mau: '^watchs$', danhDau: 'watchs', nhan: 'Lỗi chính tả -es', phanHoi: 'ch → es.' }, { mau: '^watch$', danhDau: 'watch', nhan: 'Lỗi chia động từ', phanHoi: 'My mum = she.' }, { mau: 'watching', danhDau: '*', nhan: 'Sai thì', phanHoi: 'every evening → hiện tại đơn.' }], goiY: ['ch → es.'], viSaoDung: 'watches.', loiGiai: '<b>watches</b>.', giangLai: 'ch → es.', nguon: N6A('Unit 1 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6A-03', muc: 'van-dung', liDoMuc: 'Tự tìm lỗi dùng sai thì và viết lại cả câu.', loai: 'chu',
        de: 'Find and correct the mistake. Rewrite the sentence: <i>We are having English on Mondays and Wednesdays.</i>',
        chapNhan: ['we have english on mondays and wednesdays', 'have'],
        loi: [{ mau: '\\bare having\\b|\\bhaving\\b', danhDau: ['are', 'having'], nhan: 'Sai thì', phanHoi: '"on Mondays and Wednesdays" là lịch học lặp lại → thì <b>hiện tại đơn</b>.' }, { mau: '\\bwe has\\b|^has$', danhDau: 'has', nhan: 'Lỗi chia động từ', phanHoi: '"We" dùng "have", không dùng "has".' }],
        goiY: ['Đây là thói quen hay việc đang xảy ra?'], viSaoDung: 'Lịch cố định → hiện tại đơn: We have…', loiGiai: 'We <b>have</b> English on Mondays and Wednesdays.', giangLai: 'Thời khoá biểu lặp lại mỗi tuần → hiện tại đơn. "Now" mới cần tiếp diễn.', tienBo: 'Em đã tìm ra lỗi dùng sai thì.',
        nguon: N6A('Unit 1 — Objectives: use the present simple'), kiemTra: K6('Nhóm biên soạn kiểm tra các cách viết đúng (cả câu hoặc chỉ từ đã sửa); chạy kiểm thử tự động ngày ' + NGAY_SOAN + '.'),
        tuongTu: { id: 'TA6A-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Find and correct the mistake. Rewrite the sentence: <i>She is usually walking to school.</i>', chapNhan: ['she usually walks to school', 'usually walks', 'walks'], loi: [{ mau: '\\bis\\b.*walking|walking', danhDau: ['is', 'walking'], nhan: 'Sai thì', phanHoi: '"usually" → thói quen → hiện tại đơn.' }, { mau: '\\busually walk\\b|^walk$', danhDau: 'walk', nhan: 'Lỗi chia động từ', phanHoi: 'She → walks.' }], goiY: ['usually → thói quen.'], viSaoDung: 'She usually walks…', loiGiai: 'She usually <b>walks</b> to school.', giangLai: 'usually = thói quen.', nguon: N6A('Unit 1 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6A-04', muc: 'van-dung', liDoMuc: 'Đặt trạng từ tần suất đúng vị trí với động từ to be.', loai: 'chu',
        de: 'Rewrite the sentence with the adverb in brackets: <i>Mai is late for school. (never)</i>',
        chapNhan: ['mai is never late for school'],
        loi: [{ mau: '^mai never is\\b', danhDau: 'never', nhan: 'Sai vị trí trạng từ', phanHoi: 'Với động từ <b>to be</b>, trạng từ tần suất đứng <b>sau</b> to be: is never.' }, { mau: '\\bnever\\b.*\\bnot\\b|\\bisn\'t never\\b|\\bis not never\\b', danhDau: 'not', nhan: 'Phủ định kép', phanHoi: '"never" đã mang nghĩa phủ định, không thêm "not".' }],
        goiY: ['"is" là động từ to be.'], viSaoDung: 'to be + never.', loiGiai: 'Mai <b>is never</b> late for school.', giangLai: 'Nhớ: "BE đứng trước, thường đứng sau": trạng từ đứng sau to be nhưng đứng trước động từ thường.', tienBo: 'Em đã đặt trạng từ đúng vị trí.',
        nguon: N6A('Unit 1 — Objectives: use the adverbs of frequency'), kiemTra: K6(),
        tuongTu: { id: 'TA6A-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc, động từ thường.', loai: 'chu', de: 'Rewrite the sentence with the adverb in brackets: <i>They play chess after school. (often)</i>', chapNhan: ['they often play chess after school'], loi: [{ mau: '^they play often\\b|\\bchess often\\b|school often$', danhDau: 'often', nhan: 'Sai vị trí trạng từ', phanHoi: 'Trạng từ đứng <b>trước</b> động từ thường: often play.' }, { mau: '\\boften plays\\b', danhDau: 'plays', nhan: 'Lỗi chia động từ', phanHoi: 'They → play.' }], goiY: ['play là động từ thường.'], viSaoDung: 'often play.', loiGiai: 'They <b>often play</b> chess after school.', giangLai: 'Trước động từ thường.', nguon: N6A('Unit 1 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6A-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi cả đoạn, phải phân biệt hai thì theo ngữ cảnh.', loai: 'chonNhieu',
        de: 'Read the paragraph. <b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) Phong lives near his school. (2) He walks to school every day. (3) Right now he play basketball with his friends. (4) Look! His mother waits for him at the gate. (5) She doesn\'t like being late.</i>',
        phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng: Phong → lives.' }, { t: 'Câu (2)', phanHoi: 'Đúng: every day → hiện tại đơn, he → walks.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', dung: true }, { t: 'Câu (5)', phanHoi: 'Đúng: doesn\'t + like.' }],
        goiY: ['Tìm dấu hiệu thời gian trong mỗi câu.'], viSaoDung: '(3) is playing; (4) is waiting.', loiGiai: 'Câu (3) và (4) sai.<br>(3) Right now he <b>is playing</b> basketball…<br>(4) Look! His mother <b>is waiting</b> for him…',
        giangLai: 'Gạch chân dấu hiệu: every day → đơn; Right now, Look! → tiếp diễn. Rồi kiểm tra động từ có khớp không.', tienBo: 'Em đã soát lỗi theo dấu hiệu thời gian.',
        nguon: N6A('Unit 1 và Unit 3 — Objectives (present simple, present continuous)'), kiemTra: K6(),
        tuongTu: { id: 'TA6A-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) Lan is my best friend. (2) She is having long black hair. (3) At the moment she reads a book in the library. (4) She usually reads comics at weekends. (5) Today she is wearing a red T-shirt.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Đúng: usually → reads.' }, { t: 'Câu (5)', phanHoi: 'Đúng: Today, việc đang diễn ra.' }], goiY: ['have (sở hữu) không dùng tiếp diễn.'], viSaoDung: '(2) has; (3) is reading.', loiGiai: 'Câu (2): She <b>has</b> long black hair. Câu (3): At the moment she <b>is reading</b>…', giangLai: 'have = có (sở hữu) → hiện tại đơn.', nguon: N6A('Unit 1, Unit 3 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6A-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn văn kết hợp hai thì; câu mở, đánh giá theo tiêu chí.', loai: 'mo',
        de: 'Write a short paragraph (<b>40–60 words</b>) about your family. Say what your family members <b>usually do</b> at weekends and what they <b>are doing now</b>. Use at least <b>two</b> sentences in the present continuous.',
        tieuChi: [
          { t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } },
          { t: 'Có trạng từ / cụm chỉ thói quen (usually, often, every…, at weekends).', tuDong: { mau: '\\b(always|usually|often|sometimes|never|every|at weekends|on weekends|at the weekend)\\b', toiThieu: 1 } },
          { t: 'Có ít nhất 2 câu hiện tại tiếp diễn (am / is / are + V-ing).', tuDong: { mau: '\\b(am|is|are|\'m|\'s|\'re) \\w+ing\\b', toiThieu: 2 } },
          { t: 'He / she + động từ thêm -s/-es ở thì hiện tại đơn.', tuDong: { canhBao: '\\b(he|she|my (mother|father|mum|dad|sister|brother)) (usually |often |always |sometimes )?(go|play|watch|read|cook|do|have|clean|visit|listen)\\b', thongBao: 'Có thể có lỗi: he/she + động từ chưa thêm -s.' } }
        ],
        baiThamKhao: 'There are four people in my family. At weekends, my dad usually goes fishing and my mum often cooks a big lunch. My brother and I sometimes visit our grandparents. But now it is Sunday evening. My parents are watching TV, my brother is doing his homework and I am writing this paragraph.',
        giupViet: '<b>Khung:</b> At weekends, my dad usually … / My mum often … — Now, my dad is …-ing / I am …-ing.<br><b>Kiểm tra lại:</b> câu thói quen: he/she + V-s; câu "now": am/is/are + V-ing.',
        goiY: ['Hai phần: "At weekends…" (hiện tại đơn) và "Now…" (tiếp diễn).'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Viết 2 câu thói quen trước (usually/often), rồi 2 câu "Now…" với am/is/are + V-ing.', tienBo: 'Em đã kết hợp được hai thì trong một đoạn văn.',
        nguon: N6A('Unit 1 và Unit 3 — Objectives (present simple, present continuous)'), kiemTra: K6('Câu mở: nhóm biên soạn kiểm tra tiêu chí và bài tham khảo; máy chỉ kiểm tra sơ bộ, học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'TA6A-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about your best friend: what he/she usually does after school and what he/she is doing now.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có câu hiện tại đơn với trạng từ tần suất.', tuDong: { mau: '\\b(always|usually|often|sometimes|never|every)\\b', toiThieu: 1 } }, { t: 'Có câu hiện tại tiếp diễn.', tuDong: { mau: '\\b(is|are|\'s) \\w+ing\\b', toiThieu: 1 } }, { t: 'He/she + V-s.', tuDong: { canhBao: '\\b(he|she) (usually |often |always |sometimes )?(go|play|watch|read|do|have|help)\\b', thongBao: 'Có thể có lỗi: he/she + động từ chưa thêm -s.' } }], baiThamKhao: 'My best friend is Hoa. She usually plays badminton after school and sometimes helps her mother cook dinner. Right now she is sitting next to me in the library. She is reading a book about animals.', giupViet: 'Khung: My best friend … usually … Right now he/she is …-ing.', goiY: ['usually + V-s; now + is V-ing.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Hai phần: thói quen / đang làm.', nguon: N6A('Unit 1, Unit 3 — Objectives'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') }
      }
    ]
  };

  const ta6GioiTu = {
    id: 'ta6-gioi-tu', lop: 6, mon: 'anh', phanMon: 'Ngữ pháp', ten: 'Giới từ chỉ vị trí và sở hữu cách',
    sgk: 'SGV Tiếng Anh 6 — Units 1–3 (Review 1: prepositions of place, possessive case)', yccdGhiChu: 'Đã đối chiếu với mục tiêu phần Grammar của Review 1 (ôn Units 1–3) trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['Từ vựng đồ vật trong nhà, lớp học', 'There is / There are'],
    yeuCauCanDat: ['Dùng đúng giới từ chỉ vị trí: in, on, under, next to, behind, in front of, between.', 'Dùng sở hữu cách \'s để nói đồ vật của ai.', 'Đọc mô tả căn phòng và xác định vị trí đồ vật.', 'Viết đoạn ngắn tả căn phòng.'],
    bai: {
      mucTieu: ['chọn giới từ chỉ vị trí phù hợp;', 'viết đúng "in front of", "next to", "between … and …";', 'dùng sở hữu cách \'s;', 'tả căn phòng bằng There is / There are + giới từ.'],
      khoiDong: { hoi: 'Where is your schoolbag now? Trả lời bằng một câu tiếng Anh.', goiY: 'Ví dụ: "It is under my desk." hoặc "It is next to my chair."' },
      trongTam: [
        '<b>in</b> (trong), <b>on</b> (trên, tiếp xúc bề mặt: on the table, on the wall), <b>under</b> (dưới), <b>behind</b> (phía sau), <b>next to</b> (bên cạnh), <b>in front of</b> (phía trước), <b>between A and B</b> (ở giữa A và B).',
        'Chú ý viết đủ: next <b>to</b>, in front <b>of</b>. Tranh, đồng hồ treo tường: <b>on</b> the wall.',
        '<b>There is</b> + danh từ số ít; <b>There are</b> + danh từ số nhiều: There is a lamp on the desk. There are two chairs in the room.',
        '<b>Sở hữu cách</b>: người + <b>\'s</b> + vật: my brother\'s bike (xe của anh trai tôi). Danh từ số nhiều tận cùng -s chỉ thêm dấu \': my parents\' room. Danh từ số nhiều bất quy tắc thêm \'s: the children\'s toys.'
      ],
      viDu: { de: 'Tả: chiếc đèn ở trên bàn, bàn ở giữa giường và tủ.', loiGiai: 'The lamp is <b>on</b> the desk. The desk is <b>between</b> the bed <b>and</b> the wardrobe.' },
      nguon: N6A('Review 1 (ôn Units 1–3) — Grammar: prepositions of place, possessive case'),
      hoiDap: [
        { tu: ['in front of', 'next to', 'between'], tl: 'next to = bên cạnh; in front of = phía trước; between A and B = ở giữa.' },
        { tu: ['on the wall', 'on'], tl: 'Vật treo/dán trên tường dùng "on the wall".' },
        { tu: ["'s", 'so huu'], tl: "Người + 's + vật: Mai's bag. Số nhiều có -s: the students' books." }
      ]
    },
    cauHoi: [
      {
        id: 'TA6B-01', muc: 'co-ban', liDoMuc: 'Chọn giới từ theo nghĩa cho sẵn.', loai: 'chon1', de: 'Choose the correct answer (con mèo đang nằm <b>dưới gầm</b> bàn): <i>The cat is ______ the table.</i>',
        phuongAn: [{ t: 'under', dung: true }, { t: 'on', phanHoi: '"on" = ở trên mặt bàn.' }, { t: 'in', phanHoi: '"in" = ở bên trong.' }, { t: 'behind', phanHoi: '"behind" = phía sau.' }],
        goiY: ['Dưới = ?'], viSaoDung: 'under = dưới.', loiGiai: 'The cat is <b>under</b> the table.', giangLai: 'Vẽ nhanh cái bàn và đặt con mèo ở các vị trí: on / under / behind / next to.', tienBo: 'Em đã chọn đúng giới từ.',
        nguon: N6A('Review 1 — Grammar: prepositions of place'), kiemTra: K6(),
        tuongTu: { id: 'TA6B-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose the correct answer (những quyển sách ở <b>trên</b> giá sách): <i>The books are ______ the shelf.</i>', phuongAn: [{ t: 'on', dung: true }, { t: 'under', phanHoi: 'Dưới.' }, { t: 'between', phanHoi: 'Ở giữa hai vật.' }, { t: 'behind', phanHoi: 'Phía sau.' }], goiY: ['Trên bề mặt.'], viSaoDung: 'on.', loiGiai: '<b>on</b>.', giangLai: 'on = trên bề mặt.', nguon: N6A('Review 1 — Grammar'), kiemTra: K6() }
      },
      {
        id: 'TA6B-02', muc: 'co-ban', liDoMuc: 'Viết giới từ, cần nhớ cấu trúc between … and ….', loai: 'chu',
        de: 'Complete the sentence (cái đèn ở <b>giữa</b> giường và tủ quần áo): <i>The lamp is ______ the bed and the wardrobe.</i> <span class="note">Chỉ gõ giới từ.</span>',
        chapNhan: ['between'],
        loi: [{ mau: '^among$', danhDau: 'among', nhan: 'Nhầm giới từ', phanHoi: 'Với <b>hai</b> vật (… and …) ta dùng <b>between</b>.' }, { mau: '^next( to)?$', danhDau: '*', nhan: 'Nhầm giới từ', phanHoi: '"next to" chỉ cạnh một vật. Ở đây đèn nằm giữa hai vật.' }, { mau: '^betwen$|^beetween$|^betweem$', danhDau: '*', nhan: 'Lỗi chính tả', phanHoi: 'Viết đúng: b-e-t-w-e-e-n.' }],
        goiY: ['"… the bed and the wardrobe" — có hai vật.'], viSaoDung: 'between A and B.', loiGiai: 'The lamp is <b>between</b> the bed and the wardrobe.', giangLai: 'Thấy "A and B" ngay sau chỗ trống → nghĩ đến between.', tienBo: 'Em đã dùng đúng between … and ….',
        nguon: N6A('Review 1 — Grammar: prepositions of place'), kiemTra: K6(),
        tuongTu: { id: 'TA6B-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Complete (trường học ở <b>phía trước</b> bưu điện): <i>The school is ______ the post office.</i> <span class="note">Gõ cả cụm giới từ.</span>', chapNhan: ['in front of'], loi: [{ mau: '^front of$|^in front$', danhDau: '*', nhan: 'Thiếu từ', phanHoi: 'Đủ ba từ: in front of.' }, { mau: 'in the front of', danhDau: 'the', nhan: 'Thừa từ', phanHoi: 'Không có "the": in front of.' }, { mau: '^behind$', danhDau: 'behind', nhan: 'Nhầm giới từ', phanHoi: 'behind = phía sau.' }], goiY: ['Ba từ.'], viSaoDung: 'in front of.', loiGiai: '<b>in front of</b>.', giangLai: 'in front of.', nguon: N6A('Review 1 — Grammar'), kiemTra: K6() }
      },
      {
        id: 'TA6B-03', muc: 'van-dung', liDoMuc: 'Đọc đoạn mô tả và suy ra vị trí.', loai: 'chon1',
        de: 'Read: <i>"My bedroom is small. The bed is next to the window. The desk is in front of the bed. My computer is on the desk, and my schoolbag is under the desk."</i><br>Where is the computer?',
        phuongAn: [{ t: 'It is on the desk.', dung: true }, { t: 'It is next to the window.', phanHoi: 'Cái giường mới ở cạnh cửa sổ.' }, { t: 'It is under the desk.', phanHoi: 'Cặp sách ở dưới bàn.' }, { t: 'It is in front of the bed.', phanHoi: 'Cái bàn ở trước giường; máy tính ở trên bàn.' }],
        goiY: ['Tìm câu có "computer".'], viSaoDung: '"My computer is on the desk."', loiGiai: 'It is <b>on the desk</b>.', giangLai: 'Gạch chân từ khoá của câu hỏi (computer) trong đoạn văn, đọc phần ngay sau nó.', tienBo: 'Em đã tìm đúng thông tin trong bài đọc.',
        nguon: N6A('Review 1 — Grammar: prepositions of place'), kiemTra: K6(),
        tuongTu: { id: 'TA6B-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Đọc lại đoạn văn ở câu trước: <i>"The bed is next to the window. The desk is in front of the bed. My computer is on the desk, and my schoolbag is under the desk."</i> Where is the schoolbag?', phuongAn: [{ t: 'It is under the desk.', dung: true }, { t: 'It is on the desk.', phanHoi: 'Máy tính.' }, { t: 'It is next to the window.', phanHoi: 'Giường.' }, { t: 'It is behind the bed.', phanHoi: 'Không có trong bài.' }], goiY: ['Tìm "schoolbag".'], viSaoDung: 'under the desk.', loiGiai: '<b>under the desk</b>.', giangLai: 'Gạch chân từ khoá.', nguon: N6A('Review 1 — Grammar'), kiemTra: K6() }
      },
      {
        id: 'TA6B-04', muc: 'van-dung', liDoMuc: 'Viết lại câu dùng sở hữu cách.', loai: 'chu',
        de: 'Rewrite the sentence using the possessive case (\'s): <i>This is the bike of my brother.</i>',
        chapNhan: ["this is my brother's bike", "my brother's bike"],
        loi: [{ mau: '\\bbrothers bike\\b', danhDau: 'brothers', nhan: 'Thiếu dấu \'', phanHoi: 'Cần dấu nháy: brother<b>\'s</b>.' }, { mau: '\\bbike of\\b', danhDau: 'of', nhan: 'Chưa đổi cấu trúc', phanHoi: 'Đề yêu cầu dùng \'s: người + \'s + vật.' }, { mau: "\\bbike's\\b|\\bbike brother", danhDau: "bike's", nhan: 'Sai thứ tự', phanHoi: 'Người sở hữu đứng trước: my brother\'s bike.' }],
        goiY: ['Người + \'s + vật.'], viSaoDung: "my brother's bike.", loiGiai: "This is <b>my brother's bike</b>.", giangLai: '"\'s" giống chữ "của" nhưng đặt ngược: xe <i>của</i> anh trai → anh trai<b>\'s</b> xe.', tienBo: 'Em đã dùng sở hữu cách đúng.',
        nguon: N6A('Review 1 — Grammar: possessive case'), kiemTra: K6(),
        tuongTu: { id: 'TA6B-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc, danh từ số nhiều bất quy tắc.', loai: 'chu', de: "Rewrite using the possessive case: <i>These are the toys of the children.</i>", chapNhan: ["these are the children's toys", "the children's toys"], loi: [{ mau: "childrens'|\\bchildrens\\b", danhDau: ["childrens'", 'childrens'], nhan: 'Lỗi sở hữu cách số nhiều', phanHoi: "children (không có -s) → children's." }, { mau: '\\btoys of\\b', danhDau: 'of', nhan: 'Chưa đổi cấu trúc', phanHoi: "Dùng 's." }], goiY: ["children + 's."], viSaoDung: "the children's toys.", loiGiai: "These are <b>the children's toys</b>.", giangLai: "Số nhiều không tận cùng -s → thêm 's.", nguon: N6A('Review 1 — Grammar'), kiemTra: K6() }
      },
      {
        id: 'TA6B-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi giới từ trong nhiều câu.', loai: 'chonNhieu',
        de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) There is a picture in the wall. (2) My shoes are under the bed. (3) The cat is between the sofa and the TV. (4) Mi\'s house is next the park. (5) The clock is on the wall.</i>',
        phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', phanHoi: 'Đúng: between … and ….' }, { t: 'Câu (4)', dung: true }, { t: 'Câu (5)', phanHoi: 'Đúng: on the wall.' }],
        goiY: ['Tranh treo tường dùng giới từ gì?', '"next" có đủ chưa?'], viSaoDung: '(1) on the wall; (4) next to.', loiGiai: 'Câu (1): a picture <b>on</b> the wall. Câu (4): next <b>to</b> the park.', giangLai: 'Hai lỗi hay gặp: "in the wall" (đúng là on) và quên "to" sau next.', tienBo: 'Em đã phát hiện lỗi giới từ.',
        nguon: N6A('Review 1 — Grammar: prepositions of place'), kiemTra: K6(),
        tuongTu: { id: 'TA6B-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) The fridge is in the kitchen. (2) There is a lamp at the desk. (3) The dog is in front the door. (4) My bag is behind the chair.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Đúng.' }], goiY: ['in front … ?'], viSaoDung: '(2) on the desk; (3) in front of.', loiGiai: 'Câu (2), (3).', giangLai: 'Đủ từ, đúng giới từ.', nguon: N6A('Review 1 — Grammar'), kiemTra: K6() }
      },
      {
        id: 'TA6B-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn tả phòng với nhiều giới từ; câu mở.', loai: 'mo',
        de: 'Write a paragraph (<b>40–60 words</b>) to describe your bedroom. Use <b>There is / There are</b> and at least <b>three</b> different prepositions of place.',
        tieuChi: [
          { t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } },
          { t: 'Có There is / There are.', tuDong: { mau: '\\bthere (is|are|\'s)\\b', toiThieu: 1 } },
          { t: 'Có ít nhất 3 giới từ chỉ vị trí.', tuDong: { mau: '\\b(in front of|next to|between|behind|under|on|in|near|opposite)\\b', toiThieu: 3 } },
          { t: 'Không thiếu "to"/"of": next to, in front of.', tuDong: { canhBao: '\\bnext (the|my|a)\\b|\\bin front (the|my|a)\\b', thongBao: 'Có thể thiếu từ: next to / in front of.' } }
        ],
        baiThamKhao: 'My bedroom is small but cosy. There is a bed next to the window. There is a desk in front of the bed, and my lamp is on the desk. There are two posters on the wall. My wardrobe is between the door and the bookshelf. I love reading books in my room.',
        giupViet: '<b>Khung:</b> My bedroom is … There is a … next to … / There are … on … / My … is between … and …<br><b>Kiểm tra:</b> next <b>to</b>, in front <b>of</b>; số ít → There is, số nhiều → There are.',
        goiY: ['Kể 4–5 đồ vật và vị trí của chúng.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Đứng ở cửa phòng, nhìn lần lượt từ trái sang phải, mỗi đồ vật viết một câu.', tienBo: 'Em đã tự tả được căn phòng.',
        nguon: N6A('Review 1 — Grammar: prepositions of place'), kiemTra: K6('Câu mở: kiểm tra sơ bộ, học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'TA6B-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> to describe your classroom. Use at least <b>two</b> prepositions of place.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 2 giới từ.', tuDong: { mau: '\\b(in front of|next to|between|behind|under|on|in|near)\\b', toiThieu: 2 } }, { t: 'Không thiếu to/of.', tuDong: { canhBao: '\\bnext (the|my|a)\\b|\\bin front (the|my|a)\\b', thongBao: 'Có thể thiếu từ: next to / in front of.' } }], baiThamKhao: 'My classroom is on the second floor. There is a big board on the wall. The teacher\'s desk is in front of the board. There are forty desks in the room. My desk is next to the window.', giupViet: 'There is … on … / … is next to …', goiY: ['Bảng, bàn giáo viên, cửa sổ.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Nhìn từ trái sang phải.', nguon: N6A('Review 1 — Grammar'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') }
      }
    ]
  };

  const ta6SoSanh = {
    id: 'ta6-so-sanh-hon', lop: 6, mon: 'anh', phanMon: 'Ngữ pháp', ten: 'So sánh hơn của tính từ',
    sgk: 'SGV Tiếng Anh 6 — Unit 4 "My Neighbourhood" (comparative adjectives)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 4 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['Tính từ miêu tả nơi chốn: big, small, noisy, quiet, modern…', 'Động từ to be'],
    yeuCauCanDat: ['So sánh hai người / vật bằng tính từ so sánh hơn.', 'Viết đúng chính tả: -er, gấp đôi phụ âm, y → ier, more + tính từ dài.', 'Viết lại câu giữ nghĩa bằng tính từ trái nghĩa.', 'Viết đoạn văn so sánh hai nơi.'],
    bai: {
      mucTieu: ['thêm -er đúng chính tả;', 'dùng more với tính từ dài;', 'viết câu so sánh từ số liệu;', 'đổi câu so sánh bằng tính từ trái nghĩa.'],
      khoiDong: { hoi: 'Is your town bigger or smaller than Hanoi?', goiY: 'Ví dụ: "My town is smaller than Hanoi."' },
      trongTam: [
        'Tính từ ngắn (1 âm tiết): <b>adj-er + than</b>: tall → tall<b>er</b> than; big → bi<b>gg</b>er (phụ âm – nguyên âm – phụ âm thì gấp đôi phụ âm cuối); large → large<b>r</b>.',
        'Tính từ 2 âm tiết tận cùng <b>-y</b>: đổi y → <b>ier</b>: noisy → nois<b>ier</b>, busy → bus<b>ier</b>, friendly → friendl<b>ier</b>.',
        'Tính từ dài (2 âm tiết trở lên, không tận cùng -y): <b>more + adj + than</b>: more modern, more beautiful, more peaceful.',
        'Bất quy tắc: good → <b>better</b>, bad → <b>worse</b>.',
        'Không dùng cả hai: ~~more bigger~~. Chỉ chọn một: bigger <b>hoặc</b> more modern.'
      ],
      viDu: { de: 'So sánh: Phố A ồn, phố B yên tĩnh.', loiGiai: 'Street A is <b>noisier than</b> Street B. / Street B is <b>quieter than</b> Street A.' },
      nguon: N6A('Unit 4 "My Neighbourhood" — Objectives: compare two people or things using comparative adjectives'),
      hoiDap: [
        { tu: ['er', 'ngan'], tl: 'Tính từ một âm tiết: thêm -er (tall → taller). Phụ âm–nguyên âm–phụ âm: gấp đôi (big → bigger, hot → hotter).' },
        { tu: ['more', 'dai'], tl: 'Tính từ dài: more + adj (more modern, more interesting).' },
        { tu: ['y', 'ier'], tl: 'Tận cùng -y: y → ier (noisy → noisier, easy → easier).' },
        { tu: ['good', 'better'], tl: 'good → better; bad → worse.' }
      ]
    },
    cauHoi: [
      {
        id: 'TA6C-01', muc: 'co-ban', liDoMuc: 'Viết dạng so sánh hơn, quy tắc gấp đôi phụ âm.', loai: 'chu',
        de: 'Write the correct form: <i>Hanoi is ______ (big) than Hue.</i> <span class="note">Chỉ gõ tính từ đã đổi.</span>',
        chapNhan: ['bigger'],
        loi: [{ mau: '^biger$', danhDau: 'biger', nhan: 'Lỗi chính tả', phanHoi: '"big": phụ âm – nguyên âm – phụ âm → gấp đôi g: bi<b>gg</b>er.' }, { mau: '^more big(ger)?$', danhDau: 'more', nhan: 'Dùng sai "more"', phanHoi: '"big" là tính từ ngắn → thêm -er, không dùng more.' }, { mau: '^biggest$', danhDau: 'biggest', nhan: 'Nhầm so sánh nhất', phanHoi: 'Có "than" → so sánh <b>hơn</b> (-er).' }],
        goiY: ['big: b-i-g.'], viSaoDung: 'big → bigger.', loiGiai: 'Hanoi is <b>bigger</b> than Hue.', giangLai: 'Nhóm gấp đôi hay gặp: big → bigger, hot → hotter, thin → thinner, fat → fatter.', tienBo: 'Em đã nhớ quy tắc gấp đôi phụ âm.',
        nguon: N6A('Unit 4 — Objectives: comparative adjectives'), kiemTra: K6(),
        tuongTu: { id: 'TA6C-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, quy tắc -ier.', loai: 'chu', de: 'Write the correct form: <i>This street is ______ (noisy) than that one.</i> <span class="note">Chỉ gõ tính từ đã đổi.</span>', chapNhan: ['noisier'], loi: [{ mau: '^noisyer$', danhDau: 'noisyer', nhan: 'Lỗi chính tả', phanHoi: 'y → ier: noisier.' }, { mau: '^more noisy$', danhDau: 'more', nhan: 'Dùng sai "more"', phanHoi: 'Tận cùng -y → noisier.' }], goiY: ['y → ier.'], viSaoDung: 'noisier.', loiGiai: '<b>noisier</b>.', giangLai: 'y → ier.', nguon: N6A('Unit 4 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6C-02', muc: 'co-ban', liDoMuc: 'Chọn dạng so sánh hơn của tính từ dài.', loai: 'chon1', de: 'Choose the correct answer: <i>My new school is ______ than my old school.</i>',
        phuongAn: [{ t: 'more modern', dung: true }, { t: 'moderner', phanHoi: '"modern" có hai âm tiết, không tận cùng -y → more modern.' }, { t: 'most modern', phanHoi: 'Có "than" → so sánh hơn, không phải so sánh nhất.' }, { t: 'modern', phanHoi: 'Cần dạng so sánh hơn trước "than".' }],
        goiY: ['mo-dern: mấy âm tiết?'], viSaoDung: 'Tính từ dài → more + adj.', loiGiai: '<b>more modern</b>.', giangLai: 'Đếm âm tiết: 1 → -er; 2 tận cùng y → -ier; còn lại → more.', tienBo: 'Em đã phân biệt tính từ ngắn và dài.',
        nguon: N6A('Unit 4 — Objectives: comparative adjectives'), kiemTra: K6(),
        tuongTu: { id: 'TA6C-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>This book is ______ than that one.</i>', phuongAn: [{ t: 'more interesting', dung: true }, { t: 'interestinger', phanHoi: 'Tính từ dài.' }, { t: 'most interesting', phanHoi: 'Có than.' }, { t: 'interesting', phanHoi: 'Cần so sánh hơn.' }], goiY: ['in-te-res-ting.'], viSaoDung: 'more interesting.', loiGiai: '<b>more interesting</b>.', giangLai: 'Đếm âm tiết.', nguon: N6A('Unit 4 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6C-03', muc: 'van-dung', liDoMuc: 'Tự viết câu so sánh từ số liệu, đúng nghĩa và đúng ngữ pháp.', loai: 'chu', nhieuCachDung: true,
        de: 'Peter is 1.50 m tall. Tom is 1.45 m tall. Write <b>one</b> sentence comparing them. Use <b>tall</b> or <b>short</b>.',
        chapNhan: ['peter is taller than tom', 'tom is shorter than peter'],
        loi: [{ mau: '\\bmore tall\\b|\\bmore short\\b', danhDau: 'more', nhan: 'Dùng sai "more"', phanHoi: 'tall, short là tính từ ngắn → taller, shorter.' }, { mau: '\\btaller then\\b|\\bshorter then\\b', danhDau: 'then', nhan: 'Lỗi chính tả', phanHoi: 'Viết "<b>than</b>", không phải "then".' }, { mau: '^tom is taller than peter$|^peter is shorter than tom$', danhDau: ['taller', 'shorter'], nhan: 'Sai nghĩa', phanHoi: 'Peter cao 1,50 m, Tom 1,45 m. Ai cao hơn?' }],
        goiY: ['Ai cao hơn?', 'S + is + taller than + …'], viSaoDung: 'Câu đúng nghĩa và đúng cấu trúc so sánh hơn.', loiGiai: 'Peter is <b>taller than</b> Tom. / Tom is <b>shorter than</b> Peter.', giangLai: 'Bước 1: so số liệu (1,50 &gt; 1,45 → Peter cao hơn). Bước 2: viết câu theo khung "A is …er than B".', tienBo: 'Em đã chuyển số liệu thành câu so sánh.',
        nguon: N6A('Unit 4 — Objectives: comparative adjectives'), kiemTra: K6('Nhóm biên soạn liệt kê các cách viết đúng; chạy kiểm thử tự động ngày ' + NGAY_SOAN + '.'),
        tuongTu: { id: 'TA6C-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Bag A costs 200,000 dong. Bag B costs 150,000 dong. Write one sentence comparing them. Use <b>cheap</b> or <b>expensive</b>.', chapNhan: ['bag b is cheaper than bag a', 'bag a is more expensive than bag b'], loi: [{ mau: '\\bmore cheap\\b', danhDau: 'more', nhan: 'Dùng sai "more"', phanHoi: 'cheap → cheaper.' }, { mau: '\\bexpensiver\\b', danhDau: 'expensiver', nhan: 'Lỗi dạng so sánh', phanHoi: 'Tính từ dài → more expensive.' }, { mau: '^bag a is cheaper|^bag b is more expensive', danhDau: ['cheaper', 'expensive'], nhan: 'Sai nghĩa', phanHoi: 'Túi B rẻ hơn.' }], goiY: ['Túi nào rẻ hơn?'], viSaoDung: 'Đúng nghĩa.', loiGiai: 'Bag B is <b>cheaper than</b> Bag A. / Bag A is <b>more expensive than</b> Bag B.', giangLai: 'So số liệu trước.', nguon: N6A('Unit 4 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6C-04', muc: 'van-dung', liDoMuc: 'Viết lại câu giữ nghĩa bằng tính từ trái nghĩa, có nhiều đáp án.', loai: 'chu', nhieuCachDung: true,
        de: 'Rewrite the sentence so that it means the same. Begin with the given words.<br><i>My house is smaller than your house.</i><br>→ <b>Your house ______</b>',
        chapNhan: ['your house is bigger than my house', 'your house is bigger than mine', 'your house is larger than my house', 'your house is larger than mine'],
        loi: [{ mau: '\\bsmaller\\b', danhDau: 'smaller', nhan: 'Sai nghĩa', phanHoi: 'Đổi chủ ngữ thì phải đổi tính từ sang <b>trái nghĩa</b>: small ↔ big.' }, { mau: '\\bmore (big|large)\\b', danhDau: 'more', nhan: 'Dùng sai "more"', phanHoi: 'big → bigger; large → larger.' }, { mau: '\\bbiger\\b', danhDau: 'biger', nhan: 'Lỗi chính tả', phanHoi: 'bigger (gấp đôi g).' }],
        goiY: ['Nhà tôi nhỏ hơn ⇔ nhà bạn … hơn?'], viSaoDung: 'small ↔ big; đổi vị trí hai ngôi nhà.', loiGiai: 'Your house <b>is bigger / larger than</b> my house (mine).', giangLai: '"A nhỏ hơn B" cũng có nghĩa là "B to hơn A". Đổi chỗ A, B thì đổi tính từ sang nghĩa ngược lại.', tienBo: 'Em đã dùng tính từ trái nghĩa để giữ nghĩa câu.',
        giupViet: 'Khung: Your house is <b>…er than</b> my house / mine.',
        nguon: N6A('Unit 4 — Objectives: comparative adjectives'), kiemTra: K6('Nhóm biên soạn liệt kê 4 cách viết đúng; giáo viên có thể bổ sung vào "chapNhan".'),
        tuongTu: { id: 'TA6C-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Rewrite so that it means the same.<br><i>The city is noisier than the countryside.</i><br>→ <b>The countryside ______</b>', chapNhan: ['the countryside is quieter than the city', 'the countryside is more peaceful than the city', 'the countryside is calmer than the city'], loi: [{ mau: '\\bnoisier\\b', danhDau: 'noisier', nhan: 'Sai nghĩa', phanHoi: 'Đổi tính từ trái nghĩa: noisy ↔ quiet.' }, { mau: '\\bpeacefuler\\b|\\bquieter then\\b', danhDau: ['peacefuler', 'then'], nhan: 'Lỗi dạng so sánh', phanHoi: 'more peaceful; than.' }], goiY: ['noisy ↔ quiet / peaceful.'], viSaoDung: 'quieter / more peaceful.', loiGiai: 'The countryside is <b>quieter / more peaceful than</b> the city.', giangLai: 'Đổi chỗ → đổi nghĩa tính từ.', nguon: N6A('Unit 4 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6C-05', muc: 'nang-cao', liDoMuc: 'Đánh giá nhiều câu, cần nắm cả ba quy tắc chính tả và more.', loai: 'chonNhieu',
        de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) Ho Chi Minh City is busier than Hoi An. (2) My street is more narrow than yours. (3) The park is more beautiful than the market. (4) This road is wider than that road. (5) Today is hoter than yesterday.</i>',
        phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'narrow → narrower (narrow thường thêm -er).' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', dung: true }, { t: 'Câu (5)', phanHoi: 'hot → ho<b>tt</b>er (gấp đôi t).' }],
        goiY: ['Kiểm tra chính tả từng tính từ.'], viSaoDung: '(1) busier, (3) more beautiful, (4) wider đều đúng.', loiGiai: 'Câu đúng: (1), (3), (4). Sửa: (2) narrower; (5) hotter.', giangLai: 'Ba "bẫy": gấp đôi phụ âm (hotter), y → ier (busier), và tính từ dài mới dùng more.', tienBo: 'Em đã kiểm tra được cả quy tắc chính tả.',
        nguon: N6A('Unit 4 — Objectives: comparative adjectives'), kiemTra: K6(),
        tuongTu: { id: 'TA6C-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) The countryside is more peaceful than the city. (2) My bike is faster than yours. (3) This test is easyer than the last one. (4) Our classroom is more large than theirs. (5) Mai is friendlier than her sister.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', phanHoi: 'easy → easier.' }, { t: 'Câu (4)', phanHoi: 'large → larger.' }, { t: 'Câu (5)', dung: true }], goiY: ['Ba bẫy.'], viSaoDung: '(1), (2), (5).', loiGiai: 'Câu đúng: (1), (2), (5).', giangLai: 'y → ier; tính từ ngắn → -er.', nguon: N6A('Unit 4 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6C-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn so sánh hai nơi với nhiều tính từ; câu mở.', loai: 'mo',
        de: 'Write a paragraph (<b>40–60 words</b>) comparing your neighbourhood with another place you know (a city, a village…). Use at least <b>three</b> comparative adjectives.',
        tieuChi: [
          { t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } },
          { t: 'Có ít nhất 3 cấu trúc so sánh hơn (…er than / more … than / better than).', tuDong: { mau: '\\b(\\w+er|more \\w+|better|worse) than\\b', toiThieu: 3 } },
          { t: 'Không dùng sai: more + …er, hoặc chính tả sai thường gặp.', tuDong: { canhBao: '\\bmore \\w+er\\b|\\b(biger|hoter|noisyer|busyer|easyer|prettyer)\\b', thongBao: 'Có thể có lỗi so sánh hơn.' } }
        ],
        baiThamKhao: 'I live in a small town. My neighbourhood is quieter than Ho Chi Minh City, and the air is cleaner than in the city. The streets in the city are wider and busier than ours, and the buildings are more modern. However, I think my neighbourhood is more peaceful and the people here are friendlier.',
        giupViet: '<b>Ý so sánh:</b> quiet/noisy, clean/dirty, big/small, busy, modern, peaceful, friendly.<br><b>Khung:</b> My neighbourhood is …er than … / … is more … than …<br><b>Kết:</b> I think … is better because …',
        goiY: ['Chọn 3 tiêu chí: độ ồn, không khí, đường phố, con người.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Lập bảng 2 cột (nơi em ở | nơi khác), điền tính từ, rồi mỗi hàng viết một câu so sánh.', tienBo: 'Em đã viết đoạn văn so sánh.',
        nguon: N6A('Unit 4 — Objectives: comparative adjectives; write a paragraph to describe a neighbourhood'), kiemTra: K6('Câu mở: kiểm tra sơ bộ, học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'TA6C-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> comparing two people in your family. Use at least <b>two</b> comparative adjectives.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 2 cấu trúc so sánh hơn.', tuDong: { mau: '\\b(\\w+er|more \\w+|better|worse) than\\b', toiThieu: 2 } }, { t: 'Không dùng more + …er.', tuDong: { canhBao: '\\bmore \\w+er\\b', thongBao: 'Có thể có lỗi so sánh hơn.' } }], baiThamKhao: 'I have an older brother, Minh. He is taller than me and he is stronger too. I am more talkative than him, but he is funnier. My mother says I am more careful than my brother when I do my homework.', giupViet: 'Khung: … is taller / older / more … than …', goiY: ['Chiều cao, tuổi, tính cách.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Lập bảng hai cột.', nguon: N6A('Unit 4 — Objectives'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') }
      }
    ]
  };

  const ta6TuVung = {
    id: 'ta6-tu-vung', lop: 6, mon: 'anh', phanMon: 'Từ vựng', ten: 'Từ vựng: trường học, nhà ở, bạn bè',
    sgk: 'SGV Tiếng Anh 6 — Unit 1 (play / do / have / study + noun); Unit 3 (body parts, appearance, personality); Review 1 (rooms, types of house)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 1, Unit 3 và mục tiêu phần Vocabulary của Review 1 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['Môn học và hoạt động ở trường', 'Các phòng trong nhà'],
    yeuCauCanDat: ['Dùng đúng các kết hợp play / do / have / study + danh từ.', 'Gọi tên các phòng, đồ vật trong nhà.', 'Dùng từ chỉ bộ phận cơ thể, ngoại hình và tính cách để tả bạn.'],
    bai: {
      mucTieu: ['chọn đúng động từ đi với môn học, hoạt động;', 'gọi tên phòng theo công dụng;', 'chọn tính từ tính cách phù hợp;', 'tả bạn thân về ngoại hình và tính cách.'],
      khoiDong: { hoi: 'Name three things you do at school. Dùng play / do / have / study.', goiY: 'Ví dụ: I study English. I play football. I have lunch at school.' },
      trongTam: [
        '<b>play</b> + môn thể thao có bóng, trò chơi, nhạc cụ: play football, play badminton, play the guitar.',
        '<b>do</b> + bài tập, môn võ, thể dục: do homework, do judo, do karate, do exercise.',
        '<b>have</b> + bữa ăn, tiết học: have lunch, have breakfast, have English (lessons). <b>study</b> + môn học: study maths, study science.',
        'Phòng: living room, bedroom, kitchen, bathroom, hall… Đồ vật: wardrobe, fridge, sofa, lamp, chest of drawers…',
        'Ngoại hình: long / short / curly / straight hair, round face, big eyes. <b>has</b> + ngoại hình (She <u>has</u> long hair). Tính cách: kind, friendly, funny, clever, creative, confident, hard-working, shy… <b>is</b> + tính cách (He <u>is</u> funny).'
      ],
      viDu: { de: 'Tả một bạn có tóc ngắn, mặt tròn, hay giúp đỡ người khác.', loiGiai: 'She <b>has</b> short hair and a round face. She <b>is</b> very <b>kind</b>.' },
      nguon: N6A('Unit 1 — Objectives: use the combinations to play, to do, to have, to study + Noun; Unit 3 — Objectives: body parts, appearance and personality; Review 1 — Vocabulary: rooms and types of house'),
      hoiDap: [
        { tu: ['play', 'do', 'have', 'study'], tl: 'play + thể thao có bóng/nhạc cụ; do + homework, judo, exercise; have + bữa ăn, tiết học; study + môn học.' },
        { tu: ['has', 'is', 'ngoai hinh', 'tinh cach'], tl: 'has + ngoại hình (has long hair); is + tính cách (is kind).' }
      ]
    },
    cauHoi: [
      {
        id: 'TA6D-01', muc: 'co-ban', liDoMuc: 'Chọn động từ kết hợp với môn võ.', loai: 'chon1', de: 'Choose the correct answer: <i>We ______ judo at the sports club on Saturdays.</i>',
        phuongAn: [{ t: 'do', dung: true }, { t: 'play', phanHoi: '"play" đi với môn thể thao có bóng (football, badminton). Môn võ dùng "do".' }, { t: 'have', phanHoi: '"have" đi với bữa ăn, tiết học.' }, { t: 'study', phanHoi: '"study" đi với môn học.' }],
        goiY: ['judo, karate là môn võ.'], viSaoDung: 'do judo.', loiGiai: 'We <b>do</b> judo…', giangLai: 'Mẹo: có quả bóng → play; võ, bài tập → do.', tienBo: 'Em đã chọn đúng kết hợp từ.',
        nguon: N6A('Unit 1 — Objectives: play / do / have / study + Noun'), kiemTra: K6(),
        tuongTu: { id: 'TA6D-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>I ______ lunch at school every day.</i>', phuongAn: [{ t: 'have', dung: true }, { t: 'do', phanHoi: 'do + homework, judo.' }, { t: 'play', phanHoi: 'play + thể thao.' }, { t: 'study', phanHoi: 'study + môn học.' }], goiY: ['Bữa ăn.'], viSaoDung: 'have lunch.', loiGiai: '<b>have</b>.', giangLai: 'have + bữa ăn.', nguon: N6A('Unit 1 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6D-02', muc: 'co-ban', liDoMuc: 'Gọi tên phòng theo công dụng.', loai: 'chon1', de: 'Choose the correct answer: <i>We cook meals in the ______.</i>',
        phuongAn: [{ t: 'kitchen', dung: true }, { t: 'bedroom', phanHoi: 'Phòng ngủ.' }, { t: 'bathroom', phanHoi: 'Phòng tắm.' }, { t: 'living room', phanHoi: 'Phòng khách.' }],
        goiY: ['Nấu ăn ở đâu?'], viSaoDung: 'kitchen = nhà bếp.', loiGiai: '<b>kitchen</b>.', giangLai: 'cook (nấu) – kitchen (bếp) có cùng âm "k" đầu.', tienBo: 'Em đã nhớ tên phòng.',
        nguon: N6A('Review 1 — Vocabulary: rooms and types of house'), kiemTra: K6(),
        tuongTu: { id: 'TA6D-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>We sleep in the ______.</i>', phuongAn: [{ t: 'bedroom', dung: true }, { t: 'kitchen', phanHoi: 'Bếp.' }, { t: 'hall', phanHoi: 'Sảnh/hành lang.' }, { t: 'bathroom', phanHoi: 'Phòng tắm.' }], goiY: ['bed = giường.'], viSaoDung: 'bedroom.', loiGiai: '<b>bedroom</b>.', giangLai: 'bed + room.', nguon: N6A('Review 1 — Vocabulary'), kiemTra: K6() }
      },
      {
        id: 'TA6D-03', muc: 'van-dung', liDoMuc: 'Suy ra tính từ tính cách từ hành động mô tả; nhiều đáp án.', loai: 'chu', nhieuCachDung: true,
        de: 'Complete with <b>one</b> personality adjective: <i>She always helps other people. She is very ______.</i>',
        chapNhan: ['kind', 'helpful', 'caring'],
        loi: [{ mau: '^(clever|creative|sporty|confident)$', danhDau: '*', nhan: 'Chưa khớp nghĩa', phanHoi: 'Từ này đúng là tính cách, nhưng câu nói bạn ấy <b>luôn giúp đỡ người khác</b>. Tính từ nào nói về lòng tốt?' }, { mau: '^funny$', danhDau: 'funny', nhan: 'Chưa khớp nghĩa', phanHoi: '"funny" = hài hước, làm người khác cười.' }, { mau: '^kindly$|^help$', danhDau: '*', nhan: 'Sai từ loại', phanHoi: 'Sau "is very" cần <b>tính từ</b>: kind / helpful.' }],
        goiY: ['Người hay giúp đỡ người khác thì…'], viSaoDung: 'kind / helpful / caring đều diễn tả lòng tốt.', loiGiai: 'She is very <b>kind</b> (hoặc <b>helpful</b>, <b>caring</b>).', giangLai: 'Đọc hành động → đoán tính cách: hay giúp đỡ → kind; làm mọi người cười → funny; học giỏi → clever.', tienBo: 'Em đã chọn tính từ khớp với hành động.',
        nguon: N6A('Unit 3 — Objectives: words for personality'), kiemTra: K6('Nhóm biên soạn chấp nhận 3 tính từ đồng nghĩa; giáo viên có thể bổ sung.'),
        tuongTu: { id: 'TA6D-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Complete with one personality adjective: <i>He tells jokes and makes us laugh a lot. He is ______.</i>', chapNhan: ['funny'], loi: [{ mau: '^(kind|clever|creative|shy)$', danhDau: '*', nhan: 'Chưa khớp nghĩa', phanHoi: 'Làm mọi người cười → ?' }, { mau: '^fun$', danhDau: 'fun', nhan: 'Gần đúng', phanHoi: 'Tả tính cách người hay pha trò, dùng "funny".' }], goiY: ['Làm cười.'], viSaoDung: 'funny.', loiGiai: '<b>funny</b>.', giangLai: 'Hành động → tính cách.', nguon: N6A('Unit 3 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6D-04', muc: 'van-dung', liDoMuc: 'Tìm từ khác nhóm nghĩa.', loai: 'chon1', de: 'Find the odd one out (từ khác nhóm):',
        phuongAn: [{ t: 'arm', phanHoi: 'Bộ phận cơ thể.' }, { t: 'leg', phanHoi: 'Bộ phận cơ thể.' }, { t: 'nose', phanHoi: 'Bộ phận cơ thể.' }, { t: 'kind', dung: true }],
        goiY: ['Ba từ cùng chỉ bộ phận cơ thể.'], viSaoDung: '"kind" là tính từ tính cách.', loiGiai: '<b>kind</b>.', giangLai: 'Đặt tên nhóm cho từng từ; từ nào không cùng nhóm là đáp án.', tienBo: 'Em đã phân nhóm từ vựng.',
        nguon: N6A('Unit 3 — Objectives: body parts, appearance and personality'), kiemTra: K6(),
        tuongTu: { id: 'TA6D-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Find the odd one out:', phuongAn: [{ t: 'kitchen', phanHoi: 'Phòng.' }, { t: 'bedroom', phanHoi: 'Phòng.' }, { t: 'bathroom', phanHoi: 'Phòng.' }, { t: 'compass', dung: true }], goiY: ['Ba từ là tên phòng.'], viSaoDung: 'compass = com-pa (đồ dùng học tập).', loiGiai: '<b>compass</b>.', giangLai: 'Đặt tên nhóm.', nguon: N6A('Unit 1 — Objectives; Review 1 — Vocabulary'), kiemTra: K6() }
      },
      {
        id: 'TA6D-05', muc: 'nang-cao', liDoMuc: 'Đánh giá nhiều câu, kết hợp collocation và has/is.', loai: 'chonNhieu',
        de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) I do my homework every evening. (2) They play football after school. (3) We study science on Tuesdays. (4) She plays judo at weekends. (5) He does lunch at 12 o\'clock.</i>',
        phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Môn võ → <b>does</b> judo.' }, { t: 'Câu (5)', phanHoi: 'Bữa ăn → <b>has</b> lunch.' }],
        goiY: ['Kiểm tra động từ đi kèm từng danh từ.'], viSaoDung: '(1), (2), (3) dùng đúng kết hợp.', loiGiai: 'Đúng: (1), (2), (3). Sửa: (4) does judo; (5) has lunch.', giangLai: 'Lập bảng 4 cột play | do | have | study và xếp từ vào.', tienBo: 'Em đã kiểm tra được kết hợp từ.',
        nguon: N6A('Unit 1 — Objectives: play / do / have / study + Noun'), kiemTra: K6(),
        tuongTu: { id: 'TA6D-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc, ngoại hình/tính cách.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) She has long black hair. (2) He has a round face. (3) My friend is very creative. (4) She has kind. (5) He is curly hair.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Tính cách → is kind.' }, { t: 'Câu (5)', phanHoi: 'Ngoại hình → has curly hair.' }], goiY: ['has + ngoại hình; is + tính cách.'], viSaoDung: '(1), (2), (3).', loiGiai: 'Đúng: (1), (2), (3).', giangLai: 'has + hair/face; is + tính từ.', nguon: N6A('Unit 3 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6D-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn tả bạn, dùng đúng has/is và từ vựng; câu mở.', loai: 'mo',
        de: 'Write a paragraph (<b>30–50 words</b>) about your best friend. Describe his/her <b>appearance</b> (hair, face, eyes…) and <b>personality</b>.',
        tieuChi: [
          { t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } },
          { t: 'Có ít nhất 2 từ về ngoại hình.', tuDong: { mau: '\\b(hair|face|eyes|nose|tall|short|thin|slim)\\b', toiThieu: 2 } },
          { t: 'Có ít nhất 1 tính từ tính cách.', tuDong: { mau: '\\b(kind|friendly|funny|clever|creative|confident|caring|hard-working|sporty|shy|curious|patient|talkative|helpful|active)\\b', toiThieu: 1 } },
          { t: 'Dùng has với ngoại hình (không viết "he have / she have").', tuDong: { canhBao: '\\b(he|she) have\\b|\\b(is|are) (long|short|curly|straight) hair\\b', thongBao: 'Có thể có lỗi: he/she has + ngoại hình.' } }
        ],
        baiThamKhao: 'My best friend is Linh. She is tall and slim. She has long straight hair and big black eyes. Linh is very kind and hard-working. She often helps me with maths. She is also funny, so we laugh a lot together.',
        giupViet: '<b>Khung:</b> My best friend is … He/She is tall/short… He/She has … hair and … eyes. He/She is very … (tính cách) because …',
        goiY: ['Ngoại hình: has…; tính cách: is…'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Viết 2 câu ngoại hình (has …), 2 câu tính cách (is …), 1 câu ví dụ cho tính cách.', tienBo: 'Em đã tả bạn bằng từ vựng đúng.',
        nguon: N6A('Unit 3 — Objectives: body parts, appearance and personality'), kiemTra: K6('Câu mở: kiểm tra sơ bộ, học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'TA6D-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about a family member: appearance and personality.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có từ ngoại hình.', tuDong: { mau: '\\b(hair|face|eyes|nose|tall|short|thin|slim)\\b', toiThieu: 2 } }, { t: 'Có tính từ tính cách.', tuDong: { mau: '\\b(kind|friendly|funny|clever|creative|confident|caring|hard-working|patient|helpful)\\b', toiThieu: 1 } }, { t: 'has với ngoại hình.', tuDong: { canhBao: '\\b(he|she) have\\b', thongBao: 'Có thể có lỗi: he/she has.' } }], baiThamKhao: 'My grandmother is short and a little thin. She has short grey hair and a round face. She is very patient and caring. She tells me interesting stories every evening.', giupViet: 'has … / is …', goiY: ['has / is.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Ngoại hình rồi tính cách.', nguon: N6A('Unit 3 — Objectives'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') }
      }
    ]
  };

  const TEXT_MINH = '<i>"I live in a small town. My neighbourhood is quiet and green. There is a park near my house, and there are many trees along the streets. People here are friendly. However, there isn\'t a big supermarket, so we go to the city centre to buy things."</i> — Minh';
  const ta6DocViet = {
    id: 'ta6-doc-viet', lop: 6, mon: 'anh', phanMon: 'Đọc hiểu – Viết', ten: 'Đọc hiểu và viết đoạn văn miêu tả ngắn',
    sgk: 'SGV Tiếng Anh 6 — Unit 1 (write a paragraph about one\'s school); Unit 4 (read about a neighbourhood; write a paragraph to describe a neighbourhood)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 1 và Unit 4 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['There is / There are', 'Tính từ miêu tả nơi chốn', 'Liên từ and, but, so'],
    yeuCauCanDat: ['Đọc lấy thông tin chính và thông tin chi tiết trong đoạn văn ngắn.', 'Nối câu bằng and / but / so.', 'Nhận ra câu không liên quan đến chủ đề đoạn văn.', 'Viết đoạn văn miêu tả trường học / khu phố.'],
    bai: {
      mucTieu: ['tìm thông tin chi tiết trong bài đọc;', 'phân biệt True / False;', 'nối câu bằng but, so;', 'viết đoạn văn có câu chủ đề, chi tiết và câu kết.'],
      khoiDong: { hoi: 'Describe your neighbourhood in one sentence.', goiY: 'Ví dụ: "My neighbourhood is busy and noisy."' },
      trongTam: [
        '<b>Đọc chi tiết</b>: gạch chân từ khoá của câu hỏi, tìm từ đó (hoặc từ cùng nghĩa) trong bài, đọc kĩ câu chứa nó.',
        '<b>and</b>: thêm ý cùng chiều; <b>but</b>: ý trái ngược; <b>so</b>: kết quả (vì vậy).',
        'Đoạn văn miêu tả gồm: <b>câu chủ đề</b> (giới thiệu nơi tả) → <b>3–4 câu chi tiết</b> (There is / There are, tính từ) → <b>câu kết</b> (cảm nghĩ: I love… / I think…).',
        'Mọi câu trong đoạn phải <b>liên quan đến chủ đề</b>; câu lạc đề cần bỏ.'
      ],
      viDu: { de: 'Nối: "My school is old. It is very beautiful." (but)', loiGiai: 'My school is old, <b>but</b> it is very beautiful.' },
      nguon: N6A('Unit 1 — Objectives: write a paragraph about one\'s school; Unit 4 — Objectives: read for specific information about a neighbourhood, write a paragraph to describe a neighbourhood'),
      hoiDap: [
        { tu: ['but', 'so', 'and'], tl: 'and: thêm ý; but: trái ngược; so: kết quả.' },
        { tu: ['doc', 'reading', 'tu khoa'], tl: 'Gạch chân từ khoá câu hỏi rồi tìm trong bài.' },
        { tu: ['doan van', 'paragraph', 'viet'], tl: 'Câu chủ đề → chi tiết → câu kết.' }
      ]
    },
    cauHoi: [
      {
        id: 'TA6E-01', muc: 'co-ban', liDoMuc: 'Đọc lấy ý chính.', loai: 'chon1', de: 'Read the text:<br>' + TEXT_MINH + '<br><br>What is Minh\'s neighbourhood like?',
        phuongAn: [{ t: 'It is quiet and green.', dung: true }, { t: 'It is noisy and busy.', phanHoi: 'Bài viết "quiet" (yên tĩnh).' }, { t: 'It has a big supermarket.', phanHoi: 'Bài nói "there isn\'t a big supermarket".' }, { t: 'It is in the city centre.', phanHoi: 'Minh sống ở thị trấn nhỏ, phải đi vào trung tâm thành phố để mua sắm.' }],
        goiY: ['Tìm câu có "My neighbourhood is …".'], viSaoDung: '"My neighbourhood is quiet and green."', loiGiai: '<b>It is quiet and green.</b>', giangLai: '"What is … like?" hỏi về đặc điểm → tìm tính từ đi sau "is".', tienBo: 'Em đã tìm đúng thông tin.',
        nguon: N6A('Unit 4 — Objectives: read for specific information about a neighbourhood'), kiemTra: K6(),
        tuongTu: { id: 'TA6E-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Đọc lại đoạn văn của Minh:<br>' + TEXT_MINH + '<br><br>Where do they go to buy things?', phuongAn: [{ t: 'To the city centre.', dung: true }, { t: 'To the park.', phanHoi: 'Công viên ở gần nhà.' }, { t: 'To a big supermarket in the town.', phanHoi: 'Thị trấn không có siêu thị lớn.' }, { t: 'To their neighbours\' houses.', phanHoi: 'Không có trong bài.' }], goiY: ['Tìm "buy things".'], viSaoDung: 'go to the city centre to buy things.', loiGiai: '<b>To the city centre.</b>', giangLai: 'Tìm từ khoá.', nguon: N6A('Unit 4 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6E-02', muc: 'co-ban', liDoMuc: 'Xác định True / False dựa vào chi tiết.', loai: 'chon1', de: 'Read the text:<br>' + TEXT_MINH + '<br><br><b>True or False?</b> <i>There is a big supermarket in Minh\'s neighbourhood.</i>',
        phuongAn: [{ t: 'True', phanHoi: 'Bài viết "there <b>isn\'t</b> a big supermarket".' }, { t: 'False', dung: true }],
        goiY: ['Chú ý "isn\'t".'], viSaoDung: 'Bài nói không có siêu thị lớn.', loiGiai: '<b>False</b> — "there isn\'t a big supermarket".', giangLai: 'Câu True/False hay "bẫy" ở từ phủ định nhỏ như isn\'t, don\'t, never.', tienBo: 'Em đã để ý từ phủ định.',
        nguon: N6A('Unit 4 — Objectives: read for specific information'), kiemTra: K6(),
        tuongTu: { id: 'TA6E-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Đọc lại đoạn văn của Minh:<br>' + TEXT_MINH + '<br><br><b>True or False?</b> <i>People in Minh\'s neighbourhood are friendly.</i>', phuongAn: [{ t: 'True', dung: true }, { t: 'False', phanHoi: '"People here are friendly."' }], goiY: ['Tìm "People".'], viSaoDung: 'True.', loiGiai: '<b>True</b>.', giangLai: 'Tìm câu chứa từ khoá.', nguon: N6A('Unit 4 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6E-03', muc: 'van-dung', liDoMuc: 'Trả lời câu hỏi bằng câu/cụm từ tự viết.', loai: 'chu', nhieuCachDung: true,
        de: 'Read the text:<br>' + TEXT_MINH + '<br><br>Answer the question: <b>What is there near Minh\'s house?</b>',
        chapNhan: ['a park', 'park', 'there is a park', 'there is a park near his house', "there is a park near minh's house", "there's a park near his house", "there's a park"],
        loi: [{ mau: 'supermarket', danhDau: 'supermarket', nhan: 'Sai thông tin', phanHoi: 'Không có siêu thị lớn. Đọc lại câu có "near my house".' }, { mau: '\\btrees?\\b', danhDau: ['trees', 'tree'], nhan: 'Sai thông tin', phanHoi: 'Cây ở dọc các con phố. Câu hỏi về thứ ở <b>gần nhà</b> Minh.' }, { mau: '\\bthere are a park\\b', danhDau: 'are', nhan: 'Lỗi ngữ pháp', phanHoi: '"a park" số ít → There <b>is</b>.' }],
        goiY: ['Tìm "near my house".'], viSaoDung: '"There is a park near my house."', loiGiai: 'There is <b>a park</b> near his house.', giangLai: 'Câu hỏi "What is there…?" → trả lời "There is …". Nhớ đổi "my" (của Minh) thành "his".', tienBo: 'Em đã trả lời đúng thông tin chi tiết.',
        nguon: N6A('Unit 4 — Objectives: read for specific information about a neighbourhood'), kiemTra: K6('Nhóm biên soạn liệt kê các cách trả lời đúng; giáo viên có thể bổ sung.'),
        tuongTu: { id: 'TA6E-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Đọc lại đoạn văn của Minh:<br>' + TEXT_MINH + '<br><br>Answer: <b>Why do they go to the city centre?</b>', chapNhan: ['to buy things', 'they go there to buy things', "because there isn't a big supermarket", "because there isn't a big supermarket in their neighbourhood", 'because there is not a big supermarket', 'to buy things because there isn\'t a big supermarket'], loi: [{ mau: '\\bpark\\b', danhDau: 'park', nhan: 'Sai thông tin', phanHoi: 'Đọc lại câu cuối.' }], goiY: ['Câu cuối có "so".'], viSaoDung: 'Để mua sắm vì không có siêu thị lớn.', loiGiai: '<b>To buy things</b> (because there isn\'t a big supermarket).', giangLai: '"so" nối nguyên nhân → kết quả.', nguon: N6A('Unit 4 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6E-04', muc: 'van-dung', liDoMuc: 'Nối hai câu bằng liên từ đúng nghĩa.', loai: 'chu', nhieuCachDung: true,
        de: 'Combine the two sentences using <b>but</b>: <i>My street is narrow. It is very clean.</i>',
        chapNhan: ['my street is narrow but it is very clean', 'my street is narrow but very clean', "my street is narrow but it's very clean"],
        loi: [{ mau: '\\bso\\b', danhDau: 'so', nhan: 'Sai liên từ', phanHoi: 'Đề yêu cầu "but" (ý trái ngược): hẹp nhưng sạch.' }, { mau: '\\band\\b', danhDau: 'and', nhan: 'Sai liên từ', phanHoi: 'Đề yêu cầu "but".' }, { mau: '^but\\b', danhDau: 'but', nhan: 'Sai vị trí liên từ', phanHoi: '"but" đứng giữa hai mệnh đề.' }],
        goiY: ['Câu 1 + but + câu 2.'], viSaoDung: 'Hai ý trái ngược nối bằng but.', loiGiai: 'My street is narrow, <b>but</b> it is very clean.', giangLai: '"Hẹp" (chưa tốt) và "sạch" (tốt) → hai ý ngược chiều → but.', tienBo: 'Em đã nối câu đúng.',
        nguon: N6A('Unit 4 — Objectives: write a paragraph to describe a neighbourhood'), kiemTra: K6('Chấp nhận cả cách viết có hoặc không có dấu phẩy, có hoặc không lặp "it is".'),
        tuongTu: { id: 'TA6E-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc, liên từ so.', loai: 'chu', nhieuCachDung: true, de: 'Combine using <b>so</b>: <i>There isn\'t a cinema in my town. We watch films at home.</i>', chapNhan: ["there isn't a cinema in my town so we watch films at home", 'there is not a cinema in my town so we watch films at home', 'there is no cinema in my town so we watch films at home'], loi: [{ mau: '\\bbut\\b', danhDau: 'but', nhan: 'Sai liên từ', phanHoi: 'Đề yêu cầu so (kết quả).' }, { mau: '^so\\b', danhDau: 'so', nhan: 'Sai vị trí liên từ', phanHoi: 'so đứng trước mệnh đề kết quả.' }], goiY: ['Nguyên nhân + so + kết quả.'], viSaoDung: 'so = vì vậy.', loiGiai: 'There isn\'t a cinema in my town, <b>so</b> we watch films at home.', giangLai: 'so = vì vậy.', nguon: N6A('Unit 4 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6E-05', muc: 'nang-cao', liDoMuc: 'Đánh giá tính thống nhất của đoạn văn, tìm câu lạc đề.', loai: 'chonNhieu',
        de: 'Paragraph topic: <b>My school</b>. <b>Chọn TẤT CẢ</b> các câu <b>không liên quan</b> đến chủ đề.<br><i>(1) My school is in the city centre. (2) It has three buildings and a big yard. (3) My favourite food is pizza. (4) There are thirty classrooms and a library. (5) My cousin lives in Da Nang.</i>',
        phuongAn: [{ t: 'Câu (1)', phanHoi: 'Nói về vị trí trường → liên quan.' }, { t: 'Câu (2)', phanHoi: 'Nói về trường → liên quan.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Nói về trường → liên quan.' }, { t: 'Câu (5)', dung: true }],
        goiY: ['Hỏi mỗi câu: câu này có nói về trường không?'], viSaoDung: '(3) đồ ăn yêu thích, (5) anh họ — không nói về trường.', loiGiai: 'Câu (3) và (5) lạc đề.', giangLai: 'Đặt chủ đề lên đầu, đọc từng câu và hỏi "câu này kể thêm điều gì về trường?" — không trả lời được thì bỏ.', tienBo: 'Em đã giữ đoạn văn đúng chủ đề.',
        nguon: N6A('Unit 1 — Objectives: write a paragraph about one\'s school'), kiemTra: K6(),
        tuongTu: { id: 'TA6E-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: 'Topic: <b>My neighbourhood</b>. <b>Chọn TẤT CẢ</b> các câu <b>không liên quan</b>.<br><i>(1) My neighbourhood is busy. (2) I like playing computer games. (3) There is a market and a temple. (4) My English teacher is very kind. (5) The streets are wide and clean.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Liên quan.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', phanHoi: 'Liên quan.' }, { t: 'Câu (4)', dung: true }, { t: 'Câu (5)', phanHoi: 'Liên quan.' }], goiY: ['Câu nào không nói về khu phố?'], viSaoDung: '(2), (4).', loiGiai: 'Câu (2) và (4).', giangLai: 'Hỏi từng câu.', nguon: N6A('Unit 4 — Objectives'), kiemTra: K6() }
      },
      {
        id: 'TA6E-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn văn miêu tả có bố cục; câu mở.', loai: 'mo',
        de: 'Write a paragraph (<b>50–70 words</b>) to describe your neighbourhood. Include a topic sentence, at least <b>two</b> sentences with There is / There are, and your opinion at the end.',
        tieuChi: [
          { t: 'Độ dài 50–70 từ.', tuDong: { soTu: [50, 70] } },
          { t: 'Có ít nhất 2 câu There is / There are.', tuDong: { mau: '\\bthere (is|are|isn\'t|aren\'t|\'s)\\b', toiThieu: 2 } },
          { t: 'Có câu nêu cảm nghĩ (I like / I love / I think…).', tuDong: { mau: '\\b(i like|i love|i think|i enjoy|i want)\\b', toiThieu: 1 } },
          { t: 'Dùng đúng There is + số ít / There are + số nhiều.', tuDong: { canhBao: '\\bthere is (many|some|two|three|four|five|lots)\\b|\\bthere are (a|an|one)\\b', thongBao: 'Có thể có lỗi There is / There are.' } }
        ],
        baiThamKhao: 'I live in a busy neighbourhood in Vung Tau. There is a big market near my house, and there are many small shops along the street. There is also a beautiful park where children play in the evening. The streets are a bit noisy, but people are very friendly. I love my neighbourhood because it is lively and convenient.',
        giupViet: '<b>Bố cục:</b> (1) Câu chủ đề: I live in a … neighbourhood. (2) Chi tiết: There is … / There are … / The streets are … (3) Cảm nghĩ: I love/like my neighbourhood because …<br><b>Kiểm tra:</b> There is + số ít; There are + số nhiều.',
        goiY: ['Bắt đầu: "I live in a … neighbourhood."'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Viết 5 câu: 1 câu chủ đề, 3 câu chi tiết, 1 câu cảm nghĩ.', tienBo: 'Em đã viết được đoạn văn miêu tả có bố cục.',
        nguon: N6A('Unit 4 — Objectives: write a paragraph to describe a neighbourhood'), kiemTra: K6('Câu mở: kiểm tra sơ bộ, học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'TA6E-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>40–60 words</b> to describe your school. Use There is / There are and end with your opinion.', tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có There is / There are.', tuDong: { mau: '\\bthere (is|are|\'s)\\b', toiThieu: 1 } }, { t: 'Có cảm nghĩ.', tuDong: { mau: '\\b(i like|i love|i think|i enjoy)\\b', toiThieu: 1 } }, { t: 'There is/are đúng.', tuDong: { canhBao: '\\bthere is (many|some|two|three|lots)\\b|\\bthere are (a|an|one)\\b', thongBao: 'Có thể có lỗi There is / There are.' } }], baiThamKhao: 'My school is a secondary school in my town. It has two buildings and a large yard with many trees. There are twenty-four classrooms, a library and a computer room. There is also a small garden. I love my school because my teachers and friends are very nice.', giupViet: 'Chủ đề → There is/are → cảm nghĩ.', goiY: ['5 câu.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Bố cục 3 phần.', nguon: N6A('Unit 1 — Objectives'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') }
      }
    ]
  };

  /* ------------------------------------------------------------------
     DANH MỤC CẢ 4 KHỐI — tên chủ đề dự kiến theo mạch nội dung,
     CHƯA đối chiếu số bài / Unit / trang. "id" chỉ có ở chủ đề đã soạn.
     ------------------------------------------------------------------ */
  const danhMuc = {
    6: {
      khtn: [['Mở đầu', 'Mở đầu về Khoa học tự nhiên (an toàn, kính lúp, kính hiển vi, đo lường)', null, 'Chương I · Bài 1–8 · SGV tr. 18'], ['Hóa học', 'Các thể của chất và sự chuyển thể', 'hh6-the-chat', 'Bài 9–10 · SGV tr. 44'], ['Hóa học', 'Oxygen và không khí', 'hh6-oxygen-khong-khi', 'Bài 11 · SGV tr. 61'], ['Hóa học', 'Vật liệu, nguyên liệu, nhiên liệu, lương thực – thực phẩm', null, 'Chương III · Bài 12–15 · SGV tr. 71'], ['Hóa học', 'Hỗn hợp và tách chất khỏi hỗn hợp', 'hh6-hon-hop', 'Bài 16–17 · SGV tr. 91'], ['Sinh học', 'Tế bào – đơn vị cơ sở của sự sống', 'sh6-te-bao', 'Bài 18–21 · SGV tr. 106'], ['Sinh học', 'Từ tế bào đến cơ thể', null, 'Chương VI · Bài 22–24 · SGV tr. 119'], ['Sinh học', 'Đa dạng thế giới sống', 'sh6-da-dang-song', 'Bài 25–39 · SGV tr. 129'], ['Vật lí', 'Lực trong đời sống', 'vl6-luc', 'Bài 40–45 · SGV tr. 178'], ['Vật lí', 'Năng lượng', 'vl6-nang-luong', 'Bài 46–51 · SGV tr. 197'], ['Vật lí', 'Trái Đất và bầu trời', null, 'Chương X · Bài 52–55 · SGV tr. 215']],
      toan: [['Số và Đại số', 'Tập hợp các số tự nhiên', 'toan6-so-tu-nhien', 'Chương I · Bài 1–7 · SGV tr. 26'], ['Số và Đại số', 'Tính chia hết trong tập hợp số tự nhiên', 'toan6-chia-het', 'Chương II · Bài 8–12 · SGV tr. 50'], ['Số và Đại số', 'Số nguyên', 'toan6-so-nguyen', 'Chương III · Bài 13–17 · SGV tr. 73'], ['Số và Đại số', 'Phân số', 'toan6-phan-so', 'Chương VI · Bài 23–27 · SGV tr. 131'], ['Số và Đại số', 'Số thập phân', 'toan6-so-thap-phan', 'Chương VII · Bài 28–31 · SGV tr. 150']],
      anh: [['Ngữ pháp', 'Thì hiện tại đơn và hiện tại tiếp diễn', 'ta6-hien-tai', 'Unit 1, Unit 3'], ['Ngữ pháp', 'Giới từ chỉ vị trí và sở hữu cách', 'ta6-gioi-tu', 'Units 1–3 (Review 1)'], ['Ngữ pháp', 'So sánh hơn của tính từ', 'ta6-so-sanh-hon', 'Unit 4'], ['Từ vựng', 'Trường học, nhà ở, bạn bè', 'ta6-tu-vung', 'Units 1–3'], ['Đọc hiểu – Viết', 'Đọc hiểu và viết đoạn văn miêu tả ngắn', 'ta6-doc-viet', 'Unit 1, Unit 4'], ['Ngữ pháp', 'Các Unit 5–12 (danh từ đếm được/không đếm được, so sánh nhất, quá khứ đơn, tương lai…)', null, 'Chờ đối chiếu SGV từng Unit']]
    },
    7: {
      khtn: [['Vật lí', 'Tốc độ chuyển động', 'vl7-toc-do', 'Bài 8 · tr. 45'], ['Vật lí', 'Đo tốc độ; Đồ thị quãng đường – thời gian', null, 'Bài 9–10 · tr. 49'], ['Vật lí', 'Âm thanh', null, 'Chương IV · Bài 12–14 · tr. 60'], ['Vật lí', 'Ánh sáng', null, 'Chương V · Bài 15–17 · tr. 72'], ['Vật lí', 'Từ', null, 'Chương VI · Bài 18–20 · tr. 86'], ['Hóa học', 'Nguyên tử', 'hh7-nguyen-tu', 'Bài 2 · tr. 14'], ['Hóa học', 'Nguyên tố hoá học', null, 'Bài 3 · tr. 19'], ['Hóa học', 'Sơ lược về bảng tuần hoàn các nguyên tố hoá học', null, 'Bài 4 · tr. 23'], ['Hóa học', 'Phân tử – Liên kết hoá học', null, 'Chương II · Bài 5–7 · tr. 32'], ['Sinh học', 'Quang hợp ở thực vật', 'sh7-quang-hop', 'Bài 22 · tr. 101'], ['Sinh học', 'Một số yếu tố ảnh hưởng đến quang hợp', null, 'Bài 23 · tr. 104'], ['Sinh học', 'Hô hấp tế bào', null, 'Bài 25 · tr. 111'], ['Sinh học', 'Trao đổi khí ở sinh vật', null, 'Bài 28 · tr. 118'], ['Sinh học', 'Trao đổi nước và chất dinh dưỡng ở thực vật', null, 'Bài 30 · tr. 127'], ['Sinh học', 'Cảm ứng, sinh trưởng và sinh sản']],
      toan: [['Số và Đại số', 'Số hữu tỉ', 'toan7-so-huu-ti'], ['Số và Đại số', 'Số thực', 'toan7-so-thuc'], ['Số và Đại số', 'Tỉ lệ thức và đại lượng tỉ lệ', 'toan7-ti-le-thuc'], ['Số và Đại số', 'Biểu thức đại số và đa thức một biến', 'toan7-da-thuc']],
      anh: [['Ngữ pháp – Viết', 'Diễn đạt sở thích bằng thì hiện tại đơn', 'ta7-so-thich'], ['Ngữ pháp', 'Thì quá khứ đơn'], ['Ngữ pháp', 'So sánh: like, as … as, different from'], ['Đọc hiểu', 'Đọc đoạn văn thông tin ngắn'], ['Viết', 'Viết email ngắn']]
    },
    8: {
      khtn: [['Vật lí', 'Khối lượng riêng và áp suất'], ['Vật lí', 'Tác dụng làm quay của lực'], ['Vật lí', 'Điện'], ['Vật lí', 'Nhiệt'], ['Hóa học', 'Phản ứng hóa học'], ['Hóa học', 'Mol và tính theo phương trình hóa học'], ['Hóa học', 'Acid – base – muối'], ['Sinh học', 'Cơ thể người'], ['Sinh học', 'Sinh vật và môi trường']],
      toan: [['Số và Đại số', 'Đa thức nhiều biến', 'toan8-da-thuc', 'Chương I · Bài 1–5 · tr. 5'], ['Số và Đại số', 'Hằng đẳng thức đáng nhớ và ứng dụng', 'toan8-hang-dang-thuc', 'Chương II · Bài 6–9 · tr. 29'], ['Số và Đại số', 'Phân thức đại số'], ['Số và Đại số', 'Phương trình bậc nhất một ẩn'], ['Số và Đại số', 'Hàm số bậc nhất']],
      anh: [['Ngữ pháp', 'Động từ chỉ sở thích + V-ing / to V'], ['Ngữ pháp', 'Câu đơn và câu ghép'], ['Ngữ pháp', 'Câu điều kiện loại 1'], ['Đọc hiểu', 'Đọc hiểu bài báo ngắn'], ['Viết', 'Viết đoạn văn nêu ý kiến']]
    },
    9: {
      khtn: [['Vật lí', 'Năng lượng cơ học'], ['Vật lí', 'Ánh sáng: khúc xạ và thấu kính'], ['Vật lí', 'Điện'], ['Hóa học', 'Kim loại'], ['Hóa học', 'Hợp chất hữu cơ và hydrocarbon'], ['Sinh học', 'Di truyền'], ['Sinh học', 'Tiến hóa']],
      toan: [['Số và Đại số', 'Phương trình và hệ hai phương trình bậc nhất hai ẩn'], ['Số và Đại số', 'Bất phương trình bậc nhất một ẩn'], ['Số và Đại số', 'Căn bậc hai và căn bậc ba'], ['Số và Đại số', 'Hàm số y = ax² (a ≠ 0) và phương trình bậc hai một ẩn']],
      anh: [['Ngữ pháp', 'Câu bị động'], ['Ngữ pháp', 'Câu tường thuật'], ['Ngữ pháp', 'Mệnh đề quan hệ'], ['Đọc hiểu', 'Đọc hiểu văn bản dài'], ['Viết', 'Viết thư / bài luận ngắn']]
    }
  };

  const CHU_DE = [t6TapHop, t6ChiaHet, t6SoNguyen, t6PhanSo, t6ThapPhan, hh6TheChat, hh6Oxygen, hh6HonHop, sh6TeBao, sh6DaDang, vl6Luc, vl6NangLuong, ta6Thi, ta6GioiTu, ta6SoSanh, ta6TuVung, ta6DocViet, vatLi, hoaHoc, sinhHoc, toan, soThuc, tiLe, daThuc, tiengAnh, daThuc8, hangDangThuc8];
  apDungDoiChieu(CHU_DE);

  window.HOC_LIEU = {
    tenWeb: TEN_WEB,
    phienBan: '1.5 — ' + NGAY_SOAN + ' (thêm 17 chủ đề lớp 6: Toán, KHTN, Tiếng Anh)',
    caiDat: {
      // Địa chỉ máy chủ trung gian AI (tùy chọn). Để trống = chỉ dùng AI qua Claude Artifact (nếu có) hoặc trợ giúp theo bài học.
      aiEndpoint: '',
      // Thành viên học (tên hiển thị ở màn hình "Ai đang học hôm nay?"). Thêm/bớt tên tại đây.
      thanhVien: ['Huyhero', 'Anpretty']
    },
    mon: {
      khtn: { ten: 'Khoa học tự nhiên', ngan: 'KHTN', moTa: 'Vật lí · Hóa học · Sinh học' },
      toan: { ten: 'Toán', ngan: 'Toán', moTa: 'Số và Đại số' },
      anh: { ten: 'Tiếng Anh', ngan: 'Tiếng Anh', moTa: 'Từ vựng · Ngữ pháp · Đọc · Viết' }
    },
    taiLieuCanBoSung: [
      'SGK Toán 7, tập một và tập hai — bộ "Kết nối tri thức với cuộc sống" (NXB Giáo dục Việt Nam): các chương Số hữu tỉ, Số thực, Tỉ lệ thức và đại lượng tỉ lệ, Biểu thức đại số và đa thức một biến (tệp PDF hoặc ảnh các trang, kèm năm in/ấn bản).',
      'Thư mục Drive giáo viên cung cấp chưa có SGK Toán 7, Tiếng Anh 7, KHTN 8, Tiếng Anh 8, Tiếng Anh 9 — cần bổ sung để đối chiếu các chủ đề tương ứng.',
      'SGK Tiếng Anh 7 Global Success (NXB Giáo dục Việt Nam): đơn vị bài học về sở thích (Hobbies) — phần Grammar và Writing; kèm Workbook nếu muốn trích bài tập.',
      'Sách bài tập tương ứng (nếu muốn có câu loại A "trích" hoặc loại B "phỏng theo"), kèm xác nhận quyền sử dụng lại nguyên văn.',
      'Văn bản Chương trình GDPT 2018 môn Toán, môn KHTN, môn Tiếng Anh (Thông tư 32/2018/TT-BGDĐT) từ cổng thông tin Bộ GD&ĐT — để đối chiếu "Yêu cầu cần đạt".'
    ],
    chuDe: CHU_DE,
    danhMuc: danhMuc
  };
})();
