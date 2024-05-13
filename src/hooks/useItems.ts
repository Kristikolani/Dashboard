import { Item } from "../entities/Item";
import APIClient, { FetchResponse } from "../services/api-client";
import useItemsQueryStore from "../store/itemStore"
import {useQuery} from "@tanstack/react-query"


const apiClient = new APIClient<Item>('/Item/search')

const useItems = () => 
  {
    const itemQuery = useItemsQueryStore(s=>s.itemQuery)
    return useQuery<FetchResponse<Item>,Error>({
        queryKey:['item',itemQuery],
        queryFn:() => apiClient.getAll(
        {params:{
            searchText:itemQuery.searchText,
            orderBy:itemQuery.sortOrder,
            pageSize:itemQuery.pageSize = 10,
            pageNumber:itemQuery.pageNumber,
            
          }})
    })
}
export default useItems;