import { useEffect, useState, useCallback, useRef } from "react";

function ErrorDM() {
  const [showMsg, setShowMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasScrollDown, setHasScrollDown] = useState(false);
  const timeoutRef = useRef(null);

  const handleMessage = useCallback(() => {
    if (window.scrollY > 200 && !hasScrollDown) {
      setShowMsg(true);
      setLoading(true);
      setHasScrollDown(true);
    }
  }, [hasScrollDown]);

  useEffect(() => {
    window.addEventListener("scroll", handleMessage);

    return () => {
      window.removeEventListener("scroll", handleMessage);
      clearTimeout(timeoutRef.current);
    };
  }, [handleMessage, hasScrollDown]);

  useEffect(() => {
    if (showMsg) {
      timeoutRef.current = setTimeout(() => {
        setShowMsg(false);
        setLoading(false);
      }, 10000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [showMsg]);

  return (
    <div>
      {showMsg && (
        <div className={`error-message ${showMsg ? "show" : ""}`}>
          <h1 className="md:p-4 p-2">
            Darkmode is under maintenance in these sections.
            {loading && <div className="loading-bar"></div>}
          </h1>
        </div>
      )}
    </div>
  );
}

export default ErrorDM;
