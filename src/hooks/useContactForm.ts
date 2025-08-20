import { useState } from "react";
import { useEmailSend } from "./useEmailSend";

export const useContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const { sendEmail, loading, error: sendError } = useEmailSend();

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error">("success");
  const [alertMessage, setAlertMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setMessageError(false);
    setAlertOpen(false);

    let isValid = true;

    if (name.trim() === "") {
      setNameError(true);
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError(true);
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError(true);
      isValid = false;
    }

    if (message.trim() === "") {
      setMessageError(true);
      isValid = false;
    }

    if (emailError) {
      setAlertSeverity("error");
      setAlertMessage("이메일 형식을 확인해주세요.");
      setAlertOpen(true);
      return;
    }

    if (!isValid) {
      setAlertSeverity("error");
      setAlertMessage("모든 필수 정보를 올바르게 입력해주세요.");
      setAlertOpen(true);
      return;
    }

    const isSuccess = await sendEmail({ name, email, message });

    if (isSuccess) {
      setAlertSeverity("success");
      setAlertMessage("이메일이 성공적으로 전송되었습니다!");
      setAlertOpen(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setAlertSeverity("error");
      setAlertMessage(sendError || "이메일 전송에 실패했습니다.");
      setAlertOpen(true);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError(false);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setMessageError(false);
  };
  
  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return {
    name, setName: handleNameChange, nameError,
    email, setEmail: handleEmailChange, emailError,
    message, setMessage: handleMessageChange, messageError,
    handleSubmit,
    loading, // useEmailSend 훅의 로딩 상태
    alertOpen, alertSeverity, alertMessage, handleAlertClose
  };
};