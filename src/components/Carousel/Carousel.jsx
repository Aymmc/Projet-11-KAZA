import {useState} from 'react'
import Arrow from '../../components/Dropdown/arrow-back.svg';

function Carousel({item}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? item.pictures.length - 1 : prevIndex - 1));
      };
    
      const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === item.pictures.length - 1 ? 0 : prevIndex + 1));
      };
  return (
    <div className='DivImg'>
    <img src={item.pictures[currentIndex]} className='cover' alt="Current accommodation" />
    <img src={Arrow} className='arrow arrowleft' alt="Previous" onClick={handlePrevClick} />
    <img src={Arrow} className='arrow arrowright' alt="Next" onClick={handleNextClick} />
    <p>
      {currentIndex + 1} / {item.pictures.length}
    </p>
  </div>
  )
}

export default Carousel