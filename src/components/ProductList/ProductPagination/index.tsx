import { Pagination, PaginationItem } from "@mui/material";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
  size: "small" | "medium" | "large";
  handleChangePage?: (value: Number) => void;
  count?:number;
}

const ProductPagination = ({ size, count, handleChangePage }: Props) => {
  return (
    <Pagination
      count={count}
      onChange={(event: React.ChangeEvent<unknown>, page: number) =>{handleChangePage(page)}}
      size={size}
      className="flex justify-center py-10"
      renderItem={(item) => (
          <PaginationItem
            classes={{
              selected:
                "!bg-transparent text !underline-offset-1 !text-crimson",
              text: "!font-semibold !font-eclipse",
            }}
            components={{
              previous: IoChevronBackOutline,
              next: IoChevronForwardOutline,
            }}
            {...item}
          />
      )}
    />
  );
};

export default ProductPagination;
