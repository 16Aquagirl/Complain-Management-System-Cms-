import { HashLoader } from "react-spinners";
const Loader = () => {
    return (
        <>
            <div className="loader">
                            <HashLoader
                                color="black"
                                loading
                                size={60}
                                speedMultiplier={1}
                            />

            </div>
        </>
    );
};
export default Loader;