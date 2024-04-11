import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Heading from "@component/components/Heading";
import jsonData from "../../avis.json";

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
  const logements = jsonData;
  console.log(logements)
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} 
    >
      <div className="shadow-xl">
        <div className="grid h-16 content-center justify-center bg-slate-200 rounded-t-lg"><PrismicRichText field={slice.primary.title} components={components}/></div>
        <div className="grid grid-rows-3 md:grid-cols-cols3auto md:grid-rows-none gap-7">
          {slice.items.map((item, index) => (
            <div key={index} className="bg-slate-400 mt-8 last:mb-8 md:mb-8 ml-3 mr-3 grid rounded-tl-lg rounded-br-lg p-1.5 md:min-h-60">
              <div className="row-row1 col-col1"><Background /></div>
              <div className="row-row1 col-col1 grid grid-rows-rows2auto">
                <div className="grid grid-rows-rows2auto">
                  <PrismicRichText field={item.cardtitle} />            
                  <div className="justify-end grid mr-1 h-fit">
                    <StarRating rating={logements[index].rating} />
                  </div>
                </div>
                <PrismicRichText field={item.cardtext} components={{paragraph : ({children}) => (<p className="text-sm font-display" >{children}</p>)}} />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};


export default Avis;


 function StarRating({ rating }: any) {
  return (
    <div className="grid grid-cols-5 w-fit h-fit gap-1">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className="w-fit h-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.75"
            height="18"
            viewBox="0 0 25 24"
            
            className={index < rating ? "fill-black" : "fill-black"}
          >
            <path
              d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
              fill={index < rating ? "#000" : "#E3E3E3"}
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

function Background() {
  return (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="235" height="111" viewBox="0 0 235 111" fill="none">
    <path d="M234.734 106.438C222.2 74.2689 205.027 47.7143 184.747 29.1455C164.467 10.5767 141.712 0.571672 118.514 0.0237784C95.3153 -0.524115 72.3956 8.40217 51.8011 26.0056C31.2066 43.609 13.5783 69.3417 0.490284 100.906L4.67359 105.615C17.2897 75.1891 34.2823 50.3844 54.1342 33.4157C73.986 16.4471 96.0792 7.84265 118.441 8.37079C140.803 8.89893 162.737 18.5432 182.286 36.4424C201.834 54.3416 218.389 79.9386 230.47 110.948L234.734 106.438Z" fill="#FFFF"/>
    </svg>
  )
}