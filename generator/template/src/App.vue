---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /import HelloWorld from './components/HelloWorld.vue'/
  - !!js/regexp /export default {/
---

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
<%# END_REPLACE %>
