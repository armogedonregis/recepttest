module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        raleway: ["Raleway"],
        nunito: ["Nunito"],
      },
      fontSize: {
        'smx': ['12px', '14px'],
        'sm': ['14px', '16px'],
        'sml': ['14px', '19px'],
        'md': ['16px', '19px'],
        'mdl': ['16px', '22px'],
        'xl': ['18px', '24px'],
        '2xl': ['24px', '33px'],
        '6xl': ['36px', '49px'],
      },
      borderRadius: {
        'xl': '10px',
        '2xl': '15px',
      },
      extend: {
        boxShadow: {
          'xl': 'box-shadow: 0px 0px 15px rgba(68, 68, 68, 0.25)',
          '2xl': 'box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.25)',
        },
        colors: {
          primary: {
            DEFAULT: "#333333",
            gray: "#636363",
          },
          tertiary: {
            DEFAULT: "#D9D9D9",
          },
          gray: {
            DEFAULT: "#D9D9D9",
            icon: "#AAAAAA",
            card: "#F2F2F2",
            border: "#CCCCCC",
          },
          blueUp: {
            DEFAULT: "#605DEC",
          },
          chevron: {
            DEFAULT: "#212121",
          },
          red: {
            DEFAULT: "#F93232",
          },
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
  
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
  
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
  