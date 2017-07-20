# Building Palav Website

## Requirements
The Palav website is built using bootstrap, angular, firebase and wercker.

## Update to Website
Updates to the website could be static content{text , images, videos} , or dynamic content which is data in firebase.

The main app components are in `src\app\{app.component.*}` files.
Individual app components are in `src\app\components\{*.component.*}` files.
Service components are in `src\app\service\{*.component.*}` files.

In order to update the static content you have to change the appropriate `app` component html.
For e.g. If you want to update the `home` section, update the `src\app\components\home\home.component.html`

In order to update the dynamic content you have to change the `service\*.ts` files. 
The preloaded sample data is in the `data\palav.json` file.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
