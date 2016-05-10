import * as ICONS from "./icons"
import {gravatarURL, hexToRGBA} from "./utils"

const CONTAINER_CLASS = "eager-self-summary"

let element

export function render() {
  const {options} = this

  element = Eager.createElement(options.location, element)
  element.classList.add(CONTAINER_CLASS)

  element.setAttribute("data-position", options.position)

  const {gravatarEmail, type: pictureType, url: pictureURL} = options.profilePicture
  const wrapper = document.createElement("eager-wrapper")
  const backgroundColor = options.backgroundColor || "transparent"
  let profileTemplate = ""

  wrapper.style.color = options.textColor || "inherit"

  if (backgroundColor === "transparent") {
    element.setAttribute("data-background-visibility", "hidden")
    wrapper.style.backgroundColor = backgroundColor
  }
  else {
    element.setAttribute("data-background-visibility", "visible")
    wrapper.style.backgroundColor = hexToRGBA(backgroundColor, 0.6)
  }

  if (pictureType !== "none") {
    const imageSrc = pictureType === "upload" && pictureURL || gravatarURL(gravatarEmail)

    profileTemplate = `<eager-profile-picture style="background-image: url('${imageSrc}');"></eager-profile-picture>`
  }

  const iconTemplate = Object
    .keys(options.icons)
    .filter(type => options.icons[type].enabled)
    .reduce((accumulator, type) => {
      const {username} = options.icons[type]

      return accumulator + `<a data-eager-icon="${type}" href="http://${type}.com/${username}" target="_blank">
        ${ICONS[type]}
      </a>`
    }, "")

  wrapper.innerHTML = `
    <eager-details>
      ${profileTemplate}
      <eager-message>${options.message.html}</eager-message>
      <eager-icons>
        ${iconTemplate}
      </eager-icons>
    </eager-details>
  `

  element.appendChild(wrapper)
}

export const preview = {
  setOptions(nextOptions, forceRender) {
    this.options = nextOptions

    forceRender()
  }
}
