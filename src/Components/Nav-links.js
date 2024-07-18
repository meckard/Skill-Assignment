import house from "../Images/home_FILL0_wght300_GRAD0_opsz24.svg";
import person from "../Images/group_FILL0_wght300_GRAD0_opsz24.svg";
import calendar from "../Images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import chatbubble from "../Images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import creditcard from "../Images/credit_card_FILL0_wght300_GRAD0_opsz24.svg";

export default function NavLinks() {
    return (
	<ul className="nav-links">
		<li className="nav-item">
			<img
				src={house}
				alt="An icon of a house"
				className="house"
			/>
			<p className="overview">Overview</p>
		</li>
		<li className="nav-item">
			<img
				src={person}
				alt="An icon of a person"
				className="person"
			/>
			<p className="patients">Patients</p>
		</li>
		<li className="nav-item">
			<img
				src={calendar}
				alt="An icon of a calendar"
				className="calendar"
			/>
			<p className="schedule">Schedule</p>
		</li>
		<li className="nav-item">
			<img
				src={chatbubble}
				alt="An icon of a chat bubble"
				className="chatbubble"
			/>
			<p className="message">Message</p>
		</li>
		<li className="nav-item">
			<img
				src={creditcard}
				alt="An icon of a credit card"
				className="creditcard"
			/>
			<p className="transactions">Transactions</p>
		</li>
	</ul>
    )
}
