---
extend: '@vue/cli-service/generator/template/src/components/HelloWorld.vue'
replace: !!js/regexp <template>[^]*?<\/template>/
---

<template>
  <div class="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Related Links</h2>
    <ul>
      <li><a target="_blank" href="https://vuejs.org">Core Vue Docs</a></li>
      <li><a target="_blank" href="https://forum.vuejs.org">Vue Forum</a></li>
      <li><a target="_blank" href="https://github.com/NeutroniumCore/Neutronium">Neutronium</a></li>
      <li><a target="_blank" href="https://github.com/NeutroniumCore/neutronium-vue">Neutronium Vue template</a></li>
      <li><a target="_blank" href="https://github.com/NeutroniumCore/Neutronium.SPA.Demo">Neutronium Vue application demo</a></li>
    </ul>
  </div>
</template>