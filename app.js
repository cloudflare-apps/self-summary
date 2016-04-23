(function () {
  const CONTAINER_CLASS = "eager-self-summary"

  let element
  let options = INSTALL_OPTIONS

  function gravatarURL(email = "", size = 160) {
    const emailMd5 = window.EagerGravatar.md5(email.toLowerCase())

    return `http://www.gravatar.com/avatar/${emailMd5}.jpg?s=${size}`
  }

  function updateElement() {
    element = Eager.createElement(options.location, element)
    element.classList.add(CONTAINER_CLASS)

    const imageSrc = options.image ? options.image : gravatarURL(options.email)
    const wrapper = document.createElement("eager-wrapper")

    wrapper.setAttribute("data-position", options.position)

    wrapper.innerHTML = `
      <eager-details>
        <eager-avatar style="background-image: url(${imageSrc});"></eager-avatar>
        <eager-message>${options.message.html}</eager-message>
      </eager-details>
    `
    const icons = document.createElement("eager-icons")

    icons.setAttribute("data-position", options.position)

    wrapper.appendChild(icons)

    if (options.email) {
      icons.innerHTML += `<a class="eager-social" data-icon="email" href="mailto:${options.email}"></a>`
    }

    if (options.twitter) {
      icons.innerHTML += `<a class="eager-social" data-icon="twitter" href="https://www.twitter.com/${options.twitter}"></a>`
    }

    if (options.facebook) {
      icons.innerHTML += `<a class="eager-social" data-icon="facebook" href="https://www.facebook.com/${options.facebook}"></a>`
    }

    if (options.linkedIn) {
      icons.innerHTML += `<a class="eager-social" data-icon="linkedIn" href="https://www.linkedin.com/in/${options.linkedIn}"></a>`
    }

    element.appendChild(wrapper)
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
