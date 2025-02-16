import { Link, useParams } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";
import { useDispatch } from "react-redux";
import { useFetchProductByIdQuery } from "../../../redux/feature/products/productsApi";
import { addToCart } from "../../../redux/feature/cart/cartSlice";
import ReviewCards from "../reviews/ReviewCards";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchProductByIdQuery(id);

  const singleProduct = data?.product || {};
  const productReviews = data?.reviews || {};

  if (isLoading) return <p>Loading ....</p>;
  if (error) return <p>Error loading product details</p>;

  const handleAddToCard = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Single Product Pages</h2>
        <div className="section__subheader space-x-2">
          <span className="hover:text-primary">
            <Link to="/">home</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">
            <Link to="/shop">shop</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">{singleProduct.name}</span>
        </div>
      </section>
      <section className="section__container mt-8">
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="md:w-1/2 w-full">
            <img
              src={singleProduct?.image}
              alt=""
              className="rounded-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">
              {singleProduct?.name}
            </h3>
            <p className="text-xl text-primary mb-4 space-x-1">
              ${singleProduct?.price}{" "}
              {singleProduct?.oldPrice && (
                <s className="ml-1">${singleProduct?.oldPrice}</s>
              )}
            </p>
            <p className="text-gray-400 mb-4">{singleProduct?.description}</p>
            {/*additional product info*/}
            <div className="flex flex-col space-y-2">
              <p>
                <strong>Category:</strong>
                {singleProduct?.category}
              </p>
              <p>
                <strong>Color:</strong>
                {singleProduct?.color}
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating:</strong>
                <RatingStars rating={singleProduct?.rating} />
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCard(singleProduct);
              }}
              className="mt-6 px-6 py-3 bg-primary text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      {/*display Reviews*/}
      <section className="section__container mt-8">
        <ReviewCards productReviews={productReviews} />
      </section>
    </>
  );
};

export default SingleProduct;
