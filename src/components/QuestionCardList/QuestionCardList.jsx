import './QuestionCardList.css'

function QuestionCardList({children}) {
    return (
        <div className='questionCardList'>
            {children}
        </div>
    );
}

export default QuestionCardList;