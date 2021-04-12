import "./Menu.css";


function MenuItem(props) {


    const title = props.item.title.length > 15 ? props.item.title.substr(0, 15) + "..." : props.item.title



    return (



        <div className=" newCard">


            <div className="menuAdminPanelCardContent">
                <div class="header">
                    {title}
                </div>

                <div class="description priceContainer">
                    {props.item.price} $
                    </div>
            </div>

            <div className=" buttonsMenuAdminPanel ">
                <div className="ui basic green button  adminPanelButton" onClick={event => props.editItem(props.item)}><i class="edit outline icon"></i></div>

                <div className="ui basic red button  adminPanelButton" onClick={event => props.deleteItem(props.item)}> <i class="trash alternate outline icon"></i> </div>
            </div>
        </div>





    )
};

export default MenuItem;


/*
 *
 *     <div class="ui cards">
            <div class="card newCard">
                <div class="content">
                    <div className="right floated buttonsMenuAdminPanel">
                        <div className="ui basic green button  adminPanelButton" onClick={event => props.editItem(props.item)}><i class="edit outline icon"></i></div>

                        <div className="ui basic red button  adminPanelButton" onClick={event => props.deleteItem(props.item)}> <i class="trash alternate outline icon"></i> </div>
                    </div>
                    <div class="header">
                        {title}
                    </div>
                    <div class="meta">
                        {props.item.short_description}
                    </div>
                    <div class="description priceContainer">
                        {props.item.price} $
                    </div>

                </div>

            </div>
        </div>
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *   <div className="col-4 cardStyle">
            <img className="right floated ui image " src={props.item.image} />
            <div className="header">
                <h3>{title}</h3>
            </div>
            <div className="description">
                <details className="tooltip meta">
                    <summary className={"summaryCustomStyle"}>{props.item.short_description}</summary>
                    <p>{props.item.description}</p>
                </details>
            </div>


            <a className={"ui label labelCustomStyle"}><i className="euro sign icon"></i>{props.item.price}</a>


            <div className="extra content">
                <div className="ui two buttons buttonsContainer">
                    <div className="ui basic green button greenButton" onClick={event => props.editItem(props.item)}>Edit</div>

                    <div className="ui basic red button redButton" onClick={event => props.deleteItem(props.item)}> Delete </div>

                </div>
            </div>
        </div>*/

/*
*/