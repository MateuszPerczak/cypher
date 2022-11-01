import Page from "@renderer/components/page/Page";
import Panel from "@renderer/components/panel/Panel";
import PanelContent from "@renderer/components/panelContent/PanelContent";
import PanelHeader from "@renderer/components/panelHeader/PanelHeader";
import PanelText from "@renderer/components/panelText/PanelText";
import type { FC } from "react";
import { memo } from "react";

const Home: FC = (): JSX.Element => {
  return (
    <Page header="Home">
      <Panel>
        <PanelHeader icon="&#xE789;" header="Hi, welcome to Cypher!" />
        <PanelContent>
          <PanelText header="Cypher is a simple encryption/decryption app."></PanelText>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader icon="&#xEB3C;" header="What's new?" />
        <PanelContent>
          <PanelText header="This is a alpha release of cypher...">
            <span>So don&apos;t expect ✨shit✨ to work 🙃</span>
          </PanelText>
        </PanelContent>
      </Panel>
    </Page>
  );
};

export default memo(Home);
