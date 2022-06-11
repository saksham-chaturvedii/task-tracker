import Button from "./Button";

const Header = (props) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button onClick={onClick} color="green" text="Add" />
    </header>
  );
};

Header.defaultProps = {
  title: "aalu bhijuya",
};
export default Header;
