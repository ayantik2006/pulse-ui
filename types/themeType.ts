export enum theme{
  DARK,
  LIGHT
};

export interface themeType {
  theme: theme;
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
};
