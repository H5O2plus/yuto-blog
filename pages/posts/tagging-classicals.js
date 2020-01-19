import Router from 'next/router'

import "../../styles/theme.css"
import Post from '../../components/Post'
import PostContent from '../../content/tagging-classicals.mdx'

export default function (props) {
    let title;

    if (typeof window === "undefined") {
        var path = require('path');
        var scriptName = path.basename(__filename);
    }
    else {
        title = Router.pathname.slice(7);
    }
    //title={typeof window === "undefined" ? }
    return (
        <Post idname={title}>
            <PostContent />
        </Post>
    )
}
