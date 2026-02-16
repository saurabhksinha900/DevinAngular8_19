# Migration Log: Angular 12 to Angular 13

## Before / After Versions

### Before (Angular 12)
```
Angular CLI: 12.2.18
Node: 12.22.12
Angular: 12.2.17
TypeScript: 4.3.5
rxjs: 6.6.7
zone.js: 0.11.8
tslib: 2.3.1
```

### After (Angular 13)
```
Angular CLI: 13.3.11
Node: 12.22.12
Package Manager: npm 6.14.16
OS: linux x64

Angular: 13.4.0
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1303.11
@angular-devkit/build-angular   13.3.11
@angular-devkit/core            13.3.11
@angular-devkit/schematics      13.3.11
@angular/cli                    13.3.11
@schematics/angular             13.3.11
rxjs                            6.6.7
typescript                      4.6.4
```

## Toolchain

| Tool        | Version  |
|-------------|----------|
| Node.js     | 12.22.12 (unchanged) |
| npm         | 6.14.16  |
| TypeScript  | 4.3.5 -> 4.6.4 |
| RxJS        | 6.6.7 (unchanged) |
| zone.js     | 0.11.8 (unchanged) |
| tslib       | 2.3.1 (unchanged) |

## Update Method

Manual package installation (same approach as previous hops).

### Packages Updated
**Runtime:**
- @angular/animations@13.4.0
- @angular/common@13.4.0
- @angular/compiler@13.4.0
- @angular/core@13.4.0
- @angular/forms@13.4.0
- @angular/platform-browser@13.4.0
- @angular/platform-browser-dynamic@13.4.0
- @angular/router@13.4.0

**Dev:**
- @angular/compiler-cli@13.4.0
- @angular/language-service@13.4.0
- @angular-devkit/build-angular@13.3.11
- @angular/cli@13.3.11
- typescript@4.6.4

## Breaking Changes & Code Modifications

### 1. String-based lazy loading removed (BREAKING)
Angular 13 fully removes string-based `loadChildren` syntax. All routes were converted from:
```typescript
loadChildren: './features/dashboard/dashboard.module#DashboardModule'
```
to dynamic import syntax:
```typescript
loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
```
All 6 lazy-loaded feature modules were updated in `app-routing.module.ts`.

### 2. `extractCss` option removed from angular.json (BREAKING)
The `extractCss` build option was removed in Angular 13. It was deleted from the production configuration in `angular.json`. CSS extraction is now the default behavior.

## Deprecations Found

| Deprecated API / Package | Replacement | Rationale |
|--------------------------|-------------|-----------|
| String-based `loadChildren` | Dynamic import `() => import(...)` | Removed in Angular 13; no longer compiles |
| `extractCss` build option | Removed (now default) | CSS extraction is always on in production builds |
| `tslint` / `codelyzer` | `eslint` + `@angular-eslint` | TSLint fully EOL; codelyzer incompatible with Angular 13 |
| `TestBed.get()` | `TestBed.inject()` | Deprecated since Angular 9; still functional |
| `Renderer` | `Renderer2` | Legacy Renderer fully removed |
| IE11 support | Dropped | Angular 13 no longer supports Internet Explorer 11 |

## Test Results

- **Unit tests**: 60/60 PASSED (59 existing + 1 new edge test)
- **Edge test added**: `should handle HTTP 404 not-found gracefully` in `api.service.spec.ts`
- **Test runner**: Karma + Jasmine + ChromeHeadless 106
- **Coverage**: Not configured with thresholds

## Build Notes

- **Command**: `npx ng build --configuration production`
- **Result**: SUCCESS
- **Ivy Workspace**: Yes (mandatory since Angular 12)
- **Differential loading**: ES2015 + ES5 bundles still generated
- **Warnings**: Unused services/components warnings (pre-existing)
- **Build time**: ~13 seconds (faster than Angular 12)

## Assumptions

1. Node 12.22.12 remains compatible with Angular 13 (minimum Node 12.20 required; our 12.22.12 satisfies this).
2. Angular 14 will require Node 14.15+ or Node 16.10+; will need to upgrade Node via NVM for next hop.
3. RxJS 6.6.7 still compatible; Angular 13 supports both RxJS 6 and 7.
4. `TestBed.get()` still works but should be migrated to `TestBed.inject()` in a future hop.
5. IE11 support dropped — no impact on this project.
