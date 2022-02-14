import Clock from "react-live-clock";

const Header = () => {
  return (
    <div className="h-container">
      <header>
        <ul>
          <li>
            <h1 className="h-name">Scarlett Gray</h1>
          </li>
        </ul>
      </header>
      <Clock
        className="clock"
        format={"h:mm:ssa"}
        style={{ fontSize: "50px" }}
        ticking={true}
      />
    </div>
  );
};

export default Header;
