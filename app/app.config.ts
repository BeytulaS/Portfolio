export default defineAppConfig({
  global: {
    picture: {
      dark: '/profile.webp',
      light: '/profile.webp',
      alt: 'Portrait of Beytula Smail'
    },
    meetingLink: 'mailto:beytula.smail@gmail.com',
    email: 'beytula.smail@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'zinc'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-3xl text-pretty text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight',
        description: 'mt-3 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: '© 2026 Beytula Smail',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/BeytulaS',
      'target': '_blank',
      'aria-label': 'Beytula Smail on GitHub'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/beytula-smail-ab8560295/',
      'target': '_blank',
      'aria-label': 'Beytula Smail on LinkedIn'
    }, {
      'icon': 'i-lucide-mail',
      'to': 'mailto:beytula.smail@gmail.com',
      'aria-label': 'Email Beytula Smail'
    }]
  }
})
