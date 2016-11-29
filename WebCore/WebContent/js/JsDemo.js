/**
 * 
 */
function withDemo() {
	var x,y;
	with (Math) {
		x = cos(3 * PI) + sin(LN10);
		y = tan(14 * E);
	}
	document.write("x = " + x + " y = " + y);
}

function pluginsDemo() {
	var len = navigator.plugins.length;
	with (document) {
		write("你的浏览器共支持" + len + "种外挂插件：<BR>");
		write("<TABLE BORDER=1>")
		write("<CAPTION>外挂插件清单</CAPTION>")
		write("<TR><TH> <TH>名称<TH>描述<TH>文件名")
		for (var i = 0; i < len; i++)
			write("<TR><TD>" + i + "<TD>" + navigator.plugins[i].name + "<TD>"
					+ navigator.plugins[i].description + "<TD>"
					+ navigator.plugins[i].filename);
	}
}

function screenDemo() {
	console.info("screen.width:" + screen.width + "screen.colorDepth :"
			+ screen.colorDepth)
	if (screen.width < 800 || screen.colorDepth < 8) {
		var msg = "本网站最佳浏览模式为 800 * 600 * 256";
		alert(msg);
	}
}

function cfm() {
	if (confirm("确定离开么?"))
		// 关闭当前窗口,下面两个方法都可以
		// window.close();
		self.close();
	else
		return false
}

window.onload = initAll;
function initAll() {
	document.getElementsByTagName("form")[0].onsubmit = function() {
		return addNode();
	}
}

function addNode() {
	var inText = document.getElementById("textArea").value;  //得到要添加的值
	var newText = document.createTextNode(inText);         //创建一个文本节点，内容是要添加的值
	var newGraf = document.createElement("p");             //创建一个<p>标签
	newGraf.appendChild(newText);                          //将上述文本节点添加到标签里面
	var docBody = document.getElementsByTagName("body")[0];  //确定要进行操作的地方
	docBody.appendChild(newGraf);                          //将节点加入到需要操作的地方

	return false; // 此处不可以省略，起到抑制默认行为的作用
}
function delNode() {
	var allGrafs = document.getElementsByTagName("p");    //得到需要进行删除的部分
	if (allGrafs.length > 1) {
		var lastGraf = allGrafs.item(allGrafs.length - 1)       //得到要删除的部分
		var docBody = document.getElementsByTagName("body")[0]  //确定需要进行操作的位置
		docBody.removeChild(lastGraf)                      //将节点从需要操作的地方删除
	}
	// return false;
}

function insertBeforeDemo() {
	var newItem = document.createElement("LI");        // 创建一个<li>标签
	var textnode = document.createTextNode("MMM");     //创建一个文本节点
	newItem.appendChild(textnode)                     //将文本节点添加到<li>标签中去

	var list = document.getElementById("List");      //得到要进行操作的部分
	list.insertBefore(newItem, list.childNodes[0]);  //在旧节点前插入新节点
	return false;
}

function replaceChildDemo() {
	var newItem = document.createElement("LI");      // 创建一个<li>标签
	var textnode = document.createTextNode("YYY");    //创建一个文本节点
	newItem.appendChild(textnode)                      //将文本节点添加到<li>标签中去
	
	var list = document.getElementById("List");         //得到要进行操作的部分
	list.replaceChild(newItem, list.childNodes[0]);      //在旧节点前插入新节点
	return false;
}

function clearDemo() {
	document.write("5654154545");
	document.clear();	//目前不支持 2016-11-24
	document.write("****5654154545");
	document.close();
}
