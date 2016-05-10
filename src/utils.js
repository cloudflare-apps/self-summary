export function gravatarURL(email = "", size = 160) {
  const emailMd5 = window.EagerGravatar.md5(email.toLowerCase())

  return `https://www.gravatar.com/avatar/${emailMd5}.jpg?s=${size}`
}

export function hexToRGBA(hex, opacity = 1) {
  const components = hex
    .replace("#", "")
    .match(/.{1,2}/g)
    .map(hextet => parseInt(hextet, 16))
    .concat(opacity)
    .join(", ")

  return `rgba(${components})`
}
