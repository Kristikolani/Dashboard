import { Toaster } from "react-hot-toast";
import CatalogTable from "../components/Catalog/CatalogTable";
import useItems from "../hooks/useItems";
import TablesFooter from "../components/TablesFooter";

const Catalog = () => {
  const { data, error } = useItems();
  console.error(data);

  if (error || !data) return null;
  else
    return (
      <div className="w-full">
        <CatalogTable items={data?.result} />
        <TablesFooter rows={data.result.length} total={data.count} />
        <Toaster />
      </div>
    );
};

export default Catalog;
