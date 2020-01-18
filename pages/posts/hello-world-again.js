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
            Hello world, again! This is my new platform on which I'll regurgitate interesting ideas that float by during my day-to-day activities.
            As someone who has experience only in theory and desktop applications, <a href="https://www.gatsbyjs.org/">GatsbyJS</a> had too much of a steep learning curve.
            I switched to <a href="https://nextjs.org/">NextJS</a>, and so far, everything has been quite intuitive and relatively simple to implement.
            Over the next few weeks I intend to reimplement my old blog's features and posts here, and of course, new ideas as always. Stay tuned!
        </Post>
    )
}