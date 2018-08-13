# Weather-Widget

Fairfax Media coding challenge

### Setup

Before setting up, please make sure you have Node and yarn installed. I use Node version 10.1.0 and yarn version 1.7 in this project.

###### Clone the repository

`git clone https://github.com/dmngu9/Weather-Widget.git`
Make a .env file at the root of the project. Declare API_KEYS in it with your private API key from open-weather-api site.

###### Install dependencies

`yarn install`

###### Run tests

`yarn test`

###### Run Application

`yarn start`
This will start webpack-dev-server to serve client code at http://localhost:3000

### Assumption

.._ I only made weather widget for today as shown in the design instead of multi day. I avoid scope creep in this project.
.._ Async loading and error UI are at the widget position because I think it is more logical rather than showing loading and error for the whole page
.._ In the design, there is a radio button group for temperature but the requirement description says 'Unit'. I decided to replace temperature radio button group with unit radio button group because the wind speed is also needed to taken into account for 2 different units available from the API.
.._ All the specs for UI are assumed because the given design does not show specs.

### Retrospective

.._ Time taken around 6 hrs
.._ Technology used: Typescript, styled-components, React, Storybook, Webpack.
.._ I lifted state up for both Editor and Widget to share state for title, unit and showWind. Looking back, this might not scale well but good enough for this project size. I think it is better to store state in Redux when having multiple form field values. I was avoiding Redux in this app because it is small and all those boilerplate from Redux might not worth it.
.._ I parallel fetch weather data for both metric and imperial units at once. And when user switch units, it does not fetch anymore. I dont find any reasons to constantly fetch weather data because it unlikely to change in few minutes.
.._ The Widget do async work and refetch data every hour.
.._ I only tested on Chrome and Firefox
.._ The Widget move to below of the Editor in tablet and phone screen size.
.._ First time I use axios, it was great. Normally I use rxjs ajax but this project is too small.
..\* I have lingting, code format and pre-commit hook to make the code consistent.
