# PILOS-Docs
User documentation for [PILOS](https://github.com/THM-Health/PILOS) in German (THM specific documentation, create fork for own version)

## TODO
- [ ] Admin documentation
- [ ] Internationalize
- [ ] Generic / Not-THM specific


### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
