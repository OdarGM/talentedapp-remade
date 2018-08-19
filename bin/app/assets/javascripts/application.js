/*
Copyright (C) 2017-2018 ~ Talented Inc
*/

$(document).ready(function() {
  $("#event_when").datetimepicker({
    format: "Y/m/d H:i"
  });
  $("#user_dob").datetimepicker({
    timepicker: false,
    format: "Y/m/d",
    maxDate: "0"
  });
});
