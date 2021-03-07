$(document).ready(function(){

   // add & Remove class
   $(".btn-cmn").click(function () {
    if(!$(this).hasClass('active-btn'))
    {    
        $(".btn-cmn.active-btn").removeClass("active-btn");
         $(".btn-cmn.active-btn").css("transition","all .4s ease-in-out");
        $(this).addClass("active-btn");  
        $(this).css("transition","all .4s ease-in-out");      
    }
  });
    // add & Remove class
    $(".Ft").click(function () {
        if(!$(this).hasClass('Featur-active'))
        {    
            $(".Ft.Featur-active").removeClass("Featur-active");
             $(".Ft.Featur-active").css("transition","all .4s ease-in-out");
            $(this).addClass("Featur-active");  
            $(this).css("transition","all .4s ease-in-out");      
        }
      });
//   $(".checkbox").click(function(){
//        $(".b1").fadeToggle("");
//   })


      // ------slider1--
  $('.slider1').owlCarousel({
    loop: false,
    margin: 0,
    autoplay: true,
    // nav: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  });
  
       // ------slider2--
       $('.slider2').owlCarousel({
        loop: true,
        margin: 0,
        // autoplay: true,
         nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
      });

       // ------slider3--
       $('.slider3').owlCarousel({
        loop: false,
        margin: 0,
        // autoplay: true,
         nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
      });
})

//---formmm---active--
function openList(ListName) {
    var i;
    var x = document.getElementsByClassName("Form_wrp-cmn");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }

  ///forme---endd
  //---Features---active--

function openFeature(ListName) {
    var i;
    var x = document.getElementsByClassName("vehical-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }

  ///forme---endd
  //--popular-Features---active--

  function openPopFeature(ListName) {
    var i;
    var x = document.getElementsByClassName("Popular-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }

  ///forme---endd
  //--popular-bike-----

  function openBikeItem(ListName) {
    var i;
    var x = document.getElementsByClassName("Bike-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }

  ///forme---endd

//--bottom--to--top--- and------stickyyy---on----header---//
var navbar = document.getElementById("navbar"); 
window.onscroll = function() {
    matrixFunction()  
};
function matrixFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("sticky")
    } else { 
        navbar.classList.remove("sticky");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
//end--here--//

    

   