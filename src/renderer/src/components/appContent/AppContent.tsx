import type { FC } from "react";
import { useState, lazy, useMemo, Suspense, useEffect } from "react";
import GlobalStyle from "../globalStyle/GlobalStyle";
import Nav from "../nav/Nav";

const AppContent: FC = (): JSX.Element => {
  const [page, setPage] = useState("Loading");

  const Component = useMemo(() => {
    return lazy(() => {
      return import(`../../pages/${page}.tsx`);
    });
  }, [page]);

  useEffect(() => {
    setTimeout(() => setPage("Home"), 1000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Nav setPage={setPage} />
      <Suspense fallback={<></>}>
        <Component />
      </Suspense>
    </>
  );
};

export default AppContent;
