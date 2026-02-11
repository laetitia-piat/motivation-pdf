"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  subject_line: z.string().min(1, "Subject line is required"),
  letter_salutation: z.string().min(1, "Letter salutation is required"),
  part_1: z.string().min(1, "Part 1 is required"),
  part_2: z.string().optional(),
  part_3: z.string().optional(),
  part_4: z.string().optional(),
  part_5: z.string().optional(),
  part_6: z.string().optional(),
  part_7: z.string().optional(),
  complimentary_close: z.string().min(1, "Complimentary close is required"),
  signature: z.string().min(1, "Signature is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function formBody({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/body`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => null);
      console.log("FastAPI 422 detail:", err);

      return;
    } else {
      onSuccess();
    }
  };
  return (
    <main style={{ padding: 24 }}>
      <h1 className="text-center mb-5">Formulaire Candidat</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "grid", gap: 12 }}
      >
        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="objet"
          {...register("subject_line")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="formule d'appel"
          {...register("letter_salutation")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="partie 1"
          {...register("part_1")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="partie 2"
          {...register("part_2")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="partie 3"
          {...register("part_3")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="partie 4"
          {...register("part_4")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="partie 5"
          {...register("part_5")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="partie 6"
          {...register("part_6")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="partie 7"
          {...register("part_7")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="formule de politesse"
          {...register("complimentary_close")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="signature"
          {...register("signature")}
        />

        <button type="submit">Valider</button>
      </form>
    </main>
  );
}
