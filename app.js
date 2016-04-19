(function () {
  const CONTAINER_CLASS = "eager-self-summary"

  let element
  let options = INSTALL_OPTIONS

  function updateElement() {
    element = Eager.createElement(options.location, element)
    element.classList.add(CONTAINER_CLASS)

    const selfSummary = document.createElement("eager-self-summary-content")

    element.appendChild(selfSummary)

    const closeButton = document.createElement("eager-self-summary-content-closeButton")

    selfSummary.appendChild(closeButton)
    closeButton.addEventListener("click", hide)

    const image = document.createElement("img")

    image.src = options.image
    selfSummary.appendChild(image)

    const header = document.createElement("h2")

    header.innerText = options.messageTitle
    selfSummary.appendChild(header)

    const message = document.createElement("eager-self-summary-content-message")

    message.innerText = options.message
    selfSummary.appendChild(message)

    const email = document.createElement("eager-self-summary-content-email")

    email.innerText = `Email: ${options.email}`
    selfSummary.appendChild(email)

    const twitter = document.createElement("eager-self-summary-content-twitter")

    twitter.innerText = `Twitter: ${options.twitter}`
    selfSummary.appendChild(twitter)

    const facebook = document.createElement("eager-self-summary-content-facebook")

    facebook.innerText = `Facebook: ${options.facebook}`
    selfSummary.appendChild(facebook)

    const linkedIn = document.createElement("eager-self-summary-content-linkedIn")

    linkedIn.innerText = `LinkedIn: ${options.linkedIn}`
    selfSummary.appendChild(linkedIn)

    function hide() {
      element.removeChild(selfSummary)
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
