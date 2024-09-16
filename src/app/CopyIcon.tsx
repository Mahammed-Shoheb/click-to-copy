import * as React from "react";
const SvgComponent = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 60 60"
    {...props}
  >
    <defs>
      <style>{".cls-1{fill:#0074ff}.cls-2{fill:#ffb300}"}</style>
    </defs>
    <title />
    <path
      d="M47.82 57.73H14a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2h7.56a2 2 0 0 1 2 2v4.23h14.69V13a2 2 0 0 1 2-2h7.57a2 2 0 0 1 2 2v25a2 2 0 0 1-4 0V15h-3.57v4.23a2 2 0 0 1-2 2H21.57a2 2 0 0 1-2-2V15H16v38.73h29.82v-2.55a2 2 0 0 1 4 0v4.55a2 2 0 0 1-2 2Z"
      className="cls-1"
    />
    <path
      d="M40.25 21.24H21.57a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h18.68a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2Zm-16.68-4h14.68v-7H23.57Z"
      className="cls-1"
    />
    <path
      d="M42 51.59a2 2 0 0 1-1.46-.59l-5-5a2 2 0 0 1 0-2.83l5-5A2 2 0 0 1 43.37 41l-3.62 3.62 3.62 3.62A2 2 0 0 1 42 51.59Z"
      className="cls-2"
    />
    <path
      d="M56 46.56H36.92a2 2 0 0 1 0-4H56a2 2 0 1 1 0 4Z"
      className="cls-2"
    />
  </svg>
);
export default SvgComponent;
