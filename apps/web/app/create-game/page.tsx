import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";

async function onSubmit(formData: FormData) {
  "use server";

  console.log(formData.get("word"));
  console.log(formData.get("data"));
  console.log(formData.get("resultados"));

  const createGameObj = {
    word: formData.get("word"),
    data: formData.get("data"),
    resultados: formData
      .get("resultados")
      ?.toString()
      .split(",")
      .map((p) => {
        let competidor = p.replace(/[0-9]/g, "");
        let posicao = p.replace(/\D/g, "");
        return { competidor, posicao };
      }),
  };
}

export default function Page() {
  return (
    <div className=" h-[100vh] flex flex-col justify-center items-center">
      <p className="text-3xl font-bold">Inserir Game</p>

      <form
        className="mt-10 flex flex-col items-center justify-between"
        action={onSubmit}
      >
        <div className="flex items-center gap-[2rem]">
          <Input
            name="word"
            label="Word"
            labelClassName="!text-lg"
            inputClassName="!max-w-[9rem]"
          />
          <Input
            name="data"
            label="Data"
            labelClassName="!text-lg"
            inputClassName="!max-w-[9rem]"
          />
        </div>
        <Input
          name="resultados"
          label="Resultados"
          labelClassName="!text-lg mt-3"
        />
        <Button type="submit" className="!text-xl mt-6 ">
          Criar
        </Button>
      </form>
    </div>
  );
}
