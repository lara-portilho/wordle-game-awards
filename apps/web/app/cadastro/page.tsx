import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";

async function onSubmit(formData: FormData) {
  "use server";

  console.log(formData.get("nome"));
  console.log(formData.get("participantes"));

  const cadastroObj = {
    nome: formData.get("nome"),
    participantes: formData.get("participantes")?.toString().split(",") || [],
  };
}

export default function Page() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-[#27272A] p-14 rounded-2xl">
        <p className="text-4xl font-bold">Wordle Games Awards</p>
        <p className="text-2xl font-semibold mt-3">Cadastro de Grupo</p>

        <form className="mt-8 flex flex-col items-center" action={onSubmit}>
          <Input name="nome" label="Nome" labelClassName="!text-lg" />
          <Input
            name="participantes"
            label="Participantes"
            labelClassName="!text-lg mt-3"
          />
          <Button type="submit" className="!text-xl mt-6 ">
            Criar
          </Button>
        </form>
      </div>
    </div>
  );
}
