import Avatar from "../assets/logoJF.jpeg";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaListUl,
  FaRegStickyNote,
  FaUserMd,
} from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/quiz");
  }

  function handleAbout(e) {
    e.preventDefault();
    navigate("/about");
  }

  return (
    <div className="flex justify-center w-screen h-screen p-5 bg-white-200 relative overflow-hidden">
      <div className="flex flex-col w-full h-full md:max-w-2xl bg-gray-400 text-white relative rounded-lg overflow-hidden">
        <div className="flex flex-col items-center m-8">
          <img
            src={Avatar}
            alt="Logo JF"
            className="rounded-full h-32 w-32 object-cover object-top"
          />
          <h1 className="text-2xl text-gray-100 font-bold">
            Justiça Federal
          </h1>
          {/* <p className="text-orange-100 text-xs">CRM 1789</p> */}
        </div>

        <div className="flex flex-col items-center m-8 2xl:m-14">
          <FaUserMd className="text-4xl" />
          <h2 className="text-2xl font-medium text-gray-100">
            Teste de saúde mental
          </h2>
          <h3 className="text-sm text-gray-100">
            SRQ-20 - Self Report Questionare
          </h3>
        </div>

        <div className="flex justify-center items-center m-8 gap-5 2xl:m-16">
          <button
            onClick={(e) => handleClick(e)}
            className="px-5 py-3 flex items-center gap-5 rounded-xl bg-gray-700 hover:bg-gray-800 text-white"
          >
            <FaListUl />
            Iniciar o teste
          </button>
          <button
            onClick={(e) => handleAbout(e)}
            className="px-5 py-3 flex items-center gap-5 rounded-xl bg-gray-700 hover:bg-gray-800 text-white"
          >
            <FaRegStickyNote />
            Sobre o teste
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
