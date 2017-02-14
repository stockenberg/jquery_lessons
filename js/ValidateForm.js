/**
 * Created by workstation on 13.02.17.
 */

// Functions and Events + This

$("input[type=submit]").click(function (event) {
    event.preventDefault();

    console.log(
        $(this)
    );
});


