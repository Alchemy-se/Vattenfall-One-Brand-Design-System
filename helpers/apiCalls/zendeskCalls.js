import axios from "axios";

export const sendRequest = async (data, files) => {

  const tokens = []

  if (files.length >= 1) {
    // create form data of the files. Needed for sending over http
    const formData = new FormData();
    files.forEach(item => {
      formData.append(
        "attachment",
        item,
        item.name
      );
    });

    // get array containing all the files
    const attachments = formData.getAll("attachment")

    // every attachment needs to uploaded separately to the endpoint and we get
    // back a token for that file. Then we push these tokens to the request from the
    // user to "connect" the files to the request.
    for (const file of attachments) {
      const token = await uploadAttachments(file)
      tokens.push(token)
    }
    data.request.comment.uploads = tokens

  }
  try {

    let response = await axios({
      method: 'POST',
      url: process.env.ZENDESK_REQUEST_URL,
      headers: {
        "content-type": "application/json"
      },
      data

    });
    return response.status


  } catch (error) {
    return error.response.status

  }
}

export const uploadAttachments = async (file) => {
  try {

    let response = await axios({
      method: 'POST',
      url: process.env.ZENDESK_UPLOAD_FILE_URL + file.name,
      headers: {
        "content-type": "application/binary"
      },
      data: file
    })


    return response.data.upload.token
  } catch (e) {
    console.log("upload attachment error:", e);


  }
}
