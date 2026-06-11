/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-secondary-fixed": "#ffffff",
        "surface-bright": "#FEFEFE",
        "outline": "#747878",
        "on-secondary-container": "#ffffff",
        "error-container": "#ffdad6",
        "error": "#E11919",
        "tertiary-fixed-dim": "#c6c7c5",
        "on-primary": "#ffffff",
        "on-tertiary-container": "#838483",
        "background": "#FEFEFE",
        "secondary-fixed-dim": "#BD1C19",
        "on-primary-fixed": "#303742",
        "primary-fixed-dim": "#c8c6c5",
        "on-error": "#ffffff",
        "surface-container-high": "#e9e8e7",
        "inverse-on-surface": "#f2f0f0",
        "tertiary-fixed": "#e2e3e1",
        "surface-variant": "#e4e2e2",
        "surface-tint": "#5f5e5e",
        "primary": "#303742",
        "secondary-container": "#E11919",
        "on-tertiary-fixed-variant": "#454746",
        "on-background": "#303742",
        "surface-dim": "#dbdad9",
        "surface-container-highest": "#e4e2e2",
        "surface-container-lowest": "#ffffff",
        "tertiary-container": "#1a1c1b",
        "on-surface": "#303742",
        "inverse-primary": "#c8c6c5",
        "secondary-fixed": "#E11919",
        "inverse-surface": "#303031",
        "on-secondary-fixed-variant": "#BD1C19",
        "surface-container": "#efeded",
        "secondary": "#E11919",
        "on-tertiary-fixed": "#1a1c1b",
        "surface": "#FEFEFE",
        "primary-fixed": "#e5e2e1",
        "on-tertiary": "#ffffff",
        "on-primary-container": "#858383",
        "on-surface-variant": "#444748",
        "primary-container": "#303742",
        "surface-container-low": "#f5f3f3",
        "on-secondary": "#ffffff",
        "outline-variant": "#c4c7c7",
        "on-error-container": "#93000a",
        "on-primary-fixed-variant": "#474646",
        "tertiary": "#303742"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem",
        "card": "1.5rem",
        "button": "2rem"
      },
      "spacing": {
        "section-padding": "120px",
        "grid-gutter": "24px",
        "stack-lg": "32px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "grid-margin": "64px"
      },
      "fontFamily": {
        "sans": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Hanken Grotesk"],
        "display-lg": ["Hanken Grotesk"],
        "body-md": ["Hanken Grotesk"],
        "headline-md": ["Hanken Grotesk"],
        "display-xl": ["Hanken Grotesk"],
        "label-caps": ["Hanken Grotesk"],
        "headline-lg-mobile": ["Hanken Grotesk"],
        "headline-lg": ["Hanken Grotesk"]
      },
      "fontSize": {
        "body-lg": ["20px", {"lineHeight": "32px", "letterSpacing": "0.01em", "fontWeight": "400"}],
        "display-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "600"}],
        "body-md": ["16px", {"lineHeight": "26px", "letterSpacing": "0.01em", "fontWeight": "400"}],
        "headline-md": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "500"}],
        "display-xl": ["84px", {"lineHeight": "92px", "letterSpacing": "-0.03em", "fontWeight": "600"}],
        "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "700"}],
        "headline-lg-mobile": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "600"}],
        "headline-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "500"}]
      }
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
}
