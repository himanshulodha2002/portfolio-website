// "use server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// const validateEmail = (value: unknown) => {
//   if (!value || typeof value !== "string") return false;
//   return true;
// };

// const sendEmail = async (formData: FormData) => {
//   const senderEmail = formData.get("senderEmail") as string | null;
//   const message = formData.get("message") as string | null;
//   if (
//     !validateEmail(senderEmail) ||
//     !validateEmail(message) ||
//     (message && message.length > 5000) ||
//     (senderEmail && senderEmail.length > 500)
//   ) {
//     return {
//       error: "Invalid email or message",
//     };
//   }
//   try {
//     await resend.emails.send({
//       from: "Contact Form <onbording@resend.dev>",
//       to: "himanshulodha2003@gmail.com",
//       subject: "New message from your website",
//       replyTo: senderEmail as string,
//       text: message as string,
//     });
//   } catch (error) {
//     if (error instanceof Error) {
//       return {
//         error: error.message,
//       };
//     } else if (error && typeof error === "object" && "message" in error) {
//       return {
//         error: error.message,
//       };
//     } else if (typeof error === "string") {
//       return {
//         error,
//       };
//     }
//   }
// };

// export default sendEmail;

"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "himanshulodha2003@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    console.log(error);
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
