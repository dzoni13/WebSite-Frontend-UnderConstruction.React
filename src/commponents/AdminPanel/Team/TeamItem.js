import "./Team.css";

function TeamItem(props) {
  const name =
    props.item.name.length > 30
      ? props.item.name.substr(0, 30) + "..."
      : props.item.name;

  return (
    <div className="col-4 cardStyle">
      <img className="right floated ui image " src={props.item.image} />
      <div className="header">
        <h3>{name}</h3>
      </div>
      <div className="description">
        <details className="tooltip meta">
          <summary className={"summaryCustomStyle"}>
            {props.item.shortDescription}
          </summary>
        </details>
      </div>

      <div className="extra content">
        <div className="ui two buttons buttonsContainer">
          <div
            className="ui basic green button greenButton"
            onClick={(event) => props.editItem(props.item)}
          >
            Edit
          </div>

          <div className="ui basic red button redButton">Delete</div>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;
