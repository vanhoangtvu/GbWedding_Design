[BẮT ĐẦU COPY TỪ ĐÂY]
Vai trò: Hãy đóng vai là một chuyên gia lập trình Frontend (HTML, CSS, JavaScript) xuất sắc. Hãy giúp tôi viết code cho một trang web Thiệp Cưới Kỹ Thuật Số (Digital Wedding Invitation) dạng Single Page.
Yêu cầu Kỹ thuật:
Sử dụng HTML5, CSS3 và Vanilla JavaScript.
Bắt buộc sử dụng thư viện Tailwind CSS (nhúng qua CDN) để thiết kế giao diện nhanh, chuẩn và đẹp.
Trang web phải Responsive, ưu tiên hiển thị dọc, mượt mà trên giao diện điện thoại (Mobile-first).
Gộp toàn bộ HTML, CSS và JS vào MỘT FILE index.html duy nhất để tôi dễ kiểm tra.
Yêu cầu Thiết kế Tổng thể (Theme):
Phong cách: Truyền thống Việt Nam, sang trọng.
Màu sắc chủ đạo: Nền trang web màu kem nhạt (beige) giống màu giấy mỹ thuật. Chữ và các họa tiết chính sử dụng màu đỏ đô (Maroon / #800000).
Font chữ: Tiêu đề (Tên người, tên mục) dùng font Serif trang trọng. Text thông thường dùng font Sans-serif dễ nhìn. Đa số text được căn giữa (text-center).
Họa tiết trang trí bằng Hình ảnh (QUAN TRỌNG):
Hãy tạo sẵn các thẻ <img> với class Tailwind CSS phù hợp (position absolute/fixed, z-index âm để nằm dưới cùng) và dùng link ảnh placeholder. Tôi sẽ thay ảnh thật sau. Cụ thể có 2 loại:
Ảnh Phượng Đặc (Solid): Màu đỏ khối đậm. Đặt cố định ở góc trên cùng bên trái (Top-Left) của phần đầu trang. Kích thước lớn, hiển thị rõ nét (opacity-100). Chú ý margin để không đè mất chữ.
Ảnh Phượng Line (Nét vẽ): Dạng nét mảnh. Đặt cố định (fixed) ở góc dưới cùng bên phải (Bottom-Right) hoặc chìm giữa màn hình. Bắt buộc cài đặt độ mờ rất thấp (khoảng opacity-10 đến opacity-20) để làm Watermark (nền chìm), đảm bảo text đè lên vẫn đọc rõ ràng.
Cấu trúc chi tiết các phần (Sections) từ trên xuống dưới:
1. Banner & Thông tin Gia đình:
Trên cùng là một dải hình chữ nhật ngang màu đỏ đô. Ở chính giữa dải này có chữ "Song Hỷ" (囍) màu kem/vàng rất to.
Bên dưới dải đỏ là dòng chữ: "THÔNG TIN LỄ CƯỚI" (có họa tiết trang trí đối xứng 2 bên chữ).
Thông tin Hai Họ (Chia 2 cột ngang nhau):
Cột trái: "Ông Bà" -> "Lê Văn Khoa" & "Phạm Thị Kim Oanh" -> "Địa chỉ nhà trai...".
Cột phải: "Ông Bà" -> "Trần Văn Tuấn" & "Lê Thị Hương" -> "Địa chỉ nhà gái...".
2. Cô Dâu Chú Rể & Lễ Thành Hôn:
Tên: "Lê Ngọc Ánh" (có chữ "ÚT NỮ" nhỏ ở dưới) & "Trần Thế Bảo" (có chữ "ÚT NAM" nhỏ ở dưới). Font chữ to, nổi bật nhất trang.
Văn bản: "LỄ THÀNH HÔN ĐƯỢC CỬ HÀNH TẠI TƯ GIA"
Giờ: "VÀO LÚC 09:00"
Ngày Dương lịch lớn: "CHỦ NHẬT | 03 | THÁNG 05 | 2026"
Ngày Âm lịch nhỏ: "(Tức ngày 17/03 năm Bính Ngọ)"
3. Album Ảnh (Gallery):
Tiêu đề: "ALBUM ẢNH CƯỚI".
Hiển thị một lưới (CSS Grid) gồm 4 bức ảnh vuông (dùng link unsplash placeholder).
Bức ảnh thứ 4 (góc dưới phải) có một lớp phủ tối màu (bg-black/50) và dòng text "+2" màu trắng ở chính giữa để biểu thị việc xem thêm ảnh.
4. Thông tin Tiệc Cưới & Lịch:
Tiêu đề: "TIỆC CƯỚI SẼ DIỄN RA VÀO LÚC:"
Giờ nổi bật: "18:00". Kèm ngày tháng lặp lại như phần trên.
Chia 2 cột nhỏ: "ĐÓN KHÁCH 17:30" và "KHAI TIỆC 18:00".
Hiển thị mô phỏng một Tờ lịch tháng 05/2026 nhỏ gọn. Ngày 03 được khoanh tròn nổi bật bằng viền đỏ.
Bên dưới lịch có 2 nút bấm (Buttons):
Nút 1: "Thêm vào lịch" (Viền outline đỏ, text đỏ, không nền).
Nút 2: "XÁC NHẬN THAM DỰ" (Nền đỏ đậm, chữ trắng, to và nổi bật hơn nút 1).
5. Địa điểm (Location):
Tiêu đề: "TIỆC CƯỚI SẼ TỔ CHỨC TẠI".
Tên nhà hàng: "White Palace Hoàng Văn Thụ" kèm địa chỉ chi tiết bên dưới.
Nhúng (Embed) một thẻ <iframe> bản đồ Google Maps hiển thị một vị trí bất kỳ để làm mẫu.
6. Lịch Trình (Itinerary):
Tiêu đề: "LỊCH TRÌNH NGÀY CƯỚI".
Thiết kế dạng một trục thời gian dọc (Vertical Timeline). Có một đường kẻ dọc mờ, với các chấm tròn tại mỗi mốc thời gian:
17:30 Đón khách
18:30 Khai tiệc
18:45 Rót rượu, cắt bánh
19:00 Phục vụ món chính
21:00 Kết thúc tiệc
7. Sổ Lưu Bút (Guestbook):
Tiêu đề: "Sổ lưu bút" (Nên dùng font cursive/handwriting hoặc in nghiêng mềm mại).
Form nhập liệu: 1 ô input "Tên của bạn", 1 ô input "Nhập lời chúc", và 1 nút "GỬI LỜI CHÚC" (outline đỏ).
Khu vực hiển thị: Bên dưới form là một thẻ div có thanh cuộn dọc (max-height, overflow-y-auto). Chứa sẵn 3-4 lời chúc mẫu (Gồm tên, ngày giờ gửi, và nội dung). Mỗi box lời chúc có viền mỏng hoặc nền kem cực kỳ nhạt để phân biệt.
8. Hộp Mừng Cưới (QR Code):
Tiêu đề: "Hộp Mừng Cưới" (Font cursive).
Khu vực này chia làm 2 Card (Thẻ) đứng cạnh nhau (hoặc xếp chồng trên mobile):
Card 1: Tiêu đề "Cô Dâu - Ngọc Ánh". Một hình ảnh vuông (dùng placeholder) mô phỏng Mã QR. Các dòng text bên dưới: "Vietcombank", Số tài khoản, Tên chủ TK. Một nút nhỏ "Lưu QR".
Card 2: Tương tự cho "Chú Rể - Thế Bảo".
Thiết kế các Card này có viền mỏng đỏ đô hoặc bóng đổ (shadow) nhẹ nhàng.
9. Footer:
Một dải ngang màu đỏ đô hoặc xám đậm ở dưới cùng trang.
Dòng chữ màu kem ở giữa: "Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi!"
Hãy viết code thật sạch đẹp và tối ưu CSS Tailwind.