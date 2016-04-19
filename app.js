(function () {
  const CONTAINER_CLASS = "eager-self-summary"

  let element
  let options = INSTALL_OPTIONS

  function updateElement() {
    element = Eager.createElement(options.location, element)
    element.classList.add(CONTAINER_CLASS)

    element.innerHTML = `
      <img src=${options.image}>
      <h2>${options.messageTitle}</h2>
      <eager-message>${options.message}</eager-message><br><br>`
    if (options.emailToggle){
      element.innerHTML += `<eager-email>Email: ${options.email}</eager-email><br>`
    }
    if (options.twitterToggle){
      element.innerHTML += `<eager-twitter>Twitter: ${options.twitter}</eager-email><br>`
    }
    if (options.facebookToggle){
      element.innerHTML += `<eager-facebook>Facebook: ${options.facebook}</eager-facebook><br>`
    }
    if (options.linkedInToggle){
      element.innerHTML += `<eager-linkedIn>LinkedIn: ${options.linkedIn}</eager-linkedIn>`
    }
    
    // const closeButton = document.createElement("eager-closeButton")

    // element.appendChild(closeButton)
    // closeButton.addEventListener("click", hide)

    // function hide() {
    //   // document.removeChild(element)
    // }
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
