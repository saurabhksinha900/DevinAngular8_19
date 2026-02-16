# Migration Log: Angular 10 to Angular 11

## Before / After Versions

### Before (Angular 10)
```
Angular CLI: 10.2.4
Node: 12.22.12
Angular: 10.2.5
TypeScript: 4.0.8
rxjs: 6.5.5
zone.js: 0.10.3
tslib: 2.0.3
```

### After (Angular 11)
```
Angular CLI: 11.2.19
Node: 12.22.12
OS: linux x64

Angular: 11.2.14
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1102.19
@angular-devkit/build-angular   0.1102.19
@angular-devkit/core            11.2.19
@angular-devkit/schematics      11.2.19
@angular/cli                    11.2.19
@schematics/angular             11.2.19
@schematics/update              0.1102.19
rxjs                            6.5.5
typescript                      4.1.6
```

## Toolchain

| Tool        | Version  |
|-------------|----------|
| Node.js     | 12.22.12 (unchanged) |
| npm         | 6.14.16  |
| TypeScript  | 4.0.8 -> 4.1.6 |
| RxJS        | 6.5.5 (unchanged) |
| zone.js     | 0.10.3 -> 0.11.4 |
| tslib       | 2.0.3 -> 2.3.1 |

## Update Method

Manual package installation (same approach as previous hops).

### Packages Updated
**Runtime:**
- @angular/animations@11.2.14
- @angular/common@11.2.14
- @angular/compiler@11.2.14
- @angular/core@11.2.14
- @angular/forms@11.2.14
- @angular/platform-browser@11.2.14
- @angular/platform-browser-dynamic@11.2.14
- @angular/router@11.2.14
- zone.js@0.11.4
- tslib@2.3.1

**Dev:**
- @angular/compiler-cli@11.2.14
- @angular/language-service@11.2.14
- @angular-devkit/build-angular@0.1102.19
- @angular/cli@11.2.19
- typescript@4.1.6

## Deprecations Found

| Deprecated API / Package | Replacement | Rationale |
|--------------------------|-------------|-----------|
| `--prod` flag | `--configuration production` | Officially deprecated in Angular 11; still works but emits warning |
| `tslint` / `codelyzer` | `eslint` / `@angular-eslint` | TSLint is EOL; Angular 11 begins recommending ESLint migration |
| String-based lazy loading `loadChildren: '...#Module'` | Dynamic import `loadChildren: () => import('...').then(m => m.Module)` | String syntax deprecated since Angular 8, will be removed in future; still works in Angular 11 |
| `ViewEncapsulation.Native` | `ViewEncapsulation.ShadowDom` | Native shadow DOM encapsulation renamed |

## Test Results

- **Unit tests**: 58/58 PASSED (57 existing + 1 new edge test)
- **Edge test added**: `should return stats where all numeric fields are non-negative` in `dashboard.service.spec.ts`
- **Test runner**: Karma + Jasmine + ChromeHeadless 106
- **Coverage**: Not configured with thresholds

## Build Notes

- **Command**: `npx ng build --prod`
- **Result**: SUCCESS
- **Ivy Workspace**: Yes
- **Differential loading**: ES2015 + ES5 bundles generated
- **Main bundle**: ~237KB (ES2015), ~276KB (ES5)
- **Build time**: ~35 seconds
- **Warnings**: 21 warnings about unused services (pre-existing)

## Assumptions

1. Node 12.22.12 remains compatible with Angular 11 (minimum Node 10.13 required).
2. Angular 12 will require Node 12.20+ which our Node 12.22.12 satisfies.
3. String-based lazy loading syntax kept for now; will migrate to dynamic imports in a future hop when the string syntax is removed.
4. TSLint/codelyzer kept for now; ESLint migration can be done as a separate step.
