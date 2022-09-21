import { Box, Button, Modal, Rating, TextField } from "@mui/material";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import Text from "../../shared/Text";

interface Props {
  isOpen: boolean;
  setisOpen: (val: boolean) => void;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 2,
  borderRadius: 1,
};
const AddReview = ({ isOpen, setisOpen }: Props) => {
  const [review, setReview] = useState({
    rating: 0,
    title: "",
    name: "",
    description: "",
  });
  const [isSubmitted, setisSubmitted] = useState(false);
  return (
    <Modal open={isOpen}>
      <Box sx={{ ...style, width: { xs: 350, lg: 650 } }}>
        {isSubmitted ? (
          <div className="flex items-center justify-center h-[75vh] flex-col space-y-4">
            <div className="flex items-center justify-center p-4 rounded-full bg-crimson">
              <BsCheckLg className="text-white" />
            </div>
            <Text className="!font-bold !text-3xl">Review Submitted</Text>
            <Text className="!font-medium !text-xl lg:px-32 px-2 !text-center">
              Thank you for taking the time to leave a review for this product.
            </Text>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <Text className="!font-extrabold !text-xl">ADD REVIEW</Text>
              <AiOutlineClose
                className="text-3xl cursor-pointer"
                onClick={() => setisOpen(false)}
              />
            </div>
            <Text className="!font-medium !text-base !mt-7">Star Rating</Text>
            <Rating
              size="large"
              precision={0.5}
              className="!mt-3"
              onChange={(event, value) =>
                setReview({ ...review, rating: value || 0 })
              }
            />
            <Text className="!font-medium !text-base !mt-7">Your Review</Text>
            <form>
              <div className="flex flex-col my-3 space-x-0 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
                <TextField
                  fullWidth
                  size="small"
                  label="Review title"
                  onChange={(event) => {
                    setReview({ ...review, title: event.target.value || "" });
                  }}
                />
                <TextField
                  fullWidth
                  size="small"
                  label="First name or nickname"
                  onChange={(event) => {
                    setReview({ ...review, name: event.target.value || "" });
                  }}
                />
              </div>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="A brief review of this product"
                onChange={(event) => {
                  setReview({
                    ...review,
                    description: event.target.value || "",
                  });
                }}
              />
            </form>
            <div className="flex items-center justify-end space-x-6 mt-7">
              <Text
                className="!font-medium !text-base !text-matterhorn-2 !cursor-pointer"
                onClick={() => setisOpen(false)}
              >
                Cancel
              </Text>
              <Button
                onClick={() => {
                  setisSubmitted(true);
                  setTimeout(() => {
                    setisOpen(false);
                    setisSubmitted(false);
                    setReview({
                      title: "",
                      rating: 0,
                      description: "",
                      name: "",
                    });
                  }, 2000);
                }}
                variant="contained"
                className="!normal-case !w-40"
                disabled={
                  review.rating &&
                  review.title &&
                  review.description &&
                  review.name
                    ? false
                    : true
                }
              >
                {review.rating &&
                review.title &&
                review.description &&
                review.name
                  ? "Submit"
                  : "Enter a Review"}
              </Button>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default AddReview;
