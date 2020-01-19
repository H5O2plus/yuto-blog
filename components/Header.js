import Link from 'next/link'

import '../styles/theme.css'

import Bio from './Bio'
import SiteTitle from './SiteTitle'

//Site title and bio (depending on args)
export default function Header(props) {
    return (
        <div>
            <SiteTitle isSiteTitleBig={props.isSiteTitleBig} />
            {props.showBio && <Bio />}
        </div>
    )
}
