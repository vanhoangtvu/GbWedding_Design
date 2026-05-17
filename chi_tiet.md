BẢN PROMPT MẪU (Dùng cho ChatGPT/Claude)
[Bắt đầu Prompt]
Vai trò: Hãy đóng vai là một chuyên gia lập trình Frontend (HTML, CSS, JavaScript). Hãy giúp tôi viết code cho một trang web Thiệp Cưới Kỹ Thuật Số (Digital Wedding Invitation) dạng Single Page.
Yêu cầu Kỹ thuật:
Sử dụng HTML5, CSS3 (khuyến khích sử dụng thư viện Tailwind CSS qua CDN để định hình style nhanh chóng) và Vanilla JavaScript.
Trang web phải Responsive (hiển thị đẹp trên cả điện thoại và máy tính).
Yêu cầu Thiết kế Tổng thể (Theme):
Phong cách: Sang trọng, lãng mạn, nhẹ nhàng (Boho Floral).
Màu sắc: Nền trắng kem (off-white). Chữ chủ đạo màu xanh rêu đậm hoặc nâu xám.
Hình nền (Background): Cố định (fixed) các cụm họa tiết hoa trắng và lá xanh ngọc (watercolor) ở các góc màn hình.
Font chữ: Sử dụng font có chân (Serif) sang trọng cho các Tiêu đề (Tên cô dâu chú rể, tên mục) và font không chân (Sans-serif) thanh lịch cho văn bản thường. Đa số nội dung được căn giữa (text-center).
Cấu trúc các phần (Sections) từ trên xuống dưới:
1. Phần Header / Lời mời (Hero Section):
Tên Cô dâu và Chú rể viết to, font chữ nghệ thuật.
Dòng chữ: "LỄ THÀNH HÔN ĐƯỢC CỬ HÀNH TẠI TƯ GIA VÀO LÚC".
Thời gian: 09:00.
Ngày tháng nổi bật: "CHỦ NHẬT | 24 | THÁNG 05 | 2026".
Ngày âm lịch nhỏ bên dưới: "(TỨC NGÀY 08/04 NĂM BÍNH NGỌ)".
2. Phần Album Ảnh (Gallery):
Tiêu đề: "ALBUM ẢNH CƯỚI".
Hiển thị một lưới (grid) gồm 4 bức ảnh cưới placeholder (dùng ảnh từ unsplash).
Bức ảnh cuối cùng có lớp phủ tối màu với dòng chữ "+4" ở giữa (tạo cảm giác nhấn vào xem thêm).
3. Phần Thông tin Tiệc Cưới:
Tiêu đề: "THÔNG TIN TIỆC CƯỚI".
Thời gian tiệc: "18:00". Ngày tháng tương tự phần trên.
Chia 2 cột thời gian nhỏ: "ĐÓN KHÁCH 17:30" và "KHAI TIỆC 18:00".
Tính năng JS 1: Một đồng hồ đếm ngược (Countdown timer) đếm ngược đến ngày 24/05/2026. Format: "Cùng đếm ngược: X ngày Y giờ Z phút W giây".
Hiển thị một tấm Lịch tháng 5/2026 nhỏ, khoanh tròn ngày 24.
Có 2 nút bấm (Button) nổi bật: "Thêm vào lịch" và "XÁC NHẬN THAM DỰ".
4. Phần Địa điểm (Location):
Tiêu đề: "TIỆC CƯỚI SẼ TỔ CHỨC TẠI".
Tên nhà hàng và địa chỉ chi tiết.
Nhúng (Embed) một khung Google Maps hiển thị một vị trí bất kỳ để làm mẫu.
5. Phần Lịch Trình (Itinerary):
Tiêu đề: "LỊCH TRÌNH NGÀY CƯỚI".
Hiển thị danh sách các mốc thời gian dạng 2 cột (Giờ - Sự kiện):
17:30 Đón khách
18:30 Khai tiệc
18:45 Rót rượu, cắt bánh
19:00 Phục vụ món chính
21:00 Kết thúc tiệc
6. Phần Sổ Lưu Bút (Guestbook):
Tiêu đề: "SỔ LƯU BÚT".
Một Form nhập liệu gồm 2 ô input: "Nhập tên của bạn" và "Nhập lời chúc của bạn". Cùng 1 nút "GỬI LỜI CHÚC".
Bên dưới Form là một khu vực có thể cuộn (scrollable div) hiển thị danh sách các lời chúc mẫu (gồm tên người gửi, thời gian, và nội dung lời chúc). Box chứa lời chúc có nền màu xanh lá rất nhạt.
7. Phần Hộp Mừng Cưới (Gift):
Tiêu đề: "HỘP MỪNG CƯỚI".
Hiển thị một biểu tượng Phong bì đỏ (Lì xì) có chữ "Hỉ" ở giữa, bên dưới có dòng chữ "Nhấn để mở".
Dòng chữ cảm ơn ở cuối cùng: "Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi!".
Vui lòng cung cấp toàn bộ code HTML gộp chung CSS và JS trong một file duy nhất để tôi dễ kiểm tra. Các hình ảnh hãy dùng link placeholder ảnh mẫu.
[Kết thúc Prompt]