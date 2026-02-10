import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-black min-h-screen">
      <h1 className="text-3xl text-white font-bold text-center pt-20">
        Créer votre lettre de motivation
      </h1>
      <div className="flex justify-center items-center mt-30 gap-4">
        <Link href="/template">
          <button className="border p-2 text-white ">Créer ma lettre</button>
        </Link>
        <Link href="/model">
          <button className="border p-2 text-white ">Utiliser un modèle</button>
        </Link>
      </div>
    </div>
  );
}
