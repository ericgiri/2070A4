function validateForm(){
    var form = $("#autoAddForm");
    form.validate({
        rules:{
            txtName:{
                required: true,
                minlength: 2
            },

            txtAddress:{
                required: true,
                minlength: 2
            },
            txtCity:{
                required: true,
                minlength: 2
            },
            txtPhone:{
                required: true
                //phone: true
            },
            txtEmail:{
                required: true
                //email: true
            },
            txtMake:{
                required: true,
                minlength: 2
            },
            txtModel:{
                required: true,
                minlength: 2
            },
            txtYear:{
                required: true,
                digits: true,
                rangelength: [4,4]
            }

        },
        messages:{
            txtName:{
                required: "Please enter a last name",
                minlength: "Please enter a last name of at least 2 characters"
            },
            txtAddress:{
                required: "Please enter an address",
                minlength: "Please enter an address of at least 2 characters"
            },
            txtCity:{
                required: "Please enter a city",
                minlength: "Please enter a city of at least 2 characters"
            },
            txtPhone:{
                required: "Please enter a phone number"
            },
            txtEmail:{
                required: "Please enter an email address"
            },
            txtMake:{
                required: "Please enter a car make",
                minlength: "Please enter a car make of at least 2 characters"
            },
            txtModel:{
                required: "Please enter a car model",
                minlength: "Please enter a car model of at least 2 characters"
            },
            txtYear:{
                required: "Please enter a car year",
                rangelength: "Please enter a car year in the format ####"
            }
        }
    });
    return form.valid;
}

jQuery.validator.addMethod("phone", function(value, element) {
    return this.optional(element) || /^\(\d{3}\)\d{3}-?\d{4}|^\d{3}\-\d{3}\-\d{4}/.test(value);
});


/**
 * Created by EricGiri
 *              on 2016-03-29.
 */
