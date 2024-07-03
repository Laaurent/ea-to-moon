export interface INavbarLink {
  name: string;
  path: string;
  icon: any;
  shortCut: string[];
  position: "top" | "bottom" | "workspaces";
}

export interface IToggle {
  name: string;
  icon: any;
}
