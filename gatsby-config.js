module.exports = {
  siteMetadata: {
    title: 'Amy Tang Codes',
    author: 'Amy Tang',
    description: 'Another software developer portfolio site!',
    header: {
      description: 'Another software developer portfolio site!',
    },
    updateDescription:
      "Since I've only been programming for about half a year and I like to move quickly, I need to review the basics. Oftentimes, I find myself not remembering how to do certain things like setting up a GraphQL server or setting some Typescript types. Also, I would like to revisit algorithms and data structures as I haven't mastered them 100%. Here are the basics that I'm going to review in 2021:",
    //     Setting up a Node.js Typescript backend
    // Algorithms and data structures
    // Big O Notation
    // Server-side rendering
    // Typescript
    // Authentication with JWTs"
    footer: [
      {
        href: 'https://www.linkedin.com/in/amytangcodes/',
        label: 'LinkedIn',
      },
      {
        href: 'https://github.com/amytangcodes',
        label: 'Github',
      },
      {
        href: 'mailto:hello@amytangcodes.com',
        label: 'Email',
      },
    ],
    menu: [
      {
        label: 'About',
        path: '/',
      },
      {
        label: 'Resume',
        path: '/resume/',
      },
    ],
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
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
