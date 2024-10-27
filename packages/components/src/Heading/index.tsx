import fixedForwardRef, { DistributiveOmit } from "../utils/fixed-forward-ref";

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div';

type Distributive<TAs extends HeadingTag> = DistributiveOmit<
  React.ComponentPropsWithRef<HeadingTag extends TAs ? 'div' : TAs>,
  'component'
>;

export type HeadingProps<TAs extends HeadingTag> = {
  component?: TAs;
} & Distributive<TAs>

const UnwrappedHeading = <TAs extends HeadingTag>(
  props: HeadingProps<TAs>,
  ref: React.ForwardedRef<any>
) => {
  const { component: Component='div', children, ...restProps } = props

  return (
    <Component className="text-3xl" ref={ref} {...restProps}>{children}</Component>
  )
}

export const Heading = fixedForwardRef(UnwrappedHeading)