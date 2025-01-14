   // Mảng chứa các chuỗi và phương thức được sử dụng
   var data = [
       "getHours", // Lấy giờ hiện tại từ đối tượng Date
       `<script src="js-zone/alert-zone.js"></script>
        <script type="text/javascript" src="js-zone/zero-zone.js"></script>
        <script language="JavaScript">document.write(ls())</script>`,
       `<script type="text/javascript" src="js-zone/one-zone.js"></script>
        <script language="JavaScript">document.write(log())</script>`,
       `<script type="text/javascript" src="js-zone/two-zone.js"></script>
        <script language="JavaScript">document.write(conf())</script>`
   ];

   // Hàm trả về chuỗi HTML chứa script tương ứng
   function ls() {
       var currentDate = new Date(); // Tạo một đối tượng Date hiện tại
       var currentHour = currentDate[data[0]](); // Gọi phương thức getHours
       var htmlContent = data[1]; // Lấy nội dung HTML từ mảng
       return htmlContent; // Trả về nội dung HTML
   }

   function log() {
       var currentDate = new Date(); // Tạo một đối tượng Date hiện tại
       var currentHour = currentDate[data[0]](); // Gọi phương thức getHours
       var htmlContent = data[2]; // Lấy nội dung HTML từ mảng
       return htmlContent; // Trả về nội dung HTML
   }

   function conf() {
       var currentDate = new Date(); // Tạo một đối tượng Date hiện tại
       var currentHour = currentDate[data[0]](); // Gọi phương thức getHours
       var htmlContent = data[3]; // Lấy nội dung HTML từ mảng
       return htmlContent; // Trả về nội dung HTML
   }
