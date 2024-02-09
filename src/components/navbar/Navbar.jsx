import Links from "./links/Links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
