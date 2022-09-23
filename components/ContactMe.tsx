import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:nathanaelpg8@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

    return (
        <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>

            <div className="flex flex-col space-y-6 md:space-y-10 max-h-[500px] md:max-h-screen px-14 md:px-0">
                <h4 className="text-4xl font-semibold">
                    I have got just what you need.{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        Lets Talk.
                    </span>
                </h4>

                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">+6285719637484</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">nathanaelpg8@gmail.com</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">Jakarta, Indonesia</p>
                </div>

                <form
                    className="flex space-y-2 flex-col w-fit mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                        <input
                            {...register("name")}
                            className="contactInput"
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            {...register("email")}
                            className="contactInput"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <input
                        {...register("subject")}
                        className="contactInput"
                        type="text"
                        placeholder="Subject"
                    />
                    <textarea
                        {...register("message")}
                        className="contactInput"
                        placeholder="Message"
                    />

                    <button
                        type="submit"
                        className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
