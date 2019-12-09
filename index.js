

$('#submit').on('click',event=>{
    $('#container').css('display','flex')
    

})

$('#container').on('click',event=> {
    
    
    if(event.target === $('#container')[0]) {$('#container').hide()}
    
})

$('#closeBtn').on('click',event=>{
    $('#container').hide()
})

$('#image').mouseenter(event => {
      $('#image').css('transform','rotate(20deg)');
    },
    
)
$('#image').mouseleave(event => {
    $('#image').css('transform','rotate(0deg)');
  },
  
)

$('.selection__option').mouseover(function(){
    $(this).find("p").text("Great for a cold day")
})
$('.selection__option').mouseout(function(){
    $(this).find("p").text("Tea Option")
})
