import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useEmailSend = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (templateParams: { name: string, email: string, message: string }) => {
    setLoading(true);
    setError(null);

    const serviceId = process.env.VITE_EMAILJS_SERVICE_ID!;
    const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setLoading(false);
      return true;
    } catch (err) {
      setLoading(false);
      setError("이메일 전송 실패");
      return false;
    }
  };

  return { sendEmail, loading, error };
};
