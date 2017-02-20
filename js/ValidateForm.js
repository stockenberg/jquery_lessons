/**
 * Created by workstation on 13.02.17.
 */

// Functions and Events + This
var ifchecked = false;

$("input[type=submit]").click(function (event) {

    event.preventDefault();

    var fieldsSel = $("form input, form select, form textarea");


    for(var i = 0; i < fieldsSel.length - 1; i++){

        if(fieldsSel[i].type == "radio" || fieldsSel[i].type == "checkbox"){

                var selector = $(fieldsSel[i]).attr("name");

                if(selector != selectorTemp){

                    var check = false,
                        elems = $("input[name="+selector+"]");

                    for(var radioI = 0; radioI < elems.length; radioI++){
                        if($(elems[radioI]).hasClass("validate")){
                            if($(elems[radioI]).prop("checked")) {
                                check = true;
                                break;
                            }
                        }
                    }

                    if(!check){
                        console.log("Bitte felder anhaken");
                    }
                }

                var selectorTemp = $(fieldsSel[i]).attr("name");


        }else{
            $(fieldsSel[i]).next("p.error, p.success").remove();
            if(fieldsSel[i].value === ""){
                $(fieldsSel[i]).after("<p class='error'>Bitte füllen sie das '" + $(fieldsSel[i]).prev().html() + "' - Feld aus</p>");
            }else{
                for(var className in obj){

                    if($(fieldsSel[i]).hasClass(className)){

                        if($(fieldsSel[i]).val().match(obj[className])){
                            $(fieldsSel[i]).after("<p class='success'>Eingabe ist korrekt.</p>");

                            break;
                        }else{
                            $(fieldsSel[i]).after("<p class='error'>Eingabe ist falsch.</p>");

                        }


                    }


                }


            }

        }

    }
});


