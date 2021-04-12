import "./eventsCard.css";

function EventsCard(props) {


    return (


        <div className="eventCardContainer">
            <img className="eventCardImgContainer" src={props.item.image} />
            <p>{props.item.title}</p>
            <div className="timeAndDateEvents">
                <a>{props.item.date}</a> |
                <a>{props.item.time}</a>
            </div>
            <div className="eventCardReservationButton">
                <button class="ui button">Book A Table</button>
            </div>
        </div>




    )
};

export default EventsCard;

/* <div class="ui card">
        <a class="image" href="#">
            <img src={props.item.image} />
        </a>
        <div class="content">
            <a class="header" href="#">{props.item.title}</a>
            <p className="eventsDescription">{props.item.description}</p>
        </div>
    </div>*/

/*  <div className="col-4 eventCardStyle">
            <div className="overlay">
                <img src={props.item.image} />
                <div className="after"></div>
            </div>
            <h3>{props.item.title}</h3>
            <p className="performers">{props.item.shortDescription}</p>
            <p className="eventsDescription">{props.item.description}</p>
            <a className="dateContainer"><i className="calendar alternate outline icon"></i>{props.item.date}</a>
            <a><i className="clock outline icon"></i>{props.item.price}</a>

        </div>*/