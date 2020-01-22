export interface ButtonProps {
  text?: string;
  style?: ButtonStyleProps;
}

export interface ButtonStyleProps {
  marginTop?: number | string;
  marginBottom?: number | string;
  width?: number | string;
  color?: string;
  backgroundColor?: string;
}

export const Button = (props: ButtonProps) => (
  <>
    <button className="btn">{props.text}</button>
    <style jsx>{
      `
    .btn {
      display: flex;
      align-self: center;
      justify-content: center;
      margin-top: ${props.style.marginTop}px;
      margin-bottom: ${props.style.marginBottom}px;
      background-color: ${props.style.backgroundColor};
      border-radius: 8px;
      border: none;
      width: ${props.style.width}%;
      height: 48px;
      font-size: 14px;
      line-height: normal;
      text-align: center;
      letter-spacing: 2px;
      align-items: center;
      text-transform: uppercase;
      font-weight: 600;
      color: ${props.style.color};
    }

    `
    }</style>
  </>
)
