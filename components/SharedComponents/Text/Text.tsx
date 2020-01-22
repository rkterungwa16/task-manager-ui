export interface TextProps {
  text?: string;
  style?: TextStyleProps;
  children?: React.ReactNode;
}

export interface TextStyleProps {
  marginTop?: number | string;
  marginLeft?: number | string;
  marginBottom?: number | string;
  marginRight?: number | string;
  textAlign?: string;
  color?: string;
  fontWeight?: string | number;
  lineHeight?: string;
  fontSize?: string | number;
  textTransform?: string;
  letterSpacing?: string | number;
  width?: number | string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  alignSelf?: string;
}
export const Text = (props: TextProps) => (
  <>
  <span className="text">
    {props.text}
    {props.children}
  </span>
  <style jsx>
    {
      `
      .text {
        font-size: ${props.style.fontSize}px;
        line-height: ${props.style.lineHeight};
        text-align: ${props.style.textAlign};
        color: ${props.style.color};
        font-weight: ${props.style.fontWeight};
        width: ${props.style.width}%;
        letter-spacing: ${props.style.letterSpacing}px;
        text-transform: ${props.style.textTransform};
        margin-left: ${props.style.marginLeft}px;
        margin-top: ${props.style.marginTop}px;
        margin-bottom: ${props.style.marginBottom}px;
        margin-right: ${props.style.marginRight}px;
        display: ${props.style.display};
        align-self: ${props.style.alignSelf};
        justify-content: ${props.style.justifyContent};
        align-items: ${props.style.alignItems};
      }
      `
    }
  </style>
  </>
)
