export interface TextProps {
  text?: string;
  style?: TextStyleProps;
  children?: React.ReactNode;
}

export interface TextStyleProps {
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  marginRight?: string;
  margin?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  padding?: string;
  textAlign?: string;
  color?: string;
  fontWeight?: string | number;
  lineHeight?: string;
  fontSize?: string;
  textTransform?: string;
  letterSpacing?: string;
  width?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  alignSelf?: string;
  wordBreak?: string;
  [x: string]: any;
}

const cssProperties = {
  marginTop: "margin-top",
  marginLeft: "margin-left",
  marginBottom: "margin-bottom",
  marginRight: "margin-right",
  margin: "margin",
  paddingLeft: "padding-left",
  paddingRight: "padding-right",
  paddingTop: "padding-top",
  paddingBottom: "padding-bottom",
  padding: "padding",
  textAlign: "text-align",
  color: "color",
  fontWeight: "font-weight",
  lineHeight: "line-height",
  fontSize: "font-size",
  textTransform: "text-transform",
  letterSpacing: "letter-spacing",
  width: "width",
  display: "display",
  justifyContent: "justify-content",
  alignItems: "align-items",
  alignSelf: "align-self",
  wordBreak: "word-break"
}

const mapToCssProperties = (props: TextStyleProps) => {
  const cssStyle = Object.keys(props).reduce((previousValue: any, currentValue: string) => {
    let containsCssProps = cssProperties[currentValue];
    return {
      ...previousValue,
      [containsCssProps]: props[currentValue]
    }
  }, {});

  return `${JSON.stringify(cssStyle)}`
  .replace(/[\" {}]/g, "")
  .replace(/,/g, ";");
}

export const Text = (props: TextProps) => {
  return (
    <>
      <span className="text">
        {props.text}
        {props.children}
      </span>
      <style jsx>
        {
          `
        .text {
          ${mapToCssProperties(props.style)}
        }
        `
        }
      </style>
    </>
  )
}
