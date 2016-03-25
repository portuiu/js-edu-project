
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://js-team.azurewebsites.net/get_about', true);

var message = document.createElement("p");
document.body.appendChild(message);

xhr.onloadstart = function(){
    message.textContent = "Loading...";
};

xhr.onerror = function(){
    message.textContent = "Sorry, server error :("
};

xhr.onload = function(){
    if (xhr.status == 200) {
        try {
                var arr = JSON.parse(xhr.responseText);

                var ol = document.createElement("ol");

                for (var i = 0; i < arr.length; ++i) {
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    a.textContent = arr[i].login;
                    a.setAttribute("href", arr[i].html_url);
                    li.appendChild(a);
                    ol.appendChild(li);
                }

                document.body.removeChild(message);
                document.body.appendChild(ol);
            } catch(err){
                message.textContent = "Sorry, server error :("
            };
    } else {
        message.textContent = xhr.statusText;
    }
}
xhr.send();
