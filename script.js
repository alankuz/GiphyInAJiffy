var apiKey = 'e6CTlgKsAG73BWRQ44ILXE39GgZSQAFV'
var topics = [
    "Bosnia",
    "Croatia",
    "Germany",
    "Italy",
    "France",
    "Austria",
    "Russia",
    "Sweden",
    "Finland",
    "Ireland",
    "Scotland",
    "Britain"


]
for (i=0; i<topics.length; i++) {
    $('#buttons').append('<button class= "contentButton" data-place='+topics[i]+ '>'+ topics[i]+'</button>')
}
function pauser(i) {
    console.log('click')
    console.log(i)
    

var state = $('#'+i).attr('data-state');
console.log(state);

if (state === "still") {
$('#'+i).attr('src', $('#'+i).attr("data-animate"))
$('#'+i)
$('#'+i).attr('data-state', 'animated')
}
if (state === "animated") {
$('#'+i).attr('src', $('#'+i).attr("data-still"))
$('#'+i)
$('#'+i).attr('data-state', 'still')
}
}

// var url ="https://api.giphy.com/v1/gifs/search?api_key=0bLXaO5E9THqBOtzSMn61Yk0RFnSYcq1&q=" +topics[2] +"&limit=25&offset=0&rating=pg&lang=en"

// startDate + endDate  ""
// https://api.nytimes.com/svc/search/v2/articlesearch.json
// Example call https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
// q=obama&facet_fields=source&facet=true&begin_date=20120101&end_date=20121231
$("#searchSubmit").click(function (){
    var newEntry =$('input').val()
    $('#buttons').append('<button class= "contentButton" data-place='+$('input').val()+ '>'+ $('input').val() +'</button>')
    })

$(document).on('click', '.contentButton', function(){
        var country = $(this).attr("data-place");
        var url = "https://api.giphy.com/v1/gifs/search?api_key=0bLXaO5E9THqBOtzSMn61Yk0RFnSYcq1&q=" +
          country + "&limit=25&offset=0&rating=pg&lang=en";
          $('#maindiv').html('');
$.ajax({
    type: "GET",
    url: url,
    success: function (response) {
        console.log(response);
        console.log(response.data[1].images.fixed_height.url)
        for (i=0; i<25; i++)
        $('#maindiv').append('<div class="imgcontainer"><p>' + response.data[i].title +'</p> <p>Rating:' + response.data[i].rating + '</p> <img src="' + response.data[i].images.fixed_height_still.url + '" data-still="'+ response.data[i].images.fixed_height_still.url+'" data-animate="'+ response.data[i].images.fixed_height.url+'" data-state="still" class="gif" onclick="pauser('+i+');" id="'+i+'"></div>');        
    }
});
})

