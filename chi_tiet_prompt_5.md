[BẮT ĐẦU COPY TỪ ĐÂY]
Vai trò: Hãy đóng vai là một chuyên gia lập trình Frontend (HTML, CSS, JavaScript) xuất sắc. Nhiệm vụ của bạn là viết code cho một trang web Thiệp Cưới Kỹ Thuật Số (Digital Wedding Invitation) dạng Single Page.
Yêu cầu Kỹ thuật cơ bản:
Sử dụng HTML5, CSS3 và Vanilla JavaScript.
Bắt buộc sử dụng thư viện Tailwind CSS (nhúng qua CDN) để thiết kế.
Gộp toàn bộ HTML, CSS và JS vào MỘT FILE index.html duy nhất.
1. YÊU CẦU BỐ CỤC KHUNG THIỆP (RẤT QUAN TRỌNG):
Trang web này phải trông giống như một tấm thiệp giấy đặt giữa màn hình điện thoại/máy tính, không được tràn viền full width.
Thẻ <body>: Cài đặt nền ngoài cùng màu xám nhạt (bg-gray-100 hoặc #f0f2f5), dùng flexbox để căn giữa nội dung.
Khung Thiệp (Main Wrapper): Tạo một thẻ <div> bọc toàn bộ nội dung. Phải có các class Tailwind: w-full max-w-md mx-auto shadow-2xl overflow-hidden relative. Màu nền của thẻ div này là màu kem/vàng giấy cũ (bg-[#F9F6E6]).
2. Yêu cầu Thiết kế Tổng thể (Theme) & Font chữ:
Màu sắc: Nền kem (#F9F6E6). Màu chữ, màu viền và các họa tiết chủ đạo là Màu Đỏ Tươi / Đỏ Gạch (Red / #c0392b).
Font chữ (Cực kỳ quan trọng - Dùng Google Fonts):
Font Tiêu đề & Tên (Blocky Font): Tìm và sử dụng một phông chữ dạng khối vuông, dày dặn, không chân (Ví dụ: Black Ops One, Anton, hoặc Bebas Neue). Dùng font này cho Tên Cô Dâu Chú Rể và các Tiêu đề chính.
Font Văn bản: Dùng một font Sans-serif cơ bản, dễ đọc (như Roboto hoặc Inter).
3. Cấu trúc chi tiết các phần (Sections):
Phần 1: Hero Section (Phần minh họa đầu trang - Bố cục phức tạp):
Tạo một khu vực relative để chứa các hình ảnh xếp chồng lên nhau (Tôi sẽ thay link ảnh placeholder sau).
Họa tiết góc: Đặt 2 ảnh hoa đào nhỏ (absolute) ở 2 góc trên cùng trái/phải.
Lồng đèn: Đặt 1 ảnh lồng đèn đỏ (absolute) treo từ trên xuống ở góc trên bên phải.
Tên trên cùng: Dòng chữ nhỏ "THẾ BẢO & NGỌC ÁNH" (Font blocky, màu đỏ) nằm giữa phần trên.
Lớp Nền giữa: Một chữ "Song Hỷ" (囍) RẤT TO màu đỏ, mờ nhẹ, nằm ở chính giữa khối. Xung quanh là họa tiết quạt giấy/mây chìm.
Lớp Trên cùng (Foreground): Một thẻ <img> (dùng placeholder đứng) mô phỏng hình ảnh minh họa Cô dâu Chú rể mặc áo tấc truyền thống, đứng đè lên chữ Song Hỷ.
Chữ trang trí: Bên trái hình cô dâu chú rể, tạo một khối text viết dọc: "NHÀ CÓ HỶ" (Font blocky, màu đỏ).
Phần 2: Thông tin Hai Họ:
Tiêu đề: "THÔNG TIN LỄ CƯỚI". Yêu cầu CSS: Hãy tạo các nét viền (border) hoặc sử dụng các biểu tượng để tạo thành một cái khung có 4 góc vuông (corner brackets) bao quanh tiêu đề này, màu đỏ.
Chia 2 cột song song. Text màu đen/xám đậm.
Cột trái: "Ông Bà" -> Tên Bố Mẹ nhà trai -> Địa chỉ.
Cột phải: "Ông Bà" -> Tên Bố Mẹ nhà gái -> Địa chỉ.
Phần 3: Tên & Lễ Thành Hôn:
Tên Chú Rể: "NGUYỄN GIA KHANG" (To, font blocky màu đỏ). Chữ "TRƯỞNG NAM" nhỏ ở dưới.
Ký tự "&" màu đỏ, cách điệu.
Tên Cô Dâu: "PHAN DIỆU ANH" (To, font blocky màu đỏ). Chữ "ÚT NỮ" nhỏ ở dưới.
Văn bản: "LỄ THÀNH HÔN ĐƯỢC CỬ HÀNH TẠI TƯ GIA VÀO LÚC".
Giờ: "09:00". Ngày lớn: "CHỦ NHẬT | 03 | THÁNG 05 | 2026". Ngày âm lịch bên dưới.
Phần 4: Album Ảnh:
Tiêu đề: "ALBUM ẢNH CƯỚI" (Font blocky, có họa tiết mây đỏ nhỏ trang trí 2 bên).
Lưới CSS Grid 4 bức ảnh vuông. Bức thứ 4 có lớp phủ đen mờ và chữ "+6".
Phần 5: Thông tin Tiệc Cưới & Lịch:
Tiêu đề: "THÔNG TIN TIỆC CƯỚI" / "TIỆC CƯỚI SẼ DIỄN RA VÀO LÚC:". (Lại sử dụng khung viền 4 góc vuông màu đỏ như phần 2).
Giờ: "18:00". Ngày tháng lặp lại.
Chia 2 cột: "ĐÓN KHÁCH 17:30" và "KHAI TIỆC 18:00".
Lịch tháng 05/2026. Ngày 03 có hình trái tim màu đỏ bọc quanh số 3.
1 Nút bấm: "XÁC NHẬN THAM DỰ" (Viền đỏ, nền trong suốt hoặc trắng).
Phần 6: Địa điểm:
Tiêu đề: "TIỆC CƯỚI SẼ TỔ CHỨC TẠI". Tên nhà hàng & địa chỉ. Nhúng iframe Google Maps.
Phần 7: Lịch Trình:
Tiêu đề: "LỊCH TRÌNH NGÀY CƯỚI". Timeline dọc: 17:30, 18:30, 18:45, 19:00, 21:00. Dùng dấu chấm đỏ, đường kẻ đỏ mờ.
Phần 8: Sổ Lưu Bút:
Tiêu đề: "SỔ LƯU BÚT" (Font blocky).
Form: Input Tên, Input Lời chúc. Nút "GỬI LỜI CHÚC" (Nền đỏ chữ kem).
Phần 9: Hộp Mừng Cưới:
Tiêu đề: "Hộp Mừng Cưới". Biểu tượng phong bì đỏ, có chữ Hỷ.
Phần 10: Footer:
Text màu đen: "Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi!". Kèm logo/text "chungdoi.com". Các cụm mây đỏ chìm làm viền dưới cùng.
Hãy viết code thật sạch đẹp.
[KẾT THÚC COPY]