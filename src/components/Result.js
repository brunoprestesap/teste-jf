import Avatar from "../assets/avatar.jpg";
import { useParams } from "react-router-dom";
import { FaInstagram, FaListUl, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Result() {
  const { result } = useParams();

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="flex justify-center w-screen h-screen p-5 bg-orange-100 relative overflow-hidden">
      <div className="flex flex-col w-full h-full md:max-w-2xl bg-orange-400 text-white relative rounded-lg overflow-hidden">
        <div className="flex flex-col items-center m-8">
          <img
            src={Avatar}
            alt="Avatar Camila"
            className="rounded-full h-32 w-32 object-cover"
          />
          <h1 className="text-2xl text-orange-100 font-bold">
            Dra. Camila Neiva
          </h1>
          <p className="text-orange-100 text-xs mb-8">
            CRM 1789
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl text-orange-100 text-center">
            Resultado do teste de saúde mental
          </h1>
          <div className="mt-8">
            <h2 className="text-xl text-orange-100 text-center">
              Você respondeu {result} vezes SIM
            </h2>
            <h2 className="text-xl text-orange-100 text-center">
              {result >= 7
                ? "Está comprovado sofrimento mental"
                : "Não está comprovado sofrimento mental"}
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center m-12">
          <button
            onClick={(e) => handleClick(e)}
            className="px-5 py-3 flex items-center gap-5 rounded-xl bg-orange-700 hover:bg-orange-800 text-white"
          >
            <FaListUl />
            Iniciar um novo teste
          </button>
        </div>

        <div className="flex justify-center gap-3">
          <a
            href="https://www.instagram.com/dra.camilaneiva/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-2xl md:text-4xl" />
          </a>
          <a
            href="https://wa.me/5596981163765"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="text-2xl md:text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Result;
