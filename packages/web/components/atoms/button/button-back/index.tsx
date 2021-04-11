import { Icon, $Icon } from '@icons';

export interface BackButtonProps {}

/**
 * Renders the back button
 * @returns
 */
export const BackButton: React.FC<BackButtonProps> = () => {
  return (
    <div className="flex items-center bg-transparent">
      <div>
        <Icon
          variant={$Icon.ACTION}
          actionType="left"
          width={20}
          stroke="#61AFB2"
          strokeWidth={3}
        />
      </div>
      <div>
        <h4 className="text-sm text-green-700">Back</h4>
      </div>
    </div>
  );
};

export const back = (props) => {
  return {
    back: {
      component: <BackButton {...props} />,
    },
  };
};
