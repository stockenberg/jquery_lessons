/**
 * Created by workstation on 13.02.17.
 */


// Basics Array & Object
// Config

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
        classes: "title"
    },
    {
        type: "text",
        name: "email",
        value: "",
        label: "E-Mail-Adresse",
        id: "email",
        placeholder: "title",
        classes: "email"

    },
    {
        type: "textarea",
        name: "message",
        value: "",
        label: "Nachricht",
        id: "message",
        placeholder: "title",
        classes: "message"

    },
    {
        type: "radio",
        name: "payment",
        value: "",
        label: "Sofortüberweisung",
        id: "message",
        placeholder: "title",
        classes: "payment"

    },
    {
        type: "radio",
        name: "payment",
        value: "",
        label: "Paypal",
        id: "message",
        placeholder: "title",
        classes: "payment"

    },
    {
        type: "submit",
        name: "send",
        value: "Senden",
        label: "",
        id: "",
        placeholder: "title",
        classes: ""
    }

];

console.log(form);


