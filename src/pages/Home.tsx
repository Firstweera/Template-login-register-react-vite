import { Button } from "antd";

export const Home = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
      }}
    >
      <div className="flex justify-center h-full p-4 md:p-8">
        <div className="max-w-2xl flex flex-col items-start space-y-6">
          <p className="text-white text-2xl">Welcome to the Social Media!</p>
          <p className="text-white bg-slate-300/20 shadow-sm p-4 rounded-md">
            Explore a world of connections, interactions, and shared
            experiences. Our platform offers seamless user management, secure
            authentication, and much more. Join us and be part of a vibrant
            online community.
          </p>

          <div className="flex space-x-2">
            <Button
              shape="round"
              size="large"
              type="text"
              className="bg-blue-500 text-white hover:bg-blue-700"
              href={"/register"}
            >
              Get started
            </Button>
            <Button
              shape="round"
              size="large"
              type="text"
              className="bg-slate-300 text-white hover:bg-slate-500"
              href={"/about"}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
