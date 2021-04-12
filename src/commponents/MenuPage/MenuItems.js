import "./Menu.css";


function MenuItems(props) {


    const title = props.item.title.length > 30 ? props.item.title.substr(0, 30) + "..." : props.item.title



    return (


        <div className="col-4 cardStyle">
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
                    <div className="ui basic green button greenButton" >Edit</div>

                    <div className="ui basic red button redButton" > Delete </div>

                </div>
            </div>
        </div>




    )
};

export default MenuItems;


/* <div className="newCard"> <a className="adminPanelDisplayNone">src={props.item.image}</a>
           <p className="adminPanelShow">{title}</p>
           <p className="adminPanelDisplayNone">{props.item.short_description}</p>
           <p className="adminPanelDisplayNone"> {props.item.description} </p>
           <p className="adminPanelShow">{props.item.price}</p>

           <div className="ui two buttons buttonsContainer ">
               <div className="ui basic green button  adminPanelButton" onClick={event => props.editItem(props.item)}><i class="edit outline icon"></i></div>

               <div className="ui basic red button  adminPanelButton" onClick={event => props.deleteItem(props.item)}> <i class="trash alternate outline icon"></i> </div>

           </div>
       </div>*/

/*
*/