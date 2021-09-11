define({ "api": [
  {
    "type": "DELETE",
    "url": "/economy/:path/",
    "title": "Delete Profile",
    "version": "1.0.0",
    "name": "profileDelete",
    "group": "Economy",
    "description": "<p>Blah</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Core-API Key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"GndxRHWDaHCVsbrBwGAF\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The response from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"messageAPI\": \"Deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>The path for the user economy profile you want to delete.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/economy/:path/"
      }
    ],
    "filename": "routes/economy/economy.js",
    "groupTitle": "Economy"
  },
  {
    "type": "GET",
    "url": "/economy/:path",
    "title": "Load Profile",
    "version": "1.0.0",
    "name": "profileLoad",
    "group": "Economy",
    "description": "<p>Blah</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The key required to utilise the CoreAPI.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"GndxRHWDaHCVsbrBwGAF\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "guildId",
            "description": "<p>The guild ID for the profile.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The user ID for the profile.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "points",
            "description": "<p>The number of points the user has accumulated on the guild.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>The overall level of the user for the guild.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "daily",
            "description": "<p>The timestamp of when a user can claim a daily reward.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "inv",
            "description": "<p>The inventory of the user for the guild, it can contain items such as tokens.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"guildId\": \"867013203346849803\",\n  \"userId\": \"146048938242211840\",\n  \"points\": 0,\n  \"level\": 0,\n  \"daily\": 1631232146,\n  \"inv\": []\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>The path for the user economy profile you want to access, a combination of the guild and user id numbers like so; <code>${guild.id}-${user.id}</code></p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3030/economy/:path"
      }
    ],
    "filename": "routes/economy/economy.js",
    "groupTitle": "Economy"
  },
  {
    "type": "POST",
    "url": "/economy/:path/:value",
    "title": "Save Profile",
    "version": "1.0.0",
    "name": "profileSave",
    "group": "Economy",
    "description": "<p>Blah</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Core-API Key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"GndxRHWDaHCVsbrBwGAF\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The response from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"messageAPI\": \"Saved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>The path for the user economy profile you want to save.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/economy/:path/:value"
      }
    ],
    "filename": "routes/economy/economy.js",
    "groupTitle": "Economy"
  },
  {
    "type": "DELETE",
    "url": "/settings/:path",
    "title": "Delete Settings",
    "version": "1.0.0",
    "name": "settingsDelete",
    "group": "Settings",
    "description": "<p>This is the path you would take to delete server settings</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The key required to utilise the CoreAPI.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"GndxRHWDaHCVsbrBwGAF\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The response from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ message: \"The settings were deleted successfully\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>The path for the setting(s) you want to delete.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/settings/:path"
      }
    ],
    "filename": "routes/settings/settings.js",
    "groupTitle": "Settings"
  },
  {
    "type": "GET",
    "url": "/settings/:path",
    "title": "Load Settings",
    "version": "1.0.0",
    "name": "settingsLoad",
    "group": "Settings",
    "description": "<p>This is the path you would take to fetch server settings</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The key required to utilise the CoreAPI.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"GndxRHWDaHCVsbrBwGAF\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The response from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"prefix\": \"m.\",\n  \"role\": {\n    \"mod\": \"Moderator\",\n    \"admin\": \"Administrator\"\n  },\n \"notice\": {\n   \"system\": true,\n   \"level\": true,\n  \"reply\": true\n  },\n  \"social\": {\n    \"enabled\": true,\n    \"inventory\": true,\n    \"points\": {\n      \"min\": 1,\n      \"max\": 50,\n      \"daily\": {\n        \"enabled\": true,\n        \"reward\": 250\n      }\n    }\n  },\n  \"welcome\": {\n    \"type\": \"text\",\n    \"channel\": \"welcome\",\n    \"enabled\": false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>The path for the setting(s) you want to access.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/settings/:path"
      }
    ],
    "filename": "routes/settings/settings.js",
    "groupTitle": "Settings"
  },
  {
    "type": "POST",
    "url": "/settings/:path/:value",
    "title": "Save Settings",
    "version": "1.0.0",
    "name": "settingsSave",
    "group": "Settings",
    "description": "<p>This is the path you would take to save server settings</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The key required to utilise the CoreAPI.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"GndxRHWDaHCVsbrBwGAF\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>The response from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>The path for the setting(s) you want to update.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/settings/:path/:value"
      }
    ],
    "filename": "routes/settings/settings.js",
    "groupTitle": "Settings"
  },
  {
    "type": "get",
    "url": "/util/ping",
    "title": "Ping the API.",
    "version": "1.0.0",
    "name": "Ping",
    "group": "Utilities",
    "description": "<p>Ping this endpoint to retrieve a timestamp</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The key required to utilise the CoreAPI.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"GndxRHWDaHCVsbrBwGAF\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "messageAPI",
            "description": "<p>A successful pong.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>The timestamp of the pong.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  messageAPI: \"pong\",\n  timestamp: 1631015865921\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/util/ping"
      }
    ],
    "filename": "routes/util/ping.js",
    "groupTitle": "Utilities"
  }
] });