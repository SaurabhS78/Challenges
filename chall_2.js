var x1, x2;
var pass = false;

$("#gif").click(function () {
  if (!pass) $(".error").css("display", "block");
});

$(".error").click(function () {
  $(".error").css("display", "none");
});

$(".clicker1").click(function () {
  x1 = $(".desc").detach();
  pass = true;

  var success = $("<p></p>").text("Level 1 was easy!");
  var input = $(`<input type="number" placeholder="Look Closely">`);
  var send = $("<button>Submit</button>");
  var back = $("<button>Back</button>");
  var desc2 = $("<div></div>").attr("id", "desc2");
  var fwd = $("<button>Next</button>");
  fwd.attr("id", "fwd");
  back.attr("id", "back");
  send.attr("id", "send");

  $("body").prepend(desc2);
  $("#desc2").append(success, input, send, back);

  send.click(check);

  back.click(function () {
    x2 = $("#desc2").detach();
    $("body").prepend(fwd, x1);
  });

  fwd.click(function () {
    $(".desc").detach();
    $("body").prepend(x2);
  });
});

function check() {
  let val = $("input").val();
  if (val == 8) {
    $("body").append('<h1 style="color: green;">Congrats, You Win!</h1>');
  } else {
    $("body").append('<h1 style="color: red;">Wrong Answer, Try again!</h1>');
  }
}
