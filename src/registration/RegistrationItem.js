import "./Registration.css";

export const RegistrationItem = ({
  name,
  startDate,
  endDate,
  startTime,
  endTime,
}) => {
  const endInMinutes = endTime.split(":");
  const totalEndMinutes =
    Number(endInMinutes[0]) * 60 + Number(endInMinutes[1]);
  const startInMinutes = startTime.split(":");
  const totalStartMinutes =
    Number(startInMinutes[0]) * 60 + Number(startInMinutes[1]);
  const workingMinutes = totalEndMinutes - totalStartMinutes;
  const hours = Math.floor(workingMinutes / 60);
  const minutes = workingMinutes % 60;
  const total = hours + ":" + minutes + " hours";
  const totalPrice = hours * 150 + (minutes / 60) * 150;
  return (
    <div className="display">
      <li className="left name"> {name}.</li>
      <li className="left">
        Start : {startDate} {startTime}.
      </li>
      <li className="endTime left">
        {" "}
        End : {endDate} {endTime}.
      </li>
      <li className="right"> Working Time : {total}.</li>
      <li className="right"> Salary : {totalPrice} Kr.</li>
    </div>
  );
};
