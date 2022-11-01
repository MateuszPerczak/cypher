import type { FC } from "react";
import Page from "@renderer/components/page/Page";
import Panel from "@renderer/components/panel/Panel";
import PanelContent from "@renderer/components/panelContent/PanelContent";
import PanelHeader from "@renderer/components/panelHeader/PanelHeader";
import PanelText from "@renderer/components/panelText/PanelText";
import Link from "@renderer/components/link/Link";

const Settings: FC = (): JSX.Element => {
  return (
    <Page header="Settings">
      <Panel>
        <PanelHeader icon="&#xE167;" header="Useful links" />
        <PanelContent>
          <Link href="https://github.com/MateuszPerczak">Github</Link>
          <Link href="https://mateuszperczak.netlify.app/">My website</Link>
          <Link href="https://github.com/MateuszPerczak/cypher">Github - Cypher</Link>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader icon="&#xE946;" header="About" />
        <PanelContent>
          <PanelText header="Cypher">
            <span>Version: 1.0.0</span>
          </PanelText>
          <PanelText header="Used libraries">
            <span>React, Emotion, Framer-motion, Electron, Vite</span>
          </PanelText>
          <PanelText header="Authors">
            <span>Mateusz Perczak</span>
          </PanelText>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader icon="&#xEB95;" header="Licence" />
        <PanelContent>
          <PanelText header="GNU General Public License v3.0" />
        </PanelContent>
      </Panel>
    </Page>
  );
};

export default Settings;
