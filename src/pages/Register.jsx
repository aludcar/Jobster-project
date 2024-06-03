import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { loginUser, registerUser } from "../features/user/userSlice";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../components/FormRow";


const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(()=>{
    if(user){
      setTimeout(()=>navigate("/"),3000)
    }
  }, [user, navigate])

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    debugger;
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    dispatch(
      isMember
        ? loginUser({ email, password })
        : registerUser({ email, password, name })
    );
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {!values.isMember && (
          <FormRow
            {...{
              labelText: "name",
              name: "name",
              type: "text",
              value: values.name,
              handleChange,
            }}
          />
        )}
        <FormRow
          {...{
            labelText: "email",
            name: "email",
            type: "email",
            value: values.email,
            handleChange,
          }}
        />
        <FormRow
          {...{
            labelText: "password",
            name: "password",
            type: "password",
            value: values.password,
            handleChange,
          }}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? 'Loading...':'submit'}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
