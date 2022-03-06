var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

$('#readMore').click(function(){
    $('.read').toggleClass('read-less');
    if($(this).text()=='{ Read More }') $(this).text('{ Read Less }'); 
    else  $(this).text('{ Read More }'); 
});