# Migration Log: Angular 17 → 18

## Before / After

| Package | Before | After |
|---------|--------|-------|
| Angular | 17.3.12 | 18.2.13 |
| Angular CLI | 17.3.10 | 18.2.13 |
| TypeScript | 5.4.5 | 5.5.4 |
| RxJS | 7.8.1 | 7.8.1 |
| zone.js | 0.14.10 | 0.14.10 |
| tslib | 2.6.3 | 2.6.3 |
| Node | 18.19.1 | 18.19.1 |

## Node Version

Node 18.19.1 unchanged. Angular 18 supports Node 18.19.1+ or 20.11+.

## Key Changes

1. **`async` test helper removed**: Angular 18 removed the deprecated `async` export from `@angular/core/testing`. Replaced all 31 occurrences across spec files with `waitForAsync` (the renamed equivalent available since Angular 10).
2. **TypeScript 5.5**: Minor version bump from 5.4.5 → 5.5.4. No code changes required.
3. **zone.js and RxJS unchanged**: Both remain at 0.14.10 and 7.8.1 respectively.

## Deprecations Found → Replacements

| Deprecated | Replacement | Rationale |
|-----------|-------------|-----------|
| `async` from `@angular/core/testing` | `waitForAsync` | `async` was removed in v18; `waitForAsync` is the drop-in replacement |
| `defaultProject` in angular.json | Remove field | Deprecated since v16, still warns |
| `TestBed.get()` | `TestBed.inject()` | `get()` deprecated since v9, still works but will be removed |

## Test Results

- **Unit tests**: 65 / 65 PASSED (added 1 new edge test)
- **Edge test added**: `should handle HTTP 403 forbidden response (edge test – hop v17→v18)` in api.service.spec.ts
- **Coverage**: Not configured (same as prior hops)

## Build Notes

- Production build (AOT): **SUCCESS**
- Lazy chunks present for all 6 feature modules
- Warnings: unused service files flagged (cosmetic, carried from baseline)

## Assumptions

1. Node 18.19.1 retained for Angular 18. Will evaluate Node 20 for Angular 19 hop.
2. Standalone components not adopted yet (optional in v18, default for new projects).
3. `TestBed.get()` still works but marked for future replacement with `TestBed.inject()`.
