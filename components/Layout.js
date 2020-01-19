import Link from 'next/link'
import Head from 'next/head'

import '../styles/theme.css';
import metadata from '../metadata.json';

import Meta from "./Meta"
import Header from "./Header"
import Footer from "./Footer"

//Default layout that all pages must use
export default function Layout(props) {
    return (
        <div style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "40rem",
            padding: "2rem 1rem",
        }}>
            <Meta title={props.metatitle} script={props.script} />
            <Header isSiteTitleBig={props.isSiteTitleBig} showBio={props.isBioTop} />
            {props.pageTitle
                && <>
                    <h2 style={{
                        marginTop: "0.3em",
                        marginBottom: "0.1em",
                    }}>
                        {props.pageTitle}
                    </h2>
                    <hr />
                </>}
            {props.children}
            <Footer showBio={!props.isBioTop} />
        </div>
    )
}