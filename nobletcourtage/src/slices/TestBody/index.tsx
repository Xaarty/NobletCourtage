import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestBody`.
 */
export type TestBodyProps = SliceComponentProps<Content.TestBodySlice>;

/**
 * Component for "TestBody" Slices.
 */
const TestBody = ({ slice }: TestBodyProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for test_body (variation: {slice.variation}) Slices
    </section>
  );
};

export default TestBody;
