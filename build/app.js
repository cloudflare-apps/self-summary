"use strict";

(function () {
  var CONTAINER_CLASS = "eager-self-summary";

  var element = void 0;
  var options = INSTALL_OPTIONS;

  function gravatarURL() {
    var email = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
    var size = arguments.length <= 1 || arguments[1] === undefined ? 160 : arguments[1];

    var emailMd5 = window.EagerGravatar.md5(email.toLowerCase());

    return "http://www.gravatar.com/avatar/" + emailMd5 + ".jpg?s=" + size;
  }

  function updateElement() {
    element = Eager.createElement(options.location, element);
    element.classList.add(CONTAINER_CLASS);

    var imageSrc = options.image ? options.image : gravatarURL(options.email);
    var wrapper = document.createElement("eager-wrapper");
    // TODO: something like
    // wrapper.setAttribute('data-position', options.position)

    wrapper.innerHTML = "\n      <eager-details>\n        <eager-avatar style=\"background-image: url(" + imageSrc + ");\"></eager-avatar>\n        <eager-message>" + options.message.html + "</eager-message>\n      </eager-details>\n    ";

    if (options.email) {
      wrapper.innerHTML += "<a class=\"eager-social\" data-icon=\"email\" href=\"mailto:" + options.email + "\"></a>";
    }

    if (options.twitter) {
      wrapper.innerHTML += "<a class=\"eager-social\" data-icon=\"twitter\" href=\"https://www.twitter.com/" + options.twitter + "\"></a>";
    }

    if (options.facebook) {
      wrapper.innerHTML += "<a class=\"eager-social\" data-icon=\"facebook\" href=\"https://www.facebook.com/" + options.facebook + "\"></a>";
    }

    if (options.linkedIn) {
      wrapper.innerHTML += "<a class=\"eager-social\" data-icon=\"linkedIn\" href=\"https://www.linkedin.com/in/" + options.linkedIn + "\"></a>";
    }

    element.appendChild(wrapper);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement);
  } else {
    updateElement();
  }

  INSTALL_SCOPE = {
    setOptions: function setOptions(nextOptions) {
      options = nextOptions;

      updateElement();
    }
  };
})();