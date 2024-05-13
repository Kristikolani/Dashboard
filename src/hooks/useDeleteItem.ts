import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Item } from "../entities/Item";
import toast from "react-hot-toast";

const apiClient = new APIClient<Item>("/Item");
const useDeleteItem = (id:number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["item"]});
      toast.success('Successfully deleted!')
    },
  });
};

export default useDeleteItem;