$( document ).ready(function() {
    $( ".image" ).mouseover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 3000 );
});


$(".section").on('click', function(){
    $(".section").toggleClass('cerrado')
    $(this).children("div").toggle("")
    console.log(this);
    console.log($(this));
  });

  
})
