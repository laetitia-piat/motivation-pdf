"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  address_line_1: z.string().min(1, "Address line 1 is required"),
  address_line_2: z.string().optional(),
  post_code: z.string().min(1, "Postal code is required"),
  city: z.string().min(1, "City is required"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().min(1, "Phone number is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function formCandidate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/candidate`, {
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
    }
  };
  return (
    <main style={{ padding: 24 }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "grid", gap: 12 }}
      >
        <input
          className="border border-gray-300 rounded px-3 py-2"
          defaultValue="first name"
          {...register("first_name")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          {...register("last_name")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          {...register("address_line_1")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          {...register("address_line_2")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          {...register("city")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          {...register("post_code")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          {...register("email")}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2"
          {...register("phone_number")}
        />

        <button type="submit">Valider</button>
      </form>
    </main>
  );
}
