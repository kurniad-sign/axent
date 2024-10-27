import type * as React from "react";

export default function mergeRefs<T = HTMLElement>(
  refs: (React.MutableRefObject<T> | React.LegacyRef<T>)[],
): React.RefCallback<T> {
  return (value: any): any => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null && typeof ref !== "string") {
        // @ts-expect-error expected to be mutable
        ref.current = value;
      }
    });
  };
}