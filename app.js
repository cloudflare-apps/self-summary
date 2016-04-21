(function () {
  const CONTAINER_CLASS = "eager-self-summary"

  let element
  let options = INSTALL_OPTIONS

  function gravatarURL(email = "", size = 160) {
    const emailMd5 = window.EagerGravatar.md5(email.toLowerCase())

    return `http://www.gravatar.com/avatar/${emailMd5}".jpg?s=${size}`
  }

  function updateElement() {
    element = Eager.createElement(options.location, element)
    element.classList.add(CONTAINER_CLASS)

    const imageSrc = options.image ? options.image : gravatarURL(options.email)

    element.innerHTML += `<eager-avatar style="background-image: url(${imageSrc});"></eager-avatar>`
    element.innerHTML += `<eager-message>${options.message.html}</eager-message>`

    if (options.email) {
      element.innerHTML += `<a class="eager-social" data-icon="email" href="mailto:${options.email}"></a>`
    }
    if (options.twitter) {
      element.innerHTML += `<a class="eager-social" data-icon="twitter" href="https://www.twitter.com/${options.twitter}"></a>`
    }
    if (options.facebook) {
      element.innerHTML += `<a class="eager-social" data-icon="facebook" href="https://www.facebook.com/${options.facebook}"></a>`
    }
    if (options.linkedIn) {
      element.innerHTML += `<a class="eager-social" data-icon="linkedIn" href="https://www.linkedin.com/in/${options.linkedIn}"></a>`
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement)
  }
  else {
    updateElement()
  }

  INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
