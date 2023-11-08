import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Card, Form, Input, message } from "antd";
import { Link } from "react-router-dom";

interface ICreateUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [formRegister] = Form.useForm();

  const onSignUp = async (values: ICreateUser) => {
    if (values.password === values.confirmPassword) {
      let data = {
        email: values?.email,
        firstName: values?.firstName,
        lastName: values?.lastName,
        password: values?.password,
      };

      console.log("data sign up :", data);
    } else {
      messageApi.open({
        type: "warning",
        content: "Passwords do not match",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <div className="text-3xl text-center font-semibold my-5">Sign up</div>

      <div className="flex justify-center">
        <Card style={{ width: 500 }}>
          <Form layout="vertical" form={formRegister} onFinish={onSignUp}>
            <Form.Item
              name="email"
              label="Email : "
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input type="email" placeholder="Place your email"></Input>
            </Form.Item>

            <div className="grid grid-cols-2 gap-2">
              <Form.Item
                name="firstName"
                label="First name : "
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
              >
                <Input type="text" placeholder="Place your first name"></Input>
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last name : "
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
              >
                <Input type="text" placeholder="Place your last name"></Input>
              </Form.Item>
            </div>

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
            <Form.Item
              label="Confirm Password : "
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your password",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("The two passwords do not match");
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm password"
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
                Sign up
              </Button>
            </Form.Item>

            <div className="flex justify-center text-sm space-x-3">
              <div>Already a user? </div>
              <Link to="/login">
                <div className="text-blue-400 underline hover:text-blue-200">
                  Login
                </div>
              </Link>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
};
