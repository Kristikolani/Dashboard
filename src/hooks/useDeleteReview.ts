import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Review } from "../entities/Review";
import toast from "react-hot-toast";

const apiClient = new APIClient<Review>("/Review");
const useDeleteReview = (id:number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["Review"]});
      toast.success('Successfully deleted!')
    },
  });
};

export default useDeleteReview;