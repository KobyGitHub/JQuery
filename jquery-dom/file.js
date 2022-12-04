
$(window).on('load', function(){
    console.log("Let's Get ready to party")
})

$('article img').addClass('image-center')

$('p').get(-1).remove()

$('h1').css('font-size','60px');

$('ol').append('<li>A cute puppy</li>');

$('aside').empty();
$('aside').append('<p>I apologize for previous paragraph</p>');

$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });

  $("img").on('click', function (e) {
    $(e.target).remove();
  });


