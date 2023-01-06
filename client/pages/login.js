import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../components/contexts/UserContext";

const login = () => {

  const googleProvider = new GoogleAuthProvider();
  const {google, setUser} = useContext(AuthContext);

  const handleGoogleLogin = () => {
    google(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        toast.success('Hurray! Your login success!')
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="w-96 mx-auto my-12">
      <div className="bg-[#f1f5f7] text-center px-4 py-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Welcome Back!!!</h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-base text-gray-400">
          Haven't any account?{" "}
          <span className="text-blue-500 underline">
            <Link href="/signup">Sign Up</Link>
          </span>
        </p>
        <div className="divider">OR</div>
        <div className="form-control mt-6">
          <button className="btn btn-info btn-outline" onClick={handleGoogleLogin}>Google Login</button>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-error btn-outline">Github Login</button>
        </div>
      </div>
    </div>
  );
};

export default login;
