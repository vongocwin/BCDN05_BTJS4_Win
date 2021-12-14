/**
 * Bai 1 QUản Lý Tuyển Sinh
 * 
 * Khối 1:
 * diemChuan
 * khuVuc 
 * doiTuong
 * diem1
 * diem2
 * diem3
 * 
 * Khối 2:
 * b1: Khai báo biến 
 * sum
 * diemKv
 * diemDt
 * 
 * b2: Lập điều kiện
 *  if (diem1 < 0 || diem1 > 10){
        alert("Nhập lại Điểm 1");
    } 
    if (diem2 < 0 || diem2 > 10){
        alert("Nhập lại Điểm 2");
    } 
    if (diem3 < 0 || diem3 > 10){
        alert("Nhập lại Điểm 3");
    } 
    if (diemChuan < 0 || diemChuan > 30){
        alert("Nhập lại điểm chuẩn");
    } 

    var sum = Number(diem1 + diem2 + diem3 + khuVuc() + doiTuong());

    if (sum >= diemChuan){
        document.getElementById("txtKq").innerHTML = "Bạn đã đậu. Tổng điểm: " + sum;
    } 
    else{
        document.getElementById("txtKq").innerHTML = "Bạn đã rớt. Tổng điểm: " + sum;
    }


 *
 * b3: xuất kết quả ra màn hình 
 * 
 * Khối 3:
 * 
 * Kết quả đậu hay rớt
 * 
 */

 document.getElementById("btnKq").onclick = function () {
    var diem1 = Number(document.getElementById("diem1").value);
    var diem2 = Number(document.getElementById("diem2").value);
    var diem3 = Number(document.getElementById("diem3").value);
    var diemChuan = Number(document.getElementById("diemChuan").value);
    if (diem1 < 0 || diem1 > 10){
        alert("Nhập lại Điểm 1");
    } 
    if (diem2 < 0 || diem2 > 10){
        alert("Nhập lại Điểm 2");
    } 
    if (diem3 < 0 || diem3 > 10){
        alert("Nhập lại Điểm 3");
    } 
    if (diemChuan < 0 || diemChuan > 30){
        alert("Nhập lại điểm chuẩn");
    } 

    var sum = Number(diem1 + diem2 + diem3 + khuVuc() + doiTuong());

    if (sum >= diemChuan){
        document.getElementById("txtKq").innerHTML = "Bạn đã đậu. Tổng điểm: " + sum;
    } 
    else{
        document.getElementById("txtKq").innerHTML = "Bạn đã rớt. Tổng điểm: " + sum;
    }
    } 

function khuVuc() {
    var khuVuc = document.getElementById("khuVuc").value;
    var diemKv = 0;
    if (khuVuc == "A"){
        diemKv = 2;
    } 
    else if (khuVuc == "B"){
        diemKv = 1;
    } 
    else if (khuVuc == "C"){
        diemKv = 0.5;
    } 
    else diemKv = 0;
    return diemKv;
}
function doiTuong() {
    var doiTuong = document.getElementById("doiTuong").value;
    var diemDt = 0;
    if (doiTuong == "1"){
        diemDt = 2.5;
    } 
    else if (doiTuong == "2"){
        diemDt = 1.5;
    } 
    else if (doiTuong == "3"){
        diemDt = 1;
    } 
    else diemDt = 0;
    return diemDt;
}

/**
 * Bài 2
 * 
 * Khối 1:
 * hoTen
 * kW
 * 
 * Khối 2:
 * b1: Khai báo biến
 * tienDien
 * kW
 * hoTen
 * b2: Lập điều kiện
 *  if (kW <= 50){
        tienDien = kW * 500;
    } 
    else if (kW > 50 && kW <= 100){
        tienDien = 500 * 50 + (kW - 50) * 650;
    } 
    else if (kW > 100 && kW <= 200){
        tienDien = 500 * 50 + 650 * 50 + (kW - 100) * 850;
    } 
    else if (kW > 200 && kW <= 350){
        tienDien = 500 * 50 + 650 * 50 + 850 * 100 + (kW - 200) * 1100;
    } 
    else if (kW > 350){
        tienDien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (kW - 350) * 1300;
    } 
 * 
 * Khối 3:
 * 
 * kết quả họ tên và tiền điện
 */


 document.getElementById("btnKq1").onclick = function () {
    var hoTen = document.getElementById("hoTen").value;
    document.getElementById("txtKq1").innerHTML= "Họ tên: "+hoTen+";Tiền điện: "+(new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 4 }).format(tienDien()));
    
}
function tienDien() {
    var kW = Number(document.getElementById("kW").value);
    var tienDien = 0;
    if (kW <= 50){
        tienDien = kW * 500;
    } 
    else if (kW > 50 && kW <= 100){
        tienDien = 500 * 50 + (kW - 50) * 650;
    } 
    else if (kW > 100 && kW <= 200){
        tienDien = 500 * 50 + 650 * 50 + (kW - 100) * 850;
    } 
    else if (kW > 200 && kW <= 350){
        tienDien = 500 * 50 + 650 * 50 + 850 * 100 + (kW - 200) * 1100;
    } 
    else if (kW > 350){
        tienDien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (kW - 350) * 1300;
    } 
    return tienDien;
}