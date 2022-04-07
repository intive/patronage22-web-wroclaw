const robotoFontsPath = "assets/shared/fonts/roboto/";

export const robotoRegular = `
@font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url("${robotoFontsPath}roboto-regular.eot");
    src: url("${robotoFontsPath}roboto-regular.eot") format("embedded-opentype"),
         url("${robotoFontsPath}roboto-regular.woff2") format("woff2"), 
         url("${robotoFontsPath}roboto-regular.woff") format("woff"),
         url("${robotoFontsPath}roboto-regular.ttf") format("truetype"), 
         url("${robotoFontsPath}roboto-regular.svg") format("svg");
  }
`;
export const robotoRegularBold = `
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: url("${robotoFontsPath}roboto-700.eot");
    src: url("${robotoFontsPath}roboto-700.eot") format("embedded-opentype"),
         url("${robotoFontsPath}roboto-700.woff2") format("woff2"), 
         url("${robotoFontsPath}roboto-700.woff") format("woff"),
         url("${robotoFontsPath}roboto-700.ttf") format("truetype"), 
         url("${robotoFontsPath}roboto-700.svg") format("svg");
  }
  `;
export const robotoItalicBold = `
  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 700;
    src: url("${robotoFontsPath}roboto-700italic.eot");
    src: url("${robotoFontsPath}roboto-700italic.eot") format("embedded-opentype"),
         url("${robotoFontsPath}roboto-700italic.woff2") format("woff2"),  
         url("${robotoFontsPath}roboto-700italic.woff") format("woff"),
         url("${robotoFontsPath}roboto-700italic.ttf") format("truetype"), 
         url("${robotoFontsPath}roboto-700italic.svg") format("svg");
  }
`;
export const robotoItalic = `
@font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    src: url("${robotoFontsPath}roboto-italic.eot");
    src: url("${robotoFontsPath}roboto-italic.eot") format("embedded-opentype"),
         url("${robotoFontsPath}roboto-italic.woff2") format("woff2"), 
         url("${robotoFontsPath}roboto-italic.woff") format("woff"),
         url("${robotoFontsPath}roboto-italic.ttf") format("truetype"), 
         url("${robotoFontsPath}roboto-italic.svg") format("svg");
 }
 `;

export const robotoFont = `${robotoRegular}${robotoItalic}${robotoItalicBold}${robotoRegularBold}`;
export const robotoFontFamilyName = "Roboto";
