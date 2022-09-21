import ShopForAthlete from "./ShopForAthlete";
import ReactPlayer from "react-player";

const MediaContent = ({
  setFinderModalOpen,
}: {
  setFinderModalOpen: (param: boolean) => void;
}) => {
  return (
    <div className="p-4 bg-nero lg:py-8 lg:px-14">
      <div className="mt-4 space-x-0 xl:space-x-4 xl:flex">
        <div className="border rounded-[10px] p-2 lg:inline-block border-matterhorn-1 lg:w-[100vw]">
          <div className="object-contain w-full h-fit">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              controls={true}
              width="100%"
            />
          </div>
        </div>
        <ShopForAthlete setFinderModalOpen={setFinderModalOpen} />
      </div>
    </div>
  );
};

export default MediaContent;
