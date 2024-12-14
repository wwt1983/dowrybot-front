import { IMAGES_STEP_FOR_HELP, WEB_APP } from "./constants";

export const getInstruction = () => {
  const medias = [];
  for (let i = 0; i < IMAGES_STEP_FOR_HELP.length; i++) {
    medias.push({
      img:  IMAGES_STEP_FOR_HELP[i].url,
      text: IMAGES_STEP_FOR_HELP[i].text,
    });
  }
  return medias;
};
