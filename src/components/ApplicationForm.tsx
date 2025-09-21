// components/ApplicationForm.tsx
import React from "react";
import Input from "./Input";
import DateInput from "./DateInput";
import TextArea from "./TextArea";
import Button from "./Button";

const ApplicationForm: React.FC = () => {
  return (
    <form className="bg-white border border-gray-100 shadow-xl rounded-2xl px-8 pt-8 pb-10 w-full max-w-lg">
      <div className="space-y-6">
        <Input
          htmlFor="name"
          label="Meno"
          id="name"
          type="text"
          placeholder="Zadajte svoje meno"
          className="rounded-xl border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition"
        />

        <Input
          htmlFor="email"
          label="Email"
          id="email"
          type="email"
          placeholder="Zadajte svoj email"
          className="rounded-xl border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition"
        />

        <Input
          htmlFor="phone"
          label="Telefón"
          id="phone"
          type="text"
          placeholder="Zadajte svoje telefónne číslo"
          className="rounded-xl border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition"
        />

        <DateInput
          htmlFor="date-input"
          label="Dátum narodenia"
          id="date-input"
          type="date"
          className="rounded-xl border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition"
        />

        <TextArea
          htmlFor="message"
          label="Správa"
          id="message"
          placeholder="Napíšte svoju správu"
          className="rounded-xl border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition"
        />

        <div className="flex items-center space-x-3">
          <input
            id="collaboration"
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
          />
          <label htmlFor="collaboration" className="text-gray-700">
            Mám záujem o komerčnú spoluprácu alebo firemnú akciu
          </label>
        </div>

        <div className="pt-4">
          <Button label="Odoslať" />
        </div>
      </div>
    </form>
  );
};

export default ApplicationForm;
