import { fr } from "@formkit/i18n";
import { generateClasses } from "@formkit/themes";
import { genesisIcons } from "@formkit/icons";
import myTailwindTheme from "./src/tailwind-theme";

const config = {
  locales: { fr },
  locale: "fr",
};

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
};
