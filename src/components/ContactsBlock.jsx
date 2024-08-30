import { urlsData } from "../data";
import {motion} from 'framer-motion'

export default function ContactsBlock() {
    const Widgets = urlsData.map(item => {
        return(
            <motion.div 
                initial={{opacity: 0, x: 50}} 
                whileInView={{
                    opacity: 1, 
                    x: 0, 
                    transition: {duration: 0.3, delay: item.id * 0.2
                    }
                }} 
                viewport={{amount: 0.2, once: true}}
            >
                <a key={item.id} href={item.href}><img className="widget" src={item.src} /></a>
            </motion.div>
        )
    })

    return(
        <div className="contatsBlock">
            <motion.p initial={{opacity: 0,}} whileInView={{opacity: 1, transition: {duration: 0.5, delay: 0.2}}} viewport={{amount: 0.2, once: true}}>Вы можете связаться со мной:</motion.p>
            <div className="widgets">
                {Widgets}
            </div>
            
        </div>
    )
}