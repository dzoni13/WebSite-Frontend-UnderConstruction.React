import React, { useEffect } from "react";
import TeamMemberCard from "./teamMemberCard";
import "./index.css";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { loadTeamMembers } from "../../actions/team";

const TeamMembers = ({ teamMembers }) => {

    const stableDispatch = useDispatch()

    useEffect(() => {
        stableDispatch(loadTeamMembers());
    }, [stableDispatch]);


    function renderItems() {
        return teamMembers.map((item, i) => {

            return (
                <TeamMemberCard
                    key={i}
                    item={item}
                />
            )
        })
    }
    return (
        <>
            <div className="theTeam">
                <div className="theTeamTxtContaier">
                    <h2>Our most valuable asset</h2>
                    <h1>ALWAYS FRIENDLY & PROFESSIONAL STAFF</h1></div></div>
            <div className="upcomingTeamsStyle">
                <h2>The Team</h2>
                <h4>Key Players</h4>
            </div>
            <div className="ui three column grid landingPageTeamContainer">
                {renderItems()}
            </div>
        </>)
};

const mapStateToProps = (state) => ({
    teamMembers: state.teamReducer.teamMembers,
});

export default connect(mapStateToProps)(TeamMembers);
