import useSWR from 'swr'

import "../styles/theme.css"
import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'
import fetcher from '../utils/fetcher'
import { LoadingBubble, ErrorBubble } from '../components/AlertBubbles'

//Main page
const Blog = props => {
    const { data, error } = useSWR(`/api/posts`, fetcher);

    return (
        <Layout metatitle="Home" isSiteTitleBig={true} isBioTop={true}>
            {
                error
                    ? <ErrorBubble />
                    : !data
                        ? <LoadingBubble />
                        : data.map((cur) => {
                            return (
                                <PostPreview data={cur} />
                            )
                        })
            }
        </Layout>
    )
}

export default Blog;