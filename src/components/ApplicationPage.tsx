import Input from "./Input";
import TextArea from "./TextArea";
import DateInput from "./DateInput";
import Heading from "./Heading";

const ApplicationPage = () => {
  return (
    <>
      <Heading title="Prihláška"></Heading>
      <div className="flex justify-center h-fit">
        <form className="border border-gray-200 shadow-sm rounded-sm px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <Input
            htmlFor="name"
            label="Name"
            id="name"
            type="text"
            placeholder="Enter your name"
          ></Input>

          <Input
            htmlFor="email"
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
          ></Input>

          <Input
            htmlFor="phone"
            label="Phone"
            id="phone"
            type="text"
            placeholder="Enter your phone number"
          ></Input>

          <DateInput
            htmlFor="date-input"
            label="Date"
            id="date-input"
            type="date"
          ></DateInput>

          <TextArea
            htmlFor="message"
            label="Message"
            id="message"
            placeholder="Enter your message"
          ></TextArea>

          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-600  text-white py-2 px-4 rounded-sm-sm"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplicationPage;
