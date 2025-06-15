// รอให้ HTML โหลดเสร็จทั้งหมดก่อนที่จะรันโค้ด JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // อ้างอิงถึงปุ่มและคอนเทนเนอร์รูปภาพโดยใช้ id ของมัน
    const showImageBtn = document.getElementById('showImageBtn');
    const imageContainer = document.getElementById('imageContainer');

    // เพิ่ม Event Listener ให้กับปุ่ม เมื่อมีการ 'click'
    showImageBtn.addEventListener('click', function() {
        // ตรวจสอบว่า imageContainer มีคลาส 'hidden' อยู่หรือไม่
        if (imageContainer.classList.contains('hidden')) {
            // ถ้ามี (คือรูปภาพถูกซ่อนอยู่) ให้ลบคลาส 'hidden' ออกไป
            imageContainer.classList.remove('hidden');
            // เปลี่ยนข้อความบนปุ่มเป็น "ซ่อนรูปภาพ"
            showImageBtn.textContent = 'ซ่อนรูปภาพ';
        } else {
            // ถ้าไม่มี (คือรูปภาพกำลังแสดงอยู่) ให้เพิ่มคลาส 'hidden' เข้าไป
            imageContainer.classList.add('hidden');
            // เปลี่ยนข้อความบนปุ่มกลับเป็น "แสดงรูปภาพ"
            showImageBtn.textContent = 'แสดงรูปภาพ';
        }
    });
});
