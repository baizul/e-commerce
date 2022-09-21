import { SupportData } from "../../../helpers/ProductDetails/FanCam";
import classNames from "classnames";
import { Resources } from "../../../config/Resources";
import Text from "../../shared/Text";

const FanCam = () => {
  return (
    <section className="pt-10 overflow-hidden md:w-1/2 lg:pt-0">
      <div className="container flex flex-col px-2 lg:px-3">
        <Text className="mb-4 ml-4 font-extrabold ml-text-xl md:text-2xl text-nero">
          FAN CAM
        </Text>
        <div className="grid grid-cols-2 gap-5 px-4 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-end py-5 space-y-2 text-white bg-black rounded-lg lg:justify-center bg-opacity-70">
            <img
              src={Resources.images.ProductDetails.FanCam.fanCamera}
              alt="cam"
              className="hidden mt-auto lg:block"
            />
            <Text className="px-1 mt-auto mb-4 text-sm text-center lg:mb-6 lg:mt-0 lg:tracking-tighter">
              Upload
            </Text>
          </div>
          {SupportData.map((item: any, id) => (
            <div key={id}>
              <img
                alt="fanCam"
                className={classNames(
                  "block object-cover object-center w-full h-full "
                )}
                src={item.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FanCam;
