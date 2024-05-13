import { create } from "zustand";

 interface ItemQuery {
    searchText?: string;
    pageSize?:number;
    pageNumber?:number;
    count?:number;
    sortOrder?:string
  }

  interface ItemQueryStore{
    itemQuery: ItemQuery;
    setSearchText:(searchText:string)=>void;
    setSortOrder:(sortOrder:string)=>void;
    setPageSize:(pageSize:number)=>void;
    setPageNumber:(pageNumber:number)=>void;
    setCount:(count?:number)=>void;

}

const useItemQueryStore = create<ItemQueryStore>(set => ({
    itemQuery: {pageSize:10,pageNumber:1},
    setSearchText:(searchText)=>set((store)=>({itemQuery:{...store.itemQuery,searchText}})),
    setSortOrder:(sortOrder)=>set((store)=>({itemQuery:{...store.itemQuery,sortOrder}})),
    setPageSize:(pageSize)=>set((store)=>({itemQuery:{...store.itemQuery,pageSize}})),
    setPageNumber:(pageNumber)=>set((store)=>({itemQuery:{...store.itemQuery,pageNumber}})),
    setCount:(count)=>set((store)=>({itemQuery:{...store.itemQuery,count}}))


}))


export default useItemQueryStore;
