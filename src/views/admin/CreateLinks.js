import React from "react";

// components

import CardLink from "components/Cards/CardLink.js";
import CardImage from "components/Cards/CardImage.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardLink />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardImage />
        </div>
      </div>
    </>
  );
}
