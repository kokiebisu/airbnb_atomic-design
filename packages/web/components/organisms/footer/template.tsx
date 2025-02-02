import { Button } from "@atoms";
import { Icon } from "@atoms";

export interface FooterTemplateProps {
  handleRedirectToPath: (url: string) => void;
  items: { name: string; items: { url: string; name: string }[] }[];
}

export const FooterTemplate = ({
  handleRedirectToPath,
  items,
}: FooterTemplateProps): JSX.Element => {
  return (
    <footer className="border-t border-gray-300 py-6 bg-gray-50">
      <div className="px-8 md:px-20 max-w-11xl">
        <div className="border-b border-gray-300 md:flex">
          {items.map((section, index) => {
            return (
              <div
                key={index}
                className="border-gray-300 mt-6 first:mt-0 md:w-1/4 md:pb-6"
              >
                <div>
                  <h3 className="uppercase text-sm">{section.name}</h3>
                </div>
                <div className="my-4 grid md:grid-cols-3 lg:block">
                  {section.items.map(({ name, url }, index) => {
                    return (
                      <div className="my-4 mt-3 mb-3" key={index}>
                        <Button
                          variant="link"
                          onClick={() => handleRedirectToPath(url)}
                          title={name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:flex md:items-center md:justify-between md:flex-row-reverse">
          <div className="flex items-center mx-0 my-8">
            <div>
              <button className="flex items-center mr-3 bg-transparent border-none">
                <Icon
                  variant="fill"
                  fillType="globe"
                  width={16}
                  height={16}
                  fill="black"
                />
                <u className="text-sm mr-3">English(CA)</u>
              </button>
            </div>
            <div>
              <Button
                font={24}
                onClick={() => alert("clicked")}
                variant="underline"
                title="$ CAD"
                bold
              />
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <h4 className="text-md">
                &copy; 2020 Airbnb, Inc. All rights reserved
              </h4>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">&nbsp;&nbsp;· &nbsp;</div>
              <div className="mr-3">
                <Button
                  variant="link"
                  title="Privacy"
                  onClick={() => handleRedirectToPath("/")}
                />
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className="mr-3">
                <Button
                  variant="link"
                  title="Terms"
                  onClick={() => handleRedirectToPath("/")}
                />
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className="mr-3">
                <Button
                  variant="link"
                  title="Sitemap"
                  onClick={() => handleRedirectToPath("/")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
