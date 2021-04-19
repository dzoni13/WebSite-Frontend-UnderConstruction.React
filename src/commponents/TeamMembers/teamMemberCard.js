import "./teamMemberCard.css";

function TeamMemberCard(props) {

    return (
        <div className="teamCardContainer">
            <img alt="team" className="teamCardImgContainer" src={props.item.image} />

            <div className="shortDescriptionTeam">
                <a href="#!">{props.item.name}</a>
                <a href="#!">{props.item.short_description}</a>
            </div>
        </div>
    )
};

export default TeamMemberCard;

