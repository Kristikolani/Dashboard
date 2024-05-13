import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Comment } from "../entities/Comment";
import toast from "react-hot-toast";

const apiClient = new APIClient<Comment>("/Comment");
const useDeleteComment = (id:number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["Comment"]});
      toast.success('Successfully deleted!')
    },
  });
};

export default useDeleteComment;