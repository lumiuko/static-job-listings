export function mergeTags(item) {
  return [item.role, item.level, ...item.languages, ...item.tools]
}
