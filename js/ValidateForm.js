/**
 * Created by workstation on 13.02.17.
 */

// Functions and Events + This

$("input[type=submit]").click(function (event) {
    event.preventDefault();

    var fieldsSel = $("form input, form select, form textarea");

    console.dir(fieldsSel);

    for(var i = 0; i < fieldsSel.length - 1; i++){
        //console.dir(fieldsSel[i].value);

        if(fieldsSel[i].type == "radio" || fieldsSel[i].type == "checkbox"){
            console.log(fieldsSel[i]);
        }else{

            if(fieldsSel[i].value === ""){
                console.log("test");
                $(fieldsSel[i]).after("<p>Bitte füllen sie das '" + $(fieldsSel[i]).prev().html() + "' - Feld aus</p>");
            }else{

            }

        }


    }
});


