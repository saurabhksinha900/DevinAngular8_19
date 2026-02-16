# Migration Log: Angular 18 → 19

## Before / After

| Package | Before | After |
|---------|--------|-------|
| Angular | 18.2.13 | 19.2.1 |
| Angular CLI | 18.2.13 | 19.2.1 |
| TypeScript | 5.5.4 | 5.7.3 |
| RxJS | 7.8.1 | 7.8.1 |
| zone.js | 0.14.10 | 0.15.0 |
| tslib | 2.6.3 | 2.8.1 |
| Node | 18.19.1 | 18.19.1 |

## Node Version

Node 18.19.1 unchanged. Angular 19 supports Node 18.19.1+ or 20.11+.

## Key Changes

1. **Standalone components by default**: Angular 19 makes components standalone by default. All 31 component files required `standalone: false` in their `@Component` decorator to remain compatible with existing NgModule-based architecture.
2. **TypeScript 5.7**: Minor version bump from 5.5.4 → 5.7.3. No code changes required.
3. **zone.js 0.15**: Minor version bump from 0.14.10 → 0.15.0. No code changes required.
4. **tslib 2.8**: Minor version bump from 2.6.3 → 2.8.1. No code changes required.

## Deprecations Found → Replacements

| Deprecated | Replacement | Rationale |
|-----------|-------------|-----------|
| `standalone: true` default for components | Add `standalone: false` to keep NgModule declarations | Angular 19 defaults components to standalone; explicit opt-out needed for NgModule-based apps |
| `defaultProject` in angular.json | Remove field | Deprecated since v16, still warns in v19 |
| `RouterTestingModule` | `provideRouter()` in tests | RouterTestingModule deprecated in favor of standalone router testing utilities |
| `TestBed.get()` | `TestBed.inject()` | `get()` deprecated since v9, still works |

## Test Results

- **Unit tests**: 66 / 66 PASSED (added 1 new edge test)
- **Edge test added**: `should have app-header element present after rendering (edge test – hop v18→v19)` in app.component.spec.ts
- **Coverage**: Not configured (same as prior hops)

## Build Notes

- Production build (AOT): **SUCCESS**
- Lazy chunks present for all 6 feature modules
- Warnings: unused service files flagged (cosmetic, carried from baseline)

## Assumptions

1. Node 18.19.1 retained for Angular 19 (supported).
2. Standalone components not adopted yet — added `standalone: false` to all components to preserve NgModule-based architecture. Migration to standalone can be done in a dedicated PR.
3. `RouterTestingModule` still works but is deprecated; migration to `provideRouter()` deferred.
