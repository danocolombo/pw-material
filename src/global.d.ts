// Provide a minimal global JSX namespace to satisfy TSX intrinsic elements
// This is a targeted, temporary fix for projects where the JSX namespace
// is not being picked up from `@types/react`. Prefer fixing the root
// cause (missing/incorrect react types or tsconfig) if possible.

// Keep this file module-scoped so `declare global` works as expected.
export {};

declare global {
  namespace JSX {
    // Make intrinsic elements permissive so simple JSX like <div> works.
    // Add or tighten element typings as needed later.
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
