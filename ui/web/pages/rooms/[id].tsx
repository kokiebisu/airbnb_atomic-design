import { AnimatePresence, motion } from "framer-motion";

/** contexts */
import { useToggleState } from "@context/toggle";

/** components */
import { Header } from "@header";
import { Footer } from "@footer";
import { Template } from "@template/rooms/id";
import { Card } from "@card";
import { Modal } from "@modal";

/** styles */
import responsive from "@styles/responsive.module.scss";
import layout from "@styles/layout.module.scss";
import details from "@styles/details.module.scss";
import staysDetail from "@styles/staysDetail.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";

/** hooks */
import { useHandleScroll } from "@hooks/useHandleScroll";

/**
 * Render the component for path /rooms/[id]
 */
const id: () => string | JSX.Element = () => {
  const toggleState = useToggleState();
  const scrollPosition = useHandleScroll();
  return (
    <>
      <div>
        <div style={{ position: "relative", zIndex: 9000 }}>
          <Header
            extendsTo={[details["w__wrapper"]].join(" ")}
            variant="white"
          />
        </div>
        <AnimatePresence>
          {scrollPosition > 506 && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={[responsive["n_to_b--sm"]].join(" ")}
              style={{
                position: "fixed",
                top: 0,
                zIndex: 50,
                width: "100%",
              }}
            >
              <Header variant="details" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={[].join(" ")}>
          <Template
            extendsTo={[staysDetail["flex__panel"]].join(" ")}
            variant="panel"
          />
        </div>
        <div
          className={[layout["container"], staysDetail["m__content"]].join(" ")}
        >
          <div className={[details["flex__details"]].join(" ")}>
            <div className={[details["w__details--left"]].join(" ")}>
              {/* <Section
                layoutType='room'
                extendsTo={[staysDetail['b__characteristics']].join(' ')}
                type='characteristics'
                characteristics={[
                  'house',
                  'sparkle',
                  'door',
                  'calendar',
                  'guidelines',
                ]}
              /> */}
              <Template
                variant="description"
                extendsTo={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
              />
              <Template
                extendsTo={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
                variant="arrangements"
                title="Sleeping arrangements"
              />
              <Template
                extendsTo={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
                variant="amenities"
                title="Amenities"
              />
            </div>
            <div
              style={{ paddingTop: 20, paddingBottom: 56 }}
              className={[details["w__details--right"]].join(" ")}
            >
              <Card
                variant="checkin"
                extendsTo={[
                  layout["flex"],
                  layout["justify-end"],
                  layout["sticky"],
                  layout["t--80"],
                ].join(" ")}
              />
            </div>
          </div>
          <Template
            extendsTo={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            variant="reviews"
          />
          <Template
            extendsTo={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            variant="host"
          />
          <Template
            extendsTo={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            variant="know"
          />
        </div>
        <div className={[layout["container"]].join(" ")}>
          <Template
            extendsTo={[
              color["b-t--white__2"],
              space["p-v--32"],
              color["bg--white__1"],
            ].join(" ")}
            variant="other"
          />
        </div>
        <Footer />
        <div
          className={[
            staysDetail["display__availability"],
            shape["w--full"],
          ].join(" ")}
          style={{ position: "fixed", bottom: 0, zIndex: 9999 }}
        >
          <Modal variant="availability" />
        </div>
      </div>
      {toggleState.auth && (
        <div
          style={{
            position: "fixed",
            top: 0,
            zIndex: 60,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Modal
            variant="menu"
            extendsTo={[
              layout["flex"],
              layout["justify-center"],
              layout["items-center"],
              shape["h--100v"],
            ].join(" ")}
          />
        </div>
      )}
    </>
  );
};

export default id;
