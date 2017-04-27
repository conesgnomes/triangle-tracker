$(function() {
  $("#triangle").submit(function(event) {
    debugger;
    var sideone = parseInt($("input#sideone").val());
    var sidetwo = parseInt($("input#sidetwo").val());
    var sidethree = parseInt($("input#sidethree").val());

    if (sideone === sidetwo === sidethree) {
    $("#equilateral").show();
    $("#isosceles").hide();
    $("#scalene").hide();

    }
  event.preventDefault();
  });
});
