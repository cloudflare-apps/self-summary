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

    const {gravatarEmail, type: pictureType, url: pictureURL} = options.profilePicture
    const wrapper = document.createElement("eager-wrapper")
    let profileTemplate = ""

    if (pictureType !== "none") {
      const imageSrc = pictureType === "upload" && pictureURL || gravatarURL(gravatarEmail)

      profileTemplate = `<eager-profile-picture style="background-image: url('${imageSrc}');"></eager-profile-picture>`
    }


    wrapper.innerHTML = `
      <eager-details>
        ${profileTemplate}
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

  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
