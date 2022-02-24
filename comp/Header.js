import Clock from "react-live-clock";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-wrapper">
      <div className="h-container">
        <header>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <h1 className="h-name">Scarlett Gray</h1>
                </a>
              </Link>
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
    </div>
  );
};

export default Header;
