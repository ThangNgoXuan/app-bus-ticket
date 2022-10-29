import axiosClient from "./axiosClient";

const newsApi = {
  getAllNews: () => {
    const url = '/news'
    return axiosClient.get(url)
  },
  addNew: (data) => {
    const url = "/news"
    return axiosClient.post(url, data)
  },
  updateNew: (data, id) => {
    const url = `/news/${id}`
    return axiosClient.put(url, data)
  },
  deleteNew: (id) => {
    const url = `/news/${id}`
    return axiosClient.delete(url)
  },
  findBySlug: (id) => {
    const url = `/tin-tuc/${id}`
    return axiosClient.get(url)
  }
};

export default newsApi;