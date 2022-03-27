d9=localStorage.getItem("i1").value;
d8=localStorage.getItem("i2").value;
pn1=d9
pn2=d8

function send(){
    n1=document.getElementById("d9").value;
    n2=document.getElementById("d8").value;
actual_answer= parseInt(n1)*parseInt(n2);

}

qn="<h4>"+n1+"X"+n2+"</h4>";
ib="<br>Answer: <input type='text' id='input_check_box'>";
cb="<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>"
row=qn+ib+cb;
document.getElementById("output").innerHTML=row;
document.getElementById("n1").value="";
document.getElementById("n2").value="";