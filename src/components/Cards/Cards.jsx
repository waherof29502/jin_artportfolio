import './cards.css';

const Cards = ({ imgUrl, date, text }) => (
  <div className='jindev__blog-container_article'>
    <div className='jindev__blog-container_article-image'>
      <img src={imgUrl} alt='blog_image' />
    </div>
    <div className='jindev__blog-container_article-content'>
      <div>
        <h3>{text}</h3>
        <p>{date}</p>
      </div>
    </div>
  </div>
);

export default Cards;
