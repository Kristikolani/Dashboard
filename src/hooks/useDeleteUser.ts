import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { User } from "../entities/User";
import toast from "react-hot-toast";

const apiClient = new APIClient<User>("/UsersAuth");
const useDeleteUser = (id:number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiClient.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["user"]});
      toast.success('Successfully deleted!')
    },
  });
};

export default useDeleteUser;