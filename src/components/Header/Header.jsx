import HeadBlock from "./HeadBlock";
import {ReactTyped} from 'react-typed'

export default function Header() {
    return(
        <header>
            <h1>
                &lt;{""}
                <ReactTyped 
                    style={{color: '#c6c6c6', opacity: 0.6}} 
                    startWhenVisible 
                    strings={["Hello from my site!>"]} 
                    typeSpeed={100} 
                    showCursor={false} 
                />
            </h1>
            <HeadBlock />
        </header>
    )
}