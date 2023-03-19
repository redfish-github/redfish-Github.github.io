
function as(){
    var v= document.getElementById("ulo").value;
    var v_1 = window.btoa(v); // 加密
    var l=document.getElementById("rulo");
    l.value=v_1;
};
function sa(){
    var y= document.getElementById("lo").value;
    var y_1 = window.atob(y); // 解密
    var u=document.getElementById("relo");
    u.value=y_1;
};