import axios from "axios";

export const sendRequest = async (data, formData) => {
  console.log('formData: ', [...formData])
  const file = formData.get('files')
  if (file) {
    console.log('data: ', data)
    const token = await uploadAttachments(file)
    data.request.comment.uploads = [token]
  }

  let response = await axios({
    method: 'POST',
    url: `https://albin-test.zendesk.com/api/v2/requests.json`,
    headers: {
      "content-type": "application/json"
    },
    data
  })
  console.log('REQUESTS response: ', response)
}

export const uploadAttachments = async (file) => {

  let response = await axios({
    method: 'POST',
    url: `https://albin-test.zendesk.com/api/v2/uploads.json?filename=${file.name}`,
    headers: {
      "content-type": "application/binary"
    },
    data: file
  })
  console.log('FILE UPLOADresponse: ', response)
  return response.data.upload.token
}
