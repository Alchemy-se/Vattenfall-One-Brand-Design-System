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

const markdown = colors + backgroundColor + borders


const Colors = ({ uri }) => {

  const [component, setComponent] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchDataByUri(uri)
      setComponent(res);
    };

    fetch()
  }, [])



  useEffect(()=> {

  })
  /*
    constructor(props) {
      super(props);
      this.state = {
        zendeskData: null

      }
    }


    //Hämta ut id/data fråm strapi
    componentDidMount() {

      const that = this
      Array.from(document.getElementsByClassName("find_by_header")).forEach(function (item) {
        console.log('item: ', item)
        //Mockmeta ska vara data fråm strapi, gör anrop med uri som
        // kommer in från this.props. Måste läggas till manuellt i alla routes
        const selectedChild = mockmeta.children.filter(child => {
          return child.uri.indexOf("#" + item.id) !== -1;

        })
        console.log('selectedChild: ', selectedChild)

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


        const reportButton = document.getElementById(item.id + "-div")
        reportButton.addEventListener('click', function (e) {
          that.setState({ zendeskData: selectedChild[0] })
        })
      });
    }

    send = async () => {
      const h = await axios({
        method: 'POST',
        url: `https://albin-test.zendesk.com/api/v2/requests.json`,
        headers: {
          "content-type": "application/json"
        },
        data: {
          "request": {
            "requester": { "name": "albin" },
            "subject": ":) !",
            "comment": { "body": "Ser att det är fel färgkod på den röda färgen" },
            // "custom_fields": [{ "id": 360054430033, "value": "React." }]
          }
        }
      })
    }

    renderZendesk() {
      if (!this.state.zendeskData) {
        return null
      }
      return (
        <div>
          <div
            style={{ position: "absolute", top: 0, left: 500, right: 0 }}
            onClick={() => this.send()}>test
          </div>
          <input type="file" />
        </div>
      )

    }*/


  return (
    <React.Fragment>
      <PageHeader title={"Colors"} />
      <Markdown source={markdown} />
      {/*
        {this.renderZendesk()}
*/}
    </React.Fragment>
  )

};
export default Colors
