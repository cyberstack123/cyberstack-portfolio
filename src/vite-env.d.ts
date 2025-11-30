// Removed reference to vite/client which was causing type definition errors

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Added process declaration to support Gemini SDK API key requirement
declare const process: {
  env: {
    API_KEY: string;
    [key: string]: string | undefined;
  }
};

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}