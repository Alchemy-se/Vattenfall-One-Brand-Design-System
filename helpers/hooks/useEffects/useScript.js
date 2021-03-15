import { useEffect } from "react";

export const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    console.log(url);
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};
