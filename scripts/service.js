let serviceSelected = false;
$("td").click(function() {
    let parent_tr = $(this).closest('tr');

    if (parent_tr.hasClass("selectedService")){
        parent_tr.removeClass("selectedService");
        serviceSelected = false;
    }
    else {
        $(".selectedService").removeClass("selectedService");
        parent_tr.addClass("selectedService");
        serviceSelected = true;
        let table = $("#services_table");
        if ( table.hasClass("missingService"))
            table.removeClass("missingService");
    }
});

$("#services_form").submit(function(e) {
    e.preventDefault();
    let message = $("#NotificationMessage");

    if(!serviceSelected){
        message.text("Please select a service");
        message.removeClass().addClass("errorMessage");
        $("#services_table").addClass("missingService");
    } else {






        message.text("Request Submitted");
        message.removeClass().addClass("successMessage");
        $('#services_form')[0].reset();
        $(".selectedService").removeClass("selectedService");
        serviceSelected = false;
    }



    return false;
});