import { aboutusData } from "../../../helpers/AboutUs";
import Text from "../../shared/Text";

const VisionAndGoal = () => {
  return (
    <section>
      {aboutusData.map(({ id, title, para1, para2 }) => (
        <div key={id} className="pt-10">
          <Text className="pb-3 text-4xl font-black lg:text-8xl text-davyGrey opacity-10">
            {title}
          </Text>
          <div className="space-y-2 text-xs font-semibold leading-4 text-justify lg:leading-6 lg:text-lg">
            <Text>{para1}</Text>
            <Text>{para2}</Text>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VisionAndGoal;
