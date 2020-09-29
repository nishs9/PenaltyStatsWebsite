import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/pagelink'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={styles.navBar}>
          <h2><a href="/">Home</a></h2>
        </div>
        <div className={styles.navBar}>
          <h2><a href="/stats_pages/teamSelectPage">Stats</a></h2>
        </div>
        <div className={styles.navBar}>
          <h2><a href="/posts/glossary">Glossary</a></h2>
        </div>
        <p>Hello, I'm Nish. I am a senior at Georgia Tech majoring in computer science.
          This site is dedicated to a side project I started this past summer.
          Read through some of the blog posts below if you want to get a deeper dive into the work that I have done.
          If you have any questions or feedback email me at  
          <a href="mailto: nflpenaltystatsproject@gmail.com" target="_top"> nflpenaltystatsproject@gmail.com</a>.
          Hope you enjoy!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className = {utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}