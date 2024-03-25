import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Heading from "@component/components/Heading";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";



const components: JSXMapSerializer = {
  heading1: ({children}) => (
    <Heading
    as="h1"
    size="xl"
    className="text-center">{children}</Heading>
  )
}


const images = {
  img1: <Img_1 />,
  img2: <Img_2 />,
  img3: <Img_3 />
}






/**
 * Props for `Carrousel`.
 */
export type CarrouselProps = SliceComponentProps<Content.CarrouselSlice>;

/**
 * Component for "Carrousel" Slices.
 */
const Carrousel = ({ slice }: CarrouselProps): JSX.Element => {

  const [slide, setSlide] = useState(0);

  const slideRight = () => {
    setSlide(slide === slice.items.length - 1 ? 0 : slide + 1);
  };

  const slideLeft = () => {
    setSlide(slide === 0 ? slice.items.length - 1 : slide - 1);
  };


  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <PrismicRichText components={components} field={slice.primary.heading} />
        <button className="arrow arrow_left" onClick={slideLeft}>
          <FaArrowLeft />
        </button>
        <button className="arrow arrow_right" onClick={slideRight}>
          <FaArrowRight />
        </button>
      </div>
      <div>
        {slice.items.map((item, index) =>(
          <div key={index}>
            {item.images && (

              <>{images[item.images]}</>
            )}
            
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Carrousel;



function Img_1() {
  return <img src="https://media.discordapp.net/attachments/643557236689338382/1216147962317504512/pexels-frans-van-heerden-1438832.jpg?ex=6611ca0d&is=65ff550d&hm=328be102c1c86daca360c0f9eb51549e599d8d2a3fccaeac0ace8de95bd0d9fc&=&format=webp&width=1230&height=733"></img>
}

function Img_2() {
  return <img src="https://media.discordapp.net/attachments/643557236689338382/1216147958563733715/pexels-binyamin-mellish-186077.jpg?ex=6611ca0c&is=65ff550c&hm=35fe01e4970f87dfe7e404386b39a5cbbab96bfad2cb86241e858af2ab3aa1dd&=&format=webp&width=1075&height=733"></img>
}

function Img_3() {
  return <img src="https://media.discordapp.net/attachments/643557236689338382/1216147959670898738/pexels-chris-goodwin-32870.jpg?ex=6611ca0c&is=65ff550c&hm=7d77ed0938a4d3a437ab6573f93f2aa41bc8190459dc1fdbf1b7761ba57ddabf&=&format=webp&width=1225&height=733"></img>
}
