"use client";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Heading from "@component/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";


const components: JSXMapSerializer = {
  heading2 : ({children}) => (
    <Heading as="h2" size="xl" className="bg-neutral-100 shadow-xl first:mt-0 last:mb-0 md:pb-2" >{children}</Heading>
  ),
  heading3 : ({children}) => (
    <Heading as="h3" size="sm" className="font-medium font-display">{children}</Heading>
  ),
  heading4 : ({children}) => (
    <Heading as="h4" size="lg" className="text-center font-medium pt-1 pb-1">{children}</Heading>
  )
}

/**
 * Props for `Pourquoi`.
 */
export type PourquoiProps = SliceComponentProps<Content.PourquoiSlice>;

/**
 * Component for "Pourquoi" Slices.
 */
const Pourquoi = ({ slice }: PourquoiProps): JSX.Element => {

  const [slide, setSlide] = useState(0);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 place-items-center text-center content-center mb-2">
        <PrismicRichText field={slice.primary.heading} components={components} />
      </div>
      <div className="bg-darkgrey rounded-lg p-5">
        <div className="grid grid-cols-cols3auto gap-5 mb-1">
          {slice.items.map((item, index) =>(
            <button key={index} onClick={() => setSlide(index)} className="w-full bg-gradient-to-t from-white to-slate-200 rounded p-1">
              {item.bodytitle && (
                <PrismicRichText field={item.bodytitle} components={components} />
              )}     
            </button>
          ))}
        </div>
        {slice.items.map((item, index) =>(
          <div key={index} className={ slide === index ? "bg-white rounded-lg justify-center text-center" : "bg-white rounded-lg justify-center text-center hidden "}>
            <PrismicRichText field={item.bodysubtitle} components={components} />
            <PrismicNextImage field={item.bodyimage} className="w-84,6 object-cover h-36 md:h-52 m-auto"/>
            <PrismicRichText field={item.bodytext} components={{paragraph : ({children}) => (<p className="text-sm pl-6 pr-6 pb-2 pt-4 font-display" >{children}</p>)}}/>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Pourquoi;
