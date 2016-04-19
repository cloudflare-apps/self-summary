(function () {
  const CONTAINER_CLASS = "eager-self-summary"

  let element
  let options = INSTALL_OPTIONS

  function updateElement() {
    element = Eager.createElement(options.location, element)
    element.classList.add(CONTAINER_CLASS)

    const closeButton = document.createElement("eager-closeButton")

    element.appendChild(closeButton)
    closeButton.addEventListener("click", hide)

    const image = document.createElement("img")

    image.src = options.image
    element.appendChild(image)

    const header = document.createElement("h2")

    header.innerText = options.messageTitle
    element.appendChild(header)

    const message = document.createElement("eager-message")

    message.innerText = options.message
    element.appendChild(message)

    const email = document.createElement("eager-email")

    email.innerText = `Email: ${options.email}`
    element.appendChild(email)

    const twitter = document.createElement("eager-twitter")

    twitter.innerText = `Twitter: ${options.twitter}`
    element.appendChild(twitter)

    const facebook = document.createElement("eager-facebook")

    facebook.innerText = `Facebook: ${options.facebook}`
    element.appendChild(facebook)

    const linkedIn = document.createElement("eager-linkedIn")

    linkedIn.innerText = `LinkedIn: ${options.linkedIn}`
    element.appendChild(linkedIn)

    function hide() {
      // document.removeChild(element)
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
