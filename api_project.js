define({
  "name": "CoreAPI",
  "version": "1.0.0",
  "description": "This is the Core API for Misaki, it constitutes both her economy system as well as her settings.",
  "title": "CoreAPI",
  "url": "https://notaweebdev.github.io",
  "header": {
    "title": "The CoreAPI",
    "content": "<h1>Introduction</h1>\n<p>The entire API ecosystem will require an <code>Authorization</code> header with the API Access key which will be generated when you install the relevant API(s).</p>\n<pre class=\"prettyprint lang-json\">{\n    \"Authorization\": \"GndxRHWDaHCVsbrBwGAF\"\n}\n</pre>\n"
  },
  "order": [
    "Utilities",
    "Settings",
    "Economy",
    "Ping",
    "settingsLoad",
    "settingsSave",
    "settingsDelete",
    "profileFind",
    "profileLoad",
    "profileSave",
    "profileDelete"
  ],
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2021-09-15T19:56:50.056Z",
    "url": "https://apidocjs.com",
    "version": "0.29.0"
  }
});
