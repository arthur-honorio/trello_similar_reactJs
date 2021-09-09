 const theme = {
  color: {
    background:"#F0F0F0" ,
    backgroundTransparent:"#F0F0F0F0" ,
    primary: "#FF7300" ,
    dark: "#474747",
    secondary: "#009FBA",
    secondaryLight: "#B8F5FF",
  },

  columnColor: {
    0: "#ff0000",
    1: "#F56E00",
    2: "#F5AB00",
    3: "#2BCC19",
    4: "#a1ff0a",
    5: "#009E08",
    6: "#20CFCC",
    7: "#147df5",
    8: "#8C54F2",
    9: "#be0aff",
  },

  fonts: {
    primary: "Azeret Mono, sans-serif",
    weight: {
      thin: "100",
      semi: "500",
      bold: "700",
      fat: "900",
    },
    size:{
      title: "2rem",
      subTitle: "1.5rem",
      subSubTitle: "1.25rem",
      text: ".9rem",
      small: ".7rem",
    }
  },

  border: {
    small: ".12rem solid",
    medium: ".18rem solid",
  },

  borderRadius: {
    small: ".2rem",
    medium: ".3rem",
    big: ".6rem",
  },

  size: {
    xSmall: ".33rem",
    small: ".67rem",
    medium: "1.25rem",
    big: "1.6rem",
    xBig: "2rem",
  }
}

function propsF (prop, subProp, aditional = "") {
  return props => aditional 
  ? props.theme[prop][subProp][aditional] 
  : props.theme[prop][subProp]
}



export { theme, propsF }