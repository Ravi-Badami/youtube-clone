import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleOpen());
  };

  /** It will get the value of the state from the slice */
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    /** It will call if typing speed difference is 200ms or more
     * - If speed is less than 200 than it will be skiped and clearTimout will be returned
     */
    const timer = setTimeout(
      () => {
        /**It will check if the search value is present in the state of the slice
         *
         * If the value is present in the slice than it will get the value and pass it to the setSuggestion
         *  which is responsible to display the suggestions on the screen
         */
        if (searchCache[searchQuery]) {
          setSuggestion(searchCache[searchQuery]);
        } else {
          /** If the value is not present in the state of the slice than the api call will be made
           *    according to the key stroks
           */
          suggestionData();
        }
      },

      200
    );
    /** This will be called every time  */
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const suggestionData = async () => {
    // console.log(searchQuery);
    const data = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);

    /** dispatch() will send data to the store */
    dispatch(
      /** The action function from the slice is called to send the data to the slice */
      cacheResults({
        /** Key and value pair is sent
         *
         *  Key will be the search value
         *  value will be suggestions to be displayed
         */
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="flex  justify-between p-1 shadow-lg  ">
      {/** hamburger and yt logo */}
      <div className="flex w-2/12 items-center justify-start ">
        <img
          className="h-7 m-3 cursor-pointer"
          src="https://imgs.search.brave.com/FX46EZ8gWdRpdd6wcV7W7SsT1KXDlIyNFeWQjLu63k0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY3NzLXRy/aWNrcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTIvMTAv/dGhyZWVsaW5lcy5w/bmc"
          alt="ham"
          onClick={() => toggleMenu()}
        />
        {/** Youtube logo image */}
        <div className="h-12 w-48 ">
          <a href="/">
            <img
              className="h-12 "
              src="https://imgs.search.brave.com/coqT9Ax1n6QWjtuYwHTFrOqaR32N9QFG5hR-yyZgO94/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzAwLzM4Lzkw/LzM2MF9GXzMwMDM4/OTAyNV9iNWhnSHBq/RHByVHlTbDhsb1Rx/SlJNaXB5U2Ixck8w/SS5qcGc"
              alt="yt"
            />
          </a>
        </div>
      </div>
      {/** Search Bar */}
      <div className="w-6/12  ">
        <div className=" flex ">
          <input
            type="text"
            placeholder="Search"
            className=" w-4/5  p-4  h-10 border-2 border-gray-400 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="w-16 p-1 h-10 border border-gray-400 rounded-r-full bg-gray-400">
            🔎
          </button>
        </div>
        {showSuggestion && (
          <div className=" rounded-lg absolute   w-[39.333333%] bg-white m-1 border border-gray-100 shadow-md shadow-black ">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="py-2 px-5 hover:bg-gray-300 cursor-default select-none"
                >
                  🔎<span className="m-3">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/** user logo */}
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
