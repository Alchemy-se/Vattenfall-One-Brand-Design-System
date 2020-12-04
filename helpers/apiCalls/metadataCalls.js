import axios from "axios";

let baseUrl = process.env.BASE_URL;
export const fetchAllMetadata = async () => {
  const res = await axios({
    method: 'GET',
    url: `${baseUrl}/collection-metadata`,

  });
  return res.data.sort((a, b) => a.metadata.name.localeCompare(b.metadata.name))
};

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

export const fetchDataByUri = async (type ,uri) => {
  console.log('type: ', type)
//type is either collection (componentes) or guidelines

  const res = await axios({
    method: 'POST',
    url: `${baseUrl}/${type}-metadata/getByUri`,
    data: {
      "uri": uri
    }
  })
  console.log('res: ', res)
  return res.data
}
