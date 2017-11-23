
var vCaps ="0"; 
var vShift ="0";

function toggle()
{
	var innerHTMLforvkb = " ";
	//var innerHTMLforvkb = gethtml();
	var ele = document.getElementById("letters");
	var text = document.getElementById("displayText");
	var kbd = document.getElementById("img1");
	var myIFrame = document.getElementById("ha_html");
	if(kbd.style.display == "block") 
	{
		kbd.style.display = "none";
		ele.style.display = "block";
		//ele.innerHTML = innerHTMLforvkb;
		text.innerHTML = "Hide Virtual Keyboard";
	}
	else 
	{
		//ele.innerHTML = " ";
		ele.style.display = "none";
		kbd.style.display = "block";
		text.innerHTML = "Show Virtual Keyboard";
	}
	myIFrame.contentWindow.document.body.focus();
} 

function showhide(showid,hideid)
{
	var objshow = document.getElementById(showid);
	var objhide = document.getElementById(hideid);
	
	objhide.style.display = "none";
	objshow.style.display = "block";
} 


function disp(m,start,end)
{
	var myIFrame = document.getElementById("ha_html");
	
	idoc = myIFrame.contentWindow.document;
	text = m;	
	if($.client.browser=="Explorer"){
		myIFrame.contentWindow.document.body.focus();
		
		if(typeof idoc.selection !== "undefined" && idoc.selection.type !== "Text" && idoc.selection.type !== "None")
		{
			start = false;
			idoc.selection.clear();
		}
		var sel = idoc.selection.createRange();
		if(sel!=null)
		{	
			//sel.pasteHTML(text);
			/* if(text == "~" || text == "@" || text == "#" || text == "%" || text == "&" || text == "*" || text == "+" || text == "=" || text == "|" )
			{
				//text = "<font face='Trebuchet MS'>"+ text +"</font>";
				
				//sel.pasteHTML(text);
				sel.text = text;
			}
			else
			{*/
				sel.text = text;
			//}
		}
		
		if (text.indexOf("\n") === -1) {
			if (start === false) {} else {
				if (typeof start !== "undefined") {
					sel.moveStart("character", - text.length + start);
					sel.moveEnd("character", - end);
				} else {
					sel.moveStart("character", - text.length);
				}
			}
			
		}
	}else{
		idoc.execCommand("insertHTML", false, text);
	}
	
	if(vCaps =="0")
	{
		showhide('unshift-letters','shift-letters');
		setShift('0');
	}

}

function setSelectionRange(input, selectionStart, selectionEnd) 
{
	if (input.setSelectionRange) {
		input.focus();
		input.setSelectionRange(selectionStart, selectionStart);
	}
	else if (input.createTextRange) {
		var range = input.createTextRange();
		range.collapse(true);
		range.moveEnd('character', selectionEnd);
		range.moveStart('character', selectionStart);
		range.select();
	}
}


function doGetCaretPosition (ctrl) {
	
	var CaretPos = 0;	// IE Support
	ctrl = document.getElementById("ha_html").contentWindow.document;
	if (document.selection) 
	{
		ctrl.focus ();
		var Sel = document.selection.createRange();
		Sel.moveStart ('character', -ctrl.value.length);
		CaretPos = Sel.text.length;
	}
	// Firefox support
	else if (ctrl.selectionStart || ctrl.selectionStart == '0')
		CaretPos = ctrl.selectionStart;
		
	alert(CaretPos);
	return (CaretPos);
}


function setCaps(val)
{
	vCaps = val;
	if(vCaps =="1")
		document.getElementById("msg").innerHTML="Caps Lock ON";
	else
		document.getElementById("msg").innerHTML="&nbsp;";
}

function setShift(val)
{
	vShift = val;
	if(vShift =="1")
		document.getElementById("msg").innerHTML="Shift Mode ON";
	else
		document.getElementById("msg").innerHTML="&nbsp;";
}

