import { useEffect, useState } from "react";

function ErrorDM() {
  const [showMsg, setShowMsg] = useState(false);

  function handleMessage() {
    if (window.scrollY > 0) {
      setShowMsg(true);
    } else {
      setShowMsg(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleMessage);

    return () => {
      window.removeEventListener("scroll", handleMessage);
    };
  });
  return (
    <div>
      {showMsg && (
        <div>
          <h1>Darkmode is under maintainance in these sections.</h1>
        </div>
      )}
    </div>
  );
}

export default ErrorDM;
