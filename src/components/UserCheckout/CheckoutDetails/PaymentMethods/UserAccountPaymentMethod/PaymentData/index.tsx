import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { shallowEqual } from "react-redux";
import { useSelector } from "react-redux";
import { IReducer } from "../../../../../../redux/Reducers";
import { getCreditCardDetails } from "../../../../../../services/Account";
import Text from "../../../../../shared/Text";

const PaymentData = () => {
  const { save_payment_details } = useSelector((state: IReducer) => state);
  const [isAdding, setIsAdding] = useState(false);
  const [creditCardsData, setCreditCardData] = useState([]);
  const userClientId = useSelector(
    (state: IReducer) => state.user_data.id,
    shallowEqual
  );

  useQuery(
    ["uniqueCreditCardKey", userClientId],
    () => getCreditCardDetails(userClientId),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (res) => {
        setCreditCardData(res?.data);
      },
      onError: ({ message }) => {
        console.log(message);
      },
    }
  );
  return (
    <div>
      {isAdding || creditCardsData?.length === 0 ? (
      <></>
      ) : (
        creditCardsData.length > 0 && (
          <>
            <div className="w-full lg:w-7/10">
              <Text className="font-normal lg:font-extrabold text-md lg:text-2xl">
                Saved Credit Card
              </Text>
            </div>
            <div className="mt-2 mr-9">
              <IconButton
                onClick={() => setIsAdding(true)}
                className="!text-tiny !text-black !font-normal !p-0"
              >
                <Add />
                Add Card
              </IconButton>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default PaymentData;
