export function contactHref(intent: "contact" | "book_call" = "contact") {
  if (intent === "contact") return "/#contact";
  return `/?intent=${intent}#contact`;
}
