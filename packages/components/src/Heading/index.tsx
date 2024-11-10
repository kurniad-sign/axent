import { useMemo } from "react";

import { headingVariant } from "../core/components";

import fixedForwardRef from "../utils/fixed-forward-ref";
import { mergeTwClass } from "../utils/merge-tw-class";

import { HeadingProps, HeadingTag } from "./types";

const UnwrappedHeading = <TAs extends HeadingTag>(
  props: HeadingProps<TAs>,
  ref: React.ForwardedRef<any>
) => {
  const {
    component: Component = 'div',
    className,
    children,
    align,
    variant,
    weight,
    ...rest
  } = props;

  const resolvedVariant = useMemo(() => {
    const componentToVariantMap: Record<HeadingTag, typeof variant> = {
      h1: 'title-1',
      h2: 'title-2',
      h3: 'title-3',
      h4: 'title-4',
      h5: 'title-5',
      div: 'title-6',
    };

    return variant ?? componentToVariantMap[Component];
  }, [Component, variant]);

  return (
    <Component
      ref={ref}
      className={mergeTwClass(
        headingVariant({ className, variant: resolvedVariant, align, weight })
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const Heading = fixedForwardRef(UnwrappedHeading)