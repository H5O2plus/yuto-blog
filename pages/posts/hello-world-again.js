import Link from 'next/link';
import Router from 'next/router'

import "../../styles/theme.css"
import posts from '../../posts.json'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Post from '../../components/Post'

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
            <p>
                Hello world, again! This is my new platform on which I'll regurgitate interesting ideas that float by during my day-to-day activities.
                {` `}<a href="https://www.gatsbyjs.org/">GatsbyJS</a> has a really sharp learning curve, whereas <a href="https://nextjs.org/">NextJS</a> is relatively simpler for those of us like myself who only have experience with theory and lower-level languages.
                Over the next few weeks I'll reimplement my old blog's features and posts here, and of course, new ideas as always. Stay tuned!
            </p>
        </Post>
    )
}