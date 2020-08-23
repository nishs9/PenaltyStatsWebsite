import Head from 'next/head'
import Layout, { siteTitle } from '../../components/teamSelectPageLayout'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/layout.module.css'
import Link from 'next/Link'
import { getAFCTeams, getNFCTeams } from '../../lib/teamList'

export async function getStaticProps() {
    const nfc = getNFCTeams()
    const afc = getAFCTeams()
    return {
      props: {
        nfc,afc
      }
    }
  }

export default function Home({nfc, afc}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={styles.column}>
            <h2 className={utilStyles.headingLg}>NFC Teams</h2>
            <ul className={utilStyles.list}>
            {nfc.map(({nfcTeam}) => (
                <li className = {utilStyles.listItem} key={nfcTeam}>
                <Link href="/stats_pages/[nfcTeam]" as={`/stats_pages/${nfcTeam}`}>
                    <a>{nfcTeam}</a>
                </Link>
                <br />
                </li>
            ))}
        </ul>
        </div>
        <div className={styles.column}>
            <h2 className={utilStyles.headingLg}>AFC Teams</h2>
            <ul className={utilStyles.list}>
            {afc.map(({afcTeam}) => (
                <li className = {utilStyles.listItem} key={afcTeam}>
                <Link href="/stats_pages/[nfcTeam]" as={`/stats_pages/${afcTeam}`}>
                    <a>{afcTeam}</a>
                </Link>
                <br />
                </li>
            ))}
            </ul>
        </div>
      </section>
    </Layout>
  )
}