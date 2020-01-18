import Link from 'next/link'

import '../styles/theme.css'
import metadata from '../metadata.json'

export default function SiteTitle(props) {
    let title = (
        <Link href="/">
            <a>
                {metadata.title}
                <style jsx>{`
                    a {
                        color: #000000CD;
                    }
                    a:hover {
                        text-decoration: none;
                    }
                `}</style>
            </a>
        </Link>
    )

    if (props.isSiteTitleBig) {
        return (
            <>
                <h1>{title}</h1>
                <hr />
            </>
        )
    }
    else {
        return (
            <h3>{title}</h3>
        )
    }
}