import "./RestaurantDetails.css";
import { useRestaurantDetails } from "../hooks/useRestaurantDetails";
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";

export default function RestaurantDetails() {
  const { id } = useParams();
  const { selectedRestaurant, loading } = useRestaurantDetails(id);

  console.log(selectedRestaurant);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (selectedRestaurant?.error) {
    return (
      <div className="restaurant-details-panel">
        Could not get details, bad restaurant ID
      </div>
    );
  }

  return (
    <div className="cell medium-6 large-4 small-12">
      <div className="restaurant-details-panel">
        <ul className="details-table">
          <li>
            <h1>{selectedRestaurant?.name}</h1>
          </li>
          <li className="categories">
            <span>| </span>
            {selectedRestaurant?.categories?.map(
              (category: Record<string, any>) => {
                return <span> {category.title} |</span>;
              }
            )}
          </li>
          <li className="list-item-wrapper">
            <h2>
              <strong>💸 Price:&nbsp;</strong>
            </h2>
            <h2> {selectedRestaurant?.price}</h2>
          </li>
          <li className="list-item-wrapper">
            <h2>
              <strong>⭐️ Rating:&nbsp;</strong>
            </h2>
            <h2>{selectedRestaurant?.rating}</h2>
          </li>
          <li>
            <h2>
              {selectedRestaurant?.is_closed
                ? "🙈 Currently Closed"
                : "✅ Currently Open"}
            </h2>
          </li>
          <li className="list-item-wrapper">
            <h2>
              <strong>☎️ Phone number:&nbsp;</strong>
            </h2>
            <h2>{selectedRestaurant?.phone}</h2>
          </li>
          <li>
            <h2>
              <strong>📍 Address:&nbsp;</strong>
            </h2>
            {selectedRestaurant?.location?.display_address?.map(
              (field: string) => {
                return <h3 className="address-field">{field}</h3>;
              }
            )}
          </li>
          {selectedRestaurant?.transactions && (
            <li className="list-item-wrapper">
              <h2>
                <strong>🚗 Available services:&nbsp;</strong>
              </h2>
              <h3>|&nbsp;</h3>
              {selectedRestaurant?.transactions?.map((t: string) => {
                return <h3>{t} |</h3>;
              })}
            </li>
          )}
          <li className="list-item-wrapper">
            <h2>
              <strong>👀 Review Count:&nbsp;</strong>
            </h2>
            <h2>{selectedRestaurant?.review_count}</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
