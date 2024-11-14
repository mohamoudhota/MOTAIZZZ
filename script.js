// JavaScript
function bookAppointment() {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const notes = document.getElementById("notes").value;

    if (name && date && time && location) {
        alert("تم حجز موعدك بنجاح!");
    } else {
        alert("يرجى ملء جميع الحقول المطلوبة.");
    }
}
