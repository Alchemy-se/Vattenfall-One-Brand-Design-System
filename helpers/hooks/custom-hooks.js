import { useEffect, useState } from "react";
import { fetchDataByUri } from "../apiCalls/metadataCalls";


// adds a reportbutton to each component and fetches respective data from the cms
export function useAddReportButton(uri) {
  const [component, setComponent] = useState('')
  const [selectedChild, setSelectedChild] = useState('')
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchDataByUri(uri)
      setComponent(res);
    };

    fetch()
  }, [])

  useEffect(() => {
    if (component) {
      Array.from(document.getElementsByClassName("find_by_header")).forEach(function (item) {

        let haveHeader = true;

        //create new div
        const div = document.createElement('div');
        div.setAttribute('id', item.id + "-div");

        //create new span
        const span = document.createElement('span');
        span.innerHTML = 'Report issue';
        span.classList.add("report-issue-button");

        // append the span element inside the <div>
        div.appendChild(span);

        // get header by id. sets in headingRenderer.js
        // append new <div><span>Report issue</span></div> element

        // if the component dont have a header. We set a hidden header in the .md file
        // e.g. ###### Header. Use 6 #.
        const noHeader = Array.from(document.getElementsByClassName('no-header-on-component'))
        if (noHeader.length >= 1) {
          haveHeader = false
          const header = document.getElementById("report-issue-hidden")
          header.appendChild(div)

        } else {
          const header = document.getElementById(item.id)
          header.appendChild(div)

        }


        // Get report button by id and add click event listener
        const reportButton = document.getElementById(item.id + "-div");
        reportButton.addEventListener('click', function (e) {
          let child;
          if (haveHeader) {
            // get the child that the user clicks on e.g background color
            child = component.metadata.children.filter(child => {
              return child.uri.indexOf("#" + item.id) !== -1;

            });
          } else {
            // get by uri - the uri in this cas only have a # as its a lonely child
            child = component.metadata.children.filter(child => {
              return child.uri.indexOf("#") !== -1;
            })
          }

          setSelectedChild(child);
          setOpenModal(true)
        })
      });
    }
  }, [component]);
  return { openModal, selectedChild, setOpenModal }
}


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
