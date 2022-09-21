import CloseIcon from "@mui/icons-material/Close";
import AthleteFinderForm from "./FinderForm";
import CancelAndFind from "./CancelAndFind";
import CustomModal from "../shared/CustomModal";
import { useFormik } from "formik";
import {
  initialValues,
  validateSchema,
} from "../../helpers/AthleteFinderModal";
import Text from "../shared/Text";
import { useNavigate } from "react-router-dom";

type Props = {
  finderModalOpen: boolean;
  setFinderModalOpen: (finderModalOpen: boolean) => void;
};

const AthleteFinderModal = ({ finderModalOpen, setFinderModalOpen }: Props) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      navigate("/product-details");
      setFinderModalOpen(false);
    },
    validationSchema: validateSchema,
  });

  return (
    <div>
      <CustomModal
        open={finderModalOpen}
        onClose={() => setFinderModalOpen(false)}
        classToOverride="bg-white"
      >
        <div className="p-4 m-auto">
          <div className="flex justify-between align-middle">
            <Text className="text-xl font-extrabold color-eclipse">
              Find
            </Text>
            <div
              className="text-xs cursor-pointer"
              onClick={() => setFinderModalOpen(!finderModalOpen)}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="lg:w-[70%] lg:mx-auto">
            <Text className="mb-6 text-xl font-medium leading-6 text-center mt-9 text-matterhorn lg:mx-10">
              Complete the following fields to find your player!
            </Text>

            <AthleteFinderForm formik={formik} />
          </div>
          <CancelAndFind
            setFinderModalOpen={setFinderModalOpen}
            formik={formik}
          />
        </div>
      </CustomModal>
    </div>
  );
};

export default AthleteFinderModal;
