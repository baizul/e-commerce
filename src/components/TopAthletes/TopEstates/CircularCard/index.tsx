import Text from "../../../shared/Text";
interface Props {
  name: string;
  image: string;
}

const CircularCard = (props: Props) => {
  return (
    <div className="w-[23%] lg:relative lg:h-[9.2rem] lg:w-[9.2rem] lg:top-2">
      <img src={props.image} alt="player 1" className="md:mx-auto md:w-full lg:w-auto"/>
      <div className="lg:bg-nero md:relative md:bottom-[5%] md:w-6/12 md:mx-auto lg:w-[70%] lg:skew-x-[-20deg] lg:absolute lg:left-[0.9rem] lg:bottom-8 lg:py-[0.1rem]">
      <Text className="w-6/12 md:text-[1.2rem] md:leading-[1.2rem] lg:w-full lg:skew-x-[20deg] leading-3 text-center m-auto text-[0.625rem] font-mulish font-extrabold text-black lg:text-white lg:text-[0.55rem] lg:font-mulish lg:font-extrabold flex justify-center items-center">
        {props.name}
      </Text>
      </div>
    </div>
  );
};

export default CircularCard;
