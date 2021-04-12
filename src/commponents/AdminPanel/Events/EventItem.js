import "./Event.css";

function EventItem(props) {




    console.log("event card:", props)

    return (
        <div className="col-4 eventCardStyle">
            <div className="overlay">
                <img alt="Item Img" className="right floated ui image " src={props.item.image} />
                <div className="after"></div>
            </div>
            <h3>{props.item.title}</h3>

            <p>{props.item.date}</p>
            <a>{props.item.time}</a>


            <div className="buttonContainer">
                <div className="ui two buttons">
                    <div className="ui green button greenButton" onClick={event => props.editItem(props.item)}>Edit</div>
                    <div className="ui red button redButton" onClick={event => props.deleteItem(props.item)} > Delete</div>
                </div>
            </div>

        </div>
    )
};

export default EventItem;


/*<div className="col-4 eventCardStyle">
      <div className="overlay">
          <img  />
          <div className="after"></div>
      </div>
      <h3>{props.item.title}</h3>
      <p className="performers">{props.item.performers}</p>
      <p className="eventsDescription">{props.item.description}</p>
      <a className="dateContainer"><i className="calendar alternate outline icon"></i>{props.item.date}</a>
      <a><i className="clock outline icon"></i>{props.item.time}</a>
      <div className="buttonContainer">
          <div className="ui two buttons">
              <div className="ui green button greenButton" onClick={event => props.editItem(props.item)}>Edit</div>
              <div className="ui red button redButton" onClick={event => props.editItem(props.item)>Delete</div>
          </div>
      </div>
  </div>*/


