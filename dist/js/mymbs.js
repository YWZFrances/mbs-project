$(function(){touch.on(".dengluzhuce","tap",function(){window.location="/register.html"})}),window.onload=function(){var o=cookieUtil.getCookieValue("userLogin");console.log(o),""!=o&&($(".dengluzhuce").html(""),$(".dengluzhuce").addClass("iconfont icon-wo left"),$(".name").html(o+"<br />普通客户"),$(".dizhi").html("我的收藏"))};