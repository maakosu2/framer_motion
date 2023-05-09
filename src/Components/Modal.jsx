import { Link } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'

const backdrop={
    hidden:{
        opacity:0
    },
    visible:{
            opacity:1
    }
}

const modal={
    hidden:{
        opacity:0,
        y:"-100vh"
    },
    visible:{
            opacity:1,
            y:"200px", transition:{
                delay:.5, duration:2
            }
    }
}

export default function Modal({showModal,setShowModal}) {
  return (
    <AnimatePresence  mode='wait'>
{
    showModal && (
        <motion.div className='backdrop'
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        >
                    <motion.div  className='modal' variants={modal} 
                     initial="hidden"
                     animate="visible"
                     >
                        <p>
                            Want to make another pizza?
                        </p>
                        <Link to="/" >
                            <button onClick={()=>setShowModal(false)}>  Start Agian</button>
                        </Link>

                    </motion.div>
        </motion.div>
    )
}
    </AnimatePresence>
  )
}
