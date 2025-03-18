// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@swedbankpay/design-guide/src/less/swedbankpay.less"],
  ssr: false, // FIXME: Enable SSR. So far DS scripts break it by "window is not defined" when trying to make it SSR. DS should NOT be blocking it, since SSR is best practice where applicable

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/scripts",
  ],
});
