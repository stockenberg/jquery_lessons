/**
 * Created by workstation on 13.02.17.
 */


// Loops, DOM Manipulation
var formElem = $("form");

for (var counter = 0; counter < form.length; counter++) {

    switch (form[counter].type) {
        case "textarea":
            formElem.append("<div><label>" + form[counter].label + "</label><textarea col='10' row='3' placeholder='" + form[counter].placeholder + "'></textarea></div>");
            break;

        case "select":

            var options;

            for(var i = 0; i < form[counter].options.length; i++){
                options += "<option value='" + form[counter].options[i] + "'>" + form[counter].options[i] + "</option>";
            }

            formElem.append("<div><select>"+ options +"</select></div>");
            break;

        default:
            formElem.append("<div><label>" + form[counter].label + "</label><input name='" + form[counter].name + "' placeholder='" + form[counter].placeholder + "' type=" + form[counter].type + " name=" + form[counter].name + "></div>");
            break;
    }

}

