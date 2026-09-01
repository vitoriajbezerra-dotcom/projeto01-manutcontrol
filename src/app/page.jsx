import Image from "next/image";

export default function Home() {
  return (
    <>
    <h2>Aprendendo margin e padding</h2>
    <div className="bg-red-500 p-5 m-5">
    <p>Exemplo top!!!</p>
    </div>
    <div className="bg-green-600 px-12 ms ms-98">
      <p>Exemplo nos eixos!</p>
    </div>

    <div>
      <h2 className="text-9x1">Titulo muito legal <span className="font-bold"></span>
      </h2>

      <p className="text-lg text-purple-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nobis consequuntur, aut nemo asperiores magnam aliquam vero quaerat dignissimos, at nihil accusantium? Reiciendis delectus accusamus optio alias officiis expedita doloremque!</p>
    </div>


    <div className="bg-blue-500 text-white">
      <p>AZUL</p>
    </div>
    <div className="bg-green-200 text-green-200 text-green-800">
      <p>VERDE</p>
    </div>
    </>
  );
}
