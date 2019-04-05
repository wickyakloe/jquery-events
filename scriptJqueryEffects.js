$(document).ready(function() {
    $("#button_effects1").click(function(){
            $('#button_effects1').hide('slow');

        });
}); 

$(document).ready(function() {
    $("#button_effects1").click(function(){
        $('#par1').toggle('1000');
    });
    $("#button_effects2").click(function(){
        $('#par2').toggle('1000');
    });
    $("#button_effects3").click(function(){
        $('#par3').toggle('1000');
    });
    $("#button_effects4").click(function(){
        $('#par4').toggle('1000');
    });
    $("#button_effects5").click(function(){
        $('#par5').toggle('1000');
    });
    $("#button_effects6").click(function(){
        $('#par6').toggle('1000');
    });
}); 

$(document).ready(function() {
    // Create the slideToggle effects each of the paragraphs and
    // buttons
    $("#button_effects1").click(function(){
        $('#par1').slideToggle('1000');
    });
    $("#button_effects2").click(function(){
        $('#par2').slideToggle('1000');
    });
    $("#button_effects3").click(function(){
        $('#par3').slideToggle('1000');
    });
    $("#button_effects4").click(function(){
        $('#par4').slideToggle('1000');
    });
    $("#button_effects5").click(function(){
        $('#par5').slideToggle('1000');
    });
    $("#button_effects6").click(function(){
        $('#par6').slideToggle('1000');
    });

    // Use the fadeTo effect when the mouse hovers over a specific button
    // and fadeTo again when the mouse is no longer hovering over the button
    $("#button_effects1").mouseenter(function(){
        $('#button_effects1').fadeTo(1000, 0.5);
    });
    $("#button_effects1").mouseleave(function(){
        $('#button_effects1').fadeTo(1000, 1);
    });

    $("#button_effects2").mouseenter(function(){
        $('#button_effects2').fadeTo(1000, 0.5);
    });
    $("#button_effects2").mouseleave(function(){
        $('#button_effects2').fadeTo(1000, 1);
    });

    $("#button_effects3").mouseenter(function(){
        $('#button_effects3').fadeTo(1000, 0.5);
    });
    $("#button_effects3").mouseleave(function(){
        $('#button_effects3').fadeTo(1000, 1);
    });

    $("#button_effects4").mouseenter(function(){
        $('#button_effects4').fadeTo(1000, 0.5);
    });
    $("#button_effects4").mouseleave(function(){
        $('#button_effects4').fadeTo(1000, 1);
    });

    $("#button_effects5").mouseenter(function(){
        $('#button_effects5').fadeTo(1000, 0.5);
    });
    $("#button_effects5").mouseleave(function(){
        $('#button_effects5').fadeTo(1000, 1);
    });

    $("#button_effects6").mouseenter(function(){
        $('#button_effects6').fadeTo(1000, 0.5);
    });
    $("#button_effects6").mouseleave(function(){
        $('#button_effects6').fadeTo(1000, 1);
    });
    
    //mehtod chaining example
    $("#myButton").removeClass("blueBox").addClass("border");
    $("p").css("color", "blue").slideUp(2000).slideDown(2000);
    $("a").attr("href", "http://www.example.com");
    
    //removes class makeRed, adds class makeBorder on mouseenter
	$("button").mouseenter(function(){
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$("button").mouseleave(function(){
	$("button").removeClass("makeBorder").addClass("makeRed");
	
	$("button").click(function() {
	$("p").slideToggle(2000);
	});
  
	// hides/shows paragraphs when either button is clicked
	$("button").click(function() {
		$("p").hide(2000).show(2000);
    });

    });

}); 

//wait until page is ready
$(document).ready(function() {
	//sets <a> element within paragraph  to yellow  
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); /* returns all the <a> child elements that are 
		within this paragraph*/
	});

	// Toggle the visibility of the paragraph when a button is clicked 
	$("button").click(function(){
		$(this).prev().slideToggle('slow');
	});

	// Open the paragraph once the image is clicked
	$("img").click(function() {
		$(this).next().children("p").slideDown();
	});

	$(".card").click(function() {
		$(this).toggleClass("highlight");	 
	});

	// All cards that are not currently selected will be hidden when `select_btn` is clicked
	$("#select_btn").click(function() {
		$(".card:not(.highlight)").hide();	 
	});

	// Select all cards
	$("#all_btn").click(function(){
		$(".card").show();	 
	});
});