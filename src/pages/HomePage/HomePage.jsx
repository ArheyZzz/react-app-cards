import QuestionCard from "../../components/QuestionCard/QuestionCard.jsx";
import {API_URL} from "../../constans/index.js";
import {useEffect, useState} from "react";
import QuestionCardList
    from "../../components/QuestionCardList/QuestionCardList.jsx";


export default function HomePage() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const getQuestions = async () => {
            try {

                const response = await fetch(`${API_URL}/react`)
                if (response.ok) {
                    const questions = await response.json()
                    setCards(questions)
                }

            } catch (error) {
                console.log(error)
            }
        }
        getQuestions()
    }, [])

    return (
        <QuestionCardList>
            {cards.map((card, index) => (<QuestionCard
                key={index}
                card={card}
            />))}
        </QuestionCardList>
    );
}

