(function () {
  const CONTAINER_CLASS = "eager-self-summary"

  let element
  let options = INSTALL_OPTIONS

  function gravatarURL(email = "", size = 160) {
    const emailMd5 = window.EagerGravatar.md5(email.toLowerCase())

    return `https://www.gravatar.com/avatar/${emailMd5}.jpg?s=${size}`
  }

  function updateElement() {
    element = Eager.createElement(options.location, element)
    element.classList.add(CONTAINER_CLASS)

    element.setAttribute("data-position", options.position)

    const {profilePicture} = options
    const imageSrc = profilePicture.type === "upload" && profilePicture.url || gravatarURL(profilePicture.gravatarEmail)
    const wrapper = document.createElement("eager-wrapper")

    wrapper.innerHTML = `
      <eager-details>
        <eager-profile-picture style="background-image: url(${imageSrc});"></eager-profile-picture>
        <eager-message>${options.message.html}</eager-message>
      </eager-details>
    `

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
