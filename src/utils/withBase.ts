const baseUrl = import.meta.env.BASE_URL;
const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

export function withBase(path: string): string {
  if (!path) return path;
  return base + (path.startsWith("/") ? path : "/" + path);
}
