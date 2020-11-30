import React, { Component, useContext, useEffect, useState } from "react";
import colors from './colors/html/colors.md'
import borders from './borders/html/borders.md'
import backgroundColor from './background-color/html/background-color.md'
import Markdown from "../../lib/markdown";
import PageHeader from "../../lib/pageHeader";
import mockmeta from './mockmeta'
import axios from "axios";
import authContext from "../../../helpers/authContext";
import { fetchDataByUri } from "../../../helpers/apiCalls/metadataCalls";
import Zendesk from "../../zendesk/zendesk";
import ConfirmModal from "../../zendesk/confirmModal";

const markdown = colors + backgroundColor + borders


const Colors = ({ uri }) => {
  const [component, setComponent] = useState('')
  const [selectedChild, setSelectedChild] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [displayConfirmModal, setDisplayConfirmModal] = useState(false)


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
        const header = document.getElementById(item.id)
        header.appendChild(div)


        const reportButton = document.getElementById(item.id + "-div");
        reportButton.addEventListener('click', function (e) {

          const child = component.metadata.children.filter(child => {
            return child.uri.indexOf("#" + item.id) !== -1;

          });
          setSelectedChild(child);
          setOpenModal(true)
        })
      });
    }
  }, [component]);


  const handleConfirmModal = (value) => {
    setDisplayConfirmModal(value)
  }

  return (
    <React.Fragment>
      <PageHeader title={"Colors"} />
      <Markdown source={markdown} />
      {displayConfirmModal && <ConfirmModal handleModal={handleConfirmModal} />}
        {openModal &&
      <Zendesk setOpenModal={setOpenModal} handleConfirmModal={handleConfirmModal} data={selectedChild} />}
    </React.Fragment>
  )

};
export default Colors
