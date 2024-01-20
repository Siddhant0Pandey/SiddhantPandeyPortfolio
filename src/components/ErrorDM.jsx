import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function ErrorDM() {
  const [showMsg, setShowMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasScrollDown, setHasScrollDown] = useState(false);

  function handleMessage() {
    if (window.scrollY > 200 && !hasScrollDown) {
      setShowMsg(true);
      setLoading(true);
      setHasScrollDown(true); // Set the flag to true after the first scroll down
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleMessage);

    return () => {
      window.removeEventListener("scroll", handleMessage);
    };
  }, [hasScrollDown]);

  useEffect(() => {
    if (showMsg) {
      const timeoutId = setTimeout(() => {
        setShowMsg(false);
        setLoading(false);
      }, 8000);

      return () => clearTimeout(timeoutId);
    }
  }, [showMsg]);
  return (
    <div>
      {showMsg && (
        <div className={`error-message ${showMsg ? "show" : ""}`}>
          <h1 className="md:p-4 p-2">
            Darkmode is under maintainance in these sections.
            {loading && <div className="loading-bar"></div>}
          </h1>
        </div>
      )}
    </div>
  );
}

export default ErrorDM;
