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
        ]
    },
    {
        type: "text",
        name: "email",
        value: "",
        label: "E-Mail-Adresse",
        id: "email",
        placeholder: "title"

    },
    {
        type: "textarea",
        name: "message",
        value: "",
        label: "Nachricht",
        id: "message",
        placeholder: "title"

    },
    {
        type: "radio",
        name: "payment",
        value: "",
        label: "Sofortüberweisung",
        id: "message",
        placeholder: "title"

    },
    {
        type: "radio",
        name: "payment",
        value: "",
        label: "Paypal",
        id: "message",
        placeholder: "title"

    },
    {
        type: "submit",
        name: "send",
        value: "Senden",
        label: "",
        id: "",
        placeholder: "title"
    }

];

console.log(form);


