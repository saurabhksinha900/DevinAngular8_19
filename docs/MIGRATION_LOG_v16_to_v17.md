# Migration Log: Angular 16 → 17

## Before / After

| Package | Before | After |
|---------|--------|-------|
| Angular | 16.2.12 | 17.3.12 |
| Angular CLI | 16.2.14 | 17.3.10 |
| TypeScript | 5.1.6 | 5.4.5 |
| RxJS | 7.8.1 | 7.8.1 |
| zone.js | 0.13.3 | 0.14.10 |
| tslib | 2.6.2 | 2.6.3 |
| Node | 16.20.2 | 18.19.1 |

## Node Version

Node upgraded from 16.20.2 → 18.19.1 via NVM. Angular 17 requires Node 18.13+ or 20.9+. Node 16 is no longer supported.

## Key Changes

1. **Node upgrade**: 16.20.2 → 18.19.1 (Angular 17 drops Node 16 support).
2. **New control flow syntax**: Angular 17 introduces `@if`, `@for`, `@switch` block syntax. The `@` character in templates is now reserved. Escaped `@` in email addresses (`@example.com` → `&#64;example.com`) in user-list template to avoid `NG5002` errors.
3. **zone.js import path**: Updated `import 'zone.js/dist/zone'` → `import 'zone.js'` in polyfills.ts (the `/dist/` sub-path was removed in zone.js 0.14+).
4. **TypeScript 5.4**: Minor version bump from 5.1.6 → 5.4.5. No code changes required.

## Deprecations Found → Replacements

| Deprecated | Replacement | Rationale |
|-----------|-------------|-----------|
| `zone.js/dist/zone` import path | `zone.js` (bare specifier) | `/dist/` sub-paths removed in zone.js 0.14+ |
| `@` in templates (literal) | `&#64;` HTML entity | Angular 17 reserves `@` for new control flow blocks |
| `defaultProject` in angular.json | Remove field | Deprecated since v16, still warns in v17 |
| `*ngIf`, `*ngFor` structural directives | `@if`, `@for` block syntax (optional) | New control flow is recommended but old syntax still works |

## Test Results

- **Unit tests**: 64 / 64 PASSED (added 1 new edge test)
- **Edge test added**: `should return stats where revenue is a finite number (edge test – hop v16→v17)` in dashboard.service.spec.ts
- **Coverage**: Not configured (same as prior hops)

## Build Notes

- Production build (AOT): **SUCCESS**
- Lazy chunks present for all 6 feature modules
- Warnings: unused service files flagged (cosmetic, carried from baseline); tsconfig target note (set to ES2022 by CLI)

## Assumptions

1. Node 18.19.1 chosen as LTS for Angular 17. Will evaluate Node 20 for Angular 18 hop.
2. New control flow syntax (`@if`, `@for`) not adopted yet — existing `*ngIf`/`*ngFor` still fully supported. Can migrate in a dedicated PR.
3. Standalone components not adopted yet (optional in v17).
