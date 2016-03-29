/**
 * Created by EricGiri
 *              on 2016-03-29.
 */
function btnSubmit_click() {
    validateForm();
}

function init() {
    $("#btnSubmit").on("click",btnSubmit_click)
}

$(document).ready(function () {
    init();
});
