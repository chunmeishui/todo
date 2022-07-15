import { useState, useEffect } from "react";
import { RegistrationItem } from "./RegistrationItem";
import { FancyBorder } from "../todoweek3/FancyBorder";
import "./Registration.css";

//main function
export const RegistrationList = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [update, setUpdate] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  // add info
  const saveInfo = () => {
    // const id = update.length + 1;
    setUpdate((prev) => [
      ...prev,
      { name, startDate, endDate, startTime, endTime },
    ]);
  };
  // how to calculate the time from the api ?????? with date and time together
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw"
    )
      .then((response) => response.json())
      .then((data) => {
        data.map((data, index) => {
          return setUpdate((prev) => [
            ...prev,
            {
              // id: id,
              name: data.name,
              startDate: data.start.split("T")[0],
              startTime: data.start.split("T")[1],
              endDate: data.end.split("T")[0],
              endTime: data.end.split("T")[1],
            },
          ]);
        }, []);
      });
  }, []);
  // search part
  function searchByName() {
    const result = update.filter((data) =>
      data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setUpdate(result);
    setSearchValue("");
  }

  // child registrationItem part
  const registrationItem = update.map((item, index) => {
    return (
      <>
        <RegistrationItem
          name={item.name}
          startDate={item.startDate}
          startTime={item.startTime}
          endDate={item.endDate}
          endTime={item.endTime}
          // id={item.id}
          key={index}
        />
      </>
    );
  });

  //list part render
  return (
    <div>
      <FancyBorder>
        <h3>Submit shift</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="startTime"> Start Time </label>
          <input
            id="startTime"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
          <input
            id="startTime"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="endTime"> End Time </label>
          <input
            id="endTime"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
          <input
            id="startTime"
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          ></input>
        </div>
        <div>
          <button onClick={saveInfo} className="saveButton">
            save shift
          </button>
        </div>
      </FancyBorder>

      <FancyBorder>
        <div className="reviewa">
          <h3> Shift overview</h3>
          <div>
            <input
              placeholder="name"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            ></input>
            <button onClick={searchByName}>search</button>
          </div>
          <ul>{registrationItem}</ul>
        </div>
      </FancyBorder>
    </div>
  );
};
