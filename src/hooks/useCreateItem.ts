import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { CreateItem } from "../entities/CreateItem";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const apiClient = new APIClient<CreateItem>("/Item");
const useCreateItems = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateItem) => apiClient.post(data),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["item"]});   
      toast.success('Successfully created!') 
        setTimeout(()=>{
          navigate('/catalog')

        }, 1000);

    },
  });
};

export default useCreateItems;