import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
  { type = "text", className = "", isFocused = false, ...props },
  ref
) {
  const internalRef = useRef();
  const input = ref || internalRef;

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, [input, isFocused]);

  return (
    <input
      {...props}
      type={type}
      className={
        "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-md " +
        className
      }
      ref={input}
    />
  );
});
