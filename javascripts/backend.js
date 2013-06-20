Parse.initialize("oMZrh4swV6qLPLxMoQnr3EpbtbLbrR8l9oXt9aWW", "oIcvnjkHP5HnsTaCbEqB5SSt4XYk0MT5McSwnPbe");

$(function()
{
  // initialize kudos
  $("figure.kudoable").kudoable();

  $("figure.kudoable").each(function(){
    var element = $(this);
    var postId = element.data('id');

    // check to see if user has already kudod
    // fyi cookies do not work when you are viewing this as a file
    if($.cookie(postId) == 'true') {
      // make kudo already kudod
      $("figure.kudoable").removeClass("animate").addClass("complete");
    }

    // set the kudo count from parse
    var query = new Parse.Query("Post");
    query.equalTo("url", postId);
    query.find({
      success:function(list) {
        $(element.find(".num")[0]).html(list[0].get("kudos"));
      }
    });
  });

  // after kudo'd
  $("figure.kudo").bind("kudo:added", function(e)
  {
    var postId = $(this).data('id');

    // ajax'y stuff or whatever you want
    Parse.Cloud.run('addKudo', {"url":postId});

    // set cookie so user cannot kudo again for 7 days
    $.cookie(postId, 'true', { expires: 7 });
  });
});
