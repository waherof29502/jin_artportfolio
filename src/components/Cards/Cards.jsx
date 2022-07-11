import './cards.css';
import { motion } from 'framer-motion';

const Cards = ({ imgUrl, date, text }) => (
  <motion.div
    className='jindev__blog-container_article'
    whileHover={{
      position: 'relative',
      zIndex: 1,
      scale: [1, 1.05],
      // rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.4,
      },
    }}
  >
    <div className='jindev__blog-container_article-image'>
      <img src={imgUrl} alt='blog_image' />
    </div>
    <motion.div
      whileHover={{
        x: 15,
        transition: {
          duration: 0.4,
        },
      }}
      className='jindev__blog-container_article-content'
    >
      <div>
        <h3>{text}</h3>
        <p>{date}</p>
      </div>
    </motion.div>
  </motion.div>
);

export default Cards;
