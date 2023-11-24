import { useDispatch } from "react-redux";
import { toggleOpen } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleOpen());
  };
  return (
    <div className="flex  justify-between p-1 shadow-lg">
      <div className="flex w-1/12 items-center justify-start">
        <img
          className="h-7 m-3 cursor-pointer"
          src="https://imgs.search.brave.com/FX46EZ8gWdRpdd6wcV7W7SsT1KXDlIyNFeWQjLu63k0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY3NzLXRy/aWNrcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTIvMTAv/dGhyZWVsaW5lcy5w/bmc"
          alt="ham"
          onClick={() => toggleMenu()}
        />
        <img
          className="h-12"
          src="https://imgs.search.brave.com/coqT9Ax1n6QWjtuYwHTFrOqaR32N9QFG5hR-yyZgO94/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzAwLzM4Lzkw/LzM2MF9GXzMwMDM4/OTAyNV9iNWhnSHBq/RHByVHlTbDhsb1Rx/SlJNaXB5U2Ixck8w/SS5qcGc"
          alt="yt"
        />
      </div>
      <div className="w-8/12 flex  justify-center">
        <input
          type="text"
          placeholder="Search"
          className=" w-3/5  p-4 h-10 border-2 border-gray-400 rounded-l-full  "
        />
        <button className="w-16 p-1 h-10 border border-gray-400 rounded-r-full bg-gray-400">
          🔎
        </button>
      </div>
      <div className=" w-1/12 self-start">
        <img
          className="h-10 "
          src="https://imgs.search.brave.com/EUXDaA5JkBchSWkVHhkWSPihcXVc_fA_lEFzge7pyZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzg5LzU5LzU1/LzM2MF9GXzI4OTU5/NTU3M193Q0tPMW54/eHg3SEdrNjl6NXN6/anZTT3FQblpWVGZU/Ry5qcGc"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
