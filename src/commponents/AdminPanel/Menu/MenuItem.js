import "./Menu.css";

function MenuItem(props) {
    const title = props.item.title.length > 15 ? props.item.title.substr(0, 15) + "..." : props.item.title

    return (
        <div className=" newCard">
            <div className="menuAdminPanelCardContent">
                <div className="header">
                    {title}
                </div>
                <div className="description priceContainer">
                    {props.item.price} $
                    </div>
            </div>
            <div className=" buttonsMenuAdminPanel ">
                <div className="ui basic green button  adminPanelButton" onClick={event => props.editItem(props.item)}><i className="edit outline icon"></i></div>

                <div className="ui basic red button  adminPanelButton" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) props.deleteItem(props.item) }}> <i className="trash alternate outline icon"></i> </div>
            </div>
        </div>
    )
};

export default MenuItem;

