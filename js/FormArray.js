/**
 * Created by workstation on 13.02.17.
 */


// Basics Array & Object
// Config
// Todo: rename obj in regexpObj
var obj = {
    email: "regexp",
    string: /[A-ZÄÖÜa-zöäü ,.'-]+$/i,
    phone: "regexpphone",
    message: "regexpmessage",
    postcode: "regexppostcode"
};

var form = [
    {
        type: "select",
        name: "title",
        value: "",
        label: "Anrede",
        id: "title",
        options: [
            "", "Herr", "Frau"
        ],
    },
    {
        type: "text",
        name: "firstname",
        value: "",
        label: "Vorname",
        id: "firstname",
        placeholder: "title",
        classes: "string"

    },
    {
        type: "text",
        name: "lastname",
        value: "",
        label: "Nachname",
        id: "lastname",
        placeholder: "title",
        classes: "string"

    },
    {
        type: "text",
        name: "email",
        value: "",
        label: "E-Mail-Adresse",
        id: "email",
        placeholder: "title",

    },
    {
        type: "textarea",
        name: "message",
        value: "",
        label: "Nachricht",
        id: "message",
        placeholder: "title",

    },
    {
        type: "radio",
        name: "payment",
        value: "",
        label: "Sofortüberweisung",
        id: "message",
        placeholder: "title",
        classes: "validate"

    },
    {
        type: "radio",
        name: "payment",
        value: "",
        label: "Paypal",
        id: "message",
        placeholder: "title",
        classes: "validate"

    },
    {
        type: "radio",
        name: "test",
        value: "",
        label: "Sofortüberweisung",
        id: "message",
        placeholder: "title",
        classes: "validate"

    },
    {
        type: "radio",
        name: "test",
        value: "",
        label: "Paypal",
        id: "message",
        placeholder: "title",
        classes: "validate"

    },
    {
        type: "submit",
        name: "send",
        value: "Senden",
        label: "",
        id: "",
        placeholder: "title",
    }

];

console.log(form);


