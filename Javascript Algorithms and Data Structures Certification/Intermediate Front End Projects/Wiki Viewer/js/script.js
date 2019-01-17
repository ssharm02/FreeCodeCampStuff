$(document).ready(function(){

  const numberOfArticles = 5;

  var imgs = ["img/img1.jpg",
            "img/img2.jpg", 
            "img/img3.jpg",
            "img/img4.jpg"];
  //background image change not working atm - fix later
  $('#background').css({'background-image': 'url(img/' + imgs[Math.floor(Math.random() * imgs.length)] + ')'});
  
 $('#search-input').hide();

$('#search-icon').on('click', function(){ 
  $('#search-input').show();
});

  $("#search").submit(function(event) {
    $("header").css("display", "none"); //set header none
    $("#article-list").css("display", "none"); // reset article list for fade in on multiple searches
    $("footer").css("position", "relative"); // sets footer to bottom of articles
    //Get the search string from the search form input box
    var searchInput = $("#search-input").val();
		var apiUrl = "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search="+searchInput+"&limit="+numberOfArticles+"";

    $.ajax({
      url: apiUrl,
      type: "GET",
      success: function(jsonData) {
        for(i=0; i<jsonData[1].length; i++) {  
          $("#article-list li").each(function(i){
            $(this).children(".article-title").html(jsonData[1][i]);
            $(this).children(".article-description").html(jsonData[2][i]);
            $(this).parent(".article-link").attr("href", jsonData[3][i]);
          });
        }
      $("#article-list").css("display", "block"); // fade in article list
      $("#search-exit").css("display", "inline"); // display exit icon
      },
      error: function(errorMessage){
        console.log("error");
      }  
    });
    event.preventDefault();
  });

  // exit articles and reset to default
  $("#search-exit").mousedown(function() {
    $("#article-list, #search-exit").css("display", "none"); 
    $("header").css("display", "block");
    $("footer").css("position", "absolute");
    $("#search-input").val("")
  });

  // Call to action message change on hover and reset off hover
  $("#random-article").on('click',function() {
    $("#random-cta").html("Enjoy your random article");
  }, function() {
    $("#random-cta").html("Click for more random article");
  });

});
