# Migration Log: Angular 11 to Angular 12

## Before / After Versions

### Before (Angular 11)
```
Angular CLI: 11.2.19
Node: 12.22.12
Angular: 11.2.14
TypeScript: 4.1.6
rxjs: 6.5.5
zone.js: 0.11.4
tslib: 2.3.1
```

### After (Angular 12)
```
Angular CLI: 12.2.18
Node: 12.22.12
Package Manager: npm 6.14.16
OS: linux x64

Angular: 12.2.17
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1202.18
@angular-devkit/build-angular   12.2.18
@angular-devkit/core            12.2.18
@angular-devkit/schematics      12.2.18
@angular/cli                    12.2.18
@schematics/angular             12.2.18
rxjs                            6.6.7
typescript                      4.3.5
```

## Toolchain

| Tool        | Version  |
|-------------|----------|
| Node.js     | 12.22.12 (unchanged) |
| npm         | 6.14.16  |
| TypeScript  | 4.1.6 -> 4.3.5 |
| RxJS        | 6.5.5 -> 6.6.7 |
| zone.js     | 0.11.4 -> 0.11.8 |
| tslib       | 2.3.1 (unchanged) |

## Update Method

Manual package installation (same approach as previous hops).

### Packages Updated
**Runtime:**
- @angular/animations@12.2.17
- @angular/common@12.2.17
- @angular/compiler@12.2.17
- @angular/core@12.2.17
- @angular/forms@12.2.17
- @angular/platform-browser@12.2.17
- @angular/platform-browser-dynamic@12.2.17
- @angular/router@12.2.17
- zone.js@0.11.8
- rxjs@6.6.7

**Dev:**
- @angular/compiler-cli@12.2.17
- @angular/language-service@12.2.17
- @angular-devkit/build-angular@12.2.18
- @angular/cli@12.2.18
- typescript@4.3.5

## Deprecations Found

| Deprecated API / Package | Replacement | Rationale |
|--------------------------|-------------|-----------|
| View Engine | Ivy (now mandatory) | Angular 12 drops View Engine support; Ivy is the only rendering engine |
| `--prod` flag | `--configuration production` | `--prod` deprecated; using `--configuration production` going forward |
| String-based lazy loading | Dynamic import syntax | `loadChildren: '...#Module'` removed; must use `() => import(...)` — our routes still use string syntax but Angular 12 still supports it in this patch version |
| `tslint` | `eslint` + `@angular-eslint` | TSLint fully EOL; Angular 12 scaffolds with ESLint by default |
| `Renderer` | `Renderer2` | Legacy Renderer removed |
| `TestBed.get()` | `TestBed.inject()` | Deprecated since Angular 9; still functional but should migrate |

## Test Results

- **Unit tests**: 59/59 PASSED (58 existing + 1 new edge test)
- **Edge test added**: `should have a non-empty title that is a string` in `app.component.spec.ts`
- **Test runner**: Karma + Jasmine + ChromeHeadless 106
- **Coverage**: Not configured with thresholds

## Build Notes

- **Command**: `npx ng build --configuration production`
- **Result**: SUCCESS
- **Ivy Workspace**: Yes (mandatory in Angular 12)
- **Differential loading**: ES2015 + ES5 bundles generated
- **Main bundle**: ~224KB (ES2015), ~263KB (ES5) — slight reduction from Angular 11
- **Build time**: ~30 seconds
- **Warnings**: Unused services/components warnings (pre-existing)

## Assumptions

1. Node 12.22.12 remains compatible with Angular 12 (minimum Node 12.20 required; our 12.22.12 satisfies this).
2. Angular 13 will require Node 12.20+ or Node 14+; may need Node upgrade for next hop.
3. String-based lazy loading syntax still works in Angular 12.2.x but should be migrated to dynamic imports before Angular 13.
4. RxJS upgraded from 6.5.5 to 6.6.7 for compatibility.
5. `TestBed.get()` still works but is deprecated; will migrate to `TestBed.inject()` in a future hop.
