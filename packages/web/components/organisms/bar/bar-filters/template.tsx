import { Button } from "@atoms";
import { useFilterBarsTemplate } from "./use-template";

export type FiltersBarTemplateProps = {
  state: {
    activeSlide: number;
    translate: number;
    transition: number;
  };
  handlePreviousSlide?: () => void;
  handleNextSlide?: () => void;
  primaryFilters: string[];
  secondaryFilters: string[];
  handleFilterSelect: (filter: string) => void;
};

/**
 *
 * @param param0
 * @returns
 */
export const FiltersBarTemplate = ({
  primaryFilters,
  secondaryFilters,
  handleFilterSelect,
}: FiltersBarTemplateProps): JSX.Element => {
  const {
    containerRef,
    state,
    handleNextSlide,
    handlePreviousSlide,
  } = useFilterBarsTemplate();
  return (
    <div className="flex items-center">
      <div className="flex">
        {primaryFilters.map((filter, index) => {
          return (
            <div key={index} className="mr-2">
              <Button
                variant="filter"
                inverse
                label={filter}
                onClick={() => handleFilterSelect(filter)}
              />
            </div>
          );
        })}
      </div>
      <div className="mr-2 h-8 w-0.5 bg-gray-200 relative" />
      <div ref={containerRef} className="overflow-x-hidden relative py-1">
        {state.activeSlide > 0 && (
          <div
            className="absolute h-full left-0 top-0 z-40 w-24 flex items-center"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(255, 255, 255) 56.77%, rgba(255, 255, 255, 0) 94.47%)",
            }}
          >
            <Button
              variant="paginate"
              direction="chevronLeft"
              onClick={handlePreviousSlide}
            />
          </div>
        )}
        <div
          className="flex relative"
          style={{
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          {state.activeSlide > 0 && (
            <div className="absolute left-0 z-40">
              <Button
                variant="paginate"
                direction="chevronLeft"
                onClick={() => alert("clicked")}
              />
            </div>
          )}
          {secondaryFilters.map((filter, index) => {
            return (
              <div key={index} className="mr-2">
                <Button
                  variant="filter"
                  label={filter}
                  onClick={handlePreviousSlide}
                />
              </div>
            );
          })}
        </div>
        {state.activeSlide < 3 && (
          <div
            className="h-full absolute right-0 top-0 z-40 w-24 flex justify-end items-center"
            style={{
              backgroundImage:
                "linear-gradient(to left, rgb(255, 255, 255) 56.77%, rgba(255, 255, 255, 0) 94.47%)",
            }}
          >
            <Button
              variant="paginate"
              direction="chevronRight"
              onClick={handleNextSlide}
            />
          </div>
        )}
      </div>
    </div>
  );
};
