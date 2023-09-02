# blank-template-to-tabs
Technically this is not my first stab at using Ionic. There was a different sample project I was working on and used the blank template. Later, I wanted to add tabs and being a newbie wasn't exactly sure if there was a command to convert a project to a different template. So I ended up doing it manually through some comparing along with trial and error. I'm going to outline the steps I took to do it here in case anyone may find it useful. AFAIK, there is no Ionic command to convert a project from one template to another, but if there is then let me know and I'll update this to include it.

## 1. Generate The Project
Set up your environment first by going through the steps on the Ionic Framework website. Versions play a big part, so for the record I'm using Ionic 7.1.1 and Angular 16.2.1.

I started a new project using the command

```
# ionic start my-project-name
```

There are some prompts and I chose Angular, Blank, and Standalone. You should have a Blank template project.

Change to the directory and serve it up.

```
# cd my-project-name
# ionic serve
```

If all goes well then your browser should open and show you the Blank Ionic app with a message about creating your application with UI Componenets.

## 2. Add Pages For The Tabs

I'll keep it small with just two tabs for the conversion. At the end a third tab will be added to show how to build upon it post template migration. Pretending that this project is a sports news app (because of the cool ionic icons we can use), the pages (tabs) will be geared towards specific sports: baseball, football, and basketball. Starting out with the first two sports. Before that though a tabs page will be added to be the router (kind of a parent to the tab children). The Ionic Tabs template calls it TabsPage, I'll call this SportsPage.

```
# ionic generate
```

Choose page from the list OR to save a step

```
# ionic generate page
```

Name it `sports` and the result will have a new directory in *src/app/sports* with four new files.

```
sports.page.scss
sports.page.html
sports.page.spec.ts
sports.page.ts
```

Note the *src/app/app.routes.ts* will be updated with the new page.

When the Blank project was created a `home` page was created. You have a couple choices. Either rename it to first sport (baseball) or delete it and generate a new page. The latter saves more time, however I'll opt for renaming it to illustrate the process of modifying an existing page.

Rename the directory from `home` to `baseball` and all `home.page.*` files to `baseball.page.*`. In the HTML and all TypeScript files replace lower case `home` with `baseball` and `HomePage` with `BaseballPage`.

Below are the contents of each file. The only one I don't edit is `baseball.page.scss` since none of the has CSS changed.

`baseball.page.html`
```
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Baseball
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Baseball</ion-title>
    </ion-toolbar>
  </ion-header>

  <div id="container">
    <p><strong>Baseball Tab Page</strong></p>
  </div>
</ion-content>
```

`baseball.page.spec.ts`
```
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseballPage } from './baseball.page';

describe('BaseballPage', () => {
  let component: BaseballPage;
  let fixture: ComponentFixture<BaseballPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(BaseballPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

`baseball.page.ts`

```
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-baseball',
  templateUrl: 'baseball.page.html',
  styleUrls: ['baseball.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class BaseballPage {
  constructor() {}
}
```

**A Note About File Organization**

This is up to you and how you want your project organized, but for this example I'm moving the `baseball` directory into `sports` so it becomes a parent/child structure. The path will become *src/app/sports/baseball*.

After all these changes you will notice the app fails to compile and breaks in the browser. For the time being the `app.routes.ts` file will be updated to fix that. More changes to it will come as we continue.

Edit yours to match the version below. Notice the path of the baseball page now. Also *redirectTo* that used to be `home` is now `baseball`. Our default web landing location will be the Baseball page.

```
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'baseball',
    loadComponent: () => import('./sports/baseball/baseball.page').then((m) => m.BaseballPage),
  },
  {
    path: '',
    redirectTo: 'baseball',
    pathMatch: 'full',
  },
  {
    path: 'sports',
    loadComponent: () => import('./sports/sports.page').then( m => m.SportsPage)
  },
];
```

That should resolve the errors. The last thing to do for this section is to generate the `football` page. Use the same steps above that you did for creating the `sports` page. This time however at the *Name/path* prompt put `sports/football`.

The SCSS file will be empty so you can copy the contents of `baseball.page.scss` into it.

That wraps up the first two tabs. Next we'll modify the sports page to be tabby and update the routes.

## 3. Make The Sports Tabs & Update The Routes

Based on the Ionic Tabs template code, I used parts of that to piece together an after-the-fact tabbed template. The changes aren't significant and still being the Ionic and Angular newbie that I am, I didn't change anything. The main routes file will become a pointer to the tabs (sports) routes, the tabs HTML template will have the Ionic tabs UI added, put in some cool icons for each sport, and change some of the TypeScript files.

I'll start with editing the HTML for the tabs. The Ionic Icons can be found at <https://ionic.io/ionicons/> and for this example I'll use the filled `baseball` and `american-football`. Later, when the third tab is introduced, the `basketball` icon will be used.

Below is what the `sports.page.html` file looks like.

```
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="baseball" href="/sports/baseball">
      <ion-icon aria-hidden="true" name="baseball"></ion-icon>
      <ion-label>Baseball</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="football" href="/sports/football">
      <ion-icon aria-hidden="true" name="american-football"></ion-icon>
      <ion-label>Football</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

