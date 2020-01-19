import Link from 'next/link';
import Router from 'next/router'

import "../../styles/theme.css"
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
            Hello world! This is my first post on my new “blog”. I plan to put whatever is on my mind at the moment here, with minimal editing and proofing.
        </Post>
    )
}