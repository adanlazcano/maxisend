import { Entries } from "../../types";
import { SERVICE } from "../config";

export const getAll = async (): Promise<Entries | undefined> =>
  await SERVICE().get("");
