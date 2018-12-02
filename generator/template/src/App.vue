---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /<script>/
  - !!js/regexp /export default {/
---

<%# REPLACE %>
<script>
const props={
  viewModel: Object,
  __window__: Object
};
<%# END_REPLACE %>

<%# REPLACE %>
export default {
  props,
<%# END_REPLACE %>
