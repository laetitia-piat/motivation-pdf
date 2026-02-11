"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  company_name: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  address_line_1: z.string().optional(),
  address_line_2: z.string().optional(),
  post_code: z.string().optional(),
  city: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function formEmployer({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/employer`, {
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
      <h1 className="text-center mb-5">Formulaire Employeur</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "grid", gap: 12 }}
      >
        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="Nom de l'entreprise"
          {...register("company_name")}
        />
        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="Prénom"
          {...register("first_name")}
        />
        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="Nom"
          {...register("last_name")}
        />
        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="Adresse ligne 1"
          {...register("address_line_1")}
        />
        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="Adresse ligne 2 (optionnel)"
          {...register("address_line_2")}
        />
        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="Code postal"
          {...register("post_code")}
        />
        <input
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="Ville"
          {...register("city")}
        />
        <button type="submit">Valider</button>
        <button onClick={() => onSuccess()}>Ignorer</button>
      </form>
    </main>
  );
}
