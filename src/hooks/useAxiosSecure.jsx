import axios from 'axios'
import { use } from 'react'
import { AuthContext } from '../context/AuthProvider'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // withCredentials: true,
})

const useAxiosSecure = () => {
  const {user,logOut}= use(AuthContext);
  // const token = localStorage.getItem('token')
  console.log(user)
  const token = user?.accessToken
  //   intercept requests
  axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`

    return config
  })

  //   intercept responses
  axiosInstance.interceptors.response.use(
    res => res,
    err => {
      if (err.status === 401 || err.status === 403) {
        logOut()
          .then(() => {
            console.log(
              `You are logged out because of an error with ${err.status} code.`
            )
          })
          .catch(err => console.log(err))
      }
      return Promise.reject(err)
    }
  )

  return axiosInstance
}

export default useAxiosSecure