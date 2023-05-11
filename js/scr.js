$(document).ready(function() {                     //click
    var i = 1;
    $("#dk").click(function() {
        $("#myModal").modal();
    })
//------------------------------------------kiem tra ma: nhap 10 so, khong rong, khong nhap sai.
    function kiemTraten() {
        var mauKT = /[0-9]{9}$/;//------10 so
        if (mauKT.test($("#txtten").val()) == true) {
            alert("Ban nhap dung");
            return true;
        } else {
            alert("Ban nhap sai");
            return false;
        }
    }
    $("#txtten").blur(kiemTraten);
//------------------------------------------kt ho ten
function kiemTraHT() {
        var kt = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]*))*$/;
        if ($("#txtTen").val() == "") {
            $("#tbTen").html("*Bat buoc nhap!");
            $("tbTen").addClass("mauDo");
            return false;
        } else
        if (!kt.test($("#txtTen").val())) {
            $("#tbTen").html("*Chu cai dau cua moi tu phai viet hoa");
            $("#tbTen").addClass("mauDo");
            return false;
        } else {
            $("#tbTen").html("*");
            return true;
        }
    };
    $("#txtTen").blur(kiemTraHT);

//------------------------------------------------------------kt ngay tham gia sau ngay hien tai 7 ngay
    var txtNgay = $("#txtNgay");
var tbNgay = $("#tbNgay");

function KiemtraNgayKH() {
if (txtNgay.val() == "") {
    tbNgay.html("* bat buoc nhap");
    return false;

}
var day = new Date(txtNgay.val());
var today = new Date();
today.setDate(today.getDate() + 7);
if (day < today) {
    tbNgay.html("Ngay tham gia phai sau ngay hien tai 7 ngay");
    return false;
}
tbNgay.html("*");
return true;

}
txtNgay.blur(KiemtraNgayKH);

$("#btnSave").click(function() {
var matour = $("#txtMa").val();
 var ten = $("#txtTen").val();
 var ngay = $("#txtNgay").val();


var anh = $("#txtAnh").val().substring(12);

var them = "<tr><td>" + (i++) + "</td><td>" + matour + "</td><td>" + ten + "</td><td>" + ngay + "</td><td>" + anh + "</td><tr>";


$("table tbody").append(them);
$("#myModal").modal("hide");
return true;
    });


});
$(document).ready(function() {                     //click
    var i = 2;
    $("#dn").click(function() {
        $("#myModal").modal();
    })
    function kiemtrataikhoan() {
        var mauKT = /([a-z]{})$/;//------10 so
        if (mauKT.test($("#txtten").val()) == true) {
            alert("Ban nhap dung");
            return true;
        } else {
            alert("Ban nhap sai");
            return false;
        }
    }
    $("#txtten").blur(kiemTraten);
});



$(document).ready(function() {                     //click
    var i = 1;
    $("#dn").click(function() {
        $("#dangnhap").modal();
    })
//------------------------------------------kiem tra ma: nhap 10 so, khong rong, khong nhap sai.
    function kiemTraten() {
        var mauKT = /[0-9]{9}$/;//------10 so
        if (mauKT.test($("#txtten").val()) == true) {
            alert("Ban nhap dung");
            return true;
        } else {
            alert("Ban nhap sai");
            return false;
        }
    }
    $("#txtten").blur(kiemTraten);
//------------------------------------------kt ho ten
function kiemTraHT() {
        var kt = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]*))*$/;
        if ($("#txtTen").val() == "") {
            $("#tbTen").html("*Bat buoc nhap!");
            $("tbTen").addClass("mauDo");
            return false;
        } else
        if (!kt.test($("#txtTen").val())) {
            $("#tbTen").html("*Chu cai dau cua moi tu phai viet hoa");
            $("#tbTen").addClass("mauDo");
            return false;
        } else {
            $("#tbTen").html("*");
            return true;
        }
    };
    $("#txtTen").blur(kiemTraHT);

//------------------------------------------------------------kt ngay tham gia sau ngay hien tai 7 ngay
    var txtNgay = $("#txtNgay");
var tbNgay = $("#tbNgay");

function KiemtraNgayKH() {
if (txtNgay.val() == "") {
    tbNgay.html("* bat buoc nhap");
    return false;

}
var day = new Date(txtNgay.val());
var today = new Date();
today.setDate(today.getDate() + 7);
if (day < today) {
    tbNgay.html("Ngay tham gia phai sau ngay hien tai 7 ngay");
    return false;
}
tbNgay.html("*");
return true;

}
txtNgay.blur(KiemtraNgayKH);

$("#btnSave").click(function() {
var matour = $("#txtMa").val();
 var ten = $("#txtTen").val();
 var ngay = $("#txtNgay").val();


var anh = $("#txtAnh").val().substring(12);

var them = "<tr><td>" + (i++) + "</td><td>" + matour + "</td><td>" + ten + "</td><td>" + ngay + "</td><td>" + anh + "</td><tr>";


$("table tbody").append(them);
$("#myModal").modal("hide");
return true;
    });


});
$(document).ready(function() {                     //click
    var i = 2;
    $("#dn").click(function() {
        $("#myModal").modal();
    })
    function kiemtrataikhoan() {
        var mauKT = /([a-z]{})$/;//------10 so
        if (mauKT.test($("#txtten").val()) == true) {
            alert("Ban nhap dung");
            return true;
        } else {
            alert("Ban nhap sai");
            return false;
        }
    }
    $("#txtten").blur(kiemTraten);
});
