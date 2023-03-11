# About Owl

Owl is meant to be a starter / educational application with a few bells and whistles built in. It is slightly opinionated, but there's nothing that can't be changed to get the desired behavior.

This application can be used out of the box for demo purposes, but if it's used as a basis for a new application then there's a little customization that needs to happen. This README will get you going.

<br />

# Features

- Build & Dev
  - yarn 2
  - Webpack
    - Chunking & cache busting
    - Minify & uglify code
  - Babel
  - ESLint (using "flat config")
  - Prettier
  - Husky githook integration
    - Linting of staged files prior to git comments
  - VSCode Workspace
- Hosting
  - Webpack DevServer
  - Local HTTPS
- App
  - Easy configuration per environment (even for Webpack config)
  - Authentication via OIDC with Auth0 as a provider
    - Public & Private routes
  - Api Authorization via OAuth 2.0 using Auth0 as a provider
  - Client-side storage using IndexedDb via LocalForage (can be switched to other locations)
  - Redux & Redux Toolkit integration
  - Modular architecture
  - Centralized Routing
    - Routing via React Router DOM's `BrowserRouter` using `RouterProvider` & `Outlet`s
  - Deep linking
  - Installable PWA
    - Service Worker configured via Workbox
  - No UI framework (use whatever you'd like)
  - robots.txt

<br />

## Spider Api

The [Spider Api](https://github.com/AGDevX/Spider) is like Owl in that it is a starter application, but for .NET Core Web Apis. Owl is minimally dependent on the API. It's only purpose is to demonstrate how API calls can be made to secure APIs. This dependency can be easily removed.

<br />
<br />

# Customizing Owl

If you like the behavior of the app then most of the customization only needs to happen in the `environment` folder, `package.json` file, and `webmanifest` file. Otherwise, feel free to remove or change the functionality to your liking.

## Authentication & Authorization

Owl leverages the Auth0 platform to authenticate users and to request access tokens using the PKCE flow for calling the Spider Api.

<br />

### AuthN (are you who you say you are?)

Users are authenticated using the [OpenId Connect (OIDC)](https://openid.net/connect/) protocol. By default, you can log in using a login stored in Owl's Auth0 database or your Google account.

**Auth0 Setup**

The values used for the configuration should be changed to match your application. Settings not explicitly called out were kept at their default value.

1. Create a free account at [auth0.com](https://auth0.com/)
2. Create a new Single Page Application
   - Name: _Owl_
   - Description: _React starter application_
   - Allowed Callback URLs: _https://owl.local.com/auth-callback_
   - Allowed Logout URLs: _https://owl.local.com/auth-callback?auth-type=sign-out_
   - Allowed Web Origins: _https://owl.local.com_
   - Other settigs: _default value_
   - Advanced Settings:
     - Grant Types: _Authorization Code_, _Refresh Token_
3. Use your Auth0 configuration to update the `environments` config files
4. Create a custom action and add it to the Login Flow

- This will add user claims to the id and access tokens

```
/**
* Handler that will be called during the execution of a PostLogin flow.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {
  api.accessToken.setCustomClaim("request_ip", event.request.ip)
  api.accessToken.setCustomClaim("app_metadata", event.user.app_metadata)
  api.accessToken.setCustomClaim("created_at", event.user.created_at)
  api.accessToken.setCustomClaim("updated_at", event.user.updated_at)

  api.accessToken.setCustomClaim("email", event.user.email)
  api.accessToken.setCustomClaim("email_verified", event.user.email_verified)
  api.accessToken.setCustomClaim("phone_number", event.user.phone_number)
  api.accessToken.setCustomClaim("phone_verified", event.user.phone_verified)

  api.accessToken.setCustomClaim("family_name", event.user.family_name)
  api.accessToken.setCustomClaim("given_name", event.user.given_name)
  api.accessToken.setCustomClaim("nickname", event.user.nickname)
  api.accessToken.setCustomClaim("name", event.user.name)

  api.accessToken.setCustomClaim("sub", event.user.user_id)
  api.accessToken.setCustomClaim("user_id", event.user.user_id)
  api.accessToken.setCustomClaim("picture", event.user.picture)

  api.idToken.setCustomClaim("request_ip", event.request.ip)
  api.idToken.setCustomClaim("app_metadata", event.user.app_metadata)
  api.idToken.setCustomClaim("created_at", event.user.created_at)
  api.idToken.setCustomClaim("updated_at", event.user.updated_at)

  api.idToken.setCustomClaim("email", event.user.email)
  api.idToken.setCustomClaim("email_verified", event.user.email_verified)
  api.idToken.setCustomClaim("phone_number", event.user.phone_number)
  api.idToken.setCustomClaim("phone_verified", event.user.phone_verified)

  api.idToken.setCustomClaim("family_name", event.user.family_name)
  api.idToken.setCustomClaim("given_name", event.user.given_name)
  api.idToken.setCustomClaim("nickname", event.user.nickname)
  api.idToken.setCustomClaim("name", event.user.name)

  api.idToken.setCustomClaim("sub", event.user.user_id)
  api.idToken.setCustomClaim("user_id", event.user.user_id)
  api.idToken.setCustomClaim("picture", event.user.picture)
};


/**
* Handler that will be invoked when this action is resuming after an external redirect. If your
* onExecutePostLogin function does not perform a redirect, this function can be safely ignored.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
// exports.onContinuePostLogin = async (event, api) => {
// };
```

<br />

### AuthZ (are you allowed to do what you're trying to do?)

The Spider Api is protected by the [OAuth 2.0](https://oauth.net/2/) protocol and uses Auth0 as the Authorization Server. When Owl needs to consume the Spider Api, it first requests an access token from Auth0 and passes it to the Spider Api in the `Authorization` HTTP request header.

See the [Spider Api README](https://github.com/AGDevX/Spider#readme) for it's OAuth 2.0 implementation.

<br />
<br />

# Initial Setup

## Host

Using a Host other than localhost and running under HTTPS will prevent browsers from throwing SameSite cookie errors.

The local URL for this app is `owl.local.com`. If you want to change the URL, do a search and replace on the entire codebase.

<br />

- Run the command `yarn createLocalSsl [win|mac]`
  - `win` used by default

<br />
<br />

## Install dependencies

- Run the command `yarn install`

<br />
<br />

# Start the application

- Run the command `yarn watch`

<br />
<br />

# Tech Debt

- Redirect to an error page from a Thunk in case of critical errors from which we cannot recover
  - `redux-first-history` is not compatible with React Router DOM's `RouterProvider` (https://github.com/salvoravida/redux-first-history/issues/95)
- Switch to using eslint.config.js when the ESLint extension better supports it
