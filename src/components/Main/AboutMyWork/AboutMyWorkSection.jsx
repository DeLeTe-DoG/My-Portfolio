import { AboutWorkData } from "../../../data"
import { motion } from "framer-motion"

export default function AboutMyWorkSection() {
    const AboutBlocks = AboutWorkData.map(item => {
        return(
            <motion.div
                key={item.key} 
                className="aboutBlock"
                initial={{opacity: 0, x: "-100%"}}
                whileInView={{
                    opacity: 1, 
                    x: 0,
                    transition: {duration: 0.2, delay: item.key * 0.2}
                }}
                viewport={{amount: 0.2, once:true}}
            >
                <h3 className="aboutWorkTitle">{item.title}</h3>
                <p className="aboutWorkDescription">{item.description}</p>
            </motion.div>
        )
})

    return(
        <div id="myJob" className="aboutBlocks">
            {AboutBlocks}
        </div>
    )
}