import React, { useState } from "react";
import Calendar from "react-calendar";
import "./index.css";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

function Kalendar() {
    const [formData, setFormData] = useState({
        time: "",
        party_size: "",
        mobile_number: "",
    });
    const { time, party_size, mobile_number } = formData;

    const myFunc = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const [date, setDate] = useState(new Date());
    const onChange = (date) => {
        setDate(date);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const newReservation = {
            mobile_number,
            time,
            party_size,
            date,
        };
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify(newReservation);
            const res = await axios.post("/api/reservation", body, config);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="calendar">
            <Calendar onChange={onChange} name="calendar" value={date} />
            {date.toString()}
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    type="text"
                    placeholder="time"
                    name="time"
                    value={time}
                    onChange={(e) => myFunc(e)}
                ></input>
                <input
                    type="text"
                    placeholder="party size"
                    name="party_size"
                    value={party_size}
                    onChange={(e) => myFunc(e)}
                ></input>
                <input
                    type="text"
                    placeholder="phone number"
                    name="mobile_number"
                    value={mobile_number}
                    onChange={(e) => myFunc(e)}
                ></input>
                <input type="submit" id="btn"></input>
            </form>
        </div>
    );
  return (
    <div className="main-reservation">
      <p className="makeReservationStyle">Make a Reservation</p>
      <div className="dropdown">
        <button className="dropbtn">
          Date
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Calendar onChange={onChange} name="calendar" value={date} />
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          Time
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <select
            className="ui search dropdown"
            type="text"
            placeholder="time"
            name="time"
            value={time}
            onChange={(e) => myFunc(e)}
          >
            <option value="">Time</option>
            <option value="8:00">8:00</option>
            <option value="8:15">8:15</option>
            <option value="8:30">8:30</option>
            <option value="8:45">8:45</option>
            <option value="9:00">9:00</option>
            <option value="9:15">9:15</option>
            <option value="9:30">9:30</option>
            <option value="9:45">9:45</option>
            <option value="10:15">10:15</option>
            <option value="10:30">10:30</option>
            <option value="10:45">10:45</option>
            <option value="11:00">11:00</option>
            <option value="11:15">11:15</option>
            <option value="11:30">11:30</option>
            <option value="11:45">11:45</option>
            <option value="12:00">12:00</option>
            <option value="12:15">12:15</option>
            <option value="12:30">12:30</option>
            <option value="12:45">12:45</option>
            <option value="13:00">13:00</option>
            <option value="13:15">13:15</option>
            <option value="13:30">13:30</option>
            <option value="13:45">13:45</option>
            <option value="14:00">14:00</option>
            <option value="14:15">14:15</option>
            <option value="14:30">14:30</option>
            <option value="14:45">14:45</option>
            <option value="15:00">15:00</option>
            <option value="15:15">15:15</option>
            <option value="15:30">15:30</option>
            <option value="15:45">15:45</option>
            <option value="16:00">16:00</option>
            <option value="16:15">16:15</option>
            <option value="16:30">16:30</option>
            <option value="16:45">16:45</option>
            <option value="17:00">17:00</option>
            <option value="17:15">17:15</option>
            <option value="17:30">17:30</option>
            <option value="17:45">17:45</option>
            <option value="18:00">18:00</option>
            <option value="18:15">18:15</option>
            <option value="18:30">18:30</option>
            <option value="18:45">18:45</option>
            <option value="19:00">19:00</option>
            <option value="19:15">19:15</option>
            <option value="19:30">19:30</option>
            <option value="19:45">19:45</option>
          </select>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          Party size
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <input
            type="number"
            placeholder="party size"
            name="party_size"
            value={party_size}
            onChange={(e) => myFunc(e)}
          ></input>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          Mobile number
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <input
            type="text"
            placeholder="phone number"
            name="mobile_number"
            value={mobile_number}
            onChange={(e) => myFunc(e)}
          ></input>
        </div>
      </div>

      <div className="calendar">
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="submit" id="btn"></input>
        </form>
      </div>
    </div>
  );
}

export default Kalendar;
