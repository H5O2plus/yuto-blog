import useSWR from 'swr'
import Moment from 'react-moment'

import "../styles/theme.css"
import posts from '../posts.json'
import Layout from './Layout'
import Tags from './Tags'
import { LoadingBubble, ErrorBubble, AnalysisOnlyBubble, OriginalOnlyBubble, BiasedBubble } from './AlertBubbles'
import fetcher from '../utils/fetcher'

const Post = props => {
    let loading = (
        <Layout>
            <LoadingBubble />
        </Layout>
    )

    if (!props.idname) return loading;

    const { data, error } = useSWR(
        `/api/posts?idname=${props.idname}`,
        fetcher
    )

    if (!data) {
        return loading;
    }
    else if (error) {
        return (
            <Layout>
                <ErrorBubble />
            </Layout>
        )
    }

    return (
        <Layout metatitle={data.title} pageTitle={data.title}>
            <div style={{
                marginBottom: "1em",
            }}>
                <Moment format="MMMM D, YYYY">{data.date}</Moment>
                <Tags tags={data.tags} />
            </div>
            {props.isAnalysisOnly && <AnalysisOnlyBubble />}
            {props.isBiased && <BiasedBubble />}
            {props.isOriginalOnly && <OriginalOnlyBubble />}
            {props.children}
        </Layout>
    )
}


export default Post;