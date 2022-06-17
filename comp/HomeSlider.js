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
          <div className='content-carrousel'>
            <figure className='shadow'>
              <Image src={Zalando} />
            </figure>
            <figure className='shadow'>
              <Image src={Nike} />
            </figure>
            <figure className='shadow'>
              <Image src={Painting} />
            </figure>
            <figure className='shadow'>
              <Image src={Sculpt} />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default homeSlider;
