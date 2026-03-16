// src/middleware.js
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === "/") {
    // This runs ON THE SERVER.
    // The browser hasn't received any HTML yet.
    const locale = context.preferredLocale || "en";
    return context.redirect(`/${locale}/`, 302);
  }
  return next();
});