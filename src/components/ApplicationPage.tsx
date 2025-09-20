import Input from "./Input";
import TextArea from "./TextArea";
import DateInput from "./DateInput";
import Heading from "./Heading";

import { motion } from "framer-motion";

const ApplicationPage = () => {
  return (
    <>
      <Heading title="Prihláška" />

      <div className="flex justify-center py-10 px-4">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-gray-100 shadow-xl rounded-2xl px-8 pt-8 pb-10 w-full max-w-lg"
        >
          <div className="space-y-6">
            <Input
              htmlFor="name"
              label="Name"
              id="name"
              type="text"
              placeholder="Enter your name"
              className="rounded-xl border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition"
            />

            <Input
              htmlFor="email"
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              className="rounded-xl border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition"
            />

            <Input
              htmlFor="phone"
              label="Phone"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              className="rounded-xl border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition"
            />

            <DateInput
              htmlFor="date-input"
              label="Date"
              id="date-input"
              type="date"
              className="rounded-xl border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition"
            />

            <TextArea
              htmlFor="message"
              label="Message"
              id="message"
              placeholder="Enter your message"
              className="rounded-xl border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition"
            />

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-sm shadow-md hover:shadow-lg transition-all"
                type="submit"
              >
                Submit
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default ApplicationPage;
