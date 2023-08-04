import "./style.css";
import { MagnifyingGlass } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="loader__wrapper">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="white"
        color="#000"
      />
    </div>
  );
};

export default Loader;
