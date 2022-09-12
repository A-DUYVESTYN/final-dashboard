import Button from "./Button";
import { useState } from "react";

const Settings = (props) => {
  const [selected, setSelected] = useState("bookmarks");

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

  return (
    <>
      <div className="z-40 fixed top-1/4 left-1/4 bg-base-300 w-[450px] rounded-3xl flex flex-row border-2 border-base-content">
        <div className="w-full">
          <>
            <div className="bg-base-300 rounded-t-[1.4rem] h-8 pt-[4px] ">
              <p className="text-center text-accent border-b-2 h-full border-b-base-content ">Settings</p>
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
          <h2 className="text-center w-full mt-2 ">
            Toggle Visibility
          </h2>
          <div className="w-full flex-col mx-36">
            <div className="w-20 flex flex-row items-center relative my-4">
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
            <div className="w-20 flex flex-row items-center relative my-4">
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
            <div className="w-20 flex flex-row items-center relative my-4">
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
            <div className="w-20 flex flex-row items-center relative my-4">
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
            <div className="w-20 flex flex-row items-center relative my-4">
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
            <div className="w-20 flex flex-row items-center relative my-4">
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
            <div className="w-20 flex flex-row items-center relative my-4">
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
            <div className="w-20 flex flex-row items-center relative my-4">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
