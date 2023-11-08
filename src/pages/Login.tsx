import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Card, Form, Input, message } from "antd";
import { Link } from "react-router-dom";

interface ILoginData {
  email: string;
  password: string;
}

export const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [formLogin] = Form.useForm();

  const onSignIn = async (values: ILoginData) => {
    let data = {
      email: values?.email,
      password: values?.password,
    };

    console.log("data sign in :", data);

    messageApi.open({
      type: "warning",
      content: "Please check there is an incorrect email or password.",
    });
  };

  return (
    <>
      {contextHolder}
      <div className="text-3xl text-center font-semibold my-5">Sign in</div>

      <div className="flex justify-center">
        <Card style={{ width: 300 }}>
          <Form layout="vertical" form={formLogin} onFinish={onSignIn}>
            <Form.Item
              name="email"
              label="Email : "
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input type="email" placeholder="Place your email"></Input>
            </Form.Item>

            <Form.Item
              label="Password : "
              name="password"
              rules={[{ required: true, message: "Please enter a password" }]}
            >
              <Input.Password
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              <Button
                className="bg-blue-500 text-white hover:bg-blue-600"
                htmlType="submit"
                block
              >
                Sign in
              </Button>
            </Form.Item>

            <div className="flex justify-center text-sm space-x-3">
              <div>Not a member?</div>
              <Link to="/register">
                <div className="text-blue-400 underline hover:text-blue-200">
                  Sign up now
                </div>
              </Link>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
};
