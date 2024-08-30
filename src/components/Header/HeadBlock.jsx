import Button from "../Button"
import { motion } from "framer-motion"

export default function HeadBlock() {
    return(
        <motion.div initial={{opacity: 0}} whileInView={{opacity:1, transition: {durtion:0.3}}} viewport={{amount: 0.2, once:true}} className="HeadBlock">
            <div className="Invisible" />
            <motion.div initial={{padding: 0}} whileInView={{padding: '20px 0 0 32px', transition: {duration: 0.4, delay: 0.3}}} viewport={{amount: 0.2, once:true}} className="HeadInfoBlock">
                <h3>Я - ЧЕЛОВЕК, <span>КОТОРЫЙ СОЗДАСТ <br /> КРЕАТИВНЫЙ САЙТ ПОД ВАШИ ЦЕЛИ</span></h3>
                <p><span>Вы можете обсудить со мной ваш проект, <br /> нажав на кнопку ниже.</span></p>
                <Button>Обсудить проект</Button>
            </motion.div>
        </motion.div>
    )
}