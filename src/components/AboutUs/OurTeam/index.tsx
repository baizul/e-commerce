import { Resources } from "../../../config/Resources";
import { ourTeamData } from "../../../helpers/AboutUs";
import Text from "../../shared/Text";

const OurTeam = () => {
  return (
    <section className="pt-10">
      <Text className="pt-2 pb-4 text-4xl font-black lg:text-8xl text-davyGrey opacity-10">
        MEET OUR TEAM
      </Text>
      <div className="grid grid-cols-1 pt-8 pb-40 lg:grid-cols-3 gap-9">
        {ourTeamData.map(({ id, title, description, designation }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center pt-10 pb-8 border border-solid rounded-md lg:pb-12 lg:pt-20 border-whiteSmoke shadow-base space-y-9"
          >
            <img src={Resources.images.AboutUs.team[id]} alt={id} />
            <Text className="text-2xl font-medium lg:text-3xl text-nero">
              {title}
            </Text>
            <Text className="px-6 text-sm font-normal text-center">
              {description}
            </Text>
            <Text className="text-sm font-bold lg:text-xl">{designation}</Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
