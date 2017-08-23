# twatt-api

      npm init
      npm i -S oauth
      npm i -S dotenv (input your access token and secret key from twitter put into file .env)
    
    
## Setting route

routes | HTTP | Description
-------|------|------------
/twitter/timeline | GET | User can see all their timeline
/twitter/post | POST | Posting something new
/twitter/search | GET | input params (key: value) e.g (key: "hacktiv8"). The result will be show all about hacktiv8.


## File and Folder 
```bash

    .
    ├── README.md
    ├── controllers
    │   └── twitterController.js
    ├── routes
    │   └── twitter.js
    │   └── index.js
    ├── package.json
    ├── app.js
    ├── .env.template
    
