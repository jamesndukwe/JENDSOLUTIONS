var token=localStorage.getItem("accessToken")||localStorage.getItem("adminToken");if(token){token=JSON.parse(token);var username=token[1];username&&$(".user").html(username)}