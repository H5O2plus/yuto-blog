import Link from 'next/link';
import Moment from 'react-moment'

import "../styles/theme.css"
import Tags from './Tags'

//Each chunk containing post title, date, tags, and description
const PostPreview = props => {
    let cur = props.data;

    return (
        <article style={{
            marginBottom: "1.5em",
        }}>
            <header>
                <h3>
                    <Link href={`/posts/${cur.filename}`}>
                        <a>{cur.title}</a>
                    </Link>
                </h3>
                <span>
                    <Moment format="MMMM D, YYYY">
                        {cur.date}
                    </Moment>
                    <Tags tags={cur.tags} />
                </span>
            </header>
            <section>
                <p>{cur.description}</p>
            </section>
        </article>
    )
}

export default PostPreview;