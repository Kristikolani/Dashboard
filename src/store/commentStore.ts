import { create } from "zustand";

 interface CommentQuery {
    searchText?: string;
    pageSize?:number;
    pageNumber?:number;
    count?:number;
    sortOrder?:string

  }

  interface CommentQueryStore{
    commentQuery: CommentQuery;
    setSearchText:(searchText:string)=>void;
    setSortOrder:(sortOrder:string)=>void;
    setPageSize:(pageSize:number)=>void;
    setPageNumber:(pageNumber:number)=>void;
    setCount:(count:number)=>void;
}


const useCommentQueryStore = create<CommentQueryStore>(set => ({
    commentQuery: {pageSize:10, pageNumber:1},
    setSearchText:(searchText)=>set((store)=>({commentQuery:{...store.commentQuery,searchText}})),
    setSortOrder:(sortOrder)=>set((store)=>({commentQuery:{...store.commentQuery,sortOrder}})),
    setPageSize:(pageSize)=>set((store)=>({commentQuery:{...store.commentQuery,pageSize}})),
    setPageNumber:(pageNumber)=>set((store)=>({commentQuery:{...store.commentQuery,pageNumber}})),
    setCount:(count)=>set((store)=>({commentQuery:{...store.commentQuery,count}}))
}))


export default useCommentQueryStore;
