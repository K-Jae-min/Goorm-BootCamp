$(".show-btn").click(function () {
  $(".container1 div").fadeIn(500);
});
$(".hide-btn").click(function () {
  $(".container1 div").fadeOut(1000);
});
$(".toggle1-btn").click(function () {
  $(".container1 div").fadeToggle("slow");
});

$(".add-btn").click(function () {
  $(".container2 div").addClass("active");
});

$(".remove-btn").click(function () {
  $(".container2 div").removeClass("active");
});

$(".toggle2-btn").click(function () {
  $(".container2 div").toggleClass("active");
});
