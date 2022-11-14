const validateUrl = (url) => {
  const Url = url.trim() /* Remove os espaços brancos */
  const urlRegEx =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  if (!Url) {
    return "Url is required"
  } else if (!new RegExp(urlRegEx).test(Url)) {
    return "incorrect email format"
  }
  return ""
}

export default validateUrl
