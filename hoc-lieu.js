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

  const CHU_DE = [vatLi, hoaHoc, sinhHoc, toan, soThuc, tiLe, daThuc, tiengAnh, daThuc8, hangDangThuc8];
  apDungDoiChieu(CHU_DE);

  window.HOC_LIEU = {
    tenWeb: TEN_WEB,
    phienBan: '1.4 — ' + NGAY_SOAN + ' (thêm chọn thành viên Huyhero, Anpretty và thống kê cho Má)',
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
