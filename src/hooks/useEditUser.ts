import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { EditUser } from "../entities/EditUser";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const apiClient = new APIClient<EditUser>("/UsersAuth");
const useEditUsers = (id:number) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data:EditUser) =>
      apiClient.put(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["user"]});   
      toast.success('Successfully saved!') 
    
        setTimeout(()=>{
          navigate('/users')

        }, 1000);

    },
  });
};

export default useEditUsers;