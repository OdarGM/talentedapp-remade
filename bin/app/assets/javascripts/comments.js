/*
Copyright (C) 2017-2018 ~ Talented Inc
*/

$(document).ready(function() {
  $("#new_comment").submit(function() {
    $("#comment_text").val($("#comment-text").html());
    $("#comment-text").html("");
  });
});
