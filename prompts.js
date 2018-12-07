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
        type: 'confirm',
        name: 'namespaceDifferent',
        message: 'Resource namespace different from project name?',
        default: false,
        group: "Internationalization"
    },
    {
        type: 'input',
        name: 'nameSpace',
        default: answer => answer.projectName,
        when: answer => answer.useInternationalization && answer.namespaceDifferent,
        message: 'Resource namespace:',
        group: "Internationalization"
    },
    {
        type: 'confirm',
        name: 'libraryNameDifferent',
        message: 'Library name different from project name?',
        default: false,
        group: "Internationalization"
    },
    {
        type: 'input',
        name: 'exeName',
        default: answer => answer.projectName,
        when: answer => answer.useInternationalization & answer.libraryNameDifferent,
        message: 'Library name (filename without .exe):',
        group: "Internationalization"
    },
]
