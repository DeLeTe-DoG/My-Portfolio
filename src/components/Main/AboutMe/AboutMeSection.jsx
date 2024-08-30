import { MyPhoto } from "../../../data"
import ContactsBlock from "../../ContactsBlock"
import { motion } from "framer-motion"

export default function AboutMeSection() {
    return(
        <div id="aboutMe" className="aboutMeSection">
            <div className="aboutMeInfo">
                <motion.h3 initial={{opacity: 0, rotateY: '90deg'}} whileInView={{opacity: 1, rotateY: '0deg', transition: {duration: 0.5, delay: 0.2}}} viewport={{amount: 0.2, once: true}}>УЗНАЙТЕ НЕМНОГО ОБО МНЕ!</motion.h3>
                <motion.p initial={{opacity: 0,}} whileInView={{opacity: 1, transition: {duration: 0.5, delay: 0.2}}} viewport={{amount: 0.2, once: true}}>Привет, меня зовут Аяз!<span> Я занимаюсь web-разработкой с 2020 года.</span></motion.p>
                <motion.p initial={{opacity: 0,}} whileInView={{opacity: 1, transition: {duration: 0.5, delay: 0.2}}} viewport={{amount: 0.2, once: true}}><span>За годы обучения имею большой багаж знаний в своей сфере и создаю оригинальные</span> сайты с привлекающим дизайном</motion.p>
                <ContactsBlock />
            </div>
            <motion.img initial={{opacity: 0}} whileInView={{opacity: 1, transition:{duration: 0.6}}} className="myPhoto" src={MyPhoto} />
        </div>
    )
}