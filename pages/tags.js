import { useRouter } from 'next/router'
import Link from 'next/link';
import Moment from 'react-moment'
import useSWR from 'swr'

import "../styles/theme.css"
import posts from '../posts.json'
import Layout from '../components/Layout'
import Header from '../components/Header'
import PostPreview from '../components/PostPreview'
import { LoadingBubble, ErrorBubble } from '../components/AlertBubbles'
import fetcher from '../utils/fetcher'

const Tags = props => {
    const { query } = useRouter();
    const { data, error } = useSWR(
        `/api/tags${query.tag ? '?tag=' + query.tag : ''}`,
        fetcher
    );

    /*
    Weird behavior:
    This script runs on the server /and/ on the client. data is undef on server, so calling `data.map()` breaks.
    On the client, data is defined, so proceed as normal.
    */

    let pageTitle = query.tag ? `Posts tagged with \"${query.tag}\"` : `All Tags`;

    return (
        <Layout metatitle={pageTitle} pageTitle={pageTitle}>
            <div style={{
                marginTop: '1.5em',
                marginBottom: '1.5em',
            }}>
                {
                    error
                        ? <ErrorBubble />
                        : !data
                            ? <LoadingBubble />
                            : query.tag
                                ? data.map((cur) => {
                                    return (
                                        <PostPreview data={cur} />
                                    )
                                })
                                : data.map((cur) => {
                                    return (
                                        <li style={{
                                            marginBottom: '0.4em',
                                        }}>
                                            <Link href={`/tags?tag=${cur[0]}`}>
                                                <a>
                                                    {cur[0]}
                                                    {` `}
                                                    {`(${cur[1]})`}
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                })
                }
            </div>
        </Layout>
    )
}


export default Tags;