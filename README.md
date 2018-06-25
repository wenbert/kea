# Kea

## To start:

```
$ npm install
$ npm start
```

A work in progress.

## TODO

1. Login.
   1. Create a MongoDB users table
   1. Login page needs to Authenticate against username and hashed password.
   1. If confirmed, create the JSON Web Token. You can include access level, name, etc. But never the password.
   1. Once you have the JWT, you can pass it around requests
   1. There will be a middleware to check this token
   1. JWT will be stored in client or passed along requests (???). ie: API

1. Admin Pages.
1. Setup Webpack, Babel, VueJS or React.
1. Tests
1. Deployment
