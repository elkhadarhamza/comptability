import classNames from "classnames";

const Menu = (props) => {
  const { className, ...otherProps } = props;
  return (
    <ul className="flex p-2">
        <li className="flex-1 mr-2">
        <a className="text-center block border border-blue-500 rounded py-1 px-3 bg-blue-500 hover:bg-blue-700 text-white" href="/">Add Entry</a>
        </li>
        <li className="flex-1 mr-2">
        <a className="text-center block border border-blue-500 rounded py-1 px-3 bg-blue-500 hover:bg-blue-700 text-white" href="/journal">Journal</a>
        </li>
    </ul>
  );
};

export default Menu;
