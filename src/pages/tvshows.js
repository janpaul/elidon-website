import Head from 'next/head'
import { Layout, Title } from '../components'
import tableStyles from './table.module.css'
import tvshows from '../data/tvshows.json'

const _showUrl = (showId, episodeId, format = 'mp4') =>
  `https://media-tvshows.ams3.digitaloceanspaces.com/${showId}/${episodeId}.${format}`

const Movies = () => (
  <Layout>
    <Head>
      <title>jp: tv shows</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
      <Title>TV Shows</Title>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Season</th>
            <th>Episode</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tvshows.map(show => {
            console.log(show.episodes)
            return show.episodes.map(episode => (
              <tr>
                <td>{show.title}</td>
                <td>{episode.season}</td>
                <td>{episode.episode}</td>
                <td>
                  <a href={_showUrl(show.id, episode.id, episode.format)} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </td>
              </tr>
            ))
          })}
        </tbody>
      </table>
    </section>
  </Layout>
)

export default Movies
