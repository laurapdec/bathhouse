import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-widget": React.HTMLAttributes<HTMLElement> & { id: string };
    }
  }
}
