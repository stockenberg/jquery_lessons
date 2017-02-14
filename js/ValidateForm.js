/**
 * Created by workstation on 13.02.17.
 */

// Functions and Events + This
var obj = {
    email: "regexp",
    firstname: "regexpfirst",
    lastname: "regexplastname",
    phone: "regexpphone",
    message: "regexpmessage",
    postcode: "regexppostcode"
};


$("input[type=submit]").click(function (event) {

    event.preventDefault();

    var fieldsSel = $("form input, form select, form textarea");

    console.dir(fieldsSel);

    for(var i = 0; i < fieldsSel.length - 1; i++){

        if(fieldsSel[i].type == "radio" || fieldsSel[i].type == "checkbox"){
            console.log(fieldsSel[i]);
        }else{
            $(fieldsSel[i]).next("p.error").remove();
            if(fieldsSel[i].value === ""){
                $(fieldsSel[i]).after("<p class='error'>Bitte füllen sie das '" + $(fieldsSel[i]).prev().html() + "' - Feld aus</p>");
            }else{
                for(var key in obj){
                    if($(fieldsSel[i]).hasClass(key)){
                        console.log("Email gefunden");
                        console.log("Der Dazugehörige Regexp ist:" + obj[key]);
                    }

                }

            }

        }

    }
});


