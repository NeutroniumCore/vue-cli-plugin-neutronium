const { renameFiles, replaceBy, updateFile } = require('./fileHelper')

function replaceInLicense(licenseTextTemplate, sourceText, newText) {
  return licenseTextTemplate.replace(new RegExp(`<${sourceText}>`), newText)
    .replace(new RegExp(`\\[${sourceText}\\]`), newText)
}

module.exports = (api, option) => {
  // const useLint = api.hasPlugin('eslint')
  // const packageName = api.generator.pkg.name
// const hasTest = api.hasPlugin('unit-mocha') || api.hasPlugin('unit-jest')

  api.extendPackage({
    scripts: {
      serve: "vue-cli-service serve --open",
    },
    dependencies: {
      "neutronium-vue-command-mixin": "^1.4.1",
      "neutronium-vue-simple-command-mixin": "^1.1.0"
    },
    devDependencies: {
      "neutronium-vm-loader": "^1.3.0"
    }
  })

  api.render('./template')

  api.postProcessFiles(files => {
    replaceBy(files, 'assets/logo.png', 'assets/neutronium-vue-logo.png')
  })
}
