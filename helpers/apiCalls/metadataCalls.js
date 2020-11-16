import axios from "axios";

let baseUrl = process.env.LOCAL_BASE_URL;
if (process.env.NODE_ENV === "production") {
  baseUrl = process.env.PROD_STRAPI_BASE_URL
}

export const fetchAllMetadata = async () => {
  const res = await axios({
    method: 'GET',
    url: `${baseUrl}/collection-metadata`,

  })
  return res.data
}

export const updateMetadata = async (data) => {
  try {
    const token = localStorage.getItem('jwt')
    const res = await axios({
      method: 'PUT',
      url: `${baseUrl}/collection-metadata/${data.id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8'
      },

      data: {
        "metadata": data.metadata
      }
    })


    return res.status;
  } catch (e) {
    console.log("updateMetadata error", e);


  }
}

export const fetchAmount = async () => {
  const res = await axios({
    method: 'GET',
    url: `${baseUrl}/collection-metadata/amount`,

  })


  return res.data
}
