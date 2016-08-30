```
heroku create projectname
travis encrypt $(heroku auth:token) --add deploy.api_key
```

