import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Heading from "@component/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";


const components: JSXMapSerializer = {
  heading2 : ({children}) => (
    <Heading as="h2" size="xl" className="bg-transparent first:mt-0 last:mb-0" >{children}</Heading>
  ),
  heading3 : ({children}) => (
    <Heading as="h3" size="xl" className="font-medium font-display mt-4 mb-5">{children}</Heading>
  ),
  paragraph : ({children}) => (
    <Heading as="p" size="lg" className="text-center font-medium pt-1 pb-1">{children}</Heading>
  )
}



/**
 * Props for `Valeurs`.
 */
export type ValeursProps = SliceComponentProps<Content.ValeursSlice>;

/**
 * Component for "Valeurs" Slices.
 */
const Valeurs = ({ slice }: ValeursProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} 
    >
      <div className="bg-slate-200 h-full pb-1">
        <div className="grid h-16 content-center justify-center"><PrismicRichText components={components} field={slice.primary.valeurs} /></div>
        <div className="grid grid-cols-2 bg-white ml-1 mr-1 rounded">
          <div className="grid text-center ml-2.5 mr-1.5">
            <PrismicRichText field={slice.primary.name} components={components}/>
            <PrismicNextImage field={slice.primary.mainimage} />
          </div>
          <div className="flex text-center mr-2.5 gap-1.5">
            <div className="w-1 border-1 border-black m-1"></div>
            <PrismicRichText field={slice.primary.description}   components={{paragraph : ({children}) => (<p className="text-sm pl-6 pr-6 pb-4 pt-4 font-display" >{children}</p>)}}/>
          </div>
          
        </div>
      </div>
    </Bounded>
  );
};

export default Valeurs;
