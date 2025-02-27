import { redirect } from "next/navigation";

interface HeaderProps {
  showLoginButton: boolean;
  showRegisterButton: boolean;
  children: React.ReactNode;
}

export default function Header({
  showLoginButton,
  showRegisterButton,
  children,
}: HeaderProps) {
  function redirectLogin() {
    redirect("/user/login");
  }

  function redirectRegistration() {
    redirect("/user/register");
  }

  return (
    <>
      <div className="h-12 w-full p-2 flex justify-between items-center bg-blue-800 text-white">
        <h1>Financial Tracker</h1>
        <div className="h-full">
          {showLoginButton && (
            <button onClick={redirectLogin} className="h-full outline outline-white p-1">
              Sign In
            </button>
          )}
          {showRegisterButton && (
            <button onClick={redirectRegistration} className="h-full outline outline-white p-1">
              Sign Up
            </button>
          )}
        </div>
      </div>
      <div className="h-[calc(100vh-3rem)]">{children}</div>
    </>
  );
}
