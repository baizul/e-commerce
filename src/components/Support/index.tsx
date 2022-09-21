import { SupportData } from "../../helpers/LandingPage";
import classNames from "classnames";
import Text from "../shared/Text";

const Support = () => {
  return (
    <>
      <section>
        <div className="h-auto max-w-screen-xl px-4 mx-auto mt-12 ">
          <div className="flex flex-wrap px-5 ">
            {SupportData.map(({ id, title, desc, image }) => (
              <div
                className={classNames(
                  "relative flex flex-row items-start justify-center w-full space-y-10  lg:!h-3/5 sm:w-1/2 lg:w-1/3 font-mulish",
                  id === "family"
                    ? "lg:relative lg:left-5"
                    : id === "fans"
                    ? "lg:relative lg:right-5"
                    : ""
                )}
                key={id}
              >
                <Text className="absolute font-extrabold uppercase text-matterhorn-2 opacity-10 text-7xl">
                  {title}
                </Text>

                <img className="md:h-5/6 lg:h-2/3 " src={image} alt="..." />
                <div className="absolute flex-col items-center justify-center w-9/12 h-auto px-5 py-2 mb-12 bg-black bg-opacity-75 bottom-10 lg:h-1/3 md:bg-opacity-70 rounded-xl">
                  <Text className="!text-xl font-bold text-white uppercase md:font-extrabold sm:text-5xl md:text-3xl font-mulish">
                    {title}
                  </Text>
                  <Text className="text-sm leading-6 text-white sm:text-base !lg:text-xl ">
                    {desc}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Support;
