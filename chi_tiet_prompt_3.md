[BẮT ĐẦU COPY TỪ ĐÂY]
Vai trò: Hãy đóng vai là một chuyên gia lập trình Frontend (HTML, CSS, JavaScript) xuất sắc. Nhiệm vụ của bạn là viết code cho một trang web Thiệp Cưới Kỹ Thuật Số (Digital Wedding Invitation) dạng Single Page.
Yêu cầu Kỹ thuật:
Sử dụng HTML5, CSS3 và Vanilla JavaScript.
Bắt buộc sử dụng thư viện Tailwind CSS (nhúng qua CDN) để thiết kế.
Trang web Responsive, ưu tiên Mobile-first.
Gộp toàn bộ HTML, CSS và JS vào MỘT FILE index.html duy nhất.
Yêu cầu Thiết kế Tổng thể (Theme) & Quản lý Hình ảnh:
Màu sắc: Nền trang web màu kem/trắng ngà (#FDFDF9). Màu chữ và viền chủ đạo là xanh lá sẫm (Dark Green / #2d4a22).
Font chữ (Google Fonts):
Font Viết tay (Cursive/Script - vd: Great Vibes hoặc Dancing Script) cho Tên Cô dâu Chú rể và tiêu đề "Hộp mừng cưới".
Font Serif trang trọng cho các tiêu đề chính.
Font Sans-serif cho văn bản thường.
Hình nền hoa lá (Background Watermark): Tôi đã có sẵn ảnh. Vui lòng tạo 2 thẻ <img> với thuộc tính fixed, z-[-1], opacity-20 để làm nền chìm. Gán link tạm là images/bg-hoa-1.png (đặt ở góc trên trái) và images/bg-hoa-2.png (đặt ở góc dưới phải). Tôi sẽ tự đổi link thật sau.
Cấu trúc chi tiết các phần (Sections):
1. Hero Section (Phần Khung hoa & Tên):
Lưu ý quan trọng cho Dev: Tôi có một file ảnh khung hoa trong suốt (PNG). Hãy tạo một container có position: relative.
Bên trong container, chèn thẻ <img> khung hoa (link tạm: images/khung-hoa.png, width khoảng 80%-90% màn hình trên mobile).
Sử dụng position: absolute để đặt dòng text chữ "Văn Long & Thu Hà" (Font Viết tay, size rất to, màu xanh sẫm) nằm chính giữa cái khung hoa đó (top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2).
Bên dưới khối khung hoa này là dòng chữ nhỏ: "THÔNG TIN LỄ CƯỚI".
2. Thông tin Hai Họ:
Chia 2 cột song song. Màu chữ xanh sẫm.
Cột trái: "Ông Bà" -> "Hoàng Văn Minh", "Bùi Thị Lan" -> "Địa chỉ nhà trai...".
Cột phải: "Ông Bà" -> "Nguyễn Văn Cường", "Trần Thị Yến" -> "Địa chỉ nhà gái...".
3. Lời Mời & Lễ Thành Hôn:
Tiêu đề: "TRÂN TRỌNG BÁO TIN" / "LỄ THÀNH HÔN CỦA CON CHÚNG TÔI".
Tên chú rể: "Hoàng Văn Long" (TRƯỞNG NAM) & "Nguyễn Thị Thu Hà" (ÚT NỮ). (Dùng font Serif, to rõ ràng).
Văn bản: "LỄ THÀNH HÔN ĐƯỢC CỬ HÀNH TẠI TƯ GIA VÀO LÚC".
Giờ: "09:00". Ngày lớn: "CHỦ NHẬT | 26 | THÁNG 04 | 2026". Ngày âm lịch nhỏ.
4. Album Ảnh (Gallery):
Tiêu đề: "ALBUM ẢNH CƯỚI" (Font Serif).
Lưới CSS Grid 4 bức ảnh vuông (bo góc nhẹ). Dùng link unsplash placeholder. Bức thứ 4 có lớp phủ bg-black/50 và chữ "+3".
5. Thông tin Tiệc Cưới & Lịch:
Tiêu đề: "TIỆC CƯỚI SẼ DIỄN RA VÀO LÚC:".
Giờ: "11:00". Ngày tháng lặp lại.
Chia 2 cột: "ĐÓN KHÁCH 10:30" và "KHAI TIỆC 11:00".
Hiển thị Lịch tháng 04/2026. Ngày 26 khoanh tròn nổi bật.
2 nút bấm: "Thêm vào lịch" (Viền xanh sẫm) và "XÁC NHẬN THAM DỰ" (Nền xanh sẫm, chữ kem).
6. Địa điểm (Location):
Tiêu đề: "TIỆC CƯỚI SẼ TỔ CHỨC TẠI". Tên nhà hàng & địa chỉ. Nhúng iframe Google Maps.
7. Lịch Trình (Itinerary):
Tiêu đề: "LỊCH TRÌNH NGÀY CƯỚI".
Tạo Timeline dọc với các mốc giờ: 17:30 (Đón khách), 18:30 (Khai tiệc), 18:45 (Rót rượu), 19:00 (Món chính), 21:00 (Kết thúc).
8. Sổ Lưu Bút (Guestbook):
Tiêu đề: "Sổ lưu bút" (Font Serif).
Form: Input Tên, Input Lời chúc, Nút "GỬI LỜI CHÚC".
Khu vực hiển thị lời chúc (scrollable div) chứa 3-4 lời chúc mẫu.
9. Hộp Mừng Cưới (QR Code):
Tiêu đề: "Hộp Mừng Cưới" (Font Viết tay mềm mại, to).
2 Card thông tin: "Chú Rể - Văn Long" và "Cô Dâu - Thu Hà". Có hình QR placeholder, tên ngân hàng, nút "Lưu QR". Thiết kế card có viền mỏng xanh sẫm.
10. Footer:
Dải màu xanh sẫm dưới cùng. Text màu kem: "Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi!".
[KẾT THÚC COPY]