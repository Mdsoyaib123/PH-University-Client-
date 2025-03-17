import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login, { data, error }] = useLoginMutation();
  console.log(data);
  console.log(error);
  
  const onsubmit = (data) => {
    const userInfo = {
      id: data.id,
      Password: data.password,
    };
    login(userInfo);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>ID :</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label>PASSWORD :</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default Login;
