"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    )
      return;
    window.location.href = `mailto:naderate@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };

  return (
    <div className="min-h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="space-y-6 mt-16">
        <h4 className="text-xl sm:text-3xl lg:text-6xl font-semibold text-center">
          I&apos;ve got what you need{" "}
          <span className="underline decoration-green-300/50">
            Let&apos;s talk
          </span>
        </h4>
        <div className="flex items-center space-x-5 justify-center">
          <FaWhatsapp size={25} className="animate-pulse text-green-300" />
          <a href="https://wa.me/+201008564637" className="text-2xl">
            +201008564637
          </a>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <FaRegEnvelope size={25} className="animate-pulse text-green-300" />
          <a href="mailto:nadertate@gmail.com" className="text-2xl">
            nadertate@gmail.com
          </a>
        </div>
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2">
            <Input
              {...register("name")}
              label="Name"
              type="text"
              variant="bordered"
            />
            <Input
              {...register("email")}
              label="Email"
              type="Email"
              variant="bordered"
            />
          </div>
          <Input
            {...register("subject")}
            label="Subject"
            type="text"
            variant="bordered"
          />
          <Textarea
            {...register("message")}
            label="Message"
            type="text"
            variant="bordered"
            rows={5}
            disableAutosize
          />
          <Button type="submit" fullWidth className="font-semibold">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
