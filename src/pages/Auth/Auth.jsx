import Meta from "../../components/Meta/Meta";
import Logo from "../../assets/images/logo-white.png";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
const Auth = () => {
    return (
        <>
            <Meta>
                <title>X.It's What's happening / X</title>
                <link
                    rel="shortcut icon"
                    href="https://abs.twimg.com/favicons/twitter.3.ico"
                    type="image/x-icon"
                />
            </Meta>
            <section className="main-section bg-black pt-10">
                <div className="container flex justify-between h-full items-center">
                    <div className="left w-[65%] flex justify-center items-center">
                        <img
                            className="w-[260px]"
                            src={Logo}
                            alt="logo"
                        />
                    </div>

                    <div className="text-white right w-[45%]">
                        <h1 className="font-helveticaSubHeading mb-10 font-bold text-[59px]">
                            Happening now
                        </h1>
                        <div className="mid w-[310px] text-white">
                            <h3 className="text-white mb-6 font-helveticaSubHeading text-[30px] font-bold">
                                Join today.
                            </h3>
                            <div className="button-group flex justify-center items-center gap-2 flex-col">
                                <button className="bg-white flex text-[14px] font-semibold justify-center items-center gap-2 w-[310px] py-2 rounded-full text-black">
                                    <FaGoogle /> Sign up
                                    with Google
                                </button>
                                <button className="bg-white flex text-[15px] font-semibold justify-center items-center gap-2 w-[310px] py-2 rounded-full text-black">
                                    {" "}
                                    <FaApple />
                                    Sign up with Apple
                                </button>
                            </div>
                            <div className="divider my-2 flex justify-center items-center gap-4">
                                <div className="box border-t border-gray-300 w-full"></div>
                                <h1>or</h1>
                                <div className="box border-t border-gray-300 w-full"></div>
                            </div>
                            <button className="bg-cyan-500 transform duration-100 hover:bg-cyan-600 font-semibold flex justify-center items-center gap-2 w-[310px] py-[8px] rounded-full text-white">
                                Create account
                            </button>
                            <p className="text-gray-500 text-[12px] mt-[6px] mb-[50px]">
                                By signing up, you agree to
                                the{" "}
                                <Link
                                    className="text-cyan-400 hover:underline"
                                    to="">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link
                                    to=""
                                    className="text-cyan-400 hover:underline">
                                    Privacy Policy
                                </Link>{" "}
                                , including{" "}
                                <Link
                                    to=""
                                    className="text-cyan-400 hover:underline">
                                    Cookie Use
                                </Link>{" "}
                                .
                            </p>
                            <p className="font-semibold tracking-wide text-[17px] my-4">
                                Already have an account?
                            </p>
                            <button className="bg-tranparent border-gray-500 border hover:bg-slate-700 hover:backdrop-blur-[100px] transform duration-100 font-semibold flex justify-center items-center mb-[40px] gap-2 w-[310px] py-[8px] rounded-full text-cyan-500">
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default Auth;
