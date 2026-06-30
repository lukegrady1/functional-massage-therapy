// Prefix a local /public asset path with the deploy base path.
// next/image applies basePath to optimized sources but NOT to `unoptimized`
// local sources (used for static export), so wrap local image src strings:
//   <Image src={asset("/logo.png")} ... />
// Absolute URLs (https://…) must NOT be wrapped.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
