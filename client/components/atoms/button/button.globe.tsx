import React from "react";
import { motion } from "framer-motion";

/** vectors */
import { Globe } from "../../../public/svg/original";
import { ChevronDown } from "../../../public/svg/regular";

/** styles **/
import color from "../../../styles/color.module.scss";
import shape from "../../../styles/shape.module.scss";
import layout from "../../../styles/layout.module.scss";
import animation from "../../../styles/animation.module.scss";
import space from "../../../styles/space.module.scss";

/** props */
import { GlobeButtonProps } from "./props";

/** contexts */
import { useToggleDispatch } from "../../../context/toggle";

/**
 * Renders the globe button component
 * @param {boolean} inverse - Whether if the globe button is styled in inverse
 */
export const GlobeButton: React.FC<GlobeButtonProps> = ({
  inverse = false,
}) => {
  return (
    <div
      className={`${[
        shape["br--30"],
        layout["flex"],
        layout["items-center"],
        color["bg--transparent"],
        space["p-t--13"],
        space["p-b--13"],
        space["p-l--15"],
        space["p-r--15"],
      ].join(" ")} ${
        inverse
          ? [animation["hover-background--white__transparent"]].join(" ")
          : [animation["hover-background--white__1"]].join(" ")
      }`}
    >
      <div className={[layout["items-center"], space["m-r--8"]].join(" ")}>
        <Globe width={16} fill={inverse ? "white" : "#363636"} />
      </div>
      <div className={layout["items-center"]}>
        <ChevronDown width={8} fill={inverse ? "white" : "#363636"} />
      </div>
    </div>
  );
};
