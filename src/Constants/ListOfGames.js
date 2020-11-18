export const ListOfGames = {
  gartic: {
    logo: require('../Assets/logo/logo-garticio.png'),
    style: { width: 161, height: 55 },
    link: 'https://gartic.io',
    name: 'Garic.io'
  },
  kahoot: {
    logo: require('../Assets/logo/logo-kahoot.png'),
    style: { width: 161, height: 55 },
    link: 'https://kahoot.it',
    name: 'Kahoot'
  },
  piano: {
    logo: require('../Assets/logo/logo-magic-piano.png'),
    style: { width: 60, height: 55 },
    link: 'https://www.agame.com/game/magic-piano-tiles',
    name: 'Magic Piano'
  },
  outspell: {
    logo: require('../Assets/logo/logo-outspell.png'),
    style: { width: 240, height: 55 },
    link: 'https://www.arkadium.com/games/outspell/',
    name: 'Outspell'
  },
  scramble: {
    logo: require('../Assets/logo/logo-scramble.png'),
    style: { width: 161, height: 55 },
    link: 'https://www.arkadium.com/games/scramble-words-game/',
    name: 'Scramble'
  },
  fillIns: {
    logo: require('../Assets/logo/logo-fill-ins.png'),
    style: { width: 161, height: 55 },
    link: 'https://www.arkadium.com/games/arkadium-fill-ins/',
    name: 'Fill-Ins'
  },
  '2048': {
    logo: require('../Assets/logo/logo-2048.png'),
    style: { width: 55, height: 55},
    link: 'https://www.arkadium.com/games/2048-game/',
    name: '2048'
  }
}

export const allGamesList = [
  'gartic', 'kahoot', 'piano', 'outspell', 'scramble', 'fillIns', '2048'
]

export const gameRecommendations = {
  Mathematics: [
    '2048',
    'kahoot',
  ],
  Science: [
    'kahoot'
  ],
  English: [
    'outspell',
    'scramble'
  ],
  Sport: [
    'kahoot'
  ],
  Indonesian: [
    'gartic',
    'kahoot'
  ],
  Music: [
    'piano'
  ],
  Biology: [
    'kahoot'
  ]
}

export const otherGames = {
  Mathematics: [
    'gartic', 'piano', 'outspell', 'scramble', 'fillIns'
  ],
  Science: [
    'gartic', 'piano', 'outspell', 'scramble', 'fillIns', '2048'
  ],
  English: [
    'gartic', 'kahoot', 'piano', 'fillIns', '2048'
  ],
  Sport: [
    'gartic', 'piano', 'outspell', 'scramble', 'fillIns', '2048'
  ],
  Indonesian: [
    'piano', 'outspell', 'scramble', 'fillIns', '2048'
  ],
  Music: [
    'gartic', 'kahoot', 'outspell', 'scramble', 'fillIns', '2048'
  ],
  Biology: [
    'gartic', 'piano', 'outspell', 'scramble', 'fillIns', '2048'
  ]
}