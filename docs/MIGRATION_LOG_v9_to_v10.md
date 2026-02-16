# Migration Log: Angular 9 to Angular 10

## Before / After Versions

### Before (Angular 9)
```
Angular CLI: 9.1.15
Node: 12.22.12
Angular: 9.1.13
TypeScript: 3.8.3
rxjs: 6.5.5
zone.js: 0.10.3
tslib: 1.13.0
```

### After (Angular 10)
```
Angular CLI: 10.2.4
Node: 12.22.12
OS: linux x64

Angular: 10.2.5
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1002.4
@angular-devkit/build-angular   0.1002.4
@angular-devkit/core            10.2.4
@angular-devkit/schematics      10.2.4
@angular/cli                    10.2.4
@schematics/angular             10.2.4
@schematics/update              0.1002.4
rxjs                            6.5.5
typescript                      4.0.8
```

## Toolchain

| Tool        | Version  |
|-------------|----------|
| Node.js     | 12.22.12 (unchanged) |
| npm         | 6.14.16  |
| TypeScript  | 3.8.3 -> 4.0.8 |
| RxJS        | 6.5.5 (unchanged) |
| zone.js     | 0.10.3 (unchanged) |
| tslib       | 1.13.0 -> 2.0.3 |

## Update Method

Manual package installation (same approach as hop 1). `ng update` downloads the latest CLI which requires Node 20+, incompatible with Node 12.

### Packages Updated
**Runtime:**
- @angular/animations@10.2.5
- @angular/common@10.2.5
- @angular/compiler@10.2.5
- @angular/core@10.2.5
- @angular/forms@10.2.5
- @angular/platform-browser@10.2.5
- @angular/platform-browser-dynamic@10.2.5
- @angular/router@10.2.5
- tslib@2.0.3

**Dev:**
- @angular/compiler-cli@10.2.5
- @angular/language-service@10.2.5
- @angular-devkit/build-angular@0.1002.4
- @angular/cli@10.2.4
- typescript@4.0.8

## Deprecations Found

| Deprecated API / Package | Replacement | Rationale |
|--------------------------|-------------|-----------|
| `--prod` build flag | `--configuration production` | Angular 10 deprecates `--prod` in favor of named configurations; still works but will be removed later |
| `codelyzer` peer dep warnings | Will be replaced by `angular-eslint` in future hops | codelyzer requires Angular <10; eslint migration planned for Angular 12+ |
| `tslib@1.x` | `tslib@2.x` | Angular 10 requires tslib 2.x for proper ES module support |
| `ModuleWithProviders` without generic | Must include generic type `ModuleWithProviders<T>` | Angular 10 enforces stricter typing; our code already uses generics |

## Test Results

- **Unit tests**: 57/57 PASSED (56 existing + 1 new edge test)
- **Edge test added**: `should propagate HTTP 500 error to subscriber` in `api.service.spec.ts`
- **Test runner**: Karma 4.1.0 + Jasmine + ChromeHeadless 106
- **Coverage**: Not configured with thresholds

## Build Notes

- **Command**: `npx ng build --prod`
- **Result**: SUCCESS
- **Ivy Workspace**: Yes
- **Differential loading**: ES2015 + ES5 bundles generated
- **Main bundle**: ~233KB (ES2015), ~272KB (ES5) — slight reduction from Angular 9
- **Build time**: ~33 seconds
- **Warnings**: 21 warnings about unused services/files (pre-existing, not migration-related)

## Assumptions

1. Manual package installation continues as substitute for `ng update` on Node 12.
2. Node 12 remains compatible with Angular 10 (last Angular version supporting Node 10/12).
3. `tslib` upgraded from 1.x to 2.x as required by Angular 10.
4. TypeScript upgraded from 3.8 to 4.0 as required by Angular 10.
5. Lazy loading string syntax (`loadChildren: './path#Module'`) still works but dynamic imports will be required from Angular 11+.
