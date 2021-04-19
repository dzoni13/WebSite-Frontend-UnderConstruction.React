import "./OfferItem.css";
function OfferItem(props) {

    const newDescription = props.item.description.toString().slice(0, 30);

    return (
        <div className="col-4 cardStyle">
            <img alt="offer" className="right floated ui image " src={props.item.image} />
            <div className="header">
                <h3>{props.item.title}</h3>
            </div>
            <div className="description">

                <p>
                    {newDescription}
                </p>
                <p>{props.item.short_description}</p>

            </div>
            <div className="extra content">
                <div className="ui two buttons buttonsContainer">
                    <div
                        className="ui basic green button greenButton"
                        onClick={() => props.editItem(props.item)} > Edit </div>

                    <div className="ui basic red button redButton" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) props.deleteItem(props.item) }}
                    >Delete</div>
                </div>
            </div>
        </div>

    )
};

export default OfferItem;
