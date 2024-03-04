/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FILTER_YEAR } from "@/constants";
import { setTitle } from "@/redux/reducers/config";
import { setEntries } from "@/redux/reducers/entries";
import * as services from "@/services/entries";
import { Entry, IMenu } from "@/types";
import { useParams, useSearchParams } from "react-router-dom";
import { menu } from "../home/useHome";
export const useEntries = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { entryType } = useParams();
  const [params, setSearchParams] = useSearchParams({ page: "1" });
  const [year, setYear] = useState<string>("");
  const [recordsPerPage, setRecordsPerPage] = useState<number>(20);
  const [numberPages, setNumberPages] = useState<number>(0);
  const [currentRecords, setCurrentRecords] = useState<Entry[]>([]);

  const getAll = async (): Promise<void> => {
    try {
      setLoading(true);
      setError("");

      const res = await services?.getAll();
      const customEntries = res?.data?.entries
        .filter((entry: Entry) =>
          params?.get("year")
            ? entry?.releaseYear === parseInt(params?.get("year") as string) &&
              entry.programType === entryType
            : entry?.releaseYear >= FILTER_YEAR &&
              entry.programType === entryType
        )
        ?.sort((a: Entry, b: Entry) => a?.title?.localeCompare(b?.title));

      dispatch(setEntries({ total: res?.data?.total, entries: customEntries }));

      const indexOfLastRecord =
        parseInt(params?.get("page") as string) * recordsPerPage;
      const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
      setCurrentRecords(
        customEntries?.slice(indexOfFirstRecord, indexOfLastRecord) as []
      );
      setNumberPages(
        Math.ceil((customEntries?.length as number) / recordsPerPage)
      );
    } catch (error) {
      setError("Oops, something went wrong...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(
      setTitle(menu.find((item: IMenu) => item.link === entryType)?.name)
    );
    getAll();
  }, [params, recordsPerPage]);

  const handleChangeYear = (e: ChangeEvent<HTMLInputElement>): void => {
    const newValue: string = e.target.value;
    setYear(newValue);
  };

  const handleSearchYear = (e: React.FormEvent): void => {
    e.preventDefault();
    setSearchParams((prev: URLSearchParams) => {
      if (year) prev.set("year", year);
      else prev.delete("year");
      prev.get("page") && prev.set("page", "1");
      return prev;
    });
  };
  const handleChangeRecordsPerPage = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    setRecordsPerPage(+e.target.value);
    setSearchParams((prev: URLSearchParams) => {
      prev.get("page") && prev.set("page", "1");
      return prev;
    });
  };
  return {
    loading,
    error,
    currentRecords,
    year,
    numberPages,
    params,
    recordsPerPage,
    handleChangeYear,
    handleSearchYear,
    setSearchParams,
    handleChangeRecordsPerPage,
  };
};
