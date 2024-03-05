import { memo } from "react";
import Layout from "../shared/layout";
import { useEntries } from "@/hooks/entries/useEntries";
import { Entry } from "@/types";
import styles from "./styles.module.scss";
import Card from "../shared/card";
import Pagination from "../shared/pagination";

const EntriesComponent = memo(() => {
  const {
    loading,
    error,
    currentRecords,
    year,
    numberPages,
    recordsPerPage,
    handleChangeYear,
    handleSearchYear,
    handleChangeRecordsPerPage,
  } = useEntries();

  return (
    <Layout>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.utils}>
            <div className={styles.pagination}>
              <Pagination numberPages={numberPages} />
              <select
                onChange={handleChangeRecordsPerPage}
                value={recordsPerPage}
                className={styles.select}
              >
                <option value={5}>5 Items</option>
                <option value={10}>10 Items</option>
                <option value={20}>20 Items</option>
              </select>
            </div>
            <form onSubmit={handleSearchYear}>
              <input
                onChange={handleChangeYear}
                value={year}
                max="2024"
                min="1920"
                className={styles.input}
                placeholder="Year"
                type="number"
              />
            </form>
          </div>
          <div data-testid={'entries-list'} className={styles.containerCards}>
            {currentRecords?.length > 0 ? (
              currentRecords.map((entry: Entry,index:number) => (
                <Card key={index}  entry={entry} />
              ))
            ) : (
              <small>0 resultados</small>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
});

export default EntriesComponent;
