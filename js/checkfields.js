function chkFields() {

var username = document.getElementById("username");
var phonenum = document.getElementById("phonenum");
var textDec = document.getElementById("textDec");
var sel = document.getElementById("sel");
var pic = document.getElementById("pic");

if (pic.value == ""||sel.value == "-"||username.value == ""||phonenum.value == ""||textDec.value == "") {
    alert("لقد تركت بعض الحقول فارغة \n" +
          "الرجاء تعبئة جميع الحقول");
    return false;
  }

}