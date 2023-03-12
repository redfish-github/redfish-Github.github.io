function check()
    {
	var x=document.getElementById("d").value;
	if(x=="计算器"){
		location.replace("https://redfish-github.github.io/html/计算器.html");
        }
        if(x=="时间"){
        	location.replace("https://redfish-github.github.io/html/时间.html");
	}
	if(x==""){
		slert("输入为空")
	}
	if(x=="图片"){
		location.replace("https://redfish-github.github.io/html/tp.html");
	}
	if(x=="资源"){
		location.replace("https://redfish-github.github.io/html/zy.html");
	}
	}
