$(".toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".nav-menus").toggleClass("active"); //hide and seek
});
// console.log('ss'); 

$('.about').click(function(){
    $('.sub-menus').toggleClass('active');
})
$('.p2').hover(function(){
    caty.hide();
    $('.caty2').toggleClass('active');
})
$(".caty").hover(function(){
    $(".caty").animate(
        {
            height: 'hide'
        }
        );
        $(".caty2").animate(
            {
                height: 'show'
            }
            );
  })

 
//   $(".caty").hover(function(){
//     $(".caty").animate(
//         {
//             height: 'show'
//         }
//         );
//         $(".caty2").animate(
//             {
//                 height: 'hide'
//             }
//             );
//   });
$('.edubtnChild').click(function(){
   
      $('.educationChild' ).hide();
      $('.education').show();
      $('.education').css('display','flex');
    // $('.educlass').text('');
    // $('.educlass').css('background-color','rgb(115, 230, 186) ');
    

})
$('.edubtn').click(function(){
   
    $('.education' ).hide();
    
    $('.educationChild').show();
    // $('.education').css('display','flex');
  
  

})
$('.edubtnChild2').click(function(){
    $('.educationChild2' ).hide();
    $('.education2').show();
    $('.education2').css('display','flex');
  // $('.educlass').text('');
  // $('.educlass').css('background-color','rgb(115, 230, 186) ');
  

})
$('.edubtn2').click(function(){
  $('.education2' ).hide();
  $('.educationChild2').show();
  // $('.education').css('display','flex');



})

$('.bbutton').click(function(){
    $('.bbutton').hide();
    $('.bbutton1').show();
})
$('.bbutton1').click(function(){
    $('.bbutton1').hide();
    $('.bbutton2').show();
})
$('.bbutton2').click(function(){
    $('.bbutton2').hide();
    $('.bbutton').show();
})