Next, a new file will be created in *src/app/sports* called `sports.routes.ts` and have this code inside.

```
import { Routes } from '@angular/router';
import { SportsPage } from './sports.page';

export const routes: Routes = [
  {
    path: 'sports',
    component: SportsPage,
    children: [
      {
        path: 'baseball',
        loadComponent: () =>
          import('./baseball/baseball.page').then((m) => m.BaseballPage),
      },
      {
        path: 'football',
        loadComponent: () =>
          import('./football/football.page').then((m) => m.FootballPage),
      },
      {
        path: '',
        redirectTo: '/sports/baseball',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/sports/baseball',
    pathMatch: 'full',
  },
];
```

It's very similar to the existing routes code. Pay attention the to import paths to each sport as they are relative to the sports (tabs) page. If you had kept the sport pages on the same level you'd need to *../* instead.

Time to replace the main `app.routes.ts` code.

```
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sports/sports.routes').then((m) => m.routes),
  },
];
```

Back in *src/app/sports*, update the `sports.page.spec.ts` so it looks like this.

```
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SportsPage } from './sports.page';

describe('SportsPage', () => {
  let component: SportsPage;
  let fixture: ComponentFixture<SportsPage>;

  beforeEach(async () => {
    TestBed.overrideComponent(SportsPage, {
      add: {
        imports: [RouterTestingModule]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

Finally, update `sports.page.ts` with the following code.

```
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sports',
  templateUrl: 'sports.page.html',
  styleUrls: ['sports.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class SportsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {}
}
```

If you check back in your browser, the app should be working with two tabs on the bottom (Baseball and Football), with their respective icons, and clicking between them switches pages. Note the URL paths -- see how it's sports/baseball and sports/football.

You'll also notice how the Football page is lacking next to the Baseball page. You can copy the code from the baseball HTML file and edit the sport name.

## 4. Adding New Tabs To The App

At this point the Blank template has been converted into a Tabbed version. Adding new tabs is as easy as generating new Ionic pages, however the sports routes file needs manual editing. When a new page is added, Ionic places the page route in the main routes file. We changed this to become a pointer, so you need to move that code to the sports router. I don't know if there is a flag to tell Ionic to insert the route code into a specific routes file, but manually adding a page to a default Tabbed template produces the same result. That means you gotta move the code.

```
# ionic generate page sports/basketball
```

Move the route entry from `app.routes.ts` to `sports.routes.ts` so the sports routes looks like this.

**Note that it sometimes does put the route code in the new routes file making it hit or miss. Check both files.**

```
import { Routes } from '@angular/router';
import { SportsPage } from './sports.page';

export const routes: Routes = [
  {
    path: 'sports',
    component: SportsPage,
    children: [
      {
        path: 'baseball',
        loadComponent: () =>
          import('./baseball/baseball.page').then((m) => m.BaseballPage),
      },
      {
        path: 'football',
        loadComponent: () =>
          import('./football/football.page').then((m) => m.FootballPage),
      },
      {
        path: 'basketball',
        loadComponent: () =>
          import('./basketball/basketball.page').then( m => m.BasketballPage),
      },    
      {
        path: '',
        redirectTo: '/sports/baseball',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/sports/baseball',
    pathMatch: 'full',
  },
];
```

The last things to do are update the `sports.page.html` to include the new tab, copy over the CSS from another sport's SCSS file to `basketball.page.scss`, and make changes to the `basketball.page.html`.

`sports.page.html`

```
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="baseball" href="/sports/baseball">
      <ion-icon aria-hidden="true" name="baseball"></ion-icon>
      <ion-label>Baseball</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="football" href="/sports/football">
      <ion-icon aria-hidden="true" name="american-football"></ion-icon>
      <ion-label>Football</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="basketball" href="/sports/basketball">
      <ion-icon aria-hidden="true" name="basketball"></ion-icon>
      <ion-label>Basketball</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

## 5. Final Thoughts

There you have it. Converting a Blank template to being Tabbed isn't too difficult. It's basically a copy and paste job. The next task would be to build out those sports pages with actual content. Maybe even add in mobile platforms and publish to Android and iOS.

The source code for the final product is here for you to download. Enjoy.