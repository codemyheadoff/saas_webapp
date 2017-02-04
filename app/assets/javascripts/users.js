$(document).ready(function() {
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  // Watch for a form submission:
  $("#form-submit-btn").click(function(event) {
    event.preventDefault();
    $('input[type=submit]').prop('disabled', true);
    var error = false;
    
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
        
    if (!error) {
      // Get the Stripe token:
      Stripe.createToken({
        number: ccNum,
        cvc: cvcNum,
        exp_month: expMonth,
        exp_year: expYear
      }, stripeResponseHandler);
    }
    return false;
  }); // form submission
    
   function stripeResponseHandler(status, response) {
  // Grab the form:
  var f = $("#new_user");

  /*if (response.error) { // Problem!

    // Show the errors on the form:
    f.find('.payment-errors').text(response.error.message);
    f.find('.submit').prop('disabled', false); // Re-enable submission

  } else { // Token was created!*/

    // Get the token ID:
    var token = response.id;
    

    // Insert the token ID into the form so it gets submitted to the server:
    f.append('<input type="hidden" name="user[stripe_card_token]" value="' + token + '"/>');

    // Submit the form:
    f.get(0).submit();
  }
});











