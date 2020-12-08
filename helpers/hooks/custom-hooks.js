import { useEffect, useState } from "react";
import { fetchDataByUri } from "../apiCalls/metadataCalls";


// adds a report button to each component and fetches respective data from the cms
export function useAddReportButton(uri, type = 'collection') {
  console.log('uri: ', uri)
  const [component, setComponent] = useState(false)
  const [selectedChild, setSelectedChild] = useState('')
  const [openModal, setOpenModal] = useState(false)


  useEffect(() => {
    const fetch = async () => {
      const res = await fetchDataByUri(type, uri)
      console.log('type: ', type)
      console.log('res: ', res)
      setComponent(res);
    };
    fetch()
  }, [])

  let findByClassName;
  let arrayPath;
  let singleComponent = false;

  useEffect(() => {
    if (component) {
      if (type === 'collection') {
        arrayPath = component.metadata.children;
        findByClassName = 'find_by_header';
      }
      if (type === 'guidelines') {
        if (uri === "/guidelines/grid") {
          findByClassName = "use-in-toc-grid"
        } else {
          findByClassName = 'use-in-toc'

        }

        arrayPath = component.metadata
        if (arrayPath.length === 1) {
          singleComponent = true
        }
      }
    }

  }, [component])


  useEffect(() => {
    if (component) {


      Array.from(document.getElementsByClassName(findByClassName)).forEach(function (item) {


          console.log('item: ', item.classList)
          if (Array.from(item.classList).includes('no-report-button')) {
            return;
          }
          let haveHeader = true;

          //create new div
          const div = document.createElement('div');
          div.setAttribute('id', item.id + "-div");
          console.log('item: ', item.tagName)
          if (type === 'guidelines' && item.tagName === 'H2') {
            div.style.marginTop = "-30px"

          }


          //create new span
          const span = document.createElement('span');
          span.innerHTML = 'Report issue';
          span.classList.add("report-issue-button");
          span.classList.add("vf-link-with-arrow");
          span.classList.add("vf-link-with-arrow--small");

          // append the span element inside the <div>
          div.appendChild(span);


          // if the component dont have a header. We set a hidden header in the .md file
          // e.g. ###### Header. Use 6 #.
          const noHeader = Array.from(document.getElementsByClassName('no-header-on-component'))

          // get header by id. sets in headingRenderer.js
          // append new <div><span>Report issue</span></div> element
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
            // create prop/key (uri) to look for in the filter -> indexOf
            // if the component dont have any children its a lonely child and dont have an
            // uri to search for. Only a #.
            let uri = haveHeader ? `#${item.id}` : "#";

            if (singleComponent) {
              child = arrayPath
            } else {
              // get the child that the user clicks on e.g background color
              child = arrayPath.filter(child => {
                return child.uri.indexOf(uri) !== -1;

              });
            }


            setSelectedChild(child);
            setOpenModal(true)
          })
        }
      );
    }
  }, [component]);
  useEffect(() => {
    const scrollableElement = document.getElementById("content-container");
    if (scrollableElement) {
      scrollableElement.scrollTo(0, 0);
    }
  }, [uri])


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
