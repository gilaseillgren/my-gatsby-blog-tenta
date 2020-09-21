$(".toggle").on("click", function() {
    console.log("hej");
    $(".toggle").parent().toggleClass('active');
  });