"use client";
import { useState } from "react";
import FormCandidate from "../components/formCandidate";
import FormEmployer from "../components/formEmployer";
import FormBody from "../components/formBody";

export default function template() {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <FormCandidate onSuccess={() => setStep(2)} />}
      {step === 2 && <FormEmployer onSuccess={() => setStep(3)} />}
      {step === 3 && <FormBody onSuccess={() => setStep(4)} />}
    </div>
  );
}
