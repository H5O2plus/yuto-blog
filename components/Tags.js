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
                        <small style={{
                            color: "#444",
                            backgroundColor: "#DDD",
                            paddingLeft: "0.4em",
                            paddingRight: "0.4em",
                            marginRight: "0.5em",
                            cursor: "pointer",
                            whiteSpace: "pre",
                        }}>
                            {tagText}
                        </small>
                    </Link>
                )
            })}
        </span >
    )
}

export default Tags;