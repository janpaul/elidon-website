import Head from 'next/head'
import { Layout, Title } from '../components'
import tableStyles from './table.module.css'
import movies from '../data/movies.json'

const _movieUrl = (id, format = 'mp4') => `https://media-movies.ams3.digitaloceanspaces.com/${id}.${format}`

const Movies = () => (
  <Layout>
    <Head>
      <title>jp: movies</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
      <Title>Movies</Title>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {movies
            .sort(({ title: atitle }, { title: btitle }) => atitle.localeCompare(btitle))
            .map(movie => (
              <tr>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>
                  <a href={_movieUrl(movie.id, movie.format)} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  </Layout>
)

export default Movies
