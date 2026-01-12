export default {
  async fetch(request, env, ctx) {
    return new Response(INDEX_HTML, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    })
  }
}

import INDEX_HTML from "./index.html"
