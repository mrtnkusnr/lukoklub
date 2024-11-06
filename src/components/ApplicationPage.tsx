import Input from "./Input";

const ApplicationPage = () => {
  return (
    <div className="flex justify-center  h-fit">
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

        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="border rounded-sm w-full py-2 px-3 leading-tight focus:border-orange-500 focus:ring-0 focus:outline-none"
            id="message"
            placeholder="Enter your message"
          ></textarea>
        </div>
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
  );
};

export default ApplicationPage;
