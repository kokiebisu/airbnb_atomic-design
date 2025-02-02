export type SharingCardTemplateProps = {
  imgUrl?: string;
  title: string;
  description?: string;
};

export const SharingCardTemplate = ({
  imgUrl,
  title,
  description,
}: SharingCardTemplateProps): JSX.Element => {
  return (
    <div>
      <div>
        <img src={imgUrl} />
      </div>
      <div className="my-3">
        <h3>{title}</h3>
      </div>
      <div className="mb-3">
        <p className="text-sm leading-6">{description}</p>
      </div>
      <div>
        <p className="text-sm text-green-700">Go to experience</p>
      </div>
    </div>
  );
};
