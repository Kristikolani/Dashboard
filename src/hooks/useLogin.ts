import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIauth from "../services/api-auth";

interface LoginCredentials {
  email: string;
  password: string;
}





const apiAuth = new APIauth<LoginCredentials>("/UsersAuth");

const useLogin = () => {

    const queryClient = useQueryClient();  
    return useMutation({
      mutationFn: (credentials: LoginCredentials) => apiAuth.login(credentials),
      onSuccess: (data) => {
        console.log("Login success:",data);
        queryClient.invalidateQueries({queryKey:["user"]});
      const token = data.result.token;
      localStorage.setItem("token", JSON.stringify(token));
      const tokenRole = apiAuth.extractRoleFromJwt(JSON.stringify(token));
      localStorage.setItem("tokenRole", tokenRole.role);
      const name = data.result.user.firstName + " " + data.result.user.lastName;
      localStorage.setItem("name",name)
      },
      onError: (error) => {
        console.error("Login error:", error);
      },
    });
  };
  

export default useLogin;
