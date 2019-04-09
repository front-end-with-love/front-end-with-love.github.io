$(document).ready(function() {
  // setTimeout(function () {
  //   $('.video-container').addClass('hide');
  //   setTimeout(function () {
  //       $('form').addClass('active');
  //   }, 1500);
  //   setTimeout(function () {
  //       $('span').addClass('active');
  //   }, 1000);
  //   setTimeout(function () {
  //       $('h2').addClass('active');
  //   }, 500);
  //   setTimeout(function () {
  //       $('#bottom_logo').addClass('active');
  //   }, 1600);
  // }, 2100);
});

$(document).ready(function() {
  $("#tg").inputmask({
    placeholder: "",
    showMaskOnHover: false,
    mask: "@*{1,99}",
    greedy: false,
    onBeforePaste: function(pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
    },
    definitions: {
      "*": {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
        casing: "lower"
      }
    }
  });
});
// $("#email").inputmask({
//   mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
// placeholder: "",
// showMaskOnHover: false,
//   greedy: false,
//   onBeforePaste: function (pastedValue, opts) {
//     pastedValue = pastedValue.toLowerCase();
//     return pastedValue.replace("mailto:", "");
//   },
//   definitions: {
//     '*': {
//       validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
//       casing: "lower"
//     }
//   }
// });

$(document).ready(function() {
  $(form).validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: "Необходимо заполнить поле Email",
        email: "Email должен быть в правильном формате"
      }
    },
    submitHandler: function(form) {
      console.log("validated!!");
      $("#submit-button").prop("disabled", true);
      $.ajax({
        type: "POST",
        url: "https://api.outcon.pro/subscribe",
        data: {
          email: event.target.elements["email"].value,
          telegram: event.target.elements["telegram"].value
        },
        success: function(params) {
          console.log("done!!!!");
          $("#form").animate({ opacity: "hide" }, 1000, function() {
            $(".success").animate({ opacity: "show" }, 1000);
          });
        },
        error: function(xhr) {
          showServerErrors(xhr.responseJSON.errors);
          $("#submit-button").prop("disabled", false);
        }
      });
    },
    invalidHandler: function(form) {
      console.log("validation error!!");
    },
    focusInvalid: true,
    errorClass: "error-label",
    onkeyup: false,
    onfocusout: false
  });
});

function showServerErrors(errors) {
  Object.keys(errors).forEach(function(key) {
    var $element = $("[name = " + key + "]");
    if ($element.length) {
      $element.after(
        '<label class="error-label server-error" for="' +
          key +
          '">' +
          errors[key][0] +
          "</label>"
      );
    }
  });

  // focus first
  var $inputs = $(
    Object.keys(errors)
      .map(function(key) {
        return "[name = " + key + "]";
      })
      .join(", ")
  );
  if ($inputs.length) $inputs.first().focus();
}
