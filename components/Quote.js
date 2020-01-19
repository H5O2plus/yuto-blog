import "../styles/theme.css"

const Quote = props => {
    return (
        <div style={{
            marginTop: "1em",
            marginBottom: "1em",
        }}>
            <p>
                {props.children}
                <style jsx>{`
                    p {
                        margin-top: 0;
                        margin-bottom: 0;
                        text-align: center;
                        font-style: italic;
                    }
                `}</style>
            </p>
            <div style={{ textAlign: "right" }}>―{` ${props.author}`}</div>
        </div>
    )
}

export default Quote;