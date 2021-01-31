module.exports = {
  siteMetadata: {
    siteTitle: 'Amy Tang',
    author: 'Amy Tang',
    siteDescription: 'Another software developer portfolio site!',
    header: {
      menuLinks: [
        {
          name: 'About',
          path: '/',
        },
        {
          name: 'Resume',
          path: '/resume',
        },
        {
          name: 'Contact',
          path: '/contact',
        },
      ],
      footerLinks: [
        {
          href: 'https://www.linkedin.com/in/amytangcodes/',
          label: 'LinkedIn',
          icon: 'fa-linkedin',
        },
        {
          href: 'https://github.com/amytangcodes',
          label: 'Github',
          icon: 'fa-github',
        },
        {
          href: 'mailto:hello@amytangcodes.com',
          label: 'Email',
          icon: 'fa-envelope-o',
        },
      ],
    },
    cover: {
      description:
        "Still feeling like a jr developer I like to move quickly and keep reviewing basics. Keep at algorithm problems and React learning. Here are the basics that I'm going to review in 2021:",
      descriptionList: [
        'Setting up a Node.js Typescript backend',
        'Algorithms and data structures',
        'Big O Notation',
        'Server-side rendering',
        'Typescript',
        "Authentication with JWTs'",
      ],
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo_final.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
