import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { CsvToHtmlTable } from 'react-csv-to-table'
import text from '../../public/data/test.js'

var csvData = text;

export default function Test() {
    return (
        <Layout home>
            <Head>
                <title>Test Page</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <CsvToHtmlTable data={csvData}
                hasHeader='true'
                csvDelimiter="," 
                tableClassName = {utilStyles.table}
                tableRowClassName = {utilStyles.tr} />
            </section>
        </Layout>
    )
}