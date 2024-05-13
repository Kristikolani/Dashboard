import { FaSortDown } from "react-icons/fa";
import { IoIosFilm, IoIosImages } from "react-icons/io";
import Dropzone from "react-dropzone";
import useCreateItems from "../hooks/useCreateItem";
import { z, ZodError } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import toast from "react-hot-toast";
import { useState } from "react";

const AddItemForm = () => {
  const createItemsMutation = useCreateItems();

  const itemSchema = z.object({
    title: z
      .string()
      .min(3, { message: "The title should include 3 characters" }),
    description: z.string().optional(),
    releaseYear: z.number({ invalid_type_error: "release year is required" }),
    runningTime: z.number().min(0),
    quality: z.string({ invalid_type_error: "quality is required" }),
    rating: z.number().min(0),
    countries: z.string({ invalid_type_error: "countries is required" }),
    genres: z.array(z.string()).optional(),
    cover: z.string({ invalid_type_error: "cover is required" }),
    photos: z.array(z.string()).optional(),
    video: z.string().optional(),
    link: z.string().optional(),
    category: z.string({ invalid_type_error: " year is required" }),
  });

  const { register, setValue, handleSubmit } = useForm<ItemFormData>({
    resolver: zodResolver(itemSchema),
  });

  type ItemFormData = z.infer<typeof itemSchema>;

  const onSubmit = async (data: ItemFormData) => {
    try {
      // If validation succeeds, proceed with mutation

      await createItemsMutation.mutateAsync(data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
        toast.error("Validation error:" + error.errors);
        // Handle validation errors, display messages, etc.
      } else {
        console.error("Error creating item:", error);
        toast.error("Error creating item.");
      }
    }
  };

  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const [acceptedPhotos, setAcceptedPhotos] = useState<File[]>([]);

  const onDropCover = (acceptedFiles: File[]) => {
    // Handle the dropped files
    const droppedFile = acceptedFiles[0];
    setAcceptedFiles(acceptedFiles);
    // Update state or value of 'cover' field
    setValue("cover", droppedFile ? droppedFile.name : ""); // Update the 'cover' field value
  };

  const onDropPhotos = (acceptedFiles: File[]) => {
    // Handle the dropped files
    const droppedFiles = acceptedFiles.map((file) => file.name);
    setAcceptedPhotos(acceptedFiles);
    // Update state or value of 'cover' field
    setValue("photos", droppedFiles); // Update the 'cover' field value
  };

  const handleChange = (selectedOptions: any) => {
    const selectedGenres = selectedOptions?.map((option: any) => option.value);
    setValue("genres", selectedGenres);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border rounded overflow-hidden border-white border-opacity-5 mx-2 my-5">
        <div className="flex w-full">
          <Dropzone onDrop={onDropCover}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div
                    style={{ backgroundColor: "rgb(40, 42, 50)" }}
                    className="block flex-none rounded-lg w-[270px] h-[400px] m-4  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                  >
                    {acceptedFiles.length > 0 ? (
                      <img src={"/public/images/" + acceptedFiles[0].name} />
                    ) : (
                      <p className="text-gray-400 text-sm flex items-center justify-center h-full">
                        Upload cover (270 x 400)
                      </p>
                    )}
                  </div>
                </div>
              </section>
            )}
          </Dropzone>

          <div className="w-full">
            <input
              type="text"
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
              className="w-full rounded m-4 px-3 py-4 text-white text-base font-normal outline-none transition duration-200 ease-in-out"
              {...register("title")}
              placeholder="Title"
              // ... other attributes
            />
            <textarea
              {...register("description")}
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
              className="w-full h-32 rounded m-4 px-3 py-[0.25rem] text-white text-base font-normal outline-none transition duration-200 ease-in-out"
              placeholder="Description"
            />
            <div className="flex w-full py-2">
              <input
                type="number"
                {...register("releaseYear", { valueAsNumber: true })}
                style={{ backgroundColor: "rgb(40, 42, 50)" }}
                className="w-full ml-4 rounded mr-2 px-3 py-[0.25rem] text-white text-base font-normal leading-[1.5] outline-none transition duration-200 ease-in-out"
                placeholder="Release year"
              />
              <input
                type="number"
                {...register("runningTime", { valueAsNumber: true })}
                style={{ backgroundColor: "rgb(40, 42, 50)" }}
                className="w-full ml-2 mr-3 rounded px-3 py-[0.25rem] text-white text-base font-normal leading-[1.5] outline-none transition duration-200 ease-in-out"
                placeholder="Running time in minutes"
              />
              <div
                className="flex w-full ml-3 mr-2"
                style={{ backgroundColor: "rgb(40, 42, 50)" }}
              >
                <select
                  {...register("quality")}
                  style={{ backgroundColor: "rgb(40, 42, 50)" }}
                  className="block w-full px-4 py-2  appearance-none rounded-md text-base text-gray-400 leading-[1.5] outline-none transition duration-200 ease-in-out"
                >
                  <option selected disabled>
                    Choose quality
                  </option>
                  <option value="Ultra HD">Ultra HD</option>
                  <option value="HD 1080">HD 1080</option>
                  <option value="HD 720">HD 720</option>
                </select>
                <FaSortDown color="#eab308" className="mt-2 pr-1.5" />
              </div>
              <input
                type="number"
                step="0.1"
                min="0"
                max="10"
                {...register("rating", { valueAsNumber: true })}
                style={{ backgroundColor: "rgb(40, 42, 50)" }}
                className="rounded px-3 py-[0.25rem] text-white text-base font-normal leading-[1.5] outline-none transition duration-200 ease-in-out"
                placeholder="Rating"
              />
            </div>
            <div className="flex w-full my-4">
              <input
                type="text"
                {...register("countries")}
                style={{ backgroundColor: "rgb(40, 42, 50)" }}
                className="w-full ml-4 mx-3 rounded px-3 py-[0.25rem] text-white text-base font-normal leading-[2] outline-none transition duration-200 ease-in-out"
                placeholder="Choose country/countries"
              />
              <div
                className="flex w-full ml-3 mr-2"
                style={{ backgroundColor: "rgb(40, 42, 50)" }}
              >
                <Select
                  styles={{
                    // Use styles instead of style
                    control: (provided, state) => ({
                      ...provided,
                      backgroundColor: "rgb(40, 42, 50)", // Replace with your desired background color
                      border: "none", // Remove border
                      boxShadow: "none", // Remove box shadow
                    }),
                  }}
                  className="block w-full px-4 py-2 border-0 outline-none appearance-none rounded-md text-base text-gray-400 leading-[1.5] transition duration-200 ease-in-out"
                  {...register("genres")}
                  isMulti
                  options={[
                    { value: "Action", label: "Action" },
                    { value: "Drama", label: "Drama" },
                    { value: "Comedy", label: "Comedy" },
                    { value: "Triller", label: "Triller" },
                    { value: "Romance", label: "Romance" },
                    { value: "Music", label: "Music" },
                  ]}
                  onChange={handleChange}
                  placeholder="Select genres"
                />
              </div>
            </div>
            <Dropzone onDrop={onDropPhotos}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div
                      className="flex rounded ml-4 my-4 px-3 py-[0.25rem] text-white text-base font-normal leading-[2.5]"
                      style={{ backgroundColor: "rgb(40, 42, 50)" }}
                    >
                      <input
                        style={{ backgroundColor: "rgb(40, 42, 50)" }}
                        className="w-full outline-none transition duration-200 ease-in-out"
                        placeholder="Upload photos "
                      />
                      <IoIosImages color="white" className="mt-1 w-6 h-6" />
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
        </div>
        <div className="flex m-4 text-gray-300 text-xl">
          Item type:
          <input
            type="radio"
            className="flex hover:text-white mx-2"
            value="Movie"
            {...register("category")}
          />
          Movie
          <input
            type="radio"
            className="flex hover:text-white mx-2"
            value="TV Show"
            {...register("category")}
          />
          TV Series
          <input
            type="radio"
            className="flex hover:text-white mx-2"
            value="Cartoon"
            {...register("category")}
          />
          Cartoons
        </div>
        <div
          className="flex rounded ml-4 my-2 px-3 py-[0.25rem] text-white text-base font-normal leading-[2.5]"
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
        >
          <input
            {...register("video")}
            style={{ backgroundColor: "rgb(40, 42, 50)" }}
            className="w-full outline-none transition duration-200 ease-in-out"
            placeholder="Upload video "
          />
          <IoIosFilm color="white" className="mt-1 w-6 h-6" />
        </div>
        <input
          type="url"
          {...register("link")}
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="w-full ml-4 my-2 rounded px-3 py-[0.25rem] text-white text-base font-normal leading-[2.5] outline-none transition duration-200 ease-in-out"
          placeholder="Or add a link"
        />
        <button
          type="submit"
          className="inline-block ml-4 my-2 w-28 rounded border-2 border-yellow-500 px-7 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
        >
          Publish
        </button>
      </div>
    </form>
  );
};

export default AddItemForm;
