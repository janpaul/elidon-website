import type { PropsWithChildren } from "react";

const P2000Layout = ({ children }: PropsWithChildren) => (
  <>
    <h2 className="text-6xl mb-3">P2000</h2>
    <section>{children}</section>
  </>
);
export default P2000Layout;
