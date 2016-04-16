"use strict";

(function () {
  var CONTAINER_CLASS = "eager-self-summary";

  var element = void 0;
  var options = INSTALL_OPTIONS;

  function updateElement() {
    element = Eager.createElement(options.location, element);
    element.classList.add(CONTAINER_CLASS);
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