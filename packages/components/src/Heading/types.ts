import { VariantProps } from "tailwind-variants";
import { HeadingVariantProps } from "../core/components";
import { DistributiveOmit } from "../utils/fixed-forward-ref";

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div';

type Distributive<TAs extends HeadingTag> = DistributiveOmit<
  React.ComponentPropsWithRef<HeadingTag extends TAs ? 'div' : TAs>,
  'component'
>;

export type HeadingProps<TAs extends HeadingTag> = {
  component?: TAs;
} & Distributive<TAs> & VariantProps<HeadingVariantProps>