/** @format */
import { useState } from "react";

const Section = ({ title, discroption, isVisibe, setIsVisible }) => {
  return (
    <div
      style={{
        border: "1px solid #000",
        marginBottom: "20px",
        padding: "20px",
      }}>
      <h3>{title}</h3>
      {isVisibe ? (
        <div>
          <button onClick={() => setIsVisible(false)}>Hide</button>
          <p>{discroption}</p>
        </div>
      ) : (
        <div>
          <button onClick={() => setIsVisible(true)}>Show</button>
        </div>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("team");

  return (
    <div>
      <Section
        title={"About instamart"}
        discroption={
          "this is dynamic discription this is dynamic discription this is dynamic discription this is dynamic discription this is dynamic discription this is dynamic discription this is dynamic discription"
        }
        isVisibe={visibleSection === "about"}
        setIsVisible={() => setIsVisibleSection("about")}
      />
      <Section
        title={"team section"}
        discroption={
          "this is team dynamic discription this is team dynamic discription this is team dynamic discription this is team dynamic discriptionthis is team dynamic discription this is team dynamic discription this is team dynamic discription this is team dynamic discription"
        }
        isVisibe={visibleSection === "team"}
        setIsVisible={() => setIsVisibleSection("team")}
      />

      <Section
        title={"Careers"}
        discroption={
          "this is team dynamic discription this is team dynamic discription this is team dynamic discription this is team dynamic discriptionthis is team dynamic discription this is team dynamic discription this is team dynamic discription this is team dynamic discription"
        }
        isVisibe={visibleSection === "careers"}
        setIsVisible={() => setIsVisibleSection("careers")}
      />
      <h1>instamart componts</h1>
      <h1>100s of component inside it</h1>
    </div>
  );
};

export default Instamart;
