import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { ProductListData } from "../../mockData/ProductList";
import ProductFilterDrawer from "../../components/ProductList/ProductFilterDrawer";
import classNames from "classnames";
import ProductCardList from "../../components/ProductList/ProductCardList";
import TopFilter from "../../components/ProductList/TopFilter";
import ProductPagination from "../../components/ProductList/ProductPagination";
import { Resources } from "../../config/Resources";
import Text from "../../components/shared/Text";

const ProductList = () => {
  const [filter, setFilter] = useState("1");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [Filters, setFilters] = useState({});

  return (
    <>
      <ProductFilterDrawer
        Filters={Filters}
        setFilters={setFilters}
        isFilterActive={isFilterActive}
        setIsFilterActive={setIsFilterActive}
      />
      <div
        className={`px-4 lg:px-14 w-full lg:transition-width ${
          isFilterActive ? "lg:w-3/4" : "lg:w-full"
        } ml-auto`}
      >
        <TopFilter filter={filter} setFilter={setFilter} />
        <div className="flex items-center pt-5 space-x-2 font-mulish">
          <div
            className="cursor-pointer"
            onClick={() => setIsFilterActive(!isFilterActive)}
          >
            {!isFilterActive && <IoFilterOutline size={22} />}
          </div>
          <Text className="text-xl font-extrabold lg:text-4xl">Shop Jerseys</Text>
          <Text className="font-medium">(999)</Text>
        </div>
        {Object.values(Filters).length === 4 ? (
          <div className="h-screen pl-2">
            <Text className="pt-5">No results found for “23 basketball jersey”</Text>
            <div className="flex justify-center">
              <img
                src={Resources.images.productList.notFoundLogo}
                alt="notFound"
              />
            </div>
          </div>
        ) : (
          <>
            <div
              className={classNames(
                "grid grid-cols-2 gap-4 pt-5 font-mulish",
                isFilterActive ? "lg:grid-cols-3" : "lg:grid-cols-4"
              )}
            >
              {[...Array(8)].map((_) =>
                ProductListData.map(
                  ({
                    id,
                    product_image,
                    priceOffered,
                    initialPrice,
                    offer,
                  }) => (
                    <ProductCardList
                      key={id}
                      product_image={product_image}
                      priceOffered={priceOffered}
                      initialPrice={initialPrice}
                      offer={offer}
                    />
                  )
                )
              )}
            </div>
            <ProductPagination size="medium" />
          </>
        )}
      </div>
    </>
  );
};

export default ProductList;
