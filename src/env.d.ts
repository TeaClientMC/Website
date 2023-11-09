/// <reference types="astro/client" />
declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}
