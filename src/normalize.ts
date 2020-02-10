import { InitialOptions } from "./cli";
import merge from "lodash.merge";
import { detectTerminalApp } from "./utils";

export type Options = {
  env?: NodeJS.ProcessEnv;
  split?: boolean;
  splitDirection?: "vertically" | "horizontally";
  terminalApp?: string;
};

const defaultOptions: InitialOptions = {
  env: process.env,
  split: false,
  splitDirection: "vertically",
  terminalApp: detectTerminalApp()
};

export default (initialOptions: InitialOptions): Options => {
  const optionsWithDefaults = merge(defaultOptions, initialOptions);

  return optionsWithDefaults as Options;
};
