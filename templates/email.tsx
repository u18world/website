import * as React from "react";

interface EmailTemplateProps {
  Name: string;
  email: string;
  number: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Name,
  email,
  number,
  text,
}) => (
  <div>
    <p>First Name: {Name}</p>
    <p>Email / Discord ID: {email}</p>
    <p>Phone Number: {number}</p>
    <p>Text: {text}</p>
  </div>
);

export default EmailTemplate;
