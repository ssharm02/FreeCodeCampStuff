$(document).ready(function() {
  /*Function uses ajax to connect to the quote API
   * JSON data from quote API is passed to other methods
   */

  var getQuote = function() {
    return $.ajax({
      headers: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
      type: "GET",
      dataType: "json",
      contentType: "application/x-www-form-urlencoded"
    });
  };
  /*
   *This method gets the JSON data from previous method and sends the
   *appropriate quote directly to twitter
   */
  var setQuote = function(data) {
    var encodedQuote = encodeURIComponent(data.quote + "--" + data.author);
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodedQuote;
    $(".quote").text(data.quote);
    $(".author").text(data.author);
    $(".btnTweet").attr("href", tweetUrl);
  };
  /*
   *btnReload click function adds a spinning animation to the reload button
   *Gets JSON data from Ajax call and displays a new quote
   */
  $(".btnReload").on("click", function() {
    var reloadBtn = $(this);
    //reloadBtn.prop adds spinning animation to the reload button
    reloadBtn
      .prop("disabled", true)
      .children("i")
      .addClass("fa-spin");

    getQuote().done(function(data) {
      setQuote(data);
      //remove the spinning animation from the reload button after a new quote has been loaded
      reloadBtn
        .prop("disabled", false)
        .children("i")
        .removeClass("fa-spin");
    });
  });
});
