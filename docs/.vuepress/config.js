module.exports = {
  base: '/opioid-collection/',
  title: 'Opioid Collection',
  themeConfig: {
    logo: './images/kgrid-logo.png',
    repo: 'kgrid-objects/opioid-collection',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'KGrid.org', link: 'https://kgrid.org' },
      { text: 'Guide', link: '/' },
      // { text: 'Develop', link: '/develop/' },
      // { text: 'CPIC Collection', link: 'https://kgrid-objects.github.io/cpic-collection'},
      // { text: 'Online Demo', link: 'https://demo.kgrid.org/cpic-kit/web' }
    ],
    search: true,
    searchMaxSuggestions: 10,
    sidebar: 'auto',
    displayAllHeaders: true
  }
}
