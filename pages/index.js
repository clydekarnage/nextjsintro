import Head from 'next/head'
import styles from '../styles/Home.module.css'


const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;
export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}



export default function Home({ data, result }) {
  console.log('data', data)
  const { results = [] } = data;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wubba Lubba Dub Dub!
        </h1>

        <p className={styles.description}>
          Rick and Morty Character Wiki
        </p>

          <ul className="grid">
            {results.map(result => {
              const { id, name, image } = result;
              return (
                <li key={id} className="card">
                <a href="#">
                <img src={image} alt={`${name} Thumbnail`} />
                <h3>{ name }</h3>
                </a>
              </li>
              )
            })}
          </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
