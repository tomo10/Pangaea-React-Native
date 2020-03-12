
import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { height } = Dimensions.get("window");
const φ = (1 + Math.sqrt(5)) / 2;

export const MIN_IMAGE_HEIGHT = 64 + Constants.statusBarHeight;
export const MAX_IMAGE_HEIGHT = height * (1 - 1 / φ);
export const IMAGE_DELTA = MAX_IMAGE_HEIGHT - MIN_IMAGE_HEIGHT;
export const BUTTON_HEIGHT = 48;