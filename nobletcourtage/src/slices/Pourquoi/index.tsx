import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Pourquoi`.
 */
export type PourquoiProps = SliceComponentProps<Content.PourquoiSlice>;

/**
 * Component for "Pourquoi" Slices.
 */
const Pourquoi = ({ slice }: PourquoiProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for pourquoi (variation: {slice.variation}) Slices
    </section>
  );
};

export default Pourquoi;
