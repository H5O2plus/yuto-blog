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

    return (
        <Post idname={title} isAnalysisOnly={true} isOriginalOnly={true}>
            Dev page.
        </Post>
    )
}