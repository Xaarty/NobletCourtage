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
      <div className="grid h-16 bg-slate-200 content-center justify-center"><PrismicRichText components={components} field={slice.primary.valeurs} /></div>
      <div className="grid grid-cols-2">
        <div className="grid">
          <PrismicRichText field={slice.primary.name} />
          <PrismicNextImage field={slice.primary.mainimage} />
        </div>
        <div className="flex">
          <div className="w-1 h-full border-1 border-black"></div>
          <PrismicRichText field={slice.primary.description} />
        </div>
        
      </div>
    </Bounded>
  );
};

export default Valeurs;
