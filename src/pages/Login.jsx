const Login = () => {
  return (
    <section className="max_padd_container flexCenter flex-col pt-32 px-4 sm:px-6 md:px-14">
      <div className="max-w-[555px] w-full h-[550px] bg-white m-auto px-6 py-10 rounded-md">
        <h3 className="bold-36 text-center sm:text-left">Sign Up</h3>
        <div className="flex flex-col gap-4 mt-7">
          <label className="sr-only" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <label className="sr-only" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
        </div>
        <button className="btn_dark_rounded my-4 w-full !rounded-md">
          Continue
        </button>
        <p className="text-black font-bold mt-4 text-center sm:text-left">
          Already have an account?{" "}
          <span className="text-secondary underline cursor-pointer">Login</span>
        </p>
        <div className="flex items-start mt-6 gap-3">
          <input id="terms" type="checkbox" className="mt-1" />
          <label htmlFor="terms" className="text-sm">
            By continuing, I agree to the{" "}
            <a href="#" className="text-secondary underline">
              Terms of Use
            </a>{" "}
            &{" "}
            <a href="#" className="text-secondary underline">
              Privacy Policy
            </a>
            .
          </label>
        </div>
      </div>
    </section>
  );
};

export default Login;
