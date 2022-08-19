import api from "../../services/api";
export interface ICreateTech{
  title: string;
  status:string
}
interface ICreateTechUserResponse{
  id:string;
}
export interface ICreateTechResponse{
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
  user: ICreateTechUserResponse
}
export default async function createTech(tech: object):Promise<ICreateTechResponse> {
  const {data} = await api.post<ICreateTechResponse>("/users/techs", tech)
  return data;
}
