

$('#submit').on('click',event=>{
    $('#container').css('display','flex')
    

})

$('#container').on('click',event=> {
    
    $('#container').hide()
    $('#message').stopPropagation()
    
})

$('#closeBtn').on('click',event=>{
    $('#container').hide()
})