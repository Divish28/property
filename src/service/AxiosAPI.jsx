import axios from "axios"

const url = "http://localhost:8000"

export const post = async (data)=>{
    return await axios.post(url,data)
}

export const get =  async(id)=>{
    id = id||""
    return await axios.get(`${url}/${id}`)
}

export const put = async(id,data)=>{
    return await axios.put(`${url}/${id}`,data)
}

export const deleteItem = async(id)=>{
    return await axios.delete(`${url}/${id}`)
}