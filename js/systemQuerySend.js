function queryImage(){if(token=localStorage.getItem("accessToken"),token){token=JSON.parse(token);var e=token[1],o=encodeURIComponent("SELECT BQ where LOWER(BP)='"+e.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(imageQueryResponse)}}function queryWebProductURL(){var e=encodeURIComponent("SELECT A, B, C, D, E, F, G, H, I, J, K, L"),o=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1b4l0eJjKL6dbbDFRuCd5ALEykW-D2RyWIdcVouXC-s0/gviz/tq?sheet=Sheet1&headers=1&tq="+e);o.send(queryWebProductResponse)}function queryPackageProductURL(){var e=encodeURIComponent("SELECT A, B, C, D, E, F, G, H, I, J, K, L"),o=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1DAV0aXqhLOYXWE8Bg5C9i9379gxCzyyKm9ofbV1vYgM/gviz/tq?sheet=Sheet1&headers=1&tq="+e);o.send(queryPackageProductResponse)}function queryDatabaseProductURL(){var e=encodeURIComponent("SELECT A, B, C, D, E, F, G, H, I, J, K, L"),o=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1M6xx7NNVXrbZuQSiFS25WeyZONvRdOcwZy5VrnVL6hY/gviz/tq?sheet=Sheet1&headers=1&tq="+e);o.send(queryDatabaseProductResponse)}function queryTestimons(){var e=encodeURIComponent("SELECT BR, BS, BT, BU, BV, BW where BT is not null"),o=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+e);o.send(testimonsQueryResponse)}function registerQuerySend(){if(captchaLength=grecaptcha.getResponse(myCatcha2).length,!captchaLength)return grecaptcha.reset(myCatcha2),!1;grecaptcha.reset(myCatcha2),$("#html_element2").slideUp(0),$("#second").slideUp(0,function(){$("#first").slideUp(0),$("#third").slideUp(0),$("#revolver2").show()});var e=document.getElementById("regist");name=e.elements[0].value,email=e.elements[1].value;var o=encodeURIComponent("SELECT M, N where LOWER(M)='"+name.toLowerCase()+"' OR LOWER(N)='"+email.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(registerQueryResponse)}function adminQuerySend(){if(captchaLength=grecaptcha.getResponse(myCatcha1).length,!captchaLength)return grecaptcha.reset(myCatcha1),!1;grecaptcha.reset(myCatcha1),$("#html_element1").slideUp(0,function(){$("#revolver").show()});var e=document.getElementById("admin");name=e.elements[0].value,password=e.elements[1].value;var o=encodeURIComponent("SELECT BM, BN where LOWER(BM)='"+name.toLowerCase()+"' AND BN='"+password+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(adminQueryResponse)}function pUpdateQuery(){$("#revolver").slideDown(200);var e=$("#v4").val(),o=localStorage.getItem("accessToken");if(o){o=JSON.parse(o);var t=o[1],r=o[2];if(r==e)return void $("#profile1").submit();var s=encodeURIComponent("SELECT M, N where LOWER(M) !='"+t.toLowerCase()+"' AND LOWER(N)='"+e.toLowerCase()+"'"),n=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+s);n.send(PQueryResponse)}}function checkForgotInfo(){if(captchaLength=grecaptcha.getResponse(myCatcha5).length,!captchaLength)return grecaptcha.reset(myCatcha5),!1;grecaptcha.reset(myCatcha5),$("#html_element5").slideUp(0),$("#second").slideUp(0,function(){$("#first").slideUp(0),$("#third").slideUp(0),$("#revolver2").show()}),elements=$("#forgotinfo").find(":input");var e=$(elements[0]).val(),o=encodeURIComponent("SELECT M, N, O where LOWER(N) ='"+e.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(forgotQueryResponse)}function loginQuerySend(){if(captchaLength=grecaptcha.getResponse(myCatcha1).length,!captchaLength)return grecaptcha.reset(myCatcha1),!1;grecaptcha.reset(myCatcha1),$("#html_element1").slideUp(0),$("#second").slideUp(0,function(){$("#first").slideUp(0),$("#third").slideUp(0),$("#revolver2").slideDown(0)});var e=document.getElementById("login");name=e.elements[0].value,password=e.elements[1].value,rememberMe={username:name,password:password},rememberMe=JSON.stringify(rememberMe),$("#remember").is(":checked")&&localStorage.setItem("rememberMe",rememberMe),$("#remember").is(":unchecked")&&localStorage.removeItem("rememberMe");var o=encodeURIComponent("SELECT M, N, O, Q where LOWER(M)='"+name.toLowerCase()+"' AND O='"+password+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(loginQueryResponse)}function pullAccessToken(e){var o=encodeURIComponent("SELECT R, S, T, U, V where LOWER(U)='"+e.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(tokenQueryResponse)}function newsLetterQuerySend(){if(captchaLength=grecaptcha.getResponse(myCatcha4).length,!captchaLength)return grecaptcha.reset(myCatcha4),!1;grecaptcha.reset(myCatcha4),$("#html_element4").slideUp(200,function(){$("#revolver3").slideDown(200)});var e=document.getElementById("form1");email=e.elements[0].value;var o=encodeURIComponent("SELECT K where LOWER(K)='"+email.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(newsLetterQueryResponse)}function profileQuery(e){e=e;var o=encodeURIComponent("SELECT AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU where LOWER(AK)='"+e.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(profileQueryResponse)}function contractQuery(e){var o=encodeURIComponent("SELECT AV,AX,AY,AZ,BA,BB,BC,BD,BE,CI where LOWER(BE)='"+e.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(contractQueryResponse)}function contractTransactQuery(e){var o=encodeURIComponent("SELECT A, B, C, D, E, F, G, H, I where LOWER(B)='"+e.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1SdA4XL0rE7GNzH5XzdSO_yiaihPaVVug8ZPFBnsMvrM/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(contractTransactResponse)}function serviceTransactQuery(e){var o=encodeURIComponent("SELECT A, B, C, D, E, F, G where LOWER(B)='"+e.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1owqe67Pv9WaajVK1SL5pQG60saiUI9FtbkCA8CJw8vc/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(serviceTransactResponse)}function productTransactQuery(e){var o=encodeURIComponent("SELECT A, B, C, D, E, F, G, H, I, K where LOWER(B)='"+e.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/11gviApRHEyoC4zUvz3UiipYxKuGUKjHPX0Fd_GGweCA/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(productTransactQueryResponse)}function serviceQuery(e){var o=encodeURIComponent("SELECT BX, BZ, CA, CB, CC, CD, CE, CF, CG, CH where LOWER(CG)='"+e.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(serviceQueryResponse)}function settingsQuery(e){var o=encodeURIComponent("SELECT Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI where LOWER(X)='"+e.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(settingsQueryResponse)}function EConfirmQuery(e,o){o=o,e=e;var t=encodeURIComponent("SELECT G where LOWER(G)='"+e.toLowerCase()+"' AND LOWER(H)='"+o.toLowerCase()+"'"),r=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+t);r.send(EConfirmQueryResponse)}function EReconfirmQuery(e,o){var t=encodeURIComponent("SELECT N,Q where LOWER(N)='"+e.toLowerCase()+"' AND LOWER(Q)='"+o.toLowerCase()+"'"),r=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+t);r.send(EReconfirmQueryResponse)}function EStatusQuery(e){var o=encodeURIComponent("SELECT G where LOWER(I)='"+e.toLowerCase()+"'"),t=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1LKRDn3eqt8oRoepSkLOz-lCdXGaMzgQqdJMwDh5GoUk/gviz/tq?sheet=Sheet1&headers=1&tq="+o);t.send(EStatusQueryResponse)}function queryDatabaseProductResponse(e){if(e.isError())return void console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());var o=e.getDataTable();if(0==o.getNumberOfRows())return void(QueryDatabaseProductURLBool=!0);var t=[];databaseProductURL=[];var r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(i=0;i<r;i++){for(ii=0;ii<s;ii++)databaseProductURL.push(o.getValue(ii,i));t.push(databaseProductURL),databaseProductURL=[]}localStorage.setItem("databaseProductURL",JSON.stringify(t)),QueryDatabaseProductURLBool=!0}function queryPackageProductResponse(e){if(e.isError())return void console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());var o=e.getDataTable();if(0==o.getNumberOfRows())return void(queryPackageProductURLBool=!0);var t=[];packageProductURL=[];var r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(i=0;i<r;i++){for(ii=0;ii<s;ii++)packageProductURL.push(o.getValue(ii,i));t.push(packageProductURL),packageProductURL=[]}localStorage.setItem("packageProductURL",JSON.stringify(t)),queryPackageProductURLBool=!0}function queryWebProductResponse(e){if(e.isError())return void console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());var o=e.getDataTable();if(0==o.getNumberOfRows())return void(queryWebProductURLBool=!0);var t=[];webProductURL=[];var r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(i=0;i<r;i++){for(ii=0;ii<s;ii++)webProductURL.push(o.getValue(ii,i));t.push(webProductURL),webProductURL=[]}localStorage.setItem("webProductURL",JSON.stringify(t)),queryWebProductURLBool=!0}function testimonsQueryResponse(e){if(e.isError())return void console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());var o=e.getDataTable();if(0!=o.getNumberOfRows()){testimonials=[];var t=[],r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(i=0;i<s;i++){for(j=0;j<r;j++)t.push(o.getValue(i,j));testimonials.push(t),t=[]}updateTestimonials()}}function imageQueryResponse(e){if(e.isError())return void console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());var o=e.getDataTable();if(0==o.getNumberOfRows())return void(imageBool=!0);var t=o.getValue(0,0);localStorage.setItem("profileImgURL",t),document.getElementById("pic")&&updateProPic(),imageBool=!0}function forgotQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),void $("#forgotinfo").clearForm();var o=e.getDataTable();if(0==o.getNumberOfRows())$("#section").html("<b style='color:#fff'>We could not send you a message because the email you supplied is not valid</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#forgotinfo").clearForm();else{request&&request.abort();var t=$("#forgotinfo"),r=t.find("input"),s=o.getValue(0,0),n=o.getValue(0,1),a=o.getValue(0,2),i={name:s,email:n,password:a};r.prop("disabled",!0),request=$.ajax({url:"https://script.google.com/macros/s/AKfycbznXy_SbLDdwmVjUEgPp2m-MwOtZG-Lmn1qmHbk3_wmck_pPCLJ/exec",type:"post",data:i}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),$("#section").html("<b style='color:#fff'>We have sent your login details to your email. Thanks!</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#forgotinfo").clearForm()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>An error occurred. Check your console</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#forgotinfo").clearForm()}),request.always(function(){r.prop("disabled",!1)})}}function EStatusQueryResponse(e){if(e.isError())return void console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());var o,t=e.getDataTable();t.getNumberOfRows()>0?(o="confirmed",localStorage.setItem("emailStatus",o),document.getElementById("v4")&&refreshStatus()):(o="unconfirmed",localStorage.setItem("emailStatus",o),document.getElementById("v4")&&refreshStatus())}function PQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),void $("#revolver").slideUp(200,function(){$("#section").slideDown(function(){$("#section").fadeOut(12e3)})});var o=e.getDataTable();return o.getNumberOfRows()>0?($("#section").html("<b style='color:#fff'>The email you entered is associated with another account. Please recheck your email</b>"),void $("#revolver").slideUp(200,function(){$("#section").slideDown(function(){$("#section").fadeOut(12e3)})})):void $("#profile1").submit()}function EConfirmQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),void $("#revolver").slideUp(200,function(){$("#section").html("<b style='color:red'>System error!. Pls check your console</b>")});var o=e.getDataTable();return o.getNumberOfRows()>0?void $("#revolver").slideUp(200,function(){$("#section").html("<b style='color:#000'>Your email has already been confirmed!</b>")}):void EReconfirmQuery(email,id)}function EReconfirmQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),void $("#revolver").slideUp(200,function(){$("#section").html("<b style='color:red'>System error!. Pls check your console</b>")});var o=e.getDataTable();if(0==o.getNumberOfRows())return void $("#revolver").slideUp(200,function(){$("#section").html("<b style='color:#000'>Wrong information supplied!!!!!</b>")});request&&request.abort(),token=localStorage.getItem("accessToken"),token=JSON.parse(token);var t=token[1],r={email:email,id:id,name:t};request=$.ajax({url:"https://script.google.com/macros/s/AKfycbxE2KXblR1SQUYFnCXGbPo_bOLh8A9wzL8KhrKgrRr_DbJl2b8/exec",type:"post",data:r}),request.done(function(e,o,r){console.log("your data is sent!"),console.log(e),console.log(o),console.log(r),EStatusQuery(t),$("#revolver").slideUp(200,function(){$("#section").html("<b style='color:#000'>Congrats!, "+t+" your email has now been confirmed. You can now use all our resources. Thanks!</b> <a href='/home'>Go to home</a>")})}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#revolver").slideUp(200,function(){$("#section").html("<b style='color:red'>An error occurred. Check your console</b>")})})}function adminQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),$("#section").html("<b style='color:red'>System error!. Pls check your consol</b>"),$("#revolver").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),void $("#admin").clearForm();var o=e.getDataTable();return 0==o.getNumberOfRows()?($("#section").html("<b style='color:#fff'>Wrong login credentials!!!!!!</b>"),$("#revolver").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),void $("#admin").clearForm()):void $("#revolver").slideUp(200)}function registerQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),$("#section").html("<b style='color:red'>System error!. Pls check your consol</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),void $("#regist").clearForm();var o=e.getDataTable();if(o.getNumberOfRows()>0)$("#section").html("<b style='color:#fff'>The username or email already exist</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#regist").clearForm();else{request&&request.abort();var t=$("#regist"),r=t.find("input"),s=t.serialize();r.prop("disabled",!0),request=$.ajax({url:"https://script.google.com/macros/s/AKfycbzQW2BKnuBXkvhpqP8I_UwralrRfmLxXCftpQ6q5uvvYgCP-a0/exec",type:"post",data:s}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),$("#section").html("<b style='color:#fff'>Congrats!. You are now registered. We have sent you a link to verify your email. Thanks!</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#regist").clearForm()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>An error occurred. Check your console</b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#regist").clearForm()}),request.always(function(){r.prop("disabled",!1)})}}function loginQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),$("#section").html("<b style='color:red'>System error!. Pls check your console<b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),void $("#login").clearForm();var o=e.getDataTable();if(0==o.getNumberOfRows())$("#section").html("<b style='color:#fff'>Wrong username or password<b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})});else{request&&request.abort();var t=$("#login"),r=t.find("input"),s=o.getValue(0,1),n=o.getValue(0,0),a=o.getValue(0,3);serializedData={name:n,email:s,id:a,type:"local"},r.prop("disabled",!0),request=$.ajax({url:"https://script.google.com/macros/s/AKfycbwUPqrDFK4ky1QeK-f44ezKtTx9tbnPOz9TKMngcmeYa57EDXo/exec",type:"post",data:serializedData}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),pullAccessToken(a),profileQuery(n),settingsQuery(n),EStatusQuery(n),timeInterval=setInterval(function(){if(localStorage.getItem("accessToken")&&localStorage.getItem("profile")&&localStorage.getItem("settings")&&localStorage.getItem("emailStatus")){clearInterval(timeInterval),imageBool=!1,queryImage();var e=setInterval(function(){imageBool&&(clearInterval(e),$("#revolver2").hide(),location.replace("/home"))},200)}},500)}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section").html("<b style='color:red'>An error occurred. Check your console<b>"),$("#revolver2").slideUp(200,function(){$("#section").slideDown(200,function(){$("#section").fadeOut(15e3)})}),$("#login").clearForm()}),request.always(function(){r.prop("disabled",!1)})}}function tokenQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),$("#section").html("<b style='color:red'>System error!. Pls check your console<b>"),void $("#section").fadeIn(1e3,function(){$("#section").fadeOut(1e4)});var o=e.getDataTable();o.getValue(0,1);id=o.getValue(0,3),contractBool=!1,serviceBool=!1,productTransactBool=!1,serviceTransactBool=!1,contractTransactBool=!1,queryWebProductURLBool=!1,queryPackageProductURLBool=!1,QueryDatabaseProductURLBool=!1,contractQuery(id),serviceQuery(id),productTransactQuery(id),serviceTransactQuery(id),contractTransactQuery(id),queryWebProductURL(),queryPackageProductURL(),queryDatabaseProductURL();var t=[],r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(i=0;i<r;i++)t.push(o.getValue(s-1,i));tokenTimeInterval=setInterval(function(){contractBool&&serviceBool&&productTransactBool&&serviceTransactBool&&contractTransactBool&&queryWebProductURLBool&&queryPackageProductURLBool&&QueryDatabaseProductURLBool&&(clearInterval(tokenTimeInterval),localStorage.setItem("accessToken",JSON.stringify(t)))},200)}function newsLetterQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),$("#section2").html("<b style='color:red'>System error!. Pls check your console<b>"),$("#revolver3").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(15e3)})}),void $("#form1").clearform();var o=e.getDataTable();if(o.getNumberOfRows()>0)$("#section2").html("<b style='color:#fff'>You have already subscribed</b>"),$("#revolver3").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(15e3)})}),$("#form1").clearForm();else{request&&request.abort();var t=$("#form1"),r=t.find("input,button"),s=t.serialize();r.prop("disabled",!0),request=$.ajax({url:"https://script.google.com/macros/s/AKfycbzHxW3hRDRIkFNYOXTQez3_ve_GhU4RWqqZ2-Dnh0wBXili0Po/exec",type:"post",data:s}),request.done(function(e,o,t){console.log("your data is sent!"),console.log(e),console.log(o),console.log(t),$("#section2").html("<b style='color:#fff'>Thanks!. You are now subcribed to our news letter.</b>"),$("#revolver3").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(15e3)})}),$("#form1").clearForm()}),request.fail(function(e,o,t){console.error("The following error occurred: "+o,t),$("#section2").html('<b style="color:red; text-align:center">An error has occurred. Check your console for the error code!</b>'),$("#revolver3").slideUp(200,function(){$("#section2").slideDown(200,function(){$("#section2").fadeOut(15e3)})}),$("#form1").clearForm()}),request.always(function(){r.prop("disabled",!1)})}}function profileQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),void $("#section").fadeIn(1e3,function(){$("#section").fadeOut(1e4)});var o=e.getDataTable();if(0!=o.getNumberOfRows()){var t=[],r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(i=0;i<r;i++)t.push(o.getValue(s-1,i));localStorage.setItem("profile",JSON.stringify(t))}}function contractQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),void $("#section").fadeIn(1e3,function(){$("#section").fadeOut(1e4)});var o=e.getDataTable();if(0==o.getNumberOfRows())return void(contractBool=!0);var t=[];contract=[];var r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(ii=0;ii<s;ii++){for(i=0;i<r;i++)contract.push(o.getValue(ii,i));t.push(contract),contract=[]}localStorage.setItem("contract",JSON.stringify(t)),contractBool=!0}function contractTransactResponse(e){if(e.isError())return void console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());var o=e.getDataTable();if(0==o.getNumberOfRows())return void(contractTransactBool=!0);var t=[];contractTransact=[];var r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(ii=0;ii<s;ii++){for(i=0;i<r;i++)contractTransact.push(o.getValue(ii,i));t.push(contractTransact),contractTransact=[]}localStorage.setItem("contractTransacts",JSON.stringify(t)),contractTransactBool=!0}function serviceTransactResponse(e){if(e.isError())return void console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());var o=e.getDataTable();if(0==o.getNumberOfRows())return void(serviceTransactBool=!0);var t=[];serviceTransact=[];var r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(ii=0;ii<s;ii++){for(i=0;i<r;i++)serviceTransact.push(o.getValue(ii,i));t.push(serviceTransact),serviceTransact=[]}localStorage.setItem("serviceTransacts",JSON.stringify(t)),serviceTransactBool=!0}function productTransactQueryResponse(e){if(e.isError())return void console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());var o=e.getDataTable();if(0==o.getNumberOfRows())return void(productTransactBool=!0);var t=[];product=[];var r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(ii=0;ii<s;ii++){for(i=0;i<r;i++)product.push(o.getValue(ii,i));t.push(product),product=[]}localStorage.setItem("product",JSON.stringify(t)),productTransactBool=!0}function serviceQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),void $("#section").fadeIn(1e3,function(){$("#section").fadeOut(1e4)});var o=e.getDataTable();if(0==o.getNumberOfRows())return void(serviceBool=!0);var t=[];service=[];var r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(ii=0;ii<s;ii++){for(i=0;i<r;i++)service.push(o.getValue(ii,i));t.push(service),service=[]}localStorage.setItem("service",JSON.stringify(t)),serviceBool=!0}function settingsQueryResponse(e){if(e.isError())return console.log("Error in query: "+e.getMessage()+" "+e.getDetailedMessage()),$("#section").html("<b style='color:red'>System error!. Pls check your console</b>"),void $("#section").fadeIn(1e3,function(){$("#section").fadeOut(1e4)});var o=e.getDataTable();if(0!=o.getNumberOfRows()){var t=[],r=o.getNumberOfColumns(),s=o.getNumberOfRows();for(i=0;i<r;i++)t.push(o.getValue(s-1,i));localStorage.setItem("settings",JSON.stringify(t))}}google.load("visualization","1",{packages:["table"]});var request,imageBool,contractBool,serviceBool,productTransactBool,serviceTransactBool,contractTransactBool,queryWebProductURLBool,queryPackageProductURLBool,QueryDatabaseProductURLBool;