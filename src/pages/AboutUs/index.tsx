import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import OurStory from "../../components/AboutUs/OurStory";
import OurTeam from "../../components/AboutUs/OurTeam";
import VisionAndGoal from "../../components/AboutUs/VisionandGoal";
import Text from "../../components/shared/Text";

const AboutUs = () => {
  return (
    <div className="px-4 pt-8 lg:px-14">
      <Link
        to="/"
        className="flex items-center space-x-2 text-base font-semibold text-davyGrey"
      >
        <BiArrowBack size={24} />
        <Text>Continue Shopping</Text>
      </Link>
      <Text className="py-4 text-[46px] font-extrabold text-nero">About Us</Text>
      <OurStory />
      <VisionAndGoal />
      <OurTeam />
    </div>
  );
};

export default AboutUs;
