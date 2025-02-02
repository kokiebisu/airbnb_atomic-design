import { Button } from "@atoms";
// import { Card } from "@card";
import { useSlide } from "@hooks/useSlide";

export interface StartingSegmentTemplateProps {
  title: string;
  cards: { imgUrl: string; videoUrl: string }[];
}

export const StartingSegmentTemplate: React.FC<StartingSegmentTemplateProps> = ({
  title,
  cards,
}) => {
  const { state, containerRef, width, previous, next } = useSlide("whole");

  const displayingColumns = () => {
    if (width > 1128) {
      return 3;
    }
    if (width > 700) {
      return 2;
    }
    return 1;
  };

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <div className="my-4 flex items-center justify-between">
        <div>
          <h3 className="text-2xl">{title}</h3>
        </div>
        <div className="flex items-center">
          <div className="mr-3">
            <Button
              variant="underline"
              title={`Show (${cards.length})`}
              font={14}
              onClick={() => alert("clicked")}
            />
          </div>
          <div className="flex items-center">
            <div className="mx-2">
              <Button
                variant="paginate"
                direction="chevronLeft"
                onClick={previous}
                //   disable={state.activeSlide === 0}
              />
            </div>
            <div className="mx-2">
              <Button
                variant="paginate"
                direction="chevronRight"
                onClick={next}
                //   disable={
                //     state.activeSlide ===
                //     Math.ceil(availables.length / displayingColumns) - 1
                //   }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full">
        <div
          style={{
            width: width * (cards.length / displayingColumns()),
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div className="flex">
            {/* {cards.map((card, index) => {
              const { imgUrl, videoUrl } = card || {};
              return (
                <div key={index} style={{ width: width / displayingColumns() }}>
                  <div className="mr-3">
                    <Card
                      variant="starting"
                      imgUrl={imgUrl}
                      videoUrl={videoUrl}
                    />
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};
