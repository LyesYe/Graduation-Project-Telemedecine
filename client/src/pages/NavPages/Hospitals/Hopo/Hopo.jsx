import React from "react";
import HopCard from "./HopCard";
import "./Hopo.css";

const [hopitales, sethopitales] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:3001/hopital/all", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data);
      localStorage.setItem(
        "hop",
        res.data.map((el) => el.name)
      );
      sethopitales(res.data.map((el) => el.name));
    });
}, []);

const Hopo = () => {
  return (
    <div id="hoCont">
      <div id="hoptxt">Liste des Hopiteaux</div>
      <div id="hopcard">
        {hopitales.map((el) => (
          <HopCard name={el.} />
        ))}
      </div>
    </div>
  );
};

export default Hopo;
