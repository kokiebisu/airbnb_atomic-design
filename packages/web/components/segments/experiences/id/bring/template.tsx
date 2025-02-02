import { Bullet, Icon } from "@atoms";

export type BringSegmentTemplateProps = {
  necessities: string[];
};

/**
 * Renders the 'What to BringSegment' section
 * @param {Object[]} necessities - List of things the users have to BringSegment
 */
export const BringSegmentTemplate = ({
  necessities,
}: BringSegmentTemplateProps): JSX.Element => {
  return (
    <div>
      <div>
        <h3 className="font-medium mb-4 text-gray-700 text-lg">
          What to Bring
        </h3>
      </div>
      <div className="mb-5">
        {necessities.map((necessity, index) => {
          return (
            <div key={index} className="mb-4">
              <Bullet
                variant="primary"
                icon={
                  <Icon
                    variant="fill"
                    fillType="check"
                    fill="black"
                    width={24}
                    height={24}
                  />
                }
                title={necessity}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
