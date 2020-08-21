import Layout, { siteTitle } from '../../components/teamPageLayout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { CsvToHtmlTable } from 'react-csv-to-table'
import text from '../../public/data/test.js'

var csvData = text;

export default function Test() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <CsvToHtmlTable data={csvData}
                csvDelimiter="," 
                tableClassName = {utilStyles.table}
                tableRowClassName = {utilStyles.tr} />
            </section>
        </Layout>
    )
}