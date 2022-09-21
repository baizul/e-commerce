interface Props {
  setactiveTabIndex: (activeTabIndex: string) => void;
}

const WelcomePage = ({ setactiveTabIndex }: Props) => {
  return (
    <>
      <div className=" font-mulish py-20 mt-3 md:py-5 px-2 bg-center  sm:px-12 h-[75vh] sm:h-[85vh] mx-auto rounded-lg w-9/10 bg-playgroundImage ">
        <div className="flex flex-col justify-center px-8 text-center text-white bg-black rounded-lg mb-96 bg-opacity-70 md:px-10 md:mt-20">
          <div className="mb-4 text-xl font-bold text-center md:text-4xl sm:mx-auto mt-9">
            <h1 className="">Welcome, FirstName!</h1>
          </div>
          <div className="text-xs font-medium md:text-md">
            <p>
              Let’s finish setting up your account associated with email props
            </p>
          </div>
          <div className="my-4 font-medium text-xxs md:text-xs">
            <p>
              Finish setting up your account to get the most out of your
              AthleticEstate Membership.
            </p>
          </div>
          <div className="mx-auto text-base font-semibold text-center bg-red-700 rounded-sm mb-9">
            <button
              onClick={() => {
                setactiveTabIndex("accountSetup");
              }}
              className=" w-full px-4 py-1 md:px-8 md:py-2.5"
            >
              Set Up Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
