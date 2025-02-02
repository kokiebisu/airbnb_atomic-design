import { Icon } from "@atoms";

export type CounterInputTemplateProps = {
  title?: string;
  subtitle?: string;
  value?: any;
  onAdd: () => void;
  onSubtract: () => void;
  min: number;
  max: number;
};

export const CounterInputTemplate = ({
  title,
  subtitle,
  value,
  onAdd,
  onSubtract,
  min,
  max,
}: CounterInputTemplateProps): JSX.Element => {
  return (
    <div className="py-3 flex items-center justify-between">
      <div>
        <div>
          <h3 className="text-sm">{title}</h3>
        </div>
        <div>
          <p className="text-xs text-gray-600">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <button
            disabled={value === min}
            className={`bg-white border-solid rounded-full p-2 border-2 ${
              value === min ? "border-gray-500" : `border-green-700`
            }`}
            onClick={onSubtract}
          >
            <Icon
              variant="stroke"
              strokeType="minus"
              width={15}
              height={15}
              stroke={value === min ? "black" : "green"}
              strokeWidth={1}
            />
          </button>
        </div>
        <div className="flex justify-center w-12">
          <h3 className="text-sm">{value < max ? value : `${value}+`}</h3>
        </div>
        <div>
          <button
            disabled={value === max}
            className={`bg-white border-solid rounded-full p-2 border-2 ${
              value === max ? "border-gray-500" : `border-green-700`
            }`}
            onClick={onAdd}
          >
            <Icon
              variant="fill"
              fillType="plus"
              width={15}
              height={15}
              fill={value === max ? "black" : "green"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
