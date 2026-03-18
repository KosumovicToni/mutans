export type DaltonismMode =
  | "default"
  | "protanopia"
  | "deuteranopia"
  | "tritanopia";

class Settings {
  daltonism = $state<DaltonismMode>("default");

  init() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("daltonism") as DaltonismMode;
      if (saved) {
        this.daltonism = saved;
        document.documentElement.setAttribute("data-daltonism", saved);
      }
    }
  }

  setDaltonism(mode: DaltonismMode) {
    this.daltonism = mode;
    if (typeof window !== "undefined") {
      localStorage.setItem("daltonism", mode);
      document.documentElement.setAttribute("data-daltonism", mode);
    }
  }
}

export const settings = new Settings();
