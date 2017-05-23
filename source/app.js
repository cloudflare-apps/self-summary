import socialMedia from './social-media'
import md5 from 'webtoolkit.md5'

(function () {
  'use strict'

  let element
  let options = INSTALL_OPTIONS

  function gravatarURL (email = '', size = 160) {
    const emailMd5 = md5(email.toLowerCase())

    return `https://www.gravatar.com/avatar/${emailMd5}.jpg?s=${size}`
  }

  function hexToRGBA (hex, opacity = 1) {
    const components = hex
      .replace('#', '')
      .match(/.{1,2}/g)
      .map(hextet => parseInt(hextet, 16))
      .concat(opacity)
      .join(', ')

    return `rgba(${components})`
  }

  function updateElement () {
    element = INSTALL.createElement(options.location, element)
    element.setAttribute('app', 'self-summary')
    element.setAttribute('data-position', options.position)

    const {gravatarEmail, type: pictureType, url: pictureURL} = options.profilePicture
    const wrapper = document.createElement('summary-wrapper')
    const backgroundColor = options.backgroundColor || 'transparent'
    let profileTemplate = ''

    wrapper.style.color = options.textColor || 'inherit'

    if (backgroundColor === 'transparent') {
      element.setAttribute('data-background-visibility', 'hidden')
      wrapper.style.backgroundColor = backgroundColor
    } else {
      element.setAttribute('data-background-visibility', 'visible')
      wrapper.style.backgroundColor = hexToRGBA(backgroundColor, 0.6)
    }

    if (pictureType !== 'none') {
      const imageSrc = pictureType === 'upload' && pictureURL ? pictureURL : gravatarURL(gravatarEmail)

      profileTemplate = `<summary-profile-picture style="background-image: url('${imageSrc}');"></summary-profile-picture>`
    }

    const iconTemplate = Object
      .keys(options.icons)
      .filter(type => options.icons[type].enabled)
      .reduce((accumulator, type) => {
        const {username} = options.icons[type]
        const site = socialMedia[type]

        return accumulator + `
          <a data-summary-icon="${type}" href="${site.url}/${username}" alt="${username} on ${type}" target="_blank">
            ${site.icon}
          </a>`
      }, '')

    wrapper.innerHTML = `
      <summary-details>
        ${profileTemplate}
        <summary-message>${options.message}</summary-message>
        <summary-icons>
          ${iconTemplate}
        </summary-icons>
      </summary-details>
    `

    element.appendChild(wrapper)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }

  window.INSTALL_SCOPE = {
    setOptions (nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
