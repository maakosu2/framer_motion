import React from 'react'
import { motion,useCycle } from 'framer-motion'

const loaderVariant={
    
    animationOne:{
    x:[-20,20,-20,20,-20,20],
    y:[0, -30], 
    transition:{
    x: {
       
         duration:0.7
    },
    y: {
       
         duration:0.35,
         ease:"easeOut"
    }
}

    },

    animationTwo:{
        x:0,
        y:[0, -40], 
        transition:{
        x: {
            yoyo:Infinity,
             duration:0.7
        },
        y: {
             yoyo:Infinity,
             duration:0.35,
             ease:"easeOut"
        }
    }
    
        }
}

export default function Loader() {
    const [animation, setAnimation]=useCycle("animationOne","animationTwo")
  return (
    <>
    <motion.div  className='loader' 
    variants={loaderVariant}
    animate={animation}
    >



    </motion.div>
    <div  onClick={()=>{
        setAnimation()
    }}> Set Loader

    </div>
    </>
  )
}
