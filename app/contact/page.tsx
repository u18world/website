"use client";
import React, { useRef, useState, useEffect } from "react";
import { Label } from "@/components/cui/label";
import { Input } from "@/components/cui/input";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const NameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLInputElement | null>(null);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [textError, setTextError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const sendEmail = async function name(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setNameError("");
    setEmailError("");
    setTextError("");

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    let isValid = true;
    if (!NameRef.current?.value) {
      setNameError("First name is required");
      isValid = false;
    }
    if (!emailRef.current?.value) {
      setEmailError("Email is required");
      isValid = false;
    }

    if (
      textRef.current?.value &&
      textRef.current?.value.toString().length <= 12
    ) {
      setTextError("Please send us some details.");
      isValid = false;
    }

    if (isValid) {
      try {
        const firstName = NameRef.current?.value;
        const email = emailRef.current?.value;
        const text = textRef.current?.value;
        const data = {
          firstName: firstName,
          email: email,
          text: text,
        };
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="">
      <div className="h-screen flex items-center justify-center dark:bg-black/[0.96] antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.02] relative overflow-hidden">
        <div className="dark:border-white/[0.2] border border-transparent max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Contact Form
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            description
          </p>

          <form className="my-8" onSubmit={sendEmail}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                ref={NameRef}
              />
              {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="imaginee@lol.com"
                type="text"
                ref={emailRef}
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="text">Message</Label>
              <Input
                id="text"
                placeholder="blah blah blah"
                type="string"
                ref={textRef}
              />
              {textError && <p className="text-red-500 text-sm">{textError}</p>}
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send &rarr;
              <BottomGradient />
            </button>
            {isLoading ? (
              <></>
            ) : (
              <p className="items-center text-center pt-4 text-blue-500 text-md">
                Sent Successfully
              </p>
            )}
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
