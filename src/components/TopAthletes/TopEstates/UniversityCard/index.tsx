import CircularCard from "../CircularCard";
import { useMediaQuery } from "react-responsive";
import Text from "../../../shared/Text";

interface Props {
  id: number;
  index: number;
  name: string;
  sport: string;
  duration: string;
  playerInformation: { name: string; image: string }[];
}

const UniversityCard = (props: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  var imagesLength = isDesktop ? 5 : 4;
  return (
    <div className="w-full flex flex-col md:h-80 lg:flex-row bg-white hover:bg-whiteSmoke mb-[0.6rem] h-[13.9rem] lg:h-[8.68rem] shadow-product justify-center m-auto items-center">
      <div className="flex w-full lg:w-[47%] lg:items-center relative bottom-[0.4rem] lg:top-0 lg:mt-auto lg:mb-auto">
        <div className="lg:relative lg:bottom-[0.5rem] ml-[1.1rem] mr-2 md:ml-12 md:mr-12 lg:ml-[3%] lg:mr-[4%] md:mt-[0.85rem] mt-[0.1%] lg:my-auto">
          <Text className="md:relative md:top-[0.3rem] h-7 w-7 md:h-9 md:w-9 lg:h-[2.1rem] lg:w-[2.1rem] text-[0.65rem] md:text-base lg:!text-base flex items-center justify-center font-extrabold text-white rounded-full font-mulish bg-eclipse-1">
            {props.index + 1}
          </Text>
        </div>
        <div className="bg-crimson relative lg:mr-[6%] left-[0.4rem] bottom-[0.21rem] mt-[2%] mr-[7%] md:mr-[3.1rem] h-[2.45rem] lg:h-[3.35rem] lg:w-[3.1rem] lg:my-auto w-8 md:h-[3.3rem] md:w-[2.8rem] skew-x-[-20deg] lg:skew-x-[-15deg] flex justify-center items-center">
          <Text className="text-white skew-x-[20deg] lg:skew-x-[15deg] font-mulish font-extrabold text-xs md:text-base lg:text-xl">
            {props.id}
          </Text>
        </div>
        <div className="md:relative md:top-[1.1rem] lg:-top-[0.1rem] flex flex-col w-[58%] md:w-[62%] lg:my-auto">
          <Text className="text-nero md:text-3.75xl md:relative md:bottom-[0.1rem] lg:bottom-0 text-0.5xl lg:text-xl font-extrabold font-mulish leading-6">
            {props.name}
          </Text>
          <span className="flex items-center">
            <Text className="text-tiny md:text-0.5xl lg:text-sm font-mulish font-medium text-eclipse">
              {props.sport}
            </Text>
            <Text className="h-1 w-1 ml-[0.4rem] mr-1 bg-black rounded-full">
              {null}
            </Text>
            <Text className="text-tiny md:text-0.5xl lg:text-sm font-mulish font-medium text-eclipse">
              {props.duration}
            </Text>
          </span>
        </div>
      </div>
      <div className="flex justify-center w-full lg:w-6.25/12 lg:mr-6">
        {props.playerInformation
          .slice(0, imagesLength)
          .map(({ name, image }) => (
            <CircularCard name={name} image={image} />
          ))}
      </div>
    </div>
  );
};

export default UniversityCard;
