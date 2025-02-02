import { Bar } from "@bar";
import { Header } from "@header";

export type CreateLayoutProps = {
  title?: string;
  left?: JSX.Element;
  right?: JSX.Element;
  next: () => void;
  back: () => void;
  percentage: number;
  criteria?: boolean;
};

export const CreateLayout = ({
  title = "Property and guests",
  left,
  right,
  next,
  back,
  criteria = false,
  percentage,
}: CreateLayoutProps): JSX.Element => {
  return (
    <div>
      <div className="sticky z-50 top-0">
        <div>
          <Header variant="stay" title={title} />
        </div>
        <div>
          <Bar variant="progress" percentage={percentage} />
        </div>
      </div>
      <div
        className="flex overflow-y-auto"
        style={{ minHeight: "calc(100vh - 75px)" }}
      >
        <div className="flex justify-end w-full sm:w-55/100">
          <div className="w-full sm:max-w-[550px] pb-36">
            <div className="pt-10 px-8">
              <div className="z-10">{left}</div>
            </div>
          </div>
          <div className="justify-center sm:justify-end bg-white w-full fixed bottom-0 z-50 flex max-w-full sm:max-w-55/100">
            <div style={{ maxWidth: 550 }} className="px-8 w-full">
              <Bar
                variant="create"
                handleNextPage={next}
                handlePreviousPage={back}
                criteria={criteria}
              />
            </div>
          </div>
        </div>
        <div className="hidden sm:block bg-gray-100" style={{ width: "45%" }}>
          {right}
        </div>
      </div>
    </div>
  );
};
