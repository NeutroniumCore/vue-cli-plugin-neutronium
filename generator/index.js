const { renameFiles, replaceBy, updateFile } = require('./fileHelper')
const versions = require('../utils/versions');

function replaceInLicense(licenseTextTemplate, sourceText, newText) {
  return licenseTextTemplate.replace(new RegExp(`<${sourceText}>`), newText)
    .replace(new RegExp(`\\[${sourceText}\\]`), newText)
}

module.exports = (api, option) => {
  const { useRouter, useInternationalization, neutroniumVersion } = option;
  option.nameSpace = option.nameSpace || option.projectName;
  option.exeName = option.exeName || option.projectName;
  const { browser, useModern } = versions.find(v => v.version === neutroniumVersion);
  api.extendPackage({
    scripts: {
      serve: "vue-cli-service serve ./src/main.js --open --port 9000",
      live: "vue-cli-service serve ./src/entry.js --port 8080 --mode integrated",
      build: `vue-cli-service build --entry ./src/entry.js${useModern ? ' --modern' : ''}`,
    },
    dependencies: {
      "neutronium-vue-command-mixin": "^1.4.1",
      "neutronium-vue-simple-command-mixin": "^1.1.0",
      "neutronium-vue-resultcommand-topromise": "^1.1.0"
    },
    devDependencies: {
      "neutronium-vm-loader": "^1.3.0"
    },
    browserslist: [
      `chrome >= ${browser}`
    ]
  })

  api.render('./template');

  if (useRouter) {
    api.render('./template-router');
    api.extendPackage({
      dependencies: {
        "vue-router": "^3.0.2"
      }
    });
  }

  if (useInternationalization) {
    api.render('./template-vue-i18n');
    api.extendPackage({
      dependencies: {
        "vue-i18n": "^8.4.0"
      }
    });
  }

  api.postProcessFiles(files => {
    replaceBy(files, 'src/assets/logo.png', 'src/assets/neutronium-vue-logo.png');
  })

  api.onCreateComplete(() => {
    if (!api.hasPlugin('eslint')) {
      return;
    }
    // Lint generated/modified files
    try {
      const lint = require('@vue/cli-plugin-eslint/lint');
      const files = ['*.js', '.*.js', 'src'];
      lint({ silent: true, _: files }, api);
    } catch (e) {
      api.exitLog('lint not performed', 'warn');
    }
  })
}
