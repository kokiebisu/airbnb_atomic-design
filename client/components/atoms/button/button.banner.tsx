import React from "react";

/** styles */
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import shape from "../../../styles/shape.module.scss";
import font from "../../../styles/font.module.scss";

/** props */
import { BannerButtonProps } from "./props";

/**
 * Renders the banner button component
 * @param {string} title - Title of the button
 */
export const BannerButton: React.FC<BannerButtonProps> = ({
  title = "Button",
}) => {
  return (
    <div
      className={[
        color["bg--white"],
        space["p-h--16"],
        space["p-v--8"],
        shape["br--6"],
        font["size--14"],
      ].join(" ")}
    >
      <h3>{title}</h3>
    </div>
  );
};
