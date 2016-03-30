var json = JSON.parse($('#collaborators').html());

$.each(json,function(index, value){
    $('<li>'+value+'</li>').insertBefore($('#collaborators'));
});
$('#collaborators').remove();