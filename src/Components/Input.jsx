import React from "react";

function Input({ type, value, onChange, placeholder, name }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-[#7E7E7E] rounded w-full mb-[24px] px-2 outline-none"
        required
      />
    </div>
  );
}

export default Input;
