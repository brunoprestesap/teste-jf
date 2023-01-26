import Avatar from "../assets/logoJF.jpeg";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHandPointLeft, FaUserMd } from "react-icons/fa";

function About() {
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
            alt="Logo JF"
            className="rounded-full h-32 w-32 object-cover"
          />
          <h1 className="text-2xl text-gray-100 font-bold">
            Justiça Federal
          </h1>
          <p className="text-gray-100 text-xs">Seção Judiciária do Amapá</p>
        </div>

        <div className="flex flex-col items-center">
          <FaUserMd className="text-4xl" />
          <h2 className="text-2xl font-medium text-gray-100">
            Teste de saúde mental
          </h2>
          <h3 className="text-sm text-gray-100">
            SRQ-20 - Self Report Questionare
          </h3>
        </div>

        <div className="m-5">
          <h2 className="text-xs 2xl:text-sm text-justify text-gray-100 2xl:leading-7 2xl:m-8">
            O SRQ-20 foi desenvolvido pela Organização Mundial de Saúde (OMS) e
            foi validado no Brasil. Tem sensibilidade de 80% e por isso é eficaz
            para detectar o sofrimento emocional.
            <br />
            O teste pode indicar a suspeita de transtornos mentais comuns, como
            a ansiedade e depressão.
            <br />
            Com ajuda dele, um profissional médico pode indicar tratamento
            adequado para melhorar a qualidade de vida do paciente.
            <br />
            Estas questões são relacionadas aos problemas que podem ter lhe incomodado nos últimos 30 dias.
            <br />
            Se você acha que a questão se aplica a você e que isso tem acontecido nos últimos 30 dias, responda SIM. Por outro lado, se a questão não se aplica a você ou que isso não acontece nos últimos 30 dias, responda NÃO.
            <br />
            Lembre-se que o diagnóstico definitivo e o tratamento adequado só podem ser fornecidos por um profissional.
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={(e) => handleClick(e)}
            className="px-5 py-3 flex items-center gap-5 rounded-xl bg-gray-700 hover:bg-gray-800 text-white"
          >
            <FaRegHandPointLeft />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
