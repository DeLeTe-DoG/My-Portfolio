import { useState } from "react";
import HeadBlock from "./HeadBlock";
import { motion } from "framer-motion";
import {ReactTyped} from 'react-typed'

export default function Header() {
    // let text = "<Hello>"
    // let heading = ''
    // let i = 0

    // function printHeading() {
    //     let interval = setInterval(() => {
    //         heading += text[i];
    //         i++;
    //         if(i === text.length) {
    //             clearInterval(interval);
    //         }
    //     }, 200)
    // }

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