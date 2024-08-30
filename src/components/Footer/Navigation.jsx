import { motion } from "framer-motion"

export default function Navigation() {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.4, delay: 0.2}}} viewport={{amount: 0.2, once:true}} className="navBlock">
            <ul>
                <li><a href="#aboutMe"><p>Обо мне</p></a></li>
                <li><a href="#myJob"><p>Работа</p></a></li>
                <li><a href="#examples"><p>Портфолио</p></a></li>
            </ul>
        </motion.div>
    )
}