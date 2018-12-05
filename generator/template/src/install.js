<% if (options.useRouter) { %>import Vue_Router from "vue-router";
import { router } from "./route";
<% } %>
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
function install(Vue) {
  //Call vue use here if needed
<% if (options.useRouter) { %>    Vue.use(Vue_Router);<% } %>
}

/*eslint no-unused-vars: ["error", { "args": "none" }]*/
function vueInstanceOption(vm) {
  //Return vue global option here, such as vue-router, vue-i18n, mix-ins, .... 
  return {
<% if (options.useRouter) { %>    router,<% } %>
  }
}

export {
  install,
  vueInstanceOption
}