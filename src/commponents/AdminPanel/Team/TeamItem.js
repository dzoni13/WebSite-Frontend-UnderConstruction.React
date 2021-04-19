import "./Team.css";

function TeamItem(props) {

    const name =
        props.item.name.length > 30
            ? props.item.name.substr(0, 30) + "..."
            : props.item.name;

    return (
        <div className="col-4 cardStyle">
            <img alt="team" className="right floated ui image " src={props.item.image} />
            <div className="header">
                <h3>{name}</h3>
            </div>
            <div className="description">
                <details className="tooltip meta">
                    <summary className={"summaryCustomStyle"}>
                        {props.item.short_description}
                    </summary>
                    <p>{props.item.description}</p>

                </details>
            </div>

            <div className="extra content">
                <div className="ui two buttons buttonsContainer">
                    <div
                        className="ui basic green button greenButton"
                        onClick={(event) => props.editMember(props.item)} > Edit </div>
                    <div className="ui basic red button redButton" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) props.deleteMember(props.item) }}>Delete</div>
                </div>
            </div>
        </div>
    );
}

export default TeamItem;
