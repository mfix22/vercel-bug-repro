/* global domtoimage */
const DOM_TO_IMAGE_PATH = require.resolve('../../../lib/dom-to-image')

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '6mb',
    },
  },
}

export default async function id(req, res) {
  return res.json(DOM_TO_IMAGE_PATH)
}
