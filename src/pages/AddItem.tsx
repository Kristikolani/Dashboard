import { Toaster } from "react-hot-toast";
import AddItemForm from "../components/AddItemForm";

const AddItem = () => {
  return (
    <>
      <p className="text-white text-2xl m-1">Add new item</p>;
      <hr className=" h-0.5 border-t-0 bg-neutral-100 opacity-5" />
      <AddItemForm />
      <Toaster />
    </>
  );
};

export default AddItem;
