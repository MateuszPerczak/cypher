import Page from "@renderer/components/page/Page";
import type { FC } from "react";
import { memo } from "react";

const Home: FC = (): JSX.Element => {
  return <Page header="Home"></Page>;
};

export default memo(Home);
