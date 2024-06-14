"use client";
import React, { useRef, useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function ContactForm() {
  const [date, setDate] = useState<Date | undefined>();
  const [shadowshipName, setShadowShipName] = useState<string | undefined>();
  const [cityName, setCityName] = useState<string | undefined>();
  const [shadowPartner, setShadowPartner] = useState<string | undefined>();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const gradeRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const schoolRef = useRef<HTMLInputElement | null>(null);

  const [NameError, setNameError] = useState("");
  const [gradeError, setGradeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [shadowshipError, setShadowShipError] = useState("");
  const [shadowpartnerError, setShadowPartnerError] = useState("");
  const [schoolError, setSchoolError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const sendEmail = async function name(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setNameError("");
    setShadowPartnerError("");
    setGradeError("");
    setEmailError("");
    setPhoneError("");
    setShadowShipError("");
    setSchoolError("");

    let isValid = true;
    if (!nameRef.current?.value) {
      setNameError("First name is required");
      isValid = false;
    }
    if (!gradeRef.current?.value) {
      setGradeError("Grade is required");
      isValid = false;
    }
    if (!emailRef.current?.value) {
      setEmailError("Email is required");
      isValid = false;
    }

    if (
      !phoneRef.current?.value ||
      phoneRef.current?.value.toString().length < 10
    ) {
      setPhoneError("Phone number is 10 digits long");
      isValid = false;
    }

    if (!schoolRef.current?.value) {
      setSchoolError("Please send us your school name.");
      isValid = false;
    }

    if (isValid) {
      try {
        const data = {
          name: nameRef.current?.value,
          students: gradeRef.current?.value,
          email: emailRef.current?.value,
          phone: phoneRef.current?.value,
          school: schoolRef.current?.value,
          principal: schoolRef.current?.value,
          city: cityName,
          syllabus: shadowshipName,
        };
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log(responseData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div>
      <div className="pt-16 pb-16 flex items-center justify-center antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.02] relative overflow-hidden">
        <div className=" dark:border-white/[0.2] border border-transparent max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Image src="/logo.png" alt="logo" height={100} width={100} />
            </div>
          </div>
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Register Your school
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            To get your program certificate, enter your details and certificate
            will be shared to the email ID within 24hrs.
          </p>

          <form className="my-8" onSubmit={sendEmail}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="name">POC Name</Label>
              <Input id="name" placeholder="Tyler" type="text" ref={nameRef} />
              {NameError && <p className="text-red-500 text-sm">{NameError}</p>}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="grade">Total Students</Label>
              <Input
                id="grade"
                placeholder="9999"
                type="number"
                ref={gradeRef}
              />
              {gradeError && (
                <p className="text-red-500 text-sm">{gradeError}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="school">School Name</Label>
              <Input
                id="school"
                placeholder="Eg: WhatIsMyGoal School"
                type="string"
                ref={schoolRef}
              />
              {schoolError && (
                <p className="text-red-500 text-sm">{schoolError}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="principal">Principal Name</Label>
              <Input
                id="principal"
                placeholder=""
                type="string"
                ref={schoolRef}
              />
              {schoolError && (
                <p className="text-red-500 text-sm">{schoolError}</p>
              )}
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="certificate@whatismygoal.com"
                type="text"
                ref={emailRef}
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="number" ref={phoneRef} />
              {phoneError && (
                <p className="text-red-500 text-sm">{phoneError}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="city">City</Label>
              <Select onValueChange={setCityName}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your city name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Mumbai">Mumbai</SelectItem>
                    <SelectItem value="Delhi">Delhi</SelectItem>
                    <SelectItem value="Bengaluru">Bengaluru</SelectItem>
                    <SelectItem value="Kolkata">Kolkata</SelectItem>
                    <SelectItem value="Chennai">Chennai</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="Pune">Pune</SelectItem>
                    <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                    <SelectItem value="Surat">Surat</SelectItem>
                    <SelectItem value="Jaipur">Jaipur</SelectItem>
                    <SelectItem value="Lucknow">Lucknow</SelectItem>
                    <SelectItem value="Kanpur">Kanpur</SelectItem>
                    <SelectItem value="Nagpur">Nagpur</SelectItem>
                    <SelectItem value="Visakhapatnam">Visakhapatnam</SelectItem>
                    <SelectItem value="Indore">Indore</SelectItem>
                    <SelectItem value="Thane">Thane</SelectItem>
                    <SelectItem value="Bhopal">Bhopal</SelectItem>
                    <SelectItem value="Pimpri-Chinchwad">
                      Pimpri-Chinchwad
                    </SelectItem>
                    <SelectItem value="Patna">Patna</SelectItem>
                    <SelectItem value="Vadodara">Vadodara</SelectItem>
                    <SelectItem value="Ghaziabad">Ghaziabad</SelectItem>
                    <SelectItem value="Ludhiana">Ludhiana</SelectItem>
                    <SelectItem value="Agra">Agra</SelectItem>
                    <SelectItem value="Nashik">Nashik</SelectItem>
                    <SelectItem value="Faridabad">Faridabad</SelectItem>
                    <SelectItem value="Meerut">Meerut</SelectItem>
                    <SelectItem value="Rajkot">Rajkot</SelectItem>
                    <SelectItem value="Varanasi">Varanasi</SelectItem>
                    <SelectItem value="Srinagar">Srinagar</SelectItem>
                    <SelectItem value="Aurangabad">Aurangabad</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="shadowshipname">Syllabus</Label>
              <Select onValueChange={setShadowShipName}>
                <SelectTrigger>
                  <SelectValue placeholder="Select the school syllabus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Central Board of Secondary Education (CBSE)">
                      Central Board of Secondary Education (CBSE)
                    </SelectItem>
                    <SelectItem value="Indian Certificate of Secondary Education (ICSE)">
                      Indian Certificate of Secondary Education (ICSE)
                    </SelectItem>
                    <SelectItem value="State Boards">State Boards</SelectItem>
                    <SelectItem value="International Baccalaureate (IB)">
                      International Baccalaureate (IB)
                    </SelectItem>
                    <SelectItem value="Cambridge International Examinations (CIE)">
                      Cambridge International Examinations (CIE)
                    </SelectItem>
                    <SelectItem value="National Institute of Open Schooling (NIOS)">
                      National Institute of Open Schooling (NIOS)
                    </SelectItem>
                    <SelectItem value="Council for the Indian School Certificate Examinations (CISCE)">
                      Council for the Indian School Certificate Examinations
                      (CISCE)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
