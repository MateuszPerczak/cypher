export type Route = {
  header: string;
  icon: string;
  position: Position;
};

export enum Position {
  Top = "top",
  Bottom = "bottom",
}

export const routes: Route[] = [
  {
    header: "Home",
    icon: "\uE10F",
    position: Position.Top,
  },
  {
    header: "Encrypt",
    icon: "\uE72E",
    position: Position.Top,
  },
  {
    header: "Decrypt",
    icon: "\uEC19",
    position: Position.Top,
  },
  {
    header: "Settings",
    icon: "\uE115",
    position: Position.Bottom,
  },
];
