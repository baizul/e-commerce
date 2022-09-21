module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "390px",
        xsm: "460px",
        xlg: "1000px",
        xxlg: "1280px",
      },
      /** ------------------------------------------------------------
       *
       * Height
       *
       * ------------------------------------------------------------
       */
      height: {
        17.75: "4.375rem" /* 70px */,
        22.5: "5.625rem" /* 90px */,
        23: "5.75rem" /* 92px */,
        522: "522px",
        "screen-7/10": "70vh",
        "screen-4/5": "80vh",
        "screen-83": "83vh",
        120: "30rem" /* 480px */,
        168: "41.75rem" /* 668px */,
        "73/100": "73%",
        86: "344px",
        645: "645px",
        165: "165px",
      },
      /** ------------------------------------------------------------
       *
       * Maximum Width
       *
       * ------------------------------------------------------------
       */
      maxWidth: {
        12: "3rem" /* 48px */,
        "1/2": "50%",
      },
      /** ------------------------------------------------------------
       *
       * Width
       *
       * ------------------------------------------------------------
       */
      width: {
        25: "6.25rem",
        22.5: "5.625rem" /* 90px */,
        147: "39rem" /* 624px */,
        "1.5/12": "12.5%",
        "5.5/12": "45.833333%",
        "6.25/12": "52.083333%",
        "6.5/12": "54.166667%",
        "7/10": "70%",
        "8.75/12": "72.916667%",
        "10.5/12": "87.5%",
        "9/10": "90%",
        "73/100": "73%",
        "87/100": "87%",
        "90/100": "90%",
        "91/100": "91%",
        "92/100": "92%",
        "93/100": "93%",
        426: "426px",
      },
      /** ------------------------------------------------------------
       *
       * Font Size
       *
       * ------------------------------------------------------------
       */
      fontSize: {
        xxsm: "0.563rem" /**09px */,
        xxxs: "0.625rem" /**10px */,
        xxs: "0.6875rem" /* 11px */,
        tiny: "0.8125rem" /* 13px */,
        md: "0.9375rem" /* 15px */,
        "0.5xl": "1.1875rem" /* 19px */,
        "1.5xl": "1.375rem" /* 22px */,
        "3.5xl": "2rem" /* 32px */,
        "3.75xl": "2.09375rem" /* 33.5px */,
        "4.25xl": "2.5rem" /*40px*/,
        "4.5xl": "2.875rem" /* 46px */,
        "1xs": "13px",
        "1sm": "15px",
        "1lg": "1.188rem",
        46: "46px",
        56: "56px",
        "0.64xl": "0.8rem" /* 12.8px */,
        "0.94xl": "1.18rem" /* 18.9px */,
        "0.96xl": "1.2rem" /* 19.2px */,
        "1.6xl": "2rem" /* 32px */,
        "1.68xl": "2.1rem" /* 33.6px */,
        "0.83xs": "0.625rem" /* 10px */,
        "5.5xl": "3.5rem" /* 56px */,
      },

      /** ------------------------------------------------------------
       *
       * Line Height
       *
       * ------------------------------------------------------------
       */
      lineHeight: {
        14: "3.5rem" /* 56px */,
        17: "1.1rem" /*17.57*/,
      },
      /** ------------------------------------------------------------
       *
       * Font Family
       *
       * ------------------------------------------------------------
       */
      fontFamily: {
        mulish: "Mulish",
        inter: "Inter",
      },
      /** ------------------------------------------------------------
       *
       * Transition Property
       *
       * ------------------------------------------------------------
       */
      transitionProperty: {
        width: "width",
        margin: "margin",
      },
      /** ------------------------------------------------------------
       *
       * Border Width
       *
       * ------------------------------------------------------------
       */
      borderWidth: {
        0.3: "0.3px",
      },
      /** ------------------------------------------------------------
       *
       * Border Radius
       *
       * ------------------------------------------------------------
       */
      borderRadius: {
        xlg: "10px",
      },
      /** ------------------------------------------------------------
       *
       * Margin
       *
       * ------------------------------------------------------------
       */
      margin: {
        5.5: "1.375rem" /* 22px */,
        7.5: "1.875rem" /* 30px */,
        9.5: "2.375rem" /* 38px */,
        18: "4.5rem" /* 72px */,
        50: "12.5rem" /* 200px */,
      },
      /** ------------------------------------------------------------
       *
       * Box Shadow
       *
       * ------------------------------------------------------------
       */
      boxShadow: {
        product: "0 0px 12px 2px rgba(48, 57, 90, 0.19)",
        team: "0px 2px 10px rgba(36, 68, 117, 0.08)",
        editButton: "1px 2px 8px rgba(40, 26, 26, 0.25)",
        base: "0px 2px 10px rgba(36, 68, 117, 0.08)",
      },
      /** ------------------------------------------------------------
       *
       * Background Image
       *
       * ------------------------------------------------------------
       */
      backgroundImage: {
        heroImage: "url('../public/images/LandingPage/heroImage.png')",
        offerTag: "url('../public/images/productList/offerTag.svg')",
        legacyMobile:
          "url('../public/images/LandingPage/Legacy/legacy-mobile.png')",
        legacy: "url('../public/images/LandingPage/Legacy/legacy.png')",
        family: "url('../public/images/LandingPage/Support/family.png')",
        friends: "url('../public/images/LandingPage/Support/friends.png')",
        fans: "url('../public/images/LandingPage/Support/fans.png')",
        accountSetupImage:
          "url('../public/images/AccountSetup/accountSetupImage.png')",
        joiningClub:
          "url('../public/images/IdentityConfirmation/joiningClub.png')",
        playgroundImage:"url('../public/images/JoinAE/playground.png')",
      },
      /** ------------------------------------------------------------
       *
       * Colors
       *
       * ------------------------------------------------------------
       */
      colors: {
        black: "#000000",
        crimson: "#CB0736",
        darkGray: "#A6A6A6",
        eclipse: { 1: "#3E3E3E", 2: "#383838" },
        snow: "#FAFAFA",
        gorse: "FFDD2D",
        matterhorn: { 1: "#4B4B4B", 2: "#575757", 3: "#4d4d4d" },
        gainsboro: "#DCDCDC",
        nero: "#252525",
        veryLightGrey: "#C8C8C8",
        white: "#FFFFFF",
        whiteSmoke: "#F2F2F2",
        chateauGreen: "#43A959",
        zambezi: "#585858",
        malachite: "#1ECD64",
        nobel: "#9E9E9E",
        santasGrey: "#9595A1",
        arsenic: "#394752",
        dimGray: "#626262",
        slateGrey: "#757F88",
        ghostWhite: "#F3F3F4",
        resolutionBlue: "#244475",
        pacificBlue: "#0988CC",
        darkPastelGreen: "#00B929",
        fireBush: "#E49343",
        salem: "#178751",
        persianGreen: "#00A89A",
        blueViolet: "#913DFB",
        aliceBlue: { 1: "#F6F8FB", 2: "#FAFCFD" },
        blackPearl: { 1: "#0E1C25", 2: "#121619" },
        pattensBlue: "#DBE3EB",
        silver: "#C4C4C4",
        royalBlue: "#225DF4",
      },
      padding: {
        '150': '45rem',
      }
    },
  },
};
