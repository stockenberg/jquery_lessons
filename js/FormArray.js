/**
 * Created by workstation on 13.02.17.
 */


// Basics Array & Object

var form = [
    {
        type: "select",
        name: "title",
        value: "",
        label: "Anrede",
        id: "title",
        options: [
            "Bitte wählen", "Herr", "Frau"
        ]
    },
    {
        type: "text",
        name: "firstname",
        value: "",
        label: "Vorname",
        id: "firstname",
        placeholder: "title"

    },
    {
        type: "text",
        name: "lastname",
        value: "",
        label: "Nachname",
        id: "lastname",
        placeholder: "title"

    },
    {
        type: "text",
        name: "phone",
        value: "",
        label: "Telefonnummer",
        id: "phone",
        placeholder: "title"

    },
    {
        type: "",
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
        type: "submit",
        name: "send",
        value: "Senden",
        label: "",
        id: "",
        placeholder: "title"
    }

];

console.log(form);


