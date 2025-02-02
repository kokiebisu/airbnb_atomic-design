export type PrivacyButtonTemplateProps = {
  title: string;
  inverse?: boolean;
  onClick: () => void;
};

/**
 * Renders the privacy button component
 * @param {string} title - Title of the button
 * @param {boolean} inverse - Whether if the button takes the inverse style or not
 */
export const PrivacyButtonTemplate = ({
  title,
  inverse,
}: PrivacyButtonTemplateProps): JSX.Element => {
  return (
    <div
      className={`inline-block sm:inline-flex whitespace-nowrap py-3 px-6 font-medium rounded-md text-sm justify-center ${
        inverse
          ? "bg-gray-900 border-transparent border"
          : "bg-transparent border border-black"
      }`}
    >
      <h4 className={`${inverse ? "text-white" : "text-black"} font-medium`}>
        {title}
      </h4>
    </div>
  );
};
