function _pad(num, size) {
  num = num.toString()
  while (num.length < size) num = '0' + num
  return num
}

export default [
  {
    title: 'Allo Allo',
    id: 'allo-allo',
    format: 'mp4',
    seasons: [
      {
        n: 1,
        episodes: 6,
      },
      {
        n: 2,
        episodes: 6,
      },
      {
        n: 3,
        episodes: 6,
      },
      {
        n: 4,
        episodes: 6,
      },
      {
        n: 5,
        episodes: 26,
      },
      {
        n: 6,
        episodes: 8,
      },
      {
        n: 7,
        episodes: 10,
      },
      {
        n: 8,
        episodes: 7,
      },
      {
        n: 9,
        episodes: 6,
      },
    ],
    transformer: (season, episode) => `allo-allo-s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Breaking Bad',
    id: 'breaking.bad',
    seasons: [
      { n: 1, episodes: 7 },
      { n: 2, episodes: 13 },
      { n: 3, episodes: 13 },
      { n: 4, episodes: 13 },
      { n: 5, episodes: 16 },
    ],
    format: 'mkv',
    transformer: (season, episode) => `Breaking Bad s${_pad(season, 2)}e${episode} 720p.BRrip.Sujaidr`,
  },
  {
    title: 'Brooklyn Nine-Nine',
    id: 'brooklyn.nine.nine',
    seasons: [{ n: 7, episodes: 7 }],
    transformer: (season, episode) => `brooklyn-nine-nine.s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Buffy the Vampire Slayer',
    id: 'buffy.the.vampire.slayer',
    seasons: [
      { n: 1, episodes: 12 },
      { n: 2, episodes: 22 },
      { n: 3, episodes: 22 },
      { n: 4, episodes: 22 },
      { n: 5, episodes: 22 },
      { n: 6, episodes: 22 },
      { n: 7, episodes: 22 },
    ],
    transformer: (season, episode) =>
      season === 6 && episode <= 2
        ? 'buffy-the-vampire-slayer.s06e01+02'
        : `buffy-the-vampire-slayer.s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Burn Notice',
    id: 'burn.notice',
    format: 'm4v',
    seasons: [
      { n: 1, episodes: 12 },
      { n: 2, episodes: 16 },
      { n: 3, episodes: 16 },
      { n: 4, episodes: 18 },
    ],
    transformer: (season, episode) =>
      season === 1 && episode === 12 ? 'burn-notice-s01e12+13' : `burn-notice-s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Californication',
    id: 'californication',
    seasons: [
      { n: 1, episodes: 12 },
      { n: 2, episodes: 12 },
      { n: 3, episodes: 12 },
      { n: 4, episodes: 12 },
      { n: 5, episodes: 12 },
      { n: 6, episodes: 12 },
      { n: 7, episodes: 12 },
    ],
    transformer: (season, episode) => `californication-s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Chernobyl',
    id: 'chernobyl',
    seasons: [{ n: 1, episodes: 5 }],
    transformer: (season, episode) => `chernobyl-s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Come Fly With Me',
    id: 'come.fly.with.me',
    seasons: [{ n: 1, episodes: 6 }],
    transformer: (season, episode) => `come.fly.with.me-s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Dexter',
    id: 'Dexter',
    seasons: [
      { n: 1, episodes: 12 },
      { n: 2, episodes: 12 },
      { n: 3, episodes: 12 },
      { n: 4, episodes: 12 },
      { n: 5, episodes: 12 },
      { n: 6, episodes: 12 },
      { n: 7, episodes: 12 },
      { n: 8, episodes: 12 },
    ],
    transformer: (season, episode) =>
      `Dexter.S${_pad(season, 2)}E${_pad(episode, 2)}.1080p.5.1Ch.BluRay.ReEnc-DeeJayAhmed.mkv`,
  },
  {
    title: 'Friends',
    id: 'friends',
    seasons: [
      { n: 1, episodes: 24 },
      { n: 2, episodes: 24 },
      { n: 3, episodes: 25 },
      { n: 4, episodes: 24 },
      { n: 5, episodes: 24 },
      { n: 6, episodes: 25 },
      { n: 7, episodes: 24 },
      { n: 8, episodes: 24 },
      { n: 9, episodes: 23 },
      { n: 10, episodes: 17 },
    ],
    transformer: (season, episode) => `friends-s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Game of Thrones',
    id: 'game.of.thrones',
    seasons: [
      { n: 1, episodes: 10 },
      { n: 2, episodes: 10 },
      { n: 3, episodes: 10 },
      { n: 4, episodes: 10 },
      { n: 5, episodes: 10 },
      { n: 6, episodes: 10 },
      { n: 7, episodes: 7 },
    ],
    transformer: (season, episode) => `Game Of Thrones S${_pad(season, 2)}E${_pad(episode, 2)}.mkv`,
  },
  {
    title: 'Good Omens',
    id: 'good.omens',
    seasons: [{ n: 1, episodes: 6 }],
    transformer: (season, episode) =>
      `Good.Omens.S${_pad(season, 2)}E${_pad(episode, 2)}.iNTERNAL.1080p.WEB.H264-AMRAP.mkv`,
  },
  {
    title: `It's Always Sunny In Philadelphia`,
    id: 'its.always.sunny.in.philadelphia',
    seasons: [
      { n: 1, episodes: 7 },
      { n: 2, episodes: 10 },
      { n: 3, episodes: 15 },
      { n: 4, episodes: 13 },
      { n: 5, episodes: 12 },
      { n: 6, episodes: 13 },
      { n: 7, episodes: 13 },
      { n: 8, episodes: 10 },
      { n: 9, episodes: 10 },
      { n: 10, episodes: 10 },
      { n: 11, episodes: 10 },
      { n: 12, episodes: 10 },
    ],
    transformer: (season, episode) => `iasip-s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Jack Ryan',
    id: 'jack.ryan',
    seasons: [
      { n: 1, episodes: 8 },
      { n: 2, episodes: 8 },
    ],
    transformer: (season, episode) => `jack-ryan.s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Legend of the Seeker',
    id: 'legend.of.the.seeker',
    seasons: [
      { n: 1, episodes: 22 },
      { n: 2, episodes: 22 },
    ],
    format: 'mkv',
    transformer: (season, episode) => `lots.s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Little Britain',
    id: 'little.britain',
    seasons: [
      { n: 1, episodes: 8 },
      { n: 2, episodes: 6 },
      { n: 3, episodes: 6 },
    ],
    transformer: (season, episode) => `little-britain-s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Little Britain USA',
    id: 'little.britain.usa',
    seasons: [{ n: 1, episodes: 6 }],
    transformer: (season, episode) => `little.britain.usa-s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Miami Vice',
    id: 'miami.vice',
    seasons: [
      { n: 1, episodes: 22 },
      { n: 2, episodes: 22 },
      { n: 3, episodes: 24 },
      { n: 4, episodes: 22 },
      { n: 5, episodes: 21 },
    ],
    transformer: (season, episode) => `miami.vice.s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'Parks and Recreation',
    id: 'parks.and.recreation',
    seasons: [
      { n: 1, episodes: 6 },
      { n: 2, episodes: 24 },
      { n: 3, episodes: 16 },
      { n: 4, episodes: 22 },
      { n: 5, episodes: 22 },
      { n: 6, episodes: 21 },
    ],
    transformer: (season, episode) =>
      season === 6 && episode < 3
        ? 'Parks and Recreation S06E01E02'
        : `Parks and Recreation S${_pad(season, 2)}E${_pad(episode, 2)}`,
  },
  {
    title: 'Strike',
    id: 'strike',
    seasons: [
      { n: 1, episodes: 3 },
      { n: 2, episodes: 2 },
      { n: 3, episodes: 2 },
      { n: 4, episodes: 4 },
    ],
    transformer: (season, episode) => `strike.s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'The Mandalorian',
    id: 'the.mandalorian',
    seasons: [
      { n: 1, episodes: 8 },
      { n: 2, episodes: 8 },
    ],
    transformer: (season, episode) => `the.mandalorian.s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'The Office US',
    id: 'the.office.us',
    seasons: [
      { n: 1, episodes: 6 },
      { n: 2, episodes: 22 },
      { n: 3, episodes: 23 },
      { n: 4, episodes: 18 },
      { n: 5, episodes: 26 },
      { n: 6, episodes: 26 },
      { n: 7, episodes: 25 },
      { n: 8, episodes: 24 },
      { n: 9, episodes: 23 },
    ],
    transformer: (season, episode) =>
      `the.office.us/Season.${season}/the.office.s${_pad(season, 2)}e${_pad(episode, 2)}`,
  },
  {
    title: 'WandaVision',
    id: 'wandavision',
    seasons: [{ n: 1, episodes: 5 }],
    transformer: (season, episode) => `WandaVision.S${_pad(season, 2)}E${_pad(episode, 2)}`,
  },
]
