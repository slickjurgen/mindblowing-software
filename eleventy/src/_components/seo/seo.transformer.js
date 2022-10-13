const lodash = require("lodash")
const defaults = require("../../_data/seo_defaults.json")

module.exports = ({ path, title, image, description, overrides = {} }) => {
  const title_template = overrides.title_template || defaults.title_template

  const getTitle = (str) => title_template.replace("%s", str)

  const buildUrl = (path) => `${defaults.base_url}${path || ""}`

  const pageProps = {
    description: description,
    image: image,
    title: title
  }

  const ogProp = (key) =>
    lodash.get(overrides, `og.${key}`) ||
    overrides[key] ||
    pageProps[key] ||
    lodash.get(defaults, `og.${key}`) ||
    defaults[key]

  const twitterProp = (key) =>
    lodash.get(overrides, `twitter.${key}`) ||
    lodash.get(overrides, `og.${key}`) ||
    overrides[key] ||
    pageProps[key] ||
    lodash.get(defaults, `twitter.${key}`) ||
    lodash.get(defaults, `og.${key}`) ||
    defaults[key]

  return {
    description: overrides.description || description || defaults.description,
    image: buildUrl(overrides.image || image || defaults.image),
    og: {
      description: ogProp("description"),
      image: buildUrl(ogProp("image")),
      title: getTitle(ogProp("title")),
      type: lodash.get(overrides, "og.type") || lodash.get(defaults, "og.type")
    },
    title: getTitle(overrides.title || title || defaults.title),
    twitter: {
      description: twitterProp("description"),
      image: buildUrl(twitterProp("image")),
      title: getTitle(twitterProp("title")),
      card: lodash.get(overrides, "twitter.card") || lodash.get(defaults, "twitter.card")
    },
    url: buildUrl(path)
  }
}