function gethtml()
{
	var htmlforvkb = ' ';
	
	htmlforvkb = htmlforvkb + '<table id="vowelTable" border="0">';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell1"  type="Button"  Value = "অ"  onclick="disp(this.value)" /> </td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell2" type="Button"  Value = "আ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb +'<td> <INPUT id="cell3" type="Button"  Value = "ই"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell4" type="Button"  Value = "ঈ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell5" type="Button"  Value = "উ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell6" type="Button"  Value = "ঊ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell7" type="Button"  Value = "ঋ"  onclick="disp(this.value)" /> </td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell8" type="Button"  Value = "এ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell9" type="Button"  Value = "ঐ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell10" type="Button"  Value = "ও"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell11" type="Button"  Value = "ঔ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '</table>';
	htmlforvkb = htmlforvkb + '<table id="conskarTable" border="0">';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td>';
	htmlforvkb = htmlforvkb + '<table id="consonantTable" border="0">';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell12" type="Button"  Value = "ক"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell13" type="Button"  Value = "খ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell14" type="Button"  Value = "গ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell15" type="Button"  Value = "ঘ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell16" type="Button"  Value = "ঙ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';      
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell17" type="Button"  Value = "চ"  onclick="disp(this.value)" /></td>';		   
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell18" type="Button"  Value = "ছ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell19" type="Button"  Value = "জ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell19" type="Button"  Value = "ঝ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell20" type="Button"  Value = "ঞ"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell21" type="Button"  Value = "ট"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell22" type="Button"  Value = "ঠ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell23" type="Button"  Value = "ড"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell24" type="Button"  Value = "ঢ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell25" type="Button"  Value = "ণ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell26" type="Button"  Value = "ত"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell27" type="Button"  Value = "থ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell28" type="Button"  Value = "দ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell29" type="Button"  Value = "ধ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell30" type="Button"  Value = "ন"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell31" type="Button"  Value = "প"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell32" type="Button"  Value = "ফ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell33" type="Button"  Value = "ব"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell34" type="Button"  Value = "ভ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell35" type="Button"  Value = "ম"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell36" type="Button"  Value = "য"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell37" type="Button"  Value = "ৰ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell38" type="Button"  Value = "ল"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell39" type="Button"  Value = "ৱ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell40" type="Button"  Value = "শ"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell41" type="Button"  Value = "ষ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell42" type="Button"  Value = "স"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell43" type="Button"  Value = "হ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell44" type="Button"  Value = "ক্ষ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell45" type="Button"  Value = "ড়"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell46" type="Button"  Value = "ঢ়"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell47" type="Button"  Value = "য়"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell48" type="Button"  Value = "ৎ"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell49" type="Button"  Value = "ং"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell50" type="Button"  Value = "ঃ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell51" type="Button"  Value = "ঁ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '</table>'; 
	htmlforvkb = htmlforvkb + '</td>';
	htmlforvkb = htmlforvkb + '<td>';
	htmlforvkb = htmlforvkb + '<table id="karTable" border="0">';
	//htmlforvkb = htmlforvkb + '<tbody>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell52" type="Button"  Value = "া"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell53" type="Button"  Value = "ি"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell54" type="Button"  Value = "ী"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell55" type="Button"  Value = "ু"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell56" type="Button"  Value = "ূ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell57" type="Button"  Value = "ে"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell58" type="Button"  Value = "ৈ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell59" type="Button"  Value = "ো"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell60" type="Button"  Value = "ৌ "  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell61" type="Button"  Value = "ৃ"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell62" type="Button"  Value = "ৄ"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell63" type="Button"  Value = "্" onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell64" type="Button"  Value = "৷ " onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell65" type="Button"  Value = "০"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell66" type="Button"  Value = "১"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell67" type="Button"  Value = "২"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell68" type="Button"  Value = "৩"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell69" type="Button"  Value = "৪"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '<tr>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell70" type="Button"  Value = "৫"  onclick="disp(this.value)" /></td>';		 
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell71" type="Button"  Value = "৬"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell72" type="Button"  Value = "৭"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell73" type="Button"  Value = "৮"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '<td> <INPUT id="cell74" type="Button"  Value = "৯"  onclick="disp(this.value)" /></td>';
	htmlforvkb = htmlforvkb + '</tr>';
	htmlforvkb = htmlforvkb + '</table>';                          
	htmlforvkb = htmlforvkb + '</td>'; 
	htmlforvkb = htmlforvkb + '</tr>';                 
	htmlforvkb = htmlforvkb + '</table>';              
	  
	return htmlforvkb;
}

function insertHere(who,str)
{
	if (document.selection){
		who.focus();
		sel = document.selection.createRange();
		alert(sel);
		sel.text = str;
		
	}
	else if (who.selectionStart !== undefined){
		var tem= who.value;
		var sPos = who.selectionStart;
		var ePos = who.selectionEnd;
		who.value = tem.substring(0, sPos)+ str+ tem.substring(ePos);
		who.selectionStart= who.selectionEnd=sPos+str.length;
	}
}

