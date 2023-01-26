import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowCircleLeft,
  FaBatteryThreeQuarters,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();

  const [questions] = useState([
    {
      id: 1,
      question: "Você tem dores de cabeça frequentes?",
      answer: "false",
      answered: false,
    },
    {
      id: 2,
      question: "Tem falta de apetite?",
      answer: "false",
      answered: false,
    },
    {
      id: 3,
      question: "Dorme mal?",
      answer: "false",
      answered: false,
    },
    {
      id: 4,
      question: "Assusta-se com facilidade?",
      answer: "false",
      answered: false,
    },
    {
      id: 5,
      question: "Tem tremores nas mãos?",
      answer: "false",
      answered: false,
    },
    {
      id: 6,
      question: "Sente-se nervoso(a), tenso(a) ou preocupado(a)?",
      answer: "false",
      answered: false,
    },
    {
      id: 7,
      question: "Tem má digestão?",
      answer: "false",
      answered: false,
    },
    {
      id: 8,
      question: "Tem dificuldade para pensar com clareza?",
      answer: "false",
      answered: false,
    },
    {
      id: 9,
      question: "Tem se sentido triste ultimamente?",
      answer: "false",
      answered: false,
    },
    {
      id: 10,
      question: "Tem chorado mais do que costume?",
      answer: "false",
      answered: false,
    },
    {
      id: 11,
      question:
        "Encontra dificuldades para realizar, com satisfação, suas atividades diárias?",
      answer: "false",
      answered: false,
    },
    {
      id: 12,
      question: "Tem dificuldades para tomar decisões?",
      answer: "false",
      answered: false,
    },
    {
      id: 13,
      question:
        "Tem dificuldades no serviço (seu trabalho é penoso, causa-lhe sofrimento)",
      answer: "false",
      answered: false,
    },
    {
      id: 14,
      question: "É incapaz de desempenhar um papel útil em sua vida?",
      answer: "false",
      answered: false,
    },
    {
      id: 15,
      question: "Tem perdido o interesse pelas coisas?",
      answer: "false",
      answered: false,
    },
    {
      id: 16,
      question: "Você se sente uma pessoa inútil, sem préstimo?",
      answer: "false",
      answered: false,
    },
    {
      id: 17,
      question: "Tem tido idéias de acabar com a vida?",
      answer: "false",
      answered: false,
    },
    {
      id: 18,
      question: "Sente-se cansado com facilidade?",
      answer: "false",
      answered: false,
    },
    {
      id: 19,
      question: "Tem sensações desagradáveis no estômago?",
      answer: "false",
      answered: false,
    },
    {
      id: 20,
      question: "Você se cansa com facilidade?",
      answer: "false",
      answered: false,
    },
  ]);

  const [currentQuestion, SetCurrentQuestion] = useState(questions[0]);
  const [selectedValue, setSelectedValue] = useState(currentQuestion.answer);

  function nextQuestion(e) {
    const currentIndex = questions.findIndex(
      (question) => question.id === currentQuestion.id
    );

    const nextIndex = currentIndex + 1;

    console.log(questions[currentIndex]);

    if (
      currentQuestion.answered === true &&
      currentQuestion.answer !== selectedValue
    ) {
      questions[currentIndex].answer = selectedValue;
      console.log(questions[currentIndex]);
    }

    if (currentQuestion.answered === false) {
      questions[currentIndex].answer = selectedValue;
      console.log(questions[currentIndex]);
    }

    if (nextIndex < questions.length) {
      const nextQuestion = questions[nextIndex];
      SetCurrentQuestion(nextQuestion);
      setSelectedValue(questions[nextIndex].answer)
    } else {
      let sum = 0;

      questions.forEach((question) =>
        question.answer === "true" ? (sum = sum + 1) : sum
      );
      e.preventDefault();
      navigate(`/result/${sum}`);
    }
  }

  function prevQuestion(e) {
    const currentIndex = questions.findIndex(
      (question) => question.id === currentQuestion.id
    );
    const prevIndex = currentIndex - 1;
    SetCurrentQuestion(questions[prevIndex])
    setSelectedValue(questions[prevIndex].answer)
  }

  function handleChange(e) {
    const selected = e.target.value;

    if (selected === "true") {
      setSelectedValue("true");
    } else {
      setSelectedValue("false");
    }
  }

  return (
    <div className="flex justify-center w-screen h-screen p-5 bg-white-100 relative overflow-hidden">
      <div className="flex flex-col w-full h-full md:max-w-2xl bg-gray-400 text-white relative rounded-lg overflow-hidden">
        <div className="flex justify-between items-center m-5 text-2xl text-gray-100 leading-7 font-medium">
          <h1>{`Pergunta ${currentQuestion.id} de ${questions.length}`}</h1>
          <FaBatteryThreeQuarters />
        </div>
        <blockquote className="m-5 text-2xl text-white leading-7 font-medium text-gray-900">
          <h1 className="text-2xl text-gray-100 font-medium">
            {currentQuestion.question}
          </h1>
        </blockquote>

        <fieldset className="m-5">
          <input
            id="sim"
            className="peer/sim mr-2"
            type="radio"
            name="answer"
            value="true"
            onChange={(e) => handleChange(e)}
            checked={selectedValue === "true"}
          />
          <label
            htmlFor="sim"
            className="text-2xl peer-checked/sim:text-gray-200 mr-5"
          >
            Sim
          </label>

          <input
            id="nao"
            className="peer/nao mr-2"
            type="radio"
            name="answer"
            value="false"
            onChange={(e) => handleChange(e)}
            checked={selectedValue === "false"}
          />
          <label
            htmlFor="nao"
            className="text-2xl peer-checked/nao:text-gray-200"
          >
            Não
          </label>
        </fieldset>

        <div className="absolute bottom-5 right-1 p-2 mt-5 flex items-center gap-2">
          <button
            onClick={(e) => prevQuestion(e)}
            className="p-3 w-30 2xl:w-60 flex items-center text-sm md:text-xl gap-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700"
          >
            <FaArrowCircleLeft />
            Pergunta anterior
          </button>

          <button
            onClick={(e) => nextQuestion(e)}
            className="p-3 w-30 2xl:w-60 flex items-center text-sm md:text-xl gap-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700"
          >
            <FaArrowAltCircleRight />
            Próxima Pergunta
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
