import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../components/contexts/UserContext";

const signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const { createUser, setUser, updateUser, google } = useContext(AuthContext);

  // Email and password signup
  const handleRegisterUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        setUser(result?.user);
        toast.success("Huray! Your account is created.");
        updateUser(name)
          .then(() => {
            toast.success("User update");
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));

    form.reset();
  };

  // Google signup
  const handleGoogleLogin = () => {
    google(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Hurray! Your login success!");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="w-96 mx-auto my-12">
      <div className="bg-[#f1f5f7] text-center px-4 py-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to SkyFly</h1>
        <form className="card-body" onSubmit={handleRegisterUser}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <div className="flex justify-between items-center">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="label cursor-pointer">
                <span
                  className="label-text"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"} Password
                </span>
              </label>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <p className="text-base text-gray-400">
          Already have any an account?{" "}
          <span className="text-blue-500 underline">
            <Link href="/login">Sign In</Link>
          </span>
        </p>
        <div className="divider">OR</div>
        <div className="flex justify-center gap-4">
          <div className="form-control">
            <button className="btn btn-info btn-outline" onClick={handleGoogleLogin}>Google Login</button>
          </div>
          <div className="form-control">
            <button className="btn btn-error btn-outline">Github Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
