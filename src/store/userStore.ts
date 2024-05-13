import { create } from "zustand";

interface UserQuery {
    searchText?: string;
    pageSize?:number;
    pageNumber?:number;
    count?:number;
    sortOrder?:string

  }

  interface UserQueryStore{
    userQuery: UserQuery;
    setSearchText:(searchText:string)=>void;
    setPageSize:(pageSize:number)=>void;
    setPageNumber:(pageNumber:number)=>void;
    setCount:(count:number)=>void;
    setSortOrder:(sortOrder:string)=>void;
}

const useUserQueryStore = create<UserQueryStore>(set => ({
    userQuery: {pageSize:10,pageNumber:1},
    setSearchText:(searchText)=>set((store)=>({userQuery:{...store.userQuery,searchText}})),
    setSortOrder:(sortOrder)=>set((store)=>({userQuery:{...store.userQuery,sortOrder}})),
    setPageSize:(pageSize)=>set((store)=>({userQuery:{...store.userQuery,pageSize}})),
    setPageNumber:(pageNumber)=>set((store)=>({userQuery:{...store.userQuery,pageNumber}})),    
    setCount:(count)=>set((store)=>({userQuery:{...store.userQuery,count}}))
}))



export default useUserQueryStore;