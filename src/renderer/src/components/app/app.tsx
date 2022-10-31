import type { FC } from "react";
import AppContent from "../appContent/appContent";
import AppProvider from "../appProvider/appProvider";

const App: FC = (): JSX.Element => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
