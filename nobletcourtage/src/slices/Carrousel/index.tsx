"use client";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Heading from "@component/components/Heading";

import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";
import { IconContext } from "react-icons";



const components: JSXMapSerializer = {
  heading1: ({children}) => (
    <Heading
    as="h1"
    size="4xl"
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
      className="grid"
    >
      <div className="grid h-48">
        <div className="row-row1 col-col1">
          {slice.items.map((item, index) =>(
            <div 
            key={index} 
            className={
              slide === index
                ? ""
                : "hidden "
            }>
              {item.images && (
                <>{images[item.images]}</>
              )}     
            </div>
          ))}
        </div>
        <div className="row-row1 col-col1 grid grid-cols-cols3auto gap-2 justify-center content-end pb-2">
          {slice.items.map((_, index) =>(
                <button key={index} onClick={() =>  setSlide(index) } className={slide === index ? "bg-white w-3 h-3 border-white border-3 rounded-full bg-transparent" : "w-3 h-3 border-white border-3 rounded-full bg-transparent"}></button>
          ))}
        </div>
        <div className="row-row1 col-col1 grid content-center justify-between ">
          <button className="row-row1 ml-2" onClick={slideLeft}>
            <IconContext.Provider value={{ color: "white", size: "30px"}}>
              <div>
                <IoMdArrowBack />
              </div>
            </IconContext.Provider>
          </button>
          <div className="row-row1 text-gray-300">
            <PrismicRichText components={components} field={slice.primary.heading} />
          </div>
          <button className="row-row1 mr-2" onClick={slideRight}>
          <IconContext.Provider value={{ color: "white", size: "30px"}}>
              <div>
                <IoMdArrowForward />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </Bounded>
  );
};

export default Carrousel;



function Img_1() {
  return <img className="h-48 object-cover w-full" src="../../assets/maison_1.webp" alt="maison"></img>
}

function Img_2() {
  return <img className="h-48 object-cover w-full" src="../../assets/maison_1.webp" alt="maison"></img>
}

function Img_3() {
  return <img className="h-48 object-cover w-full" src="../../assets/maison_1.webp" alt="maison"></img>
}