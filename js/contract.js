updateContract=function(){var n=localStorage.getItem("contractTransacts"),t=localStorage.getItem("contract");token=localStorage.getItem("accessToken");var s=localStorage.getItem("settings");if(t&&token){token=JSON.parse(token);var p=token[3];if(t=JSON.parse(t),rowLength=t.length,n){n=JSON.parse(n);n.length,n[0].length;message=[];for(var e in n)message[e]="<caption><b>Payment Date: "+n[e][0]+"</b></caption><tr><th>Contract No</th><th>Amount</th><th>Receipt No</th><th>Contract Type</th></tr>",message[e]+="<tr><td>"+n[e][3]+"</td><td>"+n[e][4]+"</td><td>"+n[e][6]+"</td><td>"+n[e][8]+"</td></tr>",message[e]="<div class='mycap'><table style='width:100%'>"+message[e]+"</table></div>";message.sort(function(n,t){return n=n.split("<tr><td>")[1].split("</td><td>")[0].split("CT")[0],t=t.split("<tr><td>")[1].split("</td><td>")[0].split("CT")[0],n-t})}var a=document.getElementsByClassName("scroll"),o="",b="",r="if(localStorage.getItem('emailStatus')=='unconfirmed'&&token[4]=='local'){$('#section').css('color', '#fff');$('#section').html('You have to verify your email first before you perform this task');$('#section').slideDown(200,function(){$('#section').fadeOut(12000);});return false;}";if("local"==token[4]&&s)for(s=JSON.parse(s),row=0;row<rowLength;row++){if("unpaid"==t[row][4]||"deposit"==t[row][4])var i='<li><i class="fa fa-arrow-right"></i>Payment Status</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][4]+"</p><div class=\"block block-login-requirement\" style='margin-bottom:25px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+getContButton(t[row][8],t[row][9])+' <!--<button type="button" class="button" onclick="'+r+"$('#contract1111').slideDown(700,function(){$('#contract1111').fadeOut(15000);});\">Complete Payment</button>--></div>";else i='<li><i class="fa fa-arrow-right"></i>Payment Status</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][4]+"<b><a style='color:000;position:absolute;margin-top:-1px;font-size:12px;left:80px'><i class=\"conreceiptmessage fa fa-exclamation-circle\"></i></a></b></p>";o="in progress"==t[row][7]?"<div class='conttt' style='padding:10px;' id='id"+t[row][1]+"'><div style='text-align:center'><b>Your     "+getGetOrdinal(row+1)+"      contract</b><b><a class='deleCont' title='Cancel this contract' style='text-decoration:none;float:right;color:#fb6603;margin-top:-6px;font-size:20px' onclick=\""+r+"document.getElementById('contractt111').contractId.value='"+t[row][1]+"';document.getElementById('contractt111').userId.value='"+p+"';document.getElementById('contractt111').startDate.value='"+t[row][0]+"';document.getElementById('contractt111').containerId.value='id"+t[row][1]+"';document.getElementById('itemStatus').itemStatus.value='"+t[row][7]+"';$('#contractt111').slideDown(700)\"><i class='fa fa-trash-o'></i></a></b></div><ul><li><i class=\"fa fa-arrow-right\"></i>Contract Date</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+new Date(t[row][0]).toString().split("GMT")[0]+'</p><li><i class="fa fa-arrow-right"></i>Contract Id</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][1]+'</p><li><i class="fa fa-arrow-right"></i>Type of Application</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][2]+'</p><li><i class="fa fa-arrow-right"></i>Ready Date</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][3]+"</p>"+i+"<li><i class=\"fa fa-arrow-right\"></i>Requirement</li><li style='font-size:12px;float:right;margin-top:-20px' title='Edit Requirement'><a onclick=\""+r+"document.getElementById('textarea').value='"+t[row][5]+"';localStorage.setItem('contractId','"+t[row][1]+"');$('#contractt11').slideDown(700)\"><i class='fa fa-pencil'></i></a></li><p id='p"+t[row][1]+"' style='margin-left:30px;line-height:20px'>"+t[row][5]+'</p><br><br><!--<div class="block block-login-requirement">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="button" class="button" onclick="'+r+"document.getElementById('textarea').value='"+t[row][5]+"';localStorage.setItem('contractId','"+t[row][1]+"');$('#contractt11').slideDown(700)\">Edit Requirement</button></div>--><li style='margin-top:-20px'><i class=\"fa fa-arrow-right\"></i>Contact Type</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+t[row][6]+'</p><li><i class="fa fa-arrow-right"></i>Contract Status</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][7]+"</p></ul><b><a style='color:000;float:right;margin-top:-20px;font-size:15px'><i class=\"message1 fa fa-exclamation-circle\"></i></a></b>":"<div class='conttt' style='padding:10px;' id='id"+t[row][1]+"'><div style='text-align:center'><b>Your     "+getGetOrdinal(row+1)+"      contract</b><b><a class='deleCont' title='Recycle' style='text-decoration:none;float:right;color:#fb6603;margin-top:-6px;font-size:20px' onclick=\""+r+"document.getElementById('contractt111').contractId.value='"+t[row][1]+"';document.getElementById('contractt111').userId.value='"+p+"';document.getElementById('contractt111').startDate.value='"+t[row][0]+"';document.getElementById('contractt111').containerId.value='id"+t[row][1]+"';document.getElementById('itemStatus').itemStatus.value='"+t[row][7]+"';$('#contractt111').slideDown(700)\"><i class='fa fa-trash-o'></i></a></b></div><ul><li><i class=\"fa fa-arrow-right\"></i>Contract Date</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+new Date(t[row][0]).toString().split("GMT")[0]+'</p><li><i class="fa fa-arrow-right"></i>Contract Id</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][1]+'</p><li><i class="fa fa-arrow-right"></i>Type of Application</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][2]+'</p><li><i class="fa fa-arrow-right"></i>Ready Date</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][3]+"</p>"+i+'<li><i class="fa fa-arrow-right"></i>Requirement</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][5]+'</p><li><i class="fa fa-arrow-right"></i>Contact Type</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][6]+'</p><li><i class="fa fa-arrow-right"></i>Contract Status</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][7]+"</p></ul>",s[6]&&"Web Application"==t[row][2]&&(b=row!=rowLength-1?b+o+"<hr></div><br><br><br>":b+o+"</div>"),s[7]&&"Database"==t[row][2]&&(b=row!=rowLength-1?b+o+"<hr></div><br><br><br>":b+o+"</div>"),s[8]&&"Application Package"==t[row][2]&&(b=row!=rowLength-1?b+o+"<hr></div><br><br><br>":b+o+"</div>")}else for(row=0;row<rowLength;row++){if("unpaid"==t[row][4]||"deposit"==t[row][4])var i='<li><i class="fa fa-arrow-right"></i>Payment Status</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][4]+"</p><div class=\"block block-login-requirement\" style='margin-bottom:25px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+getContButton(t[row][8],t[row][9])+' <!--<button type="button" class="button" onclick="'+r+"$('#contract1111').slideDown(700,function(){$('#contract1111').fadeOut(15000);});\">Complete Payment</button>--></div>";else i='<li><i class="fa fa-arrow-right"></i>Payment Status</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][4]+"<b><a style='color:000;position:absolute;margin-top:-1px;font-size:12px;left:80px'><i class=\"conreceiptmessage fa fa-exclamation-circle\"></i></a></b></p>";o="in progress"==t[row][7]?"<div class='conttt' style='padding:10px;' id='id"+t[row][1]+"'><div style='text-align:center'><b>Your     "+getGetOrdinal(row+1)+"      contract</b><b><a class='deleCont' title='Cancel this contract' style='text-decoration:none;float:right;color:#fb6603;margin-top:-6px;font-size:20px' onclick=\""+r+"document.getElementById('contractt111').contractId.value='"+t[row][1]+"';document.getElementById('contractt111').userId.value='"+p+"';document.getElementById('contractt111').startDate.value='"+t[row][0]+"';document.getElementById('contractt111').containerId.value='id"+t[row][1]+"';document.getElementById('itemStatus').itemStatus.value='"+t[row][7]+"';$('#contractt111').slideDown(700)\"><i class='fa fa-trash-o'></i></a></b></div><ul><li><i class=\"fa fa-arrow-right\"></i>Contract Date</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+new Date(t[row][0]).toString().split("GMT")[0]+'</p><li><i class="fa fa-arrow-right"></i>Contract Id</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][1]+'</p><li><i class="fa fa-arrow-right"></i>Type of Application</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][2]+'</p><li><i class="fa fa-arrow-right"></i>Ready Date</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][3]+"</p>"+i+"<li><i class=\"fa fa-arrow-right\"></i>Requirement</li><li style='font-size:12px;float:right;margin-top:-20px' title='Edit Requirement'><a onclick=\""+r+"document.getElementById('textarea').value='"+t[row][5]+"';localStorage.setItem('contractId','"+t[row][1]+"');$('#contractt11').slideDown(700)\"><i class='fa fa-pencil'></i></a></li><p id='p"+t[row][1]+"' style='margin-left:30px;line-height:20px'>"+t[row][5]+'</p><br><br><!--<div class="block block-login-requirement">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="button" class="button" onclick="'+r+"document.getElementById('textarea').value='"+t[row][5]+"';localStorage.setItem('contractId','"+t[row][1]+"');$('#contractt11').slideDown(700)\">Edit Requirement</button></div>--><li style='margin-top:-20px'><i class=\"fa fa-arrow-right\"></i>Contact Type</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+t[row][6]+'</p><li><i class="fa fa-arrow-right"></i>Contract Status</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][7]+"</p></ul><b><a style='color:000;float:right;margin-top:-20px;font-size:15px'><i class=\"message1 fa fa-exclamation-circle\"></i></a></b>":"<div class='conttt' style='padding:10px;' id='id"+t[row][1]+"'><div style='text-align:center'><b>Your     "+getGetOrdinal(row+1)+"      contract</b><b><a class='deleCont' title='Recycle' style='text-decoration:none;float:right;color:#fb6603;margin-top:-6px;font-size:20px' onclick=\""+r+"document.getElementById('contractt111').contractId.value='"+t[row][1]+"';document.getElementById('contractt111').userId.value='"+p+"';document.getElementById('contractt111').startDate.value='"+t[row][0]+"';document.getElementById('contractt111').containerId.value='id"+t[row][1]+"';document.getElementById('itemStatus').itemStatus.value='"+t[row][7]+"';$('#contractt111').slideDown(700)\"><i class='fa fa-trash-o'></i></a></b></div><ul><li><i class=\"fa fa-arrow-right\"></i>Contract Date</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+new Date(t[row][0]).toString().split("GMT")[0]+'</p><li><i class="fa fa-arrow-right"></i>Contract Id</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][1]+'</p><li><i class="fa fa-arrow-right"></i>Type of Application</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][2]+'</p><li><i class="fa fa-arrow-right"></i>Ready Date</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][3]+"</p>"+i+'<li><i class="fa fa-arrow-right"></i>Requirement</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][5]+'</p><li><i class="fa fa-arrow-right"></i>Contact Type</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][6]+'</p><li><i class="fa fa-arrow-right"></i>Contract Status</li><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+t[row][7]+"</p></ul>",b=row!=rowLength-1?b+o+"<hr></div><br><br><br>":b+o+"</div>"}a[2].innerHTML=b}$(function(){var n=$(".conreceiptmessage");if($(".conreceiptmessage")){var t=n.length;for(e=0;t>e;e++)$(n[e]).balloon({html:!0,contents:message[e],css:{border:"solid 1px #000",color:"#000",fontSize:".7rem"}})}})},$(function(){$(".message1")&&$(".message1").balloon({html:!0,contents:"We are executing your contract. <br>This area will be marked 'finished'<br> when we are done.",css:{border:"solid 1px #000",color:"#000",fontSize:".7rem"}})});