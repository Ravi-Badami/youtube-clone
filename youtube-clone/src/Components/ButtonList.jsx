import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Computer",
    "Podcast",
    "Thoughts",
    "Gadgets",
    "News",
    "Watched",
    "New to you",
  ];
  return (
    <div className="flex ">
      {buttonList.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
