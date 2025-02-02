import { Icon } from "@atoms";

export interface PreviewSegmentTemplateProps {
  title: string;
  ratings: number;
  numberOfReviews: number;
  superhost?: boolean;
  location: string;
  province: string;
  country: string;
}

/**
 * Renders the panel section
 * @param {string} title - Title of the section
 * @param {number} ratings - Rating of the room/experience
 * @param {number} numberOfReviews - Number of reviews for the room/experience
 * @param {boolean} superhost - Whether if the host is superhost or not
 * @param {string} location - Location of the room/experience
 * @param {string} province - Province of the room/experience
 * @param {string} country - Country of the room/experience
 */
export const PreviewSegmentTemplate: React.FC<PreviewSegmentTemplateProps> = ({
  title = "Title here",
  ratings = 5.0,
  numberOfReviews = 100,
  superhost = false,
  location = "City",
  province = "Province",
  country = "Country",
}) => {
  return (
    <div>
      <div>
        <div>
          <h3 className="text-gray-800 text-lg font-medium">{title}</h3>
        </div>
        <div className="mt-4 mb-5 flex justify-between items-center">
          <div className="flex items-center flex-wrap">
            <div>
              <Icon
                variant="fill"
                fillType="star"
                height={14}
                width={14}
                fill="black"
              />
            </div>
            <span className="pl-1 text-gray-700 text-sm font-bold">
              {ratings}
            </span>
            <span className="pl-1 text-gray-600 text-sm font-thin">
              ({numberOfReviews})
            </span>
            {superhost && (
              <>
                <span className="text-gray-600">&nbsp;·&nbsp;</span>
                <div>
                  <Icon
                    variant="fill"
                    fillType="superhost"
                    height={14}
                    width={14}
                    fill="#E61E4D"
                  />
                </div>
                <p className="pl-1 text-gray-600 text-sm font-light">
                  Superhost
                </p>
              </>
            )}
            <span className="font-thin text-gray-600">&nbsp;·&nbsp;</span>
            <a className="text-sm text-gray-600" href="">
              <u>
                {location}, {province}, {country}
              </u>
            </a>
          </div>
          <div className="hidden md:inline-block">
            <div className="pr-2 flex items-center">
              <a href="#" className="flex pl-2 items-center">
                <div>
                  <Icon
                    variant="fill"
                    fillType="share"
                    height={14}
                    width={14}
                    fill="#484848"
                  />
                </div>
                <p className="pl-3 text-sm text-gray-700">
                  <u>Share</u>
                </p>
              </a>
              <a className="flex ml-3 items-center">
                <div>
                  <Icon
                    variant="fill"
                    fillType="heart"
                    fill="#484848"
                    height={17}
                    width={17}
                  />
                </div>
                <u className="pl-3 text-sm text-gray-700">Save</u>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <Panel variant={$Panel.ROOM} />
      </div> */}
    </div>
  );
};
