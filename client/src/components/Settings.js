import Button from "./Button";
import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
const Settings = (props) => {
  const [selected, setSelected] = useState("bookmarks");
  const [theme, setTheme] = useState("dark");
  const themeOptions = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "luxury",
    "dracula",
    "cymk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffe",
    "winter",
  ];

  const userInfo = props.userData;

  const logUserData = () => {
    console.log(userInfo);
  };

  console.log("THIS IS USERDATA FROM SETTINGS:", userInfo);

  return (
    <div className="fixed w-[100%] h-[100%] top-0 right-0 backdrop-blur-sm z-20">
      <button
        type="button"
        onClick={() => props.toggleSettings()}
        className="z-40 btn-xs btn-error absolute top-[3.3rem] rounded-full right-[35%]"
      >
        X
      </button>
      <div className="z-30 absolute top-12 left-1/3 bg-base-300 w-[450px] rounded-3xl flex flex-row border-2 border-base-content">
        <div className="w-full">
          <>
            <div className="bg-base-300 rounded-t-[1.4rem] h-8 pt-[4px]">
              <p className="text-center text-accent border-b-2 h-full border-b-base-content ">
                Settings
              </p>
            </div>
            <select
              className="select select-bordered w-full max-w-xs mt-4"
              onChange={props.themeChange}
            >
              <option disabled selected>
                Select Theme
              </option>
              {themeOptions.map((theme) => (
                <option value={theme}>{theme}</option>
              ))}
            </select>
          </>
          <h2 className="text-center w-full mt-2 ">Toggle Visibility</h2>
          <div className="w-full flex-col">
            <div className="w-20 flex flex-row -right-32 relative my-4">
              <p className="w-20 mr-20"> Bookmarks </p>
              <div className="flex flex-row mt-2 -right-32 px-8 absolute -top-2">
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  onClick={() =>
                    props.setVisibility("Bookmarks", props.showBools.Bookmarks)
                  }
                  name="Bookmarks"
                  checked={props.showBools.Bookmarks}
                />
              </div>
            </div>
            <div className="w-20 flex flex-row -right-32 relative my-4">
              <p className="w-20 mr-20"> Clock </p>
              <div className="flex flex-row mt-2 -right-32 px-8 absolute -top-2">
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  onClick={() =>
                    props.setVisibility("Clock", props.showBools.Clock)
                  }
                  name="Clock"
                  checked={props.showBools.Clock}
                />
              </div>
            </div>
            <div className="w-20 flex flex-row -right-32 relative my-4">
              <p className="w-20 mr-20"> Twitch </p>
              <div className="flex flex-row mt-2 -right-32 px-8 absolute -top-2">
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  onClick={() =>
                    props.setVisibility("Twitch", props.showBools.Twitch)
                  }
                  name="Twitch"
                  checked={props.showBools.Twitch}
                />
              </div>
            </div>
            <div className="w-20 flex flex-row -right-32 relative my-4">
              <p className="w-20 mr-20"> Horoscope </p>
              <div className="flex flex-row mt-2 -right-32 px-8 absolute -top-2">
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  onClick={() =>
                    props.setVisibility("Horoscope", props.showBools.Horoscope)
                  }
                  name="Horoscope"
                  checked={props.showBools.Horoscope}
                />
              </div>
            </div>
            <div className="w-20 flex flex-row -right-32 relative my-4">
              <p className="w-20 mr-20"> Recipe </p>
              <div className="flex flex-row mt-2 -right-32 px-8 absolute -top-2">
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  onClick={() =>
                    props.setVisibility("Recipe", props.showBools.Recipe)
                  }
                  name="Recipe"
                  checked={props.showBools.Recipe}
                />
              </div>
            </div>
            <div className="w-20 flex flex-row -right-32 relative my-4">
              <p className="w-20 mr-20"> Weather </p>
              <div className="flex flex-row mt-2 -right-32 px-8 absolute -top-2">
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  onClick={() =>
                    props.setVisibility("Weather", props.showBools.Weather)
                  }
                  name="Weather"
                  checked={props.showBools.Weather}
                />
              </div>
            </div>
            <div className="w-20 flex flex-row -right-32 relative my-4">
              <p className="w-20 mr-20"> Spotify </p>
              <div className="flex flex-row mt-2 -right-32 px-8 absolute -top-2">
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  onClick={() =>
                    props.setVisibility("Spotify", props.showBools.Spotify)
                  }
                  name="Spotify"
                  checked={props.showBools.Spotify}
                />
              </div>
            </div>
            <div className="w-20 flex flex-row -right-32 relative my-4">
              <p className="w-20 mr-20"> Maps </p>
              <div className="flex flex-row mt-2 -right-32 px-8 absolute -top-2">
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  onClick={() =>
                    props.setVisibility("Maps", props.showBools.Maps)
                  }
                  name="Maps"
                  checked={props.showBools.Maps}
                />
              </div>
            </div>
            <div className="w-20 flex flex-row -right-32 relative my-4">
              <p className="w-20 mr-20"> Transit </p>
              <div className="flex flex-row mt-2 -right-32 px-8 absolute -top-2">
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  onClick={() =>
                    props.setVisibility("Transit", props.showBools.Transit)
                  }
                  name="Transit"
                  checked={props.showBools.Transit}
                />
              </div>
            </div>
            <div className="w-20 flex flex-row -right-32 relative my-4">
              <p className="w-20 mr-20"> Search </p>
              <div className="flex flex-row mt-2 -right-32 px-8 absolute -top-2">
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  onClick={() =>
                    props.setVisibility("Search", props.showBools.Search)
                  }
                  name="Search"
                  checked={props.showBools.Search}
                />
              </div>
            </div>
            <div className="flex justify justify-center ">
              <button
                type="button"
                onClick={props.logout}
                class=" text-accent-content w-24 btn-accent focus:ring-4 focus:outline-none rounded-full font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                <div className="flex items-center">
                  {" "}
                  <span className="">Logout</span> 
                  <div className="ml-2 mt-[2px] text-accent-content inline">
                    <MdLogout></MdLogout>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="bg-base-300 rounded-b-[1.4rem] h-8 pt-[4px]">
            <p className="text-center text-accent border-t-2 h-full border-t-base-content  text-sm">
              Logged In as: {userInfo.username}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
