
// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-72347940-1', 'auto');
ga('send', 'pageview');
 
function jssor(){
      var jssor_1_SlideoTransitions = [
              [{b:5500.0,d:3000.0,o:-1.0,r:240.0,e:{r:2.0}}],
              [{b:-1.0,d:1.0,o:-1.0,c:{x:51.0,t:-51.0}},{b:0.0,d:1000.0,o:1.0,c:{x:-51.0,t:51.0},e:{o:7.0,c:{x:7.0,t:7.0}}}],
              [{b:-1.0,d:1.0,o:-1.0,sX:9.0,sY:9.0},{b:1000.0,d:1000.0,o:1.0,sX:-9.0,sY:-9.0,e:{sX:2.0,sY:2.0}}],
              [{b:-1.0,d:1.0,o:-1.0,r:-180.0,sX:9.0,sY:9.0},{b:2000.0,d:1000.0,o:1.0,r:180.0,sX:-9.0,sY:-9.0,e:{r:2.0,sX:2.0,sY:2.0}}],
              [{b:-1.0,d:1.0,o:-1.0},{b:3000.0,d:2000.0,y:180.0,o:1.0,e:{y:16.0}}],
              [{b:-1.0,d:1.0,o:-1.0,r:-150.0},{b:7500.0,d:1600.0,o:1.0,r:150.0,e:{r:3.0}}],
              [{b:10000.0,d:2000.0,x:-379.0,e:{x:7.0}}],
              [{b:10000.0,d:2000.0,x:-379.0,e:{x:7.0}}],
              [{b:-1.0,d:1.0,o:-1.0,r:288.0,sX:9.0,sY:9.0},{b:9100.0,d:900.0,x:-1400.0,y:-660.0,o:1.0,r:-288.0,sX:-9.0,sY:-9.0,e:{r:6.0}},{b:10000.0,d:1600.0,x:-200.0,o:-1.0,e:{x:16.0}}]
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1920);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
 }
 
 
function cyberwise_nav()
 {
            var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;   
     
//     $('.cyberWiseView').mouseleave(function (){ $(".cyberWiseView").hide('fast'); });
//     $('.cyberGuardView').mouseleave(function (){ $(".cyberGuardView").hide('fast'); });
//     $('.phishRodView').mouseleave(function (){ $(".phishRodView").hide('fast'); });
//     $('.cyberAwareView').mouseleave(function (){ $(".cyberAwareView").hide('fast'); });
     
            $(".navCyberWise").click(function() {
                $(".cyberAwareView").hide('fast');
                $(".phishRodView").hide('fast');
                $(".cyberGuardView").hide('fast');
                $(".cyberWiseView").show('fast');
            });   

            $(".navCyberGuard").click(function() {
                $(".cyberAwareView").hide('fast');
                $(".phishRodView").hide('fast');
                $(".cyberWiseView").hide('fast');
                $(".cyberGuardView").show('fast');
            });  
            
            $(".navPhishRod").click(function() {
                $(".cyberAwareView").hide('fast');
                $(".cyberGuardView").hide('fast');
                $(".cyberWiseView").hide('fast');
                $(".phishRodView").show('fast');
            });  
            
            $(".navCyberAware").click(function() {
                $(".phishRodView").hide('fast');
                $(".cyberGuardView").hide('fast');
                $(".cyberWiseView").hide('fast');
                $(".cyberAwareView").show('fast');
            }); 
            
            $(".close").click(function() {
                $(".cyberAwareView").hide('fast');
                $(".cyberGuardView").hide('fast');
                $(".cyberWiseView").hide('fast');
                $(".phishRodView").hide('fast');
            }); 
            
             
}

function cyberwiseresize(){
    var w = window.innerWidth || dont.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
            console.log("screen: "+w);
    
    if (w >= 481 && w <= 768){
       $(".contentView_1, .contentView_2, .contentView_3, .contentView_4").animate({top: "130px"}, 100); 
       console.log("screenz: 767");
    }
    else if (w >= 0 && w <= 480)
    {
        
            $(".contentView_1, .contentView_2, .contentView_3, .contentView_4").animate({top: "126px"}, 100);
            console.log("screenz: 480");
        
    }
    else
    {
       
            
            $(".contentView_1, .contentView_2, .contentView_3, .contentView_4").animate({top: "119px"}, 100);
            console.log("screenz: Open");
       
    }
            
}


$( window ).resize(function() {
  cyberwiseresize();
});




jQuery(document).ready(function($) {
       jssor();
       cyberwise_nav();
       cyberwiseresize();
       
    $('#try-1').click(function(e) {
        $('#BecomeApartner').lightbox_me({
            centered: true, 
            });
        e.preventDefault();
    });
       


});
 

 
 function requestAjax() {
 
 console.log("sadfasdf");
 
 var companyname = $('.companyname').val();
 var email = $('.email').val();
 var country = $('.country').val();
 var services = $('.services').val();
 var employeesize = $('.employeesize').val();
 var description = $('.description').val();
 
 var request = $.ajax({
  url: "mail.php",
  method: "POST",
  data: { 
        companyname : companyname,
        email : email,
        country : country,
        services : services,
        employeesize : employeesize,
        description : description
         }
});
 
request.done(function( msg ) {
  $( "#log" ).html( msg );
});
 
request.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});
 
 }