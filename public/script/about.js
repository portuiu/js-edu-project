
$(document).ready(function(){

    $.ajax({
        url: "/get_about",
        dataType: 'json',
        beforeSend: function(){
            var message = $("<p>Loading...</p>");
            message.attr("id","message");

            $("#about").find("h1").after(message);
        },
        success: function(data){
            var message = $("#message");
            var list = $("<ol></ol>");

            for (var i=0; i<data.length; ++i){
                var li = $("<li></li>");
                var a = $("<a>"+data[i].login+"</a>");
                a.attr("href",data[i].html_url);
                li.append(a);
                list.append(li);
            }

            message.after(list);
            message.remove();
        },
        error: function(err){
            var message = $("#message");
            message.text("Sorry, server error...")
        },
        async: true
    });

});
