import PropTypes from "prop-types";
import commentorIcon from "../../../assets/avatar.png";
import { formatDate } from "../../../utils/formatDate";
import RatingStars from "../../../components/RatingStars";
import { useState } from "react";
import PostAReview from "./PostAReview";

const ReviewCards = ({ productReviews }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reviews = productReviews || [];
  const handleOpenReviewModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setIsModalOpen(false);
  };
  const handlePost = () => {
    console.log("post");
  };

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
                      <p className="text-[12px] italic">
                        {formatDate(review?.createdAt)}
                      </p>
                      <RatingStars rating={review?.rating} />
                    </div>
                  </div>
                  <div className="text-gray-600 mt-5 border p-8">
                    <div className="md:w-4/5">{review?.comment}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No reviews yet!</p>
        )}
      </div>
      <div className="mt-12">
        <button
          onClick={handleOpenReviewModal}
          className="px-6 py-3 bg-primary text-white rounded-md"
        >
          Add a review
        </button>
      </div>

      <PostAReview
        isModalOpen={isModalOpen}
        handleClose={handleCloseReviewModal}
        handlePost={handlePost}
      />
    </div>
  );
};

// Define prop types
ReviewCards.propTypes = {
  productReviews: PropTypes.arrayOf(PropTypes.object),
};

export default ReviewCards;
