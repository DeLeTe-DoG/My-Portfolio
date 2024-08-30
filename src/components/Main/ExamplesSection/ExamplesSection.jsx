import { ArrowLeft, ArrowRight, examplesData, Line, Rectangle } from "../../../data"
import { motion } from "framer-motion"

export default function ExamplesSection() {
    
    const examplesBlocks = examplesData.map(item => {
        return(
            item.key !== examplesData.length ?
            item.key % 2 ? 
            <>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.4, delay: 0.2}}} viewport={{amount: 0.2, once:true}} key={item.key} className="exampleBlock">
                   <img className="exampleImage" src={ item.src } />
                   <div className="exampleInfo leftBlock">
                           <div className='square'><p>{ item.year }</p></div>
                          <h3 className="exampleTitle">{ item.title }</h3>
                       <p className="exampleDescription"><span>{ item.description }</span></p>
                      <div className="goToSite">
                           <img className="goToSiteArrow arrowLeft" src={ArrowLeft} />
                            <a href={item.href}><p className="goToSiteTitle">Перейти на сайт</p></a>
                       </div>
                   </div>
                </motion.div>
                <motion.img initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.4, delay: 0.2}}} viewport={{amount: 0.2, once:true}} className="line" src={Line} />
            </>
            :
            <>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.4, delay: 0.2}}} viewport={{amount: 0.2, once:true}} key={item.key} className="exampleBlock">
               <div className="exampleInfo rightBlock">
                       <div className='square'><p>{ item.year }</p></div>
                       <h3 className="exampleTitle">{ item.title }</h3>
                   <p className="exampleDescription"><span>{ item.description }</span></p>
                   <div className="goToSite">
                       <a href={item.href}><p className="goToSiteTitle">Перейти на сайт</p></a>
                       <img className="goToSiteArrow arrowRight" src={ArrowRight} />
                   </div>
               </div>
               <img className="exampleImage" src={ item.src } />
           </motion.div>
           <motion.img initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.4, delay: 0.2}}} viewport={{amount: 0.2, once:true}} className="line" src={Line} />
           </>
           :
           item.key % 2 ? 
            <>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.4, delay: 0.2}}} viewport={{amount: 0.2, once:true}} key={item.key} className="exampleBlock">
                   <img className="exampleImage" src={ item.src } />
                   <div className="exampleInfo leftBlock">
                           <div className='square'><p>{ item.year }</p></div>
                          <h3 className="exampleTitle">{ item.title }</h3>
                       <p className="exampleDescription"><span>{ item.description }</span></p>
                      <div className="goToSite">
                           <img className="goToSiteArrow arrowLeft" src={ArrowLeft} />
                            <a href={item.href}><p className="goToSiteTitle">Перейти на сайт</p></a>
                       </div>
                   </div>
                </motion.div>
                {/* <img className="line" src={Line} /> */}
            </>
            :
            <>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.4, delay: 0.2}}} viewport={{amount: 0.2, once:true}} key={item.key} className="exampleBlock">
               <div className="exampleInfo rightBlock">
                       <div className='square'><p>{ item.year }</p></div>
                       <h3 className="exampleTitle">{ item.title }</h3>
                   <p className="exampleDescription"><span>{ item.description }</span></p>
                   <div className="goToSite">
                       <a href={item.href}><p className="goToSiteTitle">Перейти на сайт</p></a>
                       <img className="goToSiteArrow arrowRight" src={ArrowRight} />
                   </div>
               </div>
               <img className="exampleImage" src={ item.src } />
           </motion.div>
           </>
        )
    })

    return(
        <div id="examples" className="examplesSection">
            
            <motion.h3 initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.4, delay: 0.2}}} viewport={{amount: 0.2, once:true}} className="examplesTitle">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</motion.h3>
            <motion.img  initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.4, delay: 0.2}}} viewport={{amount: 0.2, once:true}} className="rectangle" src={Rectangle} />
            <div className="examplesBlocks">{examplesBlocks}</div>
            <motion.img  initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.4, delay: 0.2}}} viewport={{amount: 0.2, once:true}} className="rectangle" src={Rectangle} />
        </div>
    )
}