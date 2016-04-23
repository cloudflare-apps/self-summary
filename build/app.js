"use strict";

(function () {
  var CONTAINER_CLASS = "eager-self-summary";

  var element = void 0;
  var options = INSTALL_OPTIONS;

  function gravatarURL() {
    var email = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
    var size = arguments.length <= 1 || arguments[1] === undefined ? 160 : arguments[1];

    var emailMd5 = window.EagerGravatar.md5(email.toLowerCase());

    return "https://www.gravatar.com/avatar/" + emailMd5 + ".jpg?s=" + size;
  }

  function updateElement() {
    element = Eager.createElement(options.location, element);
    element.classList.add(CONTAINER_CLASS);

    element.setAttribute("data-position", options.position);

    var _options = options;
    var profilePicture = _options.profilePicture;

    var imageSrc = profilePicture.type === "upload" && profilePicture.url || gravatarURL(profilePicture.gravatarEmail);
    var wrapper = document.createElement("eager-wrapper");

    wrapper.innerHTML = "\n      <eager-details>\n        <eager-profile-picture style=\"background-image: url(" + imageSrc + ");\"></eager-profile-picture>\n        <eager-message>" + options.message.html + "</eager-message>\n      </eager-details>\n    ";

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