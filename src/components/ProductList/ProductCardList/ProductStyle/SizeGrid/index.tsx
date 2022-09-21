type Props = {
  options: any;
  setAppliedFilters: (appliedFilters: any) => void;
  appliedFilters: any;
  classToOverride?: string;
};

const SizeGrid = ({
  options,
  classToOverride,
  appliedFilters,
  setAppliedFilters,
}: Props) => {
  const handleSelect = (data: any) => {
    setAppliedFilters(data.id);
  };
  const handleRemove = () => {
    setAppliedFilters("");
  };
  return (
    <div
      className={`grid grid-cols-5 gap-1 px-1 mx-2 my-6 mt-4 ${classToOverride}`}
    >
      {options.map((data: any) => {
        return (
          <div
            onClick={() => {
              appliedFilters === data.id ? handleRemove() : handleSelect(data);
            }}
            className={`p-2 mt-1 rounded h-8.5 w-10 text-sm text-center ${
              appliedFilters === data.id
                ? "text-whiteSmoke bg-eclipse-1"
                : "text-ellipsis opacity-60 bg-whiteSmoke"
            }`}
            key={data.id}
          >
            {data.Label}
          </div>
        );
      })}
    </div>
  );
};

export default SizeGrid;
