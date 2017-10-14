# HopeStarter

This is a minimalistic Angular starter with all you should need to create an easy to read and scale state of the art Angular application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To run `ng-cli` commands open another terminal and leave this one open since it's running the dev server.

## Generating components / UI elements

- bootstrap
```
ng generate module [path-from-/app]/component-name
ng generate component [path-from-/app]/component-name
```

- export in module

- inject in parent


Why module first ?
This way your component has a module file where you can import anything in an Angular way.

## Generating routes / new pages

[TODO]

- routes file

- reference in parent


## Generating new stores

[TODO]


## Building

Tools for making sure the build is as small as possible and our pages as fast as possible to compile are built in to Angular CLI, all that is needed is to  make use of them.

The command to achieve the smallest possible and fastest to render build is:  

```bash
ng build --aot --env=prod --prod
``` 

- `--prod` minify hash, and gzip.
- `--env=prod` use your prod environment constants file.
- `--aot` compile angular templates via [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)

And to analyze our build files we can use the flag:
- `--stats-json` generate stats.json that can then be visualized in [webpack visualizer](https://chrisbateman.github.io/webpack-visualizer/)
