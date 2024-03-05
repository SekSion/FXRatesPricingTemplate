import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface IProps {
  size: "small" | "medium" | "large";
  label?: string;
  labelPosition?: "left" | "right";
  onChange?: (isChecked: boolean) => void;
}

const Switcher = ({
  size,
  label = "",
  labelPosition = "left",
  onChange,
}: IProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    const newValue = !isToggled;
    setIsToggled(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const renderLabel = () => {
    if (!label) return null;
    return (
      <span className={`switcher-label ${labelPosition || "left"}`}>
        {label}
      </span>
    );
  };

  return (
    <div className={`switcher ${size}`} onClick={toggleSwitch}>
      {labelPosition === "left" && renderLabel()}
      <div className={`switcher-pill ${isToggled ? "active" : ""}`}>
        <div className="circle">
          {isToggled && (
            <Icon
              fontSize={
                size === "small" ? "12px" : size === "medium" ? "13px" : "16px"
              }
              className="switcher-icon"
              icon="mingcute:check-fill"
            />
          )}
        </div>
      </div>
      {labelPosition === "right" && renderLabel()}
    </div>
  );
};

export default Switcher;
