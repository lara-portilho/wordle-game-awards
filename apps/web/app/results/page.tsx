export default function Page() {
  return (
    <div className=" h-[100vh] flex flex-col justify-center items-center">
      <p className="text-4xl font-bold">Resultados do Wordle</p>
      <p className="text-xl mt-4">Data: 12/02/2024</p>
      <p className="text-3xl font-bold mt-10">alhoioleo venceu!!</p>
      <p className="text-xl font-bold mt-6">
        Palavra do dia: <strong>TRACK</strong>
      </p>
      <div className="flex mt-14 items-end">
        <div className="w-[10rem]">
          <p className=" text-ellipsis overflow-hidden whitespace-nowrap text-lg font-bold text-center mb-1">
            Irwin Arruda
          </p>
          <div className="h-[4rem] bg-slate-500 rounded-s-md">
            <p className="mt-1 text-3xl font-bold text-center">2</p>
          </div>
        </div>
        <div className="w-[10rem]">
          <p className=" text-ellipsis overflow-hidden whitespace-nowrap text-lg font-bold text-center mb-1">
            alhoioleo
          </p>
          <div className="h-[6rem] bg-slate-500 rounded-t-md">
            <p className="mt-1 text-3xl font-bold text-center">1</p>
          </div>
        </div>
        <div className="w-[10rem]">
          <p className=" text-ellipsis overflow-hidden whitespace-nowrap text-lg font-bold text-center mb-1">
            Lara
          </p>
          <div className="h-[2.6rem] bg-slate-500 rounded-e-md">
            <p className="mt-1 text-3xl font-bold text-center">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
