
$("#contact_form").submit(function(e) {
    e.preventDefault();




    let message = $("#NotificationMessage");
    message.text("Message Sent");
    $('#contact_form')[0].reset();
    return false;
});