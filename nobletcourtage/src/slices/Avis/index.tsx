import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Heading from "@component/components/Heading";
import { PrismicNextImage } from "@prismicio/next";


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
 * Props for `Avis`.
 */
export type AvisProps = SliceComponentProps<Content.AvisSlice>;

/**
 * Component for "Avis" Slices.
 */
const Avis = ({ slice }: AvisProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} 
    >
      <div><PrismicRichText field={slice.primary.title} /></div>
      <div>
        <div>
          <div>
          <PrismicRichText field={item.cardtitle} />
          <PrismicRichText field={item.cardtext} />
          </div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </Bounded>
  );
};

export default Avis;
