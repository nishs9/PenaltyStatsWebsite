import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { CsvToHtmlTable } from 'react-csv-to-table'

const placeholder = `
Model,mpg,cyl,disp,hp,drat,wt,qsec,vs,am,gear,carb
Mazda RX4,21,6,160,110,3.9,2.62,16.46,0,1,4,4
Mazda RX4 Wag,21,6,160,110,3.9,2.875,17.02,0,1,4,4
Datsun 710,22.8,4,108,93,3.85,2.32,18.61,1,1,4,1
`;

export default function Test() {
    return (
        <Layout home>
            <Head>
                <title>Test Page</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Test team page</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <CsvToHtmlTable data={placeholder} csvDelimiter="," />
            </section>
        </Layout>
    )
}