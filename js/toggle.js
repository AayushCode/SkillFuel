$(document).ready(function()
{
    $(".togglebutton").click(function()
    {
        if($('#Button').hasClass("glyphicon glyphicon-chevron-left"))
        {
            $('#Button').removeClass("glyphicon glyphicon-chevron-left");
            $('#Button').addClass("glyphicon glyphicon-chevron-right");
        }

        else  if($('#Button').hasClass("glyphicon glyphicon-chevron-right")){
            $('#Button').removeClass("glyphicon glyphicon-chevron-right");
            $('#Button').addClass("glyphicon glyphicon-chevron-left");
        }
    });
});