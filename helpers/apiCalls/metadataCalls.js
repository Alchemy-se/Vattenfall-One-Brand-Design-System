import axios from "axios";
export const fetchAllMetadata = async () => {
  const res = await axios({
    method: 'GET',
    url: `http://localhost:1338/collection-metadata`,

  })
  console.log('res: ', res)
  return res.data
}

export const updateMetadata = async (data) => {
  console.log('data: ', data)
  try {
    const res = await axios({
      method: 'PUT',
      url: `http://localhost:1338/collection-metadata/${data.id}`,
      withCredentials: true,
      data: {
        "metadata": data.metadata
      }
    })
    console.log("updateMetadata res", res);


    return res.status;
  } catch (e) {
    console.log("updateMetadata error", e);


  }
}

export const fetchAmount = async () => {
  const res = await axios({
    method: 'GET',
    url: `http://localhost:1338/collection-metadata/amount`,

  })
  console.log("metadatacall fetchAmount körs");


  return res.data
}
