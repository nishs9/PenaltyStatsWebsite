import Layout, { siteTitle } from '../../components/teamPageLayout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/layout.module.css'
import { CsvToHtmlTable } from 'react-csv-to-table'
import text from '../../public/data/test.js'

var csvData = text;

export default function Test() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingTeamPage} ${utilStyles.padding1px}`}>
                <p>
                    <i>2018-2019 Season Penalty Report</i>
                </p>
                <CsvToHtmlTable data={csvData}
                csvDelimiter="," 
                tableClassName = {utilStyles.table}
                tableRowClassName = {utilStyles.tr} />
                <div class={styles.column}>
                    <p><i>EPC boxplot</i></p>
                    <img
                    src="/images/ARI_allExpPointsboxplot.png"
                    className={styles.graphImage}
                    />
                </div>
                <div class={styles.column}>
                    <p><i>EPC for each game</i></p>
                    <img
                    src="/images/ARI_allExpPointsgraph.png"
                    className={styles.graphImage}
                    />
                </div>
            </section>
        </Layout>
    )
}