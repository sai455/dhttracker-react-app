import api, { handleError } from '@/Services'



export default async (userId) => {
  const response = await api.get(`downholetools/user`)
  return response.data
}
