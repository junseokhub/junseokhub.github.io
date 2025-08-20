import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useEmailSend = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (templateParams: { name: string, email: string, message: string }) => {
    setLoading(true);
    setError(null);

    const serviceId = process.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const missing = [];
      if (!serviceId) missing.push("Service ID");
      if (!templateId) missing.push("Template ID");
      if (!publicKey) missing.push("Public Key");
      const msg = `EmailJS 환경 변수가 설정되지 않았습니다: ${missing.join(", ")}.`;
      setError(msg);
      setLoading(false);
      return false;
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setLoading(false);
      return true;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "이메일 전송 실패.");
      } else {
        setError("이메일 전송 실패.");
      }
      setLoading(false);
      return false;
    }
  };

  return { sendEmail, loading, error };
};