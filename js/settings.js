updateSettings=function(){var e=localStorage.getItem("settings");if(e)for(e=JSON.parse(e),i=0;i<11;i++)i<10&&(document.getElementById("value"+(i+1)).checked=e[i]),10==i&&"Phone"==e[10]&&(document.getElementById("value"+(i+1)).checked=e[i]),10==i&&"Email"==e[10]&&(document.getElementById("value"+(i+2)).checked=e[i])};