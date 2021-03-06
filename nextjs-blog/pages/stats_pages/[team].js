import Layout, { siteTitle } from '../../components/teamPageLayout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/layout.module.css'
import Link from 'next/pagelink'
import { CsvToHtmlTable } from 'react-csv-to-table'
import { getAllTeamNames, getTeamData, getTeamNameMap } from '../../lib/teamList'


export async function getStaticPaths() {
    const paths = getAllTeamNames()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const teamData = getTeamData(params.team)
    return {
        props: {
            teamData
        }
    }
}

export default function TeamPage({ teamData }) {
    const team = teamData.team
    const teamNameMap = getTeamNameMap()
    const fullTeamName = teamNameMap[team]
    const season18TableData = require('../../public/data/18-19' + team + '_SeasonWebJS.js');
    const season18BoxPlot = 'https://res.cloudinary.com/nflpenaltystatsproject/image/upload/f_auto/18-19%20'+team+'/'+team+'_allExpPointsboxplot.png'
    const season18Graph = 'https://res.cloudinary.com/nflpenaltystatsproject/image/upload/f_auto/18-19%20'+team+'/'+team+'_allExpPointsgraph.png'
    const season18Table = 'https://res.cloudinary.com/nflpenaltystatsproject/image/upload/f_auto/18-19%20'+team+'/'+team+'_penaltySummaryTable.png'
    const season19TableData = require('../../public/data/19-20' + team + '_SeasonWebJS.js');
    const season19BoxPlot = 'https://res.cloudinary.com/nflpenaltystatsproject/image/upload/f_auto/19-20%20'+team+'/'+team+'_allExpPointsboxplot.png'
    const season19Graph = 'https://res.cloudinary.com/nflpenaltystatsproject/image/upload/f_auto/19-20%20'+team+'/'+team+'_allExpPointsgraph.png'
    const season19Table = 'https://res.cloudinary.com/nflpenaltystatsproject/image/upload/f_auto/19-20%20'+team+'/'+team+'_penaltySummaryTable.png'
    
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingTeamPage} ${utilStyles.padding1px}`}>
                <header className={styles.header}>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{fullTeamName} Penalty Stats</a>
                        </Link>
                    </h2>
                </header>
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
                </section>
                <div className={styles.row} />
                <p>
                    <i>2019-2020 Season Penalty Report</i>
                </p>
                <CsvToHtmlTable data={season19TableData.csv()}
                csvDelimiter=","
                tableClassName={utilStyles.table}
                tableRowClassName={utilStyles.tr} />
                <div className={styles.column}>
                    <p><i>EPC boxplots</i></p>
                    <img
                    src={season19BoxPlot}
                    className={styles.boxplotImage}
                    />
                </div>
                <div className={styles.column}>
                    <p><i>EPC for each game</i></p>
                    <img
                    src={season19Graph}
                    className={styles.graphImage}
                    />
                </div>
                <div className={utilStyles.summaryGraph}>
                    <p><i>Penalty Stats Summary Table</i></p>
                </div>
                <img src={season19Table} className={styles.graphImage}/>
            </section>
            <div className={styles.row} />
            <section className={`${utilStyles.headingTeamPage} ${utilStyles.padding1px}`}>
                <p>
                    <i>2018-2019 Season Penalty Report</i>
                </p>
                <CsvToHtmlTable data={season18TableData.csv()}
                csvDelimiter=","
                tableClassName={utilStyles.table}
                tableRowClassName={utilStyles.tr} />
                <div className={styles.column}>
                    <p><i>EPC boxplot</i></p>
                    <img
                    src={season18BoxPlot}
                    className={styles.boxplotImage}
                    />
                </div>
                <div className={styles.column}>
                    <p><i>EPC for each game</i></p>
                    <img
                    src={season18Graph}
                    className={styles.graphImage}
                    />
                </div>
                <div className={utilStyles.summaryGraph}>
                    <p><i>Penalty Stats Summary Table</i></p>
                </div>
                <img src={season18Table} className={styles.graphImage}/>
            </section>
            <div className={styles.row} />
        </Layout>
    )
}