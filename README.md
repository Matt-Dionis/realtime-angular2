# TweetDashboard
This project (other than the Express server) was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0.

## Installation
1) Install all dependencies with `npm install`.

2) Go to [Twitter Apps page](https://apps.twitter.com/) and create a dev account and basic app. You will need consumer and access_token keys and secrets.

3) Replace the placeholders in `server.js` with your actual keys and secrets. Note: This is not a good long-term solution. You may want to set these as environment variables. Make sure to never commit code containing your actual keys and secrets.

4) Within the Twitter stream code, track by any hashtag or term you like (default is '#javascript').

## Development server
Run `npm run serve-build` for a dev server. Navigate to `http://localhost:3000/`.
Use [Postman](https://www.getpostman.com/) or similar tool to send a GET request to `http://localhost:3000/stream`.

Note: This project was recently updated to Angular v2.3.1, Angular-CLI v1.0.0, and TypeScript v2.0.10. For a clean build run:
```
npm uninstall -g angular-cli
npm uninstall --save-dev angular-cli
npm install -g @angular/cli@latest
rm -rf node_modules dist
npm install
```
## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Further help
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
To reach out to me personally, contact me on Twitter [@mattdionis](https://twitter.com/MattDionis)
