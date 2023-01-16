import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaBatteryThreeQuarters } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function Quiz() {

    const navigate = useNavigate();

    const [questions] = useState([
        {
            id: 1,
            question: "Você tem dores de cabeça frequente?"
        },
        {
            id: 2,
            question: "Tem falta de apetite?"
        },
        {
            id: 3,
            question: "Dorme mal?"
        },
        {
            id: 4,
            question: "Assusta-se com facilidade?"
        },
        {
            id: 5,
            question: "Tem tremores nas mãos?"
        },
        {
            id: 6,
            question: "Sente-se nervoso(a), tenso(a) ou preocupado(a)?"
        },
        {
            id: 7,
            question: "Tem má digestão?"
        },
        {
            id: 8,
            question: "Tem dificuldade de pensar com clareza?"
        },
        {
            id: 9,
            question: "Tem se sentido triste ultimamente?"
        },
        {
            id: 10,
            question: "Tem chorado mais do que costume?"
        },
        {
            id: 11,
            question: "Encontra dificuldades para realizar com satisfação suas atividades diárias?"
        },
        {
            id: 12,
            question: "Tem dificuldades para tomar decisões?"
        },
        {
            id: 13,
            question: "Tem dificuldades no serviço (seu trabalho é penoso, causa-lhe sofrimento?"
        },
        {
            id: 14,
            question: "É incapaz de desempenhar um papel útil em sua vida?"
        },
        {
            id: 15,
            question: "Tem perdido o interesse pelas coisas?"
        },
        {
            id: 16,
            question: "Você se sente uma pessoa inútil, sem préstimo?"
        },
        {
            id: 17,
            question: "Tem tido idéia de acabar com a vida?"
        },
        {
            id: 18,
            question: "Sente-se cansado com facilidade?"
        },
        {
            id: 19,
            question: "Você se cansa com facilidade?"
        },
        {
            id: 20,
            question: "Tem sensaçÕes desagradáveis no estômago?"
        },
    ])


    const [trueAnswers, setTrueAnswers] = useState(0)
    const [selectedValue, setSelectedValue] = useState("true")
    const [currentQuestion, SetCurrentQuestion] = useState(questions[0])

    function nextQuestion(e) {

        console.log('Resposta selecionada', selectedValue)

        let counter = 0

        if (selectedValue === 'true') {
            counter = trueAnswers + 1
            setTrueAnswers(counter)
            console.log(counter)
        }

        if (selectedValue === 'false') {
            counter = trueAnswers
            setTrueAnswers(counter)
            console.log(counter)
        }

        const currentIndex = questions.findIndex(question => question.id === currentQuestion.id)
        const nextIndex = currentIndex + 1;

        if (nextIndex < questions.length) {

            const nextQuestion = questions[nextIndex]
            SetCurrentQuestion(nextQuestion)

        } else {
            console.log(counter)
            e.preventDefault();
            navigate(`/result/${counter}`)
        }

    }

    // function prevQuestion() {
    //     const currentIndex = questions.findIndex(question => question.id === currentQuestion.id)
    //     const prevIndex = currentIndex - 1;
    //     SetCurrentQuestion(questions[prevIndex])
    // }

    function handleChange(e) {
        const selected = e.target.value

        if (selected === "true") {
            setSelectedValue("true")
        } else {
            setSelectedValue("false")
        }
    }

    return (
        <div className='flex justify-center w-screen h-screen p-5 bg-orange-100 relative overflow-hidden'>
            <div className='flex flex-col w-full h-full md:max-w-2xl bg-orange-400 text-white relative rounded-lg overflow-hidden'>
                <div className='flex justify-between items-center m-5 text-2xl text-orange-100 leading-7 font-medium'>
                    <h1>
                        {`Pergunta ${currentQuestion.id} de ${questions.length}`}
                    </h1>
                    <FaBatteryThreeQuarters />
                </div>
                <blockquote className='m-5 text-2xl text-white leading-7 font-medium text-gray-900'>
                    <h1 className='text-2xl text-orange-100 font-medium'>
                        {currentQuestion.question}
                    </h1>
                </blockquote>

                <fieldset className='m-5'>

                    <input id="sim" className="peer/sim mr-2" type="radio" name="answer" value="true" onChange={(e) => handleChange(e)} />
                    <label htmlFor="sim" className="text-2xl peer-checked/sim:text-orange-200 mr-5">Sim</label>

                    <input id="nao" className="peer/nao mr-2" type="radio" name="answer" value="false" onChange={(e) => handleChange(e)} />
                    <label htmlFor="nao" className="text-2xl peer-checked/nao:text-orange-200">Não</label>

                </fieldset>

                <button onClick={(e) => nextQuestion(e)} className='p-3 mt-5 absolute flex items-center text-sm md:text-xl gap-5 bottom-5 right-5 rounded-lg bg-orange-600 text-white hover:bg-orange-700'>
                    <FaArrowAltCircleRight />Próxima Pergunta
                </button>
            </div>
        </div>
    )
}

export default Quiz