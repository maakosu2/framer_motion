
import { Link } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';

const buttonVariant={

  hover:{
    scale:1.1,
    originX:0,
    textShadow:"0px 0px 8px rgb(255,255,255)",
    boxShadow:"0px 0px 8px rgb(255,255,255)",
    transition:{
      duration:0.3,
      yoyo:Infinity
    }
   
  }
}


const containerVariant={
 hidden:{opacity:0},
   visible:{opacity:1,
    transition:{delay:.5,duration:1.5}
  },
  exit:{
    x:"-100vw",
    transition:{
      ease:'easeInOut',
      duration:2.5
    }
  }
}
const Home = () => {
  return (
    <motion.div className="home container" 
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
   >
      <h2 >
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button  
        variants={buttonVariant}
        whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div >
  )
}

export default Home;