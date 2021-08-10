//js for dropdown index.html
$('select').each(function() {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function() {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
//js for dropdown index.html ---------end----------------


//js loader
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});
//js loader ---------end---------------





//js for price min max shop-grid 
(function() {

    var parent = document.querySelector(".price-slider");
    if (!parent) return;

    var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function(el) {
        el.oninput = function() {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach(function(el) {
        el.oninput = function() {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;

        }
    });

})();
//js for price min max shop-grid ----------end---------



//dont know may be for categoriews
$(".Click-here").on('click', function() {
    $(".custom-model-main").addClass('model-open');
});
$(".close-btn, .bg-overlay").click(function() {
    $(".custom-model-main").removeClass('model-open');
});



//js for filter categorie
function url_checkboxs() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('biographic')) {

        document.getElementById("biographic").checked = true;

    }

    if (urlParams.has('other')) {

        document.getElementById("other").checked = true;

    }

    if (urlParams.has('cook')) {

        document.getElementById("cook").checked = true;

    }

    if (urlParams.has('childern')) {

        document.getElementById("childern").checked = true;

    }

    if (urlParams.has('kids')) {

        document.getElementById("kids").checked = true;

    }

    if (urlParams.has('price-min')) {

        const pricemin = urlParams.get('price-min')

        document.getElementById("price-min").value = pricemin;
        document.getElementById("price1").value = pricemin;


    }

    if (urlParams.has('price-max')) {

        const pricemax = urlParams.get('price-max')

        document.getElementById("price-max").value = pricemax;
        document.getElementById("price2").value = pricemax;


    }

}

//js for filter categorie ------------------end------------------------




//js for login via firebase
function verifyCallback3() {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        //reCaptcha not verified
        alert("no pass");
    } else {
        //reCaptch verified
        alert("pass");
    }
}


var code;

function createCaptcha() {
    //clear the contents of captcha div first 
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        //below code will not allow Repetition of Characters
        var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
        if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

function validateCaptcha() {
    event.preventDefault();
    debugger
    if (document.getElementById("cpatchaTextBox").value == code) {

        window.location.replace("http://127.0.0.1:8000/checkout/mobile_placeorder");


    } else {
        alert("Invalid Captcha. try Again");
        createCaptcha();
    }
}
//js for login via firebase ----------------end---------------------



//js for payment captcha
function validateCaptcha_payment() {
    event.preventDefault();
    debugger
    if (document.getElementById("cpatchaTextBox").value == code) {

        window.location.replace("http://127.0.0.1:8000/checkout/place_order");


    } else {
        alert("Invalid Captcha. try Again");
        createCaptcha();
    }
}

//js for payment captcha -----------------------end---------------------



//js for edit address
function editonly() {
    document.getElementById("1").readOnly = false;
    document.getElementById("2").readOnly = false;
    document.getElementById("3").readOnly = false;
    document.getElementById("4").readOnly = false;
    document.getElementById("5").readOnly = false;

    document.getElementById("edit").style.display = "none";
    document.getElementById("submit").style.display = "inline";
    document.getElementById("cancle").style.display = "inline";


}

function readonly() {
    document.getElementById("1").readOnly = true;
    document.getElementById("2").readOnly = true;
    document.getElementById("3").readOnly = true;
    document.getElementById("4").readOnly = true;
    document.getElementById("5").readOnly = true;

    document.getElementById("submit").style.display = "none";
    document.getElementById("cancle").style.display = "none";
    document.getElementById("edit").style.display = "inline";

}
//js for edit address ---------------end-------------------