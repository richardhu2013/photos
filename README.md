#Test

## What it does?
Fetch photos from a public API endpoint and show the results as a list

## Installation
Run `yarn install` from project root

## Environment
* Ubuntu 14.04
* Node v5.12.0 - use `nvm` to switch to a desired version if you have multiple `node` installed

##Assumptions
* `webpack-dev-server` has been installed globally

##Test
* `npm run test`

##Note
* For the sake of minimal overhead, I limit the number of photos to `10`. For the full list, please get rid of `-10` in `slice` that resides in `src/actions/photo`
