import { User } from "../entities/User";
import APIClient, { FetchResponse } from "../services/api-client";
import useUserQueryStore from "../store/userStore"
import {useQuery} from "@tanstack/react-query"


const apiClient = new APIClient<User>('/UsersAuth/search')

const useUsers = () => 
  {
    const userQuery = useUserQueryStore(s=>s.userQuery)
    return useQuery<FetchResponse<User>,Error>({
        queryKey:['user',userQuery],
        queryFn:() => apiClient.getAll(
        {params:{
            searchText:userQuery.searchText,
            pageSize:userQuery.pageSize = 10,
            pageNumber:userQuery.pageNumber,
            orderBy:userQuery.sortOrder
          }})
    })
}
export default useUsers;