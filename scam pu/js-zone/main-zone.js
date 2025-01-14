/*!
SCRIPT BY NVN: http://facebook.com/778578204
*/

var data = [
    "getHours", // Phương thức lấy giờ hiện tại
    '<link rel="stylesheet" media="all" href="./css-zone/cl-zone.css"/>' // Đường dẫn đến tệp CSS
];

// Sao chép giá trị từ mảng `data` vào mảng mới
var copiedData = [data[0], data[1]]; // Mảng này giữ các giá trị tương tự `data`

// Hàm trả về chuỗi HTML chứa thẻ `<link>` để nhúng CSS
function zonehost() {
    var currentDate = new Date(); // Tạo đối tượng Date hiện tại
    var currentHour = currentDate[copiedData[0]](); // Gọi phương thức getHours
    var htmlContent = copiedData[1]; // Lấy nội dung HTML từ mảng
    return htmlContent; // Trả về chuỗi HTML
}
