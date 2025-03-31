import { motion } from "motion/react";
import BlurEffect from "./subcomponents/BlurEffect";

const ContactPage = () => {
  return (
    <BlurEffect>
      <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="text-lg">This is the Contact Page.</p>
      </div>
    </BlurEffect>
  );
};

export default ContactPage;
