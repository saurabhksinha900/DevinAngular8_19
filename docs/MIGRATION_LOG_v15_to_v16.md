# Migration Log: Angular 15 → 16

## Before / After

| Package | Before | After |
|---------|--------|-------|
| Angular | 15.2.10 | 16.2.12 |
| Angular CLI | 15.2.11 | 16.2.14 |
| TypeScript | 4.9.5 | 5.1.6 |
| RxJS | 7.8.1 | 7.8.1 |
| zone.js | 0.13.3 | 0.13.3 |
| tslib | 2.5.3 | 2.6.2 |
| Node | 14.21.3 | 16.20.2 |

## Node Version

Node upgraded from 14.21.3 → 16.20.2 via NVM. Angular 16 requires Node 16.10+ or 18.10+. Node 14 is no longer supported.

## Key Changes

1. **Node upgrade**: 14.21.3 → 16.20.2 (Angular 16 drops Node 14 support).
2. **TypeScript 5.1**: Major version bump from 4.9.5 → 5.1.6. No code changes required — existing code compiles cleanly.
3. **`defaultProject` deprecated**: Angular CLI 16 warns about `defaultProject` in angular.json. Cosmetic warning only; functionality unaffected.
4. **npm 8**: Node 16 ships with npm 8 which has stricter peer dependency resolution. Used `--legacy-peer-deps` for installation.

## Deprecations Found → Replacements

| Deprecated | Replacement | Rationale |
|-----------|-------------|-----------|
| `defaultProject` in angular.json | Remove or ignore (single-project workspace) | Angular CLI 16 no longer uses this field |
| `TestBed.get()` | `TestBed.inject()` | `get()` deprecated since Angular 9; still works but inject() is preferred |
| NgModule-based architecture | Standalone components (optional) | Angular 16 promotes standalone as default for new components; existing NgModules still fully supported |

## Test Results

- **Unit tests**: 63 / 63 PASSED (added 1 new edge test)
- **Edge test added**: `should render navigation links in the app nav (edge test – hop v15→v16)` in app.component.spec.ts
- **Coverage**: Not configured (same as prior hops)

## Build Notes

- Production build (AOT): **SUCCESS**
- Initial bundle: ~267 kB (estimated transfer ~74 kB) — no meaningful size change from v15
- Lazy chunks present for all 6 feature modules
- Warnings: unused service files flagged (cosmetic, carried from baseline)

## Assumptions

1. Node 16.20.2 chosen as the minimum LTS for Angular 16. Will evaluate Node 18 for Angular 17 hop.
2. `--legacy-peer-deps` used during npm install due to npm 8 strict peer resolution with older transitive deps.
3. Standalone component migration not performed (optional in v16, can be done in a dedicated PR later).
