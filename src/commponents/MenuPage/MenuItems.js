import "./Menu.css";

function MenuItems(props) {

    return (
        <div className="col-6 menuItemCardStyle">

            <img alt="menu" className="teamImageContainer" src={props.item.image} />
            <div className="titlePriceContainer">
                <div >
                    <h3>{props.item.title}</h3>
                    <h5>{props.item.description}</h5>
                </div>

                <p >${props.item.price}</p>
            </div>
        </div>
    )
};

export default MenuItems;