import useItems from "../../hooks/useItems";
import useReviews from "../../hooks/useReviews";
import useUsers from "../../hooks/useUsers";
import Statistics from "./Statistics";
import Tables from "./Tables";

const ItemsGrid = () => {
  const { data: itemsData, error: itemsError } = useItems();
  const { data: usersData, error: usersError } = useUsers();
  const { data: reviewsData, error: reviewsError } = useReviews();

  console.error(itemsError, usersError, reviewsError);
  if (
    itemsError ||
    !itemsData ||
    usersError ||
    !usersData ||
    reviewsError ||
    !reviewsData
  )
    return null;
  else
    return (
      <>
        <Statistics />
        <Tables
          items={itemsData?.result}
          users={usersData?.result}
          reviews={reviewsData?.result}
        />
      </>
    );
};

export default ItemsGrid;
