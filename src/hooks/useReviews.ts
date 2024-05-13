import { Review } from "../entities/Review";
import APIClient, { FetchResponse } from "../services/api-client";
import useReviewQueryStore from "../store/reviewStore"
import {useQuery} from "@tanstack/react-query"


const apiClient = new APIClient<Review>('/Review/search')

const useReviews = () => 
  {
    const reviewQuery = useReviewQueryStore(s=>s.reviewQuery)
    return useQuery<FetchResponse<Review>,Error>({
        queryKey:['Review',reviewQuery],
        queryFn:() => apiClient.getAll(
        {params:{
            searchText:reviewQuery.searchText,
            pageSize:reviewQuery.pageSize = 10,
            pageNumber:reviewQuery.pageNumber,
            orderBy:reviewQuery.sortOrder,
          }})
    })
}
export default useReviews;