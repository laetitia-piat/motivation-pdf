"use client";
import { useState } from "react";
import FormCandidate from "../components/formCandidate";
import FormEmployer from "../components/formEmployer";

export default function template() {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <FormCandidate onSuccess={() => setStep(2)} />}
      {step === 2 && <FormEmployer onSuccess={() => setStep(3)} />}
    </div>
  );
}
