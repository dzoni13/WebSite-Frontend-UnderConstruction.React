import "./eventsCard.css";

function EventsCard(props) {

    return (

        <div className="eventCardContainer">
            <img alt="event" className="eventCardImgContainer" src={props.item.image} />
            <p>{props.item.title}</p>
            <div className="timeAndDateEvents">
                <a href="#!">{props.item.date}</a> |
                <a href="#!">{props.item.time}</a>
            </div>
            <div className="eventCardReservationButton">
                <a href="#reservations">
                    <button className="ui button">Book A Table</button>
                </a>
            </div>
        </div>

    )
};

export default EventsCard;
