import { useEffect, useState } from "react";


/**
 *  Detect clicks outside element container with a ref
 *
 *  You can use it like this in the component you want to check:
  const ref = useRef(null);
  const isClickedOutside = useDetectOutsideClick(ref)

 useEffect(() => {
          if (isClickedOutside) {
                handleModal(false)
            }
          }, [isClickedOutside])

 <div ref={ref}> Click outside me </div>

 *
 * @param ref
 * @returns {boolean}
 */

export function useDetectOutsideClick(ref) {
  const [isClickedOutside, setIsClickedOutside] = useState(false)
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClickedOutside(true)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {

      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return isClickedOutside
}
