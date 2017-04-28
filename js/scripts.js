$(function() {
  $("#triangle").submit(function(event) {
    debugger;
    var sideone = parseInt($("input#sideone").val());
    var sidetwo = parseInt($("input#sidetwo").val());
    var sidethree = parseInt($("input#sidethree").val());

    if ((sideone === sidetwo) && (sidetwo) === sidethree) {
    $("#equilateral").show();
    $("#isosceles").hide();
    $("#scalene").hide();
    $("#not-a-triangle").hide();
    }

    else if ((sideone === sidetwo) || (sidetwo === sidethree) || (sideone === sidethree)) {
    $("#equilateral").hide();
    $("#isosceles").show();
    $("#scalene").hide();
    $("#not-a-triangle").hide();
    }

    else if ((sideone + sidetwo <= sidethree) || (sideone + sidethree <= sidetwo) || (sidetwo + sidethree <= sideone)) {
    $("#equilateral").hide();
    $("#isosceles").hide();
    $("#scalene").hide();
    $("#not-a-triangle").show();
    }

    else {
    $("#equilateral").hide();
    $("#isosceles").hide();
    $("#scalene").show();
    $("#not-a-triangle").hide();
    }
  event.preventDefault();
  });
});
