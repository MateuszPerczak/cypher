import type { Dispatch, SetStateAction } from "react";

export type NavProps = {
  setPage: Dispatch<SetStateAction<string>>;
};
