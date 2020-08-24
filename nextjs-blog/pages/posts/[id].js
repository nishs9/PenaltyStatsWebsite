import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/layout.module.css'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
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
            <h1 className={utilStyles.headingX1}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </article>
    </Layout>
    )
}