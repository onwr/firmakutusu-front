// src/components/common/Input.jsx
import React from "react";

export const FormInput = ({
  label,
  name,
  value,
  onChange,
  className = "",
  labelClassName = "",
  inputClassName = "",
  icon = "/images/icons/profil/duzenlenebilir.svg",
  labelWidth = "w-32",
  ...props
}) => {
  return (
    <div className={`flex flex-col sm:items-center gap-2 sm:gap-5 sm:flex-row ${className}`}>
      <p className={`flex ${labelWidth} items-center gap-1.5 text-[#007356] montserrat font-medium ${labelClassName}`}>
        {icon && <img src={icon} alt="" />}
        {label}
      </p>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className={`py-3 px-[10px] border border-[#A2ACC7] border-dashed outline-0 rounded-lg w-full text-[#1D547D] ${inputClassName}`}
        {...props}
      />
    </div>
  );
};

export const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  className = "",
  labelClassName = "",
  textareaClassName = "",
  icon = "/images/icons/profil/duzenlenebilir.svg",
  labelWidth = "w-32",
  rows = 4,
  ...props
}) => {
  return (
    <div className={`flex flex-col sm:items-start gap-2 sm:gap-5 sm:flex-row ${className}`}>
      <p className={`flex ${labelWidth} items-center gap-1.5 text-[#007356] montserrat font-medium ${labelClassName}`}>
        {icon && <img src={icon} alt="" />}
        {label}
      </p>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`py-3 px-[10px] border w-full border-[#A2ACC7] border-dashed outline-0 rounded-lg text-[#1D547D] ${textareaClassName}`}
        {...props}
      ></textarea>
    </div>
  );
};
