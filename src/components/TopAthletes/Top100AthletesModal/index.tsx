import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Resources } from "../../../config/Resources";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Text from "../../shared/Text";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

type Props = {
  modalOpen: boolean;
  handleModal: (data: boolean) => void;
};

const Top100AthletesModal = ({ modalOpen, handleModal }: Props) => {
  return (
    <Box className="flex flex-col my-5 overflow-auto rounded md:my-5 sm:w-7/12 lg:w-[65%] h-[90%] md:h-[50%] lg:h-[90%] mx-auto md:flex-row xl:w-[70%] md:w-[90%] xl:h-[85%] 2xl:h-[90%] 2xl:w-[60%] secondary-scroll px-3">
      <div className="relative w-full h-full">
        <IconButton
          aria-label="delete"
          className="!absolute visible !text-xs !cursor-pointer !top-2 !right-2 !md:float-right md:invisible"
          onClick={() => handleModal(false)}
        >
          <CloseIcon className="w-20 h-20 text-white bg-black bg-opacity-50" />
        </IconButton>
        <img
          src={Resources.images.TopAthletes.CoryJames}
          alt="cory james"
          className="w-full h-full"
        />

        <div className="absolute bottom-0 w-full h-32 pt-4 text-center text-white bg-black bg-opacity-50">
          <Text className="text-2xl font-extrabold ">CORY JAMES</Text>
          <Text className="my-1 text-xl font-medium">#17</Text>
          <div className="flex justify-center space-x-4 ">
            <a href="/">
              <AiFillFacebook size={28} />
            </a>
            <a href="/">
              <AiFillInstagram size={28} />
            </a>
            <a href="/">
              <AiFillLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white ">
        <IconButton
          aria-label="delete"
          className="invisible mr-2 text-xs cursor-pointer md:mt-2 top-2 right-2 md:float-right md:visible"
          onClick={() => handleModal(false)}
        >
          <CloseIcon />
        </IconButton>
        <Text className="mx-3 my-2 mb-4 text-2xl font-extrabold md:mt-12 md:text-4xl">
          Cory's Bio
        </Text>
        <div className="mx-1 overflow-auto h-5/6 md:h-4/6 secondary-scroll">
          <Text className="h-full mx-2 text-sm font-normal">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur
          </Text>
        </div>
      </div>
    </Box>
  );
};

export default Top100AthletesModal;
