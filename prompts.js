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
        message: 'Enter the C# project name (used to find resource file):',
        group: "Internationalization"
    },
]
