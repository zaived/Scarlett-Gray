import Link from "next/link";
import Image from "next/image";
import Zalando from "../public/assets/icons/home/1.png";
import Nike from "../public/assets/icons/home/2.jpg";
import Painting from "../public/assets/icons/home/3.jpg";
import Sculpt from "../public/assets/icons/home/4.jpg";

const homeSlider = () => {
  return (
    <div className="container">
      <section id="slideshow">
        <div class="entire-content">
          <div class="content-carrousel">
            <figure class="shadow">
              <Image src={Zalando} width={200} />
            </figure>
            <figure class="shadow">
              <Image src={Nike} width={200} />
            </figure>
            <figure class="shadow">
              <Image src={Painting} width={200} />
            </figure>
            <figure class="shadow">
              <Image src={Sculpt} width={200} />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default homeSlider;
