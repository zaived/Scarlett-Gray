import Link from 'next/link';
import Image from 'next/image';
import Zalando from '../public/assets/icons/home/1.png';
import Nike from '../public/assets/icons/home/2.jpg';
import Painting from '../public/assets/icons/home/3.jpg';
import Sculpt from '../public/assets/icons/home/4.jpg';

const homeSlider = () => {
  return (
    <div className='slide-container'>
      <section id='slideshow'>
        <div className='entire-content'>
          <div className='content-carousel'>
            <a className='shadow' href='/projects/zalando-createurs-doptimisme'>
              <Image src={Zalando} />
            </a>
            <a className='shadow' href='/projects/nike-all-star-weekend'>
              <Image src={Nike} />
            </a>
            <a className='shadow' href='/ArtisticExpression'>
              <Image src={Painting}/>
            </a>
            <a className='shadow' href='/ArtisticExpression'>
              <Image src={Sculpt} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default homeSlider;
