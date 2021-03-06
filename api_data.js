define({ "api": [
  {
    "type": "DELETE",
    "url": "/economy/:path/",
    "title": "Delete Profile",
    "version": "1.0.0",
    "name": "profileDelete",
    "group": "Economy",
    "description": "<p>Blah</p>",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"APIMessage\": \"Deleted successfully\"\n}",
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
    "filename": "routes/economy/economy.js",
    "groupTitle": "Economy"
  },
  {
    "type": "GET",
    "url": "/economyFind/:userId",
    "title": "Find Profile",
    "version": "1.0.0",
    "name": "profileFind",
    "group": "Economy",
    "description": "<p>This will find all economic profiles belonging to the user id provided.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>The returned object containing nested results from the query.</p>"
          },
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
          "content": "HTTP/1.1 200 OK\n  {\n    \"583331012881154048-146048938242211840\": {\n      \"guildId\": \"583331012881154048\",\n      \"userId\": \"146048938242211840\",\n      \"points\": 100,\n      \"level\": 1,\n      \"daily\": 1630622908,\n      \"inv\": []\n    },\n    \"867013203346849803-146048938242211840\": {\n        \"guildId\": \"867013203346849803\",\n        \"userId\": \"146048938242211840\",\n        \"points\": 0,\n        \"level\": 0,\n        \"daily\": 1631232146,\n        \"inv\": []\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>userId</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n  {\n    \"error\": \"User does not exist\"\n  }",
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
            "field": "userId",
            "description": "<p>The ID of the user you wish to find all economic data on.</p>"
          }
        ]
      }
    },
    "filename": "routes/economy/economyFind.js",
    "groupTitle": "Economy"
  },
  {
    "type": "GET",
    "url": "/economy/:path",
    "title": "Load Profile",
    "version": "1.0.0",
    "name": "profileLoad",
    "group": "Economy",
    "description": "<p>This is the economic, or social profile of the specified user, on the specified guild.</p>",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"APIMessage\": \"Saved successfully\"\n}",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "APIMessage",
            "description": "<p>The response from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"APIMessage\": \"Deleted successfully.\"\n}",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Response",
            "description": "<p>The response from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"prefix\": \"m.\",\n  \"role\": {\n    \"mod\": \"Moderator\",\n    \"admin\": \"Administrator\"\n  },\n \"notice\": {\n   \"system\": true,\n   \"level\": true,\n  \"reply\": true\n  },\n  \"social\": {\n    \"enabled\": true,\n    \"inventory\": true,\n    \"points\": {\n      \"min\": 1,\n      \"max\": 50,\n      \"daily\": {\n        \"enabled\": true,\n        \"reward\": 250\n      }\n    }\n  },\n  \"welcome\": {\n    \"type\": \"text\",\n    \"channel\": \"welcome\",\n    \"enabled\": false\n  }\n}",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "APIMessage",
            "description": "<p>The response from the API.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"APIMessage\": \"Saved successfully.\"\n}",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "APIMessage",
            "description": "<p>A successful ping.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>The timestamp of the response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"APIMessage\": \"pong\",\n  \"timestamp\": 1631015865921\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/util/ping.js",
    "groupTitle": "Utilities"
  }
] });
