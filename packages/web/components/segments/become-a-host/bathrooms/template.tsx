import { Input } from "@atoms";

export type BathroomsSegmentTemplateProps = {
  bathrooms: number;
  handleCounterAdd: (type: string) => void;
  handleCounterSubtract: (type: string) => void;
};

export const BathroomsSegmentTemplate: React.FC<BathroomsSegmentTemplateProps> = ({
  bathrooms,
  handleCounterAdd,
  handleCounterSubtract,
}) => {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl text-gray-700">How many bathrooms?</h3>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-700">
          Count bathrooms that don't have a shower or bathtub as a half
          bathroom.
        </p>
      </div>
      <div style={{ width: 300 }} className="mb-6">
        <div className="mb-3">
          <Input
            title="Bathrooms"
            variant="counter"
            value={bathrooms}
            onAdd={() => handleCounterAdd("bathrooms")}
            onSubtract={() => handleCounterSubtract("bathrooms")}
            min={1}
            max={15}
            // type="create"
          />
        </div>
      </div>
    </div>
  );
};
