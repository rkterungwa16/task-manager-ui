import { ProjectColorsType } from "../../models";

export interface ColorProps {
  color?: string;
  handleClick?: () => void;
}

export const Color = (props: ColorProps) => {
  return (
    <>
      <span onClick={props.handleClick} />
      <style jsx>
        {`
           {
            background: ${props.color};
            height: 20px;
            width: 20px;
            cursor: pointer;
            position: relative;
            float: left;
            border-radius: 4px;
            margin: 2px;
          }
        `}
      </style>
    </>
  );
};

export interface CurrentColorProps {
  color?: string;
  handleClick?: () => void;
}

export const CurrentColor = (props: CurrentColorProps) => {
  return (
    <>
      <span onClick={props.handleClick} />
      <style jsx>
        {`
           {
            background: ${props.color};
            height: 20px;
            width: 20px;
            cursor: pointer;
            position: relative;
            float: left;
            border-radius: 4px;
            height: 60px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
          }
        `}
      </style>
    </>
  );
};

export interface ColorPaletteProps {
  colors?: ProjectColorsType[];
  color?: string;
  handleClick?: (color: string) => void;
}

export const ColorPalette = (props: ColorPaletteProps) => {
  const colors = props.colors.map(color => {
    return (
      <Color
        key={color.name}
        color={color.code}
        handleClick={() => {
          props.handleClick(color.code);
        }}
      />
    );
  });
  return (
    <div>
      {colors}
      <style jsx>
        {`
           {
            width: 198px;
            background: rgb(255, 255, 255);
            border: 0px solid rgba(0, 0, 0, 0.25);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
            border-radius: 4px;
            padding: 2px;
            margin-right: 5px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};
