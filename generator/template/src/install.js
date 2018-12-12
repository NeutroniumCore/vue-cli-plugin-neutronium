<% if (options.useRouter) { %>import Vue_Router from "vue-router";
import { router } from "./route";<% } %>
<% if (options.useInternationalization) { %>import VueI18n from "vue-i18n";
import messages from "./message";<% } %>

/*eslint no-unused-vars: ["error", { "args": "none" }]*/
function install(Vue) {
  //Call vue use here if needed
<% if (options.useRouter) { %>    Vue.use(Vue_Router);<% } %>
<% if (options.useInternationalization) { %>    Vue.use(VueI18n);<% } %>
}

/*eslint no-unused-vars: ["error", { "args": "none" }]*/
function vueInstanceOption(vm, Vue) {
  <% if (options.useInternationalization) { %>const i18n = new VueI18n({
    locale: "en-US", // set locale
    messages // set locale messages
  });<% } %>
  //Return vue global option here, such as vue-router, vue-i18n, mix-ins, .... 
  return {
<% if (options.useRouter) { %>    router,<% } %>
<% if (options.useInternationalization) { %>    i18n,<% } %>
  }
}

export {
  install,
  vueInstanceOption
}