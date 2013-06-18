Parse.initialize("oMZrh4swV6qLPLxMoQnr3EpbtbLbrR8l9oXt9aWW", "oIcvnjkHP5HnsTaCbEqB5SSt4XYk0MT5McSwnPbe");

$(function()
{
  // initialize kudos
  $("figure.kudoable").kudoable();

  $("figure.kudoable").each(function(){
    var postId = $(this).data('id');

    // check to see if user has already kudod
    // fyi cookies do not work when you are viewing this as a file
    if($.cookie(postId) == 'true') {
      // make kudo already kudod
      $("figure.kudoable").removeClass("animate").addClass("complete");

      // your server would take care of the proper kudos count, but because this is a
      // static page, we need to set it here so it doesn't become -1 when you remove
      // the kudos after a reload
      $(".num").html(1);
    } 
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

  // after removing a kudo
  $("figure.kudo").bind("kudo:removed", function(e)
  {
    var postId = $(this).data('id');

    // ajax'y stuff or whatever you want
    console.log("Un-Kudo'd:", postId, ":(");

    // remove cookie
    $.removeCookie(postId);
  });
});
