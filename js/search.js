

function check() {


  var low = document.getElementById("low");
  var high = document.getElementById("high");

  if (isNaN(low.value) || isNaN(high.value)) {
     alert("you does not enter number value   \n" +
          "Please re-enter quantity as numbers");
}
}

function handleChange1(){

var code =  ' <div class="Textcenter" id="appare">  <div class="form-group" > ' + '<label><input type="text" name="low" style="width:40px;" id="low" >  :الحد الأعلى للسعر &nbsp;&nbsp;&nbsp;</label> ' +
              '   <label><input type="text" name="high"style="width:40px;" id="high" >&nbsp;:الحد الأدنى للسعر</label> ' +
             ' </div> </div>' ;
var form=document.getElementById('appare');

form.innerHTML = code ;

}

function handleChange2(){
var form=document.getElementById('appare');

form.innerHTML = "none" ;
}