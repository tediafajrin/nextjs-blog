import Layout, {siteTitle} from "../components/layout";
import Head from 'next/head'
import utilsStyles from '../styles/utils.module.css'
import {getSortedPostsData} from "../lib/posts";
import Date from "../components/date";
import Link from 'next/link'

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
                <h2 className={utilsStyles.headingLg}>Blog</h2>

                <ul className={utilsStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilsStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <small className={utilsStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData
        }
    }
}
