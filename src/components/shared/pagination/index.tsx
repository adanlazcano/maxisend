import styles from "./styles.module.scss";
import { usePagination } from "@/hooks/pagination/usePagination";

interface IPagination {
  numberPages: number;
}

const Pagination = ({ numberPages }: IPagination) => {
  const {
    pageNumbers,
    currentPage,
    setSearchParams,
    handlePrevPage,
    handleNextPage,
  } = usePagination(numberPages);

  return (
    <nav>
      <ul className={styles.pagination}>
        <li>
          <span className={styles.link} onClick={handlePrevPage}>
            {"<"}
          </span>
        </li>

        {pageNumbers.map((pgNumber) => (
          <li
          onClick={() =>
            setSearchParams((prev: URLSearchParams) => {
              prev.set("page", pgNumber.toString());
              return prev;
            })
          }
            key={pgNumber}
            className={`${styles.numbers} ${
              currentPage == pgNumber ? "active" : ""
            } `}
          >
            <small
             
            >
              {pgNumber}
            </small>
          </li>
        ))}
        <li>
          <span className={styles.link} onClick={handleNextPage}>
            {">"}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
