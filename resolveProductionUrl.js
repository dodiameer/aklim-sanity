const previewSecret = "7a822cebb670d6eb56be3b767ca1a7da05214479bb0671486e1c6f7dcc18f21a"
const projectUrl = "http://localhost:3000"

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}
