const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w-]+/g, '')     // Remove all non-word chars
}

const titleCase = (text) => {
  return(
    text.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
  )
}

module.exports =
{
  slugify: slugify,
  titleCase: titleCase
}