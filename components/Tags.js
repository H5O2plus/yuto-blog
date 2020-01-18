import Link from 'next/link'

import "../styles/theme.css"

//The gray boxes under each post
const Tags = props => {
    return (
        <span>
            {` • `}
            {props.tags.map((tagText) => {
                return (
                    <Link href={`/tags?tag=${tagText}`}>
                        <small>
                            {tagText}
                            <style jsx>{`
                                small {
                                    color: #444;
                                    background-color: #DDD;
                                    padding-left: 0.4em;
                                    padding-right: 0.4em;
                                    margin-right: 0.5em;
                                    cursor: pointer;
                                }
                            `}</style>
                        </small>
                    </Link>
                )
            })}
        </span >
    )
}

export default Tags;