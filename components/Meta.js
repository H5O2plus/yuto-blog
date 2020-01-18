import Head from 'next/head'

import metadata from '../metadata.json'

export default function Meta(props) {
    let script;
    if (props.script) {
        script = (
            <script type="text/javascript" src={props.script} />
        )
    }

    return (
        <Head>
            <title>{(props.title ? props.title + " | " : "") + metadata.title}</title>
            {script}
        </Head>
    )
}