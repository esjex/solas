// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mainSidebar: [
    'index',
    'services',
    {
      type: 'category',
      label: 'Portfolio',
      link: { type: 'doc', id: 'portfolio' },
      collapsed: false,
      items: [
        'portfolio/unity',
        'portfolio/npi',
        'portfolio/apcoa',
        'portfolio/skiller-whale',
      ],
    },
    'ai',
    'contact',
  ],
};

module.exports = sidebars;
