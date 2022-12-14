type hslColor = `hsl(${number}, ${number}%, ${number}%)`;
interface types {
  [key: string]:
    | hslColor
    | {
        "50"?: hslColor;
        "100"?: hslColor;
        "150"?: hslColor;
        "200"?: hslColor;
        "250"?: hslColor;
        "300"?: hslColor;
        "350"?: hslColor;
        default: hslColor;
        "400"?: hslColor;
        "450"?: hslColor;
        "500"?: hslColor;
        "550"?: hslColor;
        "600"?: hslColor;
        "650"?: hslColor;
        "700"?: hslColor;
      };
}

const COLORS = {
  royalBlue: {
    "50": "hsl(230, 95%, 81%)",
    "100": "hsl(230, 95%, 86%)",
    "150": "hsl(230, 95%, 82%)",
    "200": "hsl(230, 95%, 77%)",
    "250": "hsl(230, 95%, 73%)",
    "300": "hsl(230, 95%, 68%)",
    "350": "hsl(230, 95%, 64%)",
    default: "hsl(230, 95%, 59%)",
    "400": "hsl(230, 97%, 55%)",
    "450": "hsl(230, 79%, 49%)",
    "500": "hsl(230, 79%, 44%)",
    "550": "hsl(230, 79%, 38%)",
    "600": "hsl(230, 79%, 33%)",
    "650": "hsl(230, 79%, 27%)",
    "700": "hsl(230, 79%, 22%)",
  },
  butterflyBlue: {
    "50": "hsl(200, 100%, 81%)",
    "100": "hsl(200, 100%, 86%)",
    "150": "hsl(200, 100%, 82%)",
    "200": "hsl(200, 100%, 87%)",
    "250": "hsl(200, 100%, 73%)",
    "300": "hsl(200, 100%, 68%)",
    "350": "hsl(200, 100%, 63%)",
    default: "hsl(200, 100%, 59%)",
    "400": "hsl(200, 100%, 54%)",
    "450": "hsl(200, 85%, 49%)",
    "500": "hsl(200, 85%, 43%)",
    "550": "hsl(200, 85%, 38%)",
    "600": "hsl(200, 85%, 32%)",
    "650": "hsl(200, 85%, 27%)",
    "700": "hsl(200, 85%, 22%)",
  },
  hotPink: {
    "50": "hsl(333, 100%, 84%)",
    "100": "hsl(333, 100%, 80%)",
    "150": "hsl(333, 100%, 76%)",
    "200": "hsl(333, 100%, 71%)",
    "250": "hsl(333, 100%, 66%)",
    "300": "hsl(333, 100%, 61%)",
    "350": "hsl(333, 100%, 57%)",
    default: "hsl(333, 100%, 52%)",
    "400": "hsl(333, 92%, 47%)",
    "450": "hsl(333, 92%, 41%)",
    "500": "hsl(333, 92%, 36%)",
    "550": "hsl(333, 92%, 30%)",
    "600": "hsl(333, 92%, 25%)",
    "650": "hsl(333, 92%, 20%)",
    "700": "hsl(333, 92%, 14%)",
  },
  goldenYellow: {
    "50": "hsl(52, 100%, 89%)",
    "100": "hsl(52, 100%, 83%)",
    "150": "hsl(52, 100%, 78%)",
    "200": "hsl(52, 100%, 72%)",
    "250": "hsl(52, 100%, 66%)",
    "300": "hsl(52, 100%, 61%)",
    "350": "hsl(52, 100%, 55%)",
    default: "hsl(52, 100%, 50%)",
    "400": "hsl(52, 100%, 44%)",
    "450": "hsl(52, 100%, 39%)",
    "500": "hsl(52, 100%, 34%)",
    "550": "hsl(52, 100%, 28%)",
    "600": "hsl(52, 100%, 22%)",
    "650": "hsl(52, 100%, 17%)",
    "700": "hsl(52, 100%, 11%)",
  },
  violetEggplant: {
    "50": "hsl(268, 55%, 72%)",
    "100": "hsl(268, 54%, 66%)",
    "150": "hsl(268, 53%, 60%)",
    "200": "hsl(268, 52%, 53%)",
    "250": "hsl(268, 54%, 47%)",
    "300": "hsl(268, 67%, 41%)",
    "350": "hsl(268, 82%, 35%)",
    default: "hsl(268, 100%, 30%)",
  },
  mobester: {
    "50": "hsl(265, 10%, 78%)",
    "100": "hsl(265, 10%, 74%)",
    "150": "hsl(265, 10%, 70%)",
    "200": "hsl(265, 9%, 64%)",
    "250": "hsl(265, 8%, 60%)",
    "300": "hsl(265, 8%, 57%)",
    "350": "hsl(265, 7%, 53%)",
    default: "hsl(265, 7%, 49%)",
  },
  spunPearl: {
    "50": "hsl(240, 11%, 93%)",
    "100": "hsl(230, 10%, 89%)",
    "150": "hsl(240, 10%, 86%)",
    "200": "hsl(233, 10%, 83%)",
    "250": "hsl(234, 9%, 79%)",
    "300": "hsl(235, 9%, 76%)",
    "350": "hsl(235, 9%, 73%)",
    default: "hsl(235, 8%, 69%)",
  },
  blackRock: {
    "50": "hsl(260, 33%, 65%)",
    "100": "hsl(260, 30%, 55%)",
    "150": "hsl(260, 33%, 46%)",
    "200": "hsl(260, 43%, 37%)",
    "250": "hsl(260, 54%, 30%)",
    "300": "hsl(260, 67%, 23%)",
    "350": "hsl(260, 81%, 16%)",
    default: "hsl(260, 100%, 11%)",
  },
  cinder: {
    "50": "hsl(211, 17%, 68%)",
    "100": "hsl(213, 15%, 58%)",
    "150": "hsl(214, 14%, 49%)",
    "200": "hsl(212, 17%, 40%)",
    "250": "hsl(212, 20%, 31%)",
    "300": "hsl(212, 24%, 23%)",
    "350": "hsl(213, 28%, 16%)",
    default: "hsl(212, 32%, 8%)",
  },
  mintCream: "hsl(197, 100%, 99%)",
};

export const DARK_THEME_COLORS: { [key: string]: any } = {
  primary: COLORS.royalBlue,
  secondary: COLORS.hotPink,
  tertiary: COLORS.goldenYellow,
  background: COLORS.cinder,
  textColor: COLORS.mintCream,
  grey: COLORS.spunPearl,
  "shadow-color": "var(--background)",
  shadow: `0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.5),
  0.5px 1.1px 1px -0.6px hsl(var(--shadow-color) / 0.44),
  1.1px 2.3px 2.1px -1.3px hsl(var(--shadow-color) / 0.39),
  2.4px 4.7px 4.4px -1.9px hsl(var(--shadow-color) / 0.34),
  4.6px 9.3px 8.7px -2.5px hsl(var(--shadow-color) / 0.28),
  8.3px 16.6px 15.6px -3.1px hsl(var(--shadow-color) / 0.23),
  13.7px 27.4px 25.7px -3.8px hsl(var(--shadow-color) / 0.18),
  21.3px 42.5px 39.9px -4.4px hsl(var(--shadow-color) / 0.12)`,
};

export const LIGHT_THEME_COLORS: { [key: string]: any } = {
  primary: COLORS.royalBlue,
  secondary: COLORS.butterflyBlue,
  tertiary: COLORS.violetEggplant,
  background: COLORS.mintCream,
  textColor: COLORS.blackRock,
  grey: COLORS.mobester,
};

export default COLORS;
