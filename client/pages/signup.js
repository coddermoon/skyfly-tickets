import Link from "next/link";

const signup = () => {
  return (
    <div className="w-96 mx-auto my-12">
      <div className="bg-[#f1f5f7] text-center px-4 py-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to SkyFly</h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
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
            <button className="btn btn-info btn-outline">Google Login</button>
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
