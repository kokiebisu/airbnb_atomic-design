import React from "react";

/** styles */
import layout from "../../../styles/layout.module.scss";
import shape from "../../../styles/shape.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import font from "../../../styles/font.module.scss";
import modal from "./modal.module.scss";

/** components */
import { Button } from "../../../components/atoms/button/button.component";

/** contexts */
import { useToggleDispatch } from "../../../context/toggle";
import { useAuthDispatch, useAuthState } from "../../../context/auth";
import { AuthContent } from "./content/content.auth";

/**
 * Renders the auth modal
 */
export const AuthModal: React.FC<{}> = () => {
  const toggleDispatch = useToggleDispatch();
  const authDispatch = useAuthDispatch();
  const authState = useAuthState();
  return (
    <div
      className={[
        modal["w__auth"],
        shape["shadow--lg"],
        shape["br--16"],
        color["bg--white"],
      ].join(" ")}
    >
      <div
        style={{ height: 60 }}
        className={[
          layout["flex"],
          layout["items-center"],
          color["b-b--white__2"],
          space["p-h--24"],
        ].join(" ")}
      >
        <div className={[layout["relative"], shape["w--full"]].join(" ")}>
          <div
            className={[
              layout["al--0"],
              layout["t---3"],
              color["bg--transparent"],
            ].join(" ")}
          >
            {authState.title === "Forgot password" ? (
              <Button
                type="modal"
                modal="back"
                onPress={() => authDispatch({ type: "auth_login" })}
              />
            ) : (
              <Button
                type="modal"
                modal="close"
                onPress={() => toggleDispatch({ type: "close_register" })}
              />
            )}
          </div>
          <div className={[layout["all-center"]].join(" ")}>
            <h3 className={[font["size--16"]].join(" ")}>{authState.title}</h3>
          </div>
        </div>
      </div>
      <AuthContent />
    </div>
  );
};
