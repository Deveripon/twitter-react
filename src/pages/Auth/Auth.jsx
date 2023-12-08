import Meta from "../../components/Meta/Meta";
import Logo from "../../assets/images/logo-black.png";
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
            <section className="main-section bg-white h-screen">
                <div className="container flex justify-between h-full items-center">
                    <div className="left flex flex-1 justify-center items-center">
                        <img
                            className="w-[260px]"
                            src={Logo}
                            alt="logo"
                        />
                    </div>
                    <div className="right flex-1 justify-self-end flex gap-10 flex-col">
                        <h1 className="font-helveticaSubHeading font-bold text-[60px]">
                            Happening now
                        </h1>
                        <h3 className="font-helveticaSubHeading text-[30px]">
                            Join today.
                        </h3>
                        <button>Sign up with Google</button>
                        <button>Sign up with Apple</button>
                        <div className="box border-t border-gray-300 w-full"></div>
                        <h1>or</h1>
                        <div className="box border-t border-gray-300 w-full"></div>
                        <button>Create account</button>
                        <p>
                            By signing up, you agree to the
                            Terms of Service and Privacy
                            Policy, including Cookie Use.
                        </p>
                        <p>Already have an account?</p>
                        <button>Sign in</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Auth;
