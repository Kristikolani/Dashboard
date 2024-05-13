import { create } from "zustand";

 interface ReviewQuery {
    searchText?: string;
    pageSize?:number;
    pageNumber?:number;
    count?:number;
    sortOrder?:string

  }

  interface ReviewQueryStore{
    reviewQuery: ReviewQuery;
    setSearchText:(searchText:string)=>void;
    setSortOrder:(sortOrder:string)=>void;
    setPageSize:(pageSize:number)=>void;
    setPageNumber:(pageNumber:number)=>void;
    setCount:(count:number)=>void;
}

const useReviewQueryStore = create<ReviewQueryStore>(set => ({
    reviewQuery: {pageSize:10,pageNumber:1},
    setSearchText:(searchText)=>set((store)=>({reviewQuery:{...store.reviewQuery,searchText}})),
    setSortOrder:(sortOrder)=>set((store)=>({reviewQuery:{...store.reviewQuery,sortOrder}})),
    setPageSize:(pageSize)=>set((store)=>({reviewQuery:{...store.reviewQuery,pageSize}})),
    setPageNumber:(pageNumber)=>set((store)=>({reviewQuery:{...store.reviewQuery,pageNumber}})),    
    setCount:(count)=>set((store)=>({reviewQuery:{...store.reviewQuery,count}}))
}))


export default useReviewQueryStore;
