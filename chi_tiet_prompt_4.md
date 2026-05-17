[BẮT ĐẦU COPY TỪ ĐÂY]
Vai trò: Hãy đóng vai là một chuyên gia lập trình Frontend (HTML, CSS, JavaScript). Nhiệm vụ của bạn là viết code cho một trang web Thiệp Cưới Kỹ Thuật Số (Digital Wedding Invitation) dạng Single Page.
Yêu cầu Kỹ thuật cơ bản:
Sử dụng HTML5, CSS3 và Vanilla JavaScript.
Bắt buộc sử dụng thư viện Tailwind CSS (nhúng qua CDN) để thiết kế giao diện.
Trang web Responsive, ưu tiên hiển thị mượt mà trên điện thoại (Mobile-first).
Gộp toàn bộ HTML, CSS và JS vào MỘT FILE index.html duy nhất.
Yêu cầu Thiết kế Tổng thể (Theme) & Hình ảnh:
Màu sắc: Nền trang web màu kem/trắng ngà (#F9F6F0). Màu chữ và viền chủ đạo là Màu Nâu Tây / Nâu Đậm (Dark Brown / #4a3b32).
Font chữ: Dùng Google Fonts. Sử dụng font Serif (như Playfair Display hoặc Lora) cho tất cả các Tiêu đề và Tên người. Font Sans-serif cho văn bản thông thường. Không dùng font viết tay.
Hình nền hoa lá: Tôi đã có sẵn ảnh hoa lá màu nâu. Hãy tạo các thẻ <img src="images/hoa-bg.png" class="fixed z-[-1] opacity-30"> và dùng các class của Tailwind như top-0 left-0, bottom-0 right-0 để đặt chúng ở các góc màn hình làm nền chìm.
Cấu trúc chi tiết các phần (Sections):
1. Hero Section (Phần Ảnh nghiêng & Banner Nâu) - YÊU CẦU ĐẶC BIỆT CHÚ Ý:
Phần này có bố cục xếp chồng lên nhau.
Khối 1 (Ảnh Chú rể): Nằm ở nửa trên, lệch về bên trái. Khung ảnh có viền trắng mỏng, đổ bóng nhẹ, và được xoay nghiêng sang trái (-rotate-6). Bên phải bức ảnh là tên "Út Nam" & "Hoàng Nam" (Màu nâu).
Khối 2 (Banner Nâu): Nằm ngay dưới ảnh chú rể. Tôi đã có file ảnh dải banner này. Hãy tạo thẻ <img src="images/banner-nau.png" class="w-full h-auto object-cover relative z-10"> nằm vắt ngang toàn bộ màn hình. Đặt margin âm (ví dụ -mt-10) để nó đè nhẹ lên ảnh chú rể phía trên.
Khối 3 (Ảnh Cô dâu): Nằm dưới dải banner, lệch về bên phải. Khung ảnh có viền trắng mỏng, đổ bóng, xoay nghiêng sang phải (rotate-6). Bên trái bức ảnh là tên "Thứ Nữ" & "Thanh Tú". Cùng dùng margin âm (-mt-10) để ảnh này đè lên phần dưới của dải banner.
2. Tiêu đề & Thông tin Hai Họ:
Dòng chữ: "THÔNG TIN LỄ CƯỚI".
Chia 2 cột song song. Màu chữ nâu đậm.
Cột trái: "Ông Bà" -> "Phạm Văn Toàn", "Nguyễn Thị Thu" -> "Địa chỉ...".
Cột phải: "Ông Bà" -> "Lê Văn Phúc", "Võ Thị Kim Oanh" -> "Địa chỉ...".
3. Lời Mời & Lễ Thành Hôn:
Tiêu đề: "TRÂN TRỌNG BÁO TIN" / "LỄ THÀNH HÔN CỦA CON CHÚNG TÔI".
Tên chính: "Phạm Thanh Tùng" (ÚT NAM) & "Lê Thị Mỹ Duyên" (THỨ NỮ). Kích thước chữ rất to, font Serif.
Văn bản: "LỄ THÀNH HÔN ĐƯỢC CỬ HÀNH TẠI TƯ GIA VÀO LÚC".
Giờ: "09:00". Ngày lớn: "CHỦ NHẬT | 10 | THÁNG 05 | 2026". Ngày âm lịch nhỏ.
4. Album Ảnh (Gallery):
Tiêu đề: "ALBUM ẢNH CƯỚI" (Font Serif).
Lưới CSS Grid 4 bức ảnh. Dùng ảnh Unsplash placeholder. Bức thứ 4 có lớp phủ bg-black/50 và chữ "+4".
5. Thông tin Tiệc Cưới & Lịch:
Tiêu đề: "TIỆC CƯỚI SẼ DIỄN RA VÀO LÚC:".
Giờ: "10:30". Ngày tháng lặp lại.
Chia 2 cột: "ĐÓN KHÁCH 10:00" và "KHAI TIỆC 10:30".
Hiển thị Lịch tháng 05/2026. Ngày 10 khoanh tròn màu nâu đậm.
2 nút bấm: Nút "Thêm vào lịch" (Viền nâu, chữ nâu) và Nút "XÁC NHẬN THAM DỰ" (Nền nâu, chữ kem).
6. Địa điểm (Location):
Tiêu đề: "TIỆC CƯỚI SẼ TỔ CHỨC TẠI". Tên nhà hàng & địa chỉ. Nhúng iframe Google Maps.
7. Lịch Trình (Itinerary):
Tiêu đề: "LỊCH TRÌNH NGÀY CƯỚI".
Tạo Timeline dọc: 17:30 (Đón khách), 18:30 (Khai tiệc), 18:45 (Rót rượu), 19:00 (Món chính), 21:00 (Kết thúc). Dùng dấu chấm và đường kẻ màu nâu.
8. Sổ Lưu Bút (Guestbook):
Tiêu đề: "SỔ LƯU BÚT" (Font Serif).
Form: Input Tên, Input Lời chúc, Nút "GỬI LỜI CHÚC" (Nền nâu đậm).
Khu vực hiển thị lời chúc (scrollable div) chứa 2 lời chúc mẫu. Viền mỏng màu nâu.
9. Hộp Mừng Cưới (Lì Xì):
Tiêu đề: "Hộp Mừng Cưới".
Hiển thị một biểu tượng/hình ảnh chiếc Phong bì đỏ (Lì xì) có chữ "Hỉ" vàng ở giữa. Bên dưới có dòng chữ "Nhấn để mở". (Dùng placeholder image cho phong bì).
10. Footer:
Dải màu trắng ở dưới cùng. Text màu nâu: "Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi!". Kèm một logo/text nhỏ ở dưới cùng (ví dụ: "chungdoi.com").
[KẾT THÚC COPY]
💡 Hướng dẫn cho bạn sau khi nhận code:
Khác với 2 mẫu trước, ở mẫu này mình đã yêu cầu AI thiết lập sẵn các hiệu ứng góc nghiêng (rotate) và lớp đè (z-index, margin âm) ở Phần 1 (Hero Section).