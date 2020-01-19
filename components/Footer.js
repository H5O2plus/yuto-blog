import '../styles/theme.css'
import Bio from './Bio'

export default function Footer(props) {
    return (
        <div>
            <hr style={{
                marginTop: "1.5em",
                marginBottom: "1.5em",
                borderColor: "#CCC",
            }} />
            {props.showBio && <Bio />}
            <span>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://nextjs.org/">Next.js</a>
            </span>
        </div>
    )
}