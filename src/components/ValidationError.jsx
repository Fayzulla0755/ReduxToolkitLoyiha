import React, { useCallback } from "react";
import { useSelector } from "react-redux";

export default function ValidationError() {
  const { error } = useSelector((state) => state.auth);
  const errorMassage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(",");
      return `${name}- ${msg}`;
    });
  }, [error]);

  return (
    error !== null && (
        errorMassage().map(error=>(
            <div className="alert alert-danger m-1 p-1 text-start" key={error} role="alert">
        {error}
      </div>
        ))
      
    )
  );
}
