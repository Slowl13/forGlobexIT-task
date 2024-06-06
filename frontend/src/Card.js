export default function Card(props){
    return(
        <div className="card" onClick={props.onClick}>
            <h2>{props.name}</h2>
            <span className="contact">
                <span className="icon-container"><img className="phone-img" src="./Phone.svg"/></span>
                {props.phone}
            </span>
            <span className="contact">
                <span className="icon-container"><img className="email-img" src="./Email.svg"/></span>
                {props.email}
            </span>
        </div>
    );
}