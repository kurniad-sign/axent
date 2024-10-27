import { forwardRef } from "react";

export type FixedForwardRef = <T, P = Record<string, never>>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

export type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

const fixedForwardRef = forwardRef as FixedForwardRef;

export default fixedForwardRef