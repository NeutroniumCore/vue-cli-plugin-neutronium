const locales = require('i18n-locales');
const versions = require('./utils/versions')

function toChoices(array, selected) {
  return array.map(name => ({ name, value: name, checked: name === selected }));
}

module.exports = [
  {
    type: 'list',
    default: versions[0].version,
    name: 'neutroniumVersion',
    message: 'Choose Neutronium targeted version',
    choices: versions.map(v => ({ name: v.version, value: v.version}))
  },
  {
    type: 'confirm',
    name: 'useRootVm',
    message: 'Use root vm plugin to access viewModel as $rootVm attribute from vue components?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'useRouter',
    message: 'Use router with vue-router integrated with Neutronium?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'useInternationalization',
    message: 'Use internationalization with vue-i18n integrated with Neutronium?',
    default: false,
    group: "Internationalization"
  },
  {
    type: 'input',
    name: 'resourceFileName',
    when: answer => answer.useInternationalization,
    message: 'Resource file name (.resx C# file)?',
    default: 'Resource',
    group: "Internationalization"
  },
  {
    type: 'input',
    name: 'nameSpace',
    when: answer => answer.useInternationalization,
    message: 'Resource namespace:',
    group: "Internationalization"
  },
  {
    type: 'checkbox',
    name: 'locales',
    when: answer => answer.useInternationalization,
    message: 'Project locales?',
    choices: toChoices(locales, 'en-US'),
    group: "Internationalization"
  },
]