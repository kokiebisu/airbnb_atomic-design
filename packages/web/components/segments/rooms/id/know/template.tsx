import { Bullet } from '@bullet';

export interface KnowTemplateProps {
  houseRules?: string[];
  healths?: string[];
  layoutType?: string;
}

/**
 * Renders the know section
 * @param {string[]} houseRules - List of rules the users must follow
 * @param {string[]} healths - List of health guidelines
 * @param {string} layoutType - The type of layout
 */
export const KnowTemplate: React.FC<KnowTemplateProps> = ({
  houseRules,
  healths,
  layoutType,
}) => {
  return (
    <div>
      <div>
        <h3 className="font-base mb-4 text-gray-700 text-lg">Things to know</h3>
      </div>
      <div className="flex">
        <div>
          <div className="mb-4">
            <h3>House rules</h3>
          </div>
          <div className="mb-6">
            {houseRules.map(
              (item: 'review' | 'verified' | 'superhost', index) => {
                return (
                  <div key={index} className="mb-2">
                    <Bullet variant="know" categoryType={item} />
                  </div>
                );
              }
            )}
          </div>
          <div>
            <u>Show all</u>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h3>Health & safety</h3>
          </div>
          <div className="mb-6">
            {healths.map((item: 'review' | 'verified' | 'superhost', index) => {
              return (
                <div key={index} className="mb-2">
                  <Bullet variant="know" categoryType={item} />
                </div>
              );
            })}
          </div>
          <div>
            <u>Show all</u>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h3>Cancellation policy</h3>
          </div>
          <div className="mb-6">
            <p className="font-thin">
              Add your trip to get the cancellation details for this stay.
            </p>
          </div>
          <div>
            <u>Add dates</u>
          </div>
        </div>
      </div>
    </div>
  );
};
