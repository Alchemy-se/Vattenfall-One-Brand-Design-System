import axios from "axios";

export const sendRequest = async (data) => {
 let response = await axios({
    method: 'POST',
    url: `https://albin-test.zendesk.com/api/v2/requests.json`,
    headers: {
      "content-type": "application/json"
    },
    data
  })
  console.log('response: ', response)
}

export const uploadAttachments = async (data) => {
  let response = await axios({
    method: 'POST',
    url: `https://albin-test.zendesk.com/api/v2/uploads.json`,
    headers: {
      "content-type": "application/json"
    },
    data
  })
  console.log('response: ', response)
}
