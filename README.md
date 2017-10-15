# HopeStarter

This is a minimalistic Angular starter with all you should need to create an easy to read and scale state of the art Angular application.

## Development server

```
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To run `ng` commands open another terminal and leave this one open since it's running the dev server.

## Generating components / UI elements

- Bootstrap
```
ng g module [path-from-/app]/component-name
ng g component [path-from-/app]/component-name
```

- Export in module

  In `[path-from-/app]/component-name.module.ts`

  Add:

  ```ts
  @NgModule({
    (...)
    exports: [ComponentName] //<-- add this
  })
  ```

- Inject in the parent

  In the `.module.ts` file of the direct parent add:

  ```ts
  import { ComponentNameModule } from './component-name/component-name.module'; //<-- add this (1/2)

  @NgModule({
    imports: [
      (...)
      ComponentNameModule //<-- add this (2/2)
    ]
  })
  ```


  #### Why encapsulate every component in a module  ?
  This way your component has a module file where you can import anything in an Angular way.

## Shared folder / modules

If you want to re-use a component create it at the level where the top-most module that will import it resides, in a `/shared` folder.

Take a look at `app/shared` for reference

## Generating routes / new pages

- Create a **component / UI element* as explained above, at the level at wich you want your new route

  example component levels -> routes:

    - `/app/about` -> `/about`
    - `/app/about/about-detail` -> `/about/about-detail`

- **routes file**

    - create `component-name.routes.ts`:

      ```ts
        import { ModuleWithProviders } from '@angular/core';
        import { Routes, RouterModule } from '@angular/router';

        import { ComponentNameComponent } from './component-name.component';

        const routes: Routes = [
          { path: '', component: ComponentNameComponent }
        ];

        export const routing: ModuleWithProviders = RouterModule.forChild(routes);
      ```

    - import it in the `component-name.module.ts`

      ```ts
      import { routing } from './component-name.routes'; //<-- add this (1/2)

      @NgModule({
        imports: [
          (...)

          routing, //<-- add this (2/2)
          (...)
        ]
      })

      ```

- reference in parent **routes file**

  ```ts
  const routes: Routes = [
    (...)
    { path: 'component-name', loadChildren: './component-name/component-name.module#ComponentNameModule' }, //<-- add this
  ];
  ```


## Generating new stores

[TODO]


## Building

```bash
npm build
``` 


----

## Handling *bad* code

It's normal to be pressured with deadlines and to have to leave a feature working but in a way we are not satisfied with yet as developers, in this case it's better to identify these situations than to just remember about them latter or to be found by someone else.

So in these case we leave a comment in the code above the *bad code* marked as `[ HACK ]`.

Like so:
```ts
  // [ HACK ] <any> should be <State>
  // Due to recent ngrx changes it
  constructor(private store: Store<any>) {
    this.list$ = store.select('todoListStore');
  }
``` 
