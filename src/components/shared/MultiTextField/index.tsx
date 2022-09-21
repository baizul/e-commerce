import classNames from "classnames";
import React, { useState } from "react";

const MultiTextField = ({
  required = false,
  id,
  label,
  rows,
  value,
  setValue,
}) => {
 

  return (
    <div className={classNames("flex flex-col space-y-2")}>
      <div
        className={classNames(
          "flex p-4 border shadow-inputField items-center border-quartz rounded resize-none"
        )}
      >
        <div className="flex flex-col w-full">
          <textarea
          onChange={(e)=>setValue(e.target.value)}
            placeholder={label}
            id={id}
            value={value}
            className={classNames("outline-none !w-full input_placeholder resize-none text-xs lg:!text-sm text-black")}
            autoComplete="off"
            rows={rows}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiTextField;
