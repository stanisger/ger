
//∆∆ BTN COLLPASE
 $(".button-collapse").sideNav();

 //∆∆ MODAL
 $('.modal').modal();

     $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .72, // Opacity of modal background
      inDuration: 550, // Transition in duration
      outDuration: 550, // Transition out duration
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    
         $('.modal').dblclick(function() {
                  $('.modal').modal('close');
          }); 
      }
     }
    )

 //∆∆ TABS 
  var masonryOptions = {
      itemSelector: '.grid-item',
    };
  var $grid = $('.grid').masonry( masonryOptions );

  $("ul.tabs").tabs({
   onShow: function() {
          $grid.masonry();
        },

        transitionDuration: 0

  });

  
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 1) {
          $grid.masonry();
      }
  });




// //∆∆ Modal&Objetos
// var modalSelect = $('.modal');
// var computer = $('#animate1');

// //∆∆ Altura de Objetos (computer)
// var objetHeight = function height(objet){  
//       return  objet.outerHeight();   
//  }


// //∆∆ Scroll (modalSelect)
// var pixels = function height(obj){
// 	return obj.scrollTop();
// }

// $(document).scroll(function(){



// 	// function ecuation(height){
// 	//     return (height + pixels(modalSelect)) / height;
// 	//   }
    


//  //    var animation = function animation(multi){
//  //       return ecuation(objetHeight(computer)) * multi;
        
//  //    }

//  //    if(pixels(modalSelect) >= 1){
//  //        computer.css({ 
//  //            "top" : animation(10)  + "px", 
//  //            "display" : "inherit"
//  //               }
            
//  //         );
//  //    }

// });
	

