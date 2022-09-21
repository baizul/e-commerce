import { Button } from "@mui/material";

interface Props {
  setFinderModalOpen: (val: boolean) => void;
  formik: any;
}

const CancelAndFind = ({ formik, setFinderModalOpen }: Props) => {
  return (
    <>
      <div className="flex w-full pt-24 mx-auto space-x-2 lg:w-7/12 lg:bottom-12">
        <Button
          variant="text"
          color="secondary"
          className="!text-base !font-semibold flex-auto w-2/5 h-10 !text-matterhorn-1"
          onClick={() => setFinderModalOpen(false)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          disabled={
            formik.isValid === false || formik.initialValues === formik.values
          }
          onClick={formik.handleSubmit}
          color="primary"
          className="!text-base !font-semibold flex-auto w-2/4 h-10"
        >
          Find
        </Button>
      </div>
    </>
  );
};

export default CancelAndFind;
