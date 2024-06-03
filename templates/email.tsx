import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  text,
}) => (
  <div>
    <p>First Name: {name}</p>
    <p>Email: {email}</p>
    <p>Text: {text}</p>
  </div>
);

export default EmailTemplate;
