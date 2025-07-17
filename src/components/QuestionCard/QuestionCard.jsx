import cls from './QuestionCard.module.css'
import Button from "../Button/Button.jsx";
import {useNavigate} from "react-router-dom";

function QuestionCard({card}) {

    console.log(card)
    const {
        id,
        question,
        completed,
        answer,
        description,
        editDate,
        level,
    } = card

    const navigate = useNavigate();
    return (
        <div className={cls.card}>
            <div className={cls.cardLabels}>
                <div>Level: {level}</div>
                <div>{completed ? 'Completed' : 'Not Completed'}</div>
            </div>

            <h5 className={cls.cardTitle}>{question}</h5>

            <div className={cls.cardAnswers}>
                <label>short answer:</label>
                <p className={cls.cardAnswer}>
                    {answer}
                </p>
            </div>

            <Button
                OnClick={() => navigate(`/question/${id}`)}
            >
                View
            </Button>

        </div>
    );
}

export default QuestionCard;