import { useSearchParams } from "react-router-dom";

export const usePagination = (numberPages: number) => {
  const [params, setSearchParams] = useSearchParams();

  const currentPage: number = parseInt(params?.get("page") as string) || 1;

  const pageNumbers = [...Array(numberPages + 1).keys()].slice(1);

  const handlePrevPage = (): void => {
    if (currentPage !== 1)
      setSearchParams((prev: URLSearchParams) => {
        prev.set("page", (currentPage - 1).toString());
        return prev;
      });
  };

  const handleNextPage = (): void => {
    if (currentPage !== numberPages)
      setSearchParams((prev: URLSearchParams) => {
        prev.set("page", (currentPage + 1).toString());
        return prev;
      });
  };

  return {
    pageNumbers,
    currentPage,
    setSearchParams,
    handlePrevPage,
    handleNextPage,
  };
};
