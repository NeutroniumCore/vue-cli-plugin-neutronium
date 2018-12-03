const { renameFiles, replaceBy, updateFile } = require('./fileHelper')

function replaceInLicense(licenseTextTemplate, sourceText, newText) {
  return licenseTextTemplate.replace(new RegExp(`<${sourceText}>`), newText)
    .replace(new RegExp(`\\[${sourceText}\\]`), newText)
}

module.exports = (api, option) => {
  api.extendPackage({
    scripts: {
      serve: "vue-cli-service serve ./src/main.js --open --port 9000",
      live: "vue-cli-service serve ./src/integrated.js --port 8080 --mode production",
      build: `vue-cli-service build --target lib --name build --entry ./src/entry.js --no-clean`,
    },
    dependencies: {
      "neutronium-vue-command-mixin": "^1.4.1",
      "neutronium-vue-simple-command-mixin": "^1.1.0",
      "neutronium-vue-resultcommand-topromise": "^1.1.0"
    },
    devDependencies: {
      "neutronium-vm-loader": "^1.3.0"
    }
  })

  api.render('./template')

  api.postProcessFiles(files => {
    replaceBy(files, 'src/assets/logo.png', 'src/assets/neutronium-vue-logo.png')
  })
}
