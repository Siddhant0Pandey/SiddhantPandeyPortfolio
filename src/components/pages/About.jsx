/* eslint-disable react/prop-types */
function About({ isdarkmode }) {
  console.log(isdarkmode);
  return (
    <div className={` ${isdarkmode ? "dark" : "light"} h-screen`}>
      <div className="text-[1.5rem]">This is About World</div>
    </div>
  );
}

export default About;
