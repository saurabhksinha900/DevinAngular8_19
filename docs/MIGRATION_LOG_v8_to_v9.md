# Migration Log: Angular 8 to Angular 9

## Before / After Versions

### Before (Angular 8)
```
Angular CLI: 8.3.29
Node: 12.22.12
Angular: 8.2.14
TypeScript: 3.5.3
rxjs: 6.5.5
zone.js: 0.9.1
tslib: 1.10.0
```

### After (Angular 9)
```
Angular CLI: 9.1.15
Node: 12.22.12
OS: linux x64

Angular: 9.1.13
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router
Ivy Workspace: Yes

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.901.15
@angular-devkit/build-angular     0.901.15
@angular-devkit/build-optimizer   0.901.15
@angular-devkit/build-webpack     0.901.15
@angular-devkit/core              9.1.15
@angular-devkit/schematics        9.1.15
@angular/cli                      9.1.15
@ngtools/webpack                  9.1.15
@schematics/angular               9.1.15
@schematics/update                0.901.15
rxjs                              6.5.5
typescript                        3.8.3
webpack                           4.42.0
```

## Toolchain

| Tool        | Version  |
|-------------|----------|
| Node.js     | 12.22.12 |
| npm         | 6.14.16  |
| TypeScript  | 3.5.3 -> 3.8.3 |
| RxJS        | 6.5.5 (unchanged) |
| zone.js     | 0.9.1 -> 0.10.3 |
| tslib       | 1.10.0 -> 1.13.0 |

## Update Method

Manual package installation was used instead of `ng update` because the `ng update` command downloads the latest CLI version which requires Node 20+. Since the baseline runs on Node 12.22.12, `ng update` fails with: "The Angular CLI requires a minimum Node.js version of v20.19 or v22.12."

### Packages Updated
**Runtime:**
- @angular/animations@9.1.13
- @angular/common@9.1.13
- @angular/compiler@9.1.13
- @angular/core@9.1.13
- @angular/forms@9.1.13
- @angular/platform-browser@9.1.13
- @angular/platform-browser-dynamic@9.1.13
- @angular/router@9.1.13
- zone.js@0.10.3
- tslib@1.13.0

**Dev:**
- @angular/compiler-cli@9.1.13
- @angular/language-service@9.1.13
- @angular-devkit/build-angular@0.901.15
- @angular/cli@9.1.15
- typescript@3.8.3
- @types/node@12.20.55 (downgraded to fix IteratorResult conflict with TS 3.8)

## Deprecations Found

| Deprecated API / Package | Replacement | Rationale |
|--------------------------|-------------|-----------|
| Ivy renderer enabled by default | N/A (opt-out via `enableIvy: false`) | Ivy is Angular 9's new compilation/rendering pipeline; improves bundle size and debugging |
| `TestBed.get()` | `TestBed.inject()` | Type-safe alternative introduced in Angular 9; `get()` still works but is deprecated |
| `@angular/http` (if used) | `@angular/common/http` | Legacy HTTP module removed in v9; already using HttpClient in this project |

## Test Results

- **Unit tests**: 56/56 PASSED (55 existing + 1 new edge test)
- **Edge test added**: `should redirect unknown routes to /dashboard` in `app.component.spec.ts`
- **Test runner**: Karma 4.1.0 + Jasmine + ChromeHeadless 106
- **Coverage**: Not configured with thresholds (baseline has no coverage gates)

## Build Notes

- **Command**: `npx ng build --prod`
- **Result**: SUCCESS
- **Ivy Workspace**: Yes (Angular 9 default)
- **Differential loading**: ES2015 + ES5 bundles generated
- **Main bundle**: ~237KB (ES2015), ~285KB (ES5)
- **Build time**: ~34 seconds
- **Warnings**: 20 warnings about unused services (not imported in components). These are pre-existing and not related to the migration.

## Assumptions

1. Manual package installation is acceptable as a substitute for `ng update` when the CLI version check blocks execution on Node 12.
2. The `@types/node` package was pinned to 12.20.55 to resolve a `Duplicate identifier 'IteratorResult'` conflict between `@types/node` and TypeScript 3.8's built-in `lib.es2015.iterable.d.ts`.
3. Karma config updated to use `ChromeHeadlessNoSandbox` custom launcher for CI/VM environments where Chrome requires `--no-sandbox`.
4. Lazy loading syntax (`loadChildren: './path#Module'`) remains unchanged; Angular 9 supports both string and dynamic import syntax.
