

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
