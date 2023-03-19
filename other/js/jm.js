
function as(){
    var v= document.getElementById("ulo").value;
    var v_1 =escape(v);//编码
    var l=document.getElementById("rulo");
    l.value=v_1;
};
function sa(){
    var y= document.getElementById("lo").value;
    var y_1 = unescape(y); //解码
    var u=document.getElementById("relo");
    u.value=y_1;
};