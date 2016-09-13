"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/tale-profile',
  'app/tale-nav',
  'app/tale-create-appeal',
  'app/tale-feed',
  'app/tale-potentials/tale-potentials-filter',
  'app/tale-potentials-filter',
  'app/tale-potentials',
  /** @cli-barrel */
];

const angularPackages: Object = {
  // Angular specific barrels.
  '@angular/core': { main: 'bundles/core.umd.js'},
  '@angular/core/testing': { main: '../bundles/core-testing.umd.js'},
  '@angular/common': { main: 'bundles/common.umd.js'},
  '@angular/compiler': { main: 'bundles/compiler.umd.js'},
  '@angular/compiler/testing': { main: '../bundles/compiler-testing.umd.js'},
  '@angular/http': { main: 'bundles/http.umd.js'},
  '@angular/http/testing': { main: '../bundles/http-testing.umd.js'},
  '@angular/forms': { main: 'bundles/forms.umd.js'},
  '@angular/router': { main: 'bundles/router.umd.js'},
  '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js'},
  '@angular/platform-browser/testing': { main: '../bundles/platform-browser-testing.umd.js'},
  '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js'},
  '@angular/platform-browser-dynamic/testing': { main: '../bundles/platform-browser-dynamic-testing.umd.js'
  },
};

const cliSystemConfigPackages: any = angularPackages;
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
