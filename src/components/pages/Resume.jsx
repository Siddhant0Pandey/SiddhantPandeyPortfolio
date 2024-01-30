/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

// import { FaFileDownload } from "react-icons/fa";
import ReactCurvedText from "react-curved-text";

function Resume() {
  return (
    <div>
      <ReactCurvedText
        width={370}
        height={300}
        cx={190}
        cy={120}
        rx={80}
        ry={80}
        startOffset={0}
        reversed={true}
        text="Sanah Shop - Sanah shop - Sanah shop - Sanah shop - "
        textProps={{ style: { fontSize: 20.5, transform: "rotate(0deg)" } }}
        className="rotater absolute top-0 bottom-10"
      />
    </div>
  );
}

export default Resume;
