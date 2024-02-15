import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        "service_lbgh2dj",
        "template_64mskrd",
        e.target,
        "89dD6EB-g_nbT8kgc"
      );

      if (response.status === 200) {
        console.log("Email sent successfully:", response.text);
        setSubmissionStatus({
          type: "success",
          message: "Email sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error sending email:", response.text);
        setSubmissionStatus({
          type: "error",
          message: "Error sending email. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus({
        type: "error",
        message: "Error sending email. Please try again later.",
      });
    }
  };

  return (
    <section
      className={`text-center md:pt-[12vh] pt-[6vh] fade-out m-auto md:w-[85%] w-80% leading-[1.4] font-Poppins pb-8 h-full`}
    >
      <h1 className="md:text-[4rem] mb-[3rem] text-[2rem] font-bold opacity-85">
        Reach Me Out!
      </h1>
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto p-8 rounded shadow-sm shadow-gray">
          <h2 className="text-2xl font-semibold mb-5 text-highlights">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-highlights"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-highlights"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-highlights"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-highlights  px-4 py-2 rounded-md hover:opacity-85 hover:text-highlight "
            >
              Submit
            </button>
          </form>

          {submissionStatus && (
            <div
              className={`mt-4 p-2 ${
                submissionStatus.type === "success"
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              } rounded-md`}
            >
              {submissionStatus.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
