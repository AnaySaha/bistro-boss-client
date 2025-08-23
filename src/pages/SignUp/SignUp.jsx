import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { data, Link } from "react-router-dom";
import { AuthContext } from "../../firebase/providers/AuthProviders";





const SignUp = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const { createUser } = useContext(AuthContext);
  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggeduser = result.user;
      console.log(loggeduser);
    })
  }


  return (
    <>
     <Helmet><title> BISTRO | SIGN UP</title></Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 12,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} name="password" placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className="
                text-red-600">
                  Password is Requied
                </p>}
                {errors.password?.type === 'minLength' && <p className="
                text-red-600">
                  Password must be 8 characters
                </p>}
                {errors.password?.type === 'maxLength' && <p className="
                text-red-600">
                  Password must be less then 12 characters
                </p>}
                {errors.password?.type === 'pattern' && <p className="
                text-red-600">
                  Password must be have one upper case, one lower case, one number
                  and one special characters
                </p>}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type='submit' value="Sign Up"
                  className="btn btn-primary" />
              </div>
            </form>
            <p><small>Alread have an Account? <Link to="/Login"> Login
                        </Link> </small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;