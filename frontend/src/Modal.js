import "./modal.css"

export default function Modal(props){
    
    const userObjectKeys = ["phone","email","hire_date","position_name","department"];
    const titles = ["Телефон:", "Почта:", "Дата Приема:", "Должность:", "Подразделение:"];

    return(
        <div className="modal" onClick={props.close}>
            <div className="modal-window" onClick={e => e.stopPropagation()}>
                <div className="modal-name">
                    <h2>{props.name}</h2>
                    <span onClick={props.close}><img src="./Exit.svg"></img></span>
                </div>
                <div className="modal-info">
                    {titles.map((elem, index) => {
                        return (<span key={index} className="info-string">
                            <div className="info-title">{elem}</div>
                            <p className="info-text">{props[userObjectKeys[index]]}</p>
                        </span>);
                    })}
                </div>
                <div className="modal-additional-info">
                    <div className="additional-info-titile">Дополнительная информация:</div>
                    <div className="additional-info-data">Разработчики используют текст в качестве заполнения макета для страницы. Разработчики используют текст в качестве заполнения макета для страницы</div>
                </div>
            </div>
        </div>
    );
}