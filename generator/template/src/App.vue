---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /<img alt="Vue logo" src="./assets/logo.png">/
  - !!js/regexp /<HelloWorld msg="Welcome to Your Vue.js App"\/>/
  - !!js/regexp /import HelloWorld from './components/HelloWorld.vue'/
  - !!js/regexp /export default {/
  - !!js/regexp /<\/style>/
---

<%# REPLACE %>
<img class="logo" alt="Neutronium logo" src="./assets/logo.png">
<%# END_REPLACE %>

<%# REPLACE %>
<HelloWorld msg="Welcome to Your Neutronium Vue.js App"/>
<%# END_REPLACE %>

<%# REPLACE %>
import HelloWorld from './components/HelloWorld.vue'

const props={
  viewModel: Object,
  __window__: Object
};

<%# END_REPLACE %>

<%# REPLACE %>
export default {
  props,
  data () {
    return this.viewModel
  },
<%# END_REPLACE %>

<%# REPLACE %>

#app .logo {
  width: 250px;
}
</style>
<%# END_REPLACE %>