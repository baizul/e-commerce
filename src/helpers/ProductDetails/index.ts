import { Resources } from "../../config/Resources";

export const ProductDetails = {
  AthleteDetails: {
    name: "Michael Jordan",
    number: "#23",
    sport: "Basketball",
    school: "University of North Carolina",
    profileImage: Resources.images.ProductDetails.AthleteProfile,
  },
  AthleticEstateDetails: {
    id: "1",
    profile: Resources.images.ProductDetails.GedDoughton,
    name: "Ged Doughton",
    TimeOfPlay: "1974-1975",
  },
};

export const ProductSliderImages = [
  Resources.images.ProductDetails.ProductImage,
  Resources.images.ProductDetails.ProductImage,
  Resources.images.ProductDetails.ProductImage,
  Resources.images.ProductDetails.ProductImage,
  Resources.images.ProductDetails.ProductImage,
  Resources.images.ProductDetails.ProductImage,
  Resources.images.ProductDetails.ProductImage,
  Resources.images.ProductDetails.ProductImage,
];

export const AthleteDetailsKeys = ["Name", "Number", "Sport", "School"];

export const accessoriesBackground = Resources.images.ProductDetails.image.backgroundImage;
