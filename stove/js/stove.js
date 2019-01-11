$("ul li").on("click",function(){
    $(this).addClass('current').siblings().removeClass("current");
})
$('#lfd').bind("click",function(){
    $(".table1").show();$(".table2").hide();
});
$('#cs').bind("click",function(){
    $(".table2").show();$(".table1").hide();
});