import { FaSortDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { User } from "../../entities/User";
import useEditUsers from "../../hooks/useEditUser";
import { ZodError, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  users: User[];
}

const EditUserProfile = ({ users }: Props) => {
  const params = useParams();
  const id = Number(params.id);

  const editUserMutation = useEditUsers(id);

  const userSchema = z.object({
    id: z.number().optional(),
    username: z
      .string()
      .min(3, { message: "The Username should include 3 characters" }),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    subscription: z.string({ invalid_type_error: "subscription is required" }),
    rights: z.string({ invalid_type_error: "rights is required" }),
    password: z.string(),
  });

  const { register, handleSubmit } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  type UserFormData = z.infer<typeof userSchema>;

  const onSubmit = async (data: UserFormData) => {
    try {
      // Validate the form data against the Zod schema
      data.id = id;
      // If validation succeeds, proceed with mutation
      await editUserMutation.mutateAsync(data);

      console.log(data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
        // Handle validation errors, display messages, etc.
      } else {
        console.error("Error creating item:", error);
      }
    }
  };

  const user = users.filter((user) => user.id == id);
  return (
    <>
      {user.map((user) => (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            <div className="m-2 ml-10 p-2 w-full font-medium border border-neutral-100 border-opacity-5">
              <p className="text-lg text-white">Profile details</p>
              <div className="grid grid-cols-2 ">
                <div className="mt-8 mr-2">
                  <p className="text-base text-white">Username</p>
                  <input
                    style={{ backgroundColor: "rgb(40, 42, 50)" }}
                    type="text"
                    {...register("username")}
                    placeholder={user.username}
                    className="w-full my-4 px-4 py-1 outline-none text-white transition duration-200 ease-in-out leading-[2.5] rounded "
                  />
                  <p className="text-base text-white">First Name</p>
                  <input
                    style={{ backgroundColor: "rgb(40, 42, 50)" }}
                    type="text"
                    {...register("firstName")}
                    placeholder={user.firstName}
                    className="w-full my-4 px-4 py-1 outline-none text-white transition duration-200 ease-in-out leading-[2.5] rounded "
                  />
                  <p className="text-base text-white">Subscription</p>
                  <div
                    className="flex w-full my-4"
                    style={{ backgroundColor: "rgb(40, 42, 50)" }}
                  >
                    <select
                      {...register("subscription")}
                      style={{ backgroundColor: "rgb(40, 42, 50)" }}
                      className="block w-full px-4 py-1 appearance-none rounded-md text-base text-gray-400 leading-[2.5] outline-none transition duration-200 ease-in-out"
                    >
                      <option>{user.subscription}</option>
                      <option>Basic</option>
                      <option>Free</option>
                      <option>Premium</option>
                      <option>Cinematic</option>
                    </select>
                    <FaSortDown color="#eab308" className="mt-3 mr-1 pr-1.5" />
                  </div>
                  <button
                    type="submit"
                    className="inline-block mx-2 my-4 rounded border-2 border-yellow-500 px-7 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
                  >
                    Save
                  </button>
                </div>
                <div className="mt-8 ml-2">
                  <p className="text-base text-white">Email</p>
                  <input
                    style={{ backgroundColor: "rgb(40, 42, 50)" }}
                    type="text"
                    {...register("email")}
                    placeholder={user.email}
                    className="w-full my-4 px-4 py-1 outline-none text-white transition duration-200 ease-in-out leading-[2.5] rounded "
                  />
                  <p className="text-base text-white">Last Name</p>
                  <input
                    style={{ backgroundColor: "rgb(40, 42, 50)" }}
                    type="text"
                    {...register("lastName")}
                    placeholder={user.lastName}
                    className="w-full my-4 px-4 py-1 outline-none text-white transition duration-200 ease-in-out leading-[2.5] rounded "
                  />
                  <p className="text-base text-white">Rights</p>
                  <div
                    className="flex w-full my-4"
                    style={{ backgroundColor: "rgb(40, 42, 50)" }}
                  >
                    <select
                      style={{ backgroundColor: "rgb(40, 42, 50)" }}
                      {...register("rights")}
                      className="block w-full px-4 py-1 appearance-none rounded-md text-base text-gray-400 leading-[2.5] outline-none transition duration-200 ease-in-out"
                    >
                      <option>User</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                    <FaSortDown color="#eab308" className="mt-3 mr-1 pr-1.5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="m-2 mr-8 p-2 w-full font-medium border border-neutral-100 border-opacity-5">
              <p className="text-lg text-white">Change Password</p>
              <div className="grid grid-cols-2 ">
                <div className="mt-8 mx-2">
                  <p className="text-base text-white">Old Password</p>
                  <input
                    style={{ backgroundColor: "rgb(40, 42, 50)" }}
                    type="password"
                    className="w-full my-4 px-4 py-1 outline-none text-white transition duration-200 ease-in-out leading-[2.5] rounded "
                  />
                  <p className="text-base text-white">Confirm New Password</p>
                  <input
                    style={{ backgroundColor: "rgb(40, 42, 50)" }}
                    {...register("password")}
                    type="password"
                    className="w-full my-4 px-4 py-1 outline-none text-white transition duration-200 ease-in-out leading-[2.5] rounded "
                  />
                  <button
                    type="submit"
                    className="inline-block mx-2 my-4 rounded border-2 border-yellow-500 px-7 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
                  >
                    Change
                  </button>
                </div>
                <div className="mt-8 mx-2">
                  <p className="text-base text-white">New Password</p>
                  <input
                    style={{ backgroundColor: "rgb(40, 42, 50)" }}
                    {...register("password")}
                    type="password"
                    className="w-full my-4 px-4 py-1 outline-none text-white transition duration-200 ease-in-out leading-[2.5] rounded "
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      ))}
    </>
  );
};

export default EditUserProfile;
