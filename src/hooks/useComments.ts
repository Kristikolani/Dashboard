import { Comment } from "../entities/Comment";
import APIClient, { FetchResponse } from "../services/api-client";
import useCommentQueryStore from "../store/commentStore"
import {useQuery} from "@tanstack/react-query"


const apiClient = new APIClient<Comment>('/Comment/search')

const useComments = () => 
  {
    const commentQuery = useCommentQueryStore(s=>s.commentQuery)
    return useQuery<FetchResponse<Comment>,Error>({
        queryKey:['Comment',commentQuery],
        queryFn:() => apiClient.getAll(
        {params:{
            searchText:commentQuery.searchText,
            pageSize:commentQuery.pageSize = 10,
            pageNumber:commentQuery.pageNumber,
            orderBy:commentQuery.sortOrder
          }}),
        })

}

export default useComments;