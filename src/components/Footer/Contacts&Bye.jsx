import ContactsBlock from "../ContactsBlock";
import { ReactTyped } from "react-typed";

export default function CandB() {
    return(
        <div className="CandBSection">
            <ContactsBlock />
            <h1>
                &lt;{""}
                <ReactTyped 
                    style={{color: '#c6c6c6', opacity: 0.6}} 
                    startWhenVisible 
                    strings={["See you later!>"]} 
                    typeSpeed={100} 
                    showCursor={false} 
                />
            </h1>
        </div>
    )
}