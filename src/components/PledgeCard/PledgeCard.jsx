import React from "react";
import { Link } from "react-router-dom";
// Adding CSS
import "./Pledgecard.css";

function PledgeCard(props){
    const {pledgeData} =props;
    return (
        <div className="pledge-card">
        <Link to={`/pledges/${pledgeData.id}`}>
        <h3>{pledgeData.amount}</h3>
        <h3>{pledgeData.comment}</h3>
        <h3>{pledgeData.anonymous}</h3>
        <h3>{pledgeData.project}</h3>
        <h3>{pledgeData.supporter}</h3>
        </Link>
        </div>
    );
}
export default PledgeCard;