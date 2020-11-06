import axios from "axios";
export const fetchAllMetadata = async () => {
  const res = await axios({
    method: 'GET',
    url: `http://localhost:1338/collection-metadata`,

  })
  console.log('res: ', res)
  return res.data
}

export const updateChild = async (data) => {
  try {
    const res = await axios({
      method: 'PUT',
      url: `http://localhost:1338/collection-metadata/${data.id}`,
      withCredentials: true,
      data: {
        "metadata": data.metadata
      }
    })
    console.log('res: ', res)
  } catch (e) {
    console.log("updateChild error", e);


  }
}

export const fetchAmount = async () => {
  const res = await axios({
    method: 'GET',
    url: `http://localhost:1338/collection-metadata/amount`,

  })
  console.log('res: ', res)
  return res.data
}
