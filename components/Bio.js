import Link from 'next/link';

import '../styles/theme.css'
import metadata from '../metadata.json'

let pfp_dir = "/static/assets/images/profile-pic2.jpg"

//Pfp and blurb about "blog"
export default function Bio(props) {
    return (
        <div className="containerHorizontal" style={{
            marginTop: "1.5em",
            marginBottom: "1.5em",
            alignItems: "center",
        }}>
            <img src={pfp_dir} style={{
                maxHeight: "3em",
                marginRight: "1.5em",
                borderRadius: "15px",
            }}/>
            <p>
                Unpolished showerthoughts, now published online! <br />
                Written by <strong>{metadata.author.name}</strong>.
                {` `}
                <a href={`http://www.linkedin.com/in/${metadata.author.social.linkedin}`}>
                    Connect with me on LinkedIn!
                </a>
            </p>
        </div>
    )
}