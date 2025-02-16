import PropTypes from "prop-types";
import commentorIcon from "../../../assets/avatar.png";
import { formatDate } from "../../../utils/formatDate";
import RatingStars from "../../../components/RatingStars";

const ReviewCards = ({ productReviews }) => {
  const reviews = productReviews || [];
  console.log(productReviews);

  return (
    <div className="my-6 bg-white p-8">
      <div>
        {reviews.length > 0 ? (
          <div>
            <h3 className="text-lg font-medium">All comment...</h3>
            <div>
              {reviews.map((review, index) => (
                <div key={index} className="mt-4">
                  <div className="flex gap-4 items-center">
                    <img
                      src={commentorIcon}
                      alt="Reviewer"
                      className="size-14"
                    />
                    <div className="space-y-1">
                      <p className="text-lg font-medium underline capitalize underline-offset-4 text-blue-400">
                        {review?.userId?.username}
                      </p>
                      <p className="text-[12px] italic">{formatDate(review?.createdAt)}</p>
                      <RatingStars rating={review?.rating} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No reviews yet!</p>
        )}
      </div>
    </div>
  );
};

// Define prop types
ReviewCards.propTypes = {
  productReviews: PropTypes.arrayOf(PropTypes.object),
};

export default ReviewCards;
