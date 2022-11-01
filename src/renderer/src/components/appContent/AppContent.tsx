import type { FC } from "react";
import { useState, lazy, useMemo, Suspense } from "react";
import GlobalStyle from "../globalStyle/GlobalStyle";
import Nav from "../nav/Nav";

const AppContent: FC = (): JSX.Element => {
  const [page, setPage] = useState("Home");

  const Component = useMemo(() => {
    return lazy(() => {
      return import(`../../pages/${page}.tsx`);
    });
  }, [page]);

  return (
    <>
      <GlobalStyle />
      <Nav page={page} setPage={setPage} />
      <Suspense fallback={<></>}>
        <Component />
      </Suspense>
    </>
  );
};

export default AppContent;
