/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const RoomPanel: React.FC<{ images?: string[] }> = ({ images = [] }) => {
  return (
    <div css={{ paddingTop: "42%", position: "relative" }}>
      <div css={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            columnGap: 10,
            rowGap: 10,
            width: "100%",
            height: "100%",
          }}
        >
          <div>
            {images[0] ? (
              <img
                css={{
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderBottomLeftRadius: 8,
                  borderTopLeftRadius: 8,
                }}
                src={images[0]}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "lightgray",
                  borderBottomLeftRadius: 16,
                  borderTopLeftRadius: 16,
                }}
              />
            )}
          </div>
          <div
            css={{
              display: "grid",
              columnGap: 10,
              rowGap: 10,
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            <div>
              {images[1] ? (
                <img
                  css={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  src={images[1]}
                />
              ) : (
                <div
                  css={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "lightgray",
                  }}
                />
              )}
            </div>
            <div>
              {images[2] ? (
                <img
                  css={{
                    bottomTopRightRadius: 16,
                    backgroundSize: "cover",
                    backgroundRepeat: "repeat",
                  }}
                  src={images[2]}
                />
              ) : (
                <div
                  css={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "lightgray",
                    borderTopRightRadius: 16,
                  }}
                />
              )}
            </div>
            <div>
              {images[3] ? (
                <img
                  css={{
                    borderBottomRightRadius: 16,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  src={images[3]}
                />
              ) : (
                <div
                  css={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "lightgray",
                  }}
                />
              )}
            </div>
            <div>
              {images[3] ? (
                <img
                  css={{
                    borderBottomRightRadius: 16,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  src={images[3]}
                />
              ) : (
                <div
                  css={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "lightgray",
                    borderBottomRightRadius: 16,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
