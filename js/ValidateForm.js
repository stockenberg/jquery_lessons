/**
 * Created by workstation on 13.02.17.
 */

/**
 * If u want u may change error messages below
 *  p.error and p.success
 */

// Functions and Events + This
var ifchecked = false;

$("input[type=submit]").click(function (event) {

    event.preventDefault();

    var inputFields = $("form input, form select, form textarea");
    var submitbtn = 1;

    $("form").find(".error, .success").remove();
    
    for(var i = 0; i < inputFields.length - submitbtn; i++){
        // Validate Checkboxes and radiobuttons

        if(inputFields[i].type == "radio" || inputFields[i].type == "checkbox"){

                var currentGroup = $(inputFields[i]).attr("name");

                if(currentGroup != lastGroup || typeof lastGroup === "undefined"){

                    var success = false,
                        inputSelection = $("input[name="+currentGroup+"]");

                    for(var index = 0; index < inputSelection.length; index++){
                        
                        // Thoughts: Maybe change ValidateClass to RequireAttr
                        if($(inputSelection[index]).hasClass("validate")){
                            if($(inputSelection[index]).prop("checked")) {
                                success = true;
                                break;
                            }
                        }else{
                            success = true;
                        }
                    }


                    if(!success){
                        console.log("Bitte felder anhaken");
                        $(inputFields[i]).prev().before("<p class='error'>Bitte eine der folgenden Optionen anhaken</p>");
                    }else{
                        $(inputFields[i]).prev().before("<p class='success'>Gut gemacht!</p>");
                    }
                }

                var lastGroup = $(inputFields[i]).attr("name");


        }else{
            // Validate Textarea, Select, Input
            if(inputFields[i].value === ""){
                $(inputFields[i]).after("<p class='error'>Bitte füllen sie das '" + $(inputFields[i]).prev().html() + "' - Feld aus</p>");
            }else{
                for(var className in obj){

                    if($(inputFields[i]).hasClass(className)){

                        if($(inputFields[i]).val().match(obj[className])){
                            $(inputFields[i]).after("<p class='success'>Eingabe ist korrekt.</p>");

                            break;
                        }else{
                            $(inputFields[i]).after("<p class='error'>Eingabe ist falsch.</p>");

                        }


                    }


                }


            }

        }

    }
});


