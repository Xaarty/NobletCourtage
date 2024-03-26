import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Heading from "@component/components/Heading";


const components: JSXMapSerializer = {
  heading2 : ({children}) => (
    <Heading as="h1" size="xl" className="bg-neutral-100 drop-shadow-lg first:mt-0 last:mb-0" >{children}</Heading>
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
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 place-items-center text-center content-center">
        <PrismicRichText field={slice.primary.heading} components={components} />
      </div>
      <div>
        <div>
        {slice.items.map((item, index) =>(
            <div key={index} className="w-28 bg" >
              {item.bodytitle && (
                <PrismicRichText field={item.bodytitle} />
              )}     
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Pourquoi;
