module.exports = [
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
    name: 'projectName',
    when: answer => answer.useInternationalization,
    message: 'C# : project name',
    group: "Internationalization"
  },
  {
    type: 'input',
    name: 'nameSpace',
    default: answer => answer.projectName,
    when: answer => answer.useInternationalization,
    message: 'C# namespace containing resources:',
    group: "Internationalization"
  },
  {
    type: 'input',
    name: 'exeName',
    default: answer => answer.projectName,
    when: answer => answer.useInternationalization,
    message: 'C# exe name:',
    group: "Internationalization"
  },
]
