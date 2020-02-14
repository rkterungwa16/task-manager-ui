export interface StyleProps {
  // Margin Props
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  marginRight?: string;
  margin?: string;
  // Padding Props
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  padding?: string;
  textAlign?: string;
  textIndent?: string;
  color?: string;
  lineHeight?: string;
  fontWeight?: string | number;
  fontSize?: string;
  textTransform?: string;
  textDecoration?: string;
  letterSpacing?: string;
  width?: string;
  height?: string;
  display?: string;
  flex?: string;
  justifyContent?: string;
  flexDirection?: string;
  alignItems?: string;
  alignSelf?: string;
  wordBreak?: string;
  // Border Props
  borderRadius?: string;
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderTop?: string;
  borderRight?: string;
  backgroundColor?: string;
  zIndex?: string;
  boxShadow?: string;
  cursor?: string;
  transition?: string;
  [x: string]: any;
}

export const cssProperties = {
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
  textIndent: "text-indent",
  textDecoration: "text-decoration",
  width: "width",
  height: "height",
  display: "display",
  justifyContent: "justify-content",
  flexDirection: "flex-direction",
  alignItems: "align-items",
  alignSelf: "align-self",
  flex: "flex",
  wordBreak: "word-break",
  borderRadius: "border-radius",
  border: "border",
  borderBottom: "border-bottom",
  borderLeft: "border-left",
  borderRight: "border-right",
  borderTop: "border-top",
  backgroundColor: "background-color",
  zIndex: "z-index",
  boxShadow: "box-shadow",
  cursor: "cursor",
  transition: "transition"
};

export const mapToCssProperties = (props: StyleProps) => {
  const cssStyle = Object.keys(props).reduce(
    (previousValue: any, currentValue: string) => {
      const containsCssProps = cssProperties[currentValue];
      return {
        ...previousValue,
        [containsCssProps]: props[currentValue]
      };
    },
    {}
  );

  return `${JSON.stringify(cssStyle)}`
    .replace(/(\",\")/g, ";")
    .replace(/[\"{}]/g, "");
};
