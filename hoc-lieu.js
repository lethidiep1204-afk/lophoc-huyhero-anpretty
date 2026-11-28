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

  /* ---------------- KHTN 6 — ĐỢT 4 (28/11/2026) ---------------- */
  const kh6MoDau = {
    id: 'kh6-mo-dau', lop: 6, mon: 'khtn', phanMon: 'Mở đầu', ten: 'Mở đầu về KHTN: an toàn, kính lúp, đo lường',
    sgk: 'SGV KHTN 6 — Chương I, Bài 1–8, SGV tr. 18–43', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Đơn vị đo độ dài, khối lượng, thời gian (tiểu học)'],
    yeuCauCanDat: ['Nêu được quy định an toàn trong phòng thực hành.', 'Biết dùng kính lúp, kính hiển vi quang học.', 'Xác định giới hạn đo (GHĐ) và độ chia nhỏ nhất (ĐCNN) của dụng cụ; đo chiều dài, khối lượng, thời gian, nhiệt độ đúng cách.', 'Đổi được nhiệt độ từ thang Celsius sang thang Fahrenheit.'],
    bai: {
      mucTieu: ['nhận ra hành động an toàn / không an toàn trong phòng thực hành;', 'đọc GHĐ, ĐCNN của dụng cụ đo;', 'đổi đơn vị đo;', 'đổi °C sang °F.'],
      khoiDong: { hoi: 'Em muốn đo chiều dài quyển vở, em chọn thước nào: thước dây 1,5 m có vạch 1 cm hay thước kẻ 20 cm có vạch 1 mm?', goiY: 'Thước kẻ 20 cm vạch 1 mm: đủ dài và đo chính xác hơn.' },
      trongTam: [
        '<b>An toàn</b>: chỉ làm thí nghiệm khi có giáo viên hướng dẫn; không ăn uống, đùa nghịch; đọc kĩ nhãn hoá chất; mang đồ bảo hộ; báo ngay khi có sự cố.',
        '<b>Kính lúp</b> phóng to vật nhỏ (vài lần đến vài chục lần). <b>Kính hiển vi quang học</b> quan sát vật rất nhỏ như tế bào.',
        '<b>GHĐ</b> (giới hạn đo): số lớn nhất ghi trên dụng cụ. <b>ĐCNN</b> (độ chia nhỏ nhất): hiệu giá trị hai vạch chia liên tiếp.',
        'Đơn vị chuẩn: chiều dài <b>mét (m)</b>, khối lượng <b>kilôgam (kg)</b>, thời gian <b>giây (s)</b>; nhiệt độ thường dùng <b>độ C (°C)</b>.',
        'Đổi nhiệt độ: <b>t(°F) = t(°C) × 1,8 + 32</b>.'
      ],
      viDu: { de: 'Thước có số lớn nhất 30 cm, giữa vạch 0 và vạch 1 cm có 10 khoảng chia. Tìm GHĐ và ĐCNN.', loiGiai: 'GHĐ = <b>30 cm</b>; ĐCNN = 1 cm : 10 = <b>0,1 cm (1 mm)</b>.' },
      nguon: N6K('Chương I "Mở đầu về Khoa học tự nhiên", Bài 1–8 (SGV tr. 18–43)'),
      hoiDap: [
        { tu: ['ghd', 'gioi han do'], tl: 'GHĐ là số lớn nhất ghi trên dụng cụ đo.' },
        { tu: ['dcnn', 'do chia'], tl: 'ĐCNN = hiệu giá trị giữa hai vạch chia liên tiếp.' },
        { tu: ['fahrenheit', 'do f'], tl: 't(°F) = t(°C) × 1,8 + 32.' },
        { tu: ['an toan'], tl: 'Làm theo hướng dẫn của giáo viên, đọc nhãn hoá chất, mang đồ bảo hộ, báo ngay khi có sự cố.' }
      ]
    },
    cauHoi: [
      {
        id: 'KH6A-01', muc: 'co-ban', liDoMuc: 'Nhận biết quy tắc an toàn.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các việc làm <b>đúng quy định an toàn</b> trong phòng thực hành.',
        phuongAn: [{ t: 'Đọc kĩ nhãn trên lọ hoá chất trước khi dùng.', dung: true }, { t: 'Đeo kính bảo hộ, găng tay khi làm thí nghiệm có hoá chất.', dung: true }, { t: 'Ngửi trực tiếp miệng lọ để biết đó là chất gì.', phanHoi: 'Có thể hít phải khí độc. Không ngửi trực tiếp.' }, { t: 'Báo ngay cho giáo viên khi làm đổ, vỡ dụng cụ.', dung: true }, { t: 'Ăn bánh trong lúc chờ thí nghiệm.', phanHoi: 'Không ăn uống trong phòng thực hành.' }],
        goiY: ['Việc nào giúp bảo vệ em và bạn?'], viSaoDung: 'Ý 1, 2, 4 đúng quy định.', loiGiai: 'Ý 1, 2, 4.', giangLai: 'Ba chữ "Đọc – Đeo – Báo": đọc nhãn, đeo bảo hộ, báo sự cố.', tienBo: 'Em đã chọn đúng quy tắc an toàn.',
        nguon: N6K('Bài 2 "An toàn trong phòng thực hành" (SGV tr. 22)'), kiemTra: K6(),
        tuongTu: { id: 'KH6A-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các việc làm <b>không an toàn</b>.', phuongAn: [{ t: 'Tự ý trộn các hoá chất để xem chuyện gì xảy ra.', dung: true }, { t: 'Nếm thử hoá chất.', dung: true }, { t: 'Làm theo hướng dẫn của giáo viên.', phanHoi: 'An toàn.' }, { t: 'Rửa tay sau khi làm thí nghiệm.', phanHoi: 'An toàn.' }], goiY: ['Việc nào có thể gây hại?'], viSaoDung: 'Ý 1, 2.', loiGiai: 'Ý 1 và 2.', giangLai: 'Không tự ý, không nếm.', nguon: N6K('Bài 2 (SGV tr. 22)'), kiemTra: K6() }
      },
      {
        id: 'KH6A-02', muc: 'co-ban', liDoMuc: 'Chọn dụng cụ quan sát phù hợp.', loai: 'chon1', de: 'Muốn quan sát <b>tế bào</b> lá cây, em dùng dụng cụ nào?',
        phuongAn: [{ t: 'Kính hiển vi quang học', dung: true }, { t: 'Kính lúp', phanHoi: 'Kính lúp phóng to chưa đủ để thấy rõ tế bào.' }, { t: 'Kính râm', phanHoi: 'Kính râm không phóng to.' }, { t: 'Thước kẻ', phanHoi: 'Thước dùng để đo.' }],
        goiY: ['Tế bào rất nhỏ.'], viSaoDung: 'Kính hiển vi phóng to nhiều lần.', loiGiai: '<b>Kính hiển vi quang học</b>.', giangLai: 'Vật nhỏ thấy được bằng mắt (con kiến, vân tay) → kính lúp. Vật rất nhỏ (tế bào) → kính hiển vi.', tienBo: 'Em đã chọn đúng dụng cụ.',
        nguon: N6K('Bài 3 "Sử dụng kính lúp" (SGV tr. 25); Bài 4 "Sử dụng kính hiển vi quang học" (SGV tr. 27)'), kiemTra: K6(),
        tuongTu: { id: 'KH6A-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Muốn xem rõ <b>vân tay</b> của mình, dụng cụ nào gọn và phù hợp nhất?', phuongAn: [{ t: 'Kính lúp', dung: true }, { t: 'Kính hiển vi', phanHoi: 'Cồng kềnh, không cần thiết.' }, { t: 'Nhiệt kế', phanHoi: 'Đo nhiệt độ.' }, { t: 'Cân', phanHoi: 'Đo khối lượng.' }], goiY: ['Vật nhỏ nhưng mắt vẫn thấy.'], viSaoDung: 'Kính lúp.', loiGiai: '<b>Kính lúp</b>.', giangLai: 'Nhỏ → lúp; rất nhỏ → hiển vi.', nguon: N6K('Bài 3 (SGV tr. 25)'), kiemTra: K6() }
      },
      {
        id: 'KH6A-03', muc: 'van-dung', liDoMuc: 'Tính ĐCNN từ thông tin vạch chia.', loai: 'so', de: 'Một thước có GHĐ 50 cm. Giữa vạch 0 và vạch 1 cm có 5 khoảng chia bằng nhau. ĐCNN của thước là bao nhiêu xentimét? <span class="note">Chỉ ghi số.</span>', dapAn: 0.2,
        loi: [{ gt: 5, nhan: 'Nhầm số khoảng với ĐCNN', phanHoi: '5 là số khoảng chia. ĐCNN = 1 cm : 5.' }, { gt: 10, nhan: 'Lỗi dùng công thức', phanHoi: 'Không lấy 50 : 5. ĐCNN tính từ đoạn 1 cm.' }, { gt: 50, nhan: 'Nhầm GHĐ với ĐCNN', phanHoi: '50 cm là GHĐ.' }],
        buoc: { hoi: 'Đoạn 1 cm được chia thành mấy khoảng?', dapAn: 5, dung: 'Đúng. Mỗi khoảng là 1 : 5 cm.', sai: 'Đọc lại đề.' },
        goiY: ['ĐCNN = độ dài đoạn : số khoảng chia.'], viSaoDung: '1 : 5 = 0,2 cm.', loiGiai: '1 cm : 5 = <b>0,2 cm</b> (= 2 mm).', giangLai: 'ĐCNN là "bước nhảy" nhỏ nhất của thước: chia đoạn 1 cm cho số khoảng nhỏ.', tienBo: 'Em đã phân biệt GHĐ và ĐCNN.',
        nguon: N6K('Bài 5 "Đo chiều dài" (SGV tr. 30)'), kiemTra: K6(),
        tuongTu: { id: 'KH6A-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một bình chia độ có GHĐ 250 mL. Giữa vạch 50 mL và vạch 100 mL có 10 khoảng chia bằng nhau. ĐCNN là bao nhiêu mL?', dapAn: 5, loi: [{ gt: 10, nhan: 'Nhầm số khoảng với ĐCNN', phanHoi: '(100 − 50) : 10.' }, { gt: 25, nhan: 'Lỗi dùng công thức', phanHoi: 'Không chia GHĐ.' }], buoc: { hoi: 'Hiệu hai vạch số: 100 − 50 = ?', dapAn: 50, dung: 'Đúng.', sai: '100 − 50.' }, goiY: ['50 : 10.'], viSaoDung: '5 mL.', loiGiai: '<b>5 mL</b>.', giangLai: 'Hiệu hai vạch ghi số chia cho số khoảng.', nguon: N6K('Bài 5 (SGV tr. 30)'), kiemTra: K6() }
      },
      {
        id: 'KH6A-04', muc: 'van-dung', liDoMuc: 'Đổi đơn vị khối lượng nhiều bậc.', loai: 'so', de: 'Một bao gạo nặng 0,05 tấn. Bao gạo nặng bao nhiêu kilôgam? <span class="note">Chỉ ghi số.</span>', dapAn: 50,
        loi: [{ gt: 5, nhan: 'Lỗi đổi đơn vị', phanHoi: '1 tấn = 1000 kg, không phải 100 kg.' }, { gt: 500, nhan: 'Lỗi đổi đơn vị', phanHoi: '0,05 · 1000 = 50.' }],
        buoc: { hoi: '1 tấn bằng bao nhiêu kg?', dapAn: 1000, dung: 'Đúng. 0,05 · 1000.', sai: '1 tấn = 10 tạ = 1000 kg.' },
        goiY: ['1 tấn = 1000 kg.'], viSaoDung: '0,05 · 1000 = 50 kg.', loiGiai: '0,05 tấn = 0,05 · 1000 = <b>50 kg</b>.', giangLai: 'Nhân với 1000 là dời dấu phẩy sang phải 3 chữ số: 0,05 → 50.', tienBo: 'Em đã đổi đơn vị đúng.',
        nguon: N6K('Bài 6 "Đo khối lượng" (SGV tr. 34)'), kiemTra: K6(),
        tuongTu: { id: 'KH6A-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc, thời gian.', loai: 'so', de: 'Một trận đá cầu kéo dài 0,25 giờ. Đổi ra phút.', dapAn: 15, loi: [{ gt: 25, nhan: 'Lỗi đổi đơn vị', phanHoi: '1 giờ = 60 phút.' }, { gt: 2.5, nhan: 'Lỗi đổi đơn vị', phanHoi: 'Nhân 60.' }], buoc: { hoi: '1 giờ = ? phút', dapAn: 60, dung: 'Đúng.', sai: '60.' }, goiY: ['0,25 · 60.'], viSaoDung: '15 phút.', loiGiai: '<b>15 phút</b>.', giangLai: 'Một phần tư giờ.', nguon: N6K('Bài 7 "Đo thời gian" (SGV tr. 37)'), kiemTra: K6() }
      },
      {
        id: 'KH6A-05', muc: 'nang-cao', liDoMuc: 'Áp dụng công thức đổi nhiệt độ hai bước.', loai: 'so', de: 'Nhiệt độ cơ thể người khoẻ mạnh khoảng 37 °C. Nhiệt độ này bằng bao nhiêu độ F? <span class="note">Chỉ ghi số.</span>', dapAn: 98.6,
        loi: [{ gt: 66.6, nhan: 'Thiếu bước', phanHoi: 'Em mới tính 37 × 1,8. Còn phải cộng 32.' }, { gt: 69, nhan: 'Lỗi thứ tự phép tính', phanHoi: 'Nhân 1,8 trước, cộng 32 sau.' }, { gt: 124.2, nhan: 'Lỗi thứ tự phép tính', phanHoi: 'Không cộng 32 trước rồi mới nhân 1,8.' }],
        buoc: { hoi: '37 × 1,8 = ?', dapAn: 66.6, dung: 'Đúng. Cộng thêm 32.', sai: '37 · 1,8.' },
        goiY: ['t(°F) = t(°C) × 1,8 + 32.'], viSaoDung: '66,6 + 32 = 98,6.', loiGiai: '37 × 1,8 + 32 = 66,6 + 32 = <b>98,6 °F</b>.', giangLai: 'Nhớ hai mốc: 0 °C = 32 °F (nước đá tan), 100 °C = 212 °F (nước sôi). Kết quả phải nằm giữa hai mốc đó.', tienBo: 'Em đã đổi nhiệt độ đúng thứ tự.',
        nguon: N6K('Bài 8 "Đo nhiệt độ" (SGV tr. 40)'), kiemTra: K6('Công thức đổi °C → °F theo nội dung Bài 8; chạy kiểm thử tự động ngày ' + NGAY_SOAN + '.'),
        tuongTu: { id: 'KH6A-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một ngày hè nhiệt độ ngoài trời là 35 °C. Bằng bao nhiêu độ F?', dapAn: 95, loi: [{ gt: 63, nhan: 'Thiếu bước', phanHoi: 'Cộng thêm 32.' }, { gt: 120.6, nhan: 'Lỗi thứ tự phép tính', phanHoi: 'Nhân trước, cộng sau.' }], buoc: { hoi: '35 × 1,8 = ?', dapAn: 63, dung: 'Đúng.', sai: '35 · 1,8.' }, goiY: ['× 1,8 + 32.'], viSaoDung: '95.', loiGiai: '<b>95 °F</b>.', giangLai: 'Nhân rồi cộng.', nguon: N6K('Bài 8 (SGV tr. 40)'), kiemTra: K6() }
      },
      {
        id: 'KH6A-06', muc: 'nang-cao', liDoMuc: 'Chọn dụng cụ đo phù hợp theo GHĐ và ĐCNN cho nhiều tình huống.', loai: 'chon1',
        de: 'Để đo chiều dài <b>sân trường</b> (khoảng 40 m) một cách thuận tiện, nên chọn dụng cụ nào?',
        phuongAn: [{ t: 'Thước cuộn GHĐ 50 m, ĐCNN 1 cm', dung: true }, { t: 'Thước kẻ GHĐ 30 cm, ĐCNN 1 mm', phanHoi: 'GHĐ quá nhỏ, phải đo hơn 100 lần → dễ sai.' }, { t: 'Thước dây may GHĐ 1,5 m, ĐCNN 1 cm', phanHoi: 'GHĐ nhỏ, phải đo nhiều lần.' }, { t: 'Thước kẹp GHĐ 15 cm, ĐCNN 0,1 mm', phanHoi: 'Dùng đo vật nhỏ cần chính xác cao.' }],
        goiY: ['GHĐ nên lớn hơn chiều dài cần đo.'], viSaoDung: 'GHĐ 50 m &gt; 40 m, đo một lần là xong.', loiGiai: '<b>Thước cuộn GHĐ 50 m</b>.', giangLai: 'Quy tắc chọn thước: GHĐ lớn hơn (hoặc gần bằng) độ dài cần đo, ĐCNN phù hợp độ chính xác cần thiết.', tienBo: 'Em đã chọn dụng cụ theo GHĐ.',
        nguon: N6K('Bài 5 "Đo chiều dài" (SGV tr. 30)'), kiemTra: K6(),
        tuongTu: { id: 'KH6A-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Để đo nhiệt độ <b>nước đang sôi</b> (khoảng 100 °C), nên chọn nhiệt kế nào?', phuongAn: [{ t: 'Nhiệt kế có GHĐ 150 °C', dung: true }, { t: 'Nhiệt kế y tế GHĐ 42 °C', phanHoi: 'GHĐ quá nhỏ, có thể vỡ nhiệt kế.' }, { t: 'Nhiệt kế GHĐ 50 °C', phanHoi: 'GHĐ nhỏ hơn 100 °C.' }, { t: 'Nhiệt kế GHĐ 80 °C', phanHoi: 'Vẫn nhỏ hơn 100 °C.' }], goiY: ['GHĐ phải lớn hơn 100 °C.'], viSaoDung: '150 °C.', loiGiai: '<b>GHĐ 150 °C</b>.', giangLai: 'GHĐ lớn hơn giá trị cần đo.', nguon: N6K('Bài 8 (SGV tr. 40)'), kiemTra: K6() }
      }
    ]
  };

  const hh6VatLieu = {
    id: 'hh6-vat-lieu', lop: 6, mon: 'khtn', phanMon: 'Hóa học', ten: 'Vật liệu, nguyên liệu, nhiên liệu, lương thực – thực phẩm',
    sgk: 'SGV KHTN 6 — Chương III, Bài 12–15, SGV tr. 71–90', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Tính chất của chất (Bài 9)', 'Sự cháy cần oxygen (Bài 11)'],
    yeuCauCanDat: ['Nêu được tính chất và ứng dụng của một số vật liệu: kim loại, nhựa, gỗ, cao su, thuỷ tinh, gốm.', 'Phân biệt vật liệu, nguyên liệu, nhiên liệu; nêu cách dùng nhiên liệu an toàn, hiệu quả.', 'Nêu được vai trò của lương thực, thực phẩm và các nhóm chất dinh dưỡng.'],
    bai: {
      mucTieu: ['chọn vật liệu theo tính chất;', 'phân loại nhiên liệu rắn, lỏng, khí;', 'nêu cách dùng nhiên liệu an toàn;', 'xếp thực phẩm vào nhóm chất dinh dưỡng.'],
      khoiDong: { hoi: 'Vì sao xoong nồi thường làm bằng kim loại còn tay cầm làm bằng nhựa hoặc gỗ?', goiY: 'Kim loại dẫn nhiệt tốt để nấu nhanh; nhựa, gỗ dẫn nhiệt kém nên cầm không bị bỏng.' },
      trongTam: [
        '<b>Vật liệu</b> dùng để làm ra đồ vật: kim loại (dẫn điện, dẫn nhiệt tốt), nhựa (nhẹ, bền, cách điện), gỗ, cao su (đàn hồi), thuỷ tinh (trong suốt, dễ vỡ), gốm (chịu nhiệt).',
        '<b>Nguyên liệu</b> lấy từ tự nhiên để sản xuất: quặng, đá vôi, dầu mỏ, cát…',
        '<b>Nhiên liệu</b> cháy được, toả nhiệt: rắn (than, củi), lỏng (xăng, dầu), khí (gas, biogas). Dùng an toàn: cung cấp đủ không khí, kiểm tra rò rỉ gas, tắt bếp sau khi dùng.',
        '<b>Lương thực</b> (gạo, ngô, khoai, sắn) giàu tinh bột. <b>Thực phẩm</b> cung cấp các nhóm chất: carbohydrate (đường, tinh bột), protein (đạm), lipid (chất béo), vitamin và chất khoáng.'
      ],
      viDu: { de: 'Xăng là vật liệu, nguyên liệu hay nhiên liệu?', loiGiai: 'Xăng cháy được, toả nhiều nhiệt → <b>nhiên liệu</b>.' },
      nguon: N6K('Chương III, Bài 12 "Một số vật liệu" (SGV tr. 71) đến Bài 15 "Một số lương thực, thực phẩm" (SGV tr. 85)'),
      hoiDap: [
        { tu: ['nhien lieu'], tl: 'Nhiên liệu là chất cháy được và toả nhiệt: than, củi, xăng, dầu, gas.' },
        { tu: ['nguyen lieu'], tl: 'Nguyên liệu lấy từ tự nhiên để sản xuất ra vật liệu, sản phẩm: quặng, đá vôi, dầu mỏ.' },
        { tu: ['dinh duong', 'protein', 'tinh bot'], tl: 'Gạo, khoai: tinh bột; thịt, cá, trứng: đạm; dầu, mỡ: chất béo; rau quả: vitamin, chất khoáng.' }
      ]
    },
    cauHoi: [
      {
        id: 'HH6D-01', muc: 'co-ban', liDoMuc: 'Chọn vật liệu theo tính chất.', loai: 'chon1', de: 'Vật liệu nào thường dùng làm <b>vỏ bọc dây điện</b>?',
        phuongAn: [{ t: 'Nhựa', dung: true }, { t: 'Đồng', phanHoi: 'Đồng dẫn điện → dùng làm lõi dây.' }, { t: 'Thuỷ tinh', phanHoi: 'Dễ vỡ, không uốn được.' }, { t: 'Sắt', phanHoi: 'Dẫn điện.' }],
        goiY: ['Vỏ dây cần cách điện, dẻo.'], viSaoDung: 'Nhựa cách điện, dẻo.', loiGiai: '<b>Nhựa</b>.', giangLai: 'Lõi dây cần dẫn điện (đồng); vỏ cần cách điện (nhựa).', tienBo: 'Em đã chọn vật liệu theo tính chất.',
        nguon: N6K('Bài 12 "Một số vật liệu" (SGV tr. 71)'), kiemTra: K6(),
        tuongTu: { id: 'HH6D-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Vật liệu nào phù hợp làm <b>cửa sổ</b> để ánh sáng chiếu qua?', phuongAn: [{ t: 'Thuỷ tinh', dung: true }, { t: 'Gỗ', phanHoi: 'Không cho ánh sáng qua.' }, { t: 'Sắt', phanHoi: 'Không trong suốt.' }, { t: 'Cao su', phanHoi: 'Không trong suốt.' }], goiY: ['Trong suốt.'], viSaoDung: 'Thuỷ tinh.', loiGiai: '<b>Thuỷ tinh</b>.', giangLai: 'Theo tính chất.', nguon: N6K('Bài 12 (SGV tr. 71)'), kiemTra: K6() }
      },
      {
        id: 'HH6D-02', muc: 'co-ban', liDoMuc: 'Phân loại nhiên liệu theo thể.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các <b>nhiên liệu khí</b>.',
        phuongAn: [{ t: 'Khí gas (dùng nấu ăn)', dung: true }, { t: 'Khí biogas', dung: true }, { t: 'Xăng', phanHoi: 'Nhiên liệu lỏng.' }, { t: 'Than đá', phanHoi: 'Nhiên liệu rắn.' }, { t: 'Củi', phanHoi: 'Nhiên liệu rắn.' }],
        goiY: ['Ở thể khí.'], viSaoDung: 'Gas, biogas.', loiGiai: 'Ý 1 và 2.', giangLai: 'Rắn: than, củi. Lỏng: xăng, dầu. Khí: gas, biogas.', tienBo: 'Em đã phân loại nhiên liệu.',
        nguon: N6K('Bài 14 "Một số nhiên liệu" (SGV tr. 81)'), kiemTra: K6(),
        tuongTu: { id: 'HH6D-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các <b>nhiên liệu lỏng</b>.', phuongAn: [{ t: 'Xăng', dung: true }, { t: 'Dầu hoả', dung: true }, { t: 'Than', phanHoi: 'Rắn.' }, { t: 'Gas', phanHoi: 'Khí.' }], goiY: ['Thể lỏng.'], viSaoDung: 'Xăng, dầu.', loiGiai: 'Ý 1, 2.', giangLai: 'Ba nhóm.', nguon: N6K('Bài 14 (SGV tr. 81)'), kiemTra: K6() }
      },
      {
        id: 'HH6D-03', muc: 'van-dung', liDoMuc: 'Phân biệt vật liệu, nguyên liệu, nhiên liệu.', loai: 'chon1', de: '<b>Đá vôi</b> được khai thác để sản xuất xi măng, vôi sống. Trong trường hợp này, đá vôi là:',
        phuongAn: [{ t: 'Nguyên liệu', dung: true }, { t: 'Nhiên liệu', phanHoi: 'Đá vôi không dùng để đốt lấy nhiệt.' }, { t: 'Lương thực', phanHoi: 'Không ăn được.' }, { t: 'Thực phẩm', phanHoi: 'Không ăn được.' }],
        goiY: ['Lấy từ tự nhiên để sản xuất.'], viSaoDung: 'Nguyên liệu sản xuất xi măng.', loiGiai: '<b>Nguyên liệu</b>.', giangLai: 'Nguyên liệu = "nguyên" (gốc) → chất ban đầu lấy từ tự nhiên để làm ra sản phẩm.', tienBo: 'Em đã phân biệt ba khái niệm.',
        nguon: N6K('Bài 13 "Một số nguyên liệu" (SGV tr. 77)'), kiemTra: K6(),
        tuongTu: { id: 'HH6D-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Quặng sắt được dùng để luyện ra sắt, thép. Quặng sắt là:', phuongAn: [{ t: 'Nguyên liệu', dung: true }, { t: 'Nhiên liệu', phanHoi: 'Không dùng để đốt.' }, { t: 'Vật liệu xây dựng', phanHoi: 'Thép mới là vật liệu.' }, { t: 'Thực phẩm', phanHoi: 'Không.' }], goiY: ['Chất ban đầu.'], viSaoDung: 'Nguyên liệu.', loiGiai: '<b>Nguyên liệu</b>.', giangLai: 'Quặng → (nguyên liệu) → thép (vật liệu).', nguon: N6K('Bài 13 (SGV tr. 77)'), kiemTra: K6() }
      },
      {
        id: 'HH6D-04', muc: 'van-dung', liDoMuc: 'Xếp thực phẩm vào nhóm chất dinh dưỡng chính.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các thực phẩm <b>giàu protein (chất đạm)</b>.',
        phuongAn: [{ t: 'Thịt bò', dung: true }, { t: 'Trứng gà', dung: true }, { t: 'Cá', dung: true }, { t: 'Cơm (gạo)', phanHoi: 'Giàu tinh bột (carbohydrate).' }, { t: 'Dầu ăn', phanHoi: 'Giàu chất béo.' }],
        goiY: ['Thịt, cá, trứng, sữa, đậu.'], viSaoDung: 'Thịt, trứng, cá giàu đạm.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Nhóm đạm: thịt, cá, trứng, sữa, đậu. Nhóm bột: gạo, ngô, khoai. Nhóm béo: dầu, mỡ.', tienBo: 'Em đã xếp đúng nhóm chất.',
        nguon: N6K('Bài 15 "Một số lương thực, thực phẩm" (SGV tr. 85)'), kiemTra: K6(),
        tuongTu: { id: 'HH6D-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các <b>lương thực</b> giàu tinh bột.', phuongAn: [{ t: 'Gạo', dung: true }, { t: 'Ngô', dung: true }, { t: 'Khoai lang', dung: true }, { t: 'Thịt lợn', phanHoi: 'Giàu đạm, béo.' }, { t: 'Rau muống', phanHoi: 'Vitamin, chất xơ.' }], goiY: ['Tinh bột.'], viSaoDung: 'Gạo, ngô, khoai.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Nhóm bột.', nguon: N6K('Bài 15 (SGV tr. 85)'), kiemTra: K6() }
      },
      {
        id: 'HH6D-05', muc: 'nang-cao', liDoMuc: 'Đánh giá cách dùng nhiên liệu an toàn, hiệu quả.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các cách dùng nhiên liệu <b>an toàn, hiệu quả</b> khi đun nấu.',
        phuongAn: [{ t: 'Điều chỉnh ngọn lửa vừa với đáy nồi.', dung: true }, { t: 'Khoá van bình gas sau khi nấu xong.', dung: true }, { t: 'Đun bếp than trong phòng kín, đóng hết cửa.', phanHoi: 'Thiếu không khí, sinh khí độc carbon monoxide.' }, { t: 'Khi ngửi thấy mùi gas, bật đèn để kiểm tra.', phanHoi: 'Tia lửa điện có thể gây nổ. Phải mở cửa, khoá van, không bật thiết bị điện.' }, { t: 'Đậy nắp nồi khi nấu.', dung: true }],
        goiY: ['An toàn: tránh cháy nổ, khí độc. Hiệu quả: ít hao phí.'], viSaoDung: 'Ý 1, 2, 5.', loiGiai: 'Ý 1, 2, 5.', giangLai: 'Nhớ: đủ không khí, đúng ngọn lửa, khoá van, đậy nắp. Ngửi thấy gas: mở cửa, khoá van, tuyệt đối không bật lửa/điện.', tienBo: 'Em đã chọn đúng cách dùng nhiên liệu.',
        nguon: N6K('Bài 14 "Một số nhiên liệu" (SGV tr. 81)'), kiemTra: K6(),
        tuongTu: { id: 'HH6D-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các việc làm <b>gây lãng phí hoặc nguy hiểm</b> khi dùng nhiên liệu.', phuongAn: [{ t: 'Để lửa bếp gas to tràn ra ngoài đáy nồi.', dung: true }, { t: 'Để bếp cháy khi không nấu.', dung: true }, { t: 'Đặt bình gas xa nguồn nhiệt.', phanHoi: 'Đúng cách.' }, { t: 'Kiểm tra dây dẫn gas định kì.', phanHoi: 'Đúng cách.' }], goiY: ['Lãng phí hoặc nguy hiểm.'], viSaoDung: 'Ý 1, 2.', loiGiai: 'Ý 1, 2.', giangLai: 'Ngọn lửa vừa đáy nồi.', nguon: N6K('Bài 14 (SGV tr. 81)'), kiemTra: K6() }
      },
      {
        id: 'HH6D-06', muc: 'nang-cao', liDoMuc: 'Giải thích lựa chọn vật liệu theo nhiều tính chất; câu mở.', loai: 'mo',
        de: 'Vì sao lốp xe đạp làm bằng <b>cao su</b> còn khung xe làm bằng <b>kim loại</b>? Viết 2–4 câu.',
        tieuChi: [
          { t: 'Nêu tính chất của cao su: đàn hồi, bám đường, giảm xóc.', tuDong: { tuKhoa: ['dan hoi', 'bam duong', 'chay em', 'giam xoc'] } },
          { t: 'Nêu tính chất của kim loại: cứng, chắc, bền, chịu lực.', tuDong: { tuKhoa: ['cung', 'chac', 'ben', 'chiu luc'] } },
          { t: 'Liên hệ tính chất với công dụng của bộ phận.', tuDong: { tuKhoa: ['nen', 'vi vay', 'giup'] } },
          { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }
        ],
        baiThamKhao: 'Cao su có tính đàn hồi và bám đường tốt nên làm lốp xe giúp xe chạy êm, không trơn trượt. Kim loại cứng, chắc và bền nên làm khung xe giúp xe chịu được sức nặng của người ngồi.',
        giupViet: 'Dàn ý: Cao su có tính … nên … / Kim loại … nên …',
        goiY: ['Mỗi bộ phận cần tính chất gì?'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Mỗi bộ phận: "cần gì?" → "vật liệu nào có tính chất đó?".', tienBo: 'Em đã giải thích việc chọn vật liệu.',
        nguon: N6K('Bài 12 "Một số vật liệu" (SGV tr. 71)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ theo từ khoá, học sinh tự đối chiếu tiêu chí.'),
        tuongTu: { id: 'HH6D-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Vì sao nồi cơm thường làm bằng <b>kim loại</b> còn bát đĩa thường làm bằng <b>gốm sứ</b>? Viết 2–4 câu.', tieuChi: [{ t: 'Nêu kim loại dẫn nhiệt tốt.', tuDong: { tuKhoa: ['dan nhiet'] } }, { t: 'Nêu gốm sứ chịu nhiệt, đẹp, dễ rửa / cách nhiệt.', tuDong: { tuKhoa: ['chiu nhiet', 'de rua', 'dep', 'cach nhiet', 'it nong'] } }, { t: 'Liên hệ công dụng.', tuDong: { tuKhoa: ['nen', 'giup', 'vi vay'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Kim loại dẫn nhiệt tốt nên làm nồi giúp cơm chín nhanh. Gốm sứ chịu nhiệt, ít nóng tay khi cầm, đẹp và dễ rửa nên dùng làm bát đĩa đựng thức ăn.', giupViet: 'Kim loại … nên … / Gốm sứ … nên …', goiY: ['Dẫn nhiệt.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Cần gì → chọn gì.', nguon: N6K('Bài 12 (SGV tr. 71)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') }
      }
    ]
  };

  const sh6CoThe = {
    id: 'sh6-co-the', lop: 6, mon: 'khtn', phanMon: 'Sinh học', ten: 'Từ tế bào đến cơ thể',
    sgk: 'SGV KHTN 6 — Chương VI, Bài 22–24, SGV tr. 119–128', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Tế bào (Chương V)'],
    yeuCauCanDat: ['Phân biệt cơ thể đơn bào và cơ thể đa bào; lấy được ví dụ.', 'Nêu được các cấp độ tổ chức của cơ thể đa bào: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.'],
    bai: {
      mucTieu: ['phân biệt đơn bào, đa bào;', 'sắp xếp đúng các cấp tổ chức;', 'nêu ví dụ mô, cơ quan, hệ cơ quan;', 'giải thích sự phối hợp giữa các cơ quan.'],
      khoiDong: { hoi: 'Con trùng roi chỉ có 1 tế bào. Cơ thể em có bao nhiêu tế bào?', goiY: 'Rất nhiều tế bào (hàng nghìn tỉ) — em là cơ thể đa bào.' },
      trongTam: [
        '<b>Cơ thể đơn bào</b>: chỉ gồm 1 tế bào (vi khuẩn, trùng roi, trùng giày, nấm men). <b>Cơ thể đa bào</b>: gồm nhiều tế bào (cây xanh, con người, con mèo).',
        'Các cấp tổ chức của cơ thể đa bào: <b>tế bào → mô → cơ quan → hệ cơ quan → cơ thể</b>.',
        '<b>Mô</b>: nhóm tế bào giống nhau cùng làm một chức năng (mô cơ, mô thần kinh). <b>Cơ quan</b>: nhiều mô cùng thực hiện một chức năng (tim, dạ dày, lá). <b>Hệ cơ quan</b>: nhiều cơ quan phối hợp (hệ tiêu hoá, hệ tuần hoàn, hệ rễ, hệ chồi).',
        'Các hệ cơ quan phối hợp với nhau giúp cơ thể sống, lớn lên và sinh sản.'
      ],
      viDu: { de: 'Dạ dày là mô, cơ quan hay hệ cơ quan?', loiGiai: 'Dạ dày gồm nhiều mô (mô cơ, mô biểu bì…) → <b>cơ quan</b>, thuộc hệ tiêu hoá.' },
      nguon: N6K('Chương VI "Từ tế bào đến cơ thể", Bài 22–24 (SGV tr. 119–128)'),
      hoiDap: [
        { tu: ['don bao', 'da bao'], tl: 'Đơn bào: 1 tế bào. Đa bào: nhiều tế bào.' },
        { tu: ['cap to chuc', 'mo', 'co quan'], tl: 'Tế bào → mô → cơ quan → hệ cơ quan → cơ thể.' }
      ]
    },
    cauHoi: [
      {
        id: 'SH6C-01', muc: 'co-ban', liDoMuc: 'Nhận biết sinh vật đơn bào.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các sinh vật <b>đơn bào</b>.',
        phuongAn: [{ t: 'Trùng roi', dung: true }, { t: 'Vi khuẩn', dung: true }, { t: 'Nấm men', dung: true }, { t: 'Cây lúa', phanHoi: 'Đa bào.' }, { t: 'Con ếch', phanHoi: 'Đa bào.' }],
        goiY: ['Chỉ có một tế bào, rất nhỏ.'], viSaoDung: 'Trùng roi, vi khuẩn, nấm men.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Sinh vật đơn bào thường phải dùng kính hiển vi mới thấy.', tienBo: 'Em đã phân biệt đơn bào, đa bào.',
        nguon: N6K('Bài 22 "Cơ thể sinh vật" (SGV tr. 119)'), kiemTra: K6(),
        tuongTu: { id: 'SH6C-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các sinh vật <b>đa bào</b>.', phuongAn: [{ t: 'Cây hoa hồng', dung: true }, { t: 'Con mèo', dung: true }, { t: 'Trùng giày', phanHoi: 'Đơn bào.' }, { t: 'Con người', dung: true }], goiY: ['Nhiều tế bào.'], viSaoDung: 'Ý 1, 2, 4.', loiGiai: 'Ý 1, 2, 4.', giangLai: 'Thấy bằng mắt thường thường là đa bào.', nguon: N6K('Bài 22 (SGV tr. 119)'), kiemTra: K6() }
      },
      {
        id: 'SH6C-02', muc: 'co-ban', liDoMuc: 'Nhớ thứ tự các cấp tổ chức.', loai: 'chon1', de: 'Thứ tự các cấp tổ chức của cơ thể đa bào <b>từ nhỏ đến lớn</b> là:',
        phuongAn: [{ t: 'Tế bào → mô → cơ quan → hệ cơ quan → cơ thể', dung: true }, { t: 'Mô → tế bào → cơ quan → hệ cơ quan → cơ thể', phanHoi: 'Mô gồm nhiều tế bào nên tế bào đứng trước.' }, { t: 'Tế bào → cơ quan → mô → hệ cơ quan → cơ thể', phanHoi: 'Cơ quan gồm nhiều mô.' }, { t: 'Tế bào → mô → hệ cơ quan → cơ quan → cơ thể', phanHoi: 'Hệ cơ quan gồm nhiều cơ quan.' }],
        goiY: ['Cấp sau gồm nhiều cấp trước.'], viSaoDung: 'Tế bào – mô – cơ quan – hệ cơ quan – cơ thể.', loiGiai: '<b>Tế bào → mô → cơ quan → hệ cơ quan → cơ thể</b>.', giangLai: 'Giống trường học: học sinh (tế bào) → tổ (mô) → lớp (cơ quan) → khối (hệ cơ quan) → trường (cơ thể).', tienBo: 'Em đã nhớ thứ tự.',
        nguon: N6K('Bài 23 "Tổ chức cơ thể đa bào" (SGV tr. 121)'), kiemTra: K6(),
        tuongTu: { id: 'SH6C-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Cấp tổ chức nào nằm <b>ngay trên</b> cấp mô?', phuongAn: [{ t: 'Cơ quan', dung: true }, { t: 'Tế bào', phanHoi: 'Dưới mô.' }, { t: 'Hệ cơ quan', phanHoi: 'Trên cơ quan.' }, { t: 'Cơ thể', phanHoi: 'Cao nhất.' }], goiY: ['Tế bào → mô → ?'], viSaoDung: 'Cơ quan.', loiGiai: '<b>Cơ quan</b>.', giangLai: 'Ví dụ trường học.', nguon: N6K('Bài 23 (SGV tr. 121)'), kiemTra: K6() }
      },
      {
        id: 'SH6C-03', muc: 'van-dung', liDoMuc: 'Xếp ví dụ vào đúng cấp tổ chức.', loai: 'chon1', de: '<b>Tim</b> thuộc cấp tổ chức nào?',
        phuongAn: [{ t: 'Cơ quan', dung: true }, { t: 'Mô', phanHoi: 'Tim gồm nhiều loại mô.' }, { t: 'Hệ cơ quan', phanHoi: 'Tim là một bộ phận của hệ tuần hoàn.' }, { t: 'Tế bào', phanHoi: 'Tim gồm rất nhiều tế bào.' }],
        goiY: ['Tim gồm nhiều mô, thuộc hệ tuần hoàn.'], viSaoDung: 'Tim là cơ quan.', loiGiai: '<b>Cơ quan</b> (thuộc hệ tuần hoàn).', giangLai: 'Có tên riêng như một "bộ phận" (tim, phổi, lá, rễ) → thường là cơ quan; có chữ "hệ" → hệ cơ quan.', tienBo: 'Em đã xếp đúng cấp.',
        nguon: N6K('Bài 23 (SGV tr. 121)'), kiemTra: K6(),
        tuongTu: { id: 'SH6C-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: '<b>Hệ tiêu hoá</b> thuộc cấp tổ chức nào?', phuongAn: [{ t: 'Hệ cơ quan', dung: true }, { t: 'Cơ quan', phanHoi: 'Gồm nhiều cơ quan.' }, { t: 'Mô', phanHoi: 'Không.' }, { t: 'Cơ thể', phanHoi: 'Một phần của cơ thể.' }], goiY: ['Có chữ "hệ".'], viSaoDung: 'Hệ cơ quan.', loiGiai: '<b>Hệ cơ quan</b>.', giangLai: 'Chữ "hệ".', nguon: N6K('Bài 23 (SGV tr. 121)'), kiemTra: K6() }
      },
      {
        id: 'SH6C-04', muc: 'van-dung', liDoMuc: 'Phân biệt hệ cơ quan ở thực vật.', loai: 'chonNhieu', de: 'Ở cây có hoa, <b>chọn TẤT CẢ</b> các cơ quan thuộc <b>hệ chồi</b>.',
        phuongAn: [{ t: 'Thân', dung: true }, { t: 'Lá', dung: true }, { t: 'Hoa', dung: true }, { t: 'Rễ', phanHoi: 'Rễ thuộc hệ rễ (dưới mặt đất).' }],
        goiY: ['Hệ chồi: phần trên mặt đất.'], viSaoDung: 'Thân, lá, hoa (và quả) thuộc hệ chồi.', loiGiai: 'Thân, lá, hoa.', giangLai: 'Cây có hai hệ: hệ rễ (dưới đất) và hệ chồi (trên mặt đất).', tienBo: 'Em đã phân biệt hai hệ cơ quan của cây.',
        nguon: N6K('Bài 23 "Tổ chức cơ thể đa bào" (SGV tr. 121)'), kiemTra: K6('Nội dung hệ rễ – hệ chồi: nhóm biên soạn cần đối chiếu lại câu chữ trong SGK khi có bản SGK lớp 6.'),
        tuongTu: { id: 'SH6C-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các cơ quan thuộc <b>hệ tiêu hoá</b> của người.', phuongAn: [{ t: 'Dạ dày', dung: true }, { t: 'Ruột', dung: true }, { t: 'Phổi', phanHoi: 'Hệ hô hấp.' }, { t: 'Tim', phanHoi: 'Hệ tuần hoàn.' }], goiY: ['Thức ăn đi qua đâu?'], viSaoDung: 'Dạ dày, ruột.', loiGiai: 'Ý 1, 2.', giangLai: 'Đường đi của thức ăn.', nguon: N6K('Bài 23 (SGV tr. 121)'), kiemTra: K6() }
      },
      {
        id: 'SH6C-05', muc: 'nang-cao', liDoMuc: 'Ghép nhiều ví dụ vào đúng cấp; kiểm tra toàn bộ.', loai: 'chonNhieu',
        de: '<b>Chọn TẤT CẢ</b> các cặp ghép <b>đúng</b>.',
        phuongAn: [{ t: 'Tế bào thần kinh — tế bào', dung: true }, { t: 'Mô cơ — mô', dung: true }, { t: 'Lá cây — cơ quan', dung: true }, { t: 'Hệ hô hấp — cơ quan', phanHoi: 'Hệ hô hấp là hệ cơ quan.' }, { t: 'Con chó — mô', phanHoi: 'Con chó là cơ thể.' }],
        goiY: ['Từng cặp một.'], viSaoDung: 'Ý 1, 2, 3 đúng.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Từ khoá tên gọi: "tế bào…", "mô…", "hệ…"; bộ phận có tên riêng → cơ quan; cả sinh vật → cơ thể.', tienBo: 'Em đã xếp đúng nhiều ví dụ.',
        nguon: N6K('Bài 23 (SGV tr. 121)'), kiemTra: K6(),
        tuongTu: { id: 'SH6C-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các cặp ghép <b>đúng</b>.', phuongAn: [{ t: 'Phổi — cơ quan', dung: true }, { t: 'Hệ tuần hoàn — hệ cơ quan', dung: true }, { t: 'Mô biểu bì — tế bào', phanHoi: 'Là mô.' }, { t: 'Cây cam — cơ thể', dung: true }], goiY: ['Từng cặp.'], viSaoDung: 'Ý 1, 2, 4.', loiGiai: 'Ý 1, 2, 4.', giangLai: 'Từ khoá tên gọi.', nguon: N6K('Bài 23 (SGV tr. 121)'), kiemTra: K6() }
      },
      {
        id: 'SH6C-06', muc: 'nang-cao', liDoMuc: 'Giải thích sự phối hợp giữa các hệ cơ quan; câu mở.', loai: 'mo',
        de: 'Khi em chạy nhanh, tim đập nhanh hơn và thở gấp hơn. Hãy giải thích vì sao các hệ cơ quan phải phối hợp như vậy. Viết 2–4 câu.',
        tieuChi: [
          { t: 'Nêu hệ vận động (cơ) cần nhiều năng lượng / oxygen hơn.', tuDong: { tuKhoa: ['van dong', 'co bap', 'nang luong', 'oxygen', 'oxi'] } },
          { t: 'Nêu hệ hô hấp lấy thêm oxygen (thở gấp).', tuDong: { tuKhoa: ['ho hap', 'tho'] } },
          { t: 'Nêu hệ tuần hoàn (tim) vận chuyển máu nhanh hơn.', tuDong: { tuKhoa: ['tuan hoan', 'tim', 'mau'] } },
          { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }
        ],
        baiThamKhao: 'Khi chạy, các cơ của hệ vận động hoạt động mạnh nên cần nhiều oxygen và năng lượng hơn. Hệ hô hấp làm em thở gấp để lấy thêm oxygen. Hệ tuần hoàn làm tim đập nhanh để đưa máu chở oxygen đến các cơ nhanh hơn.',
        giupViet: 'Hệ vận động cần … → hệ hô hấp … → hệ tuần hoàn …',
        goiY: ['Ba hệ: vận động, hô hấp, tuần hoàn.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Cơ thể như một đội: cơ bắp "đòi" oxygen, phổi "lấy" oxygen, tim "chở" oxygen.', tienBo: 'Em đã giải thích sự phối hợp các hệ cơ quan.',
        nguon: N6K('Bài 23 (SGV tr. 121)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ theo từ khoá.'),
        tuongTu: { id: 'SH6C-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Vì sao nếu rễ cây bị hư hỏng thì lá cây cũng héo? Viết 2–4 câu.', tieuChi: [{ t: 'Nêu rễ hút nước và chất khoáng.', tuDong: { tuKhoa: ['hut nuoc', 'hut', 'khoang'] } }, { t: 'Nêu nước được vận chuyển lên thân, lá.', tuDong: { tuKhoa: ['than', 'van chuyen', 'len la'] } }, { t: 'Kết luận lá thiếu nước nên héo.', tuDong: { tuKhoa: ['thieu nuoc', 'heo'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Rễ có nhiệm vụ hút nước và chất khoáng cho cây. Nước được vận chuyển qua thân lên lá. Khi rễ hỏng, lá thiếu nước nên bị héo.', giupViet: 'Rễ … → thân … → lá …', goiY: ['Hệ rễ và hệ chồi phối hợp.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Đường đi của nước.', nguon: N6K('Bài 23 (SGV tr. 121)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') }
      }
    ]
  };

  const vl6TraiDat = {
    id: 'vl6-trai-dat-bau-troi', lop: 6, mon: 'khtn', phanMon: 'Vật lí', ten: 'Trái Đất và bầu trời',
    sgk: 'SGV KHTN 6 — Chương X, Bài 52–55, SGV tr. 215–228', yccdGhiChu: YCCD6,
    kienThucTruoc: ['Phương hướng: đông, tây, nam, bắc'],
    yeuCauCanDat: ['Giải thích được chuyển động nhìn thấy của Mặt Trời (mọc ở phía đông, lặn ở phía tây).', 'Giải thích được vì sao nhìn thấy Mặt Trăng và các pha của Mặt Trăng.', 'Mô tả được sơ lược Hệ Mặt Trời và Ngân Hà.'],
    bai: {
      mucTieu: ['giải thích Mặt Trời mọc, lặn;', 'giải thích các pha của Mặt Trăng;', 'sắp xếp các hành tinh trong Hệ Mặt Trời;', 'nhận ra Hệ Mặt Trời nằm trong Ngân Hà.'],
      khoiDong: { hoi: 'Buổi sáng Mặt Trời ở phía nào? Buổi chiều ở phía nào?', goiY: 'Sáng ở phía đông, chiều ở phía tây.' },
      trongTam: [
        'Hằng ngày ta thấy Mặt Trời mọc ở phía <b>đông</b>, lặn ở phía <b>tây</b>. Đó là chuyển động <b>nhìn thấy</b>, do <b>Trái Đất tự quay quanh trục</b> từ tây sang đông.',
        '<b>Thiên thể</b>: các vật thể trong vũ trụ (sao, hành tinh, vệ tinh…). Mặt Trời là một ngôi <b>sao</b> (tự phát sáng).',
        '<b>Mặt Trăng</b> không tự phát sáng; ta thấy Mặt Trăng vì nó <b>phản xạ ánh sáng Mặt Trời</b>. Phần sáng ta thấy thay đổi theo ngày tạo nên các <b>pha</b> (trăng non, trăng khuyết, trăng tròn…), lặp lại khoảng 29,5 ngày.',
        '<b>Hệ Mặt Trời</b> có 8 hành tinh, theo thứ tự từ gần đến xa Mặt Trời: <b>Thuỷ, Kim, Trái Đất, Hoả, Mộc, Thổ, Thiên Vương, Hải Vương</b>.',
        'Hệ Mặt Trời nằm trong <b>Ngân Hà</b> — một thiên hà gồm rất nhiều ngôi sao.'
      ],
      viDu: { de: 'Hành tinh nào gần Mặt Trời nhất?', loiGiai: '<b>Sao Thuỷ</b>.' },
      nguon: N6K('Chương X "Trái Đất và bầu trời", Bài 52–55 (SGV tr. 215–228)'),
      hoiDap: [
        { tu: ['moc', 'lan', 'mat troi'], tl: 'Mặt Trời mọc ở đông, lặn ở tây do Trái Đất tự quay từ tây sang đông.' },
        { tu: ['mat trang', 'pha'], tl: 'Mặt Trăng phản xạ ánh sáng Mặt Trời; phần sáng ta thấy thay đổi tạo thành các pha.' },
        { tu: ['hanh tinh', 'thu tu'], tl: 'Thuỷ – Kim – Trái Đất – Hoả – Mộc – Thổ – Thiên Vương – Hải Vương.' }
      ]
    },
    cauHoi: [
      {
        id: 'VL6C-01', muc: 'co-ban', liDoMuc: 'Nhận biết hướng Mặt Trời mọc, lặn.', loai: 'chon1', de: 'Hằng ngày, ta thấy Mặt Trời mọc ở phía nào?',
        phuongAn: [{ t: 'Phía đông', dung: true }, { t: 'Phía tây', phanHoi: 'Phía tây là nơi Mặt Trời lặn.' }, { t: 'Phía nam', phanHoi: 'Không đúng.' }, { t: 'Phía bắc', phanHoi: 'Không đúng.' }],
        goiY: ['Buổi sáng.'], viSaoDung: 'Mọc ở đông.', loiGiai: '<b>Phía đông</b>.', giangLai: '"Đông mọc – Tây lặn".', tienBo: 'Em đã nhớ hướng Mặt Trời mọc.',
        nguon: N6K('Bài 52 "Chuyển động nhìn thấy của Mặt Trời. Thiên thể" (SGV tr. 215)'), kiemTra: K6(),
        tuongTu: { id: 'VL6C-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Mặt Trời là:', phuongAn: [{ t: 'Một ngôi sao', dung: true }, { t: 'Một hành tinh', phanHoi: 'Hành tinh không tự phát sáng.' }, { t: 'Một vệ tinh', phanHoi: 'Không.' }, { t: 'Một thiên hà', phanHoi: 'Thiên hà gồm rất nhiều sao.' }], goiY: ['Tự phát sáng.'], viSaoDung: 'Ngôi sao.', loiGiai: '<b>Một ngôi sao</b>.', giangLai: 'Sao tự phát sáng.', nguon: N6K('Bài 52 (SGV tr. 215)'), kiemTra: K6() }
      },
      {
        id: 'VL6C-02', muc: 'co-ban', liDoMuc: 'Giải thích vì sao thấy Mặt Trăng.', loai: 'chon1', de: 'Vì sao ban đêm ta nhìn thấy Mặt Trăng sáng?',
        phuongAn: [{ t: 'Mặt Trăng phản xạ ánh sáng của Mặt Trời.', dung: true }, { t: 'Mặt Trăng tự phát ra ánh sáng.', phanHoi: 'Mặt Trăng không tự phát sáng.' }, { t: 'Mặt Trăng phản xạ ánh sáng đèn trên Trái Đất.', phanHoi: 'Ánh sáng đèn quá yếu.' }, { t: 'Mặt Trăng là một ngôi sao.', phanHoi: 'Mặt Trăng là vệ tinh của Trái Đất.' }],
        goiY: ['Mặt Trăng có tự phát sáng không?'], viSaoDung: 'Phản xạ ánh sáng Mặt Trời.', loiGiai: '<b>Phản xạ ánh sáng Mặt Trời</b>.', giangLai: 'Giống quả bóng trắng trong phòng tối: chiếu đèn pin vào thì thấy sáng.', tienBo: 'Em đã giải thích được.',
        nguon: N6K('Bài 53 "Mặt Trăng" (SGV tr. 217)'), kiemTra: K6(),
        tuongTu: { id: 'VL6C-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Mặt Trăng là:', phuongAn: [{ t: 'Vệ tinh tự nhiên của Trái Đất', dung: true }, { t: 'Một ngôi sao', phanHoi: 'Không tự phát sáng.' }, { t: 'Một hành tinh của Hệ Mặt Trời', phanHoi: 'Quay quanh Trái Đất.' }, { t: 'Một thiên hà', phanHoi: 'Không.' }], goiY: ['Quay quanh Trái Đất.'], viSaoDung: 'Vệ tinh.', loiGiai: '<b>Vệ tinh tự nhiên của Trái Đất</b>.', giangLai: 'Vệ tinh quay quanh hành tinh.', nguon: N6K('Bài 53 (SGV tr. 217)'), kiemTra: K6() }
      },
      {
        id: 'VL6C-03', muc: 'van-dung', liDoMuc: 'Xác định vị trí hành tinh theo thứ tự.', loai: 'so', de: 'Tính từ Mặt Trời ra xa, <b>Sao Mộc</b> là hành tinh thứ mấy?', dapAn: 5,
        loi: [{ gt: 4, nhan: 'Nhầm thứ tự', phanHoi: 'Thứ 4 là Sao Hoả.' }, { gt: 6, nhan: 'Nhầm thứ tự', phanHoi: 'Thứ 6 là Sao Thổ.' }],
        buoc: { hoi: 'Trái Đất là hành tinh thứ mấy?', dapAn: 3, dung: 'Đúng. Sau Trái Đất là Hoả rồi Mộc.', sai: 'Thuỷ – Kim – Trái Đất.' },
        goiY: ['Thuỷ – Kim – Trái Đất – Hoả – Mộc…'], viSaoDung: 'Mộc đứng thứ 5.', loiGiai: 'Thuỷ (1), Kim (2), Trái Đất (3), Hoả (4), <b>Mộc (5)</b>.', giangLai: 'Câu nhớ tự đặt: "<b>Th</b>ầy <b>K</b>ể <b>Tr</b>uyện <b>H</b>ay, <b>M</b>ọi <b>Th</b>ứ <b>Th</b>ật <b>H</b>ấp dẫn" (Thuỷ, Kim, Trái Đất, Hoả, Mộc, Thổ, Thiên Vương, Hải Vương).', tienBo: 'Em đã nhớ thứ tự hành tinh.',
        nguon: N6K('Bài 54 "Hệ Mặt Trời" (SGV tr. 221)'), kiemTra: K6(),
        tuongTu: { id: 'VL6C-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính từ Mặt Trời ra xa, <b>Sao Thổ</b> là hành tinh thứ mấy?', dapAn: 6, loi: [{ gt: 5, nhan: 'Nhầm thứ tự', phanHoi: 'Đó là Mộc.' }, { gt: 7, nhan: 'Nhầm thứ tự', phanHoi: 'Đó là Thiên Vương.' }], buoc: { hoi: 'Sao Mộc thứ mấy?', dapAn: 5, dung: 'Đúng.', sai: 'Đếm lại.' }, goiY: ['Sau Mộc.'], viSaoDung: '6.', loiGiai: '<b>6</b>.', giangLai: 'Câu nhớ.', nguon: N6K('Bài 54 (SGV tr. 221)'), kiemTra: K6() }
      },
      {
        id: 'VL6C-04', muc: 'van-dung', liDoMuc: 'Giải thích chuyển động nhìn thấy bằng sự tự quay của Trái Đất.', loai: 'chon1', de: 'Vì sao ta thấy Mặt Trời "di chuyển" từ đông sang tây trong ngày?',
        phuongAn: [{ t: 'Vì Trái Đất tự quay quanh trục từ tây sang đông.', dung: true }, { t: 'Vì Mặt Trời quay quanh Trái Đất mỗi ngày một vòng.', phanHoi: 'Mặt Trời không quay quanh Trái Đất; đây chỉ là chuyển động ta nhìn thấy.' }, { t: 'Vì Trái Đất tự quay từ đông sang tây.', phanHoi: 'Ngược chiều.' }, { t: 'Vì gió đẩy Mặt Trời.', phanHoi: 'Không đúng.' }],
        goiY: ['Ngồi trên xe đang chạy, cây bên đường có vẻ chạy ngược lại.'], viSaoDung: 'Trái Đất quay từ tây sang đông nên ta thấy Mặt Trời đi từ đông sang tây.', loiGiai: '<b>Trái Đất tự quay từ tây sang đông</b>.', giangLai: 'Như ngồi trên ô tô: xe chạy về trước, cây có vẻ lùi về sau. Trái Đất quay về đông, Mặt Trời có vẻ đi về tây.', tienBo: 'Em đã giải thích chuyển động nhìn thấy.',
        nguon: N6K('Bài 52 (SGV tr. 215)'), kiemTra: K6(),
        tuongTu: { id: 'VL6C-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Buổi chiều, bóng cây ở sân trường ngả về phía nào?', phuongAn: [{ t: 'Phía đông', dung: true }, { t: 'Phía tây', phanHoi: 'Chiều Mặt Trời ở tây, bóng ngả ngược lại.' }, { t: 'Phía nam', phanHoi: 'Không.' }, { t: 'Không có bóng', phanHoi: 'Có bóng.' }], goiY: ['Bóng ngược phía Mặt Trời.'], viSaoDung: 'Mặt Trời ở tây → bóng về đông.', loiGiai: '<b>Phía đông</b>.', giangLai: 'Bóng luôn ngược phía nguồn sáng.', nguon: N6K('Bài 52 (SGV tr. 215)'), kiemTra: K6() }
      },
      {
        id: 'VL6C-05', muc: 'nang-cao', liDoMuc: 'Đổi đơn vị thiên văn ra kilômét, nhiều bước.', loai: 'so', de: 'Khoảng cách từ Mặt Trời đến Trái Đất khoảng 150 triệu km. Sao Hoả cách Mặt Trời khoảng 1,5 lần khoảng cách đó. Sao Hoả cách Mặt Trời khoảng bao nhiêu <b>triệu km</b>? <span class="note">Chỉ ghi số.</span>', dapAn: 225, soLieu: GIA_DINH,
        loi: [{ gt: 100, nhan: 'Chọn sai phép tính', phanHoi: 'Không chia 150 cho 1,5. "Gấp 1,5 lần" là nhân.' }, { gt: 151.5, nhan: 'Chọn sai phép tính', phanHoi: 'Không cộng 1,5. Phải nhân.' }],
        buoc: { hoi: 'Phép tính cần làm: 150 × ? ', dapAn: 1.5, dung: 'Đúng. 150 × 1,5.', sai: 'Gấp 1,5 lần.' },
        goiY: ['Gấp 1,5 lần → nhân 1,5.'], viSaoDung: '150 × 1,5 = 225.', loiGiai: '150 × 1,5 = <b>225 triệu km</b>.', giangLai: '1,5 lần = 1 lần + nửa lần: 150 + 75 = 225.', tienBo: 'Em đã tính khoảng cách trong Hệ Mặt Trời.',
        nguon: Object.assign(N6K('Bài 54 "Hệ Mặt Trời" (SGV tr. 221)'), { soLieu: 'Số liệu làm tròn để tính; khoảng cách thực thay đổi theo vị trí trên quỹ đạo.' }), kiemTra: K6(),
        tuongTu: { id: 'VL6C-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Trái Đất cách Mặt Trời khoảng 150 triệu km. Sao Mộc cách Mặt Trời khoảng 5,2 lần khoảng cách đó. Sao Mộc cách Mặt Trời khoảng bao nhiêu triệu km?', dapAn: 780, soLieu: GIA_DINH, loi: [{ gt: 155.2, nhan: 'Chọn sai phép tính', phanHoi: 'Nhân, không cộng.' }], buoc: { hoi: '150 × ? ', dapAn: 5.2, dung: 'Đúng.', sai: '5,2 lần.' }, goiY: ['150 × 5,2.'], viSaoDung: '780.', loiGiai: '<b>780 triệu km</b>.', giangLai: 'Gấp → nhân.', nguon: N6K('Bài 54 (SGV tr. 221)'), kiemTra: K6() }
      },
      {
        id: 'VL6C-06', muc: 'nang-cao', liDoMuc: 'Phân loại thiên thể, đánh giá nhiều phát biểu.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các phát biểu <b>đúng</b>.',
        phuongAn: [{ t: 'Hệ Mặt Trời nằm trong Ngân Hà.', dung: true }, { t: 'Mặt Trăng là một hành tinh của Hệ Mặt Trời.', phanHoi: 'Mặt Trăng là vệ tinh của Trái Đất.' }, { t: 'Sao Thuỷ là hành tinh gần Mặt Trời nhất.', dung: true }, { t: 'Hình dạng Mặt Trăng ta thấy thay đổi theo các ngày trong tháng.', dung: true }, { t: 'Mặt Trời quay quanh Trái Đất.', phanHoi: 'Trái Đất quay quanh Mặt Trời.' }],
        goiY: ['Kiểm tra từng phát biểu.'], viSaoDung: 'Ý 1, 3, 4.', loiGiai: 'Ý 1, 3, 4 đúng.', giangLai: 'Bậc từ lớn đến nhỏ: Ngân Hà ⊃ Hệ Mặt Trời ⊃ Trái Đất ⊃ (vệ tinh) Mặt Trăng.', tienBo: 'Em đã nắm cấu trúc Hệ Mặt Trời.',
        nguon: N6K('Bài 53–55 (SGV tr. 217–228)'), kiemTra: K6(),
        tuongTu: { id: 'VL6C-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các phát biểu <b>đúng</b>.', phuongAn: [{ t: 'Hệ Mặt Trời có 8 hành tinh.', dung: true }, { t: 'Sao Hải Vương xa Mặt Trời nhất trong 8 hành tinh.', dung: true }, { t: 'Mặt Trăng tự phát sáng.', phanHoi: 'Phản xạ ánh sáng.' }, { t: 'Ngân Hà chỉ có một ngôi sao là Mặt Trời.', phanHoi: 'Rất nhiều sao.' }], goiY: ['Từng ý.'], viSaoDung: 'Ý 1, 2.', loiGiai: 'Ý 1, 2.', giangLai: 'Cấu trúc lồng nhau.', nguon: N6K('Bài 54–55 (SGV tr. 221–228)'), kiemTra: K6() }
      }
    ]
  };

  /* ---------------- TIẾNG ANH 6 — Unit 5–12 (đợt 4) ---------------- */
  const U6 = (u, v) => N6A('Unit ' + u + ' — Objectives: ' + v);
  const ta6Dem = {
    id: 'ta6-dem-duoc', lop: 6, mon: 'anh', phanMon: 'Ngữ pháp', ten: 'Danh từ đếm được, không đếm được; some / any',
    sgk: 'SGV Tiếng Anh 6 — Unit 5 (countable and uncountable nouns); Unit 6 (some / any for amount)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 5 và Unit 6 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['Danh từ số ít, số nhiều', 'There is / There are'],
    yeuCauCanDat: ['Phân biệt danh từ đếm được và không đếm được.', 'Dùng some trong câu khẳng định, any trong câu phủ định và câu hỏi.'],
    bai: {
      mucTieu: ['nhận ra danh từ không đếm được;', 'dùng a/an với danh từ đếm được số ít;', 'chọn some hay any;', 'dùng đúng There is / There are với hai loại danh từ.'],
      khoiDong: { hoi: 'Can you count "water"? Can you count "bottles"?', goiY: 'Không đếm được "water", nhưng đếm được "two bottles of water".' },
      trongTam: [
        '<b>Danh từ đếm được</b>: có số ít, số nhiều (a backpack, two backpacks). <b>Không đếm được</b>: không thêm -s, không dùng a/an (water, rice, money, information, sugar).',
        'Danh từ không đếm được đi với động từ <b>số ít</b>: There <b>is</b> some water.',
        '<b>some</b>: câu khẳng định (I have some sweets). <b>any</b>: câu phủ định và câu hỏi (We don\'t have any rice. Do you have any money?).',
        'Lời mời, đề nghị lịch sự vẫn dùng some: Would you like some tea?'
      ],
      viDu: { de: 'Điền: There isn\'t ___ milk in the fridge.', loiGiai: 'Câu phủ định → <b>any</b>.' },
      nguon: N6A('Unit 5 — Objectives: use countable and uncountable nouns; Unit 6 — Objectives: use some / any for amount'),
      hoiDap: [{ tu: ['some', 'any'], tl: 'some: khẳng định, lời mời; any: phủ định, câu hỏi.' }, { tu: ['dem duoc', 'countable'], tl: 'Đếm được: thêm -s được, dùng a/an. Không đếm được: water, rice, money, sugar…' }]
    },
    cauHoi: [
      { id: 'TA6F-01', muc: 'co-ban', liDoMuc: 'Nhận biết danh từ không đếm được.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các danh từ <b>không đếm được</b>.', phuongAn: [{ t: 'water', dung: true }, { t: 'rice', dung: true }, { t: 'compass', phanHoi: 'Đếm được: a compass, two compasses.' }, { t: 'money', dung: true }, { t: 'mountain', phanHoi: 'Đếm được.' }], goiY: ['Có thêm -s được không?'], viSaoDung: 'water, rice, money.', loiGiai: 'water, rice, money.', giangLai: 'Chất lỏng, hạt nhỏ, tiền… thường không đếm được.', tienBo: 'Em đã phân biệt hai loại danh từ.', nguon: U6(5, 'use countable and uncountable nouns'), kiemTra: K6(),
        tuongTu: { id: 'TA6F-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các danh từ <b>đếm được</b>.', phuongAn: [{ t: 'island', dung: true }, { t: 'sugar', phanHoi: 'Không đếm được.' }, { t: 'backpack', dung: true }, { t: 'information', phanHoi: 'Không đếm được.' }], goiY: ['Thêm -s.'], viSaoDung: 'island, backpack.', loiGiai: 'island, backpack.', giangLai: 'Thêm -s được → đếm được.', nguon: U6(5, 'countable and uncountable nouns'), kiemTra: K6() } },
      { id: 'TA6F-02', muc: 'co-ban', liDoMuc: 'Chọn some/any theo loại câu.', loai: 'chon1', de: 'Choose: <i>We don\'t have ______ bread for breakfast.</i>', phuongAn: [{ t: 'any', dung: true }, { t: 'some', phanHoi: 'Câu phủ định (don\'t) → any.' }, { t: 'a', phanHoi: 'bread không đếm được.' }, { t: 'many', phanHoi: 'many chỉ đi với danh từ đếm được.' }], goiY: ['don\'t → phủ định.'], viSaoDung: 'Phủ định → any.', loiGiai: '<b>any</b>.', giangLai: 'Thấy not / n\'t hoặc dấu ? → any.', tienBo: 'Em đã chọn some/any đúng.', nguon: U6(6, 'use some / any for amount'), kiemTra: K6(),
        tuongTu: { id: 'TA6F-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>Mum buys ______ flowers for Tet.</i>', phuongAn: [{ t: 'some', dung: true }, { t: 'any', phanHoi: 'Khẳng định → some.' }, { t: 'a', phanHoi: 'flowers số nhiều.' }, { t: 'an', phanHoi: 'Không.' }], goiY: ['Khẳng định.'], viSaoDung: 'some.', loiGiai: '<b>some</b>.', giangLai: 'Khẳng định → some.', nguon: U6(6, 'some / any'), kiemTra: K6() } },
      { id: 'TA6F-03', muc: 'van-dung', liDoMuc: 'Viết từ còn thiếu trong câu hỏi.', loai: 'chu', de: 'Complete with <b>some</b> or <b>any</b>: <i>Do you have ______ sun cream?</i> <span class="note">Gõ một từ.</span>', chapNhan: ['any'], loi: [{ mau: '^some$', danhDau: 'some', nhan: 'Sai some/any', phanHoi: 'Câu hỏi (Do you…?) → any.' }], goiY: ['Câu hỏi.'], viSaoDung: 'any.', loiGiai: 'Do you have <b>any</b> sun cream?', giangLai: 'Câu hỏi thông thường → any.', tienBo: 'Em đã dùng any trong câu hỏi.', nguon: U6(6, 'use some / any for amount'), kiemTra: K6(),
        tuongTu: { id: 'TA6F-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc, lời mời.', loai: 'chu', de: 'Complete with <b>some</b> or <b>any</b>: <i>Would you like ______ banh chung?</i> (lời mời) <span class="note">Gõ một từ.</span>', chapNhan: ['some'], loi: [{ mau: '^any$', danhDau: 'any', nhan: 'Sai some/any', phanHoi: 'Lời mời lịch sự dùng some.' }], goiY: ['Would you like…'], viSaoDung: 'some.', loiGiai: '<b>some</b>.', giangLai: 'Mời → some.', nguon: U6(6, 'some / any'), kiemTra: K6() } },
      { id: 'TA6F-04', muc: 'van-dung', liDoMuc: 'There is / There are với danh từ không đếm được.', loai: 'chon1', de: 'Choose: <i>There ______ some water in the bottle.</i>', phuongAn: [{ t: 'is', dung: true }, { t: 'are', phanHoi: 'water không đếm được → động từ số ít.' }, { t: 'have', phanHoi: 'Cấu trúc There is/are.' }, { t: 'be', phanHoi: 'Cần chia động từ.' }], goiY: ['water đếm được không?'], viSaoDung: 'Không đếm được → is.', loiGiai: 'There <b>is</b> some water.', giangLai: 'Không đếm được = coi như số ít.', tienBo: 'Em đã chia động từ đúng.', nguon: U6(5, 'use countable and uncountable nouns'), kiemTra: K6(),
        tuongTu: { id: 'TA6F-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>There ______ some caves near the beach.</i>', phuongAn: [{ t: 'are', dung: true }, { t: 'is', phanHoi: 'caves số nhiều.' }, { t: 'has', phanHoi: 'Không.' }, { t: 'am', phanHoi: 'Không.' }], goiY: ['caves.'], viSaoDung: 'are.', loiGiai: '<b>are</b>.', giangLai: 'Số nhiều → are.', nguon: U6(5, 'countable nouns'), kiemTra: K6() } },
      { id: 'TA6F-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi nhiều câu.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) I need some informations. (2) There are some islands in Ha Long Bay. (3) Have you got any money? (4) She drinks a water every morning. (5) We don\'t have any eggs.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', phanHoi: 'Đúng.' }, { t: 'Câu (4)', dung: true }, { t: 'Câu (5)', phanHoi: 'Đúng.' }], goiY: ['information, water đếm được không?'], viSaoDung: '(1) information không thêm -s; (4) không dùng a với water.', loiGiai: 'Câu (1): some <b>information</b>. Câu (4): drinks <b>some / a glass of</b> water.', giangLai: 'Danh từ không đếm được: không -s, không a/an.', tienBo: 'Em đã phát hiện lỗi danh từ.', nguon: U6(5, 'use countable and uncountable nouns'), kiemTra: K6(),
        tuongTu: { id: 'TA6F-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) There is some rices in the bowl. (2) Do you have any pens? (3) I have any sweets. (4) There is some juice.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Đúng.' }], goiY: ['rice; khẳng định.'], viSaoDung: '(1) rice; (3) some.', loiGiai: 'Câu (1), (3).', giangLai: 'Không -s; khẳng định → some.', nguon: U6(6, 'some / any'), kiemTra: K6() } },
      { id: 'TA6F-06', muc: 'nang-cao', liDoMuc: 'Tự viết câu với some/any theo tình huống.', loai: 'chu', nhieuCachDung: true, de: 'Tình huống: Trong tủ lạnh <b>không có</b> sữa. Viết <b>một</b> câu tiếng Anh với "There" và "any".', chapNhan: ["there isn't any milk in the fridge", 'there is not any milk in the fridge', "there isn't any milk", 'there is not any milk'], loi: [{ mau: '\\bthere aren\'t any milk|\\bthere are not any milk', danhDau: 'aren\'t', nhan: 'Sai động từ', phanHoi: 'milk không đếm được → isn\'t.' }, { mau: '\\bsome milk\\b', danhDau: 'some', nhan: 'Sai some/any', phanHoi: 'Câu phủ định → any.' }, { mau: '\\bmilks\\b', danhDau: 'milks', nhan: 'Lỗi danh từ', phanHoi: 'milk không thêm -s.' }], goiY: ['There isn\'t any …'], viSaoDung: 'Phủ định + any + danh từ không đếm được.', loiGiai: 'There <b>isn\'t any</b> milk (in the fridge).', giangLai: 'Ba bước: phủ định (isn\'t) → any → milk (không -s).', tienBo: 'Em đã tự viết câu đúng.', nguon: U6(6, 'use some / any for amount'), kiemTra: K6('Nhóm biên soạn liệt kê các cách viết đúng.'),
        tuongTu: { id: 'TA6F-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Tình huống: Trên bàn <b>có</b> vài quả táo. Viết một câu với "There" và "some".', chapNhan: ['there are some apples on the table', 'there are some apples'], loi: [{ mau: '\\bthere is some apples', danhDau: 'is', nhan: 'Sai động từ', phanHoi: 'apples số nhiều → are.' }, { mau: '\\bany apples', danhDau: 'any', nhan: 'Sai some/any', phanHoi: 'Khẳng định → some.' }], goiY: ['There are some …'], viSaoDung: 'There are some apples.', loiGiai: 'There <b>are some</b> apples (on the table).', giangLai: 'Số nhiều → are; khẳng định → some.', nguon: U6(6, 'some / any'), kiemTra: K6() } }
    ]
  };

  const ta6Must = {
    id: 'ta6-must-should', lop: 6, mon: 'anh', phanMon: 'Ngữ pháp', ten: 'must / mustn\'t và should / shouldn\'t',
    sgk: 'SGV Tiếng Anh 6 — Unit 5 (must / mustn\'t); Unit 6 (should / shouldn\'t)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 5 và Unit 6 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['Động từ nguyên mẫu'],
    yeuCauCanDat: ['Dùng must / mustn\'t để nêu điều bắt buộc, điều cấm.', 'Dùng should / shouldn\'t để khuyên.', 'Động từ sau must, should ở dạng nguyên mẫu không "to".'],
    bai: {
      mucTieu: ['phân biệt must (bắt buộc) và should (lời khuyên);', 'dùng mustn\'t cho điều cấm;', 'viết đúng động từ nguyên mẫu sau must, should;', 'đưa lời khuyên cho tình huống.'],
      khoiDong: { hoi: 'Ở bảo tàng có biển "No photos". Em nói thế nào bằng tiếng Anh?', goiY: 'You mustn\'t take photos.' },
      trongTam: [
        '<b>must + V</b>: phải (bắt buộc, quy định). <b>mustn\'t + V</b>: không được (cấm).',
        '<b>should + V</b>: nên (lời khuyên). <b>shouldn\'t + V</b>: không nên.',
        'Sau must, should dùng <b>động từ nguyên mẫu không "to"</b>, không thêm -s: She must <u>wear</u> (không viết must wears / must to wear).'
      ],
      viDu: { de: 'Khuyên bạn: Tết không nên cãi nhau.', loiGiai: 'You <b>shouldn\'t</b> argue at Tet.' },
      nguon: N6A('Unit 5 — Objectives: use the modal verb must / mustn\'t to give orders; Unit 6 — Objectives: use should / shouldn\'t for advice'),
      hoiDap: [{ tu: ['must'], tl: 'must: bắt buộc; mustn\'t: cấm.' }, { tu: ['should'], tl: 'should: nên; shouldn\'t: không nên.' }, { tu: ['to', 'nguyen mau'], tl: 'Sau must, should: động từ nguyên mẫu không to, không -s.' }]
    },
    cauHoi: [
      { id: 'TA6G-01', muc: 'co-ban', liDoMuc: 'Chọn modal theo biển báo cấm.', loai: 'chon1', de: 'Biển báo: "KHÔNG BƠI". Choose: <i>You ______ swim here.</i>', phuongAn: [{ t: 'mustn\'t', dung: true }, { t: 'must', phanHoi: 'must = phải, ngược nghĩa.' }, { t: 'should', phanHoi: 'should = nên.' }, { t: 'can', phanHoi: 'can = có thể.' }], goiY: ['Cấm → ?'], viSaoDung: 'Cấm → mustn\'t.', loiGiai: '<b>mustn\'t</b>.', giangLai: 'Biển cấm, nội quy → must / mustn\'t.', tienBo: 'Em đã dùng mustn\'t cho điều cấm.', nguon: U6(5, 'use the modal verb must / mustn\'t to give orders'), kiemTra: K6(),
        tuongTu: { id: 'TA6G-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Nội quy: "Phải đội mũ bảo hiểm". Choose: <i>You ______ wear a helmet.</i>', phuongAn: [{ t: 'must', dung: true }, { t: 'mustn\'t', phanHoi: 'Ngược nghĩa.' }, { t: 'shouldn\'t', phanHoi: 'Không nên.' }, { t: 'don\'t', phanHoi: 'Không.' }], goiY: ['Bắt buộc.'], viSaoDung: 'must.', loiGiai: '<b>must</b>.', giangLai: 'Bắt buộc → must.', nguon: U6(5, 'must / mustn\'t'), kiemTra: K6() } },
      { id: 'TA6G-02', muc: 'co-ban', liDoMuc: 'Chọn lời khuyên phù hợp.', loai: 'chon1', de: 'Choose: <i>Children ______ eat too many sweets at Tet. It\'s bad for their teeth.</i>', phuongAn: [{ t: 'shouldn\'t', dung: true }, { t: 'should', phanHoi: 'Ăn nhiều kẹo không tốt → không nên.' }, { t: 'must', phanHoi: 'Không phải quy định bắt buộc.' }, { t: 'mustn\'t to', phanHoi: 'Sai cấu trúc.' }], goiY: ['bad for their teeth.'], viSaoDung: 'Lời khuyên không nên.', loiGiai: '<b>shouldn\'t</b>.', giangLai: 'Lời khuyên → should / shouldn\'t.', tienBo: 'Em đã đưa lời khuyên đúng.', nguon: U6(6, 'use should / shouldn\'t for advice'), kiemTra: K6(),
        tuongTu: { id: 'TA6G-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>You look tired. You ______ go to bed early.</i>', phuongAn: [{ t: 'should', dung: true }, { t: 'shouldn\'t', phanHoi: 'Đi ngủ sớm là tốt.' }, { t: 'mustn\'t', phanHoi: 'Cấm — sai nghĩa.' }, { t: 'should to', phanHoi: 'Không có "to".' }], goiY: ['Lời khuyên tốt.'], viSaoDung: 'should.', loiGiai: '<b>should</b>.', giangLai: 'Khuyên → should.', nguon: U6(6, 'should / shouldn\'t'), kiemTra: K6() } },
      { id: 'TA6G-03', muc: 'van-dung', liDoMuc: 'Sửa lỗi động từ sau modal.', loai: 'chu', de: 'Find and correct the mistake. Rewrite: <i>She must wears a helmet.</i>', chapNhan: ['she must wear a helmet'], loi: [{ mau: '\\bmust wears\\b', danhDau: 'wears', nhan: 'Lỗi động từ sau modal', phanHoi: 'Sau must: động từ nguyên mẫu, không -s.' }, { mau: '\\bmust to wear\\b', danhDau: 'to', nhan: 'Thừa "to"', phanHoi: 'must + V (không to).' }], goiY: ['must + V nguyên mẫu.'], viSaoDung: 'must wear.', loiGiai: 'She must <b>wear</b> a helmet.', giangLai: 'Modal "giữ" động từ ở dạng gốc, dù chủ ngữ là she.', tienBo: 'Em đã sửa lỗi động từ.', nguon: U6(5, 'must / mustn\'t'), kiemTra: K6(),
        tuongTu: { id: 'TA6G-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Find and correct the mistake. Rewrite: <i>He should to help his mother.</i>', chapNhan: ['he should help his mother'], loi: [{ mau: '\\bshould to\\b', danhDau: 'to', nhan: 'Thừa "to"', phanHoi: 'should + V.' }, { mau: '\\bshould helps\\b', danhDau: 'helps', nhan: 'Lỗi động từ sau modal', phanHoi: 'Không -s.' }], goiY: ['Bỏ to.'], viSaoDung: 'should help.', loiGiai: 'He should <b>help</b> his mother.', giangLai: 'Modal + V gốc.', nguon: U6(6, 'should / shouldn\'t'), kiemTra: K6() } },
      { id: 'TA6G-04', muc: 'van-dung', liDoMuc: 'Phân biệt bắt buộc và lời khuyên trong ngữ cảnh.', loai: 'chon1', de: 'Ở hang động có quy định cấm xả rác. Bạn em muốn vứt vỏ kẹo xuống đất. Em nói:', phuongAn: [{ t: 'You mustn\'t throw rubbish here.', dung: true }, { t: 'You must throw rubbish here.', phanHoi: 'Ngược nghĩa.' }, { t: 'You should throw rubbish here.', phanHoi: 'Ngược nghĩa.' }, { t: 'You mustn\'t throws rubbish here.', phanHoi: 'Sai động từ (throws).' }], goiY: ['Quy định cấm.'], viSaoDung: 'Cấm → mustn\'t + V.', loiGiai: '<b>You mustn\'t throw rubbish here.</b>', giangLai: 'Quy định → must/mustn\'t; ý kiến cá nhân → should/shouldn\'t.', tienBo: 'Em đã chọn đúng mức độ.', nguon: U6(5, 'talk about famous places, and what you must / mustn\'t do there'), kiemTra: K6(),
        tuongTu: { id: 'TA6G-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Bạn em bị cảm. Em khuyên:', phuongAn: [{ t: 'You should stay at home and rest.', dung: true }, { t: 'You mustn\'t rest.', phanHoi: 'Sai nghĩa.' }, { t: 'You should to rest.', phanHoi: 'Thừa to.' }, { t: 'You shouldn\'t drink water.', phanHoi: 'Sai nghĩa.' }], goiY: ['Lời khuyên.'], viSaoDung: 'should + V.', loiGiai: '<b>You should stay at home and rest.</b>', giangLai: 'Khuyên → should.', nguon: U6(6, 'should / shouldn\'t'), kiemTra: K6() } },
      { id: 'TA6G-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi nhiều câu.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) We must take a raincoat. (2) You shouldn\'t to break things at Tet. (3) Students mustn\'t run in the library. (4) She should cleans the house. (5) You should give lucky money to children.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Thừa to.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'should clean.' }, { t: 'Câu (5)', dung: true }], goiY: ['Modal + V gốc.'], viSaoDung: '(1), (3), (5).', loiGiai: 'Câu đúng: (1), (3), (5).', giangLai: 'Kiểm tra từ ngay sau modal.', tienBo: 'Em đã soát lỗi modal.', nguon: U6(5, 'must / mustn\'t') , kiemTra: K6(),
        tuongTu: { id: 'TA6G-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) You mustn\'t swim alone. (2) He must goes now. (3) We should plant trees. (4) They shouldn\'t to shout.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'must go.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Thừa to.' }], goiY: ['Từ sau modal.'], viSaoDung: '(1), (3).', loiGiai: '(1), (3).', giangLai: 'Modal + V gốc.', nguon: U6(6, 'should / shouldn\'t'), kiemTra: K6() } },
      { id: 'TA6G-06', muc: 'nang-cao', liDoMuc: 'Tự viết nội quy và lời khuyên; câu mở.', loai: 'mo', de: 'Write <b>30–50 words</b>: rules for visiting a natural wonder (e.g. Ha Long Bay). Use <b>must</b>, <b>mustn\'t</b> and <b>should</b> at least once each.',
        tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có must (khẳng định).', tuDong: { mau: '\\bmust (?!not)\\w+', toiThieu: 1 } }, { t: 'Có mustn\'t / must not.', tuDong: { mau: "\\bmustn't\\b|\\bmust not\\b", toiThieu: 1 } }, { t: 'Có should / shouldn\'t.', tuDong: { mau: "\\bshould(n't)?\\b", toiThieu: 1 } }, { t: 'Không viết modal + to / V-s.', tuDong: { canhBao: "\\b(must|mustn't|should|shouldn't) to\\b|\\b(must|should) \\w+s\\b", thongBao: 'Có thể có lỗi: modal + V nguyên mẫu (không to, không -s).' } }],
        baiThamKhao: 'When you visit Ha Long Bay, you must follow the guide. You must wear a life jacket on the boat. You mustn\'t throw rubbish into the sea. You should take a hat and some water because it is often hot.', giupViet: 'Khung: You must … / You mustn\'t … / You should …', goiY: ['Ba câu, ba modal.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Mỗi modal một câu, sau đó kiểm tra động từ ngay sau modal.', tienBo: 'Em đã viết nội quy bằng tiếng Anh.', nguon: U6(5, 'talk about famous places, and what you must / mustn\'t do there'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'TA6G-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b>: what children should and shouldn\'t do at Tet.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có should.', tuDong: { mau: '\\bshould \\w+', toiThieu: 1 } }, { t: "Có shouldn't.", tuDong: { mau: "\\bshouldn't\\b|\\bshould not\\b", toiThieu: 1 } }, { t: 'Không viết should to / V-s.', tuDong: { canhBao: "\\bshould(n't)? to\\b", thongBao: 'Có thể có lỗi: should + V.' } }], baiThamKhao: 'At Tet, children should wear new clothes and visit their grandparents. They should say New Year wishes to everyone. They shouldn\'t break things or argue with their brothers and sisters. They shouldn\'t eat too many sweets.', giupViet: 'Children should … / They shouldn\'t …', goiY: ['should / shouldn\'t.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Mỗi ý một câu.', nguon: U6(6, 'should / shouldn\'t'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const ta6WhQ = {
    id: 'ta6-wh-lien-tu', lop: 6, mon: 'anh', phanMon: 'Ngữ pháp', ten: 'Câu hỏi có từ để hỏi (Wh-questions) và liên từ',
    sgk: 'SGV Tiếng Anh 6 — Unit 7 "Television" (wh-question words; conjunctions in compound sentences)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 7 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['Thì hiện tại đơn', 'and, but, so'],
    yeuCauCanDat: ['Dùng đúng What, Where, When, Who, Why, How, How many, How often… để hỏi.', 'Nối hai mệnh đề bằng and, but, so tạo câu ghép.'],
    bai: {
      mucTieu: ['chọn từ để hỏi theo câu trả lời;', 'đặt câu hỏi đúng trật tự;', 'chọn and / but / so theo nghĩa;', 'viết câu ghép.'],
      khoiDong: { hoi: 'What is your favourite TV programme? When is it on?', goiY: 'Ví dụ: My favourite programme is "Animal World". It is on at 8 p.m.' },
      trongTam: [
        '<b>What</b>: cái gì; <b>Where</b>: ở đâu; <b>When / What time</b>: khi nào / mấy giờ; <b>Who</b>: ai; <b>Why</b>: tại sao; <b>How</b>: như thế nào; <b>How many</b>: bao nhiêu (đếm được); <b>How often</b>: bao lâu một lần.',
        'Trật tự câu hỏi: <b>Wh- + do/does + S + V?</b> (What do you watch?) hoặc <b>Wh- + be + S?</b> (Where is the remote?).',
        '<b>and</b>: thêm ý; <b>but</b>: trái ngược; <b>so</b>: kết quả. Câu ghép: mệnh đề 1, + liên từ + mệnh đề 2.'
      ],
      viDu: { de: 'Đặt câu hỏi cho phần gạch chân: I watch TV <u>twice a week</u>.', loiGiai: '<b>How often</b> do you watch TV?' },
      nguon: N6A('Unit 7 "Television" — Objectives: use wh-question words to make questions; use conjunctions to connect clauses in compound sentences'),
      hoiDap: [{ tu: ['how often'], tl: 'How often hỏi về tần suất: every day, twice a week…' }, { tu: ['but', 'so', 'and'], tl: 'and: thêm ý; but: trái ngược; so: kết quả.' }]
    },
    cauHoi: [
      { id: 'TA6H-01', muc: 'co-ban', liDoMuc: 'Chọn từ để hỏi theo câu trả lời.', loai: 'chon1', de: 'A: <i>______ is the cartoon on?</i> — B: <i>It\'s on at 7 o\'clock.</i>', phuongAn: [{ t: 'What time', dung: true }, { t: 'Where', phanHoi: 'Hỏi nơi chốn.' }, { t: 'Who', phanHoi: 'Hỏi người.' }, { t: 'How many', phanHoi: 'Hỏi số lượng.' }], goiY: ['at 7 o\'clock → giờ.'], viSaoDung: 'Hỏi giờ → What time.', loiGiai: '<b>What time</b>.', giangLai: 'Nhìn câu trả lời để đoán từ để hỏi.', tienBo: 'Em đã chọn đúng từ để hỏi.', nguon: U6(7, 'use wh-question words to make questions'), kiemTra: K6(),
        tuongTu: { id: 'TA6H-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'A: <i>______ is your favourite TV character?</i> — B: <i>Mr Bean.</i>', phuongAn: [{ t: 'Who', dung: true }, { t: 'Where', phanHoi: 'Nơi chốn.' }, { t: 'When', phanHoi: 'Thời gian.' }, { t: 'Why', phanHoi: 'Lí do.' }], goiY: ['Người.'], viSaoDung: 'Who.', loiGiai: '<b>Who</b>.', giangLai: 'Người → Who.', nguon: U6(7, 'wh-question words'), kiemTra: K6() } },
      { id: 'TA6H-02', muc: 'co-ban', liDoMuc: 'Chọn liên từ theo nghĩa.', loai: 'chon1', de: 'Choose: <i>I like cartoons, ______ my brother likes sports programmes.</i>', phuongAn: [{ t: 'but', dung: true }, { t: 'so', phanHoi: 'Không có quan hệ nguyên nhân – kết quả.' }, { t: 'and', phanHoi: 'Hai sở thích khác nhau → ý trái ngược.' }, { t: 'because', phanHoi: 'Không chỉ lí do.' }], goiY: ['Hai ý khác nhau.'], viSaoDung: 'Trái ngược → but.', loiGiai: '<b>but</b>.', giangLai: 'Khác nhau → but; thêm ý giống → and; kết quả → so.', tienBo: 'Em đã chọn đúng liên từ.', nguon: U6(7, 'use conjunctions to connect clauses in compound sentences'), kiemTra: K6(),
        tuongTu: { id: 'TA6H-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>The film was boring, ______ I turned off the TV.</i>', phuongAn: [{ t: 'so', dung: true }, { t: 'but', phanHoi: 'Không trái ngược.' }, { t: 'and', phanHoi: 'Có quan hệ kết quả.' }, { t: 'or', phanHoi: 'Không.' }], goiY: ['Kết quả.'], viSaoDung: 'so.', loiGiai: '<b>so</b>.', giangLai: 'Kết quả → so.', nguon: U6(7, 'conjunctions'), kiemTra: K6() } },
      { id: 'TA6H-03', muc: 'van-dung', liDoMuc: 'Đặt câu hỏi cho phần gạch chân.', loai: 'chu', nhieuCachDung: true, de: 'Write a question for the underlined part: <i>I watch TV <u>for two hours</u> a day.</i><br>→ <b>How …?</b>', chapNhan: ['how long do you watch tv a day', 'how many hours do you watch tv a day', 'how long do you watch tv each day', 'how many hours a day do you watch tv'], loi: [{ mau: '^how often', danhDau: 'often', nhan: 'Sai từ để hỏi', phanHoi: '"for two hours" là khoảng thời gian → How long / How many hours.' }, { mau: '\\bhow long you watch\\b|\\bhow many hours you watch\\b', danhDau: 'you', nhan: 'Thiếu trợ động từ', phanHoi: 'Cần "do": How long <b>do</b> you watch…?' }], goiY: ['Khoảng thời gian.'], viSaoDung: 'How long / How many hours do you…?', loiGiai: '<b>How long do you watch TV a day?</b>', giangLai: 'Câu hỏi = Wh- + do/does + chủ ngữ + V.', tienBo: 'Em đã đặt câu hỏi đúng trật tự.', nguon: U6(7, 'use wh-question words to make questions'), kiemTra: K6('Chấp nhận How long / How many hours.'),
        tuongTu: { id: 'TA6H-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Write a question for the underlined part: <i>My sister watches the news <u>every evening</u>.</i>', chapNhan: ['how often does your sister watch the news', 'when does your sister watch the news'], loi: [{ mau: '\\bdoes your sister watches\\b', danhDau: 'watches', nhan: 'Lỗi động từ', phanHoi: 'does + V gốc: watch.' }, { mau: '\\bhow often do your sister\\b', danhDau: 'do', nhan: 'Sai trợ động từ', phanHoi: 'your sister → does.' }], goiY: ['every evening → How often / When.'], viSaoDung: 'How often does your sister watch…?', loiGiai: '<b>How often does your sister watch the news?</b>', giangLai: 'does + V gốc.', nguon: U6(7, 'wh-questions'), kiemTra: K6() } },
      { id: 'TA6H-04', muc: 'van-dung', liDoMuc: 'Nối hai câu bằng liên từ.', loai: 'chu', nhieuCachDung: true, de: 'Combine using <b>so</b>: <i>I was tired. I went to bed early.</i>', chapNhan: ['i was tired so i went to bed early'], loi: [{ mau: '\\bbut\\b', danhDau: 'but', nhan: 'Sai liên từ', phanHoi: 'Đề yêu cầu so.' }, { mau: '^so\\b', danhDau: 'so', nhan: 'Sai vị trí', phanHoi: 'so đứng giữa, trước mệnh đề kết quả.' }], goiY: ['Nguyên nhân, so kết quả.'], viSaoDung: 'I was tired, so I went to bed early.', loiGiai: 'I was tired, <b>so</b> I went to bed early.', giangLai: 'so đặt trước điều xảy ra sau (kết quả).', tienBo: 'Em đã viết câu ghép.', nguon: U6(7, 'use conjunctions to connect clauses in compound sentences'), kiemTra: K6('Chấp nhận có hoặc không có dấu phẩy.'),
        tuongTu: { id: 'TA6H-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Combine using <b>but</b>: <i>The programme is long. It is interesting.</i>', chapNhan: ['the programme is long but it is interesting', "the programme is long but it's interesting", 'the programme is long but interesting'], loi: [{ mau: '\\bso\\b', danhDau: 'so', nhan: 'Sai liên từ', phanHoi: 'Yêu cầu but.' }], goiY: ['…, but …'], viSaoDung: 'but.', loiGiai: 'The programme is long, <b>but</b> it is interesting.', giangLai: 'Trái ngược → but.', nguon: U6(7, 'conjunctions'), kiemTra: K6() } },
      { id: 'TA6H-05', muc: 'nang-cao', liDoMuc: 'Ghép câu hỏi – câu trả lời, nhiều cặp.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các cặp hỏi – đáp <b>phù hợp</b>.', phuongAn: [{ t: 'Where is the TV? — It\'s in the living room.', dung: true }, { t: 'Why do you like cartoons? — Because they are funny.', dung: true }, { t: 'How many channels are there? — At 8 p.m.', phanHoi: 'How many hỏi số lượng, không hỏi giờ.' }, { t: 'Who is your favourite MC? — It\'s VTV3.', phanHoi: 'Who hỏi người; VTV3 là kênh.' }, { t: 'How often do you watch TV? — Every day.', dung: true }], goiY: ['Khớp từ để hỏi với câu trả lời.'], viSaoDung: 'Ý 1, 2, 5.', loiGiai: 'Ý 1, 2, 5.', giangLai: 'Mỗi từ để hỏi "đòi" một kiểu thông tin.', tienBo: 'Em đã ghép đúng.', nguon: U6(7, 'ask for and give information about TV programmes'), kiemTra: K6(),
        tuongTu: { id: 'TA6H-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu hỏi <b>đúng trật tự</b>.', phuongAn: [{ t: 'What do you usually watch?', dung: true }, { t: 'Where you watch TV?', phanHoi: 'Thiếu do.' }, { t: 'When does the show start?', dung: true }, { t: 'Why she likes the show?', phanHoi: 'Why does she like…?' }], goiY: ['Wh- + do/does + S + V.'], viSaoDung: 'Ý 1, 3.', loiGiai: 'Ý 1, 3.', giangLai: 'Trợ động từ.', nguon: U6(7, 'wh-questions'), kiemTra: K6() } },
      { id: 'TA6H-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn về thói quen xem TV, dùng liên từ; câu mở.', loai: 'mo', de: 'Write <b>40–60 words</b> about your TV-viewing habits. Use at least <b>two</b> of the conjunctions and / but / so.',
        tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có ít nhất 2 liên từ and / but / so.', tuDong: { mau: '\\b(and|but|so)\\b', toiThieu: 2 } }, { t: 'Có thông tin tần suất / thời gian.', tuDong: { mau: '\\b(every|usually|often|sometimes|hours?|minutes?|at weekends|in the evening)\\b', toiThieu: 1 } }],
        baiThamKhao: 'I usually watch TV for about one hour a day. I like cartoons and animal programmes because they are fun and interesting. I watch TV in the evening, but I never watch it before I finish my homework. Watching too much TV is bad for my eyes, so I also read books and play sports.', giupViet: 'Khung: I watch TV … a day. I like … and … I …, but … / …, so …', goiY: ['Bao lâu, xem gì, khi nào.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Trả lời 3 câu hỏi: How often? What? Why? rồi nối bằng and/but/so.', tienBo: 'Em đã viết đoạn văn có câu ghép.', nguon: U6(7, 'write a paragraph about TV-viewing habits'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'TA6H-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about your favourite TV programme. Use at least one of and / but / so.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có liên từ.', tuDong: { mau: '\\b(and|but|so)\\b', toiThieu: 1 } }, { t: 'Nêu thời gian / kênh.', tuDong: { mau: '\\b(on|at|channel|vtv\\w*|p\\.?m|a\\.?m)\\b', toiThieu: 1 } }], baiThamKhao: 'My favourite TV programme is "The Animal World". It is on VTV2 at 7 p.m. every Sunday. I like it because I can learn about wild animals. It is a bit long, but it is very interesting.', giupViet: 'Tên chương trình → khi nào → vì sao thích.', goiY: ['3–4 câu.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'What – When – Why.', nguon: U6(7, 'talk about a favourite TV programme'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const ta6QuaKhu = {
    id: 'ta6-qua-khu-don', lop: 6, mon: 'anh', phanMon: 'Ngữ pháp', ten: 'Thì quá khứ đơn và câu mệnh lệnh',
    sgk: 'SGV Tiếng Anh 6 — Unit 8 "Sports and Games" (past simple; imperatives)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 8 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['Thì hiện tại đơn'],
    yeuCauCanDat: ['Dùng thì quá khứ đơn: động từ có quy tắc (-ed), bất quy tắc thường gặp; was / were.', 'Dùng câu mệnh lệnh khẳng định, phủ định.'],
    bai: {
      mucTieu: ['thêm -ed đúng chính tả;', 'nhớ động từ bất quy tắc thường gặp;', 'dùng did / didn\'t;', 'viết câu mệnh lệnh.'],
      khoiDong: { hoi: 'What did you do last weekend?', goiY: 'Ví dụ: I played football with my friends.' },
      trongTam: [
        '<b>Quá khứ đơn</b> (việc đã xong trong quá khứ): S + V-ed / V2. Dấu hiệu: yesterday, last week, ago, in 2020.',
        'Có quy tắc: play → play<b>ed</b>, watch → watch<b>ed</b>, stop → sto<b>pp</b>ed, study → stud<b>ied</b>. Bất quy tắc: go → <b>went</b>, have → <b>had</b>, see → <b>saw</b>, win → <b>won</b>, swim → <b>swam</b>.',
        'be: I / he / she / it → <b>was</b>; you / we / they → <b>were</b>.',
        'Phủ định, câu hỏi: <b>didn\'t + V</b>; <b>Did + S + V?</b> (động từ trở về nguyên mẫu).',
        '<b>Câu mệnh lệnh</b>: V + … (Stand up!); phủ định: <b>Don\'t</b> + V (Don\'t run!).'
      ],
      viDu: { de: 'Chuyển sang phủ định: She went to the gym yesterday.', loiGiai: 'She <b>didn\'t go</b> to the gym yesterday.' },
      nguon: N6A('Unit 8 "Sports and Games" — Objectives: use the past simple; use imperatives to tell someone to do something'),
      hoiDap: [{ tu: ['qua khu', 'past', 'ed'], tl: 'Quá khứ đơn: V-ed hoặc V2 bất quy tắc; phủ định didn\'t + V.' }, { tu: ['menh lenh', "don't"], tl: 'Mệnh lệnh: V…! Phủ định: Don\'t + V!' }]
    },
    cauHoi: [
      { id: 'TA6I-01', muc: 'co-ban', liDoMuc: 'Chia động từ bất quy tắc.', loai: 'chu', de: 'Write the past form: <i>Yesterday we ______ (go) swimming.</i> <span class="note">Gõ một từ.</span>', chapNhan: ['went'], loi: [{ mau: '^goed$', danhDau: 'goed', nhan: 'Bất quy tắc', phanHoi: 'go là động từ bất quy tắc: went.' }, { mau: '^go(es)?$', danhDau: '*', nhan: 'Sai thì', phanHoi: 'Yesterday → quá khứ.' }], goiY: ['go → ?'], viSaoDung: 'went.', loiGiai: '<b>went</b>.', giangLai: 'Học thuộc nhóm hay gặp: go – went, have – had, see – saw, win – won.', tienBo: 'Em đã nhớ động từ bất quy tắc.', nguon: U6(8, 'use the past simple'), kiemTra: K6(),
        tuongTu: { id: 'TA6I-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, có quy tắc.', loai: 'chu', de: 'Write the past form: <i>He ______ (play) chess last night.</i> <span class="note">Gõ một từ.</span>', chapNhan: ['played'], loi: [{ mau: '^plaied$', danhDau: 'plaied', nhan: 'Lỗi chính tả', phanHoi: 'Nguyên âm + y → giữ y: played.' }, { mau: '^plays?$', danhDau: '*', nhan: 'Sai thì', phanHoi: 'last night → quá khứ.' }], goiY: ['+ed.'], viSaoDung: 'played.', loiGiai: '<b>played</b>.', giangLai: 'Nguyên âm + y → +ed.', nguon: U6(8, 'past simple'), kiemTra: K6() } },
      { id: 'TA6I-02', muc: 'co-ban', liDoMuc: 'Chọn was / were.', loai: 'chon1', de: 'Choose: <i>The match ______ very exciting last Sunday.</i>', phuongAn: [{ t: 'was', dung: true }, { t: 'were', phanHoi: 'The match số ít → was.' }, { t: 'is', phanHoi: 'last Sunday → quá khứ.' }, { t: 'did', phanHoi: 'Cần động từ be.' }], goiY: ['Số ít, quá khứ.'], viSaoDung: 'was.', loiGiai: '<b>was</b>.', giangLai: 'is/am → was; are → were.', tienBo: 'Em đã chọn was/were đúng.', nguon: U6(8, 'use the past simple'), kiemTra: K6(),
        tuongTu: { id: 'TA6I-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>My friends ______ at the stadium yesterday.</i>', phuongAn: [{ t: 'were', dung: true }, { t: 'was', phanHoi: 'Số nhiều.' }, { t: 'are', phanHoi: 'Quá khứ.' }, { t: 'did', phanHoi: 'Không.' }], goiY: ['Số nhiều.'], viSaoDung: 'were.', loiGiai: '<b>were</b>.', giangLai: 'are → were.', nguon: U6(8, 'past simple'), kiemTra: K6() } },
      { id: 'TA6I-03', muc: 'van-dung', liDoMuc: 'Viết câu phủ định quá khứ.', loai: 'chu', de: 'Make the sentence negative: <i>Minh won the race.</i>', chapNhan: ["minh didn't win the race", 'minh did not win the race'], loi: [{ mau: "\\bdidn't won\\b|\\bdid not won\\b", danhDau: 'won', nhan: 'Lỗi động từ', phanHoi: 'Sau didn\'t, động từ trở về nguyên mẫu: win.' }, { mau: "\\bdoesn't\\b|\\bdon't\\b", danhDau: ["doesn't", "don't"], nhan: 'Sai thì', phanHoi: 'Quá khứ → didn\'t.' }], goiY: ['didn\'t + V nguyên mẫu.'], viSaoDung: 'Minh didn\'t win the race.', loiGiai: "Minh <b>didn't win</b> the race.", giangLai: '"did" đã mang dấu hiệu quá khứ nên động từ chính trở về dạng gốc.', tienBo: 'Em đã viết câu phủ định đúng.', nguon: U6(8, 'use the past simple'), kiemTra: K6(),
        tuongTu: { id: 'TA6I-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc, câu hỏi.', loai: 'chu', de: 'Make a Yes/No question: <i>They saw the football match.</i>', chapNhan: ['did they see the football match'], loi: [{ mau: '\\bdid they saw\\b', danhDau: 'saw', nhan: 'Lỗi động từ', phanHoi: 'Did + S + V nguyên mẫu: see.' }, { mau: '^do they', danhDau: 'do', nhan: 'Sai thì', phanHoi: 'Quá khứ → Did.' }], goiY: ['Did + S + V?'], viSaoDung: 'Did they see…?', loiGiai: '<b>Did they see</b> the football match?', giangLai: 'Did + V gốc.', nguon: U6(8, 'past simple'), kiemTra: K6() } },
      { id: 'TA6I-04', muc: 'van-dung', liDoMuc: 'Viết câu mệnh lệnh phủ định theo tình huống.', loai: 'chu', nhieuCachDung: true, de: 'Biển ở bể bơi: cấm chạy. Viết <b>câu mệnh lệnh</b> tiếng Anh với "run".', chapNhan: ["don't run", 'do not run', "don't run!", "don't run here", 'do not run here', "don't run near the pool", "don't run around the pool"], loi: [{ mau: "^not run|^no run", danhDau: '*', nhan: 'Sai cấu trúc', phanHoi: 'Mệnh lệnh phủ định: Don\'t + V.' }, { mau: "\\bdon't running\\b|\\bdon't runs\\b", danhDau: '*', nhan: 'Lỗi động từ', phanHoi: 'Don\'t + V nguyên mẫu: run.' }, { mau: '^you mustn', danhDau: '*', nhan: 'Chưa đúng yêu cầu', phanHoi: 'Câu này đúng nghĩa nhưng đề yêu cầu câu mệnh lệnh: Don\'t …' }], goiY: ['Don\'t + V.'], viSaoDung: 'Don\'t run!', loiGiai: "<b>Don't run!</b>", giangLai: 'Mệnh lệnh không có chủ ngữ, bắt đầu bằng động từ (hoặc Don\'t).', tienBo: 'Em đã viết câu mệnh lệnh.', nguon: U6(8, 'use imperatives to tell someone to do something'), kiemTra: K6('Chấp nhận các biến thể có thêm nơi chốn.'),
        tuongTu: { id: 'TA6I-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Thầy giáo thể dục bảo cả lớp đứng thành hàng. Viết câu mệnh lệnh với "stand in a line".', chapNhan: ['stand in a line', 'please stand in a line', 'stand in a line please'], loi: [{ mau: '^you stand', danhDau: 'you', nhan: 'Sai cấu trúc', phanHoi: 'Mệnh lệnh không cần chủ ngữ.' }, { mau: '^standing', danhDau: 'standing', nhan: 'Lỗi động từ', phanHoi: 'V nguyên mẫu.' }], goiY: ['Bắt đầu bằng động từ.'], viSaoDung: 'Stand in a line.', loiGiai: '<b>Stand in a line!</b>', giangLai: 'V… !', nguon: U6(8, 'imperatives'), kiemTra: K6() } },
      { id: 'TA6I-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi quá khứ trong đoạn.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) Last summer I learned to swim. (2) We goed to the beach every day. (3) My dad teached me. (4) It was very fun. (5) I didn\'t felt afraid.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Đúng.' }, { t: 'Câu (5)', dung: true }], goiY: ['Động từ bất quy tắc; sau didn\'t.'], viSaoDung: '(2) went; (3) taught; (5) feel.', loiGiai: '(2) <b>went</b>; (3) <b>taught</b>; (5) didn\'t <b>feel</b>.', giangLai: 'Ba bẫy: bất quy tắc (go, teach) và động từ sau didn\'t.', tienBo: 'Em đã soát lỗi quá khứ.', nguon: U6(8, 'use the past simple'), kiemTra: K6(),
        tuongTu: { id: 'TA6I-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) She watched the game. (2) They was tired. (3) Did you saw him? (4) We had a picnic.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Đúng.' }], goiY: ['were; Did + V.'], viSaoDung: '(2), (3).', loiGiai: '(2) were; (3) see.', giangLai: 'Bẫy quen thuộc.', nguon: U6(8, 'past simple'), kiemTra: K6() } },
      { id: 'TA6I-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn kể về trận đấu đã xem / chơi; câu mở.', loai: 'mo', de: 'Write <b>40–60 words</b> about a sport or game you played or watched last week. Use the past simple.',
        tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có ít nhất 3 động từ quá khứ (-ed hoặc bất quy tắc).', tuDong: { mau: '\\b(\\w+ed|went|had|saw|won|lost|swam|ran|made|took|was|were|got|came|felt|bought|told|said)\\b', toiThieu: 3 } }, { t: 'Có mốc thời gian quá khứ.', tuDong: { mau: '\\b(last|yesterday|ago)\\b', toiThieu: 1 } }, { t: 'Không dùng sai V sau didn\'t / goed.', tuDong: { canhBao: "\\bdidn't \\w+ed\\b|\\bdid not \\w+ed\\b|\\bgoed\\b|\\bteached\\b", thongBao: 'Có thể có lỗi động từ quá khứ.' } }],
        baiThamKhao: 'Last Saturday I played badminton with my cousin in the park. The weather was nice and cool. We played three games. I won two games, and she won one. After that, we had some ice cream. I felt very happy because I played well.', giupViet: 'Khung: Last … I played/watched … with … It was … I won/lost … After that, we …', goiY: ['Khi nào, với ai, kết quả, cảm xúc.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Mỗi câu một việc đã xảy ra, động từ ở quá khứ.', tienBo: 'Em đã kể lại sự việc bằng quá khứ đơn.', nguon: U6(8, 'write a paragraph about a sport / game'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'TA6I-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about what you did last weekend.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 3 động từ quá khứ.', tuDong: { mau: '\\b(\\w+ed|went|had|saw|won|swam|ran|made|took|was|were|got|came|felt|bought)\\b', toiThieu: 3 } }, { t: 'Có mốc thời gian.', tuDong: { mau: '\\b(last|yesterday|ago)\\b', toiThieu: 1 } }], baiThamKhao: 'Last weekend I visited my grandparents in the countryside. I helped my grandmother cook lunch. In the afternoon, I went fishing with my grandfather. We caught three fish. It was a great weekend.', giupViet: 'Last weekend I … / Then I … / It was …', goiY: ['Kể theo thứ tự.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Theo thứ tự thời gian.', nguon: U6(8, 'past simple'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const ta6SoHuu = {
    id: 'ta6-so-huu', lop: 6, mon: 'anh', phanMon: 'Ngữ pháp', ten: 'Tính từ sở hữu và đại từ sở hữu',
    sgk: 'SGV Tiếng Anh 6 — Unit 9 "Cities of the World" (possessive adjectives and possessive pronouns)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 9 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['Đại từ nhân xưng I, you, he, she, it, we, they'],
    yeuCauCanDat: ['Dùng tính từ sở hữu (my, your, his, her, its, our, their) trước danh từ.', 'Dùng đại từ sở hữu (mine, yours, his, hers, ours, theirs) thay cho tính từ sở hữu + danh từ.'],
    bai: {
      mucTieu: ['chọn tính từ sở hữu theo người sở hữu;', 'phân biệt my / mine;', 'viết lại câu dùng đại từ sở hữu;', 'tránh lỗi "it\'s / its".'],
      khoiDong: { hoi: 'This is my bag. Nói "Cái cặp này là của tôi" theo cách ngắn hơn?', goiY: 'This bag is <b>mine</b>.' },
      trongTam: [
        '<b>Tính từ sở hữu</b> + danh từ: I → <b>my</b>, you → <b>your</b>, he → <b>his</b>, she → <b>her</b>, it → <b>its</b>, we → <b>our</b>, they → <b>their</b>.',
        '<b>Đại từ sở hữu</b> đứng một mình (không có danh từ sau): <b>mine, yours, his, hers, ours, theirs</b>.',
        'my book = mine; her city = hers. <b>its</b> (của nó) không có dấu nháy; <b>it\'s</b> = it is.'
      ],
      viDu: { de: 'Viết lại: This is their house. → This house is …', loiGiai: 'This house is <b>theirs</b>.' },
      nguon: N6A('Unit 9 "Cities of the World" — Objectives: use possessive adjectives and possessive pronouns'),
      hoiDap: [{ tu: ['mine', 'yours', 'dai tu so huu'], tl: 'Đại từ sở hữu đứng một mình: mine, yours, his, hers, ours, theirs.' }, { tu: ['its', "it's"], tl: 'its = của nó; it\'s = it is.' }]
    },
    cauHoi: [
      { id: 'TA6J-01', muc: 'co-ban', liDoMuc: 'Chọn tính từ sở hữu.', loai: 'chon1', de: 'Choose: <i>Lan and Mai live in Hanoi. ______ school is near the lake.</i>', phuongAn: [{ t: 'Their', dung: true }, { t: 'Theirs', phanHoi: 'Có danh từ "school" phía sau → tính từ sở hữu.' }, { t: 'Her', phanHoi: 'Hai người → their.' }, { t: 'They', phanHoi: 'Đại từ chủ ngữ.' }], goiY: ['Lan and Mai = they.'], viSaoDung: 'Their + school.', loiGiai: '<b>Their</b>.', giangLai: 'Có danh từ theo sau → my/your/his/her/its/our/their.', tienBo: 'Em đã chọn đúng tính từ sở hữu.', nguon: U6(9, 'use possessive adjectives and possessive pronouns'), kiemTra: K6(),
        tuongTu: { id: 'TA6J-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>Sydney is famous for ______ Opera House.</i>', phuongAn: [{ t: 'its', dung: true }, { t: "it's", phanHoi: "it's = it is." }, { t: 'their', phanHoi: 'Sydney số ít.' }, { t: 'his', phanHoi: 'Thành phố → its.' }], goiY: ['Sydney = it.'], viSaoDung: 'its.', loiGiai: '<b>its</b>.', giangLai: 'its không có dấu nháy.', nguon: U6(9, 'possessive adjectives'), kiemTra: K6() } },
      { id: 'TA6J-02', muc: 'co-ban', liDoMuc: 'Chọn đại từ sở hữu.', loai: 'chon1', de: 'Choose: <i>This postcard is not mine. It\'s ______. (của cô ấy)</i>', phuongAn: [{ t: 'hers', dung: true }, { t: 'her', phanHoi: 'Không có danh từ phía sau → đại từ sở hữu hers.' }, { t: "her's", phanHoi: 'Không có dấu nháy.' }, { t: 'she', phanHoi: 'Đại từ chủ ngữ.' }], goiY: ['Đứng một mình.'], viSaoDung: 'hers.', loiGiai: '<b>hers</b>.', giangLai: 'Đại từ sở hữu không bao giờ có dấu nháy.', tienBo: 'Em đã chọn đại từ sở hữu.', nguon: U6(9, 'possessive pronouns'), kiemTra: K6(),
        tuongTu: { id: 'TA6J-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>Is this map yours or ______? (của chúng tôi)</i>', phuongAn: [{ t: 'ours', dung: true }, { t: 'our', phanHoi: 'Không có danh từ sau.' }, { t: "our's", phanHoi: 'Không nháy.' }, { t: 'us', phanHoi: 'Tân ngữ.' }], goiY: ['Đứng một mình.'], viSaoDung: 'ours.', loiGiai: '<b>ours</b>.', giangLai: 'Không nháy.', nguon: U6(9, 'possessive pronouns'), kiemTra: K6() } },
      { id: 'TA6J-03', muc: 'van-dung', liDoMuc: 'Viết lại câu với đại từ sở hữu.', loai: 'chu', de: 'Rewrite using a possessive pronoun: <i>This is my camera.</i> → <b>This camera is ______.</b> <span class="note">Gõ một từ.</span>', chapNhan: ['mine'], loi: [{ mau: '^my$', danhDau: 'my', nhan: 'Nhầm tính từ sở hữu', phanHoi: 'Không có danh từ phía sau → mine.' }, { mau: '^mines$', danhDau: 'mines', nhan: 'Lỗi chính tả', phanHoi: 'mine không có -s.' }], goiY: ['my + danh từ = ?'], viSaoDung: 'mine.', loiGiai: 'This camera is <b>mine</b>.', giangLai: 'my camera → mine.', tienBo: 'Em đã đổi sang đại từ sở hữu.', nguon: U6(9, 'possessive pronouns'), kiemTra: K6(),
        tuongTu: { id: 'TA6J-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Rewrite: <i>These are their tickets.</i> → <b>These tickets are ______.</b>', chapNhan: ['theirs'], loi: [{ mau: '^their$', danhDau: 'their', nhan: 'Nhầm tính từ sở hữu', phanHoi: 'theirs.' }, { mau: "^their's$", danhDau: "their's", nhan: 'Thừa dấu nháy', phanHoi: 'theirs.' }], goiY: ['their → ?'], viSaoDung: 'theirs.', loiGiai: '<b>theirs</b>.', giangLai: '+s, không nháy.', nguon: U6(9, 'possessive pronouns'), kiemTra: K6() } },
      { id: 'TA6J-04', muc: 'van-dung', liDoMuc: 'Phân biệt its / it\'s.', loai: 'chu', de: 'Complete with <b>its</b> or <b>it\'s</b>: <i>Paris is beautiful. ______ streets are very romantic.</i> <span class="note">Gõ một từ.</span>', chapNhan: ['its'], loi: [{ mau: "^it's$|^it is$", danhDau: '*', nhan: "Nhầm its / it's", phanHoi: '"it\'s streets" = "it is streets" — sai. Cần "của nó": its.' }], goiY: ['Thay thử "it is".'], viSaoDung: 'its streets = đường phố của nó.', loiGiai: '<b>Its</b> streets…', giangLai: 'Mẹo: thay bằng "it is" — đọc được thì dùng it\'s, không được thì its.', tienBo: 'Em đã phân biệt its và it\'s.', nguon: U6(9, 'possessive adjectives'), kiemTra: K6(),
        tuongTu: { id: 'TA6J-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Complete with <b>its</b> or <b>it\'s</b>: <i>I love Tokyo. ______ a modern city.</i>', chapNhan: ["it's", 'it is'], loi: [{ mau: '^its$', danhDau: 'its', nhan: "Nhầm its / it's", phanHoi: 'Ở đây nghĩa là "nó là" → it\'s.' }], goiY: ['Thay "it is".'], viSaoDung: "it's.", loiGiai: "<b>It's</b>.", giangLai: 'Mẹo thay "it is".', nguon: U6(9, 'possessive adjectives'), kiemTra: K6() } },
      { id: 'TA6J-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi sở hữu nhiều câu.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) Is this umbrella your? (2) Our city is very clean. (3) This room is her\'s. (4) The dog wagged its tail. (5) Their house is bigger than ours.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Đúng.' }, { t: 'Câu (5)', phanHoi: 'Đúng.' }], goiY: ['Có danh từ sau không? Có dấu nháy không?'], viSaoDung: '(1) yours; (3) hers.', loiGiai: '(1) yours; (3) hers.', giangLai: 'Cuối câu không có danh từ → đại từ sở hữu; đại từ sở hữu không có nháy.', tienBo: 'Em đã soát lỗi sở hữu.', nguon: U6(9, 'possessive adjectives and possessive pronouns'), kiemTra: K6(),
        tuongTu: { id: 'TA6J-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) My brother loves his bike. (2) These books are their. (3) Is that phone mine? (4) Mine bag is red.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', phanHoi: 'Đúng.' }, { t: 'Câu (4)', dung: true }], goiY: ['Có danh từ sau?'], viSaoDung: '(2) theirs; (4) My.', loiGiai: '(2), (4).', giangLai: 'Danh từ sau → tính từ sở hữu.', nguon: U6(9, 'possessive'), kiemTra: K6() } },
      { id: 'TA6J-06', muc: 'nang-cao', liDoMuc: 'Tự viết tấm bưu thiếp, dùng đúng sở hữu; câu mở.', loai: 'mo', de: 'Write a holiday postcard (<b>40–60 words</b>) to a friend about a city you visited. Use at least <b>three</b> possessive words (my, our, its, their, mine…).',
        tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có ít nhất 3 từ sở hữu.', tuDong: { mau: '\\b(my|your|his|her|its|our|their|mine|yours|hers|ours|theirs)\\b', toiThieu: 3 } }, { t: 'Có lời chào đầu / cuối thư.', tuDong: { mau: '\\b(dear|hi|hello|love|best wishes|see you)\\b', toiThieu: 1 } }, { t: "Không viết her's / their's / it's + danh từ sai.", tuDong: { canhBao: "\\b(her's|their's|our's|your's)\\b", thongBao: 'Đại từ sở hữu không có dấu nháy.' } }],
        baiThamKhao: 'Dear Lan, I am in Da Nang with my family. The city is beautiful and its beaches are very clean. Our hotel is near the Dragon Bridge. The people here are friendly and their seafood is delicious. My brother bought a hat, and I bought one too. His is blue and mine is red. See you soon, Mai', giupViet: 'Dear …, I am in … with my … Its … / Our … See you soon, …', goiY: ['Thư ngắn có chào hỏi.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Đánh dấu các từ sở hữu, kiểm tra có danh từ sau hay không.', tienBo: 'Em đã viết bưu thiếp.', nguon: U6(9, 'write a holiday postcard'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'TA6J-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> describing your city. Use at least two possessive adjectives.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 2 tính từ sở hữu.', tuDong: { mau: '\\b(my|our|its|their|his|her)\\b', toiThieu: 2 } }, { t: 'Không nhầm its/it\'s.', tuDong: { canhBao: "\\bit's (streets|people|beaches|buildings|parks|food)\\b", thongBao: "Có thể nhầm it's với its." } }], baiThamKhao: 'My city is Vung Tau. It is near the sea. Its beaches are long and beautiful. Our people are friendly. My favourite place is the Christ statue because I can see the whole city from there.', giupViet: 'My city is … Its … Our …', goiY: ['its / our.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'its = của nó.', nguon: U6(9, 'talk about a city'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const ta6TuongLai = {
    id: 'ta6-tuong-lai', lop: 6, mon: 'anh', phanMon: 'Ngữ pháp', ten: 'Tương lai đơn (will) và might',
    sgk: 'SGV Tiếng Anh 6 — Unit 10 "Our Houses in the Future" (future simple; might)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 10 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['Động từ nguyên mẫu'],
    yeuCauCanDat: ['Dùng will / won\'t + V để nói về tương lai.', 'Dùng might + V để nói khả năng có thể xảy ra (không chắc chắn).'],
    bai: {
      mucTieu: ['viết đúng will + V;', 'phủ định won\'t;', 'phân biệt will (chắc) và might (có thể);', 'viết về ngôi nhà mơ ước.'],
      khoiDong: { hoi: 'Where will you live in the future?', goiY: 'Ví dụ: I will live in a house by the sea.' },
      trongTam: [
        '<b>will + V</b> (nguyên mẫu): sẽ. Phủ định: <b>won\'t</b> (= will not) + V. Câu hỏi: <b>Will</b> + S + V?',
        '<b>might + V</b>: có thể sẽ (không chắc chắn). Phủ định: might not + V.',
        'Sau will, might: động từ nguyên mẫu, không to, không -s.'
      ],
      viDu: { de: 'Nói "Nhà tôi có thể sẽ có rô-bốt" (không chắc).', loiGiai: 'My house <b>might have</b> a robot.' },
      nguon: N6A('Unit 10 "Our Houses in the Future" — Objectives: use future simple and might for future possibility'),
      hoiDap: [{ tu: ['will', "won't"], tl: 'will + V: sẽ; won\'t + V: sẽ không.' }, { tu: ['might'], tl: 'might + V: có thể sẽ (không chắc).' }]
    },
    cauHoi: [
      { id: 'TA6K-01', muc: 'co-ban', liDoMuc: 'Chọn dạng đúng sau will.', loai: 'chon1', de: 'Choose: <i>In the future, robots will ______ the housework.</i>', phuongAn: [{ t: 'do', dung: true }, { t: 'does', phanHoi: 'Sau will: nguyên mẫu.' }, { t: 'to do', phanHoi: 'Không có to.' }, { t: 'doing', phanHoi: 'Không V-ing.' }], goiY: ['will + V.'], viSaoDung: 'will do.', loiGiai: '<b>do</b>.', giangLai: 'will giống must, should: theo sau là V nguyên mẫu.', tienBo: 'Em đã dùng will + V.', nguon: U6(10, 'use future simple and might for future possibility'), kiemTra: K6(),
        tuongTu: { id: 'TA6K-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>We ______ live on the Moon. It\'s too far. (phủ định)</i>', phuongAn: [{ t: "won't", dung: true }, { t: "willn't", phanHoi: "Không có từ này; dùng won't." }, { t: "don't will", phanHoi: 'Sai cấu trúc.' }, { t: 'will not to', phanHoi: 'Thừa to.' }], goiY: ['will not = ?'], viSaoDung: "won't.", loiGiai: "<b>won't</b>.", giangLai: "will not = won't.", nguon: U6(10, 'future simple'), kiemTra: K6() } },
      { id: 'TA6K-02', muc: 'co-ban', liDoMuc: 'Phân biệt will / might theo mức chắc chắn.', loai: 'chon1', de: 'Bạn không chắc chắn: <i>"I ______ live in a UFO, but I\'m not sure."</i>', phuongAn: [{ t: 'might', dung: true }, { t: 'will', phanHoi: 'will thể hiện chắc chắn hơn; câu nói "I\'m not sure".' }, { t: 'must', phanHoi: 'must = phải.' }, { t: 'mighted', phanHoi: 'Không có dạng này.' }], goiY: ['not sure.'], viSaoDung: 'Không chắc → might.', loiGiai: '<b>might</b>.', giangLai: 'will ≈ 90% chắc; might ≈ 50% có thể.', tienBo: 'Em đã chọn theo mức chắc chắn.', nguon: U6(10, 'might for future possibility'), kiemTra: K6(),
        tuongTu: { id: 'TA6K-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>Look at the dark clouds. It ______ rain later, I think.</i> (có thể)', phuongAn: [{ t: 'might', dung: true }, { t: 'mights', phanHoi: 'Không -s.' }, { t: 'might to', phanHoi: 'Không to.' }, { t: 'is might', phanHoi: 'Sai.' }], goiY: ['might + V.'], viSaoDung: 'might.', loiGiai: '<b>might</b>.', giangLai: 'might + V.', nguon: U6(10, 'might'), kiemTra: K6() } },
      { id: 'TA6K-03', muc: 'van-dung', liDoMuc: 'Viết câu hỏi với will.', loai: 'chu', de: 'Make a question: <i>Your house will have a smart TV.</i>', chapNhan: ['will your house have a smart tv'], loi: [{ mau: '\\bwill your house has\\b', danhDau: 'has', nhan: 'Lỗi động từ', phanHoi: 'will + V nguyên mẫu: have.' }, { mau: '^does your house', danhDau: 'does', nhan: 'Sai thì', phanHoi: 'Tương lai → Will.' }], goiY: ['Will + S + V?'], viSaoDung: 'Will your house have…?', loiGiai: '<b>Will your house have</b> a smart TV?', giangLai: 'Đảo will lên đầu.', tienBo: 'Em đã đặt câu hỏi tương lai.', nguon: U6(10, 'future simple'), kiemTra: K6(),
        tuongTu: { id: 'TA6K-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Make the sentence negative: <i>They will build a house under the sea.</i>', chapNhan: ["they won't build a house under the sea", 'they will not build a house under the sea'], loi: [{ mau: "\\bdon't will\\b|\\bwilln't\\b", danhDau: '*', nhan: 'Sai cấu trúc', phanHoi: "will not / won't." }, { mau: "\\bwon't builds\\b|\\bwon't to\\b", danhDau: '*', nhan: 'Lỗi động từ', phanHoi: "won't + V." }], goiY: ["won't + V."], viSaoDung: "won't build.", loiGiai: "They <b>won't build</b> …", giangLai: "won't + V.", nguon: U6(10, 'future simple'), kiemTra: K6() } },
      { id: 'TA6K-04', muc: 'van-dung', liDoMuc: 'Viết câu với might theo gợi ý.', loai: 'chu', nhieuCachDung: true, de: 'Write a sentence with <b>might</b>: (my future house / have / a solar panel)', chapNhan: ['my future house might have a solar panel'], loi: [{ mau: '\\bmight has\\b', danhDau: 'has', nhan: 'Lỗi động từ', phanHoi: 'might + V nguyên mẫu: have.' }, { mau: '\\bmight to\\b', danhDau: 'to', nhan: 'Thừa "to"', phanHoi: 'might + V.' }, { mau: '\\bwill\\b', danhDau: 'will', nhan: 'Chưa đúng yêu cầu', phanHoi: 'Đề yêu cầu might.' }], goiY: ['S + might + V + …'], viSaoDung: 'My future house might have a solar panel.', loiGiai: 'My future house <b>might have</b> a solar panel.', giangLai: 'Ghép theo thứ tự gợi ý, thêm might trước động từ.', tienBo: 'Em đã viết câu với might.', nguon: U6(10, 'might for future possibility'), kiemTra: K6(),
        tuongTu: { id: 'TA6K-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Write a sentence with <b>will</b>: (robots / clean / our house)', chapNhan: ['robots will clean our house'], loi: [{ mau: '\\bwill cleans\\b', danhDau: 'cleans', nhan: 'Lỗi động từ', phanHoi: 'will + V.' }, { mau: '\\bwill to\\b', danhDau: 'to', nhan: 'Thừa "to"', phanHoi: 'will + V.' }], goiY: ['S + will + V.'], viSaoDung: 'Robots will clean our house.', loiGiai: 'Robots <b>will clean</b> our house.', giangLai: 'will + V.', nguon: U6(10, 'future simple'), kiemTra: K6() } },
      { id: 'TA6K-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi nhiều câu tương lai.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) My house will be in the mountains. (2) It might has a big garden. (3) We won\'t need a car. (4) Will robots cooks for us? (5) I might live by the sea.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'might have.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Will robots cook…?' }, { t: 'Câu (5)', dung: true }], goiY: ['Động từ sau will / might.'], viSaoDung: '(1), (3), (5).', loiGiai: '(1), (3), (5).', giangLai: 'Động từ sau will/might luôn nguyên mẫu.', tienBo: 'Em đã soát lỗi tương lai.', nguon: U6(10, 'future simple and might'), kiemTra: K6(),
        tuongTu: { id: 'TA6K-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) She will to visit us. (2) They might move to a city. (3) It will rain tomorrow. (4) He mights come.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Thừa to.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'might không -s.' }], goiY: ['V nguyên mẫu.'], viSaoDung: '(2), (3).', loiGiai: '(2), (3).', giangLai: 'Không to, không -s.', nguon: U6(10, 'future simple and might'), kiemTra: K6() } },
      { id: 'TA6K-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn văn về ngôi nhà mơ ước; câu mở.', loai: 'mo', de: 'Write <b>40–60 words</b> about your dream house in the future. Use <b>will</b> and <b>might</b>.',
        tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có will / won\'t + V.', tuDong: { mau: "\\b(will|won't) \\w+", toiThieu: 2 } }, { t: 'Có might + V.', tuDong: { mau: '\\bmight \\w+', toiThieu: 1 } }, { t: 'Không viết will/might + to / V-s.', tuDong: { canhBao: '\\b(will|might) to\\b|\\b(will|might) (has|does|goes|cleans|cooks|helps)\\b', thongBao: 'Có thể có lỗi: will/might + V nguyên mẫu.' } }],
        baiThamKhao: 'My dream house will be near the sea. It will have five rooms and a big garden with many flowers. There will be a smart TV and a robot. The robot will cook and clean the house. My house might have solar panels on the roof, so it won\'t need much electricity.', giupViet: 'Khung: My dream house will be … It will have … There will be … It might …', goiY: ['Ở đâu, có gì, thiết bị gì.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Ý chắc chắn → will; ý chưa chắc → might.', tienBo: 'Em đã viết về ngôi nhà tương lai.', nguon: U6(10, 'write a paragraph about a dream house'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'TA6K-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about what you will do next summer. Use will and might.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có will + V.', tuDong: { mau: "\\b(will|won't) \\w+", toiThieu: 1 } }, { t: 'Có might + V.', tuDong: { mau: '\\bmight \\w+', toiThieu: 1 } }], baiThamKhao: 'Next summer I will visit my grandparents in Hue. I will help them in their garden. We might go to the beach if the weather is nice. I won\'t play computer games much because I want to read more books.', giupViet: 'Next summer I will … We might …', goiY: ['will / might.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Chắc → will; chưa chắc → might.', nguon: U6(10, 'future simple and might'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const ta6DieuKien = {
    id: 'ta6-mao-tu-dieu-kien', lop: 6, mon: 'anh', phanMon: 'Ngữ pháp', ten: 'Mạo từ và câu điều kiện loại 1',
    sgk: 'SGV Tiếng Anh 6 — Unit 11 "Our Greener World" (articles; first conditional)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 11 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['Danh từ đếm được / không đếm được (Unit 5)', 'will + V (Unit 10)'],
    yeuCauCanDat: ['Dùng a / an / the đúng.', 'Dùng câu điều kiện loại 1: If + hiện tại đơn, S + will + V.'],
    bai: {
      mucTieu: ['chọn a hay an theo âm đầu;', 'dùng the khi đã xác định;', 'chia động từ trong câu điều kiện loại 1;', 'viết lời khuyên sống xanh bằng câu If.'],
      khoiDong: { hoi: 'If we plant more trees, what will happen?', goiY: 'The air will be cleaner.' },
      trongTam: [
        '<b>a</b> + danh từ số ít bắt đầu bằng <b>âm phụ âm</b> (a bag, a university). <b>an</b> + âm <b>nguyên âm</b> (an apple, an hour).',
        '<b>the</b>: khi người nghe đã biết vật nào (nhắc lần hai, vật duy nhất: the sun, the Earth).',
        '<b>Câu điều kiện loại 1</b> (điều có thể xảy ra): <b>If + S + V (hiện tại đơn), S + will / won\'t + V</b>. Ví dụ: If we recycle, we will save energy.',
        'Mệnh đề If <b>không</b> dùng will: ~~If we will recycle~~.'
      ],
      viDu: { de: 'Chia động từ: If you (reuse) bags, you (help) the environment.', loiGiai: 'If you <b>reuse</b> bags, you <b>will help</b> the environment.' },
      nguon: N6A('Unit 11 "Our Greener World" — Objectives: use the articles correctly; use the first conditional to talk about possibilities'),
      hoiDap: [{ tu: ['a', 'an', 'the', 'mao tu'], tl: 'a + âm phụ âm; an + âm nguyên âm; the: đã xác định.' }, { tu: ['dieu kien', 'if'], tl: 'If + hiện tại đơn, S + will + V.' }]
    },
    cauHoi: [
      { id: 'TA6L-01', muc: 'co-ban', liDoMuc: 'Chọn a / an theo âm.', loai: 'chon1', de: 'Choose: <i>I have ______ old plastic bottle.</i>', phuongAn: [{ t: 'an', dung: true }, { t: 'a', phanHoi: '"old" bắt đầu bằng âm nguyên âm /əʊ/ → an.' }, { t: 'the', phanHoi: 'Nhắc lần đầu, chưa xác định.' }, { t: '(không cần)', phanHoi: 'Danh từ đếm được số ít cần mạo từ.' }], goiY: ['Âm đầu của "old".'], viSaoDung: 'an old bottle.', loiGiai: '<b>an</b>.', giangLai: 'Nhìn từ ngay sau mạo từ (old), không phải danh từ (bottle).', tienBo: 'Em đã chọn a/an đúng.', nguon: U6(11, 'use the articles correctly'), kiemTra: K6(),
        tuongTu: { id: 'TA6L-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>She wants to join ______ green club.</i>', phuongAn: [{ t: 'a', dung: true }, { t: 'an', phanHoi: 'green bắt đầu bằng âm phụ âm.' }, { t: 'the', phanHoi: 'Chưa xác định.' }, { t: '(không cần)', phanHoi: 'Cần mạo từ.' }], goiY: ['Âm /g/.'], viSaoDung: 'a.', loiGiai: '<b>a</b>.', giangLai: 'Âm phụ âm → a.', nguon: U6(11, 'articles'), kiemTra: K6() } },
      { id: 'TA6L-02', muc: 'co-ban', liDoMuc: 'Chọn dạng đúng câu điều kiện loại 1.', loai: 'chon1', de: 'Choose: <i>If we ______ rubbish, the beach will be clean.</i>', phuongAn: [{ t: 'pick up', dung: true }, { t: 'will pick up', phanHoi: 'Mệnh đề If không dùng will.' }, { t: 'picked up', phanHoi: 'Loại 1 dùng hiện tại đơn.' }, { t: 'picks up', phanHoi: 'we → pick up.' }], goiY: ['If + hiện tại đơn.'], viSaoDung: 'If we pick up…', loiGiai: '<b>pick up</b>.', giangLai: 'Câu If: "nửa đầu hiện tại, nửa sau will".', tienBo: 'Em đã chia đúng mệnh đề If.', nguon: U6(11, 'use the first conditional'), kiemTra: K6(),
        tuongTu: { id: 'TA6L-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>If you turn off the lights, you ______ energy.</i>', phuongAn: [{ t: 'will save', dung: true }, { t: 'save', phanHoi: 'Mệnh đề chính cần will.' }, { t: 'saved', phanHoi: 'Không.' }, { t: 'will saves', phanHoi: 'will + V.' }], goiY: ['Mệnh đề chính.'], viSaoDung: 'will save.', loiGiai: '<b>will save</b>.', giangLai: 'Nửa sau will.', nguon: U6(11, 'first conditional'), kiemTra: K6() } },
      { id: 'TA6L-03', muc: 'van-dung', liDoMuc: 'Điền the cho vật đã xác định.', loai: 'chu', de: 'Complete with <b>a</b>, <b>an</b> or <b>the</b>: <i>I bought a T-shirt and a cap. ______ T-shirt is made from recycled bottles.</i> <span class="note">Gõ một từ.</span>', chapNhan: ['the'], loi: [{ mau: '^a$|^an$', danhDau: '*', nhan: 'Sai mạo từ', phanHoi: 'Chiếc áo đã được nhắc ở câu trước → the.' }], goiY: ['Nhắc lần hai.'], viSaoDung: 'the.', loiGiai: '<b>The</b> T-shirt…', giangLai: 'Lần đầu: a/an; lần sau: the.', tienBo: 'Em đã dùng the đúng.', nguon: U6(11, 'use the articles correctly'), kiemTra: K6(),
        tuongTu: { id: 'TA6L-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Complete with <b>a</b>, <b>an</b> or <b>the</b>: <i>We should protect ______ Earth.</i>', chapNhan: ['the'], loi: [{ mau: '^a$|^an$', danhDau: '*', nhan: 'Sai mạo từ', phanHoi: 'Trái Đất là duy nhất → the.' }], goiY: ['Duy nhất.'], viSaoDung: 'the Earth.', loiGiai: '<b>the</b>.', giangLai: 'Vật duy nhất → the.', nguon: U6(11, 'articles'), kiemTra: K6() } },
      { id: 'TA6L-04', muc: 'van-dung', liDoMuc: 'Chia động từ trong cả hai mệnh đề.', loai: 'chu', de: 'Complete with the correct forms: <i>If we (use) cloth bags, we (reduce) plastic waste.</i> Viết lại cả câu.', chapNhan: ['if we use cloth bags we will reduce plastic waste'], loi: [{ mau: '^if we will use', danhDau: 'will', nhan: 'Thừa will ở mệnh đề If', phanHoi: 'Mệnh đề If dùng hiện tại đơn.' }, { mau: '\\bwe reduce plastic', danhDau: 'reduce', nhan: 'Thiếu will', phanHoi: 'Mệnh đề chính: will + V.' }, { mau: '\\bwill reduces\\b', danhDau: 'reduces', nhan: 'Lỗi động từ', phanHoi: 'will + V.' }], goiY: ['If + hiện tại, will + V.'], viSaoDung: 'If we use…, we will reduce…', loiGiai: 'If we <b>use</b> cloth bags, we <b>will reduce</b> plastic waste.', giangLai: 'Đánh dấu hai nửa câu bằng dấu phẩy: nửa If → hiện tại; nửa kia → will.', tienBo: 'Em đã chia đúng hai mệnh đề.', nguon: U6(11, 'use the first conditional to talk about possibilities'), kiemTra: K6('Chấp nhận có hoặc không có dấu phẩy.'),
        tuongTu: { id: 'TA6L-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Complete: <i>If you (not water) the plants, they (die).</i> Viết lại cả câu.', chapNhan: ["if you don't water the plants they will die", 'if you do not water the plants they will die'], loi: [{ mau: "^if you won't", danhDau: "won't", nhan: 'Thừa will ở mệnh đề If', phanHoi: "Dùng don't." }, { mau: '\\bthey die$', danhDau: 'die', nhan: 'Thiếu will', phanHoi: 'will die.' }], goiY: ["don't … will …"], viSaoDung: "If you don't water…, they will die.", loiGiai: "If you <b>don't water</b> the plants, they <b>will die</b>.", giangLai: 'Hai nửa câu.', nguon: U6(11, 'first conditional'), kiemTra: K6() } },
      { id: 'TA6L-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi mạo từ và câu điều kiện.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) If we will recycle paper, we will save trees. (2) She has an useful bag. (3) If you walk to school, you will help the environment. (4) The sun is very hot today. (5) If it rains, we stay at home.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', phanHoi: 'Đúng.' }, { t: 'Câu (4)', phanHoi: 'Đúng.' }, { t: 'Câu (5)', dung: true }], goiY: ['useful đọc /juː/; mệnh đề chính.'], viSaoDung: '(1) bỏ will; (2) a useful; (5) will stay.', loiGiai: '(1) If we recycle…; (2) <b>a</b> useful bag (âm /j/); (5) we <b>will stay</b>.', giangLai: 'a/an theo <b>âm</b>, không theo chữ: useful đọc /juː/ → a.', tienBo: 'Em đã soát được nhiều loại lỗi.', nguon: U6(11, 'articles; first conditional'), kiemTra: K6(),
        tuongTu: { id: 'TA6L-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) He waited for an hour. (2) If you throw rubbish, the river will be dirty. (3) We will be healthy if we will eat vegetables. (4) I saw a elephant.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng (hour đọc /aʊ/).' }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', dung: true }], goiY: ['Âm đầu; mệnh đề If.'], viSaoDung: '(3), (4).', loiGiai: '(3) if we eat; (4) an elephant.', giangLai: 'Theo âm.', nguon: U6(11, 'articles; first conditional'), kiemTra: K6() } },
      { id: 'TA6L-06', muc: 'nang-cao', liDoMuc: 'Tự viết ý tưởng sống xanh bằng câu điều kiện; câu mở.', loai: 'mo', de: 'Write <b>40–60 words</b> about ideas for a green club at your school. Use at least <b>two</b> first conditional sentences (If …, … will …).',
        tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có ít nhất 2 câu If … will …', tuDong: { mau: "\\bif\\b.*?\\b(will|won't)\\b", toiThieu: 2 } }, { t: 'Không dùng will trong mệnh đề If.', tuDong: { canhBao: "\\bif \\w+ (will|won't)\\b", thongBao: 'Có thể có lỗi: mệnh đề If không dùng will.' } }],
        baiThamKhao: 'Our green club will have three ideas. First, we will collect old paper. If we recycle paper, we will save many trees. Second, we will plant flowers around the school. If the school is greener, students will feel happier. Third, we will ask students to bring water bottles, so we won\'t use plastic cups.', giupViet: 'Khung: If we …, we will … / If students …, the school will …', goiY: ['Mỗi ý một câu If.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Viết việc làm (If…) rồi kết quả (will…).', tienBo: 'Em đã dùng câu điều kiện để đề xuất ý tưởng.', nguon: U6(11, 'write a paragraph about ideas for a green club'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'TA6L-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b>: how can your family save energy? Use at least one If-sentence.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có câu If … will …', tuDong: { mau: "\\bif\\b.*?\\b(will|won't)\\b", toiThieu: 1 } }, { t: 'Không dùng will trong mệnh đề If.', tuDong: { canhBao: "\\bif \\w+ (will|won't)\\b", thongBao: 'Mệnh đề If không dùng will.' } }], baiThamKhao: 'My family can save energy in many ways. We turn off the lights when we leave a room. If we use LED bulbs, we will use less electricity. If we cycle to the market, we will save petrol too.', giupViet: 'If we …, we will …', goiY: ['If + hiện tại.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Việc làm → kết quả.', nguon: U6(11, 'first conditional'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const ta6SoSanhNhat = {
    id: 'ta6-so-sanh-nhat', lop: 6, mon: 'anh', phanMon: 'Ngữ pháp', ten: 'So sánh nhất của tính từ',
    sgk: 'SGV Tiếng Anh 6 — Unit 12 "Robots" (superlative adjectives)', yccdGhiChu: 'Đã đối chiếu với phần Objectives của Unit 12 trong SGV Tiếng Anh 6.',
    kienThucTruoc: ['So sánh hơn (Unit 4)'],
    yeuCauCanDat: ['So sánh người, vật bằng so sánh nhất: the + adj-est / the most + adj.', 'Viết đúng chính tả: gấp đôi phụ âm, y → iest; bất quy tắc good → the best, bad → the worst.'],
    bai: {
      mucTieu: ['thêm -est đúng chính tả;', 'dùng the most với tính từ dài;', 'nhớ the best, the worst;', 'phân biệt so sánh hơn và so sánh nhất.'],
      khoiDong: { hoi: 'Which robot is the biggest in the show?', goiY: 'Ví dụ: Robot A is the biggest.' },
      trongTam: [
        'Tính từ ngắn: <b>the + adj-est</b>: tall → the tall<b>est</b>; big → the bi<b>gg</b>est; large → the large<b>st</b>; easy → the eas<b>iest</b>.',
        'Tính từ dài: <b>the most + adj</b>: the most intelligent, the most useful.',
        'Bất quy tắc: good → <b>the best</b>; bad → <b>the worst</b>.',
        'So sánh <b>hơn</b> (2 đối tượng, có than) ≠ so sánh <b>nhất</b> (từ 3 đối tượng trở lên, có the, thường có in / of).'
      ],
      viDu: { de: 'Robot X nặng 50 kg, Y nặng 80 kg, Z nặng 60 kg. Câu so sánh nhất với "heavy"?', loiGiai: 'Robot Y is <b>the heaviest</b>.' },
      nguon: N6A('Unit 12 "Robots" — Objectives: compare people and things using superlative adjectives'),
      hoiDap: [{ tu: ['est', 'nhat'], tl: 'Tính từ ngắn: the + -est; dài: the most + adj.' }, { tu: ['best', 'worst'], tl: 'good → the best; bad → the worst.' }]
    },
    cauHoi: [
      { id: 'TA6M-01', muc: 'co-ban', liDoMuc: 'Viết dạng so sánh nhất, quy tắc y → iest.', loai: 'chu', de: 'Write the correct form: <i>This is the ______ (easy) game in the shop.</i> <span class="note">Gõ một từ.</span>', chapNhan: ['easiest'], loi: [{ mau: '^easyest$', danhDau: 'easyest', nhan: 'Lỗi chính tả', phanHoi: 'y → iest: easiest.' }, { mau: '^most easy$', danhDau: 'most', nhan: 'Dùng sai "most"', phanHoi: 'easy tận cùng -y → easiest.' }, { mau: '^easier$', danhDau: 'easier', nhan: 'Nhầm so sánh hơn', phanHoi: 'Có "the … in the shop" → so sánh nhất.' }], goiY: ['y → iest.'], viSaoDung: 'easiest.', loiGiai: 'the <b>easiest</b> game.', giangLai: 'Quy tắc y giống so sánh hơn: easier → easiest.', tienBo: 'Em đã viết đúng chính tả.', nguon: U6(12, 'compare people and things using superlative adjectives'), kiemTra: K6(),
        tuongTu: { id: 'TA6M-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, gấp đôi phụ âm.', loai: 'chu', de: 'Write the correct form: <i>Robot Max is the ______ (big) robot at the show.</i> <span class="note">Gõ một từ.</span>', chapNhan: ['biggest'], loi: [{ mau: '^bigest$', danhDau: 'bigest', nhan: 'Lỗi chính tả', phanHoi: 'Gấp đôi g: biggest.' }, { mau: '^bigger$', danhDau: 'bigger', nhan: 'Nhầm so sánh hơn', phanHoi: 'the … → nhất.' }], goiY: ['big → ?'], viSaoDung: 'biggest.', loiGiai: '<b>biggest</b>.', giangLai: 'Gấp đôi phụ âm.', nguon: U6(12, 'superlative adjectives'), kiemTra: K6() } },
      { id: 'TA6M-02', muc: 'co-ban', liDoMuc: 'Chọn so sánh nhất của tính từ dài.', loai: 'chon1', de: 'Choose: <i>This is ______ robot in the world.</i>', phuongAn: [{ t: 'the most intelligent', dung: true }, { t: 'the intelligentest', phanHoi: 'Tính từ dài → the most.' }, { t: 'more intelligent', phanHoi: 'Đó là so sánh hơn.' }, { t: 'most intelligent', phanHoi: 'Thiếu the.' }], goiY: ['in the world → nhất.'], viSaoDung: 'the most + adj dài.', loiGiai: '<b>the most intelligent</b>.', giangLai: 'Dài → the most; nhớ có "the".', tienBo: 'Em đã dùng the most.', nguon: U6(12, 'superlative adjectives'), kiemTra: K6(),
        tuongTu: { id: 'TA6M-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc, bất quy tắc.', loai: 'chon1', de: 'Choose: <i>Nam is ______ player in our team.</i> (good)', phuongAn: [{ t: 'the best', dung: true }, { t: 'the goodest', phanHoi: 'Bất quy tắc: the best.' }, { t: 'better', phanHoi: 'So sánh hơn.' }, { t: 'the most good', phanHoi: 'Bất quy tắc.' }], goiY: ['good → ?'], viSaoDung: 'the best.', loiGiai: '<b>the best</b>.', giangLai: 'good – better – the best.', nguon: U6(12, 'superlative adjectives'), kiemTra: K6() } },
      { id: 'TA6M-03', muc: 'van-dung', liDoMuc: 'Viết câu so sánh nhất từ số liệu ba đối tượng.', loai: 'chu', nhieuCachDung: true, de: 'Robot A: 1,2 m; Robot B: 1,5 m; Robot C: 0,9 m. Write <b>one</b> sentence with <b>tall</b> (so sánh nhất).', chapNhan: ['robot b is the tallest', 'robot b is the tallest robot', 'robot b is the tallest of the three', 'robot b is the tallest of the three robots'], loi: [{ mau: '\\btaller\\b', danhDau: 'taller', nhan: 'Nhầm so sánh hơn', phanHoi: 'Ba robot → so sánh nhất: the tallest.' }, { mau: '\\bmost tall\\b', danhDau: 'most', nhan: 'Dùng sai "most"', phanHoi: 'tall → the tallest.' }, { mau: '^robot (a|c) is the tallest', danhDau: 'tallest', nhan: 'Sai nghĩa', phanHoi: 'So lại số liệu: robot nào cao nhất?' }, { mau: '\\bis tallest\\b', danhDau: 'tallest', nhan: 'Thiếu the', phanHoi: 'the tallest.' }], goiY: ['Robot nào cao nhất?'], viSaoDung: 'Robot B is the tallest.', loiGiai: 'Robot B is <b>the tallest</b>.', giangLai: 'So số liệu trước, sau đó viết "… is the …est".', tienBo: 'Em đã viết câu so sánh nhất.', nguon: U6(12, 'superlative adjectives'), kiemTra: K6('Chấp nhận các cách viết đúng nghĩa.'),
        tuongTu: { id: 'TA6M-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Toy A: 150 000 đ; Toy B: 90 000 đ; Toy C: 200 000 đ. Write one sentence with <b>cheap</b>.', chapNhan: ['toy b is the cheapest', 'toy b is the cheapest toy', 'toy b is the cheapest of the three'], loi: [{ mau: '\\bcheaper\\b', danhDau: 'cheaper', nhan: 'Nhầm so sánh hơn', phanHoi: 'the cheapest.' }, { mau: '^toy (a|c) is the cheapest', danhDau: 'cheapest', nhan: 'Sai nghĩa', phanHoi: 'Rẻ nhất là B.' }], goiY: ['Rẻ nhất?'], viSaoDung: 'Toy B is the cheapest.', loiGiai: 'Toy B is <b>the cheapest</b>.', giangLai: 'So số liệu.', nguon: U6(12, 'superlative adjectives'), kiemTra: K6() } },
      { id: 'TA6M-04', muc: 'van-dung', liDoMuc: 'Phân biệt so sánh hơn / nhất trong ngữ cảnh.', loai: 'chon1', de: 'Choose: <i>Of the three robots, Robo is ______ (useful).</i>', phuongAn: [{ t: 'the most useful', dung: true }, { t: 'more useful', phanHoi: 'Three robots → so sánh nhất.' }, { t: 'the usefullest', phanHoi: 'Tính từ dài.' }, { t: 'the more useful', phanHoi: 'Không đúng.' }], goiY: ['Of the three.'], viSaoDung: 'Ba đối tượng → nhất.', loiGiai: '<b>the most useful</b>.', giangLai: '2 → hơn (than); 3 trở lên → nhất (the).', tienBo: 'Em đã phân biệt hai cấp so sánh.', nguon: U6(12, 'superlative adjectives'), kiemTra: K6(),
        tuongTu: { id: 'TA6M-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>My robot is ______ than yours.</i> (fast)', phuongAn: [{ t: 'faster', dung: true }, { t: 'the fastest', phanHoi: 'Có than → so sánh hơn.' }, { t: 'more fast', phanHoi: 'fast ngắn.' }, { t: 'fastest', phanHoi: 'Có than.' }], goiY: ['than.'], viSaoDung: 'faster.', loiGiai: '<b>faster</b>.', giangLai: 'than → hơn.', nguon: U6(12, 'superlative adjectives'), kiemTra: K6() } },
      { id: 'TA6M-05', muc: 'nang-cao', liDoMuc: 'Đánh giá nhiều câu so sánh.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) Mount Fansipan is the highest mountain in Viet Nam. (2) This is the most cheapest robot. (3) Today is the hottest day of the year. (4) Robo is the baddest robot. (5) She is the most creative student in my class.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Không dùng most với -est: the cheapest.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'bad → the worst.' }, { t: 'Câu (5)', dung: true }], goiY: ['Kiểm tra từng tính từ.'], viSaoDung: '(1), (3), (5).', loiGiai: '(1), (3), (5).', giangLai: 'Ba bẫy: most + -est; bất quy tắc (bad, good); quên the.', tienBo: 'Em đã soát lỗi so sánh nhất.', nguon: U6(12, 'superlative adjectives'), kiemTra: K6(),
        tuongTu: { id: 'TA6M-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) He is the goodest singer. (2) This is the biggest room. (3) It is most expensive phone. (4) She is the friendliest girl.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'the best.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', phanHoi: 'Thiếu the.' }, { t: 'Câu (4)', dung: true }], goiY: ['Bẫy.'], viSaoDung: '(2), (4).', loiGiai: '(2), (4).', giangLai: 'Ba bẫy.', nguon: U6(12, 'superlative adjectives'), kiemTra: K6() } },
      { id: 'TA6M-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn về robot mơ ước có so sánh nhất; câu mở.', loai: 'mo', de: 'Write <b>40–60 words</b> about a robot you would like to have. Use at least <b>two</b> superlative adjectives.',
        tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có ít nhất 2 so sánh nhất.', tuDong: { mau: '\\bthe (\\w+est|most \\w+|best|worst)\\b', toiThieu: 2 } }, { t: 'Không dùng most + -est / goodest.', tuDong: { canhBao: '\\bmost \\w+est\\b|\\b(goodest|baddest|bigest|easyest)\\b', thongBao: 'Có thể có lỗi so sánh nhất.' } }],
        baiThamKhao: 'I would like to have a robot called Tobi. Tobi will be the smartest robot in my town. It can help me do my homework and clean my room. It is also the funniest robot because it can tell jokes. I think Tobi is the most useful friend for a busy student like me.', giupViet: 'Khung: I would like a robot called … It is the …est … It can … It is the most … because …', goiY: ['Tên, việc robot làm, vì sao đặc biệt.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Mỗi điểm nổi bật viết một câu "the …est / the most …".', tienBo: 'Em đã viết đoạn văn có so sánh nhất.', nguon: U6(12, 'write a paragraph about a robot one would like to have'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'TA6M-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about the best place in your town. Use at least two superlatives.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 2 so sánh nhất.', tuDong: { mau: '\\bthe (\\w+est|most \\w+|best|worst)\\b', toiThieu: 2 } }, { t: 'Không dùng most + -est.', tuDong: { canhBao: '\\bmost \\w+est\\b|\\bgoodest\\b', thongBao: 'Có thể có lỗi.' } }], baiThamKhao: 'The best place in my town is the central park. It is the biggest park and it has the oldest trees in the town. In the evening, it is the most beautiful place because of the colourful lights.', giupViet: 'The best place … It is the …est …', goiY: ['the best.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Mỗi điểm một câu.', nguon: U6(12, 'superlative adjectives'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  /* ==================================================================
     ĐỢT 4 — LỚP 7 KHTN (28/11/2026). Câu hỏi tự biên soạn (loại C).
     Căn cứ: tên bài, số trang đọc từ MỤC LỤC SGK KHTN 7 (Kết nối tri thức)
     trong thư mục Drive "Tin 7". Số trang là trang SGK học sinh.
     ================================================================== */
  const N7K = v => Object.assign(tuSoan(null), SGK_KHTN7_DOC, { ngan: 'SGK KHTN 7', canCu: 'Đã đối chiếu: SGK KHTN 7 — ' + v, viTri: v, ghiChu: 'Đối chiếu theo tên bài và số trang ở mục lục SGK; nội dung câu hỏi do nhóm biên soạn.' });
  const YCCD7 = 'Yêu cầu cần đạt do nhóm biên soạn tóm tắt theo tên bài trong mục lục SGK KHTN 7; chưa đối chiếu nguyên văn Chương trình GDPT 2018.';

  const hh7BangTuanHoan = {
    id: 'hh7-bang-tuan-hoan', lop: 7, mon: 'khtn', phanMon: 'Hóa học', ten: 'Nguyên tố hoá học và bảng tuần hoàn',
    sgk: 'SGK KHTN 7 — Bài 3–4, trang 19–31', yccdGhiChu: YCCD7,
    kienThucTruoc: ['Cấu tạo nguyên tử: proton, neutron, electron; các lớp electron (Bài 2)'],
    yeuCauCanDat: ['Nêu được nguyên tố hoá học là tập hợp nguyên tử cùng số proton; viết được kí hiệu hoá học của một số nguyên tố.', 'Nêu được cấu tạo bảng tuần hoàn: ô nguyên tố, chu kì, nhóm.', 'Nhận biết nguyên tố kim loại, phi kim, khí hiếm trong bảng tuần hoàn.'],
    bai: {
      mucTieu: ['đọc kí hiệu hoá học;', 'tìm số hiệu nguyên tử từ số proton;', 'xác định chu kì từ số lớp electron;', 'phân biệt kim loại, phi kim, khí hiếm.'],
      khoiDong: { hoi: 'Nguyên tử nào cũng có 8 proton thì thuộc cùng một nguyên tố. Đó là nguyên tố gì?', goiY: 'Oxygen (O).' },
      trongTam: [
        '<b>Nguyên tố hoá học</b>: tập hợp những nguyên tử có cùng <b>số proton</b> trong hạt nhân. Số proton = <b>số hiệu nguyên tử</b> (Z).',
        '<b>Kí hiệu hoá học</b>: 1 hoặc 2 chữ cái, chữ đầu viết hoa: H, O, C, N, Na, Mg, Al, Cl, Ca, Fe, Cu.',
        '<b>Bảng tuần hoàn</b> xếp các nguyên tố theo chiều tăng dần số hiệu nguyên tử. <b>Chu kì</b> là hàng ngang; <b>nhóm</b> là cột dọc.',
        'Nguyên tử các nguyên tố cùng chu kì có <b>cùng số lớp electron</b> (số thứ tự chu kì = số lớp electron).',
        'Phần lớn nguyên tố là <b>kim loại</b>; còn lại là <b>phi kim</b> và <b>khí hiếm</b> (nhóm cuối, như He, Ne, Ar).'
      ],
      viDu: { de: 'Nguyên tử Na có 11 electron xếp thành 3 lớp (2, 8, 1). Na ở chu kì nào?', loiGiai: '3 lớp electron → <b>chu kì 3</b>.' },
      nguon: N7K('Bài 3 "Nguyên tố hoá học" (trang 19) và Bài 4 "Sơ lược về bảng tuần hoàn các nguyên tố hoá học" (trang 23)'),
      hoiDap: [{ tu: ['chu ki'], tl: 'Chu kì = hàng ngang; số thứ tự chu kì = số lớp electron.' }, { tu: ['nhom'], tl: 'Nhóm = cột dọc.' }, { tu: ['so hieu', 'proton'], tl: 'Số hiệu nguyên tử = số proton = số electron.' }]
    },
    cauHoi: [
      { id: 'HH7B-01', muc: 'co-ban', liDoMuc: 'Đọc kí hiệu hoá học.', loai: 'chon1', de: 'Kí hiệu hoá học của nguyên tố <b>sodium (natri)</b> là:', phuongAn: [{ t: 'Na', dung: true }, { t: 'S', phanHoi: 'S là sulfur (lưu huỳnh).' }, { t: 'N', phanHoi: 'N là nitrogen.' }, { t: 'NA', phanHoi: 'Chữ thứ hai viết thường: Na.' }], goiY: ['Hai chữ, chữ sau viết thường.'], viSaoDung: 'Na.', loiGiai: '<b>Na</b>.', giangLai: 'Kí hiệu: chữ đầu viết HOA, chữ sau (nếu có) viết thường.', tienBo: 'Em đã nhớ kí hiệu.', nguon: N7K('Bài 3 "Nguyên tố hoá học", trang 19–22'), kiemTra: K6(),
        tuongTu: { id: 'HH7B-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Kí hiệu <b>Fe</b> là của nguyên tố nào?', phuongAn: [{ t: 'Sắt (iron)', dung: true }, { t: 'Flo (fluorine)', phanHoi: 'Fluorine là F.' }, { t: 'Đồng', phanHoi: 'Đồng là Cu.' }, { t: 'Phosphorus', phanHoi: 'P.' }], goiY: ['Kim loại làm đinh.'], viSaoDung: 'Fe = sắt.', loiGiai: '<b>Sắt</b>.', giangLai: 'Fe từ tên Latin "ferrum".', nguon: N7K('Bài 3, trang 19–22'), kiemTra: K6() } },
      { id: 'HH7B-02', muc: 'co-ban', liDoMuc: 'Áp dụng định nghĩa nguyên tố.', loai: 'chon1', de: 'Các nguyên tử thuộc <b>cùng một nguyên tố hoá học</b> luôn có cùng:', phuongAn: [{ t: 'Số proton', dung: true }, { t: 'Số neutron', phanHoi: 'Số neutron có thể khác nhau.' }, { t: 'Khối lượng', phanHoi: 'Có thể khác nhau do số neutron khác.' }, { t: 'Số lớp vỏ ngoài', phanHoi: 'Chưa đủ để xác định.' }], goiY: ['Định nghĩa nguyên tố.'], viSaoDung: 'Cùng số proton.', loiGiai: '<b>Số proton</b>.', giangLai: 'Số proton giống "mã số" của nguyên tố.', tienBo: 'Em đã nắm định nghĩa.', nguon: N7K('Bài 3, trang 19–22'), kiemTra: K6(),
        tuongTu: { id: 'HH7B-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Nguyên tử carbon có số hiệu nguyên tử là 6. Nguyên tử carbon có bao nhiêu electron?', dapAn: 6, loi: [{ gt: 12, nhan: 'Nhầm với khối lượng', phanHoi: '12 là khối lượng (amu) gần đúng, không phải số electron.' }], goiY: ['Số e = số p = Z.'], viSaoDung: '6.', loiGiai: '<b>6</b>.', giangLai: 'Nguyên tử trung hoà: số e = số p.', nguon: N7K('Bài 3, trang 19–22'), kiemTra: K6() } },
      { id: 'HH7B-03', muc: 'van-dung', liDoMuc: 'Suy ra chu kì từ cấu hình electron.', loai: 'so', de: 'Nguyên tử magnesium (Mg) có 12 electron, xếp thành các lớp 2, 8, 2. Mg ở chu kì mấy?', dapAn: 3,
        loi: [{ gt: 2, nhan: 'Nhầm chu kì với số e lớp ngoài', phanHoi: '2 là số electron lớp ngoài cùng. Chu kì = <b>số lớp</b> electron.' }, { gt: 12, nhan: 'Nhầm chu kì với số hiệu', phanHoi: '12 là số hiệu nguyên tử.' }],
        buoc: { hoi: 'Mg có bao nhiêu lớp electron?', dapAn: 3, dung: 'Đúng: 3 lớp → chu kì 3.', sai: 'Đếm các số 2, 8, 2.' },
        goiY: ['Đếm số lớp.'], viSaoDung: '3 lớp → chu kì 3.', loiGiai: '<b>Chu kì 3</b>.', giangLai: 'Số lớp ↔ số tầng nhà; chu kì ↔ tầng mấy.', tienBo: 'Em đã suy ra chu kì.', nguon: N7K('Bài 4 "Sơ lược về bảng tuần hoàn các nguyên tố hoá học", trang 23–31'), kiemTra: K6(),
        tuongTu: { id: 'HH7B-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Nguyên tử nitrogen có 7 electron xếp thành các lớp 2, 5. Nitrogen ở chu kì mấy?', dapAn: 2, loi: [{ gt: 5, nhan: 'Nhầm chu kì với số e lớp ngoài', phanHoi: 'Đếm số lớp.' }, { gt: 7, nhan: 'Nhầm chu kì với số hiệu', phanHoi: 'Đó là số hiệu.' }], buoc: { hoi: 'Số lớp electron?', dapAn: 2, dung: 'Đúng.', sai: '2, 5.' }, goiY: ['Đếm lớp.'], viSaoDung: '2.', loiGiai: '<b>Chu kì 2</b>.', giangLai: 'Số lớp = chu kì.', nguon: N7K('Bài 4, trang 23–31'), kiemTra: K6() } },
      { id: 'HH7B-04', muc: 'van-dung', liDoMuc: 'Phân loại nguyên tố.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các nguyên tố <b>kim loại</b>.', phuongAn: [{ t: 'Sắt (Fe)', dung: true }, { t: 'Nhôm (Al)', dung: true }, { t: 'Oxygen (O)', phanHoi: 'Phi kim.' }, { t: 'Đồng (Cu)', dung: true }, { t: 'Neon (Ne)', phanHoi: 'Khí hiếm.' }], goiY: ['Dẫn điện, ánh kim.'], viSaoDung: 'Fe, Al, Cu.', loiGiai: 'Fe, Al, Cu.', giangLai: 'Kim loại thường dùng làm nồi, dây điện; khí hiếm ở cột cuối bảng.', tienBo: 'Em đã phân loại đúng.', nguon: N7K('Bài 4, trang 23–31'), kiemTra: K6(),
        tuongTu: { id: 'HH7B-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các nguyên tố <b>phi kim</b>.', phuongAn: [{ t: 'Carbon (C)', dung: true }, { t: 'Sulfur (S)', dung: true }, { t: 'Calcium (Ca)', phanHoi: 'Kim loại.' }, { t: 'Chlorine (Cl)', dung: true }, { t: 'Helium (He)', phanHoi: 'Khí hiếm.' }], goiY: ['Không có ánh kim.'], viSaoDung: 'C, S, Cl.', loiGiai: 'C, S, Cl.', giangLai: 'Ba nhóm.', nguon: N7K('Bài 4, trang 23–31'), kiemTra: K6() } },
      { id: 'HH7B-05', muc: 'nang-cao', liDoMuc: 'Suy luận ngược từ vị trí trong bảng ra số proton.', loai: 'so', de: 'Nguyên tố X ở chu kì 2 và lớp electron ngoài cùng của nguyên tử X có 6 electron. Số hiệu nguyên tử của X là bao nhiêu?', dapAn: 8,
        loi: [{ gt: 6, nhan: 'Thiếu lớp trong', phanHoi: 'Còn lớp thứ nhất có 2 electron.' }, { gt: 12, nhan: 'Lỗi số electron lớp 1', phanHoi: 'Lớp thứ nhất tối đa 2 electron.' }],
        buoc: { hoi: 'Chu kì 2 → nguyên tử có mấy lớp electron?', dapAn: 2, dung: 'Đúng. Lớp 1 có 2 e, lớp 2 có 6 e.', sai: 'Chu kì = số lớp.' },
        goiY: ['Lớp 1 tối đa 2 e.'], viSaoDung: '2 + 6 = 8 → oxygen.', loiGiai: 'Số electron = 2 + 6 = 8 = số proton → Z = <b>8</b> (oxygen).', giangLai: 'Vẽ sơ đồ: lớp 1 (2 e), lớp 2 (6 e). Đếm tổng.', tienBo: 'Em đã suy luận từ vị trí ra cấu tạo.', nguon: N7K('Bài 2 (trang 15–17) và Bài 4 (trang 23–31)'), kiemTra: K6(),
        tuongTu: { id: 'HH7B-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Nguyên tố Y ở chu kì 3, lớp electron ngoài cùng có 1 electron. Số hiệu nguyên tử của Y?', dapAn: 11, loi: [{ gt: 3, nhan: 'Thiếu lớp trong', phanHoi: 'Lớp 1: 2 e; lớp 2: 8 e.' }, { gt: 1, nhan: 'Thiếu lớp trong', phanHoi: 'Còn hai lớp trong.' }], buoc: { hoi: 'Tổng số e ở hai lớp trong (2 + 8)?', dapAn: 10, dung: 'Đúng.', sai: '2 + 8.' }, goiY: ['2, 8, 1.'], viSaoDung: '11 (sodium).', loiGiai: 'Z = <b>11</b> (Na).', giangLai: 'Vẽ sơ đồ lớp.', nguon: N7K('Bài 2, Bài 4'), kiemTra: K6() } },
      { id: 'HH7B-06', muc: 'nang-cao', liDoMuc: 'Đánh giá nhiều phát biểu về bảng tuần hoàn.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các phát biểu <b>đúng</b>.', phuongAn: [{ t: 'Các nguyên tố được xếp theo chiều tăng dần số hiệu nguyên tử.', dung: true }, { t: 'Chu kì là cột dọc trong bảng tuần hoàn.', phanHoi: 'Chu kì là hàng ngang.' }, { t: 'Nguyên tử các nguyên tố cùng chu kì có cùng số lớp electron.', dung: true }, { t: 'Khí hiếm nằm ở nhóm cuối cùng của bảng.', dung: true }, { t: 'Phần lớn các nguyên tố là phi kim.', phanHoi: 'Phần lớn là kim loại.' }], goiY: ['Hàng – cột.'], viSaoDung: 'Ý 1, 3, 4.', loiGiai: 'Ý 1, 3, 4.', giangLai: 'Chu kì = hàng (như "chu kì" lặp lại theo hàng); nhóm = cột.', tienBo: 'Em đã nắm cấu tạo bảng tuần hoàn.', nguon: N7K('Bài 4, trang 23–31'), kiemTra: K6(),
        tuongTu: { id: 'HH7B-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các phát biểu <b>đúng</b>.', phuongAn: [{ t: 'Mỗi ô nguyên tố cho biết kí hiệu, tên và số hiệu nguyên tử.', dung: true }, { t: 'Nhóm là hàng ngang.', phanHoi: 'Cột dọc.' }, { t: 'Neon là khí hiếm.', dung: true }, { t: 'Số hiệu nguyên tử bằng số neutron.', phanHoi: 'Bằng số proton.' }], goiY: ['Từng ý.'], viSaoDung: 'Ý 1, 3.', loiGiai: 'Ý 1, 3.', giangLai: 'Hàng – cột.', nguon: N7K('Bài 4, trang 23–31'), kiemTra: K6() } }
    ]
  };

  const hh7PhanTu = {
    id: 'hh7-phan-tu', lop: 7, mon: 'khtn', phanMon: 'Hóa học', ten: 'Phân tử, liên kết hoá học, hoá trị',
    sgk: 'SGK KHTN 7 — Chương II, Bài 5–7, trang 32–44', yccdGhiChu: YCCD7,
    kienThucTruoc: ['Nguyên tố hoá học, khối lượng nguyên tử (Bài 2–3)'],
    yeuCauCanDat: ['Phân biệt đơn chất và hợp chất; tính khối lượng phân tử.', 'Nêu sơ lược liên kết ion và liên kết cộng hoá trị.', 'Xác định hoá trị; lập công thức hoá học theo hoá trị; tính phần trăm khối lượng nguyên tố trong hợp chất.'],
    bai: {
      mucTieu: ['phân biệt đơn chất, hợp chất;', 'tính khối lượng phân tử;', 'lập công thức theo quy tắc hoá trị;', 'tính phần trăm khối lượng nguyên tố.'],
      khoiDong: { hoi: 'Phân tử nước H₂O gồm những nguyên tử nào, mỗi loại mấy nguyên tử?', goiY: '2 nguyên tử H và 1 nguyên tử O.' },
      trongTam: [
        '<b>Đơn chất</b>: tạo nên từ <b>một</b> nguyên tố (O₂, Fe, H₂). <b>Hợp chất</b>: từ <b>hai nguyên tố trở lên</b> (H₂O, CO₂, NaCl).',
        '<b>Khối lượng phân tử</b> = tổng khối lượng các nguyên tử trong phân tử (amu). Ví dụ H₂O = 2·1 + 16 = 18 amu. (H = 1; C = 12; N = 14; O = 16; Na = 23; Al = 27; S = 32; Cl = 35,5; Ca = 40; Fe = 56; Cu = 64.)',
        '<b>Liên kết ion</b>: giữa ion dương và ion âm (NaCl). <b>Liên kết cộng hoá trị</b>: các nguyên tử dùng chung electron (H₂O, CO₂).',
        '<b>Quy tắc hoá trị</b>: với hợp chất AₓBᵧ, a·x = b·y (a, b là hoá trị). O hoá trị II, H hoá trị I.',
        '<b>% khối lượng</b> nguyên tố = (khối lượng nguyên tố trong phân tử : khối lượng phân tử) × 100%.'
      ],
      viDu: { de: 'Lập công thức hợp chất của Al (III) và O (II).', loiGiai: '3·x = 2·y → x = 2, y = 3 → <b>Al₂O₃</b>.' },
      nguon: N7K('Chương II, Bài 5 "Phân tử – Đơn chất – Hợp chất" (trang 32), Bài 6 "Giới thiệu về liên kết hoá học" (trang 36), Bài 7 "Hoá trị và công thức hoá học" (trang 40)'),
      hoiDap: [{ tu: ['don chat', 'hop chat'], tl: 'Đơn chất: 1 nguyên tố; hợp chất: từ 2 nguyên tố trở lên.' }, { tu: ['hoa tri', 'quy tac'], tl: 'a·x = b·y; mẹo "chéo hoá trị" rồi rút gọn.' }, { tu: ['phan tram', '%'], tl: '% = khối lượng nguyên tố trong phân tử : KLPT × 100.' }]
    },
    cauHoi: [
      { id: 'HH7C-01', muc: 'co-ban', liDoMuc: 'Phân biệt đơn chất, hợp chất.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các <b>hợp chất</b>.', phuongAn: [{ t: 'H₂O', dung: true }, { t: 'O₂', phanHoi: 'Chỉ có nguyên tố O → đơn chất.' }, { t: 'CO₂', dung: true }, { t: 'NaCl', dung: true }, { t: 'Fe', phanHoi: 'Đơn chất.' }], goiY: ['Đếm số nguyên tố.'], viSaoDung: 'H₂O, CO₂, NaCl.', loiGiai: 'H₂O, CO₂, NaCl.', giangLai: 'Đếm số kí hiệu khác nhau: 1 → đơn chất; ≥ 2 → hợp chất. Số nhỏ (chỉ số) không tính.', tienBo: 'Em đã phân biệt đúng.', nguon: N7K('Bài 5 "Phân tử – Đơn chất – Hợp chất", trang 32–35'), kiemTra: K6(),
        tuongTu: { id: 'HH7C-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các <b>đơn chất</b>.', phuongAn: [{ t: 'H₂', dung: true }, { t: 'Cu', dung: true }, { t: 'CH₄', phanHoi: 'Hai nguyên tố.' }, { t: 'N₂', dung: true }], goiY: ['Một nguyên tố.'], viSaoDung: 'H₂, Cu, N₂.', loiGiai: 'H₂, Cu, N₂.', giangLai: 'Đếm kí hiệu.', nguon: N7K('Bài 5, trang 32–35'), kiemTra: K6() } },
      { id: 'HH7C-02', muc: 'co-ban', liDoMuc: 'Tính khối lượng phân tử.', loai: 'so', de: 'Tính khối lượng phân tử của CO₂ (C = 12, O = 16). <span class="note">Chỉ ghi số (amu).</span>', dapAn: 44,
        loi: [{ gt: 28, nhan: 'Thiếu chỉ số', phanHoi: 'Có 2 nguyên tử O: 2 · 16.' }, { gt: 384, nhan: 'Lỗi dùng công thức', phanHoi: 'Cộng khối lượng các nguyên tử, không nhân 12 · 16 · 2.' }],
        buoc: { hoi: 'Khối lượng của 2 nguyên tử O?', dapAn: 32, dung: 'Đúng. 12 + 32.', sai: '2 · 16.' },
        goiY: ['12 + 2·16.'], viSaoDung: '44 amu.', loiGiai: '12 + 2·16 = <b>44 amu</b>.', giangLai: 'Chỉ số nhỏ dưới chân cho biết số nguyên tử → nhân rồi cộng.', tienBo: 'Em đã tính khối lượng phân tử.', nguon: N7K('Bài 5, trang 32–35'), kiemTra: K6(),
        tuongTu: { id: 'HH7C-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính khối lượng phân tử của H₂SO₄ (H = 1, S = 32, O = 16).', dapAn: 98, loi: [{ gt: 49, nhan: 'Thiếu chỉ số', phanHoi: 'Đủ chỉ số: 2 H, 4 O.' }], buoc: { hoi: 'Khối lượng 4 nguyên tử O?', dapAn: 64, dung: 'Đúng.', sai: '4 · 16.' }, goiY: ['2 + 32 + 64.'], viSaoDung: '98.', loiGiai: '<b>98 amu</b>.', giangLai: 'Nhân chỉ số rồi cộng.', nguon: N7K('Bài 5, trang 32–35'), kiemTra: K6() } },
      { id: 'HH7C-03', muc: 'van-dung', liDoMuc: 'Xác định hoá trị theo quy tắc.', loai: 'so', de: 'Trong hợp chất NH₃, H có hoá trị I. Hoá trị của N là bao nhiêu? <span class="note">Ghi số, ví dụ 2.</span>', dapAn: 3,
        loi: [{ gt: 1, nhan: 'Lỗi quy tắc hoá trị', phanHoi: 'a·1 = I·3 → a = 3.' }],
        buoc: { hoi: 'Tổng hoá trị của 3 nguyên tử H là bao nhiêu?', dapAn: 3, dung: 'Đúng. N (1 nguyên tử) phải có hoá trị 3.', sai: '3 · I.' },
        goiY: ['a·x = b·y.'], viSaoDung: 'N hoá trị III.', loiGiai: 'a · 1 = 1 · 3 → N hoá trị <b>III</b>.', giangLai: 'Hoá trị như "số tay" để nắm: N có 3 tay nắm 3 nguyên tử H.', tienBo: 'Em đã áp dụng quy tắc hoá trị.', nguon: N7K('Bài 7 "Hoá trị và công thức hoá học", trang 40–44'), kiemTra: K6(),
        tuongTu: { id: 'HH7C-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Trong hợp chất CO₂, O có hoá trị II. Hoá trị của C là bao nhiêu?', dapAn: 4, loi: [{ gt: 2, nhan: 'Lỗi quy tắc hoá trị', phanHoi: 'a·1 = 2·2.' }], buoc: { hoi: 'Tổng hoá trị của 2 nguyên tử O?', dapAn: 4, dung: 'Đúng.', sai: '2 · II.' }, goiY: ['a = 2·2.'], viSaoDung: 'IV.', loiGiai: 'C hoá trị <b>IV</b>.', giangLai: 'Số tay.', nguon: N7K('Bài 7, trang 40–44'), kiemTra: K6() } },
      { id: 'HH7C-04', muc: 'van-dung', liDoMuc: 'Lập công thức hoá học theo hoá trị.', loai: 'chon1', de: 'Công thức hoá học của hợp chất tạo bởi Al (hoá trị III) và O (hoá trị II) là:', phuongAn: [{ t: 'Al₂O₃', dung: true }, { t: 'AlO', phanHoi: '3·1 ≠ 2·1.' }, { t: 'Al₃O₂', phanHoi: 'Đảo chỉ số: 3·3 ≠ 2·2.' }, { t: 'AlO₃', phanHoi: '3·1 ≠ 2·3.' }], goiY: ['3·x = 2·y.'], viSaoDung: 'x = 2, y = 3.', loiGiai: '<b>Al₂O₃</b> (3·2 = 2·3).', giangLai: 'Mẹo chéo: hoá trị của nguyên tố này thành chỉ số của nguyên tố kia, rồi rút gọn nếu được.', tienBo: 'Em đã lập công thức đúng.', nguon: N7K('Bài 7, trang 40–44'), kiemTra: K6(),
        tuongTu: { id: 'HH7C-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Công thức hợp chất của Ca (II) và Cl (I) là:', phuongAn: [{ t: 'CaCl₂', dung: true }, { t: 'CaCl', phanHoi: '2·1 ≠ 1·1.' }, { t: 'Ca₂Cl', phanHoi: 'Đảo.' }, { t: 'CaCl₃', phanHoi: 'Không.' }], goiY: ['2·x = 1·y.'], viSaoDung: 'CaCl₂.', loiGiai: '<b>CaCl₂</b>.', giangLai: 'Chéo hoá trị.', nguon: N7K('Bài 7, trang 40–44'), kiemTra: K6() } },
      { id: 'HH7C-05', muc: 'nang-cao', liDoMuc: 'Tính phần trăm khối lượng, hai bước.', loai: 'so', de: 'Tính phần trăm khối lượng của Fe trong Fe₂O₃ (Fe = 56, O = 16). <span class="note">Chỉ ghi số, ví dụ 25.</span>', dapAn: 70,
        loi: [{ gt: 35, nhan: 'Thiếu chỉ số', phanHoi: 'Có 2 nguyên tử Fe: 2 · 56 = 112.' }, { gt: 30, nhan: 'Nhầm nguyên tố', phanHoi: '30% là của O.' }, { gt: 0.7, nhan: 'Chưa nhân 100', phanHoi: 'Đổi sang phần trăm.' }],
        buoc: { hoi: 'Khối lượng phân tử Fe₂O₃ là bao nhiêu?', dapAn: 160, dung: 'Đúng. %Fe = 112 : 160 × 100.', sai: '2·56 + 3·16.' },
        goiY: ['KLPT = 2·56 + 3·16.', '%Fe = 112 : KLPT × 100.'], viSaoDung: '112 : 160 = 0,7 = 70%.', loiGiai: 'KLPT = 112 + 48 = 160. %Fe = 112 : 160 × 100 = <b>70%</b>.', giangLai: 'Bước 1: tổng (KLPT). Bước 2: phần của Fe. Bước 3: chia rồi nhân 100. Kiểm tra: %Fe + %O = 100%.', tienBo: 'Em đã tính phần trăm khối lượng.', nguon: N7K('Bài 7, trang 40–44'), kiemTra: K6('Dạng tính % khối lượng: nhóm biên soạn cần đối chiếu lại nội dung mục này trong Bài 7 khi duyệt.'),
        tuongTu: { id: 'HH7C-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tính phần trăm khối lượng của S trong SO₂ (S = 32, O = 16).', dapAn: 50, loi: [{ gt: 0.5, nhan: 'Chưa nhân 100', phanHoi: 'Nhân 100.' }, { gt: '200/3', saiSo: 0.1, nhan: 'Thiếu chỉ số', phanHoi: 'Có 2 nguyên tử O.' }], buoc: { hoi: 'KLPT SO₂?', dapAn: 64, dung: 'Đúng.', sai: '32 + 32.' }, goiY: ['32 : 64.'], viSaoDung: '50%.', loiGiai: '<b>50%</b>.', giangLai: 'Ba bước.', nguon: N7K('Bài 7, trang 40–44'), kiemTra: K6() } },
      { id: 'HH7C-06', muc: 'nang-cao', liDoMuc: 'Nhận diện loại liên kết trong nhiều chất.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các phát biểu <b>đúng</b>.', phuongAn: [{ t: 'Trong NaCl, các ion Na⁺ và Cl⁻ hút nhau tạo liên kết ion.', dung: true }, { t: 'Trong phân tử H₂O, các nguyên tử liên kết với nhau bằng cặp electron dùng chung.', dung: true }, { t: 'Phân tử O₂ gồm hai nguyên tố khác nhau.', phanHoi: 'O₂ gồm hai nguyên tử cùng nguyên tố.' }, { t: 'Hợp chất được tạo nên từ ít nhất hai nguyên tố.', dung: true }], goiY: ['Ion hay dùng chung electron?'], viSaoDung: 'Ý 1, 2, 4.', loiGiai: 'Ý 1, 2, 4.', giangLai: 'Kim loại + phi kim (NaCl) → thường liên kết ion; phi kim + phi kim (H₂O, CO₂) → cộng hoá trị.', tienBo: 'Em đã phân biệt hai kiểu liên kết.', nguon: N7K('Bài 6 "Giới thiệu về liên kết hoá học", trang 36–39'), kiemTra: K6(),
        tuongTu: { id: 'HH7C-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các chất có <b>liên kết cộng hoá trị</b>.', phuongAn: [{ t: 'H₂O', dung: true }, { t: 'CO₂', dung: true }, { t: 'NaCl', phanHoi: 'Liên kết ion.' }, { t: 'H₂', dung: true }], goiY: ['Phi kim + phi kim.'], viSaoDung: 'H₂O, CO₂, H₂.', loiGiai: 'H₂O, CO₂, H₂.', giangLai: 'Phi kim với phi kim.', nguon: N7K('Bài 6, trang 36–39'), kiemTra: K6() } }
    ]
  };

  const vl7DoThi = {
    id: 'vl7-do-thi', lop: 7, mon: 'khtn', phanMon: 'Vật lí', ten: 'Đo tốc độ, đồ thị quãng đường – thời gian, an toàn giao thông',
    sgk: 'SGK KHTN 7 — Bài 9–11, trang 49–59', yccdGhiChu: YCCD7,
    kienThucTruoc: ['Tốc độ v = s/t (Bài 8)'],
    yeuCauCanDat: ['Mô tả cách đo tốc độ bằng đồng hồ bấm giây, cổng quang điện; nêu thiết bị bắn tốc độ.', 'Vẽ và đọc đồ thị quãng đường – thời gian; tính tốc độ từ đồ thị.', 'Nêu ảnh hưởng của tốc độ đến an toàn giao thông.'],
    bai: {
      mucTieu: ['tính tốc độ từ số đo;', 'đọc quãng đường trên đồ thị;', 'tính tốc độ từ đồ thị;', 'tính quãng đường xe đi trong thời gian phản ứng.'],
      khoiDong: { hoi: 'Vì sao trên đường có biển hạn chế tốc độ?', goiY: 'Xe càng nhanh càng khó dừng kịp, dễ gây tai nạn.' },
      trongTam: [
        'Đo tốc độ: đo quãng đường s (thước) và thời gian t (đồng hồ bấm giây hoặc đồng hồ đo thời gian hiện số với cổng quang điện), rồi tính v = s : t. Cảnh sát dùng <b>thiết bị bắn tốc độ</b>.',
        '<b>Đồ thị quãng đường – thời gian</b>: trục ngang là t, trục đứng là s. Chuyển động có tốc độ không đổi → đồ thị là <b>đoạn thẳng</b> nghiêng; đoạn nằm ngang → vật <b>đứng yên</b>.',
        'Từ đồ thị: chọn một điểm, đọc s và t, tính v = s : t. Đường càng dốc → tốc độ càng lớn.',
        'Tốc độ càng lớn thì quãng đường đi được trong thời gian phản ứng và quãng đường phanh càng dài → cần giữ <b>khoảng cách an toàn</b>, đi đúng tốc độ quy định.'
      ],
      viDu: { de: 'Đồ thị đi qua điểm (t = 4 s; s = 20 m). Tốc độ?', loiGiai: 'v = 20 : 4 = <b>5 m/s</b>.' },
      nguon: N7K('Bài 9 "Đo tốc độ" (trang 49), Bài 10 "Đồ thị quãng đường – thời gian" (trang 53), Bài 11 "Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông" (trang 56)'),
      hoiDap: [{ tu: ['do thi'], tl: 'Chọn một điểm trên đồ thị, đọc s và t, tính v = s/t. Đoạn nằm ngang: đứng yên.' }, { tu: ['cong quang dien'], tl: 'Cổng quang điện nối đồng hồ hiện số đo thời gian vật đi qua rất chính xác.' }, { tu: ['an toan'], tl: 'Tốc độ lớn → cần khoảng cách an toàn lớn.' }]
    },
    cauHoi: [
      { id: 'VL7B-01', muc: 'co-ban', liDoMuc: 'Tính tốc độ từ số đo.', loai: 'so', de: 'Một viên bi lăn qua đoạn 0,6 m trong 0,3 s (đo bằng cổng quang điện). Tốc độ của viên bi là bao nhiêu m/s?', dapAn: 2, soLieu: GIA_DINH,
        loi: [{ gt: 0.5, nhan: 'Đảo phép chia', phanHoi: 'v = s : t = 0,6 : 0,3.' }, { gt: 0.18, nhan: 'Lỗi dùng công thức', phanHoi: 'Không nhân s · t.' }],
        goiY: ['v = s : t.'], viSaoDung: '0,6 : 0,3 = 2.', loiGiai: '<b>2 m/s</b>.', giangLai: 'Nhân cả hai số với 10: 6 : 3 = 2.', tienBo: 'Em đã tính tốc độ.', nguon: N7K('Bài 9 "Đo tốc độ", trang 49–52'), kiemTra: K6(),
        tuongTu: { id: 'VL7B-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Bạn An chạy 60 m hết 12 s. Tốc độ của An là bao nhiêu m/s?', dapAn: 5, loi: [{ gt: 0.2, nhan: 'Đảo phép chia', phanHoi: '60 : 12.' }, { gt: 720, nhan: 'Lỗi dùng công thức', phanHoi: 'Chia, không nhân.' }], goiY: ['60 : 12.'], viSaoDung: '5.', loiGiai: '<b>5 m/s</b>.', giangLai: 's : t.', nguon: N7K('Bài 9, trang 49–52'), kiemTra: K6() } },
      { id: 'VL7B-02', muc: 'co-ban', liDoMuc: 'Đọc ý nghĩa đoạn đồ thị.', loai: 'chon1', de: 'Trên đồ thị quãng đường – thời gian, một đoạn <b>nằm ngang</b> (song song trục thời gian) cho biết vật:', phuongAn: [{ t: 'Đứng yên', dung: true }, { t: 'Chuyển động rất nhanh', phanHoi: 'Thời gian trôi nhưng quãng đường không tăng.' }, { t: 'Chuyển động đều', phanHoi: 'Chuyển động đều → đoạn thẳng nghiêng.' }, { t: 'Đi lùi', phanHoi: 'Không.' }], goiY: ['Quãng đường có tăng không?'], viSaoDung: 's không đổi → đứng yên.', loiGiai: '<b>Đứng yên</b>.', giangLai: 'Nằm ngang = quãng đường "đứng im" dù thời gian vẫn chạy.', tienBo: 'Em đã đọc được đồ thị.', nguon: N7K('Bài 10 "Đồ thị quãng đường – thời gian", trang 53–55'), kiemTra: K6(),
        tuongTu: { id: 'VL7B-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Hai đồ thị A và B đều là đoạn thẳng xuất phát từ gốc; A <b>dốc hơn</b> B. Kết luận nào đúng?', phuongAn: [{ t: 'Vật A có tốc độ lớn hơn vật B.', dung: true }, { t: 'Vật B có tốc độ lớn hơn.', phanHoi: 'Dốc hơn → nhanh hơn.' }, { t: 'Hai vật đứng yên.', phanHoi: 'Không.' }, { t: 'Không so sánh được.', phanHoi: 'So độ dốc.' }], goiY: ['Cùng thời gian, ai đi xa hơn?'], viSaoDung: 'A nhanh hơn.', loiGiai: '<b>A nhanh hơn</b>.', giangLai: 'Dốc hơn → nhanh hơn.', nguon: N7K('Bài 10, trang 53–55'), kiemTra: K6() } },
      { id: 'VL7B-03', muc: 'van-dung', liDoMuc: 'Tính tốc độ từ điểm trên đồ thị (đổi đơn vị).', loai: 'so', de: 'Đồ thị quãng đường – thời gian của một xe đạp là đoạn thẳng đi qua gốc toạ độ và điểm (t = 0,5 h; s = 6 km). Tốc độ của xe là bao nhiêu km/h?', dapAn: 12, soLieu: GIA_DINH,
        loi: [{ gt: 3, nhan: 'Lỗi dùng công thức', phanHoi: 'v = s : t = 6 : 0,5, không nhân.' }, { gt: '1/12', saiSo: 0.001, nhan: 'Đảo phép chia', phanHoi: 's : t, không phải t : s.' }],
        goiY: ['v = 6 : 0,5.'], viSaoDung: '12 km/h.', loiGiai: '6 : 0,5 = <b>12 km/h</b>.', giangLai: 'Chia cho 0,5 = nhân 2.', tienBo: 'Em đã tính tốc độ từ đồ thị.', nguon: N7K('Bài 10, trang 53–55'), kiemTra: K6(),
        tuongTu: { id: 'VL7B-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc, đọc ngược s.', loai: 'so', de: 'Đồ thị một vật chuyển động đều đi qua gốc và điểm (t = 2 s; s = 8 m). Sau 5 s vật đi được bao nhiêu mét?', dapAn: 20, soLieu: GIA_DINH, loi: [{ gt: 8, nhan: 'Thiếu bước', phanHoi: '8 m là sau 2 s.' }, { gt: 10, nhan: 'Lỗi tỉ lệ', phanHoi: 'v = 4 m/s → s = 4 · 5.' }], buoc: { hoi: 'Tốc độ của vật (m/s)?', dapAn: 4, dung: 'Đúng.', sai: '8 : 2.' }, goiY: ['Tìm v trước.'], viSaoDung: '20 m.', loiGiai: '<b>20 m</b>.', giangLai: 's = v · t.', nguon: N7K('Bài 10, trang 53–55'), kiemTra: K6() } },
      { id: 'VL7B-04', muc: 'van-dung', liDoMuc: 'Đổi đơn vị tốc độ rồi tính quãng đường trong thời gian phản ứng.', loai: 'so', de: 'Một ô tô chạy với tốc độ 72 km/h. Người lái mất 1 s để phản ứng trước khi đạp phanh. Trong 1 s đó xe đi được bao nhiêu mét?', dapAn: 20, soLieu: GIA_DINH,
        loi: [{ gt: 72, nhan: 'Lỗi đổi đơn vị', phanHoi: 'Đổi 72 km/h sang m/s: chia 3,6.' }, { gt: 259.2, nhan: 'Lỗi đổi đơn vị', phanHoi: 'Đổi km/h → m/s phải chia 3,6, không nhân.' }],
        buoc: { hoi: '72 km/h bằng bao nhiêu m/s?', dapAn: 20, dung: 'Đúng: 72 : 3,6 = 20. Trong 1 s xe đi 20 m.', sai: '72 : 3,6.' },
        goiY: ['1 m/s = 3,6 km/h.'], viSaoDung: '20 m/s × 1 s = 20 m.', loiGiai: '72 : 3,6 = 20 m/s → s = 20 · 1 = <b>20 m</b>.', giangLai: 'Chỉ 1 giây chần chừ mà xe đã đi 20 m — dài bằng 4–5 chiếc ô tô. Vì vậy phải giữ khoảng cách an toàn.', tienBo: 'Em đã liên hệ tốc độ với an toàn giao thông.', nguon: N7K('Bài 8 (trang 46: đổi đơn vị) và Bài 11 "Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông", trang 56–59'), kiemTra: K6(),
        tuongTu: { id: 'VL7B-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Xe máy chạy 54 km/h, thời gian phản ứng 1 s. Xe đi được bao nhiêu mét trong thời gian đó?', dapAn: 15, soLieu: GIA_DINH, loi: [{ gt: 54, nhan: 'Lỗi đổi đơn vị', phanHoi: 'Chia 3,6.' }], buoc: { hoi: '54 km/h = ? m/s', dapAn: 15, dung: 'Đúng.', sai: '54 : 3,6.' }, goiY: ['÷ 3,6.'], viSaoDung: '15 m.', loiGiai: '<b>15 m</b>.', giangLai: 'Đổi rồi nhân.', nguon: N7K('Bài 11, trang 56–59'), kiemTra: K6() } },
      { id: 'VL7B-05', muc: 'nang-cao', liDoMuc: 'Đọc đồ thị nhiều đoạn, tính tốc độ trung bình.', loai: 'so', de: 'Một bạn đi xe đạp: 10 phút đầu đi được 2 km; 10 phút tiếp theo dừng lại mua nước (đồ thị nằm ngang); 20 phút sau đi thêm 4 km. Tốc độ trung bình trên cả hành trình là bao nhiêu km/h?', dapAn: 9, soLieu: GIA_DINH,
        loi: [{ gt: 12, nhan: 'Bỏ thời gian dừng', phanHoi: 'Tốc độ trung bình tính trên <b>toàn bộ</b> thời gian, kể cả lúc dừng (40 phút).' }, { gt: 0.15, nhan: 'Lỗi đổi đơn vị', phanHoi: '6 km : 40 phút = 0,15 km/phút; đổi ra km/h: × 60.' }],
        buoc: { hoi: 'Tổng thời gian là bao nhiêu phút?', dapAn: 40, dung: 'Đúng: 40 phút = 2/3 giờ. v = 6 : (2/3).', sai: '10 + 10 + 20.' },
        goiY: ['Tổng quãng đường : tổng thời gian.'], viSaoDung: '6 km : (2/3 h) = 9 km/h.', loiGiai: 's = 6 km; t = 40 phút = ' + F(2, 3) + ' h; v = 6 : ' + F(2, 3) + ' = <b>9 km/h</b>.', giangLai: 'Tốc độ trung bình = tổng quãng đường : tổng thời gian (tính cả lúc dừng).', tienBo: 'Em đã tính tốc độ trung bình đúng.', nguon: N7K('Bài 8 (trang 46: tốc độ trung bình) và Bài 10 (trang 53–55)'), kiemTra: K6(),
        tuongTu: { id: 'VL7B-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một người đi bộ 30 phút được 2,5 km, nghỉ 15 phút, rồi đi tiếp 15 phút được 1,5 km. Tốc độ trung bình cả hành trình (km/h)?', dapAn: 4, soLieu: GIA_DINH, loi: [{ gt: '16/3', saiSo: 0.01, nhan: 'Bỏ thời gian dừng', phanHoi: 'Tính cả 15 phút nghỉ.' }], buoc: { hoi: 'Tổng thời gian (phút)?', dapAn: 60, dung: 'Đúng.', sai: '30 + 15 + 15.' }, goiY: ['4 km : 1 h.'], viSaoDung: '4.', loiGiai: '<b>4 km/h</b>.', giangLai: 'Tính cả lúc dừng.', nguon: N7K('Bài 8, Bài 10'), kiemTra: K6() } },
      { id: 'VL7B-06', muc: 'nang-cao', liDoMuc: 'Giải thích liên hệ tốc độ – an toàn; câu mở.', loai: 'mo', de: 'Vì sao khi trời mưa, người lái xe cần giảm tốc độ và giữ khoảng cách xa hơn với xe phía trước? Viết 2–4 câu.',
        tieuChi: [{ t: 'Nêu đường trơn, ma sát giảm → khó phanh / quãng đường phanh dài hơn.', tuDong: { tuKhoa: ['tron', 'ma sat', 'phanh'] } }, { t: 'Nêu tốc độ lớn → quãng đường đi được trước khi dừng dài hơn.', tuDong: { tuKhoa: ['toc do', 'nhanh'] } }, { t: 'Kết luận: giảm tốc độ, giữ khoảng cách để tránh va chạm.', tuDong: { tuKhoa: ['khoang cach', 'tai nan', 'va cham', 'an toan'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }],
        baiThamKhao: 'Khi trời mưa, mặt đường trơn nên ma sát giảm, xe phanh khó hơn và quãng đường phanh dài hơn. Nếu đi tốc độ lớn, xe sẽ đi thêm một quãng dài trước khi dừng hẳn. Vì vậy cần giảm tốc độ và giữ khoảng cách xa hơn để tránh va chạm, đảm bảo an toàn.',
        giupViet: 'Dàn ý: Đường trơn → … ; Tốc độ lớn → … ; Vì vậy …', goiY: ['Nghĩ về ma sát (lớp 6).'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Hai lí do cộng dồn: đường trơn (khó phanh) + tốc độ cao (đi xa hơn).', tienBo: 'Em đã giải thích bằng kiến thức tốc độ.', nguon: N7K('Bài 11, trang 56–59'), kiemTra: K6('Câu mở: kiểm tra sơ bộ theo từ khoá.'),
        tuongTu: { id: 'VL7B-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Vì sao gần trường học thường có biển giới hạn tốc độ thấp? Viết 2–4 câu.', tieuChi: [{ t: 'Nêu có nhiều học sinh qua đường.', tuDong: { tuKhoa: ['hoc sinh', 'qua duong', 'dong nguoi'] } }, { t: 'Nêu tốc độ thấp giúp dừng kịp.', tuDong: { tuKhoa: ['dung kip', 'phanh', 'kip'] } }, { t: 'Kết luận an toàn.', tuDong: { tuKhoa: ['an toan', 'tai nan'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Gần trường học có nhiều học sinh qua đường, nhất là giờ tan học. Xe đi chậm thì người lái dễ dừng kịp khi có học sinh bất ngờ chạy ra. Vì vậy giới hạn tốc độ thấp giúp tránh tai nạn, đảm bảo an toàn.', giupViet: 'Nhiều học sinh → đi chậm dễ dừng kịp → an toàn.', goiY: ['Giờ tan học.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Tốc độ thấp → dừng kịp.', nguon: N7K('Bài 11, trang 56–59'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const vl7AmThanh = {
    id: 'vl7-am-thanh', lop: 7, mon: 'khtn', phanMon: 'Vật lí', ten: 'Âm thanh',
    sgk: 'SGK KHTN 7 — Chương IV, Bài 12–14, trang 60–71', yccdGhiChu: YCCD7,
    kienThucTruoc: ['Các thể của chất: rắn, lỏng, khí (lớp 6)'],
    yeuCauCanDat: ['Mô tả sóng âm; nêu âm truyền được trong rắn, lỏng, khí, không truyền trong chân không.', 'Nêu tần số (Hz); độ cao của âm phụ thuộc tần số, độ to phụ thuộc biên độ.', 'Nêu phản xạ âm, vật phản xạ âm tốt / kém; biện pháp chống ô nhiễm tiếng ồn.'],
    bai: {
      mucTieu: ['tính tần số;', 'phân biệt độ to và độ cao;', 'nhận biết hạ âm, siêu âm;', 'chọn biện pháp chống ồn.'],
      khoiDong: { hoi: 'Khi gảy dây đàn, dây đàn làm gì để phát ra âm?', goiY: 'Dây đàn dao động.' },
      trongTam: [
        'Vật phát ra âm gọi là <b>nguồn âm</b>; nguồn âm đều <b>dao động</b>. <b>Sóng âm</b> là sự lan truyền dao động âm trong môi trường rắn, lỏng, khí; âm <b>không truyền được trong chân không</b>.',
        '<b>Tần số</b> = số dao động trong 1 giây, đơn vị <b>hertz (Hz)</b>. Tần số càng lớn → âm càng <b>cao</b> (bổng).',
        '<b>Biên độ</b> dao động càng lớn → âm càng <b>to</b>.',
        'Tai người nghe được âm có tần số khoảng <b>20 Hz đến 20 000 Hz</b>. Dưới 20 Hz là <b>hạ âm</b>; trên 20 000 Hz là <b>siêu âm</b>.',
        'Âm gặp vật cản bị <b>phản xạ</b>. Vật cứng, nhẵn phản xạ âm tốt; vật mềm, xốp, bề mặt gồ ghề phản xạ âm kém (hấp thụ âm). Chống ồn: giảm âm tại nguồn, ngăn đường truyền (tường, cây xanh), dùng vật liệu hấp thụ âm.'
      ],
      viDu: { de: 'Một vật dao động 500 lần trong 2 giây. Tần số?', loiGiai: '500 : 2 = <b>250 Hz</b>.' },
      nguon: N7K('Chương IV "Âm thanh", Bài 12 "Sóng âm" (trang 60), Bài 13 "Độ to và độ cao của âm" (trang 64), Bài 14 "Phản xạ âm, chống ô nhiễm tiếng ồn" (trang 68)'),
      hoiDap: [{ tu: ['tan so', 'hz'], tl: 'Tần số = số dao động : số giây (Hz).' }, { tu: ['do to', 'do cao', 'bien do'], tl: 'Độ cao ↔ tần số; độ to ↔ biên độ.' }, { tu: ['sieu am', 'ha am'], tl: 'Hạ âm < 20 Hz; siêu âm > 20 000 Hz; người nghe 20–20 000 Hz.' }]
    },
    cauHoi: [
      { id: 'VL7C-01', muc: 'co-ban', liDoMuc: 'Nhận biết môi trường truyền âm.', loai: 'chon1', de: 'Âm <b>không</b> truyền được trong môi trường nào?', phuongAn: [{ t: 'Chân không', dung: true }, { t: 'Không khí', phanHoi: 'Ta nghe nói chuyện qua không khí.' }, { t: 'Nước', phanHoi: 'Cá nghe được tiếng động trong nước.' }, { t: 'Thép', phanHoi: 'Chất rắn truyền âm tốt.' }], goiY: ['Không có hạt nào để dao động.'], viSaoDung: 'Chân không không có chất để truyền dao động.', loiGiai: '<b>Chân không</b>.', giangLai: 'Âm cần "người chuyền tay" (các hạt của chất). Chân không không có hạt nào.', tienBo: 'Em đã nhớ môi trường truyền âm.', nguon: N7K('Bài 12 "Sóng âm", trang 60–63'), kiemTra: K6(),
        tuongTu: { id: 'VL7C-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Nguồn âm có đặc điểm chung nào?', phuongAn: [{ t: 'Đều dao động', dung: true }, { t: 'Đều phát sáng', phanHoi: 'Không.' }, { t: 'Đều bằng kim loại', phanHoi: 'Không.' }, { t: 'Đều rất lớn', phanHoi: 'Không.' }], goiY: ['Dây đàn, mặt trống.'], viSaoDung: 'Dao động.', loiGiai: '<b>Đều dao động</b>.', giangLai: 'Sờ cổ khi nói: thấy rung.', nguon: N7K('Bài 12, trang 60–63'), kiemTra: K6() } },
      { id: 'VL7C-02', muc: 'co-ban', liDoMuc: 'Tính tần số.', loai: 'so', de: 'Một con muỗi vỗ cánh 3 000 lần trong 5 giây. Tần số vỗ cánh là bao nhiêu Hz?', dapAn: 600, soLieu: GIA_DINH,
        loi: [{ gt: 15000, nhan: 'Lỗi dùng công thức', phanHoi: 'Chia số dao động cho số giây, không nhân.' }, { gt: 3000, nhan: 'Thiếu bước', phanHoi: 'Đó là trong 5 giây. Tần số tính trong 1 giây.' }],
        goiY: ['Tần số = số dao động : thời gian (s).'], viSaoDung: '3 000 : 5 = 600.', loiGiai: '<b>600 Hz</b>.', giangLai: 'Tần số trả lời câu hỏi "mỗi giây mấy lần?".', tienBo: 'Em đã tính tần số.', nguon: N7K('Bài 13 "Độ to và độ cao của âm", trang 64–67'), kiemTra: K6(),
        tuongTu: { id: 'VL7C-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một dây đàn dao động 880 lần trong 2 giây. Tần số (Hz)?', dapAn: 440, loi: [{ gt: 1760, nhan: 'Lỗi dùng công thức', phanHoi: 'Chia.' }], goiY: ['880 : 2.'], viSaoDung: '440.', loiGiai: '<b>440 Hz</b>.', giangLai: 'Mỗi giây mấy lần.', nguon: N7K('Bài 13, trang 64–67'), kiemTra: K6() } },
      { id: 'VL7C-03', muc: 'van-dung', liDoMuc: 'Phân biệt độ to và độ cao.', loai: 'chon1', de: 'Bạn Lan gõ mạnh hơn vào mặt trống. Âm phát ra thay đổi thế nào?', phuongAn: [{ t: 'To hơn, vì biên độ dao động lớn hơn.', dung: true }, { t: 'Cao hơn, vì tần số lớn hơn.', phanHoi: 'Gõ mạnh làm biên độ tăng → to hơn, không làm âm cao hơn đáng kể.' }, { t: 'Nhỏ hơn.', phanHoi: 'Ngược lại.' }, { t: 'Không thay đổi.', phanHoi: 'Có thay đổi.' }], goiY: ['Mạnh ↔ biên độ.'], viSaoDung: 'Biên độ lớn → to.', loiGiai: '<b>To hơn</b> (biên độ lớn hơn).', giangLai: 'To – nhỏ ↔ biên độ (rung mạnh hay nhẹ). Cao – thấp ↔ tần số (rung nhanh hay chậm).', tienBo: 'Em đã phân biệt độ to, độ cao.', nguon: N7K('Bài 13, trang 64–67'), kiemTra: K6(),
        tuongTu: { id: 'VL7C-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Dây đàn A dao động với tần số 300 Hz, dây B 500 Hz. Kết luận đúng?', phuongAn: [{ t: 'Dây B phát âm cao hơn.', dung: true }, { t: 'Dây A phát âm cao hơn.', phanHoi: 'Tần số lớn → cao.' }, { t: 'Dây B phát âm to hơn.', phanHoi: 'Độ to phụ thuộc biên độ.' }, { t: 'Hai dây như nhau.', phanHoi: 'Không.' }], goiY: ['Tần số ↔ độ cao.'], viSaoDung: 'B cao hơn.', loiGiai: '<b>Dây B cao hơn</b>.', giangLai: 'Nhanh → cao.', nguon: N7K('Bài 13, trang 64–67'), kiemTra: K6() } },
      { id: 'VL7C-04', muc: 'van-dung', liDoMuc: 'Phân loại âm theo tần số.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các âm mà <b>tai người nghe được</b>.', phuongAn: [{ t: 'Âm có tần số 50 Hz', dung: true }, { t: 'Âm có tần số 15 Hz', phanHoi: 'Dưới 20 Hz → hạ âm.' }, { t: 'Âm có tần số 1 000 Hz', dung: true }, { t: 'Âm có tần số 30 000 Hz', phanHoi: 'Trên 20 000 Hz → siêu âm.' }, { t: 'Âm có tần số 18 000 Hz', dung: true }], goiY: ['Khoảng 20 Hz – 20 000 Hz.'], viSaoDung: '50, 1 000, 18 000 Hz.', loiGiai: 'Ý 1, 3, 5.', giangLai: 'Vẽ đoạn thẳng từ 20 đến 20 000: trong đoạn → nghe được.', tienBo: 'Em đã nhận biết hạ âm, siêu âm.', nguon: N7K('Bài 13, trang 64–67; thuật ngữ "siêu âm" (trang 71)'), kiemTra: K6(),
        tuongTu: { id: 'VL7C-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các âm là <b>siêu âm</b>.', phuongAn: [{ t: '25 000 Hz', dung: true }, { t: '40 000 Hz', dung: true }, { t: '10 Hz', phanHoi: 'Hạ âm.' }, { t: '5 000 Hz', phanHoi: 'Nghe được.' }], goiY: ['> 20 000 Hz.'], viSaoDung: '25 000; 40 000.', loiGiai: 'Ý 1, 2.', giangLai: 'Trên 20 000.', nguon: N7K('Bài 13, trang 64–67'), kiemTra: K6() } },
      { id: 'VL7C-05', muc: 'nang-cao', liDoMuc: 'Tính thời gian nghe tiếng vang (âm đi và về).', loai: 'so', de: 'Một bạn đứng cách vách núi 170 m và hét lớn. Biết âm truyền trong không khí với tốc độ khoảng 340 m/s. Sau bao nhiêu giây bạn nghe thấy tiếng vang?', dapAn: 1, soLieu: 'Tốc độ âm trong không khí lấy gần đúng 340 m/s để tính.',
        loi: [{ gt: 0.5, nhan: 'Quên đường về', phanHoi: 'Âm phải đi đến vách núi <b>và quay về</b>: 2 · 170 m.' }, { gt: 2, nhan: 'Lỗi dùng công thức', phanHoi: 't = s : v = 340 : 340.' }],
        buoc: { hoi: 'Tổng quãng đường âm đi (đi và về) là bao nhiêu mét?', dapAn: 340, dung: 'Đúng. t = 340 : 340.', sai: '2 · 170.' },
        goiY: ['Âm đi và về.', 't = s : v.'], viSaoDung: '340 : 340 = 1 s.', loiGiai: 's = 2 · 170 = 340 m; t = 340 : 340 = <b>1 s</b>.', giangLai: 'Tiếng vang là âm phản xạ — giống quả bóng ném vào tường rồi bật lại: đi một lượt, về một lượt.', tienBo: 'Em đã tính được thời gian tiếng vang.', nguon: N7K('Bài 14 "Phản xạ âm, chống ô nhiễm tiếng ồn", trang 68–71'), kiemTra: K6('Dạng tính tiếng vang: nhóm biên soạn tự soạn, dùng tốc độ âm cho sẵn trong đề.'),
        tuongTu: { id: 'VL7C-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc, tính ngược khoảng cách.', loai: 'so', de: 'Bạn nghe tiếng vang sau 2 s kể từ khi hét. Âm truyền 340 m/s. Vách núi cách bạn bao nhiêu mét?', dapAn: 340, loi: [{ gt: 680, nhan: 'Quên chia đôi', phanHoi: '680 m là cả đi và về.' }], buoc: { hoi: 'Tổng quãng đường đi và về?', dapAn: 680, dung: 'Đúng.', sai: '340 · 2.' }, goiY: ['Chia đôi.'], viSaoDung: '340 m.', loiGiai: '<b>340 m</b>.', giangLai: 'Đi và về.', nguon: N7K('Bài 14, trang 68–71'), kiemTra: K6() } },
      { id: 'VL7C-06', muc: 'nang-cao', liDoMuc: 'Đánh giá nhiều biện pháp chống ồn dựa vào phản xạ, hấp thụ âm.', loai: 'chonNhieu', de: 'Nhà em ở gần đường lớn rất ồn. <b>Chọn TẤT CẢ</b> các biện pháp giúp giảm tiếng ồn.', phuongAn: [{ t: 'Trồng hàng cây xanh trước nhà.', dung: true }, { t: 'Treo rèm dày, dùng vật liệu xốp để hấp thụ âm.', dung: true }, { t: 'Đóng cửa kính khi xe cộ đông.', dung: true }, { t: 'Lát tường nhà bằng gạch men nhẵn bóng để âm phản xạ nhiều hơn vào phòng.', phanHoi: 'Bề mặt nhẵn làm âm phản xạ nhiều trong phòng, không giảm ồn.' }, { t: 'Bật loa thật to để át tiếng xe.', phanHoi: 'Làm tăng ô nhiễm tiếng ồn.' }], goiY: ['Ngăn đường truyền, hấp thụ âm.'], viSaoDung: 'Ý 1, 2, 3.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Ba cách: giảm tại nguồn, chặn đường truyền (cây, tường, cửa), hấp thụ âm (vật mềm, xốp).', tienBo: 'Em đã chọn biện pháp chống ồn.', nguon: N7K('Bài 14, trang 68–71'), kiemTra: K6(),
        tuongTu: { id: 'VL7C-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các vật <b>phản xạ âm kém</b> (hấp thụ âm tốt).', phuongAn: [{ t: 'Rèm nhung', dung: true }, { t: 'Tấm xốp', dung: true }, { t: 'Mặt gương', phanHoi: 'Cứng, nhẵn → phản xạ tốt.' }, { t: 'Tường đá hoa', phanHoi: 'Phản xạ tốt.' }, { t: 'Áo len', dung: true }], goiY: ['Mềm, xốp.'], viSaoDung: 'Rèm, xốp, len.', loiGiai: 'Ý 1, 2, 5.', giangLai: 'Mềm, xốp → hấp thụ.', nguon: N7K('Bài 14, trang 68–71'), kiemTra: K6() } }
    ]
  };

  const vl7AnhSang = {
    id: 'vl7-anh-sang', lop: 7, mon: 'khtn', phanMon: 'Vật lí', ten: 'Ánh sáng: tia sáng, phản xạ, gương phẳng',
    sgk: 'SGK KHTN 7 — Chương V, Bài 15–17, trang 72–85', yccdGhiChu: YCCD7,
    kienThucTruoc: ['Năng lượng ánh sáng (lớp 6)', 'Đo góc (Toán)'],
    yeuCauCanDat: ['Nêu ánh sáng là một dạng năng lượng; biểu diễn tia sáng; giải thích vùng tối.', 'Phát biểu định luật phản xạ ánh sáng; vẽ tia phản xạ.', 'Nêu tính chất ảnh qua gương phẳng.'],
    bai: {
      mucTieu: ['vẽ tia sáng;', 'tính góc phản xạ;', 'tính khoảng cách ảnh – vật;', 'giải thích vùng tối.'],
      khoiDong: { hoi: 'Vì sao đứng dưới nắng ta thấy bóng của mình?', goiY: 'Cơ thể chắn ánh sáng, phía sau là vùng không nhận được ánh sáng (vùng tối).' },
      trongTam: [
        'Ánh sáng là một dạng <b>năng lượng</b>. <b>Tia sáng</b> được biểu diễn bằng đường thẳng có mũi tên chỉ hướng truyền.',
        '<b>Vùng tối</b>: vùng phía sau vật cản không nhận được ánh sáng từ nguồn sáng truyền tới.',
        '<b>Định luật phản xạ ánh sáng</b>: tia phản xạ nằm trong mặt phẳng tới; <b>góc phản xạ bằng góc tới</b> (i\' = i). Góc tới đo giữa tia tới và <b>pháp tuyến</b> (đường vuông góc với gương).',
        'Ảnh qua <b>gương phẳng</b>: ảnh ảo, <b>lớn bằng vật</b>; khoảng cách từ ảnh đến gương <b>bằng</b> khoảng cách từ vật đến gương.'
      ],
      viDu: { de: 'Tia tới hợp với mặt gương góc 30°. Góc tới bằng bao nhiêu?', loiGiai: 'Pháp tuyến vuông góc gương: i = 90° − 30° = <b>60°</b>.' },
      nguon: N7K('Chương V "Ánh sáng", Bài 15 (trang 72), Bài 16 "Sự phản xạ ánh sáng" (trang 78), Bài 17 "Ảnh của vật qua gương phẳng" (trang 82)'),
      hoiDap: [{ tu: ['goc toi', 'goc phan xa'], tl: 'Góc tới đo với pháp tuyến; góc phản xạ = góc tới.' }, { tu: ['guong phang', 'anh'], tl: 'Ảnh ảo, bằng vật, cách gương bằng vật cách gương.' }, { tu: ['vung toi'], tl: 'Vùng sau vật cản không nhận được ánh sáng.' }]
    },
    cauHoi: [
      { id: 'VL7D-01', muc: 'co-ban', liDoMuc: 'Áp dụng định luật phản xạ.', loai: 'so', de: 'Chiếu một tia sáng tới gương phẳng với góc tới 35°. Góc phản xạ bằng bao nhiêu độ?', dapAn: 35,
        loi: [{ gt: 55, nhan: 'Nhầm góc với mặt gương', phanHoi: 'Góc phản xạ bằng góc tới (đều đo với pháp tuyến).' }, { gt: 70, nhan: 'Nhầm góc tạo bởi hai tia', phanHoi: '70° là góc giữa tia tới và tia phản xạ.' }],
        goiY: ['i\' = i.'], viSaoDung: '35°.', loiGiai: '<b>35°</b>.', giangLai: 'Giống quả bóng nảy trên sàn: góc đi tới bằng góc bật ra.', tienBo: 'Em đã áp dụng định luật phản xạ.', nguon: N7K('Bài 16 "Sự phản xạ ánh sáng", trang 78–81'), kiemTra: K6(),
        tuongTu: { id: 'VL7D-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Góc phản xạ đo được là 50°. Góc tới bằng bao nhiêu độ?', dapAn: 50, loi: [{ gt: 40, nhan: 'Nhầm góc với mặt gương', phanHoi: 'Bằng nhau.' }], goiY: ['Bằng nhau.'], viSaoDung: '50°.', loiGiai: '<b>50°</b>.', giangLai: 'Bóng nảy.', nguon: N7K('Bài 16, trang 78–81'), kiemTra: K6() } },
      { id: 'VL7D-02', muc: 'co-ban', liDoMuc: 'Nhớ tính chất ảnh qua gương phẳng.', loai: 'chon1', de: 'Ảnh của một vật tạo bởi gương phẳng có đặc điểm nào?', phuongAn: [{ t: 'Ảnh ảo, lớn bằng vật', dung: true }, { t: 'Ảnh thật, lớn hơn vật', phanHoi: 'Ảnh qua gương phẳng là ảnh ảo, bằng vật.' }, { t: 'Ảnh ảo, nhỏ hơn vật', phanHoi: 'Bằng vật.' }, { t: 'Ảnh thật, hứng được trên màn', phanHoi: 'Không hứng được trên màn.' }], goiY: ['Soi gương.'], viSaoDung: 'Ảo, bằng vật.', loiGiai: '<b>Ảnh ảo, lớn bằng vật</b>.', giangLai: 'Ảnh "ở sau gương" nên không hứng được — đó là ảnh ảo.', tienBo: 'Em đã nhớ tính chất ảnh.', nguon: N7K('Bài 17 "Ảnh của vật qua gương phẳng", trang 82–85'), kiemTra: K6(),
        tuongTu: { id: 'VL7D-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Vùng tối là:', phuongAn: [{ t: 'Vùng phía sau vật cản không nhận được ánh sáng từ nguồn', dung: true }, { t: 'Vùng nhận nhiều ánh sáng nhất', phanHoi: 'Ngược lại.' }, { t: 'Vùng có màu đen', phanHoi: 'Không phải.' }, { t: 'Ảnh qua gương', phanHoi: 'Không.' }], goiY: ['Bóng.'], viSaoDung: 'Định nghĩa.', loiGiai: '<b>Vùng sau vật cản không nhận được ánh sáng</b>.', giangLai: 'Bóng của em.', nguon: N7K('Bài 15, trang 72–77'), kiemTra: K6() } },
      { id: 'VL7D-03', muc: 'van-dung', liDoMuc: 'Tính góc tới khi biết góc tia sáng hợp với mặt gương.', loai: 'so', de: 'Tia tới hợp với <b>mặt gương</b> một góc 40°. Góc phản xạ bằng bao nhiêu độ?', dapAn: 50,
        loi: [{ gt: 40, nhan: 'Nhầm góc với mặt gương', phanHoi: 'Góc tới đo với <b>pháp tuyến</b>: 90° − 40°.' }, { gt: 100, nhan: 'Nhầm góc tạo bởi hai tia', phanHoi: 'Đó là góc giữa tia tới và tia phản xạ.' }],
        buoc: { hoi: 'Góc tới (với pháp tuyến) bằng bao nhiêu độ?', dapAn: 50, dung: 'Đúng: 90 − 40 = 50. Góc phản xạ cũng 50°.', sai: 'Pháp tuyến vuông góc gương: 90 − 40.' },
        goiY: ['Pháp tuyến ⟂ gương.'], viSaoDung: 'i = 50°, i\' = 50°.', loiGiai: 'i = 90° − 40° = 50° → i\' = <b>50°</b>.', giangLai: 'Luôn vẽ pháp tuyến (nét đứt) trước khi đo góc.', tienBo: 'Em đã tránh bẫy góc với mặt gương.', nguon: N7K('Bài 16, trang 78–81'), kiemTra: K6(),
        tuongTu: { id: 'VL7D-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Tia tới hợp với mặt gương góc 25°. Góc giữa tia tới và tia phản xạ bằng bao nhiêu độ?', dapAn: 130, loi: [{ gt: 50, nhan: 'Nhầm góc với mặt gương', phanHoi: 'Góc tới = 65°.' }, { gt: 65, nhan: 'Thiếu bước', phanHoi: 'Đó là góc tới; góc giữa hai tia = 2·65.' }], buoc: { hoi: 'Góc tới?', dapAn: 65, dung: 'Đúng.', sai: '90 − 25.' }, goiY: ['2·i.'], viSaoDung: '130°.', loiGiai: '<b>130°</b>.', giangLai: 'Vẽ pháp tuyến.', nguon: N7K('Bài 16, trang 78–81'), kiemTra: K6() } },
      { id: 'VL7D-04', muc: 'van-dung', liDoMuc: 'Tính khoảng cách ảnh – vật.', loai: 'so', de: 'Bạn Hoa đứng cách gương phẳng 1,5 m. Ảnh của Hoa cách Hoa bao nhiêu mét?', dapAn: 3,
        loi: [{ gt: 1.5, nhan: 'Nhầm ảnh – gương với ảnh – vật', phanHoi: '1,5 m là khoảng cách ảnh đến gương. Ảnh đến Hoa = 1,5 + 1,5.' }],
        buoc: { hoi: 'Ảnh cách gương bao nhiêu mét?', dapAn: 1.5, dung: 'Đúng. Ảnh cách Hoa: 1,5 + 1,5.', sai: 'Bằng khoảng cách vật – gương.' },
        goiY: ['Ảnh cách gương = vật cách gương.'], viSaoDung: '3 m.', loiGiai: '1,5 + 1,5 = <b>3 m</b>.', giangLai: 'Gương như đường đối xứng: Hoa ở một bên, ảnh ở bên kia, cách đều.', tienBo: 'Em đã dùng tính đối xứng.', nguon: N7K('Bài 17, trang 82–85'), kiemTra: K6(),
        tuongTu: { id: 'VL7D-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một bóng đèn cách gương phẳng 40 cm. Ảnh của nó cách bóng đèn bao nhiêu cm?', dapAn: 80, loi: [{ gt: 40, nhan: 'Nhầm ảnh – gương với ảnh – vật', phanHoi: 'Cộng hai phía.' }], buoc: { hoi: 'Ảnh cách gương?', dapAn: 40, dung: 'Đúng.', sai: 'Bằng nhau.' }, goiY: ['40 + 40.'], viSaoDung: '80.', loiGiai: '<b>80 cm</b>.', giangLai: 'Đối xứng.', nguon: N7K('Bài 17, trang 82–85'), kiemTra: K6() } },
      { id: 'VL7D-05', muc: 'nang-cao', liDoMuc: 'Bài toán động: vật tiến lại gần gương.', loai: 'so', de: 'Nam đứng cách gương phẳng 2 m rồi bước lại gần gương thêm 0,5 m. Lúc này ảnh cách Nam bao nhiêu mét?', dapAn: 3,
        loi: [{ gt: 4, nhan: 'Chưa cập nhật vị trí', phanHoi: '4 m là lúc chưa bước. Nam đã lại gần thêm 0,5 m.' }, { gt: 1.5, nhan: 'Nhầm ảnh – gương với ảnh – vật', phanHoi: '1,5 m là khoảng cách đến gương.' }, { gt: 3.5, nhan: 'Lỗi tính', phanHoi: 'Cả Nam và ảnh đều lại gần gương 0,5 m.' }],
        buoc: { hoi: 'Sau khi bước, Nam cách gương bao nhiêu mét?', dapAn: 1.5, dung: 'Đúng. Ảnh cũng cách gương 1,5 m → cách Nam 3 m.', sai: '2 − 0,5.' },
        goiY: ['Tính khoảng cách mới đến gương trước.'], viSaoDung: '2 · 1,5 = 3 m.', loiGiai: 'Nam cách gương 1,5 m → ảnh cách gương 1,5 m → ảnh cách Nam <b>3 m</b>.', giangLai: 'Nam lại gần 0,5 m thì ảnh cũng "đi ra" gần gương 0,5 m: khoảng cách giảm 2 · 0,5 = 1 m (4 → 3).', tienBo: 'Em đã giải bài toán vật di chuyển.', nguon: N7K('Bài 17, trang 82–85'), kiemTra: K6(),
        tuongTu: { id: 'VL7D-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một em bé cách gương 1 m, lùi ra xa gương thêm 0,5 m. Ảnh cách em bé bao nhiêu mét?', dapAn: 3, loi: [{ gt: 2, nhan: 'Chưa cập nhật vị trí', phanHoi: 'Đã lùi xa thêm.' }, { gt: 1.5, nhan: 'Nhầm ảnh – gương với ảnh – vật', phanHoi: 'Nhân đôi.' }], buoc: { hoi: 'Em bé cách gương bao nhiêu sau khi lùi?', dapAn: 1.5, dung: 'Đúng.', sai: '1 + 0,5.' }, goiY: ['1,5 · 2.'], viSaoDung: '3 m.', loiGiai: '<b>3 m</b>.', giangLai: 'Cập nhật rồi nhân đôi.', nguon: N7K('Bài 17, trang 82–85'), kiemTra: K6() } },
      { id: 'VL7D-06', muc: 'nang-cao', liDoMuc: 'Giải thích ứng dụng thực tế bằng định luật phản xạ; câu mở.', loai: 'mo', de: 'Ở những khúc cua khuất, người ta thường đặt gương cầu lồi hoặc gương. Hãy dùng kiến thức về phản xạ ánh sáng giải thích vì sao gương giúp người lái xe tránh tai nạn. Viết 2–4 câu.',
        tieuChi: [{ t: 'Nêu ánh sáng từ xe/vật phía bên kia khúc cua chiếu tới gương.', tuDong: { tuKhoa: ['anh sang', 'chieu toi', 'tia sang'] } }, { t: 'Nêu ánh sáng bị phản xạ vào mắt người lái.', tuDong: { tuKhoa: ['phan xa'] } }, { t: 'Kết luận: người lái nhìn thấy xe bị khuất → giảm tốc, tránh va chạm.', tuDong: { tuKhoa: ['nhin thay', 'thay duoc', 'tranh', 'tai nan', 'an toan'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }],
        baiThamKhao: 'Ánh sáng từ chiếc xe ở phía bên kia khúc cua chiếu tới gương. Gương phản xạ ánh sáng đó vào mắt người lái xe. Nhờ vậy người lái nhìn thấy xe bị khuất để giảm tốc độ, tránh va chạm.', giupViet: 'Ánh sáng từ … chiếu tới gương → gương phản xạ vào … → người lái …', goiY: ['Đường đi của ánh sáng.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Vẽ đường đi: xe khuất → gương → mắt.', tienBo: 'Em đã vận dụng phản xạ ánh sáng.', nguon: N7K('Bài 16, trang 78–81'), kiemTra: K6('Câu mở: kiểm tra sơ bộ theo từ khoá.'),
        tuongTu: { id: 'VL7D-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Vì sao ở trong phòng tối ta không nhìn thấy quyển sách, nhưng khi bật đèn thì thấy? Viết 2–4 câu.', tieuChi: [{ t: 'Nêu quyển sách không tự phát sáng.', tuDong: { tuKhoa: ['khong tu phat sang', 'khong phat sang'] } }, { t: 'Nêu ánh sáng đèn chiếu tới sách rồi hắt (phản xạ) vào mắt.', tuDong: { tuKhoa: ['phan xa', 'hat', 'vao mat'] } }, { t: 'Kết luận nhìn thấy khi có ánh sáng từ vật vào mắt.', tuDong: { tuKhoa: ['nhin thay', 'mat'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Quyển sách không tự phát sáng. Khi bật đèn, ánh sáng chiếu tới sách rồi bị phản xạ vào mắt ta. Ta nhìn thấy vật khi có ánh sáng từ vật truyền vào mắt.', giupViet: 'Không tự phát sáng → đèn chiếu → phản xạ vào mắt.', goiY: ['Mắt nhận ánh sáng.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Ánh sáng vào mắt.', nguon: N7K('Bài 15–16, trang 72–81'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const vl7Tu = {
    id: 'vl7-tu', lop: 7, mon: 'khtn', phanMon: 'Vật lí', ten: 'Từ: nam châm, từ trường, nam châm điện',
    sgk: 'SGK KHTN 7 — Chương VI, Bài 18–20, trang 86–98', yccdGhiChu: YCCD7,
    kienThucTruoc: ['Lực không tiếp xúc (lớp 6)'],
    yeuCauCanDat: ['Nêu được nam châm có hai cực; tương tác giữa các cực; vật liệu có từ tính.', 'Nêu được từ trường, đường sức từ; Trái Đất có từ trường; dùng la bàn xác định hướng.', 'Chế tạo nam châm điện đơn giản; nêu cách làm nam châm điện mạnh hơn.'],
    bai: {
      mucTieu: ['dự đoán hai nam châm hút hay đẩy;', 'chọn vật bị nam châm hút;', 'dùng la bàn tìm hướng;', 'tăng lực của nam châm điện.'],
      khoiDong: { hoi: 'Đưa nam châm lại gần chiếc đinh sắt và chiếc thìa nhôm. Vật nào bị hút?', goiY: 'Đinh sắt bị hút; thìa nhôm không bị hút.' },
      trongTam: [
        'Nam châm có hai cực: cực <b>Bắc (N)</b> và cực <b>Nam (S)</b>. Các cực <b>cùng tên đẩy nhau</b>, <b>khác tên hút nhau</b>.',
        'Nam châm hút các vật làm bằng <b>sắt, thép, nickel, cobalt</b>; không hút nhôm, đồng, nhựa, gỗ.',
        'Xung quanh nam châm có <b>từ trường</b>; biểu diễn bằng <b>đường sức từ</b> (đi ra ở cực Bắc, đi vào ở cực Nam). <b>Trái Đất có từ trường</b>; kim la bàn định hướng Bắc – Nam.',
        '<b>Nam châm điện</b>: ống dây có dòng điện chạy qua, thường quấn quanh lõi sắt. Tăng số vòng dây hoặc tăng dòng điện → nam châm điện mạnh hơn; ngắt điện → mất từ tính.'
      ],
      viDu: { de: 'Đưa cực N của nam châm A lại gần cực N của nam châm B. Hiện tượng?', loiGiai: 'Cùng tên → <b>đẩy nhau</b>.' },
      nguon: N7K('Chương VI "Từ", Bài 18 "Nam châm" (trang 86), Bài 19 "Từ trường" (trang 90), Bài 20 "Chế tạo nam châm điện đơn giản" (trang 96)'),
      hoiDap: [{ tu: ['hut', 'day', 'cuc'], tl: 'Cùng tên đẩy, khác tên hút.' }, { tu: ['la ban'], tl: 'Kim la bàn là nam châm nhỏ, chỉ hướng Bắc – Nam do từ trường Trái Đất.' }, { tu: ['nam cham dien'], tl: 'Tăng số vòng dây, tăng dòng điện, dùng lõi sắt → mạnh hơn.' }]
    },
    cauHoi: [
      { id: 'VL7E-01', muc: 'co-ban', liDoMuc: 'Áp dụng quy tắc tương tác giữa các cực.', loai: 'chon1', de: 'Đưa cực <b>Nam (S)</b> của nam châm thứ nhất lại gần cực <b>Bắc (N)</b> của nam châm thứ hai. Hiện tượng gì xảy ra?', phuongAn: [{ t: 'Hai nam châm hút nhau', dung: true }, { t: 'Hai nam châm đẩy nhau', phanHoi: 'Khác tên → hút.' }, { t: 'Không có hiện tượng gì', phanHoi: 'Có lực từ.' }, { t: 'Hai nam châm mất từ tính', phanHoi: 'Không.' }], goiY: ['Khác tên.'], viSaoDung: 'Khác tên hút nhau.', loiGiai: '<b>Hút nhau</b>.', giangLai: '"Khác hút, giống đẩy".', tienBo: 'Em đã áp dụng quy tắc.', nguon: N7K('Bài 18 "Nam châm", trang 86–89'), kiemTra: K6(),
        tuongTu: { id: 'VL7E-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Hai cực <b>Bắc</b> của hai nam châm đặt gần nhau thì:', phuongAn: [{ t: 'Đẩy nhau', dung: true }, { t: 'Hút nhau', phanHoi: 'Cùng tên.' }, { t: 'Không tương tác', phanHoi: 'Có.' }, { t: 'Dính chặt', phanHoi: 'Không.' }], goiY: ['Cùng tên.'], viSaoDung: 'Đẩy.', loiGiai: '<b>Đẩy nhau</b>.', giangLai: 'Giống đẩy.', nguon: N7K('Bài 18, trang 86–89'), kiemTra: K6() } },
      { id: 'VL7E-02', muc: 'co-ban', liDoMuc: 'Nhận biết vật liệu từ.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các vật bị nam châm hút.', phuongAn: [{ t: 'Chiếc đinh sắt', dung: true }, { t: 'Chiếc kéo bằng thép', dung: true }, { t: 'Lon nhôm', phanHoi: 'Nhôm không bị hút.' }, { t: 'Dây đồng', phanHoi: 'Đồng không bị hút.' }, { t: 'Đồng xu có lõi nickel', dung: true }], goiY: ['Sắt, thép, nickel, cobalt.'], viSaoDung: 'Đinh sắt, kéo thép, xu nickel.', loiGiai: 'Ý 1, 2, 5.', giangLai: 'Không phải kim loại nào cũng bị hút: nhôm, đồng thì không.', tienBo: 'Em đã nhận biết vật liệu từ.', nguon: N7K('Bài 18, trang 86–89'), kiemTra: K6(),
        tuongTu: { id: 'VL7E-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các vật <b>không</b> bị nam châm hút.', phuongAn: [{ t: 'Thước nhựa', dung: true }, { t: 'Bút chì gỗ', dung: true }, { t: 'Ghim giấy bằng thép', phanHoi: 'Bị hút.' }, { t: 'Chìa khoá đồng', dung: true }], goiY: ['Không sắt, thép.'], viSaoDung: 'Nhựa, gỗ, đồng.', loiGiai: 'Ý 1, 2, 4.', giangLai: 'Không phải mọi kim loại.', nguon: N7K('Bài 18, trang 86–89'), kiemTra: K6() } },
      { id: 'VL7E-03', muc: 'van-dung', liDoMuc: 'Dùng la bàn và từ trường Trái Đất.', loai: 'chon1', de: 'Khi để la bàn nằm yên, đầu kim mang cực <b>Bắc</b> chỉ về hướng nào của Trái Đất?', phuongAn: [{ t: 'Hướng Bắc (địa lí)', dung: true }, { t: 'Hướng Nam', phanHoi: 'Đầu kia của kim chỉ hướng Nam.' }, { t: 'Hướng Đông', phanHoi: 'Không.' }, { t: 'Hướng bất kì', phanHoi: 'Kim luôn định hướng Bắc – Nam.' }], goiY: ['Tên gọi cực "Bắc".'], viSaoDung: 'Kim la bàn chỉ Bắc – Nam do từ trường Trái Đất.', loiGiai: '<b>Hướng Bắc</b>.', giangLai: 'Cực Bắc của kim được đặt tên theo hướng nó chỉ: phía Bắc địa lí.', tienBo: 'Em đã biết dùng la bàn.', nguon: N7K('Bài 19 "Từ trường", trang 90–95'), kiemTra: K6(),
        tuongTu: { id: 'VL7E-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Đường sức từ bên ngoài nam châm có chiều:', phuongAn: [{ t: 'Đi ra ở cực Bắc, đi vào ở cực Nam', dung: true }, { t: 'Đi ra ở cực Nam, đi vào ở cực Bắc', phanHoi: 'Ngược.' }, { t: 'Không có chiều', phanHoi: 'Có chiều.' }, { t: 'Đi vòng quanh giữa thanh', phanHoi: 'Không.' }], goiY: ['Bắc ra, Nam vào.'], viSaoDung: 'Bắc ra, Nam vào.', loiGiai: '<b>Ra Bắc, vào Nam</b>.', giangLai: '"Bắc ra – Nam vào".', nguon: N7K('Bài 19, trang 90–95'), kiemTra: K6() } },
      { id: 'VL7E-04', muc: 'van-dung', liDoMuc: 'Chọn cách làm nam châm điện mạnh hơn.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các cách làm nam châm điện <b>hút mạnh hơn</b>.', phuongAn: [{ t: 'Tăng số vòng dây quấn.', dung: true }, { t: 'Tăng dòng điện chạy qua ống dây (dùng thêm pin).', dung: true }, { t: 'Thay lõi sắt bằng lõi nhựa.', phanHoi: 'Lõi sắt làm từ tính mạnh hơn; nhựa không có tác dụng.' }, { t: 'Ngắt dòng điện.', phanHoi: 'Ngắt điện → mất từ tính.' }], goiY: ['Số vòng, dòng điện.'], viSaoDung: 'Ý 1, 2.', loiGiai: 'Ý 1 và 2.', giangLai: '"Nhiều vòng – nhiều điện – lõi sắt" → mạnh.', tienBo: 'Em đã nắm cách tăng lực từ.', nguon: N7K('Bài 20 "Chế tạo nam châm điện đơn giản", trang 96–98'), kiemTra: K6(),
        tuongTu: { id: 'VL7E-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Ưu điểm của nam châm điện so với nam châm vĩnh cửu là:', phuongAn: [{ t: 'Có thể bật, tắt từ tính bằng cách đóng, ngắt điện', dung: true }, { t: 'Không cần điện', phanHoi: 'Cần điện.' }, { t: 'Hút được nhôm', phanHoi: 'Không.' }, { t: 'Không có cực', phanHoi: 'Có cực.' }], goiY: ['Công tắc.'], viSaoDung: 'Bật tắt được.', loiGiai: '<b>Bật, tắt được từ tính</b>.', giangLai: 'Cần cẩu nam châm điện ở bãi phế liệu.', nguon: N7K('Bài 20, trang 96–98'), kiemTra: K6() } },
      { id: 'VL7E-05', muc: 'nang-cao', liDoMuc: 'Suy luận tên cực từ chuỗi tương tác.', loai: 'chon1', de: 'Có ba thanh nam châm A, B, C. Đầu X của A <b>hút</b> đầu Y của B. Đầu Y của B <b>đẩy</b> đầu Z của C. Biết Z là cực Bắc. Đầu X là cực gì?', phuongAn: [{ t: 'Cực Nam', dung: true }, { t: 'Cực Bắc', phanHoi: 'Y đẩy Z (Bắc) → Y là Bắc; X hút Y → X khác tên với Y.' }, { t: 'Không xác định được', phanHoi: 'Suy được từng bước.' }, { t: 'Không phải cực từ', phanHoi: 'Có hút đẩy → là cực từ.' }], goiY: ['Suy Y trước, rồi X.'], viSaoDung: 'Y = Bắc → X = Nam.', loiGiai: 'Y đẩy Z (Bắc) → Y là Bắc. X hút Y → X là <b>Nam</b>.', giangLai: 'Đi ngược chuỗi từ cực đã biết: "đẩy" → giữ nguyên tên, "hút" → đổi tên.', tienBo: 'Em đã suy luận nhiều bước.', nguon: N7K('Bài 18, trang 86–89'), kiemTra: K6(),
        tuongTu: { id: 'VL7E-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Đầu P của nam châm M <b>đẩy</b> đầu Q của nam châm K. Đầu Q <b>hút</b> đầu R là cực Nam. P là cực gì?', phuongAn: [{ t: 'Cực Bắc', dung: true }, { t: 'Cực Nam', phanHoi: 'Q hút R (Nam) → Q Bắc; P đẩy Q → P Bắc.' }, { t: 'Không xác định', phanHoi: 'Được.' }, { t: 'Cả hai', phanHoi: 'Không.' }], goiY: ['Q trước.'], viSaoDung: 'Bắc.', loiGiai: '<b>Cực Bắc</b>.', giangLai: 'Đẩy giữ, hút đổi.', nguon: N7K('Bài 18, trang 86–89'), kiemTra: K6() } },
      { id: 'VL7E-06', muc: 'nang-cao', liDoMuc: 'Đề xuất cách tách hỗn hợp bằng từ tính; câu mở.', loai: 'mo', de: 'Có hỗn hợp gồm mạt sắt và mùn cưa (bột gỗ). Em hãy đề xuất cách tách riêng chúng và giải thích. Viết 2–4 câu.',
        tieuChi: [{ t: 'Nêu dùng nam châm.', tuDong: { tuKhoa: ['nam cham'] } }, { t: 'Nêu mạt sắt bị hút còn mùn cưa không bị hút.', tuDong: { tuKhoa: ['hut', 'mat sat'] } }, { t: 'Nêu giải thích: sắt là vật liệu từ / gỗ không có từ tính.', tuDong: { tuKhoa: ['tu tinh', 'vat lieu tu', 'mun cua', 'khong bi hut'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }],
        baiThamKhao: 'Em dùng nam châm đưa qua lại trên hỗn hợp. Mạt sắt bị nam châm hút lên, còn mùn cưa ở lại. Vì sắt là vật liệu từ, còn gỗ không bị nam châm hút.', giupViet: 'Dùng … → mạt sắt … → vì …', goiY: ['Vật liệu nào bị hút?'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Tách dựa vào tính chất khác nhau: ở đây là từ tính.', tienBo: 'Em đã vận dụng từ tính.', nguon: N7K('Bài 18, trang 86–89'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'VL7E-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Vì sao ở bãi phế liệu người ta dùng cần cẩu nam châm điện chứ không dùng nam châm vĩnh cửu? Viết 2–4 câu.', tieuChi: [{ t: 'Nêu nam châm điện hút được sắt thép.', tuDong: { tuKhoa: ['hut', 'sat', 'thep'] } }, { t: 'Nêu ngắt điện thì mất từ tính, thả vật ra.', tuDong: { tuKhoa: ['ngat', 'tat', 'mat tu tinh', 'tha'] } }, { t: 'Kết luận tiện lợi khi bốc dỡ.', tuDong: { tuKhoa: ['tien', 'de dang', 'boc'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Nam châm điện hút được các vật bằng sắt thép khi có dòng điện. Khi ngắt điện, nó mất từ tính nên thả vật ra đúng chỗ. Nam châm vĩnh cửu không tắt được nên rất khó thả vật, vì vậy nam châm điện tiện lợi hơn khi bốc dỡ.', giupViet: 'Có điện → hút; ngắt điện → thả.', goiY: ['Bật tắt.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Bật tắt được.', nguon: N7K('Bài 20, trang 96–98'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const sh7HoHap = {
    id: 'sh7-ho-hap', lop: 7, mon: 'khtn', phanMon: 'Sinh học', ten: 'Hô hấp tế bào và trao đổi khí',
    sgk: 'SGK KHTN 7 — Bài 25–28, trang 111–121', yccdGhiChu: YCCD7,
    kienThucTruoc: ['Quang hợp (Bài 22)'],
    yeuCauCanDat: ['Nêu khái niệm, nơi diễn ra và phương trình chữ của hô hấp tế bào.', 'Nêu các yếu tố ảnh hưởng đến hô hấp; vận dụng bảo quản nông sản.', 'Mô tả trao đổi khí ở thực vật (khí khổng) và ở động vật, người.'],
    bai: {
      mucTieu: ['viết phương trình chữ hô hấp tế bào;', 'so sánh hô hấp và quang hợp;', 'chọn cách bảo quản nông sản;', 'giải thích vai trò của khí khổng.'],
      khoiDong: { hoi: 'Vì sao khi chạy nhanh, em thở gấp hơn?', goiY: 'Cơ thể cần nhiều năng lượng → tế bào hô hấp mạnh → cần nhiều oxygen, thải nhiều carbon dioxide.' },
      trongTam: [
        '<b>Hô hấp tế bào</b>: quá trình tế bào phân giải chất hữu cơ (glucose) tạo năng lượng cho hoạt động sống, diễn ra chủ yếu ở <b>ti thể</b>.',
        'Phương trình chữ: <b>Glucose + Oxygen → Carbon dioxide + Nước + Năng lượng</b> (ATP và nhiệt).',
        'Yếu tố ảnh hưởng: nhiệt độ, hàm lượng nước, nồng độ oxygen, carbon dioxide. Bảo quản nông sản: làm lạnh, phơi khô, giảm oxygen / tăng carbon dioxide → <b>giảm hô hấp</b>.',
        '<b>Trao đổi khí</b>: thực vật trao đổi khí chủ yếu qua <b>khí khổng</b> ở lá; người và nhiều động vật trao đổi khí ở <b>phổi</b>, cá ở <b>mang</b>.'
      ],
      viDu: { de: 'Hô hấp tế bào và quang hợp có nguyên liệu, sản phẩm thế nào?', loiGiai: 'Ngược nhau: sản phẩm của quang hợp (glucose, oxygen) là nguyên liệu của hô hấp và ngược lại.' },
      nguon: N7K('Bài 25 "Hô hấp tế bào" (trang 111), Bài 26 "Một số yếu tố ảnh hưởng đến hô hấp tế bào" (trang 113), Bài 27 "Thực hành: Hô hấp ở thực vật" (trang 116), Bài 28 "Trao đổi khí ở sinh vật" (trang 118)'),
      hoiDap: [{ tu: ['phuong trinh', 'ho hap'], tl: 'Glucose + Oxygen → Carbon dioxide + Nước + Năng lượng.' }, { tu: ['bao quan'], tl: 'Giảm hô hấp: lạnh, khô, ít oxygen.' }, { tu: ['khi khong'], tl: 'Khí khổng là nơi trao đổi khí và thoát hơi nước ở lá.' }]
    },
    cauHoi: [
      { id: 'SH7B-01', muc: 'co-ban', liDoMuc: 'Nhớ sản phẩm của hô hấp tế bào.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các sản phẩm của hô hấp tế bào.', phuongAn: [{ t: 'Carbon dioxide', dung: true }, { t: 'Nước', dung: true }, { t: 'Năng lượng', dung: true }, { t: 'Oxygen', phanHoi: 'Oxygen là nguyên liệu.' }, { t: 'Glucose', phanHoi: 'Glucose là nguyên liệu.' }], goiY: ['Bên phải mũi tên.'], viSaoDung: 'CO₂, nước, năng lượng.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Hô hấp "đốt" glucose bằng oxygen → khí CO₂, nước và năng lượng.', tienBo: 'Em đã nhớ phương trình.', nguon: N7K('Bài 25 "Hô hấp tế bào", trang 111–112'), kiemTra: K6(),
        tuongTu: { id: 'SH7B-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Hô hấp tế bào diễn ra chủ yếu ở bào quan nào?', phuongAn: [{ t: 'Ti thể', dung: true }, { t: 'Lục lạp', phanHoi: 'Nơi quang hợp.' }, { t: 'Nhân', phanHoi: 'Điều khiển.' }, { t: 'Màng tế bào', phanHoi: 'Không.' }], goiY: ['"Nhà máy năng lượng".'], viSaoDung: 'Ti thể.', loiGiai: '<b>Ti thể</b>.', giangLai: 'Lục lạp – quang hợp; ti thể – hô hấp.', nguon: N7K('Bài 25, trang 111–112'), kiemTra: K6() } },
      { id: 'SH7B-02', muc: 'co-ban', liDoMuc: 'Nhận biết cơ quan trao đổi khí.', loai: 'chon1', de: 'Ở thực vật, khí carbon dioxide và oxygen đi vào, đi ra lá chủ yếu qua:', phuongAn: [{ t: 'Khí khổng', dung: true }, { t: 'Gân lá', phanHoi: 'Gân lá vận chuyển nước, chất.' }, { t: 'Rễ', phanHoi: 'Rễ hút nước, khoáng.' }, { t: 'Hoa', phanHoi: 'Cơ quan sinh sản.' }], goiY: ['Lỗ nhỏ ở mặt lá.'], viSaoDung: 'Khí khổng.', loiGiai: '<b>Khí khổng</b>.', giangLai: 'Khí khổng như những "cửa sổ" nhỏ trên lá.', tienBo: 'Em đã nhớ vai trò khí khổng.', nguon: N7K('Bài 28 "Trao đổi khí ở sinh vật", trang 118–121'), kiemTra: K6(),
        tuongTu: { id: 'SH7B-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Cá trao đổi khí với môi trường nước bằng:', phuongAn: [{ t: 'Mang', dung: true }, { t: 'Phổi', phanHoi: 'Người, thú.' }, { t: 'Da', phanHoi: 'Chủ yếu ở giun, ếch.' }, { t: 'Vây', phanHoi: 'Bơi.' }], goiY: ['Hai bên đầu cá.'], viSaoDung: 'Mang.', loiGiai: '<b>Mang</b>.', giangLai: 'Cá – mang; người – phổi.', nguon: N7K('Bài 28, trang 118–121'), kiemTra: K6() } },
      { id: 'SH7B-03', muc: 'van-dung', liDoMuc: 'Vận dụng yếu tố ảnh hưởng để bảo quản.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các cách bảo quản nông sản dựa trên <b>giảm hô hấp</b>.', phuongAn: [{ t: 'Để rau quả trong ngăn mát tủ lạnh.', dung: true }, { t: 'Phơi khô hạt thóc trước khi cất.', dung: true }, { t: 'Bảo quản trong túi kín bơm khí carbon dioxide.', dung: true }, { t: 'Phun nước ấm lên hạt giống đang cất trong kho.', phanHoi: 'Nước và nhiệt làm tăng hô hấp, hạt nhanh hỏng.' }], goiY: ['Lạnh, khô, ít oxygen.'], viSaoDung: 'Ý 1, 2, 3.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Hô hấp càng mạnh, chất hữu cơ càng bị tiêu hao → nông sản nhanh hỏng. Ba "chìa khoá": lạnh – khô – ít oxygen.', tienBo: 'Em đã vận dụng vào bảo quản.', nguon: N7K('Bài 26 "Một số yếu tố ảnh hưởng đến hô hấp tế bào", trang 113–115'), kiemTra: K6(),
        tuongTu: { id: 'SH7B-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Vì sao hạt thóc ẩm để trong kho dễ bị nóng lên và hỏng?', phuongAn: [{ t: 'Hạt ẩm hô hấp mạnh, toả nhiệt và tiêu hao chất hữu cơ.', dung: true }, { t: 'Hạt ẩm quang hợp mạnh.', phanHoi: 'Trong kho tối, không quang hợp.' }, { t: 'Nước trong hạt bốc cháy.', phanHoi: 'Không.' }, { t: 'Kho có nhiều oxygen tự sinh ra.', phanHoi: 'Không.' }], goiY: ['Nước tăng hô hấp.'], viSaoDung: 'Hô hấp mạnh.', loiGiai: '<b>Hô hấp mạnh, toả nhiệt</b>.', giangLai: 'Lạnh – khô – ít oxygen.', nguon: N7K('Bài 26, trang 113–115'), kiemTra: K6() } },
      { id: 'SH7B-04', muc: 'van-dung', liDoMuc: 'So sánh quang hợp và hô hấp.', loai: 'chon1', de: 'Phát biểu nào <b>đúng</b> về quan hệ giữa quang hợp và hô hấp tế bào?', phuongAn: [{ t: 'Sản phẩm của quang hợp là nguyên liệu của hô hấp và ngược lại.', dung: true }, { t: 'Hai quá trình có nguyên liệu giống hệt nhau.', phanHoi: 'Nguyên liệu khác nhau (ngược nhau).' }, { t: 'Hô hấp chỉ diễn ra ban đêm.', phanHoi: 'Hô hấp diễn ra cả ngày lẫn đêm.' }, { t: 'Quang hợp giải phóng năng lượng, hô hấp tích luỹ năng lượng.', phanHoi: 'Ngược lại.' }], goiY: ['Đặt hai phương trình cạnh nhau.'], viSaoDung: 'Hai quá trình ngược chiều.', loiGiai: '<b>Sản phẩm của quá trình này là nguyên liệu của quá trình kia</b>.', giangLai: 'Quang hợp: CO₂ + nước → glucose + O₂ (tích luỹ năng lượng). Hô hấp: ngược lại (giải phóng năng lượng).', tienBo: 'Em đã so sánh hai quá trình.', nguon: N7K('Bài 22 (trang 101) và Bài 25 (trang 111)'), kiemTra: K6(),
        tuongTu: { id: 'SH7B-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Năng lượng giải phóng từ hô hấp tế bào được dùng để:', phuongAn: [{ t: 'Cung cấp cho các hoạt động sống và giữ ấm cơ thể', dung: true }, { t: 'Tạo ra ánh sáng Mặt Trời', phanHoi: 'Không.' }, { t: 'Chỉ để thải ra ngoài', phanHoi: 'Không.' }, { t: 'Tạo khí oxygen', phanHoi: 'Không.' }], goiY: ['Vận động, lớn lên…'], viSaoDung: 'Hoạt động sống, nhiệt.', loiGiai: '<b>Hoạt động sống và giữ ấm</b>.', giangLai: 'Năng lượng = "xăng" cho cơ thể.', nguon: N7K('Bài 25, trang 111–112'), kiemTra: K6() } },
      { id: 'SH7B-05', muc: 'nang-cao', liDoMuc: 'Phân tích kết quả thí nghiệm hô hấp ở hạt.', loai: 'chonNhieu', de: 'Thí nghiệm: hai bình kín, bình A chứa hạt đậu đang nảy mầm, bình B chứa hạt đậu đã luộc chín. Sau 1 ngày, đưa que đóm đang cháy vào: ở bình A que đóm tắt ngay, ở bình B que đóm vẫn cháy một lúc. <b>Chọn TẤT CẢ</b> các kết luận đúng.', phuongAn: [{ t: 'Hạt nảy mầm đã hô hấp, dùng oxygen trong bình A.', dung: true }, { t: 'Bình A có nhiều carbon dioxide hơn bình B.', dung: true }, { t: 'Hạt đã luộc chín không còn hô hấp.', dung: true }, { t: 'Hạt nảy mầm thải ra oxygen nên que đóm tắt.', phanHoi: 'Oxygen duy trì sự cháy; que đóm tắt vì thiếu oxygen.' }], goiY: ['Que đóm cần oxygen để cháy.'], viSaoDung: 'Ý 1, 2, 3.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Bình B là "đối chứng": hạt chết không hô hấp → oxygen còn → que đóm vẫn cháy.', tienBo: 'Em đã phân tích thí nghiệm có đối chứng.', nguon: Object.assign(N7K('Bài 27 "Thực hành: Hô hấp ở thực vật", trang 116–117'), { soLieu: 'Kết quả thí nghiệm mô tả ở dạng giả định để học sinh phân tích.' }), kiemTra: K6(),
        tuongTu: { id: 'SH7B-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Trong thí nghiệm ở câu trước, vì sao cần bình B (hạt đã luộc chín)?', phuongAn: [{ t: 'Để làm đối chứng, so sánh với hạt sống.', dung: true }, { t: 'Để hạt nảy mầm nhanh hơn.', phanHoi: 'Không.' }, { t: 'Để tạo thêm oxygen.', phanHoi: 'Không.' }, { t: 'Không cần thiết.', phanHoi: 'Cần để kết luận chắc chắn.' }], goiY: ['So sánh.'], viSaoDung: 'Đối chứng.', loiGiai: '<b>Đối chứng</b>.', giangLai: 'Thí nghiệm cần so sánh.', nguon: N7K('Bài 27, trang 116–117'), kiemTra: K6() } },
      { id: 'SH7B-06', muc: 'nang-cao', liDoMuc: 'Giải thích hiện tượng đời sống bằng hô hấp; câu mở.', loai: 'mo', de: 'Vì sao không nên để nhiều cây xanh trong phòng ngủ đóng kín cửa vào ban đêm? Viết 2–4 câu.',
        tieuChi: [{ t: 'Nêu ban đêm cây không quang hợp (không có ánh sáng).', tuDong: { tuKhoa: ['khong quang hop', 'khong co anh sang', 'ban dem'] } }, { t: 'Nêu cây vẫn hô hấp, lấy oxygen, thải carbon dioxide.', tuDong: { tuKhoa: ['ho hap'] } }, { t: 'Kết luận: phòng kín thiếu oxygen, nhiều carbon dioxide.', tuDong: { tuKhoa: ['thieu oxygen', 'thieu oxi', 'carbon dioxide', 'co2', 'khi cacbonic'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }],
        baiThamKhao: 'Ban đêm không có ánh sáng nên cây không quang hợp. Nhưng cây vẫn hô hấp, lấy oxygen và thải ra carbon dioxide. Trong phòng đóng kín, không khí sẽ thiếu oxygen và có nhiều carbon dioxide, không tốt cho người ngủ.', giupViet: 'Ban đêm … → cây vẫn … → phòng kín …', goiY: ['Ban đêm cây làm gì?'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Cây hô hấp suốt ngày đêm; chỉ quang hợp khi có ánh sáng.', tienBo: 'Em đã giải thích bằng hô hấp.', nguon: N7K('Bài 25 (trang 111) và Bài 28 (trang 118)'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'SH7B-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Vì sao khi tập thể dục, cơ thể nóng lên và đổ mồ hôi? Viết 2–4 câu.', tieuChi: [{ t: 'Nêu cơ hoạt động mạnh, hô hấp tế bào tăng.', tuDong: { tuKhoa: ['ho hap'] } }, { t: 'Nêu hô hấp giải phóng năng lượng, một phần là nhiệt.', tuDong: { tuKhoa: ['nhiet', 'nang luong'] } }, { t: 'Nêu đổ mồ hôi giúp toả nhiệt / làm mát.', tuDong: { tuKhoa: ['mo hoi', 'lam mat', 'toa nhiet'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Khi tập thể dục, các cơ hoạt động mạnh nên hô hấp tế bào tăng. Hô hấp giải phóng nhiều năng lượng, một phần ở dạng nhiệt làm cơ thể nóng lên. Cơ thể đổ mồ hôi để toả bớt nhiệt, làm mát.', giupViet: 'Cơ hoạt động → hô hấp tăng → nhiệt → mồ hôi.', goiY: ['Nhiệt từ đâu?'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Năng lượng gồm ATP và nhiệt.', nguon: N7K('Bài 25, trang 111–112'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const sh7Nuoc = {
    id: 'sh7-nuoc-dinh-duong', lop: 7, mon: 'khtn', phanMon: 'Sinh học', ten: 'Trao đổi nước và chất dinh dưỡng',
    sgk: 'SGK KHTN 7 — Bài 29–32, trang 122–137', yccdGhiChu: YCCD7,
    kienThucTruoc: ['Hô hấp, trao đổi khí (Bài 25–28)'],
    yeuCauCanDat: ['Nêu vai trò của nước và chất dinh dưỡng đối với sinh vật.', 'Mô tả sự hút nước, vận chuyển nước, chất khoáng và thoát hơi nước ở thực vật.', 'Nêu con đường trao đổi nước, chất dinh dưỡng ở động vật; vận dụng vào chế độ ăn uống hợp lí.'],
    bai: {
      mucTieu: ['nêu vai trò của nước;', 'mô tả đường đi của nước trong cây;', 'giải thích thoát hơi nước;', 'tính lượng nước cần uống.'],
      khoiDong: { hoi: 'Cắm cành hoa trắng vào cốc nước pha mực đỏ, vài giờ sau cánh hoa thế nào?', goiY: 'Cánh hoa nhuốm đỏ — nước đã đi từ thân lên hoa.' },
      trongTam: [
        '<b>Nước</b> là thành phần chủ yếu của tế bào, là dung môi hoà tan và vận chuyển chất, tham gia điều hoà nhiệt độ cơ thể. <b>Chất dinh dưỡng</b> cung cấp nguyên liệu và năng lượng.',
        'Ở thực vật: <b>rễ</b> (lông hút) hút nước và muối khoáng → <b>mạch gỗ</b> vận chuyển lên thân, lá. <b>Mạch rây</b> vận chuyển chất hữu cơ từ lá đi khắp cây.',
        '<b>Thoát hơi nước</b> qua khí khổng ở lá: tạo lực kéo nước từ rễ lên, làm mát lá.',
        'Ở động vật và người: nước, chất dinh dưỡng được lấy qua ống tiêu hoá, hấp thụ vào máu, vận chuyển đến các tế bào; chất thải bài tiết ra ngoài. Cần uống đủ nước, ăn đủ chất.'
      ],
      viDu: { de: 'Vì sao trời nắng to, lá cây dễ héo?', loiGiai: 'Thoát hơi nước mạnh mà rễ hút không kịp → lá thiếu nước, héo.' },
      nguon: N7K('Bài 29 "Vai trò của nước và chất dinh dưỡng đối với sinh vật" (trang 122), Bài 30 (trang 127), Bài 31 (trang 131), Bài 32 "Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước" (trang 136)'),
      hoiDap: [{ tu: ['mach go', 'mach ray'], tl: 'Mạch gỗ: nước, khoáng đi lên. Mạch rây: chất hữu cơ từ lá đi khắp cây.' }, { tu: ['thoat hoi nuoc'], tl: 'Qua khí khổng; tạo lực kéo nước, làm mát lá.' }, { tu: ['long hut', 're'], tl: 'Lông hút ở rễ hút nước và muối khoáng.' }]
    },
    cauHoi: [
      { id: 'SH7C-01', muc: 'co-ban', liDoMuc: 'Nhớ con đường vận chuyển nước.', loai: 'chon1', de: 'Nước và muối khoáng được vận chuyển từ rễ lên lá qua:', phuongAn: [{ t: 'Mạch gỗ', dung: true }, { t: 'Mạch rây', phanHoi: 'Mạch rây vận chuyển chất hữu cơ.' }, { t: 'Khí khổng', phanHoi: 'Nơi thoát hơi nước.' }, { t: 'Lục lạp', phanHoi: 'Quang hợp.' }], goiY: ['Đi lên.'], viSaoDung: 'Mạch gỗ.', loiGiai: '<b>Mạch gỗ</b>.', giangLai: '"Gỗ đưa nước lên, rây đưa đường xuống".', tienBo: 'Em đã nhớ vai trò mạch gỗ.', nguon: N7K('Bài 30 "Trao đổi nước và chất dinh dưỡng ở thực vật", trang 127–130'), kiemTra: K6(),
        tuongTu: { id: 'SH7C-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Bộ phận nào của rễ hút nước và muối khoáng?', phuongAn: [{ t: 'Lông hút', dung: true }, { t: 'Chóp rễ', phanHoi: 'Che chở đầu rễ.' }, { t: 'Mạch rây', phanHoi: 'Vận chuyển chất hữu cơ.' }, { t: 'Lá', phanHoi: 'Không phải rễ.' }], goiY: ['Rất nhiều sợi nhỏ.'], viSaoDung: 'Lông hút.', loiGiai: '<b>Lông hút</b>.', giangLai: 'Lông hút tăng diện tích hút nước.', nguon: N7K('Bài 30, trang 127–130'), kiemTra: K6() } },
      { id: 'SH7C-02', muc: 'co-ban', liDoMuc: 'Nhận biết vai trò của nước.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các vai trò của nước đối với sinh vật.', phuongAn: [{ t: 'Là thành phần chủ yếu của tế bào.', dung: true }, { t: 'Là dung môi hoà tan nhiều chất.', dung: true }, { t: 'Giúp điều hoà nhiệt độ cơ thể.', dung: true }, { t: 'Cung cấp năng lượng chính cho cơ thể.', phanHoi: 'Năng lượng chủ yếu từ chất dinh dưỡng (đường, béo…), không phải nước.' }], goiY: ['Nước không có năng lượng.'], viSaoDung: 'Ý 1, 2, 3.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Nước: thành phần – dung môi – vận chuyển – điều hoà nhiệt.', tienBo: 'Em đã nêu vai trò của nước.', nguon: N7K('Bài 29, trang 122–126'), kiemTra: K6(),
        tuongTu: { id: 'SH7C-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Lá cây thoát hơi nước chủ yếu qua:', phuongAn: [{ t: 'Khí khổng', dung: true }, { t: 'Gân lá', phanHoi: 'Vận chuyển.' }, { t: 'Cuống lá', phanHoi: 'Không.' }, { t: 'Lông hút', phanHoi: 'Ở rễ.' }], goiY: ['Lỗ nhỏ.'], viSaoDung: 'Khí khổng.', loiGiai: '<b>Khí khổng</b>.', giangLai: 'Cửa sổ nhỏ.', nguon: N7K('Bài 30, trang 127–130'), kiemTra: K6() } },
      { id: 'SH7C-03', muc: 'van-dung', liDoMuc: 'Tính lượng nước cần theo khối lượng cơ thể.', loai: 'so', de: 'Giả sử mỗi ngày một học sinh cần khoảng 40 mL nước cho mỗi kilôgam cơ thể. Bạn Minh nặng 35 kg cần khoảng bao nhiêu <b>lít</b> nước mỗi ngày?', dapAn: 1.4, soLieu: GIA_DINH,
        loi: [{ gt: 1400, nhan: 'Chưa đổi đơn vị', phanHoi: '1400 mL. Đổi ra lít: chia 1000.' }, { gt: 14, nhan: 'Lỗi đổi đơn vị', phanHoi: '1 L = 1000 mL, không phải 100 mL.' }],
        buoc: { hoi: 'Tính bằng mL: 40 · 35 = ?', dapAn: 1400, dung: 'Đúng. Đổi ra lít.', sai: '40 · 35.' },
        goiY: ['40 · 35 mL rồi đổi ra L.'], viSaoDung: '1400 mL = 1,4 L.', loiGiai: '40 · 35 = 1400 mL = <b>1,4 L</b>.', giangLai: '1 lít = 1000 mL; chia 1000 = dời dấu phẩy sang trái 3 chữ số.', tienBo: 'Em đã tính và đổi đơn vị.', nguon: N7K('Bài 31 "Trao đổi nước và chất dinh dưỡng ở động vật", trang 131–135'), kiemTra: K6('Định mức 40 mL/kg là số liệu giả định để luyện tính toán, không phải lời khuyên y tế.'),
        tuongTu: { id: 'SH7C-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Theo định mức giả định 40 mL/kg mỗi ngày, bạn Lan nặng 30 kg cần khoảng bao nhiêu lít nước?', dapAn: 1.2, soLieu: GIA_DINH, loi: [{ gt: 1200, nhan: 'Chưa đổi đơn vị', phanHoi: 'Chia 1000.' }], buoc: { hoi: '40 · 30 = ? mL', dapAn: 1200, dung: 'Đúng.', sai: '40 · 30.' }, goiY: ['1200 mL.'], viSaoDung: '1,2 L.', loiGiai: '<b>1,2 L</b>.', giangLai: 'Đổi mL → L.', nguon: N7K('Bài 31, trang 131–135'), kiemTra: K6() } },
      { id: 'SH7C-04', muc: 'van-dung', liDoMuc: 'Giải thích thí nghiệm vận chuyển nước.', loai: 'chon1', de: 'Cắm cành hoa cúc trắng vào cốc nước pha màu xanh. Sau vài giờ, cánh hoa có màu xanh. Thí nghiệm chứng minh điều gì?', phuongAn: [{ t: 'Thân vận chuyển nước từ dưới lên hoa, lá.', dung: true }, { t: 'Hoa tự tạo ra màu xanh.', phanHoi: 'Màu xanh từ nước pha màu.' }, { t: 'Lá thoát hơi nước.', phanHoi: 'Thí nghiệm này chứng minh sự vận chuyển nước qua thân.' }, { t: 'Rễ hút nước.', phanHoi: 'Cành không có rễ.' }], goiY: ['Nước màu đi đâu?'], viSaoDung: 'Nước đi theo thân lên hoa.', loiGiai: '<b>Thân vận chuyển nước lên trên</b>.', giangLai: 'Cắt ngang thân sẽ thấy các chấm màu — đó là mạch gỗ.', tienBo: 'Em đã giải thích thí nghiệm.', nguon: N7K('Bài 32 "Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước", trang 136–137'), kiemTra: K6(),
        tuongTu: { id: 'SH7C-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Trùm túi nilon trong suốt lên một cành lá còn trên cây. Sau vài giờ thấy hơi nước đọng trong túi. Điều này chứng minh:', phuongAn: [{ t: 'Lá thoát hơi nước.', dung: true }, { t: 'Lá hút nước từ không khí.', phanHoi: 'Ngược lại.' }, { t: 'Túi tự sinh nước.', phanHoi: 'Không.' }, { t: 'Lá hô hấp tạo oxygen.', phanHoi: 'Không.' }], goiY: ['Nước từ đâu?'], viSaoDung: 'Thoát hơi nước.', loiGiai: '<b>Lá thoát hơi nước</b>.', giangLai: 'Hơi nước ngưng tụ trên túi.', nguon: N7K('Bài 32, trang 136–137'), kiemTra: K6() } },
      { id: 'SH7C-05', muc: 'nang-cao', liDoMuc: 'Vận dụng nhiều kiến thức vào chăm sóc cây.', loai: 'chonNhieu', de: 'Khi chuyển cây con đi trồng chỗ khác, người ta thường làm các việc sau. <b>Chọn TẤT CẢ</b> các việc giúp cây <b>ít bị mất nước, mau sống</b>.', phuongAn: [{ t: 'Cắt bớt một số lá.', dung: true }, { t: 'Trồng vào buổi chiều mát.', dung: true }, { t: 'Tưới đủ nước sau khi trồng.', dung: true }, { t: 'Rửa sạch đất bám, giũ cho trụi rễ con.', phanHoi: 'Làm đứt lông hút, rễ hút nước kém.' }, { t: 'Trồng lúc nắng gắt buổi trưa.', phanHoi: 'Thoát hơi nước mạnh, cây dễ héo.' }], goiY: ['Giảm thoát hơi nước, giữ rễ hút nước.'], viSaoDung: 'Ý 1, 2, 3.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Cây mới trồng rễ còn yếu → giảm "chi" (thoát hơi nước) và tăng "thu" (tưới nước, giữ lông hút).', tienBo: 'Em đã vận dụng vào trồng cây.', nguon: N7K('Bài 30, trang 127–130'), kiemTra: K6(),
        tuongTu: { id: 'SH7C-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các thói quen ăn uống <b>hợp lí</b>.', phuongAn: [{ t: 'Uống nước đều đặn trong ngày.', dung: true }, { t: 'Ăn đủ rau, quả.', dung: true }, { t: 'Thay nước lọc bằng nước ngọt có ga.', phanHoi: 'Nhiều đường, không tốt.' }, { t: 'Ăn đa dạng các nhóm thực phẩm.', dung: true }], goiY: ['Cân đối.'], viSaoDung: 'Ý 1, 2, 4.', loiGiai: 'Ý 1, 2, 4.', giangLai: 'Đủ nước, đa dạng.', nguon: N7K('Bài 31, trang 131–135'), kiemTra: K6() } },
      { id: 'SH7C-06', muc: 'nang-cao', liDoMuc: 'Giải thích vai trò thoát hơi nước; câu mở.', loai: 'mo', de: 'Vì sao ngày hè, đứng dưới bóng cây thấy mát hơn đứng dưới mái che bằng tôn? Dùng kiến thức về thoát hơi nước để giải thích. Viết 2–4 câu.',
        tieuChi: [{ t: 'Nêu lá cây thoát hơi nước.', tuDong: { tuKhoa: ['thoat hoi nuoc'] } }, { t: 'Nêu thoát hơi nước làm mát lá / không khí xung quanh.', tuDong: { tuKhoa: ['mat hon', 'lam mat', 'giam nhiet', 'lay nhiet'] } }, { t: 'Nêu mái tôn hấp thụ nhiệt, nóng lên.', tuDong: { tuKhoa: ['ton', 'nong'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }],
        baiThamKhao: 'Lá cây liên tục thoát hơi nước qua khí khổng. Quá trình thoát hơi nước lấy nhiệt nên làm lá và không khí xung quanh mát hơn. Còn mái tôn hấp thụ nhiều nhiệt của ánh nắng nên nóng lên, toả nhiệt xuống bên dưới.', giupViet: 'Lá … thoát hơi nước → làm mát … ; mái tôn …', goiY: ['Bay hơi lấy nhiệt (lớp 6).'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Giống mồ hôi bay hơi làm da mát.', tienBo: 'Em đã giải thích bằng thoát hơi nước.', nguon: N7K('Bài 30, trang 127–130'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'SH7C-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Vì sao cây trồng trong chậu bị héo nếu nhiều ngày không tưới nước? Viết 2–4 câu.', tieuChi: [{ t: 'Nêu lá vẫn thoát hơi nước.', tuDong: { tuKhoa: ['thoat hoi nuoc'] } }, { t: 'Nêu rễ không hút được nước vì đất khô.', tuDong: { tuKhoa: ['dat kho', 'khong hut'] } }, { t: 'Kết luận cây thiếu nước nên héo.', tuDong: { tuKhoa: ['thieu nuoc', 'heo'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Lá cây vẫn thoát hơi nước mỗi ngày. Khi không tưới, đất khô nên rễ không hút được nước bù vào. Cây thiếu nước nên bị héo.', giupViet: 'Lá mất nước → rễ không bù → héo.', goiY: ['Thu – chi nước.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Thu – chi.', nguon: N7K('Bài 30, trang 127–130'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const sh7CamUng = {
    id: 'sh7-cam-ung', lop: 7, mon: 'khtn', phanMon: 'Sinh học', ten: 'Cảm ứng ở sinh vật và tập tính',
    sgk: 'SGK KHTN 7 — Chương VIII, Bài 33–35, trang 138–147', yccdGhiChu: YCCD7,
    kienThucTruoc: ['Cơ thể sinh vật (lớp 6)'],
    yeuCauCanDat: ['Nêu khái niệm cảm ứng; lấy ví dụ ở thực vật và động vật.', 'Phân biệt tập tính bẩm sinh và tập tính học được.', 'Vận dụng hiểu biết về cảm ứng vào học tập, chăn nuôi, trồng trọt.'],
    bai: {
      mucTieu: ['nhận ra hiện tượng cảm ứng;', 'phân biệt hướng sáng, hướng nước…;', 'phân biệt tập tính bẩm sinh, học được;', 'vận dụng vào thực tiễn.'],
      khoiDong: { hoi: 'Chạm tay vào lá cây xấu hổ (trinh nữ), lá làm gì?', goiY: 'Lá cụp lại — đó là cảm ứng.' },
      trongTam: [
        '<b>Cảm ứng</b>: khả năng tiếp nhận và phản ứng với kích thích từ môi trường, giúp sinh vật thích nghi.',
        'Ở thực vật: thân, cành <b>hướng về ánh sáng</b>; rễ <b>hướng đất, hướng nước</b>; lá trinh nữ cụp khi bị chạm; tua cuốn của cây leo.',
        'Ở động vật: <b>tập tính</b> là chuỗi phản ứng trả lời kích thích. <b>Tập tính bẩm sinh</b>: sinh ra đã có (nhện giăng tơ, chim di cư). <b>Tập tính học được</b>: hình thành qua học tập, rèn luyện (chó làm xiếc, học sinh dừng ở đèn đỏ).'
      ],
      viDu: { de: 'Cây đặt cạnh cửa sổ một thời gian, ngọn cây nghiêng về đâu?', loiGiai: 'Nghiêng <b>về phía cửa sổ</b> (hướng sáng).' },
      nguon: N7K('Chương VIII, Bài 33 "Cảm ứng ở sinh vật và tập tính ở động vật" (trang 138), Bài 34 (trang 141), Bài 35 (trang 145)'),
      hoiDap: [{ tu: ['huong sang', 'huong nuoc'], tl: 'Thân hướng về ánh sáng; rễ hướng về nước, đất.' }, { tu: ['bam sinh', 'hoc duoc', 'tap tinh'], tl: 'Bẩm sinh: sinh ra đã có. Học được: qua học tập, rèn luyện.' }]
    },
    cauHoi: [
      { id: 'SH7D-01', muc: 'co-ban', liDoMuc: 'Nhận biết hiện tượng cảm ứng.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các hiện tượng <b>cảm ứng</b>.', phuongAn: [{ t: 'Lá trinh nữ cụp lại khi bị chạm.', dung: true }, { t: 'Ngọn cây hướng về phía có ánh sáng.', dung: true }, { t: 'Rễ cây mọc về phía có nước.', dung: true }, { t: 'Lá cây rụng vì bị gió thổi gãy cuống.', phanHoi: 'Do tác động cơ học, không phải phản ứng chủ động của cây.' }], goiY: ['Sinh vật tự phản ứng với kích thích.'], viSaoDung: 'Ý 1, 2, 3.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Cảm ứng = nhận kích thích + phản ứng có lợi.', tienBo: 'Em đã nhận ra cảm ứng.', nguon: N7K('Bài 33, trang 138–140'), kiemTra: K6(),
        tuongTu: { id: 'SH7D-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Tua cuốn của cây mướp quấn quanh cọc là hiện tượng:', phuongAn: [{ t: 'Cảm ứng ở thực vật', dung: true }, { t: 'Quang hợp', phanHoi: 'Không.' }, { t: 'Hô hấp', phanHoi: 'Không.' }, { t: 'Sinh sản', phanHoi: 'Không.' }], goiY: ['Phản ứng khi chạm cọc.'], viSaoDung: 'Cảm ứng.', loiGiai: '<b>Cảm ứng</b>.', giangLai: 'Nhận kích thích → phản ứng.', nguon: N7K('Bài 33, trang 138–140'), kiemTra: K6() } },
      { id: 'SH7D-02', muc: 'co-ban', liDoMuc: 'Phân biệt tập tính bẩm sinh.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các tập tính <b>bẩm sinh</b>.', phuongAn: [{ t: 'Nhện giăng tơ bắt mồi.', dung: true }, { t: 'Gà con mới nở biết mổ thức ăn.', dung: true }, { t: 'Chó nghe tiếng gọi tên thì chạy đến.', phanHoi: 'Học được qua huấn luyện.' }, { t: 'Học sinh đi học đúng giờ.', phanHoi: 'Học được.' }], goiY: ['Sinh ra đã biết.'], viSaoDung: 'Ý 1, 2.', loiGiai: 'Ý 1, 2.', giangLai: 'Hỏi: "Có ai dạy không?" — không ai dạy → bẩm sinh.', tienBo: 'Em đã phân biệt tập tính.', nguon: N7K('Bài 33, trang 138–140'), kiemTra: K6(),
        tuongTu: { id: 'SH7D-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các tập tính <b>học được</b>.', phuongAn: [{ t: 'Khỉ làm xiếc.', dung: true }, { t: 'Người dừng xe khi đèn đỏ.', dung: true }, { t: 'Ong xây tổ.', phanHoi: 'Bẩm sinh.' }, { t: 'Em bé bú mẹ.', phanHoi: 'Bẩm sinh.' }], goiY: ['Có người dạy.'], viSaoDung: 'Ý 1, 2.', loiGiai: 'Ý 1, 2.', giangLai: 'Có dạy → học được.', nguon: N7K('Bài 33, trang 138–140'), kiemTra: K6() } },
      { id: 'SH7D-03', muc: 'van-dung', liDoMuc: 'Giải thích hướng sáng.', loai: 'chon1', de: 'Đặt chậu cây cạnh cửa sổ một thời gian, ngọn cây nghiêng ra phía cửa sổ. Đây là:', phuongAn: [{ t: 'Tính hướng sáng của thân', dung: true }, { t: 'Tính hướng nước của rễ', phanHoi: 'Đây là thân, phản ứng với ánh sáng.' }, { t: 'Tập tính học được', phanHoi: 'Thực vật không có tập tính học được.' }, { t: 'Cây bị gió thổi nghiêng', phanHoi: 'Không phải.' }], goiY: ['Cửa sổ có gì?'], viSaoDung: 'Hướng sáng.', loiGiai: '<b>Tính hướng sáng</b>.', giangLai: 'Cây "đi tìm" ánh sáng để quang hợp.', tienBo: 'Em đã nhận ra hướng sáng.', nguon: N7K('Bài 33 (trang 138) và Bài 35 "Thực hành: Cảm ứng ở sinh vật" (trang 145)'), kiemTra: K6(),
        tuongTu: { id: 'SH7D-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Rễ cây mọc dài về phía ao nước bên cạnh. Đây là:', phuongAn: [{ t: 'Tính hướng nước của rễ', dung: true }, { t: 'Tính hướng sáng', phanHoi: 'Không.' }, { t: 'Quang hợp', phanHoi: 'Không.' }, { t: 'Thoát hơi nước', phanHoi: 'Không.' }], goiY: ['Ao nước.'], viSaoDung: 'Hướng nước.', loiGiai: '<b>Hướng nước</b>.', giangLai: 'Rễ tìm nước.', nguon: N7K('Bài 33, trang 138–140'), kiemTra: K6() } },
      { id: 'SH7D-04', muc: 'van-dung', liDoMuc: 'Vận dụng cảm ứng vào chăn nuôi, trồng trọt.', loai: 'chon1', de: 'Người nuôi cá thường gõ kẻng mỗi lần cho cá ăn. Sau một thời gian, chỉ cần nghe tiếng kẻng là cá bơi đến. Đây là ứng dụng của:', phuongAn: [{ t: 'Tập tính học được', dung: true }, { t: 'Tập tính bẩm sinh', phanHoi: 'Cá được "dạy" qua nhiều lần lặp lại.' }, { t: 'Hướng sáng', phanHoi: 'Không liên quan.' }, { t: 'Hô hấp', phanHoi: 'Không.' }], goiY: ['Có quá trình lặp lại, rèn luyện.'], viSaoDung: 'Học được.', loiGiai: '<b>Tập tính học được</b>.', giangLai: 'Lặp lại "kẻng – thức ăn" nhiều lần → cá liên kết hai kích thích.', tienBo: 'Em đã vận dụng vào chăn nuôi.', nguon: N7K('Bài 34 "Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn", trang 141–144'), kiemTra: K6(),
        tuongTu: { id: 'SH7D-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Làm giàn cho cây mướp, bầu leo là ứng dụng:', phuongAn: [{ t: 'Cảm ứng của tua cuốn khi tiếp xúc giá thể', dung: true }, { t: 'Tập tính học được', phanHoi: 'Thực vật.' }, { t: 'Thoát hơi nước', phanHoi: 'Không.' }, { t: 'Hô hấp', phanHoi: 'Không.' }], goiY: ['Tua cuốn.'], viSaoDung: 'Cảm ứng.', loiGiai: '<b>Cảm ứng của tua cuốn</b>.', giangLai: 'Ứng dụng trồng trọt.', nguon: N7K('Bài 34, trang 141–144'), kiemTra: K6() } },
      { id: 'SH7D-05', muc: 'nang-cao', liDoMuc: 'Phân tích thí nghiệm hướng sáng có đối chứng.', loai: 'chonNhieu', de: 'Thí nghiệm: hai chậu đậu nảy mầm giống nhau. Chậu A đặt trong hộp kín có một lỗ nhỏ bên phải; chậu B đặt ngoài trời sáng đều. Sau 5 ngày, cây ở A cong về phía lỗ, cây ở B mọc thẳng. <b>Chọn TẤT CẢ</b> các kết luận đúng.', phuongAn: [{ t: 'Thân cây có tính hướng sáng.', dung: true }, { t: 'Chậu B là chậu đối chứng.', dung: true }, { t: 'Cây ở A cong vì thiếu nước.', phanHoi: 'Hai chậu như nhau về nước; khác nhau ở hướng ánh sáng.' }, { t: 'Nếu chiếu sáng đều mọi phía, cây sẽ mọc thẳng.', dung: true }], goiY: ['Hai chậu khác nhau ở yếu tố nào?'], viSaoDung: 'Ý 1, 2, 4.', loiGiai: 'Ý 1, 2, 4.', giangLai: 'Chỉ khác một yếu tố (hướng ánh sáng) → kết luận về yếu tố đó.', tienBo: 'Em đã phân tích thí nghiệm.', nguon: Object.assign(N7K('Bài 35 "Thực hành: Cảm ứng ở sinh vật", trang 145–147'), { soLieu: 'Kết quả thí nghiệm mô tả ở dạng giả định để học sinh phân tích.' }), kiemTra: K6(),
        tuongTu: { id: 'SH7D-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Trong thí nghiệm ở câu trước, nếu khoan lỗ ở bên <b>trái</b> hộp thì cây ở chậu A sẽ:', phuongAn: [{ t: 'Cong về phía bên trái', dung: true }, { t: 'Cong về bên phải', phanHoi: 'Hướng về nguồn sáng.' }, { t: 'Mọc thẳng', phanHoi: 'Ánh sáng chỉ từ một phía.' }, { t: 'Chết ngay', phanHoi: 'Không.' }], goiY: ['Hướng về ánh sáng.'], viSaoDung: 'Bên trái.', loiGiai: '<b>Cong về bên trái</b>.', giangLai: 'Theo nguồn sáng.', nguon: N7K('Bài 35, trang 145–147'), kiemTra: K6() } },
      { id: 'SH7D-06', muc: 'nang-cao', liDoMuc: 'Vận dụng tập tính vào học tập; câu mở.', loai: 'mo', de: 'Vì sao học sinh nên tập thói quen học bài vào một giờ cố định mỗi ngày? Hãy giải thích bằng hiểu biết về tập tính học được. Viết 2–4 câu.',
        tieuChi: [{ t: 'Nêu đây là tập tính học được (hình thành qua rèn luyện, lặp lại).', tuDong: { tuKhoa: ['hoc duoc', 'ren luyen', 'lap lai', 'thoi quen'] } }, { t: 'Nêu lặp lại nhiều lần tạo phản xạ / thói quen tự giác.', tuDong: { tuKhoa: ['tu giac', 'tu dong', 'phan xa', 'quen'] } }, { t: 'Nêu lợi ích cho việc học.', tuDong: { tuKhoa: ['tap trung', 'hieu qua', 'nho bai', 'hoc tot'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }],
        baiThamKhao: 'Học bài vào giờ cố định là tập tính học được, hình thành nhờ rèn luyện và lặp lại mỗi ngày. Khi đã quen, đến giờ đó em tự giác ngồi vào bàn học mà không cần nhắc. Nhờ vậy em tập trung hơn và học hiệu quả hơn.', giupViet: 'Đây là tập tính … → lặp lại nhiều lần thì … → giúp …', goiY: ['Tập tính học được hình thành thế nào?'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Như cá nghe kẻng: lặp lại tạo phản ứng tự động.', tienBo: 'Em đã vận dụng tập tính vào học tập.', nguon: N7K('Bài 34, trang 141–144'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'SH7D-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Vì sao khi nuôi chó, người ta thường thưởng cho chó mỗi lần nó làm đúng lệnh? Viết 2–4 câu.', tieuChi: [{ t: 'Nêu đó là hình thành tập tính học được.', tuDong: { tuKhoa: ['hoc duoc', 'tap tinh'] } }, { t: 'Nêu phần thưởng giúp chó ghi nhớ, lặp lại hành động.', tuDong: { tuKhoa: ['thuong', 'nho', 'lap lai'] } }, { t: 'Kết luận chó làm đúng lệnh lâu dài.', tuDong: { tuKhoa: ['dung lenh', 'nghe loi', 'lam theo'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Làm theo lệnh là tập tính học được của chó. Mỗi lần làm đúng được thưởng giúp chó ghi nhớ và muốn lặp lại hành động đó. Sau nhiều lần, chó sẽ làm theo lệnh một cách tự nhiên.', giupViet: 'Tập tính … → phần thưởng giúp … → sau nhiều lần …', goiY: ['Lặp lại có thưởng.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Lặp lại + thưởng.', nguon: N7K('Bài 34, trang 141–144'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const sh7SinhTruong = {
    id: 'sh7-sinh-truong', lop: 7, mon: 'khtn', phanMon: 'Sinh học', ten: 'Sinh trưởng và phát triển ở sinh vật',
    sgk: 'SGK KHTN 7 — Chương IX, Bài 36–38, trang 148–157', yccdGhiChu: YCCD7,
    kienThucTruoc: ['Tế bào lớn lên và phân chia (lớp 6)'],
    yeuCauCanDat: ['Phân biệt sinh trưởng và phát triển.', 'Nêu vai trò của mô phân sinh; mô tả vòng đời của một số sinh vật.', 'Nêu các yếu tố ảnh hưởng và vận dụng vào thực tiễn.'],
    bai: {
      mucTieu: ['phân biệt sinh trưởng, phát triển;', 'nêu vai trò mô phân sinh;', 'tính tốc độ sinh trưởng từ số liệu;', 'vận dụng yếu tố ảnh hưởng.'],
      khoiDong: { hoi: 'Từ hạt đậu đến cây đậu ra hoa, cây đã thay đổi những gì?', goiY: 'Lớn lên (cao hơn, nhiều lá) và xuất hiện cơ quan mới (hoa, quả).' },
      trongTam: [
        '<b>Sinh trưởng</b>: sự tăng về kích thước, khối lượng của cơ thể (do tế bào lớn lên và phân chia).',
        '<b>Phát triển</b>: những biến đổi về cấu trúc, chức năng, hình thành cơ quan mới (ra hoa, tạo quả; nòng nọc thành ếch).',
        '<b>Mô phân sinh</b> ở thực vật: mô phân sinh đỉnh làm cây cao lên; mô phân sinh bên làm thân to ra.',
        'Yếu tố ảnh hưởng: nhiệt độ, ánh sáng, nước, chất dinh dưỡng. Vận dụng: bón phân, tưới nước, chiếu sáng hợp lí; chăm sóc vật nuôi đúng giai đoạn.'
      ],
      viDu: { de: 'Cây cao từ 10 cm lên 25 cm trong 5 tuần. Trung bình mỗi tuần cao thêm bao nhiêu?', loiGiai: '(25 − 10) : 5 = <b>3 cm/tuần</b>.' },
      nguon: N7K('Chương IX, Bài 36 "Khái quát về sinh trưởng và phát triển ở sinh vật" (trang 148), Bài 37 (trang 151), Bài 38 (trang 156)'),
      hoiDap: [{ tu: ['sinh truong', 'phat trien'], tl: 'Sinh trưởng: tăng kích thước, khối lượng. Phát triển: biến đổi cấu trúc, chức năng, cơ quan mới.' }, { tu: ['mo phan sinh'], tl: 'Đỉnh → cao lên; bên → to ra.' }]
    },
    cauHoi: [
      { id: 'SH7E-01', muc: 'co-ban', liDoMuc: 'Phân biệt sinh trưởng / phát triển.', loai: 'chon1', de: 'Hiện tượng nào là <b>phát triển</b> (không chỉ là sinh trưởng)?', phuongAn: [{ t: 'Cây cam ra hoa.', dung: true }, { t: 'Cây cam cao thêm 10 cm.', phanHoi: 'Tăng kích thước → sinh trưởng.' }, { t: 'Con lợn tăng 5 kg.', phanHoi: 'Tăng khối lượng → sinh trưởng.' }, { t: 'Lá cây to thêm.', phanHoi: 'Sinh trưởng.' }], goiY: ['Xuất hiện cơ quan mới.'], viSaoDung: 'Ra hoa là phát triển.', loiGiai: '<b>Cây cam ra hoa</b>.', giangLai: 'Sinh trưởng = "to lên"; phát triển = "đổi khác, có cái mới".', tienBo: 'Em đã phân biệt hai khái niệm.', nguon: N7K('Bài 36, trang 148–150'), kiemTra: K6(),
        tuongTu: { id: 'SH7E-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Mô phân sinh đỉnh giúp cây:', phuongAn: [{ t: 'Cao lên (dài ra)', dung: true }, { t: 'To ra bề ngang', phanHoi: 'Đó là mô phân sinh bên.' }, { t: 'Quang hợp', phanHoi: 'Không.' }, { t: 'Hút nước', phanHoi: 'Không.' }], goiY: ['Ở ngọn.'], viSaoDung: 'Cao lên.', loiGiai: '<b>Cao lên</b>.', giangLai: 'Đỉnh → cao; bên → to.', nguon: N7K('Bài 36, trang 148–150'), kiemTra: K6() } },
      { id: 'SH7E-02', muc: 'co-ban', liDoMuc: 'Nhận biết yếu tố ảnh hưởng.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các yếu tố môi trường ảnh hưởng đến sinh trưởng và phát triển của cây.', phuongAn: [{ t: 'Nhiệt độ', dung: true }, { t: 'Ánh sáng', dung: true }, { t: 'Nước', dung: true }, { t: 'Chất dinh dưỡng (phân bón)', dung: true }, { t: 'Màu sơn của chậu cây', phanHoi: 'Không ảnh hưởng đáng kể.' }], goiY: ['Bốn yếu tố.'], viSaoDung: 'Nhiệt, sáng, nước, dinh dưỡng.', loiGiai: 'Ý 1, 2, 3, 4.', giangLai: 'Bốn yếu tố: nhiệt – sáng – nước – dinh dưỡng.', tienBo: 'Em đã nêu các yếu tố.', nguon: N7K('Bài 37 "Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn", trang 151–155'), kiemTra: K6(),
        tuongTu: { id: 'SH7E-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Quá trình nòng nọc biến thành ếch là:', phuongAn: [{ t: 'Phát triển', dung: true }, { t: 'Chỉ là sinh trưởng', phanHoi: 'Có biến đổi hình thái lớn.' }, { t: 'Sinh sản', phanHoi: 'Không.' }, { t: 'Cảm ứng', phanHoi: 'Không.' }], goiY: ['Mọc chân, mất đuôi.'], viSaoDung: 'Phát triển.', loiGiai: '<b>Phát triển</b>.', giangLai: 'Có cái mới.', nguon: N7K('Bài 36, trang 148–150'), kiemTra: K6() } },
      { id: 'SH7E-03', muc: 'van-dung', liDoMuc: 'Tính tốc độ sinh trưởng trung bình từ số liệu.', loai: 'so', de: 'Một cây đậu cao 12 cm. Sau 6 tuần cây cao 30 cm. Trung bình mỗi tuần cây cao thêm bao nhiêu cm?', dapAn: 3, soLieu: GIA_DINH,
        loi: [{ gt: 5, nhan: 'Quên chiều cao ban đầu', phanHoi: '30 : 6 = 5 là chưa trừ chiều cao ban đầu 12 cm.' }, { gt: 18, nhan: 'Thiếu bước', phanHoi: '18 cm là tổng phần cao thêm trong 6 tuần. Chia cho 6.' }],
        buoc: { hoi: 'Cây cao thêm tất cả bao nhiêu cm?', dapAn: 18, dung: 'Đúng. Chia cho 6 tuần.', sai: '30 − 12.' },
        goiY: ['(Sau − trước) : số tuần.'], viSaoDung: '18 : 6 = 3.', loiGiai: '(30 − 12) : 6 = <b>3 cm/tuần</b>.', giangLai: 'Tốc độ sinh trưởng = phần tăng thêm : thời gian.', tienBo: 'Em đã tính tốc độ sinh trưởng.', nguon: N7K('Bài 38 "Thực hành: Quan sát, mô tả sự sinh trưởng và phát triển ở một số sinh vật", trang 156–157'), kiemTra: K6(),
        tuongTu: { id: 'SH7E-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Một con gà con nặng 50 g. Sau 4 tuần nặng 450 g. Trung bình mỗi tuần tăng bao nhiêu gam?', dapAn: 100, soLieu: GIA_DINH, loi: [{ gt: 112.5, nhan: 'Quên khối lượng ban đầu', phanHoi: 'Trừ 50 g trước.' }, { gt: 400, nhan: 'Thiếu bước', phanHoi: 'Chia 4.' }], buoc: { hoi: 'Tăng tất cả?', dapAn: 400, dung: 'Đúng.', sai: '450 − 50.' }, goiY: ['400 : 4.'], viSaoDung: '100 g.', loiGiai: '<b>100 g/tuần</b>.', giangLai: 'Phần tăng : thời gian.', nguon: N7K('Bài 38, trang 156–157'), kiemTra: K6() } },
      { id: 'SH7E-04', muc: 'van-dung', liDoMuc: 'Vận dụng vào trồng trọt.', loai: 'chon1', de: 'Người ta thường <b>bấm ngọn</b> cây rau ngót, cây chè. Việc này nhằm mục đích:', phuongAn: [{ t: 'Kích thích cây ra nhiều cành, nhiều lá non.', dung: true }, { t: 'Làm cây cao nhanh hơn.', phanHoi: 'Bấm ngọn làm cây ngừng cao, tập trung đâm cành.' }, { t: 'Làm cây ra hoa sớm.', phanHoi: 'Không phải mục đích chính.' }, { t: 'Giúp rễ hút nước tốt hơn.', phanHoi: 'Không.' }], goiY: ['Mất mô phân sinh đỉnh.'], viSaoDung: 'Ra nhiều cành lá.', loiGiai: '<b>Ra nhiều cành, nhiều lá non</b>.', giangLai: 'Bấm ngọn = bỏ "mũi nhọn" đi lên → cây "đổi hướng" mọc cành ngang.', tienBo: 'Em đã vận dụng vào trồng trọt.', nguon: N7K('Bài 37, trang 151–155'), kiemTra: K6(),
        tuongTu: { id: 'SH7E-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Vì sao nhà kính trồng rau thường được chiếu đèn vào ban đêm mùa đông?', phuongAn: [{ t: 'Bổ sung ánh sáng giúp cây quang hợp, sinh trưởng tốt', dung: true }, { t: 'Để đuổi chuột', phanHoi: 'Không.' }, { t: 'Để cây không hô hấp', phanHoi: 'Không.' }, { t: 'Để trang trí', phanHoi: 'Không.' }], goiY: ['Mùa đông ngày ngắn.'], viSaoDung: 'Bổ sung ánh sáng.', loiGiai: '<b>Bổ sung ánh sáng</b>.', giangLai: 'Ánh sáng là yếu tố ảnh hưởng.', nguon: N7K('Bài 37, trang 151–155'), kiemTra: K6() } },
      { id: 'SH7E-05', muc: 'nang-cao', liDoMuc: 'Đọc bảng số liệu so sánh hai điều kiện.', loai: 'so', de: 'Bảng (giả định) chiều cao cây ngô sau 4 tuần:<br>— Chậu A (đủ phân bón): từ 8 cm lên 36 cm.<br>— Chậu B (không bón phân): từ 8 cm lên 20 cm.<br>Tốc độ sinh trưởng trung bình của chậu A gấp bao nhiêu lần chậu B?', dapAn: '7/3', saiSo: 0.01, soLieu: GIA_DINH,
        loi: [{ gt: 1.8, nhan: 'So sánh chiều cao cuối thay vì phần tăng', phanHoi: '36 : 20 là so chiều cao cuối. Phải so <b>phần tăng thêm</b>: 28 và 12.' }, { gt: 16, nhan: 'Tính hiệu thay vì tỉ số', phanHoi: '"Gấp bao nhiêu lần" → chia.' }],
        buoc: { hoi: 'Chậu A cao thêm bao nhiêu cm?', dapAn: 28, dung: 'Đúng. Chậu B cao thêm 12 cm.', sai: '36 − 8.' },
        goiY: ['Cùng 4 tuần → so phần tăng.'], viSaoDung: '28 : 12 = 7/3 ≈ 2,33.', loiGiai: 'A tăng 28 cm, B tăng 12 cm (cùng 4 tuần). 28 : 12 = ' + F(7, 3) + ' ≈ <b>2,33 lần</b>. Kết luận: phân bón giúp cây sinh trưởng nhanh hơn.', giangLai: 'So sánh tốc độ = so phần tăng thêm trong cùng thời gian.', tienBo: 'Em đã đọc và so sánh số liệu.', nguon: N7K('Bài 37, trang 151–155'), kiemTra: K6(),
        tuongTu: { id: 'SH7E-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Giả định: Cá ở ao A (nước ấm, đủ thức ăn) từ 20 g lên 220 g sau 10 tuần; ao B từ 20 g lên 120 g. Tốc độ tăng khối lượng ở ao A gấp mấy lần ao B?', dapAn: 2, soLieu: GIA_DINH, loi: [{ gt: '11/6', saiSo: 0.01, nhan: 'So sánh khối lượng cuối thay vì phần tăng', phanHoi: 'So phần tăng: 200 và 100.' }, { gt: 100, nhan: 'Tính hiệu thay vì tỉ số', phanHoi: 'Chia.' }], buoc: { hoi: 'Ao A tăng bao nhiêu gam?', dapAn: 200, dung: 'Đúng.', sai: '220 − 20.' }, goiY: ['200 : 100.'], viSaoDung: '2.', loiGiai: '<b>2 lần</b>.', giangLai: 'So phần tăng.', nguon: N7K('Bài 37, trang 151–155'), kiemTra: K6() } },
      { id: 'SH7E-06', muc: 'nang-cao', liDoMuc: 'Vận dụng vào bản thân; câu mở.', loai: 'mo', de: 'Lứa tuổi học sinh lớp 7 đang lớn nhanh. Hãy nêu ít nhất <b>hai</b> việc em nên làm để cơ thể sinh trưởng và phát triển tốt, và giải thích ngắn. Viết 2–4 câu.',
        tieuChi: [{ t: 'Nêu chế độ ăn đủ chất dinh dưỡng.', tuDong: { tuKhoa: ['an du', 'an uong', 'dinh duong'] } }, { t: 'Nêu vận động / thể dục thể thao.', tuDong: { tuKhoa: ['the duc', 'van dong', 'the thao', 'choi'] } }, { t: 'Nêu ngủ đủ giấc hoặc tắm nắng hợp lí.', tuDong: { tuKhoa: ['ngu du', 'giac ngu', 'ngu som', 'tam nang'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }],
        baiThamKhao: 'Em cần ăn đủ chất dinh dưỡng như đạm, rau quả và sữa để cơ thể có nguyên liệu lớn lên. Em nên tập thể dục, chơi thể thao đều đặn để xương và cơ phát triển. Em cũng cần ngủ đủ giấc vì khi ngủ cơ thể lớn và hồi phục tốt.', giupViet: 'Ăn … vì … / Tập … vì … / Ngủ … vì …', goiY: ['Ăn – tập – ngủ.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Yếu tố bên ngoài: dinh dưỡng, vận động, nghỉ ngơi.', tienBo: 'Em đã vận dụng vào bản thân.', nguon: N7K('Bài 37, trang 151–155'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'SH7E-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Nêu hai việc người nông dân làm để cây lúa sinh trưởng tốt và giải thích. Viết 2–4 câu.', tieuChi: [{ t: 'Nêu bón phân (chất dinh dưỡng).', tuDong: { tuKhoa: ['bon phan', 'dinh duong'] } }, { t: 'Nêu tưới / giữ nước.', tuDong: { tuKhoa: ['tuoi', 'nuoc'] } }, { t: 'Có giải thích.', tuDong: { tuKhoa: ['giup', 'cung cap', 'can nhieu'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Người nông dân bón phân để cung cấp chất dinh dưỡng giúp lúa lớn nhanh. Họ giữ đủ nước trong ruộng vì cây lúa cần nhiều nước để sinh trưởng.', giupViet: 'Bón … vì … / Giữ nước vì …', goiY: ['Nước, phân.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Yếu tố ảnh hưởng.', nguon: N7K('Bài 37, trang 151–155'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  const sh7SinhSan = {
    id: 'sh7-sinh-san', lop: 7, mon: 'khtn', phanMon: 'Sinh học', ten: 'Sinh sản ở sinh vật',
    sgk: 'SGK KHTN 7 — Chương X, Bài 39–42, trang 158–174', yccdGhiChu: YCCD7,
    kienThucTruoc: ['Tế bào phân chia (lớp 6)', 'Sinh trưởng, phát triển (Bài 36)'],
    yeuCauCanDat: ['Phân biệt sinh sản vô tính và hữu tính; lấy ví dụ.', 'Nêu ứng dụng sinh sản vô tính: giâm, chiết, ghép, nuôi cấy mô.', 'Nêu cấu tạo hoa và quá trình thụ phấn, thụ tinh; các yếu tố ảnh hưởng đến sinh sản.', 'Nêu được cơ thể sinh vật là một thể thống nhất.'],
    bai: {
      mucTieu: ['phân biệt vô tính, hữu tính;', 'chọn cách nhân giống cây phù hợp;', 'nêu thụ phấn, thụ tinh;', 'tính số cây tạo ra bằng nuôi cấy mô.'],
      khoiDong: { hoi: 'Cắm một đoạn cành rau muống xuống đất ẩm, vài ngày sau thế nào?', goiY: 'Cành ra rễ và mọc thành cây mới — sinh sản vô tính.' },
      trongTam: [
        '<b>Sinh sản vô tính</b>: cơ thể mới được tạo ra từ một phần của cơ thể mẹ, <b>không có sự kết hợp</b> giao tử đực và cái. Con giống hệt mẹ.',
        'Ở thực vật: sinh sản sinh dưỡng (từ thân, lá, rễ); ứng dụng <b>giâm cành, chiết cành, ghép, nuôi cấy mô</b>. Ở động vật: nảy chồi (thuỷ tức), phân mảnh, trinh sản.',
        '<b>Sinh sản hữu tính</b>: có sự <b>kết hợp giao tử đực và giao tử cái</b> tạo hợp tử. Ở thực vật có hoa: thụ phấn → thụ tinh → hình thành hạt, quả.',
        'Con sinh ra từ sinh sản hữu tính mang đặc điểm của cả bố và mẹ, đa dạng hơn, thích nghi tốt hơn với môi trường thay đổi.',
        'Cơ thể sinh vật là một thể thống nhất: các quá trình trao đổi chất, cảm ứng, sinh trưởng, sinh sản liên quan mật thiết với nhau.'
      ],
      viDu: { de: 'Ghép cành bưởi ngon lên gốc bưởi khoẻ là sinh sản gì?', loiGiai: '<b>Vô tính</b> (sinh sản sinh dưỡng nhân tạo).' },
      nguon: N7K('Chương X, Bài 39 "Sinh sản vô tính ở sinh vật" (trang 158), Bài 40 "Sinh sản hữu tính ở sinh vật" (trang 164), Bài 41 (trang 169), Bài 42 "Cơ thể sinh vật là một thể thống nhất" (trang 173)'),
      hoiDap: [{ tu: ['vo tinh'], tl: 'Không có kết hợp giao tử; con giống mẹ. Giâm, chiết, ghép, nuôi cấy mô.' }, { tu: ['huu tinh'], tl: 'Có kết hợp giao tử đực và cái; con mang đặc điểm bố và mẹ.' }, { tu: ['thu phan', 'thu tinh'], tl: 'Thụ phấn: hạt phấn rơi lên đầu nhuỵ. Thụ tinh: giao tử đực kết hợp giao tử cái.' }]
    },
    cauHoi: [
      { id: 'SH7F-01', muc: 'co-ban', liDoMuc: 'Phân biệt sinh sản vô tính.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các hình thức sinh sản <b>vô tính</b>.', phuongAn: [{ t: 'Giâm cành sắn', dung: true }, { t: 'Thuỷ tức nảy chồi', dung: true }, { t: 'Chiết cành cam', dung: true }, { t: 'Cây đậu tạo hạt sau khi thụ phấn', phanHoi: 'Có thụ phấn, thụ tinh → hữu tính.' }, { t: 'Gà mái đẻ trứng có phôi', phanHoi: 'Hữu tính.' }], goiY: ['Không có giao tử kết hợp.'], viSaoDung: 'Ý 1, 2, 3.', loiGiai: 'Ý 1, 2, 3.', giangLai: 'Hỏi: có "bố" không? Không có → vô tính.', tienBo: 'Em đã phân biệt hai hình thức.', nguon: N7K('Bài 39, trang 158–163'), kiemTra: K6(),
        tuongTu: { id: 'SH7F-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Đặc điểm của sinh sản <b>hữu tính</b> là:', phuongAn: [{ t: 'Có sự kết hợp giao tử đực và giao tử cái', dung: true }, { t: 'Con giống hệt mẹ', phanHoi: 'Đó là vô tính.' }, { t: 'Chỉ cần một phần cơ thể mẹ', phanHoi: 'Vô tính.' }, { t: 'Không có hợp tử', phanHoi: 'Có hợp tử.' }], goiY: ['Bố và mẹ.'], viSaoDung: 'Kết hợp giao tử.', loiGiai: '<b>Kết hợp giao tử đực và cái</b>.', giangLai: 'Có bố → hữu tính.', nguon: N7K('Bài 40, trang 164–168'), kiemTra: K6() } },
      { id: 'SH7F-02', muc: 'co-ban', liDoMuc: 'Nhớ trình tự thụ phấn – thụ tinh.', loai: 'chon1', de: 'Trình tự đúng ở cây có hoa là:', phuongAn: [{ t: 'Thụ phấn → thụ tinh → hình thành hạt, quả', dung: true }, { t: 'Thụ tinh → thụ phấn → hình thành quả', phanHoi: 'Hạt phấn phải đến đầu nhuỵ (thụ phấn) trước.' }, { t: 'Hình thành quả → thụ phấn → thụ tinh', phanHoi: 'Quả hình thành sau cùng.' }, { t: 'Thụ phấn → hình thành quả → thụ tinh', phanHoi: 'Thụ tinh trước khi tạo quả.' }], goiY: ['Hạt phấn đến trước.'], viSaoDung: 'Phấn → tinh → quả.', loiGiai: '<b>Thụ phấn → thụ tinh → hạt, quả</b>.', giangLai: '"Phấn đến – tinh gặp – quả thành".', tienBo: 'Em đã nhớ trình tự.', nguon: N7K('Bài 40, trang 164–168'), kiemTra: K6(),
        tuongTu: { id: 'SH7F-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Thụ phấn là hiện tượng:', phuongAn: [{ t: 'Hạt phấn tiếp xúc với đầu nhuỵ', dung: true }, { t: 'Giao tử đực kết hợp giao tử cái', phanHoi: 'Đó là thụ tinh.' }, { t: 'Quả chín', phanHoi: 'Không.' }, { t: 'Hạt nảy mầm', phanHoi: 'Không.' }], goiY: ['Phấn đến nhuỵ.'], viSaoDung: 'Phấn đến nhuỵ.', loiGiai: '<b>Hạt phấn tiếp xúc đầu nhuỵ</b>.', giangLai: 'Phấn đến.', nguon: N7K('Bài 40, trang 164–168'), kiemTra: K6() } },
      { id: 'SH7F-03', muc: 'van-dung', liDoMuc: 'Chọn phương pháp nhân giống theo mục đích.', loai: 'chon1', de: 'Nhà vườn muốn nhân nhanh một giống lan quý, tạo ra hàng nghìn cây giống hệt nhau, sạch bệnh trong thời gian ngắn. Nên dùng phương pháp nào?', phuongAn: [{ t: 'Nuôi cấy mô', dung: true }, { t: 'Gieo hạt', phanHoi: 'Cây con có thể khác mẹ, lâu.' }, { t: 'Chiết cành', phanHoi: 'Mỗi lần chỉ được ít cây.' }, { t: 'Ghép cành', phanHoi: 'Cần gốc ghép, số lượng ít.' }], goiY: ['Số lượng lớn, giống hệt, sạch bệnh.'], viSaoDung: 'Nuôi cấy mô.', loiGiai: '<b>Nuôi cấy mô</b>.', giangLai: 'Nuôi cấy mô: từ một mẩu mô nhỏ tạo rất nhiều cây trong phòng thí nghiệm sạch.', tienBo: 'Em đã chọn phương pháp phù hợp.', nguon: N7K('Bài 39, trang 158–163'), kiemTra: K6(),
        tuongTu: { id: 'SH7F-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Muốn cây bưởi sớm ra quả, giữ được giống ngon của cây mẹ, người ta thường:', phuongAn: [{ t: 'Chiết cành', dung: true }, { t: 'Gieo hạt', phanHoi: 'Lâu ra quả, có thể khác mẹ.' }, { t: 'Thụ phấn nhân tạo', phanHoi: 'Không phải nhân giống.' }, { t: 'Nảy chồi', phanHoi: 'Động vật.' }], goiY: ['Cành đã trưởng thành.'], viSaoDung: 'Chiết.', loiGiai: '<b>Chiết cành</b>.', giangLai: 'Giữ giống mẹ.', nguon: N7K('Bài 39, trang 158–163'), kiemTra: K6() } },
      { id: 'SH7F-04', muc: 'van-dung', liDoMuc: 'So sánh ưu điểm của hai hình thức.', loai: 'chon1', de: 'Ưu điểm của sinh sản hữu tính so với sinh sản vô tính là:', phuongAn: [{ t: 'Con cái đa dạng, dễ thích nghi khi môi trường thay đổi.', dung: true }, { t: 'Con cái giống hệt mẹ.', phanHoi: 'Đó là đặc điểm vô tính.' }, { t: 'Không cần hai giới.', phanHoi: 'Ngược lại.' }, { t: 'Luôn tạo nhiều con hơn.', phanHoi: 'Không chắc.' }], goiY: ['Có đặc điểm của cả bố và mẹ.'], viSaoDung: 'Đa dạng.', loiGiai: '<b>Đa dạng, dễ thích nghi</b>.', giangLai: 'Đa dạng như "nhiều phương án dự phòng" khi môi trường đổi.', tienBo: 'Em đã so sánh hai hình thức.', nguon: N7K('Bài 40, trang 164–168'), kiemTra: K6(),
        tuongTu: { id: 'SH7F-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Ưu điểm của giâm cành so với gieo hạt là:', phuongAn: [{ t: 'Cây con giữ đặc điểm cây mẹ, nhanh thu hoạch', dung: true }, { t: 'Cây con đa dạng hơn', phanHoi: 'Ngược.' }, { t: 'Không cần nước', phanHoi: 'Không.' }, { t: 'Cây sống lâu hơn', phanHoi: 'Không chắc.' }], goiY: ['Vô tính.'], viSaoDung: 'Giữ giống.', loiGiai: '<b>Giữ đặc điểm mẹ, nhanh</b>.', giangLai: 'Vô tính giữ giống.', nguon: N7K('Bài 39, trang 158–163'), kiemTra: K6() } },
      { id: 'SH7F-05', muc: 'nang-cao', liDoMuc: 'Tính số cây tạo ra bằng nuôi cấy mô qua nhiều lần nhân.', loai: 'so', de: 'Giả sử trong nuôi cấy mô, cứ mỗi tháng một chồi lan nhân thành 4 chồi. Bắt đầu từ 5 chồi, sau 3 tháng có bao nhiêu chồi?', dapAn: 320, soLieu: GIA_DINH,
        loi: [{ gt: 60, nhan: 'Lỗi quy luật', phanHoi: 'Không phải 5 · 4 · 3. Mỗi tháng số chồi <b>gấp 4</b>: 5 · 4 · 4 · 4.' }, { gt: 64, nhan: 'Quên số ban đầu', phanHoi: '64 = 4³ là từ một chồi. Có 5 chồi ban đầu.' }, { gt: 80, nhan: 'Thiếu bước', phanHoi: '80 chồi là sau 2 tháng.' }],
        buoc: { hoi: 'Sau tháng thứ nhất có bao nhiêu chồi?', dapAn: 20, dung: 'Đúng: 5 · 4. Tháng 2: 80; tháng 3: ?', sai: '5 · 4.' },
        goiY: ['Mỗi tháng nhân 4.'], viSaoDung: '5 · 4³ = 320.', loiGiai: '5 → 20 → 80 → <b>320</b> chồi (= 5 · ' + S('4', 3) + ').', giangLai: 'Giống bài tế bào phân chia lớp 6: mỗi lần nhân với cùng một số → luỹ thừa.', tienBo: 'Em đã tính được số chồi.', nguon: N7K('Bài 39, trang 158–163'), kiemTra: K6(),
        tuongTu: { id: 'SH7F-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'so', de: 'Giả sử mỗi tháng một chồi nhân thành 3 chồi. Từ 10 chồi, sau 4 tháng có bao nhiêu chồi?', dapAn: 810, soLieu: GIA_DINH, loi: [{ gt: 120, nhan: 'Lỗi quy luật', phanHoi: 'Nhân 3 mỗi tháng.' }, { gt: 81, nhan: 'Quên số ban đầu', phanHoi: 'Nhân 10.' }, { gt: 270, nhan: 'Thiếu bước', phanHoi: 'Đó là sau 3 tháng.' }], buoc: { hoi: 'Sau tháng 1?', dapAn: 30, dung: 'Đúng.', sai: '10 · 3.' }, goiY: ['10 · 3⁴.'], viSaoDung: '810.', loiGiai: '<b>810</b>.', giangLai: 'Luỹ thừa.', nguon: N7K('Bài 39, trang 158–163'), kiemTra: K6() } },
      { id: 'SH7F-06', muc: 'nang-cao', liDoMuc: 'Giải thích cơ thể là thể thống nhất; câu mở.', loai: 'mo', de: 'Hãy lấy ví dụ cây xanh để giải thích vì sao "cơ thể sinh vật là một thể thống nhất" (các hoạt động sống liên quan với nhau). Viết 2–4 câu.',
        tieuChi: [{ t: 'Nêu rễ hút nước, khoáng cung cấp cho lá.', tuDong: { tuKhoa: ['re cay', 'hut nuoc', 'khoang'] } }, { t: 'Nêu lá quang hợp tạo chất hữu cơ nuôi cây.', tuDong: { tuKhoa: ['quang hop', 'chat huu co'] } }, { t: 'Nêu chất hữu cơ / năng lượng dùng cho sinh trưởng, sinh sản.', tuDong: { tuKhoa: ['sinh truong', 'sinh san', 'lon len', 'ra hoa'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }],
        baiThamKhao: 'Rễ cây hút nước và muối khoáng đưa lên lá. Lá dùng nước và carbon dioxide để quang hợp, tạo chất hữu cơ nuôi toàn cây. Nhờ có chất hữu cơ và năng lượng từ hô hấp, cây mới sinh trưởng, ra hoa và tạo quả. Vì vậy các hoạt động sống của cây liên quan chặt chẽ với nhau.', giupViet: 'Rễ … → lá … → cây … → vì vậy …', goiY: ['Nối các bộ phận và quá trình.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Vẽ chuỗi: rễ hút nước → lá quang hợp → hô hấp lấy năng lượng → lớn lên, ra hoa.', tienBo: 'Em đã giải thích tính thống nhất của cơ thể.', nguon: N7K('Bài 42 "Cơ thể sinh vật là một thể thống nhất", trang 173–174'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.'),
        tuongTu: { id: 'SH7F-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Lấy ví dụ cơ thể người để giải thích vì sao các hệ cơ quan phối hợp với nhau khi em ăn và học bài. Viết 2–4 câu.', tieuChi: [{ t: 'Nêu hệ tiêu hoá biến đổi thức ăn thành chất dinh dưỡng.', tuDong: { tuKhoa: ['tieu hoa', 'dinh duong'] } }, { t: 'Nêu máu (tuần hoàn) vận chuyển chất đến tế bào.', tuDong: { tuKhoa: ['mau', 'tuan hoan', 'van chuyen'] } }, { t: 'Nêu tế bào hô hấp tạo năng lượng cho não hoạt động.', tuDong: { tuKhoa: ['ho hap', 'nang luong', 'suy nghi'] } }, { t: 'Viết 2–4 câu.', tuDong: { soCau: [2, 4] } }], baiThamKhao: 'Hệ tiêu hoá biến đổi thức ăn thành chất dinh dưỡng. Máu trong hệ tuần hoàn vận chuyển chất dinh dưỡng và oxygen đến các tế bào. Tế bào não hô hấp tạo năng lượng giúp em suy nghĩ khi học bài.', giupViet: 'Tiêu hoá → tuần hoàn → hô hấp tế bào → não.', goiY: ['Chuỗi các hệ.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Chuỗi phối hợp.', nguon: N7K('Bài 42, trang 173–174'), kiemTra: K6('Câu mở: kiểm tra sơ bộ.') } }
    ]
  };

  /* ---------------- TIẾNG ANH 7 (đợt 4, 28/11/2026) ----------------
     Thư mục Drive chưa có SGK/SGV Tiếng Anh 7. Tên Unit và chủ điểm ngữ pháp
     lấy theo trang tham khảo (loigiaihay.com, prepedu.com) → mọi câu ở trạng
     thái "Chờ đối chiếu SGK"; khi có sách, giáo viên đối chiếu và cập nhật.  */
  const N7A = (u, v) => Object.assign(tuSoan('SGK hoặc SGV Tiếng Anh 7 Global Success — Unit ' + u + ': mở mục ' + v + ' để đối chiếu chủ điểm ngữ pháp.'), {
    tenTaiLieu: 'Tiếng Anh 7 Global Success (bộ "Kết nối tri thức với cuộc sống") — chưa có bản sách trong thư mục Drive',
    viTri: 'Unit ' + u + ' — ' + v,
    ghiChu: 'Chủ điểm ngữ pháp của Unit lấy theo danh mục trên trang tham khảo loigiaihay.com và prepedu.com (xem ngày 28/11/2026), chưa đối chiếu trực tiếp với SGK.'
  });
  const KA7 = () => kt();
  const YCCD7A = 'Chủ điểm lấy theo danh mục ngữ pháp từng Unit trên trang tham khảo; chờ đối chiếu SGK Tiếng Anh 7 Global Success.';
  const mkTA7 = (id, ten, units, kien, ycc, muc, kd, tt, vd, ng, hd, ch) => ({ id, lop: 7, mon: 'anh', phanMon: 'Ngữ pháp', ten, sgk: 'Tiếng Anh 7 Global Success — ' + units + ' (chờ đối chiếu SGK)', yccdGhiChu: YCCD7A, kienThucTruoc: kien, yeuCauCanDat: ycc, bai: { mucTieu: muc, khoiDong: kd, trongTam: tt, viDu: vd, nguon: ng, hoiDap: hd }, cauHoi: ch });

  const ta7QuaKhu = mkTA7('ta7-qua-khu', 'Thì quá khứ đơn (kể việc đã làm)', 'Unit 3 "Community Service"', ['Quá khứ đơn (lớp 6, Unit 8)'],
    ['Dùng quá khứ đơn kể về hoạt động cộng đồng đã làm.', 'Viết đúng V-ed và động từ bất quy tắc thường gặp; câu phủ định, câu hỏi với did.'],
    ['chia V-ed đúng chính tả;', 'dùng did / didn\'t;', 'kể lại việc đã làm.'],
    { hoi: 'What did you do last weekend to help your community?', goiY: 'Ví dụ: I collected rubbish in the park.' },
    ['S + V-ed / V2 (đã làm). Dấu hiệu: yesterday, last…, … ago, in 2025.', 'Phủ định: didn\'t + V; câu hỏi: Did + S + V?', 'Bất quy tắc hay gặp: give – gave, make – made, take – took, teach – taught, buy – bought.'],
    { de: 'Kể: Năm ngoái lớp em quyên góp sách cũ.', loiGiai: 'Last year our class <b>donated</b> old books.' },
    N7A(3, 'A Closer Look 2 (Grammar)'), [{ tu: ['qua khu', 'did'], tl: 'Did + V gốc; didn\'t + V gốc.' }],
    [
      { id: 'TA7B-01', muc: 'co-ban', liDoMuc: 'Chia động từ có quy tắc.', loai: 'chu', de: 'Write the past form: <i>Last summer we ______ (help) old people in our village.</i> <span class="note">Một từ.</span>', chapNhan: ['helped'], loi: [{ mau: '^helps?$', danhDau: '*', nhan: 'Sai thì', phanHoi: 'Last summer → quá khứ.' }], goiY: ['+ed.'], viSaoDung: 'helped.', loiGiai: '<b>helped</b>.', giangLai: 'Last… → V-ed.', tienBo: 'Em đã chia đúng.', nguon: N7A(3, 'Grammar: past simple'), kiemTra: KA7(),
        tuongTu: { id: 'TA7B-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Write the past form: <i>They ______ (plant) trees two days ago.</i>', chapNhan: ['planted'], loi: [{ mau: '^plants?$', danhDau: '*', nhan: 'Sai thì', phanHoi: 'ago → quá khứ.' }], goiY: ['+ed.'], viSaoDung: 'planted.', loiGiai: '<b>planted</b>.', giangLai: '+ed.', nguon: N7A(3, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7B-02', muc: 'co-ban', liDoMuc: 'Động từ bất quy tắc.', loai: 'chon1', de: 'Choose: <i>Mai ______ some warm clothes to the children last winter.</i>', phuongAn: [{ t: 'gave', dung: true }, { t: 'gived', phanHoi: 'give bất quy tắc: gave.' }, { t: 'gives', phanHoi: 'last winter → quá khứ.' }, { t: 'given', phanHoi: 'Đó là quá khứ phân từ.' }], goiY: ['give → ?'], viSaoDung: 'gave.', loiGiai: '<b>gave</b>.', giangLai: 'give – gave – given.', tienBo: 'Em đã nhớ động từ bất quy tắc.', nguon: N7A(3, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7B-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>We ______ food for the homeless yesterday.</i>', phuongAn: [{ t: 'bought', dung: true }, { t: 'buyed', phanHoi: 'buy – bought.' }, { t: 'buys', phanHoi: 'Quá khứ.' }, { t: 'brought', phanHoi: 'brought là quá khứ của bring (mang).' }], goiY: ['buy → ?'], viSaoDung: 'bought.', loiGiai: '<b>bought</b>.', giangLai: 'buy – bought.', nguon: N7A(3, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7B-03', muc: 'van-dung', liDoMuc: 'Viết câu hỏi quá khứ.', loai: 'chu', de: 'Make a question: <i>Nam taught the children English.</i> → <b>Did …?</b>', chapNhan: ['did nam teach the children english'], loi: [{ mau: '\\bdid nam taught\\b', danhDau: 'taught', nhan: 'Lỗi động từ', phanHoi: 'Did + V gốc: teach.' }, { mau: '^does nam', danhDau: 'does', nhan: 'Sai thì', phanHoi: 'Quá khứ → Did.' }], goiY: ['Did + S + V?'], viSaoDung: 'Did Nam teach…?', loiGiai: '<b>Did Nam teach</b> the children English?', giangLai: 'Did gánh quá khứ → V về gốc.', tienBo: 'Em đã đặt câu hỏi đúng.', nguon: N7A(3, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7B-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Make the sentence negative: <i>They cleaned the beach.</i>', chapNhan: ["they didn't clean the beach", 'they did not clean the beach'], loi: [{ mau: "\\bdidn't cleaned\\b|\\bdid not cleaned\\b", danhDau: 'cleaned', nhan: 'Lỗi động từ', phanHoi: "didn't + V gốc." }, { mau: "\\bdon't\\b", danhDau: "don't", nhan: 'Sai thì', phanHoi: "didn't." }], goiY: ["didn't + V."], viSaoDung: "didn't clean.", loiGiai: "They <b>didn't clean</b> the beach.", giangLai: 'V về gốc.', nguon: N7A(3, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7B-04', muc: 'van-dung', liDoMuc: 'Chọn thì theo dấu hiệu trong câu.', loai: 'chon1', de: 'Choose: <i>Every Sunday my club ______ the park, but last Sunday we ______ the library.</i>', phuongAn: [{ t: 'cleans / painted', dung: true }, { t: 'cleaned / paint', phanHoi: 'Every Sunday → hiện tại; last Sunday → quá khứ.' }, { t: 'clean / painted', phanHoi: 'my club số ít → cleans.' }, { t: 'cleans / paints', phanHoi: 'last Sunday → quá khứ.' }], goiY: ['Hai dấu hiệu khác nhau.'], viSaoDung: 'cleans / painted.', loiGiai: '<b>cleans / painted</b>.', giangLai: 'Mỗi vế câu xét dấu hiệu riêng.', tienBo: 'Em đã phân biệt hai thì.', nguon: N7A(3, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7B-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>I usually ______ my grandma, but yesterday I ______ my aunt.</i>', phuongAn: [{ t: 'visit / visited', dung: true }, { t: 'visited / visit', phanHoi: 'Ngược.' }, { t: 'visits / visited', phanHoi: 'I → visit.' }, { t: 'visit / visit', phanHoi: 'yesterday → quá khứ.' }], goiY: ['usually / yesterday.'], viSaoDung: 'visit / visited.', loiGiai: '<b>visit / visited</b>.', giangLai: 'Xét từng vế.', nguon: N7A(3, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7B-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi quá khứ nhiều câu.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) Last month we collected 200 old books. (2) We taked them to a school. (3) The children was very happy. (4) Did you joined the project? (5) I felt proud.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', dung: true }, { t: 'Câu (5)', phanHoi: 'Đúng.' }], goiY: ['take, were, Did + V.'], viSaoDung: '(2) took; (3) were; (4) join.', loiGiai: '(2) <b>took</b>; (3) <b>were</b>; (4) Did you <b>join</b>.', giangLai: 'Ba bẫy: bất quy tắc, was/were, Did + V gốc.', tienBo: 'Em đã soát lỗi.', nguon: N7A(3, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7B-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) She maked cakes for the old people. (2) We were at the hospital. (3) He didn\'t went there. (4) They recycled bottles.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Đúng.' }], goiY: ['made; go.'], viSaoDung: '(1), (3).', loiGiai: '(1) made; (3) go.', giangLai: 'Ba bẫy.', nguon: N7A(3, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7B-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn kể hoạt động cộng đồng; câu mở.', loai: 'mo', de: 'Write <b>40–60 words</b> about a community activity you took part in. Use the past simple.',
        tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có ít nhất 4 động từ quá khứ.', tuDong: { mau: '\\b(\\w+ed|went|gave|made|took|was|were|bought|taught|had|felt|saw|got|came)\\b', toiThieu: 4 } }, { t: 'Có mốc thời gian quá khứ.', tuDong: { mau: '\\b(last|ago|yesterday|in 20\\d\\d)\\b', toiThieu: 1 } }, { t: "Không viết did + V-ed.", tuDong: { canhBao: "\\b(did|didn't) \\w+ed\\b", thongBao: 'Sau did / didn\'t dùng V gốc.' } }],
        baiThamKhao: 'Last month my class joined a project to help old people in our neighbourhood. We collected money and bought rice and milk for them. On Sunday we visited their houses and gave them the gifts. We also cleaned their gardens. They were very happy, and I felt proud of my class.', giupViet: 'Last … my class … We … We also … They were … I felt …', goiY: ['Khi nào, làm gì, cảm xúc.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Kể theo thứ tự thời gian, mỗi câu một việc.', tienBo: 'Em đã kể bằng quá khứ đơn.', nguon: N7A(3, 'Writing'), kiemTra: KA7(),
        tuongTu: { id: 'TA7B-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about what you did to help your family last weekend.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 3 động từ quá khứ.', tuDong: { mau: '\\b(\\w+ed|went|made|took|was|were|bought|had|got)\\b', toiThieu: 3 } }, { t: 'Có mốc thời gian.', tuDong: { mau: '\\b(last|ago|yesterday)\\b', toiThieu: 1 } }], baiThamKhao: 'Last weekend I helped my parents a lot. On Saturday I cleaned my room and washed the dishes. On Sunday I went to the market with my mother and cooked lunch with her. I was tired but happy.', giupViet: 'Last weekend I … On Saturday … On Sunday …', goiY: ['Thứ tự.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Mỗi câu một việc.', nguon: N7A(3, 'Writing'), kiemTra: KA7() } }
    ]);

  const ta7SoSanh = mkTA7('ta7-so-sanh-bang', 'So sánh: (not) as … as, like, different from', 'Unit 4 "Music and Arts"', ['So sánh hơn, nhất (lớp 6)'],
    ['Dùng as … as, not as … as để so sánh bằng / không bằng.', 'Dùng like (giống), different from (khác) để so sánh.'],
    ['dùng as + adj + as;', 'chuyển so sánh hơn sang not as … as;', 'dùng like / different from.'],
    { hoi: 'Is your sister as tall as you?', goiY: 'Ví dụ: Yes, she is as tall as me. / No, she isn\'t as tall as me.' },
    ['<b>as + adj + as</b>: bằng (Lan is as tall as Mai).', '<b>not as + adj + as</b>: không bằng (Pop music is not as old as folk music).', '<b>like</b>: giống (My picture is like yours). <b>different from</b>: khác (His painting is different from mine).', 'Giữa hai "as" là tính từ <b>nguyên dạng</b> (không -er).'],
    { de: 'Viết lại: The guitar is cheaper than the piano. → The piano is not …', loiGiai: 'The piano is <b>not as cheap as</b> the guitar.' },
    N7A(4, 'A Closer Look 2 (Grammar)'), [{ tu: ['as', 'bang'], tl: 'as + tính từ nguyên dạng + as.' }, { tu: ['like', 'different'], tl: 'like = giống; different from = khác.' }],
    [
      { id: 'TA7C-01', muc: 'co-ban', liDoMuc: 'Chọn dạng tính từ trong as … as.', loai: 'chon1', de: 'Choose: <i>This song is as ______ as that one.</i>', phuongAn: [{ t: 'beautiful', dung: true }, { t: 'more beautiful', phanHoi: 'Giữa as … as dùng tính từ nguyên dạng.' }, { t: 'most beautiful', phanHoi: 'Không.' }, { t: 'beautifuller', phanHoi: 'Không có dạng này.' }], goiY: ['as + adj + as.'], viSaoDung: 'Nguyên dạng.', loiGiai: '<b>beautiful</b>.', giangLai: 'Hai chữ "as" kẹp tính từ gốc.', tienBo: 'Em đã dùng as … as.', nguon: N7A(4, 'Grammar: comparisons'), kiemTra: KA7(),
        tuongTu: { id: 'TA7C-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>My drawing is ______ yours. (giống)</i>', phuongAn: [{ t: 'like', dung: true }, { t: 'different from', phanHoi: 'Khác.' }, { t: 'as', phanHoi: 'Thiếu tính từ.' }, { t: 'same', phanHoi: 'the same as.' }], goiY: ['giống.'], viSaoDung: 'like.', loiGiai: '<b>like</b>.', giangLai: 'like = giống.', nguon: N7A(4, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7C-02', muc: 'co-ban', liDoMuc: 'Chọn giới từ đi với different.', loai: 'chu', de: 'Complete: <i>Vietnamese folk music is different ______ rock music.</i> <span class="note">Một từ.</span>', chapNhan: ['from'], loi: [{ mau: '^(with|of|than|to)$', danhDau: '*', nhan: 'Sai giới từ', phanHoi: 'different <b>from</b>.' }], goiY: ['different + ?'], viSaoDung: 'from.', loiGiai: 'different <b>from</b>.', giangLai: 'Học cả cụm "different from".', tienBo: 'Em đã nhớ cụm từ.', nguon: N7A(4, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7C-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Complete: <i>Mai is as tall ______ her brother.</i> <span class="note">Một từ.</span>', chapNhan: ['as'], loi: [{ mau: '^than$', danhDau: 'than', nhan: 'Nhầm cấu trúc', phanHoi: 'as … as, không dùng than.' }], goiY: ['as … ?'], viSaoDung: 'as.', loiGiai: '<b>as</b>.', giangLai: 'as … as.', nguon: N7A(4, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7C-03', muc: 'van-dung', liDoMuc: 'Chuyển so sánh hơn sang not as … as.', loai: 'chu', nhieuCachDung: true, de: 'Rewrite: <i>Nam is taller than Minh.</i> → <b>Minh isn\'t …</b>', chapNhan: ["minh isn't as tall as nam", 'minh is not as tall as nam'], loi: [{ mau: '\\bas taller as\\b', danhDau: 'taller', nhan: 'Sai dạng tính từ', phanHoi: 'Giữa as … as: tall (nguyên dạng).' }, { mau: "\\bas tall as minh\\b", danhDau: 'minh', nhan: 'Đảo nhầm', phanHoi: 'Minh không cao bằng Nam: … as tall as Nam.' }, { mau: '\\bthan\\b', danhDau: 'than', nhan: 'Nhầm cấu trúc', phanHoi: 'not as … as.' }], goiY: ['Minh thấp hơn → không cao bằng.'], viSaoDung: "Minh isn't as tall as Nam.", loiGiai: "Minh <b>isn't as tall as</b> Nam.", giangLai: 'A hơn B ⇔ B không bằng A.', tienBo: 'Em đã đổi cấu trúc so sánh.', nguon: N7A(4, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7C-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: "Rewrite: <i>The violin is more expensive than the guitar.</i> → <b>The guitar isn't …</b>", chapNhan: ["the guitar isn't as expensive as the violin", 'the guitar is not as expensive as the violin'], loi: [{ mau: '\\bmore expensive\\b', danhDau: 'more', nhan: 'Sai dạng tính từ', phanHoi: 'Nguyên dạng.' }, { mau: '\\bthan\\b', danhDau: 'than', nhan: 'Nhầm cấu trúc', phanHoi: 'as … as.' }], goiY: ['not as expensive as.'], viSaoDung: "isn't as expensive as.", loiGiai: "The guitar <b>isn't as expensive as</b> the violin.", giangLai: 'Đổi chiều.', nguon: N7A(4, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7C-04', muc: 'van-dung', liDoMuc: 'Chọn cấu trúc theo dữ kiện.', loai: 'chon1', de: 'Bức tranh A và bức tranh B đều vẽ hoa sen, màu sắc gần như nhau. Câu nào phù hợp nhất?', phuongAn: [{ t: 'Picture A is like Picture B.', dung: true }, { t: 'Picture A is different from Picture B.', phanHoi: 'Hai tranh giống nhau.' }, { t: 'Picture A is more like than Picture B.', phanHoi: 'Sai cấu trúc.' }, { t: 'Picture A is as like as Picture B.', phanHoi: 'like không dùng trong as … as.' }], goiY: ['Giống nhau.'], viSaoDung: 'like.', loiGiai: '<b>Picture A is like Picture B.</b>', giangLai: 'like + danh từ.', tienBo: 'Em đã chọn đúng cấu trúc.', nguon: N7A(4, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7C-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Bạn A 13 tuổi, bạn B cũng 13 tuổi. Câu đúng:', phuongAn: [{ t: 'A is as old as B.', dung: true }, { t: 'A is older than B.', phanHoi: 'Bằng tuổi.' }, { t: 'A is as older as B.', phanHoi: 'Nguyên dạng.' }, { t: 'A is different from B in age.', phanHoi: 'Bằng tuổi.' }], goiY: ['Bằng.'], viSaoDung: 'as old as.', loiGiai: '<b>A is as old as B.</b>', giangLai: 'Bằng → as … as.', nguon: N7A(4, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7C-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi nhiều câu so sánh.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) Water puppetry is different from cheo. (2) This film is as more interesting as that one. (3) My voice is not as loud as yours. (4) Her style is like her mother\'s. (5) The drum is as heavy than the guitar.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'as interesting as.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', dung: true }, { t: 'Câu (5)', phanHoi: 'as heavy as.' }], goiY: ['as … as; from.'], viSaoDung: '(1), (3), (4).', loiGiai: '(1), (3), (4).', giangLai: 'Hai bẫy: thêm more / -er vào giữa, dùng than thay as.', tienBo: 'Em đã soát lỗi.', nguon: N7A(4, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7C-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) Your hat is like mine. (2) He is different with his brother. (3) The test was as easy as I thought. (4) My bag isn\'t as big as yours.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'different from.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', dung: true }], goiY: ['from.'], viSaoDung: '(1), (3), (4).', loiGiai: '(1), (3), (4).', giangLai: 'different from.', nguon: N7A(4, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7C-06', muc: 'nang-cao', liDoMuc: 'Viết câu so sánh từ bảng dữ kiện.', loai: 'chu', nhieuCachDung: true, de: 'Ticket for concert A: 100 000 đ. Ticket for concert B: 100 000 đ. Write one sentence with <b>as … as</b> and <b>expensive</b>.', chapNhan: ['ticket a is as expensive as ticket b', 'concert a ticket is as expensive as concert b ticket', 'the ticket for concert a is as expensive as the ticket for concert b', 'ticket b is as expensive as ticket a', 'the ticket for concert b is as expensive as the ticket for concert a'], loi: [{ mau: '\\bmore expensive\\b', danhDau: 'more', nhan: 'Sai dạng tính từ', phanHoi: 'Giữa as … as: expensive.' }, { mau: '\\bthan\\b', danhDau: 'than', nhan: 'Nhầm cấu trúc', phanHoi: 'as … as.' }, { mau: "\\bisn't as\\b|\\bis not as\\b", danhDau: ["isn't", 'not'], nhan: 'Sai nghĩa', phanHoi: 'Hai vé bằng giá → khẳng định.' }], goiY: ['Bằng giá.'], viSaoDung: 'Ticket A is as expensive as ticket B.', loiGiai: 'Ticket A is <b>as expensive as</b> ticket B.', giangLai: 'So dữ kiện trước, chọn cấu trúc sau.', tienBo: 'Em đã viết câu so sánh bằng.', nguon: N7A(4, 'Grammar'), kiemTra: KA7('Nhóm biên soạn liệt kê các cách viết đúng; giáo viên có thể bổ sung.'),
        tuongTu: { id: 'TA7C-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Song A: 3 minutes. Song B: 5 minutes. Write one sentence with <b>not as … as</b> and <b>long</b>.', chapNhan: ["song a isn't as long as song b", 'song a is not as long as song b'], loi: [{ mau: '\\blonger\\b', danhDau: 'longer', nhan: 'Sai dạng tính từ', phanHoi: 'long nguyên dạng.' }, { mau: '^song b is not|^song b isn', danhDau: '*', nhan: 'Sai nghĩa', phanHoi: 'Bài A ngắn hơn.' }], goiY: ['A ngắn hơn.'], viSaoDung: "Song A isn't as long as song B.", loiGiai: "Song A <b>isn't as long as</b> song B.", giangLai: 'So dữ kiện.', nguon: N7A(4, 'Grammar'), kiemTra: KA7() } }
    ]);

  const ta7LuongTu = mkTA7('ta7-luong-tu', 'Lượng từ: some, a lot of, lots of; How much / How many', 'Unit 5 "Food and Drink"', ['Danh từ đếm được / không đếm được (lớp 6)'],
    ['Dùng some, a lot of, lots of với danh từ đếm được và không đếm được.', 'Hỏi số lượng với How many (đếm được) và How much (không đếm được).'],
    ['chọn How much / How many;', 'dùng a lot of / lots of;', 'nói về món ăn, đồ uống.'],
    { hoi: 'How many eggs do we need to make an omelette?', goiY: 'We need two or three eggs.' },
    ['<b>some</b>, <b>a lot of</b>, <b>lots of</b> dùng được với cả danh từ đếm được số nhiều và không đếm được: a lot of eggs, a lot of milk.', '<b>How many</b> + danh từ đếm được số nhiều? (How many bananas…?)', '<b>How much</b> + danh từ không đếm được? (How much sugar…?) — How much cũng dùng để hỏi giá.'],
    { de: 'Hỏi lượng bơ cần dùng.', loiGiai: '<b>How much</b> butter do we need?' },
    N7A(5, 'A Closer Look 2 (Grammar)'), [{ tu: ['how much', 'how many'], tl: 'How many + đếm được số nhiều; How much + không đếm được.' }],
    [
      { id: 'TA7D-01', muc: 'co-ban', liDoMuc: 'Chọn How much / How many.', loai: 'chon1', de: 'Choose: <i>______ water do you drink every day?</i>', phuongAn: [{ t: 'How much', dung: true }, { t: 'How many', phanHoi: 'water không đếm được.' }, { t: 'How long', phanHoi: 'Hỏi thời gian.' }, { t: 'How often', phanHoi: 'Hỏi tần suất.' }], goiY: ['water đếm được không?'], viSaoDung: 'How much + không đếm được.', loiGiai: '<b>How much</b>.', giangLai: 'Đếm được (thêm -s) → many; không đếm được → much.', tienBo: 'Em đã chọn đúng.', nguon: N7A(5, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7D-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>______ apples are there in the fridge?</i>', phuongAn: [{ t: 'How many', dung: true }, { t: 'How much', phanHoi: 'apples đếm được.' }, { t: 'How old', phanHoi: 'Tuổi.' }, { t: 'How far', phanHoi: 'Khoảng cách.' }], goiY: ['apples.'], viSaoDung: 'How many.', loiGiai: '<b>How many</b>.', giangLai: '-s → many.', nguon: N7A(5, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7D-02', muc: 'co-ban', liDoMuc: 'Dùng a lot of.', loai: 'chu', de: 'Complete with one word: <i>My mum puts a lot ______ vegetables in the soup.</i>', chapNhan: ['of'], loi: [{ mau: '^(much|many|some)$', danhDau: '*', nhan: 'Thiếu cấu trúc', phanHoi: 'a lot <b>of</b>.' }], goiY: ['a lot + ?'], viSaoDung: 'of.', loiGiai: 'a lot <b>of</b>.', giangLai: 'a lot of = lots of.', tienBo: 'Em đã nhớ cụm a lot of.', nguon: N7A(5, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7D-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>There is ______ rice in the bowl.</i>', phuongAn: [{ t: 'a lot of', dung: true }, { t: 'many', phanHoi: 'rice không đếm được.' }, { t: 'a', phanHoi: 'Không.' }, { t: 'an', phanHoi: 'Không.' }], goiY: ['rice.'], viSaoDung: 'a lot of.', loiGiai: '<b>a lot of</b>.', giangLai: 'Dùng cả hai loại.', nguon: N7A(5, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7D-03', muc: 'van-dung', liDoMuc: 'Đặt câu hỏi số lượng.', loai: 'chu', nhieuCachDung: true, de: 'Write a question for the answer: <i>"We need <u>two kilos</u> of beef."</i>', chapNhan: ['how much beef do we need', 'how much beef do you need'], loi: [{ mau: '^how many beef', danhDau: 'many', nhan: 'Sai từ để hỏi', phanHoi: 'beef không đếm được → How much.' }, { mau: '^how many kilos', danhDau: '*', nhan: 'Chấp nhận được nhưng chưa đúng trọng tâm', phanHoi: 'Câu này đúng ngữ pháp nhưng bài luyện How much + danh từ không đếm được (beef).' }], goiY: ['beef đếm được không?'], viSaoDung: 'How much beef do we need?', loiGiai: '<b>How much beef do we need?</b>', giangLai: 'Hỏi về "thịt bò" → không đếm được → much.', tienBo: 'Em đã đặt câu hỏi.', nguon: N7A(5, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7D-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Write a question for the answer: <i>"I eat <u>three</u> bananas a day."</i>', chapNhan: ['how many bananas do you eat a day', 'how many bananas do you eat every day', 'how many bananas do you eat each day'], loi: [{ mau: '^how much bananas', danhDau: 'much', nhan: 'Sai từ để hỏi', phanHoi: 'bananas → many.' }], goiY: ['How many …?'], viSaoDung: 'How many bananas…?', loiGiai: '<b>How many bananas do you eat a day?</b>', giangLai: 'Đếm được → many.', nguon: N7A(5, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7D-04', muc: 'van-dung', liDoMuc: 'Hỏi giá với How much.', loai: 'chon1', de: 'Bạn muốn hỏi giá một bát phở. Câu đúng:', phuongAn: [{ t: 'How much is a bowl of pho?', dung: true }, { t: 'How many is a bowl of pho?', phanHoi: 'Hỏi giá dùng How much.' }, { t: 'How much are a bowl of pho?', phanHoi: 'a bowl → is.' }, { t: 'What much is pho?', phanHoi: 'Sai.' }], goiY: ['Hỏi giá.'], viSaoDung: 'How much is …?', loiGiai: '<b>How much is a bowl of pho?</b>', giangLai: 'Giá tiền → How much.', tienBo: 'Em đã hỏi giá.', nguon: N7A(5, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7D-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Hỏi giá hai cái bánh mì:', phuongAn: [{ t: 'How much are two banh mi?', dung: true }, { t: 'How much is two banh mi?', phanHoi: 'Số nhiều → are.' }, { t: 'How many are two banh mi?', phanHoi: 'Giá → much.' }, { t: 'How long are two banh mi?', phanHoi: 'Không.' }], goiY: ['Số nhiều.'], viSaoDung: 'are.', loiGiai: '<b>How much are two banh mi?</b>', giangLai: 'is/are theo danh từ.', nguon: N7A(5, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7D-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi lượng từ.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) How many milk do you need? (2) There are lots of eggs. (3) How much sugar is there? (4) I drink many water. (5) We need some flour.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', phanHoi: 'Đúng.' }, { t: 'Câu (4)', dung: true }, { t: 'Câu (5)', phanHoi: 'Đúng.' }], goiY: ['milk, water.'], viSaoDung: '(1) much; (4) a lot of.', loiGiai: '(1) How <b>much</b> milk; (4) <b>a lot of</b> water.', giangLai: 'many chỉ với đếm được.', tienBo: 'Em đã soát lỗi.', nguon: N7A(5, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7D-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) How much oranges do you want? (2) She eats a lot of fruit. (3) There is lots of cheese. (4) How many bread do we have?</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', phanHoi: 'Đúng.' }, { t: 'Câu (4)', dung: true }], goiY: ['oranges, bread.'], viSaoDung: '(1), (4).', loiGiai: '(1) many; (4) much.', giangLai: 'Đếm được / không.', nguon: N7A(5, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7D-06', muc: 'nang-cao', liDoMuc: 'Tự viết công thức món ăn ngắn; câu mở.', loai: 'mo', de: 'Write <b>30–50 words</b> about how to make a simple dish you like. Say what ingredients you need and how much / how many.',
        tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có some / a lot of / lots of.', tuDong: { mau: '\\b(some|a lot of|lots of)\\b', toiThieu: 1 } }, { t: 'Có số lượng hoặc đơn vị (two, a kilo, a cup…).', tuDong: { mau: '\\b(one|two|three|four|five|a cup|a kilo|grams?|spoons?|a bowl|a little)\\b', toiThieu: 1 } }, { t: 'Không dùng many với danh từ không đếm được.', tuDong: { canhBao: '\\bmany (milk|water|sugar|rice|flour|salt|oil|bread|beef|cheese)\\b', thongBao: 'many không đi với danh từ không đếm được.' } }],
        baiThamKhao: 'My favourite dish is an omelette. To make it, you need two eggs, a little salt, some oil and some spring onions. First, beat the eggs with the salt. Then heat the oil in a pan. Add the eggs and the onions and cook for three minutes.', giupViet: 'You need … First … Then … Finally …', goiY: ['Nguyên liệu và các bước.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Liệt kê nguyên liệu có số lượng, rồi các bước First – Then.', tienBo: 'Em đã viết công thức món ăn.', nguon: N7A(5, 'Writing'), kiemTra: KA7(),
        tuongTu: { id: 'TA7D-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about what you usually eat and drink for breakfast.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có some / a lot of / lots of.', tuDong: { mau: '\\b(some|a lot of|lots of)\\b', toiThieu: 1 } }, { t: 'Không dùng many với không đếm được.', tuDong: { canhBao: '\\bmany (milk|water|sugar|rice|bread|juice)\\b', thongBao: 'many không đi với danh từ không đếm được.' } }], baiThamKhao: 'For breakfast I usually have a bowl of noodles or some bread with eggs. I drink a glass of milk and a lot of water. At weekends my mother makes sticky rice with lots of peanuts. I love it.', giupViet: 'For breakfast I usually have … I drink …', goiY: ['Ăn gì, uống gì.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Đếm được / không.', nguon: N7A(5, 'Writing'), kiemTra: KA7() } }
    ]);

  const ta7GioiTu = mkTA7('ta7-gioi-tu-at-on-in', 'Giới từ chỉ thời gian và nơi chốn: at, on, in', 'Unit 6 "A Visit to a School"', ['Giới từ chỉ vị trí (lớp 6)'],
    ['Dùng at / on / in với thời gian: giờ, ngày, tháng, năm, buổi.', 'Dùng at / on / in với nơi chốn.'],
    ['chọn at / on / in cho thời gian;', 'chọn at / on / in cho nơi chốn;', 'tả lịch sinh hoạt ở trường.'],
    { hoi: 'When does your school year start?', goiY: 'It starts in September / on 5th September.' },
    ['Thời gian: <b>at</b> + giờ, at night, at the weekend; <b>on</b> + thứ, ngày (on Monday, on 5th September); <b>in</b> + tháng, năm, mùa, buổi (in May, in 2026, in summer, in the morning).', 'Nơi chốn: <b>at</b> + điểm cụ thể (at school, at the gate); <b>in</b> + trong không gian (in the classroom, in Ha Noi); <b>on</b> + trên bề mặt, tầng (on the wall, on the second floor).'],
    { de: 'Điền: Our class starts ___ 7 o\'clock ___ Monday.', loiGiai: '<b>at</b> 7 o\'clock <b>on</b> Monday.' },
    N7A(6, 'A Closer Look 2 (Grammar)'), [{ tu: ['at', 'on', 'in', 'thoi gian'], tl: 'at + giờ; on + thứ/ngày; in + tháng/năm/mùa/buổi.' }],
    [
      { id: 'TA7E-01', muc: 'co-ban', liDoMuc: 'at + giờ.', loai: 'chon1', de: 'Choose: <i>School finishes ______ 4.30 p.m.</i>', phuongAn: [{ t: 'at', dung: true }, { t: 'on', phanHoi: 'on + thứ, ngày.' }, { t: 'in', phanHoi: 'in + tháng, năm.' }, { t: 'by', phanHoi: 'Không phải trọng tâm.' }], goiY: ['Giờ.'], viSaoDung: 'at + giờ.', loiGiai: '<b>at</b>.', giangLai: 'Hình phễu: in (rộng) → on → at (hẹp nhất: giờ).', tienBo: 'Em đã chọn đúng.', nguon: N7A(6, 'Grammar: prepositions of time'), kiemTra: KA7(),
        tuongTu: { id: 'TA7E-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>We have a school trip ______ October.</i>', phuongAn: [{ t: 'in', dung: true }, { t: 'on', phanHoi: 'Tháng → in.' }, { t: 'at', phanHoi: 'Giờ.' }, { t: 'to', phanHoi: 'Không.' }], goiY: ['Tháng.'], viSaoDung: 'in.', loiGiai: '<b>in</b>.', giangLai: 'Phễu.', nguon: N7A(6, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7E-02', muc: 'co-ban', liDoMuc: 'on + ngày cụ thể.', loai: 'chu', de: 'Complete: <i>Teachers\' Day is ______ 20th November.</i> <span class="note">Một từ.</span>', chapNhan: ['on'], loi: [{ mau: '^in$', danhDau: 'in', nhan: 'Sai giới từ', phanHoi: 'Có ngày cụ thể → on.' }, { mau: '^at$', danhDau: 'at', nhan: 'Sai giới từ', phanHoi: 'at + giờ.' }], goiY: ['Ngày cụ thể.'], viSaoDung: 'on.', loiGiai: '<b>on</b> 20th November.', giangLai: 'Có số ngày → on (dù có tháng).', tienBo: 'Em đã dùng on cho ngày.', nguon: N7A(6, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7E-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Complete: <i>We play football ______ Saturday afternoons.</i>', chapNhan: ['on'], loi: [{ mau: '^in$', danhDau: 'in', nhan: 'Sai giới từ', phanHoi: 'Thứ + buổi → on.' }], goiY: ['Thứ.'], viSaoDung: 'on.', loiGiai: '<b>on</b>.', giangLai: 'Có thứ → on.', nguon: N7A(6, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7E-03', muc: 'van-dung', liDoMuc: 'Giới từ nơi chốn.', loai: 'chon1', de: 'Choose: <i>The computer room is ______ the second floor.</i>', phuongAn: [{ t: 'on', dung: true }, { t: 'in', phanHoi: 'Tầng → on.' }, { t: 'at', phanHoi: 'Không.' }, { t: 'under', phanHoi: 'Sai nghĩa.' }], goiY: ['floor.'], viSaoDung: 'on + floor.', loiGiai: '<b>on</b>.', giangLai: 'on the first / second floor.', tienBo: 'Em đã dùng on với tầng.', nguon: N7A(6, 'Grammar: prepositions of place'), kiemTra: KA7(),
        tuongTu: { id: 'TA7E-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>I\'ll wait for you ______ the school gate.</i>', phuongAn: [{ t: 'at', dung: true }, { t: 'in', phanHoi: 'Điểm cụ thể → at.' }, { t: 'on', phanHoi: 'Không.' }, { t: 'into', phanHoi: 'Không.' }], goiY: ['Điểm hẹn.'], viSaoDung: 'at.', loiGiai: '<b>at</b>.', giangLai: 'Điểm → at.', nguon: N7A(6, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7E-04', muc: 'van-dung', liDoMuc: 'Điền hai giới từ trong một câu.', loai: 'chu', de: 'Complete with two prepositions, separated by a space: <i>We start school ______ 7 a.m. ______ the morning.</i>', chapNhan: ['at in'], loi: [{ mau: '^in at$', danhDau: '*', nhan: 'Đảo thứ tự', phanHoi: 'Chỗ 1: giờ → at; chỗ 2: buổi → in.' }, { mau: '^on in$|^at on$', danhDau: '*', nhan: 'Sai giới từ', phanHoi: 'at 7 a.m.; in the morning.' }], goiY: ['Giờ / buổi.'], viSaoDung: 'at … in …', loiGiai: '<b>at</b> 7 a.m. <b>in</b> the morning.', giangLai: 'Xét từng chỗ trống.', tienBo: 'Em đã dùng hai giới từ.', nguon: N7A(6, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7E-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Complete with two prepositions: <i>My school was built ______ 1995 ______ Vung Tau.</i>', chapNhan: ['in in'], loi: [{ mau: '^on|^at', danhDau: '*', nhan: 'Sai giới từ', phanHoi: 'Năm → in; thành phố → in.' }], goiY: ['Năm, thành phố.'], viSaoDung: 'in … in.', loiGiai: '<b>in</b> 1995 <b>in</b> Vung Tau.', giangLai: 'Năm, thành phố → in.', nguon: N7A(6, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7E-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi giới từ.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) We have Maths on Tuesday. (2) The library opens in 8 a.m. (3) My birthday is in June. (4) I was born on 2013. (5) The students are in the schoolyard.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', phanHoi: 'Đúng.' }, { t: 'Câu (4)', dung: true }, { t: 'Câu (5)', phanHoi: 'Đúng.' }], goiY: ['Giờ, năm.'], viSaoDung: '(2) at; (4) in.', loiGiai: '(2) <b>at</b> 8 a.m.; (4) <b>in</b> 2013.', giangLai: 'Phễu in – on – at.', tienBo: 'Em đã soát lỗi.', nguon: N7A(6, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7E-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) She lives in Da Nang. (2) The concert is on 7 p.m. (3) We go swimming in summer. (4) The map is in the wall.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', phanHoi: 'Đúng.' }, { t: 'Câu (4)', dung: true }], goiY: ['Giờ, tường.'], viSaoDung: '(2) at; (4) on.', loiGiai: '(2), (4).', giangLai: 'Phễu.', nguon: N7A(6, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7E-06', muc: 'nang-cao', liDoMuc: 'Tự viết lịch một ngày ở trường; câu mở.', loai: 'mo', de: 'Write <b>30–50 words</b> about your school day. Use at least <b>three</b> of the prepositions at / on / in.',
        tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 3 giới từ at / on / in.', tuDong: { mau: '\\b(at|on|in)\\b', toiThieu: 3 } }, { t: 'Có giờ (… o\'clock / a.m. / p.m.).', tuDong: { mau: "\\b(o'clock|a\\.?m|p\\.?m|\\d{1,2}[.:]\\d{2})", toiThieu: 1 } }, { t: 'Không viết in + giờ / on + năm.', tuDong: { canhBao: "\\bin \\d{1,2}(\\.|:)?\\d{0,2} ?(a\\.?m|p\\.?m|o'clock)|\\bon (19|20)\\d\\d\\b", thongBao: 'Có thể sai giới từ: at + giờ, in + năm.' } }],
        baiThamKhao: 'I go to school from Monday to Friday. Classes start at 7 o\'clock in the morning. At break time I play in the schoolyard with my friends. On Wednesday afternoons I have a computer lesson on the third floor. School finishes at 4.30 p.m.', giupViet: 'Classes start at … in the morning. On … I … School finishes at …', goiY: ['Giờ, thứ, buổi, tầng.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Kiểm tra từng giới từ bằng "phễu".', tienBo: 'Em đã tả ngày học bằng tiếng Anh.', nguon: N7A(6, 'Writing'), kiemTra: KA7(),
        tuongTu: { id: 'TA7E-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about your weekend routine with at / on / in.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 3 giới từ at / on / in.', tuDong: { mau: '\\b(at|on|in)\\b', toiThieu: 3 } }, { t: 'Không viết in + giờ.', tuDong: { canhBao: "\\bin \\d{1,2} ?(a\\.?m|p\\.?m|o'clock)", thongBao: 'at + giờ.' } }], baiThamKhao: 'On Saturday I get up at 7 o\'clock. In the morning I help my mother at home. On Sunday afternoon I play badminton in the park. In the evening I watch TV with my family.', giupViet: 'On Saturday I … at … In the morning …', goiY: ['Thứ, giờ, buổi.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Phễu.', nguon: N7A(6, 'Writing'), kiemTra: KA7() } }
    ]);

  const ta7KhoangCach = mkTA7('ta7-it-khoang-cach', 'It is … from … to … (khoảng cách); should / shouldn\'t', 'Unit 7 "Traffic"', ['should / shouldn\'t (lớp 6)'],
    ['Dùng "It is + khoảng cách + from … to …" và hỏi "How far is it from … to …?".', 'Dùng should / shouldn\'t nêu lời khuyên an toàn giao thông.'],
    ['nói khoảng cách bằng It;', 'hỏi How far;', 'khuyên về an toàn giao thông.'],
    { hoi: 'How far is it from your house to school?', goiY: 'It is about 2 kilometres.' },
    ['<b>It is (about) + khoảng cách + from A to B.</b> (It is about 3 km from my house to school.) — chủ ngữ là <b>It</b>, không dùng "This" hay "There".', 'Hỏi: <b>How far is it from A to B?</b>', 'Lời khuyên: You <b>should</b> wear a helmet. You <b>shouldn\'t</b> ride too fast. (should + V nguyên mẫu)'],
    { de: 'Nói: từ nhà em đến chợ khoảng 500 m.', loiGiai: '<b>It is about 500 metres from</b> my house <b>to</b> the market.' },
    N7A(7, 'A Closer Look 2 (Grammar)'), [{ tu: ['how far', 'it is'], tl: 'How far is it from … to …? — It is about … km.' }, { tu: ['should'], tl: 'should + V: nên.' }],
    [
      { id: 'TA7F-01', muc: 'co-ban', liDoMuc: 'Chủ ngữ It chỉ khoảng cách.', loai: 'chon1', de: 'Choose: <i>______ is about 5 kilometres from my village to the town.</i>', phuongAn: [{ t: 'It', dung: true }, { t: 'There', phanHoi: 'Khoảng cách dùng It is …' }, { t: 'This', phanHoi: 'Không dùng This.' }, { t: 'That', phanHoi: 'Không.' }], goiY: ['It chỉ khoảng cách.'], viSaoDung: 'It is … from … to …', loiGiai: '<b>It</b>.', giangLai: '"It" ở đây không dịch là "nó" — chỉ là chủ ngữ giả cho khoảng cách.', tienBo: 'Em đã dùng It đúng.', nguon: N7A(7, 'Grammar: it indicating distance'), kiemTra: KA7(),
        tuongTu: { id: 'TA7F-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>How ______ is it from Ha Noi to Hai Phong?</i>', phuongAn: [{ t: 'far', dung: true }, { t: 'long', phanHoi: 'Hỏi khoảng cách → far.' }, { t: 'much', phanHoi: 'Không.' }, { t: 'many', phanHoi: 'Không.' }], goiY: ['Khoảng cách.'], viSaoDung: 'far.', loiGiai: '<b>far</b>.', giangLai: 'How far = bao xa.', nguon: N7A(7, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7F-02', muc: 'co-ban', liDoMuc: 'Lời khuyên an toàn giao thông.', loai: 'chon1', de: 'Choose: <i>When you cycle, you ______ wear a helmet.</i>', phuongAn: [{ t: 'should', dung: true }, { t: 'shouldn\'t', phanHoi: 'Đội mũ là việc nên làm.' }, { t: 'should to', phanHoi: 'Không có to.' }, { t: 'don\'t', phanHoi: 'Sai nghĩa.' }], goiY: ['Nên.'], viSaoDung: 'should.', loiGiai: '<b>should</b>.', giangLai: 'should + V.', tienBo: 'Em đã đưa lời khuyên.', nguon: N7A(7, 'Grammar: should / shouldn\'t'), kiemTra: KA7(),
        tuongTu: { id: 'TA7F-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>You ______ cross the street when the light is red.</i>', phuongAn: [{ t: "shouldn't", dung: true }, { t: 'should', phanHoi: 'Sai luật.' }, { t: 'should not to', phanHoi: 'Thừa to.' }, { t: 'can', phanHoi: 'Sai nghĩa.' }], goiY: ['Không nên.'], viSaoDung: "shouldn't.", loiGiai: "<b>shouldn't</b>.", giangLai: 'Không nên → shouldn\'t.', nguon: N7A(7, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7F-03', muc: 'van-dung', liDoMuc: 'Viết câu khoảng cách từ gợi ý.', loai: 'chu', nhieuCachDung: true, de: 'Write a sentence: (3 km / my house / school)', chapNhan: ['it is 3 km from my house to school', 'it is about 3 km from my house to school', "it's 3 km from my house to school", "it's about 3 km from my house to school", 'it is 3 kilometres from my house to school', 'it is about 3 kilometres from my house to school', 'it is three kilometres from my house to school', 'it is about three kilometres from my house to school', 'it is 3 km from my house to my school', 'it is about 3 km from my house to my school'], loi: [{ mau: '^there is', danhDau: 'there', nhan: 'Sai chủ ngữ', phanHoi: 'Khoảng cách: It is …' }, { mau: '^my house is 3', danhDau: '*', nhan: 'Chưa đúng cấu trúc bài', phanHoi: 'Câu đúng nghĩa nhưng bài luyện cấu trúc "It is … from … to …".' }, { mau: '\\bfrom school to my house\\b', danhDau: '*', nhan: 'Đảo thứ tự', phanHoi: 'Theo gợi ý: from my house to school.' }], goiY: ['It is … from … to …'], viSaoDung: 'It is 3 km from my house to school.', loiGiai: '<b>It is (about) 3 km from my house to school.</b>', giangLai: 'Khung: It is + số + from + A + to + B.', tienBo: 'Em đã viết câu khoảng cách.', nguon: N7A(7, 'Grammar'), kiemTra: KA7('Chấp nhận viết km / kilometres, có hoặc không "about".'),
        tuongTu: { id: 'TA7F-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Write a question asking the distance from Vung Tau to Ho Chi Minh City.', chapNhan: ['how far is it from vung tau to ho chi minh city'], loi: [{ mau: '^how long is it', danhDau: 'long', nhan: 'Sai từ để hỏi', phanHoi: 'How far.' }, { mau: '^how far from', danhDau: '*', nhan: 'Thiếu "is it"', phanHoi: 'How far is it from …?' }], goiY: ['How far is it …?'], viSaoDung: 'How far is it from … to …?', loiGiai: '<b>How far is it from Vung Tau to Ho Chi Minh City?</b>', giangLai: 'How far is it.', nguon: N7A(7, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7F-04', muc: 'van-dung', liDoMuc: 'Chọn lời khuyên theo biển báo.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các lời khuyên <b>đúng</b> về an toàn giao thông.', phuongAn: [{ t: 'You should obey traffic rules.', dung: true }, { t: 'You should ride three on a bike.', phanHoi: 'Không an toàn.' }, { t: 'You shouldn\'t use your phone while riding.', dung: true }, { t: 'You should look left and right before crossing.', dung: true }, { t: 'You shouldn\'t wear a seatbelt in a car.', phanHoi: 'Phải thắt dây an toàn.' }], goiY: ['Việc nào an toàn?'], viSaoDung: 'Ý 1, 3, 4.', loiGiai: 'Ý 1, 3, 4.', giangLai: 'should + việc an toàn; shouldn\'t + việc nguy hiểm.', tienBo: 'Em đã chọn lời khuyên đúng.', nguon: N7A(7, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7F-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng ngữ pháp</b>.', phuongAn: [{ t: 'You should wear a helmet.', dung: true }, { t: 'He should to stop.', phanHoi: 'Thừa to.' }, { t: 'It is 2 km from here to the station.', dung: true }, { t: 'There is 2 km from here to the station.', phanHoi: 'Dùng It.' }], goiY: ['should + V; It is.'], viSaoDung: 'Ý 1, 3.', loiGiai: 'Ý 1, 3.', giangLai: 'Hai cấu trúc.', nguon: N7A(7, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7F-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi nhiều câu.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) How far is it from your house to the park? (2) This is 1 km from my home to the lake. (3) We should to follow the signs. (4) It is about 10 km from here to the beach. (5) You shouldn\'t riding fast.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Đúng.' }, { t: 'Câu (5)', dung: true }], goiY: ['It; should + V.'], viSaoDung: '(2) It; (3) should follow; (5) shouldn\'t ride.', loiGiai: '(2), (3), (5).', giangLai: 'It cho khoảng cách; modal + V gốc.', tienBo: 'Em đã soát lỗi.', nguon: N7A(7, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7F-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) How long is it from A to B? (hỏi khoảng cách) (2) You should stop at the red light. (3) It is far from here to there. (4) She shouldn\'t crosses here.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', phanHoi: 'Đúng.' }, { t: 'Câu (4)', dung: true }], goiY: ['far; cross.'], viSaoDung: '(1), (4).', loiGiai: '(1) How far; (4) cross.', giangLai: 'Hai cấu trúc.', nguon: N7A(7, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7F-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn về đường đến trường; câu mở.', loai: 'mo', de: 'Write <b>40–60 words</b> about how you go to school. Say how far it is and give at least <b>two</b> pieces of advice for road safety.',
        tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có câu "It is … from … to …".', tuDong: { mau: "\\bit(\\s+is|'s)\\b.*?\\bfrom\\b.*?\\bto\\b", toiThieu: 1 } }, { t: 'Có ít nhất 2 câu should / shouldn\'t.', tuDong: { mau: "\\bshould(n't)?\\b", toiThieu: 2 } }, { t: 'Không viết should to / There is + khoảng cách.', tuDong: { canhBao: "\\bshould(n't)? to\\b|\\bthere is (about )?\\d+ ?(km|kilometres|metres|m)\\b", thongBao: 'Có thể có lỗi: should + V; It is + khoảng cách.' } }],
        baiThamKhao: 'I go to school by bike every day. It is about 2 kilometres from my house to school. The road is busy in the morning, so I always ride carefully. I think students should wear helmets and should stop at red lights. We shouldn\'t ride side by side or use phones while riding.', giupViet: 'I go to school by … It is about … from … to … Students should … We shouldn\'t …', goiY: ['Phương tiện, khoảng cách, lời khuyên.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Ba phần: cách đi – khoảng cách – lời khuyên.', tienBo: 'Em đã viết về an toàn giao thông.', nguon: N7A(7, 'Writing'), kiemTra: KA7(),
        tuongTu: { id: 'TA7F-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> giving advice to a new student about traffic near your school.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 2 câu should / shouldn\'t.', tuDong: { mau: "\\bshould(n't)?\\b", toiThieu: 2 } }, { t: 'Không viết should to.', tuDong: { canhBao: "\\bshould(n't)? to\\b", thongBao: 'should + V.' } }], baiThamKhao: 'The road in front of our school is very busy. You should cross at the zebra crossing and look carefully. You should arrive early to avoid the crowd. You shouldn\'t stop your bike in the middle of the road.', giupViet: 'You should … You shouldn\'t …', goiY: ['Lời khuyên.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'should + V.', nguon: N7A(7, 'Writing'), kiemTra: KA7() } }
    ]);

  const ta7Although = mkTA7('ta7-although-however', 'Liên từ although / though và however', 'Unit 8 "Films"', ['Liên từ and, but, so (lớp 6)'],
    ['Dùng although / though nối hai mệnh đề trái ngược trong một câu.', 'Dùng however nối hai câu trái ngược.'],
    ['nối câu bằng although;', 'nối câu bằng however;', 'chọn liên từ đúng vị trí.'],
    { hoi: 'Do you like horror films? Why / why not?', goiY: 'Although horror films are exciting, I don\'t like them.' },
    ['<b>Although / Though + mệnh đề 1, mệnh đề 2</b>: Mặc dù … nhưng … (Although the film was long, it was interesting.) — <b>không</b> dùng thêm "but".', '<b>Câu 1. However, câu 2.</b> (The film was long. However, it was interesting.) — however đứng đầu câu thứ hai, sau dấu chấm (hoặc chấm phẩy) và trước dấu phẩy.'],
    { de: 'Nối: The tickets were expensive. We enjoyed the film. (although)', loiGiai: '<b>Although</b> the tickets were expensive, we enjoyed the film.' },
    N7A(8, 'A Closer Look 2 (Grammar)'), [{ tu: ['although', 'though'], tl: 'Although + mệnh đề, mệnh đề — không thêm but.' }, { tu: ['however'], tl: '… . However, …' }],
    [
      { id: 'TA7G-01', muc: 'co-ban', liDoMuc: 'Chọn liên từ trái ngược.', loai: 'chon1', de: 'Choose: <i>______ the film was scary, I watched it to the end.</i>', phuongAn: [{ t: 'Although', dung: true }, { t: 'Because', phanHoi: 'Hai ý trái ngược, không phải nguyên nhân.' }, { t: 'So', phanHoi: 'Không.' }, { t: 'However', phanHoi: 'however không đứng đầu mệnh đề phụ như thế này.' }], goiY: ['Mặc dù.'], viSaoDung: 'Although = mặc dù.', loiGiai: '<b>Although</b>.', giangLai: 'Although = "Mặc dù …"; cả câu chỉ cần một liên từ.', tienBo: 'Em đã chọn đúng.', nguon: N7A(8, 'Grammar: although, though, however'), kiemTra: KA7(),
        tuongTu: { id: 'TA7G-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>The cartoon was for children. ______, adults loved it too.</i>', phuongAn: [{ t: 'However', dung: true }, { t: 'Although', phanHoi: 'Đứng sau dấu chấm, trước dấu phẩy → However.' }, { t: 'Because', phanHoi: 'Không.' }, { t: 'And', phanHoi: 'Ý trái ngược.' }], goiY: ['Sau dấu chấm.'], viSaoDung: 'However.', loiGiai: '<b>However</b>.', giangLai: '. However, …', nguon: N7A(8, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7G-02', muc: 'co-ban', liDoMuc: 'Phát hiện lỗi thừa but.', loai: 'chon1', de: 'Câu nào <b>đúng</b>?', phuongAn: [{ t: 'Although it rained, we went to the cinema.', dung: true }, { t: 'Although it rained, but we went to the cinema.', phanHoi: 'Không dùng but sau although.' }, { t: 'Although it rained. We went to the cinema.', phanHoi: 'Although nối trong một câu, dùng dấu phẩy.' }, { t: 'It rained, although but we went.', phanHoi: 'Sai.' }], goiY: ['Một liên từ.'], viSaoDung: 'Although …, …', loiGiai: '<b>Although it rained, we went to the cinema.</b>', giangLai: 'Tiếng Việt nói "mặc dù … nhưng …", tiếng Anh chỉ dùng một: although.', tienBo: 'Em đã tránh lỗi thừa but.', nguon: N7A(8, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7G-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Câu nào <b>đúng</b>?', phuongAn: [{ t: 'The film is old. However, it is still popular.', dung: true }, { t: 'The film is old, however it is still popular, but.', phanHoi: 'Sai.' }, { t: 'However the film is old, it is still popular.', phanHoi: 'Dùng Although ở đây.' }, { t: 'The film is old however, it is popular.', phanHoi: 'Dấu câu sai.' }], goiY: ['. However,'], viSaoDung: 'Câu 1.', loiGiai: '<b>The film is old. However, it is still popular.</b>', giangLai: 'Chấm – However – phẩy.', nguon: N7A(8, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7G-03', muc: 'van-dung', liDoMuc: 'Nối hai câu bằng although.', loai: 'chu', nhieuCachDung: true, de: 'Combine using <b>although</b>: <i>The film was long. It was very interesting.</i>', chapNhan: ['although the film was long it was very interesting', 'the film was very interesting although it was long', 'it was very interesting although the film was long'], loi: [{ mau: '\\bbut\\b', danhDau: 'but', nhan: 'Thừa but', phanHoi: 'Không dùng but cùng although.' }, { mau: '\\bhowever\\b', danhDau: 'however', nhan: 'Sai liên từ', phanHoi: 'Đề yêu cầu although.' }], goiY: ['Although + câu 1, câu 2.'], viSaoDung: 'Although the film was long, it was very interesting.', loiGiai: '<b>Although</b> the film was long, it was very interesting.', giangLai: 'Đặt although trước ý "bất lợi" (long).', tienBo: 'Em đã nối câu bằng although.', nguon: N7A(8, 'Grammar'), kiemTra: KA7('Chấp nhận although ở đầu hoặc giữa câu.'),
        tuongTu: { id: 'TA7G-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Combine using <b>however</b>: <i>I don\'t like action films. I enjoyed this one.</i>', chapNhan: ["i don't like action films. however i enjoyed this one", "i don't like action films however i enjoyed this one", "i don't like action films; however i enjoyed this one"], loi: [{ mau: '\\balthough\\b', danhDau: 'although', nhan: 'Sai liên từ', phanHoi: 'Yêu cầu however.' }, { mau: '\\bbut\\b', danhDau: 'but', nhan: 'Sai liên từ', phanHoi: 'Yêu cầu however.' }], goiY: ['. However,'], viSaoDung: '. However, …', loiGiai: "I don't like action films. <b>However</b>, I enjoyed this one.", giangLai: 'Chấm – However – phẩy.', nguon: N7A(8, 'Grammar'), kiemTra: KA7('Bộ chấm điểm bỏ qua dấu câu; giáo viên nhắc học sinh viết đúng ". However,".') } },
      { id: 'TA7G-04', muc: 'van-dung', liDoMuc: 'Chọn although / however theo vị trí.', loai: 'chon1', de: 'Choose: <i>The tickets were cheap. ______, the cinema was almost empty.</i>', phuongAn: [{ t: 'However', dung: true }, { t: 'Although', phanHoi: 'Đứng đầu câu thứ hai, trước dấu phẩy → However.' }, { t: 'Because', phanHoi: 'Không.' }, { t: 'So', phanHoi: 'Ý trái ngược.' }], goiY: ['Vị trí và dấu câu.'], viSaoDung: 'However.', loiGiai: '<b>However</b>.', giangLai: 'Sau dấu chấm + có dấu phẩy ngay sau → However.', tienBo: 'Em đã chọn theo vị trí.', nguon: N7A(8, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7G-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>______ she was tired, she finished watching the film.</i>', phuongAn: [{ t: 'Though', dung: true }, { t: 'However', phanHoi: 'Đầu câu ghép một mệnh đề → Though.' }, { t: 'But', phanHoi: 'Không đứng đầu.' }, { t: 'So', phanHoi: 'Không.' }], goiY: ['Mặc dù.'], viSaoDung: 'Though.', loiGiai: '<b>Though</b>.', giangLai: 'Though = although.', nguon: N7A(8, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7G-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi nhiều câu.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) Although the story was sad, I liked the ending. (2) Though it was late, but we watched another film. (3) The actors were good. However, the plot was boring. (4) However the film was short, it was fun. (5) We enjoyed the film although it was a bit scary.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Thừa but.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Dùng Although.' }, { t: 'Câu (5)', dung: true }], goiY: ['Thừa but? Đúng vị trí?'], viSaoDung: '(1), (3), (5).', loiGiai: '(1), (3), (5).', giangLai: 'Hai bẫy: although + but; dùng however như although.', tienBo: 'Em đã soát lỗi.', nguon: N7A(8, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7G-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu <b>đúng</b>.<br><i>(1) Although I was busy, I went to the cinema. (2) It was cold. However, we went out. (3) Although it was cheap, but nobody came. (4) Though the film was long, it was great.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', phanHoi: 'Thừa but.' }, { t: 'Câu (4)', dung: true }], goiY: ['but.'], viSaoDung: '(1), (2), (4).', loiGiai: '(1), (2), (4).', giangLai: 'Không but.', nguon: N7A(8, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7G-06', muc: 'nang-cao', liDoMuc: 'Tự viết nhận xét về một bộ phim; câu mở.', loai: 'mo', de: 'Write <b>40–60 words</b> reviewing a film you have seen. Use <b>although</b> (or though) and <b>however</b> at least once each.',
        tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có although / though.', tuDong: { mau: '\\b(although|though)\\b', toiThieu: 1 } }, { t: 'Có however.', tuDong: { mau: '\\bhowever\\b', toiThieu: 1 } }, { t: 'Không dùng although … but.', tuDong: { canhBao: '\\b(although|though)\\b[^.]*\\bbut\\b', thongBao: 'Không dùng but cùng although.' } }],
        baiThamKhao: 'Last week I watched "Coco", an animated film about a boy who loves music. Although it is a cartoon, it has a deep message about family. The music is beautiful and the characters are funny. However, some scenes are a little sad. I think everyone should watch it.', giupViet: 'Tên phim, nội dung → Although … , … → However, … → Ý kiến.', goiY: ['Ưu điểm, nhược điểm.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Một câu although, một câu however.', tienBo: 'Em đã viết nhận xét phim.', nguon: N7A(8, 'Writing'), kiemTra: KA7(),
        tuongTu: { id: 'TA7G-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about a TV programme you watch, using although and however.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có although / though.', tuDong: { mau: '\\b(although|though)\\b', toiThieu: 1 } }, { t: 'Có however.', tuDong: { mau: '\\bhowever\\b', toiThieu: 1 } }], baiThamKhao: 'I often watch a quiz show on Saturday evenings. Although the questions are difficult, I learn a lot from them. The host is very funny. However, the show finishes quite late, so I cannot watch it every week.', giupViet: 'Although … However …', goiY: ['Một ưu, một nhược.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Hai liên từ.', nguon: N7A(8, 'Writing'), kiemTra: KA7() } }
    ]);

  const ta7YesNo = mkTA7('ta7-cau-hoi-yes-no', 'Câu hỏi Yes / No', 'Unit 9 "Festivals Around the World" (Yes/No questions); Unit 2 (simple sentences)', ['Các thì đã học: hiện tại đơn, quá khứ đơn, hiện tại tiếp diễn'],
    ['Đặt câu hỏi Yes/No với be, do/does/did, can, will.', 'Trả lời ngắn Yes, … / No, …'],
    ['đảo trợ động từ;', 'chọn trợ động từ theo thì;', 'trả lời ngắn đúng.'],
    { hoi: 'Did you go to the Mid-Autumn Festival last year?', goiY: 'Yes, I did. / No, I didn\'t.' },
    ['Có động từ be / can / will: <b>đưa lên đầu</b>: Is it fun? Can you dance? Will they come?', 'Động từ thường: dùng <b>Do / Does / Did + S + V nguyên mẫu?</b>', 'Trả lời ngắn lặp lại trợ động từ: Yes, I do. / No, she doesn\'t. / Yes, they did.'],
    { de: 'Đặt câu hỏi: People wear costumes at Halloween.', loiGiai: '<b>Do people wear</b> costumes at Halloween?' },
    N7A(9, 'A Closer Look 2 (Grammar)'), [{ tu: ['yes', 'no', 'cau hoi'], tl: 'be/can/will lên đầu; động từ thường: Do/Does/Did + S + V.' }],
    [
      { id: 'TA7H-01', muc: 'co-ban', liDoMuc: 'Chọn trợ động từ hiện tại.', loai: 'chon1', de: 'Choose: <i>______ your family make banh chung at Tet?</i>', phuongAn: [{ t: 'Does', dung: true }, { t: 'Do', phanHoi: 'your family (số ít) → Does.' }, { t: 'Is', phanHoi: 'Có động từ thường make.' }, { t: 'Did', phanHoi: 'Thói quen → hiện tại.' }], goiY: ['family số ít.'], viSaoDung: 'Does + S + V.', loiGiai: '<b>Does</b>.', giangLai: 'Chủ ngữ số ít → Does.', tienBo: 'Em đã chọn đúng trợ động từ.', nguon: N7A(9, 'Grammar: Yes/No questions'), kiemTra: KA7(),
        tuongTu: { id: 'TA7H-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>______ the festival fun last night?</i>', phuongAn: [{ t: 'Was', dung: true }, { t: 'Did', phanHoi: 'Có tính từ fun → be.' }, { t: 'Were', phanHoi: 'festival số ít.' }, { t: 'Is', phanHoi: 'last night → quá khứ.' }], goiY: ['be, quá khứ.'], viSaoDung: 'Was.', loiGiai: '<b>Was</b>.', giangLai: 'be + tính từ.', nguon: N7A(9, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7H-02', muc: 'co-ban', liDoMuc: 'Trả lời ngắn.', loai: 'chon1', de: 'A: <i>Did you watch the fireworks?</i> — B: <i>Yes, ______.</i>', phuongAn: [{ t: 'I did', dung: true }, { t: 'I watched', phanHoi: 'Trả lời ngắn lặp lại trợ động từ did.' }, { t: 'I do', phanHoi: 'Câu hỏi dùng Did.' }, { t: 'I was', phanHoi: 'Không.' }], goiY: ['Did → did.'], viSaoDung: 'Yes, I did.', loiGiai: '<b>Yes, I did.</b>', giangLai: 'Hỏi bằng gì, trả lời bằng nấy.', tienBo: 'Em đã trả lời ngắn.', nguon: N7A(9, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7H-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'A: <i>Can you play the lion dance drum?</i> — B: <i>No, ______.</i>', phuongAn: [{ t: "I can't", dung: true }, { t: "I don't", phanHoi: 'Can → can\'t.' }, { t: "I didn't", phanHoi: 'Không.' }, { t: 'I not', phanHoi: 'Sai.' }], goiY: ['Can.'], viSaoDung: "No, I can't.", loiGiai: "<b>No, I can't.</b>", giangLai: 'Lặp lại.', nguon: N7A(9, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7H-03', muc: 'van-dung', liDoMuc: 'Chuyển câu khẳng định thành câu hỏi.', loai: 'chu', de: 'Make a Yes/No question: <i>She went to the Lantern Festival in Hoi An.</i>', chapNhan: ['did she go to the lantern festival in hoi an'], loi: [{ mau: '\\bdid she went\\b', danhDau: 'went', nhan: 'Lỗi động từ', phanHoi: 'Did + V gốc: go.' }, { mau: '^does she', danhDau: 'does', nhan: 'Sai thì', phanHoi: 'went → quá khứ → Did.' }, { mau: '^she went', danhDau: '*', nhan: 'Chưa đảo', phanHoi: 'Cần Did ở đầu.' }], goiY: ['Did + S + V?'], viSaoDung: 'Did she go…?', loiGiai: '<b>Did she go</b> to the Lantern Festival in Hoi An?', giangLai: 'went → Did … go.', tienBo: 'Em đã đặt câu hỏi.', nguon: N7A(9, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7H-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Make a Yes/No question: <i>They are decorating the house for Christmas.</i>', chapNhan: ['are they decorating the house for christmas'], loi: [{ mau: '^do they', danhDau: 'do', nhan: 'Sai trợ động từ', phanHoi: 'Có be (are) → đưa lên đầu.' }], goiY: ['Are …?'], viSaoDung: 'Are they decorating…?', loiGiai: '<b>Are they decorating</b> the house for Christmas?', giangLai: 'be lên đầu.', nguon: N7A(9, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7H-04', muc: 'van-dung', liDoMuc: 'Câu hỏi với will / can.', loai: 'chu', de: 'Make a Yes/No question: <i>The festival will start at 8 p.m.</i>', chapNhan: ['will the festival start at 8 p.m', 'will the festival start at 8 pm', 'will the festival start at 8 p.m.'], loi: [{ mau: '^does the festival', danhDau: 'does', nhan: 'Sai trợ động từ', phanHoi: 'Có will → đưa will lên đầu.' }, { mau: '\\bwill the festival starts\\b', danhDau: 'starts', nhan: 'Lỗi động từ', phanHoi: 'will + V gốc.' }], goiY: ['Will + S + V?'], viSaoDung: 'Will the festival start…?', loiGiai: '<b>Will the festival start</b> at 8 p.m.?', giangLai: 'Modal lên đầu.', tienBo: 'Em đã đảo will.', nguon: N7A(9, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7H-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Make a Yes/No question: <i>Children can join the parade.</i>', chapNhan: ['can children join the parade'], loi: [{ mau: '^do children', danhDau: 'do', nhan: 'Sai trợ động từ', phanHoi: 'can lên đầu.' }], goiY: ['Can + S + V?'], viSaoDung: 'Can children join…?', loiGiai: '<b>Can children join</b> the parade?', giangLai: 'Modal lên đầu.', nguon: N7A(9, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7H-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi câu hỏi.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu hỏi <b>đúng</b>.<br><i>(1) Do you like Tet? (2) Does she enjoys the festival? (3) Did they visit the pagoda? (4) Are you go to the parade? (5) Is Diwali a festival of lights?</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Does + enjoy.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Are you going / Do you go.' }, { t: 'Câu (5)', dung: true }], goiY: ['Trợ động từ + V gốc.'], viSaoDung: '(1), (3), (5).', loiGiai: '(1), (3), (5).', giangLai: 'Không trộn be và do.', tienBo: 'Em đã soát lỗi câu hỏi.', nguon: N7A(9, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7H-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ</b> các câu hỏi <b>đúng</b>.<br><i>(1) Did he wore a mask? (2) Can you see the moon? (3) Do they celebrate Easter? (4) Is she likes music?</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'wear.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Does she like.' }], goiY: ['V gốc.'], viSaoDung: '(2), (3).', loiGiai: '(2), (3).', giangLai: 'V gốc.', nguon: N7A(9, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7H-06', muc: 'nang-cao', liDoMuc: 'Tự đặt câu hỏi phỏng vấn; nhiều đáp án.', loai: 'chu', nhieuCachDung: true, de: 'Bạn muốn hỏi bạn mới (một người Ấn Độ) xem bạn ấy có tổ chức lễ hội Diwali <b>năm ngoái</b> không. Viết một câu hỏi Yes/No với "celebrate".', chapNhan: ['did you celebrate diwali last year'], loi: [{ mau: '\\bdid you celebrated\\b', danhDau: 'celebrated', nhan: 'Lỗi động từ', phanHoi: 'Did + V gốc.' }, { mau: '^do you celebrate', danhDau: 'do', nhan: 'Sai thì', phanHoi: 'last year → Did.' }, { mau: '^you celebrated', danhDau: '*', nhan: 'Chưa đảo', phanHoi: 'Did ở đầu.' }], goiY: ['last year → Did.'], viSaoDung: 'Did you celebrate Diwali last year?', loiGiai: '<b>Did you celebrate Diwali last year?</b>', giangLai: 'Xác định thì → chọn trợ động từ → V gốc.', tienBo: 'Em đã tự đặt câu hỏi.', nguon: N7A(9, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7H-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Hỏi bạn xem bạn ấy <b>có thường</b> ăn bánh trung thu vào Tết Trung thu không (dùng "eat mooncakes" và "at the Mid-Autumn Festival").', chapNhan: ['do you eat mooncakes at the mid-autumn festival', 'do you usually eat mooncakes at the mid-autumn festival', 'do you often eat mooncakes at the mid-autumn festival'], loi: [{ mau: '^did you', danhDau: 'did', nhan: 'Sai thì', phanHoi: 'Thói quen → Do.' }, { mau: '\\bdo you eats\\b', danhDau: 'eats', nhan: 'Lỗi động từ', phanHoi: 'V gốc.' }], goiY: ['Thói quen → Do.'], viSaoDung: 'Do you eat…?', loiGiai: '<b>Do you (usually) eat mooncakes at the Mid-Autumn Festival?</b>', giangLai: 'Thì → trợ động từ.', nguon: N7A(9, 'Grammar'), kiemTra: KA7() } }
    ]);

  const ta7TiepDienTuongLai = mkTA7('ta7-tiep-dien-tuong-lai', 'Hiện tại tiếp diễn và tương lai đơn', 'Unit 10 "Energy Sources" (present continuous); Unit 11 "Travelling in the Future" (future simple)', ['Hiện tại tiếp diễn, will (lớp 6)'],
    ['Dùng hiện tại tiếp diễn nói việc đang diễn ra.', 'Dùng will + V nói về phương tiện, cuộc sống tương lai.'],
    ['chia am/is/are + V-ing đúng chính tả;', 'dùng will / won\'t;', 'phân biệt việc đang xảy ra và việc tương lai.'],
    { hoi: 'What are people doing to save energy now? What will cars be like in 2050?', goiY: 'People are using solar panels. Cars will fly.' },
    ['<b>Hiện tại tiếp diễn</b>: am / is / are + V-ing (now, at the moment, these days). Chính tả: make → making, run → running.', '<b>Tương lai đơn</b>: will + V (sẽ); won\'t + V. Dấu hiệu: in the future, in 2050, next year.'],
    { de: 'Tả: Bây giờ nhiều gia đình đang dùng bóng LED; trong tương lai xe hơi sẽ chạy bằng điện.', loiGiai: 'Many families <b>are using</b> LED bulbs now. In the future, cars <b>will run</b> on electricity.' },
    N7A('10–11', 'A Closer Look 2 (Grammar)'), [{ tu: ['tiep dien', 'ving'], tl: 'am/is/are + V-ing.' }, { tu: ['will', 'tuong lai'], tl: 'will + V.' }],
    [
      { id: 'TA7I-01', muc: 'co-ban', liDoMuc: 'Chia hiện tại tiếp diễn.', loai: 'chu', de: 'Write the correct form: <i>Look! The workers ______ (put) solar panels on the roof.</i>', chapNhan: ['are putting'], loi: [{ mau: '\\bputing\\b', danhDau: 'puting', nhan: 'Lỗi chính tả', phanHoi: 'put → putting (gấp đôi t).' }, { mau: '^is putting$', danhDau: 'is', nhan: 'Sai to be', phanHoi: 'The workers số nhiều → are.' }, { mau: '^put(s)?$', danhDau: '*', nhan: 'Sai thì', phanHoi: 'Look! → tiếp diễn.' }], goiY: ['Look!'], viSaoDung: 'are putting.', loiGiai: '<b>are putting</b>.', giangLai: 'Phụ âm – nguyên âm – phụ âm → gấp đôi: putting, running.', tienBo: 'Em đã chia đúng.', nguon: N7A(10, 'Grammar: present continuous'), kiemTra: KA7(),
        tuongTu: { id: 'TA7I-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Write the correct form: <i>My dad ______ (use) less electricity these days.</i>', chapNhan: ['is using'], loi: [{ mau: '\\buseing\\b', danhDau: 'useing', nhan: 'Lỗi chính tả', phanHoi: 'use → using.' }, { mau: '^are using$', danhDau: 'are', nhan: 'Sai to be', phanHoi: 'My dad → is.' }], goiY: ['these days.'], viSaoDung: 'is using.', loiGiai: '<b>is using</b>.', giangLai: 'Bỏ e + ing.', nguon: N7A(10, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7I-02', muc: 'co-ban', liDoMuc: 'Chọn will + V.', loai: 'chon1', de: 'Choose: <i>In 2050, people ______ in driverless cars.</i>', phuongAn: [{ t: 'will travel', dung: true }, { t: 'will travelling', phanHoi: 'will + V nguyên mẫu.' }, { t: 'are travel', phanHoi: 'Sai.' }, { t: 'travelled', phanHoi: 'Tương lai.' }], goiY: ['In 2050.'], viSaoDung: 'will travel.', loiGiai: '<b>will travel</b>.', giangLai: 'Mốc tương lai → will.', tienBo: 'Em đã dùng will.', nguon: N7A(11, 'Grammar: future simple'), kiemTra: KA7(),
        tuongTu: { id: 'TA7I-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>Petrol cars ______ be popular in the future, I think.</i>', phuongAn: [{ t: "won't", dung: true }, { t: "don't", phanHoi: 'Tương lai.' }, { t: "willn't", phanHoi: "won't." }, { t: "aren't", phanHoi: 'Không.' }], goiY: ['will not.'], viSaoDung: "won't.", loiGiai: "<b>won't</b>.", giangLai: "will not = won't.", nguon: N7A(11, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7I-03', muc: 'van-dung', liDoMuc: 'Phân biệt hai thì trong ngữ cảnh.', loai: 'chon1', de: 'Choose: <i>Right now my family ______ solar energy, and next year we ______ a wind turbine.</i>', phuongAn: [{ t: 'is using / will buy', dung: true }, { t: 'will use / is buying', phanHoi: 'Right now → tiếp diễn; next year → will.' }, { t: 'uses / buy', phanHoi: 'Sai dấu hiệu.' }, { t: 'is using / buys', phanHoi: 'next year → will.' }], goiY: ['Hai dấu hiệu.'], viSaoDung: 'is using / will buy.', loiGiai: '<b>is using / will buy</b>.', giangLai: 'Mỗi vế một dấu hiệu.', tienBo: 'Em đã phân biệt thì.', nguon: N7A('10–11', 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7I-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>Scientists ______ a new bus now. It ______ on hydrogen.</i>', phuongAn: [{ t: 'are testing / will run', dung: true }, { t: 'will test / is running', phanHoi: 'now → tiếp diễn.' }, { t: 'test / run', phanHoi: 'Sai.' }, { t: 'are test / will running', phanHoi: 'Sai dạng.' }], goiY: ['now / tương lai.'], viSaoDung: 'are testing / will run.', loiGiai: '<b>are testing / will run</b>.', giangLai: 'Hai dấu hiệu.', nguon: N7A('10–11', 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7I-04', muc: 'van-dung', liDoMuc: 'Viết câu will theo gợi ý.', loai: 'chu', nhieuCachDung: true, de: 'Write a sentence with <b>will</b>: (people / travel / by flying car / in the future)', chapNhan: ['people will travel by flying car in the future', 'in the future people will travel by flying car'], loi: [{ mau: '\\bwill travels\\b|\\bwill travelling\\b', danhDau: '*', nhan: 'Lỗi động từ', phanHoi: 'will + V gốc.' }, { mau: '\\bwill to\\b', danhDau: 'to', nhan: 'Thừa to', phanHoi: 'will + V.' }], goiY: ['S + will + V.'], viSaoDung: 'People will travel…', loiGiai: 'People <b>will travel</b> by flying car in the future.', giangLai: 'Ghép theo thứ tự.', tienBo: 'Em đã viết câu tương lai.', nguon: N7A(11, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7I-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', nhieuCachDung: true, de: 'Write a sentence in the present continuous: (we / save / energy / at the moment)', chapNhan: ['we are saving energy at the moment', 'at the moment we are saving energy'], loi: [{ mau: '\\bsaveing\\b', danhDau: 'saveing', nhan: 'Lỗi chính tả', phanHoi: 'saving.' }, { mau: '\\bwe is\\b', danhDau: 'is', nhan: 'Sai to be', phanHoi: 'we → are.' }], goiY: ['are + V-ing.'], viSaoDung: 'We are saving…', loiGiai: 'We <b>are saving</b> energy at the moment.', giangLai: 'Bỏ e + ing.', nguon: N7A(10, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7I-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi hai thì.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) Many people are using electric bikes now. (2) In 2040 we will lives on Mars. (3) She is writeing a report about wind power. (4) Trains will be faster in the future. (5) They are build a solar farm.</i>', phuongAn: [{ t: 'Câu (1)', phanHoi: 'Đúng.' }, { t: 'Câu (2)', dung: true }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Đúng.' }, { t: 'Câu (5)', dung: true }], goiY: ['will + V; V-ing.'], viSaoDung: '(2) live; (3) writing; (5) building.', loiGiai: '(2), (3), (5).', giangLai: 'Ba bẫy: will + V-s; chính tả -ing; thiếu -ing.', tienBo: 'Em đã soát lỗi.', nguon: N7A('10–11', 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7I-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) We will to use more solar energy. (2) He is running to school now. (3) Cars won\'t need drivers. (4) I am study about energy now.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', phanHoi: 'Đúng.' }, { t: 'Câu (4)', dung: true }], goiY: ['to; -ing.'], viSaoDung: '(1), (4).', loiGiai: '(1) will use; (4) studying.', giangLai: 'Bẫy.', nguon: N7A('10–11', 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7I-06', muc: 'nang-cao', liDoMuc: 'Tự viết đoạn về phương tiện tương lai; câu mở.', loai: 'mo', de: 'Write <b>40–60 words</b> about a means of transport in the future. Use <b>will</b> at least three times.',
        tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có ít nhất 3 lần will / won\'t + V.', tuDong: { mau: "\\b(will|won't) \\w+", toiThieu: 3 } }, { t: 'Không viết will + to / V-s / V-ing.', tuDong: { canhBao: "\\b(will|won't) (to|\\w+ing)\\b|\\bwill (runs|flies|goes|uses|takes)\\b", thongBao: 'Có thể có lỗi: will + V nguyên mẫu.' } }],
        baiThamKhao: 'In the future, I think people will travel by solar-powered flying cars. These cars will be small and quiet. They will fly over traffic jams, so we will save a lot of time. They won\'t produce smoke, so the air will be cleaner. I hope I will have one.', giupViet: 'In the future, people will travel by … It will be … It will … It won\'t …', goiY: ['Tên phương tiện, đặc điểm, lợi ích.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Mỗi đặc điểm một câu will.', tienBo: 'Em đã viết về tương lai.', nguon: N7A(11, 'Writing'), kiemTra: KA7(),
        tuongTu: { id: 'TA7I-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about what your family is doing to save energy now. Use the present continuous at least twice.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 2 câu tiếp diễn.', tuDong: { mau: "\\b(am|is|are|'m|'s|'re) \\w+ing\\b", toiThieu: 2 } }], baiThamKhao: 'My family is trying to save energy these days. We are using LED bulbs in every room. My father is cycling to work instead of driving. My sister and I are turning off the lights when we leave a room.', giupViet: 'These days we are …-ing …', goiY: ['these days.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'am/is/are + V-ing.', nguon: N7A(10, 'Writing'), kiemTra: KA7() } }
    ]);

  const ta7MaoTu = mkTA7('ta7-mao-tu', 'Mạo từ a / an / the và không mạo từ', 'Unit 12 "English-speaking Countries"', ['Mạo từ a / an / the (lớp 6)'],
    ['Dùng a / an / the đúng.', 'Biết khi nào không dùng mạo từ (tên quốc gia, châu lục, ngôn ngữ, môn học…).', 'Dùng the với tên một số quốc gia, đại dương, sông.'],
    ['chọn a / an theo âm;', 'dùng the với vật xác định, đại dương;', 'bỏ mạo từ với tên quốc gia, ngôn ngữ.'],
    { hoi: 'Which English-speaking country would you like to visit?', goiY: 'I would like to visit Australia / the United Kingdom.' },
    ['<b>a / an</b>: danh từ số ít, nhắc lần đầu (a koala, an island).', '<b>the</b>: vật xác định / đã biết; tên đại dương, sông, dãy núi; một số nước có "Kingdom, States, Republic": <b>the</b> United Kingdom, <b>the</b> USA.', '<b>Không mạo từ</b>: tên phần lớn quốc gia, thành phố, châu lục (Australia, Canada, London, Asia), ngôn ngữ (English), môn học, bữa ăn.'],
    { de: 'Điền: ___ Thames is ___ river in ___ London.', loiGiai: '<b>The</b> Thames is <b>a</b> river in London (không mạo từ trước London).' },
    N7A(12, 'A Closer Look 2 (Grammar)'), [{ tu: ['the', 'quoc gia'], tl: 'Phần lớn tên nước không dùng the; trừ the UK, the USA, the Philippines…' }, { tu: ['a', 'an'], tl: 'a + âm phụ âm; an + âm nguyên âm.' }],
    [
      { id: 'TA7J-01', muc: 'co-ban', liDoMuc: 'Không mạo từ trước tên nước.', loai: 'chon1', de: 'Choose: <i>Kangaroos live in ______ Australia.</i>', phuongAn: [{ t: '(không mạo từ)', dung: true }, { t: 'the', phanHoi: 'Australia không dùng the.' }, { t: 'a', phanHoi: 'Không.' }, { t: 'an', phanHoi: 'Không.' }], goiY: ['Tên nước.'], viSaoDung: 'Không mạo từ.', loiGiai: 'in <b>Australia</b> (không mạo từ).', giangLai: 'Phần lớn tên nước: không the.', tienBo: 'Em đã bỏ mạo từ đúng.', nguon: N7A(12, 'Grammar: articles'), kiemTra: KA7(),
        tuongTu: { id: 'TA7J-01-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>London is the capital of ______ United Kingdom.</i>', phuongAn: [{ t: 'the', dung: true }, { t: '(không mạo từ)', phanHoi: 'Có "Kingdom" → the.' }, { t: 'a', phanHoi: 'Không.' }, { t: 'an', phanHoi: 'Không.' }], goiY: ['Kingdom.'], viSaoDung: 'the.', loiGiai: '<b>the</b> United Kingdom.', giangLai: 'Kingdom, States → the.', nguon: N7A(12, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7J-02', muc: 'co-ban', liDoMuc: 'a / an theo âm.', loai: 'chon1', de: 'Choose: <i>New Zealand is ______ island country.</i>', phuongAn: [{ t: 'an', dung: true }, { t: 'a', phanHoi: 'island bắt đầu bằng âm nguyên âm /aɪ/.' }, { t: 'the', phanHoi: 'Giới thiệu lần đầu.' }, { t: '(không mạo từ)', phanHoi: 'Danh từ số ít cần mạo từ.' }], goiY: ['Âm đầu.'], viSaoDung: 'an island.', loiGiai: '<b>an</b>.', giangLai: 'Nghe âm, không nhìn chữ.', tienBo: 'Em đã chọn a/an.', nguon: N7A(12, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7J-02-TT', muc: 'co-ban', liDoMuc: 'Như câu gốc.', loai: 'chon1', de: 'Choose: <i>She is ______ university student in Canada.</i>', phuongAn: [{ t: 'a', dung: true }, { t: 'an', phanHoi: 'university đọc /juː/ → a.' }, { t: 'the', phanHoi: 'Không.' }, { t: '(không)', phanHoi: 'Cần a.' }], goiY: ['/juː/.'], viSaoDung: 'a.', loiGiai: '<b>a</b>.', giangLai: 'Theo âm.', nguon: N7A(12, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7J-03', muc: 'van-dung', liDoMuc: 'the với đại dương / sông.', loai: 'chu', de: 'Complete with <b>a</b>, <b>an</b>, <b>the</b> or <b>x</b> (không mạo từ): <i>Hawaii is in ______ Pacific Ocean.</i>', chapNhan: ['the'], loi: [{ mau: '^(a|an|x)$', danhDau: '*', nhan: 'Sai mạo từ', phanHoi: 'Tên đại dương → the.' }], goiY: ['Ocean.'], viSaoDung: 'the Pacific Ocean.', loiGiai: '<b>the</b> Pacific Ocean.', giangLai: 'Đại dương, sông, biển → the.', tienBo: 'Em đã dùng the với đại dương.', nguon: N7A(12, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7J-03-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Complete with a / an / the / x: <i>People in Canada speak ______ English and French.</i>', chapNhan: ['x'], loi: [{ mau: '^(a|an|the)$', danhDau: '*', nhan: 'Sai mạo từ', phanHoi: 'Ngôn ngữ → không mạo từ (gõ x).' }], goiY: ['Ngôn ngữ.'], viSaoDung: 'x.', loiGiai: 'speak English (không mạo từ) → <b>x</b>.', giangLai: 'Ngôn ngữ không mạo từ.', nguon: N7A(12, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7J-04', muc: 'van-dung', liDoMuc: 'a lần đầu, the lần sau.', loai: 'chu', de: 'Complete with two articles, separated by a space: <i>I saw ______ koala in the zoo. ______ koala was sleeping in a tree.</i>', chapNhan: ['a the'], loi: [{ mau: '^the the$|^a a$', danhDau: '*', nhan: 'Sai mạo từ', phanHoi: 'Lần đầu: a; lần hai: the.' }, { mau: '^an', danhDau: 'an', nhan: 'Sai a/an', phanHoi: 'koala bắt đầu bằng âm /k/ → a.' }], goiY: ['Lần đầu / lần sau.'], viSaoDung: 'a … the …', loiGiai: '<b>a</b> koala … <b>The</b> koala …', giangLai: 'Nhắc lại → the.', tienBo: 'Em đã dùng a/the đúng.', nguon: N7A(12, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7J-04-TT', muc: 'van-dung', liDoMuc: 'Như câu gốc.', loai: 'chu', de: 'Complete with two articles: <i>We visited ______ old castle in Scotland. ______ castle was 600 years old.</i>', chapNhan: ['an the'], loi: [{ mau: '^a the$', danhDau: 'a', nhan: 'Sai a/an', phanHoi: 'old → an.' }, { mau: '^the', danhDau: 'the', nhan: 'Sai mạo từ', phanHoi: 'Lần đầu không dùng the.' }], goiY: ['old.'], viSaoDung: 'an … the.', loiGiai: '<b>an</b> … <b>The</b>.', giangLai: 'Âm + lần nhắc.', nguon: N7A(12, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7J-05', muc: 'nang-cao', liDoMuc: 'Soát lỗi mạo từ.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) The Canada is a big country. (2) The USA has 50 states. (3) I want to learn the English. (4) Canberra is the capital of Australia. (5) There is an university in my town.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', dung: true }, { t: 'Câu (4)', phanHoi: 'Đúng: Canberra không mạo từ; the capital (xác định).' }, { t: 'Câu (5)', dung: true }], goiY: ['Tên nước, ngôn ngữ, âm /juː/.'], viSaoDung: '(1) Canada; (3) English; (5) a university.', loiGiai: '(1), (3), (5).', giangLai: 'Ba bẫy: the + tên nước; the + ngôn ngữ; an + university.', tienBo: 'Em đã soát lỗi.', nguon: N7A(12, 'Grammar'), kiemTra: KA7(),
        tuongTu: { id: 'TA7J-05-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'chonNhieu', de: '<b>Chọn TẤT CẢ các câu có lỗi sai</b>.<br><i>(1) She lives in the London. (2) The Thames is a long river. (3) Ireland is a green country. (4) He is a honest man.</i>', phuongAn: [{ t: 'Câu (1)', dung: true }, { t: 'Câu (2)', phanHoi: 'Đúng.' }, { t: 'Câu (3)', phanHoi: 'Đúng.' }, { t: 'Câu (4)', dung: true }], goiY: ['Thành phố; honest /ɒ/.'], viSaoDung: '(1), (4).', loiGiai: '(1) London; (4) an honest.', giangLai: 'Theo âm.', nguon: N7A(12, 'Grammar'), kiemTra: KA7() } },
      { id: 'TA7J-06', muc: 'nang-cao', liDoMuc: 'Tự viết giới thiệu một nước nói tiếng Anh; câu mở.', loai: 'mo', de: 'Write <b>40–60 words</b> about an English-speaking country you would like to visit. Use a / an / the correctly.',
        tieuChi: [{ t: 'Độ dài 40–60 từ.', tuDong: { soTu: [40, 60] } }, { t: 'Có ít nhất 3 mạo từ a / an / the.', tuDong: { mau: '\\b(a|an|the)\\b', toiThieu: 3 } }, { t: 'Không viết the + tên nước thông thường / the English.', tuDong: { canhBao: '\\bthe (canada|australia|england|scotland|ireland|london|english|new zealand)\\b|\\ban (university|uniform|european)\\b', thongBao: 'Có thể sai mạo từ.' } }],
        baiThamKhao: 'I would like to visit Australia. It is a big country with many beautiful beaches. Its capital is Canberra, but the biggest city is Sydney. I want to see the Great Barrier Reef and take a photo of a kangaroo. People there speak English, so I can practise speaking with them.', giupViet: 'I would like to visit … It is a … Its capital is … I want to see the … and a …', goiY: ['Tên nước, thủ đô, nơi muốn đến.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Kiểm tra từng mạo từ: lần đầu / xác định / tên riêng.', tienBo: 'Em đã viết đoạn văn dùng mạo từ.', nguon: N7A(12, 'Writing'), kiemTra: KA7(),
        tuongTu: { id: 'TA7J-06-TT', muc: 'nang-cao', liDoMuc: 'Như câu gốc.', loai: 'mo', de: 'Write <b>30–50 words</b> about a famous place in an English-speaking country.', tieuChi: [{ t: 'Độ dài 30–50 từ.', tuDong: { soTu: [30, 50] } }, { t: 'Có ít nhất 2 mạo từ.', tuDong: { mau: '\\b(a|an|the)\\b', toiThieu: 2 } }, { t: 'Không viết the + tên nước thông thường.', tuDong: { canhBao: '\\bthe (canada|australia|england|scotland|london|english)\\b', thongBao: 'Có thể sai mạo từ.' } }], baiThamKhao: 'Big Ben is a famous clock tower in London. It is next to the River Thames. Many tourists take photos of it every day. At night, the tower looks beautiful with its lights.', giupViet: '… is a famous … in … It is next to the …', goiY: ['Địa danh.'], viSaoDung: '', loiGiai: 'Xem bài tham khảo.', giangLai: 'Ba quy tắc.', nguon: N7A(12, 'Writing'), kiemTra: KA7() } }
    ]);

  /* ------------------------------------------------------------------
     DANH MỤC CẢ 4 KHỐI — tên chủ đề dự kiến theo mạch nội dung,
     CHƯA đối chiếu số bài / Unit / trang. "id" chỉ có ở chủ đề đã soạn.
     ------------------------------------------------------------------ */
  const danhMuc = {
    6: {
      khtn: [['Mở đầu', 'Mở đầu về KHTN: an toàn, kính lúp, đo lường', 'kh6-mo-dau', 'Chương I · Bài 1–8 · SGV tr. 18'], ['Hóa học', 'Các thể của chất và sự chuyển thể', 'hh6-the-chat', 'Bài 9–10 · SGV tr. 44'], ['Hóa học', 'Oxygen và không khí', 'hh6-oxygen-khong-khi', 'Bài 11 · SGV tr. 61'], ['Hóa học', 'Vật liệu, nguyên liệu, nhiên liệu, lương thực – thực phẩm', 'hh6-vat-lieu', 'Chương III · Bài 12–15 · SGV tr. 71'], ['Hóa học', 'Hỗn hợp và tách chất khỏi hỗn hợp', 'hh6-hon-hop', 'Bài 16–17 · SGV tr. 91'], ['Sinh học', 'Tế bào – đơn vị cơ sở của sự sống', 'sh6-te-bao', 'Bài 18–21 · SGV tr. 106'], ['Sinh học', 'Từ tế bào đến cơ thể', 'sh6-co-the', 'Chương VI · Bài 22–24 · SGV tr. 119'], ['Sinh học', 'Đa dạng thế giới sống', 'sh6-da-dang-song', 'Bài 25–39 · SGV tr. 129'], ['Vật lí', 'Lực trong đời sống', 'vl6-luc', 'Bài 40–45 · SGV tr. 178'], ['Vật lí', 'Năng lượng', 'vl6-nang-luong', 'Bài 46–51 · SGV tr. 197'], ['Vật lí', 'Trái Đất và bầu trời', 'vl6-trai-dat-bau-troi', 'Chương X · Bài 52–55 · SGV tr. 215']],
      toan: [['Số và Đại số', 'Tập hợp các số tự nhiên', 'toan6-so-tu-nhien', 'Chương I · Bài 1–7 · SGV tr. 26'], ['Số và Đại số', 'Tính chia hết trong tập hợp số tự nhiên', 'toan6-chia-het', 'Chương II · Bài 8–12 · SGV tr. 50'], ['Số và Đại số', 'Số nguyên', 'toan6-so-nguyen', 'Chương III · Bài 13–17 · SGV tr. 73'], ['Số và Đại số', 'Phân số', 'toan6-phan-so', 'Chương VI · Bài 23–27 · SGV tr. 131'], ['Số và Đại số', 'Số thập phân', 'toan6-so-thap-phan', 'Chương VII · Bài 28–31 · SGV tr. 150']],
      anh: [['Ngữ pháp', 'Thì hiện tại đơn và hiện tại tiếp diễn', 'ta6-hien-tai', 'Unit 1, Unit 3'], ['Ngữ pháp', 'Giới từ chỉ vị trí và sở hữu cách', 'ta6-gioi-tu', 'Units 1–3 (Review 1)'], ['Ngữ pháp', 'So sánh hơn của tính từ', 'ta6-so-sanh-hon', 'Unit 4'], ['Từ vựng', 'Trường học, nhà ở, bạn bè', 'ta6-tu-vung', 'Units 1–3'], ['Đọc hiểu – Viết', 'Đọc hiểu và viết đoạn văn miêu tả ngắn', 'ta6-doc-viet', 'Unit 1, Unit 4'], ['Ngữ pháp', 'Danh từ đếm được, không đếm được; some / any', 'ta6-dem-duoc', 'Unit 5, Unit 6'], ['Ngữ pháp', 'must / mustn\'t và should / shouldn\'t', 'ta6-must-should', 'Unit 5, Unit 6'], ['Ngữ pháp', 'Wh-questions và liên từ', 'ta6-wh-lien-tu', 'Unit 7'], ['Ngữ pháp', 'Quá khứ đơn và câu mệnh lệnh', 'ta6-qua-khu-don', 'Unit 8'], ['Ngữ pháp', 'Tính từ sở hữu và đại từ sở hữu', 'ta6-so-huu', 'Unit 9'], ['Ngữ pháp', 'Tương lai đơn (will) và might', 'ta6-tuong-lai', 'Unit 10'], ['Ngữ pháp', 'Mạo từ và câu điều kiện loại 1', 'ta6-mao-tu-dieu-kien', 'Unit 11'], ['Ngữ pháp', 'So sánh nhất của tính từ', 'ta6-so-sanh-nhat', 'Unit 12']]
    },
    7: {
      khtn: [['Hóa học', 'Nguyên tử', 'hh7-nguyen-tu', 'Bài 2 · tr. 14'], ['Hóa học', 'Nguyên tố hoá học và bảng tuần hoàn', 'hh7-bang-tuan-hoan', 'Bài 3–4 · tr. 19'], ['Hóa học', 'Phân tử, liên kết hoá học, hoá trị', 'hh7-phan-tu', 'Chương II · Bài 5–7 · tr. 32'], ['Vật lí', 'Tốc độ chuyển động', 'vl7-toc-do', 'Bài 8 · tr. 45'], ['Vật lí', 'Đo tốc độ, đồ thị quãng đường – thời gian, an toàn giao thông', 'vl7-do-thi', 'Bài 9–11 · tr. 49'], ['Vật lí', 'Âm thanh', 'vl7-am-thanh', 'Chương IV · Bài 12–14 · tr. 60'], ['Vật lí', 'Ánh sáng', 'vl7-anh-sang', 'Chương V · Bài 15–17 · tr. 72'], ['Vật lí', 'Từ', 'vl7-tu', 'Chương VI · Bài 18–20 · tr. 86'], ['Sinh học', 'Quang hợp ở thực vật', 'sh7-quang-hop', 'Bài 22–24 · tr. 101'], ['Sinh học', 'Hô hấp tế bào và trao đổi khí', 'sh7-ho-hap', 'Bài 25–28 · tr. 111'], ['Sinh học', 'Trao đổi nước và chất dinh dưỡng', 'sh7-nuoc-dinh-duong', 'Bài 29–32 · tr. 122'], ['Sinh học', 'Cảm ứng ở sinh vật và tập tính', 'sh7-cam-ung', 'Chương VIII · Bài 33–35 · tr. 138'], ['Sinh học', 'Sinh trưởng và phát triển ở sinh vật', 'sh7-sinh-truong', 'Chương IX · Bài 36–38 · tr. 148'], ['Sinh học', 'Sinh sản ở sinh vật', 'sh7-sinh-san', 'Chương X · Bài 39–42 · tr. 158']],
      toan: [['Số và Đại số', 'Số hữu tỉ', 'toan7-so-huu-ti'], ['Số và Đại số', 'Số thực', 'toan7-so-thuc'], ['Số và Đại số', 'Tỉ lệ thức và đại lượng tỉ lệ', 'toan7-ti-le-thuc'], ['Số và Đại số', 'Biểu thức đại số và đa thức một biến', 'toan7-da-thuc']],
      anh: [['Ngữ pháp – Viết', 'Diễn đạt sở thích bằng thì hiện tại đơn', 'ta7-so-thich', 'Unit 1'], ['Ngữ pháp', 'Thì quá khứ đơn', 'ta7-qua-khu', 'Unit 3'], ['Ngữ pháp', 'So sánh: (not) as … as, like, different from', 'ta7-so-sanh-bang', 'Unit 4'], ['Ngữ pháp', 'Lượng từ; How much / How many', 'ta7-luong-tu', 'Unit 5'], ['Ngữ pháp', 'Giới từ at, on, in', 'ta7-gioi-tu-at-on-in', 'Unit 6'], ['Ngữ pháp', 'It is … from … to …; should / shouldn\'t', 'ta7-it-khoang-cach', 'Unit 7'], ['Ngữ pháp', 'although / though, however', 'ta7-although-however', 'Unit 8'], ['Ngữ pháp', 'Câu hỏi Yes / No', 'ta7-cau-hoi-yes-no', 'Unit 2, Unit 9'], ['Ngữ pháp', 'Hiện tại tiếp diễn và tương lai đơn', 'ta7-tiep-dien-tuong-lai', 'Unit 10–11'], ['Ngữ pháp', 'Mạo từ a / an / the', 'ta7-mao-tu', 'Unit 12']]
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

  const CHU_DE = [t6TapHop, t6ChiaHet, t6SoNguyen, t6PhanSo, t6ThapPhan, hh6TheChat, hh6Oxygen, hh6HonHop, sh6TeBao, sh6DaDang, vl6Luc, vl6NangLuong, ta6Thi, ta6GioiTu, ta6SoSanh, ta6TuVung, ta6DocViet, kh6MoDau, hh6VatLieu, sh6CoThe, vl6TraiDat, ta6Dem, ta6Must, ta6WhQ, ta6QuaKhu, ta6SoHuu, ta6TuongLai, ta6DieuKien, ta6SoSanhNhat, hh7BangTuanHoan, hh7PhanTu, vl7DoThi, vl7AmThanh, vl7AnhSang, vl7Tu, sh7HoHap, sh7Nuoc, sh7CamUng, sh7SinhTruong, sh7SinhSan, ta7QuaKhu, ta7SoSanh, ta7LuongTu, ta7GioiTu, ta7KhoangCach, ta7Although, ta7YesNo, ta7TiepDienTuongLai, ta7MaoTu, vatLi, hoaHoc, sinhHoc, toan, soThuc, tiLe, daThuc, tiengAnh, daThuc8, hangDangThuc8];
  apDungDoiChieu(CHU_DE);

  window.HOC_LIEU = {
    tenWeb: TEN_WEB,
    phienBan: '1.7 — 28/11/2026 (lớp 6 đủ chương trình; lớp 7 thêm 11 chủ đề KHTN và 9 chủ đề Tiếng Anh)',
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
