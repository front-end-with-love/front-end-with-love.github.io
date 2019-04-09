$(document).ready(function() {
  $("video").on("ended", function() {
    TweenMax.to("form", 1, {
      delay: 1,
      opacity: 1
    });
    TweenMax.to("span", 1, {
      delay: 0.5,
      opacity: 1,
      transform: "scale3d:1,1,1",
    });
    TweenMax.to("h2", 1.5, { opacity: 1, transform: "scale3d:1,1,1" });
    TweenMax.to("#bottom_logo", 0.5, {
      delay: 1.6,
      visibility: "visible",
      opacity: 1
    });
  });
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
