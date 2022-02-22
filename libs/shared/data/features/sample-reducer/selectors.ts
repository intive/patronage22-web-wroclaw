// eslint-disable-next-line import/no-cycle
import { AppState } from "../../types";

export const selectSampleText = (state: AppState) => state.sample.text;
