import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "blazepay.gateway",
  description: "Payment rails for gaming communities",
  base: "/blazepay-docs",
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Developer", link: "/getting-started/basic-concepts" },
      { text: "Merchant", link: "http://localhost:3000" },
    ],
    sidebar: [
      {
        text: "Getting started",
        items: [
          {
            text: "Basic Concepts",
            link: "/getting-started/basic-concepts",
          },
          {
            text: "GraphQL Explorer",
            link: "http://localhost:9001/graphql",
          },
        ],
      },
      {
        text: "Payment integrations",
        items: [
          {
            text: "Connect Saleor with Blazepay",
            link: "/payment-integrations/connect-saleor-with-blazepay",
          },
          {
            text: "Build a NextJs commerce template with Blazepay",
            link: "/payment-integrations/build-nextjs-commerce-template-with-blazepay",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
