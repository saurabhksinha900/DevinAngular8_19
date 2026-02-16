# Migration Log: Angular 13 to Angular 14

## Before / After Versions

### Before (Angular 13)
```
Angular CLI: 13.3.11
Node: 12.22.12
Angular: 13.4.0
TypeScript: 4.6.4
rxjs: 6.6.7
zone.js: 0.11.8
tslib: 2.3.1
```

### After (Angular 14)
```
Angular CLI: 14.2.13
Node: 14.21.3
Package Manager: npm 6.14.18
OS: linux x64

Angular: 14.3.0
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1402.13
@angular-devkit/build-angular   14.2.13
@angular-devkit/core            14.2.13
@angular-devkit/schematics      14.2.13
@angular/cli                    14.2.13
@schematics/angular             14.2.13
rxjs                            7.5.7
typescript                      4.7.4
```

## Toolchain

| Tool        | Version  |
|-------------|----------|
| Node.js     | 12.22.12 -> 14.21.3 (UPGRADED via NVM) |
| npm         | 6.14.18  |
| TypeScript  | 4.6.4 -> 4.7.4 |
| RxJS        | 6.6.7 -> 7.5.7 (MAJOR upgrade) |
| zone.js     | 0.11.8 (unchanged) |
| tslib       | 2.3.1 (unchanged) |

## Update Method

Manual package installation (same approach as previous hops).

### Packages Updated
**Runtime:**
- @angular/animations@14.3.0
- @angular/common@14.3.0
- @angular/compiler@14.3.0
- @angular/core@14.3.0
- @angular/forms@14.3.0
- @angular/platform-browser@14.3.0
- @angular/platform-browser-dynamic@14.3.0
- @angular/router@14.3.0
- rxjs@7.5.7

**Dev:**
- @angular/compiler-cli@14.3.0
- @angular/language-service@14.3.0
- @angular-devkit/build-angular@14.2.13
- @angular/cli@14.2.13
- typescript@4.7.4

## Key Changes

### Node.js Upgrade (12.22.12 -> 14.21.3)
Angular 14 requires Node 14.15+ or Node 16.10+. Upgraded from Node 12.22.12 to 14.21.3 via NVM. This is the first Node upgrade in the migration.

### RxJS Upgrade (6.6.7 -> 7.5.7)
Angular 14 supports RxJS 7. Upgraded from RxJS 6 to 7. Key changes in RxJS 7:
- `toPromise()` deprecated in favor of `firstValueFrom()` / `lastValueFrom()`
- Some operator signatures changed
- No breaking changes in our codebase (all tests pass)

### Standalone Components (New Feature)
Angular 14 introduces standalone components as a developer preview. Not adopted yet; will consider in future hops.

### Typed Reactive Forms (New Feature)
Angular 14 introduces strictly typed reactive forms. Not adopted yet; existing forms continue to work.

## Deprecations Found

| Deprecated API / Package | Replacement | Rationale |
|--------------------------|-------------|-----------|
| `TestBed.get()` | `TestBed.inject()` | Deprecated since Angular 9; still works in Angular 14 |
| `toPromise()` (RxJS) | `firstValueFrom()` / `lastValueFrom()` | Deprecated in RxJS 7 |
| `tslint` / `codelyzer` | `eslint` + `@angular-eslint` | TSLint fully EOL |
| Untyped form controls | Typed form controls (`FormControl<T>`) | Angular 14 introduces typed forms |

## Test Results

- **Unit tests**: 61/61 PASSED (60 existing + 1 new edge test)
- **Edge test added**: `should return stats with all expected keys present` in `dashboard.service.spec.ts`
- **Test runner**: Karma + Jasmine + ChromeHeadless 106
- **Coverage**: Not configured with thresholds

## Build Notes

- **Command**: `npx ng build --configuration production`
- **Result**: SUCCESS
- **Ivy Workspace**: Yes
- **Warnings**: Unused services/components warnings (pre-existing)
- **Build time**: ~20 seconds

## Assumptions

1. Node 14.21.3 selected as it is the latest Node 14 LTS, compatible with Angular 14.
2. RxJS 7 upgrade was smooth; no breaking changes in our codebase.
3. Standalone components and typed forms are optional and not adopted in this hop.
4. Angular 15 will continue to support Node 14.15+; may need Node 16+ for Angular 16.
