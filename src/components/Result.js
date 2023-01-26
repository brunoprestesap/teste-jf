import Avatar from "../assets/logoJF.jpeg";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaListUl } from "react-icons/fa";

function Result() {
  const { result } = useParams();

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="flex justify-center w-screen h-screen p-5 bg-gray-100 relative overflow-hidden">
      <div className="flex flex-col w-full h-full md:max-w-2xl bg-gray-400 text-white relative rounded-lg overflow-hidden">
        <div className="flex flex-col items-center m-8">
          <img
            src={Avatar}
            alt="Avatar Camila"
            className="rounded-full h-32 w-32 object-cover"
          />
          <h1 className="text-2xl text-gray-100 font-bold">
            Justiça Federal
          </h1>
          <p className="text-gray-100 text-xs mb-8">
            Seção Judiciária do Amapá
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl text-gray-100 text-center">
            Resultado do teste de saúde mental
          </h1>
          <div className="mt-8">
            <h2 className="text-xl text-gray-100 text-center">
              Você respondeu {result} vezes SIM
            </h2>
            <h2 className="text-xl text-gray-100 text-center">
              {result >= 7
                ? "Está comprovado sofrimento mental"
                : "Não está comprovado sofrimento mental"}
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center m-12">
          <button
            onClick={(e) => handleClick(e)}
            className="px-5 py-3 flex items-center gap-5 rounded-xl bg-gray-700 hover:bg-gray-800 text-white"
          >
            <FaListUl />
            Iniciar um novo teste
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
