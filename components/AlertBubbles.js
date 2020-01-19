import Prism from 'prismjs'

import '../styles/theme.css'
import '../styles/prism.css'
import '../components/Quote'
import Quote from '../components/Quote'

/**
 * Whenever a prerendered page is displayed without content
 */
export const LoadingBubble = () => {
    return (
        <pre><code>
            Loading...
        </code></pre>
    )
}

/**
 * Whenever something bad happens
 * especially fetching fail
 */
export const ErrorBubble = () => {
    return (
        <div className='bubble'>
            <p className='bubbleText'>
                Error! <br />
                Something went wrong. Ensure the connection is stable and try again.
            </p>
            <style jsx>{`
                div {
                    background-color: #D34943;
                    color: #FFFFFF;
                    border-color: #C44742;
                }
            `}</style>
        </div>
    )
}

/**
 * Whenever a dangerous idea is expressed
 */
export const AnalysisOnlyBubble = () => {
    return (
        <div className='bubble bubbleText' style={{
            backgroundColor: "#fff3cd",
            borderColor: "#ffeeba",
            color: "#856404",
        }}>
            <strong style={{ fontWeight: "700" }}>Note:</strong>{` `}
            The ideas presented in this post do not necessarily reflect the moral principles and beliefs of the author.<br />
        </div>
    )
}

/**
 * Whenever no external research was done
 */
export const OriginalOnlyBubble = () => {
    return (
        <div className='bubble bubbleText' style={{
            backgroundColor: "#f8d7da",
            borderColor: "#f5c6cb",
            color: "#721c24",
        }}>
            <strong style={{ fontWeight: "700" }}>Danger!</strong>{` `}
            Minimal research in the appropriate fields was done before writing this post. Read at your own risk.
        </div>
    )
}

/**
 * Whenever biased
 */
export const BiasedBubble = () => {
    return (
        <div className='bubble bubbleText' style={{
            backgroundColor: "#FFE3C6",
            borderColor: "#FFC2B5",
            color: "#713C00",
        }}>
            <strong style={{ fontWeight: "700" }}>Warning!</strong>{` `}
            This post contains opinionated content. Proceed with caution.
        </div>
    )
}