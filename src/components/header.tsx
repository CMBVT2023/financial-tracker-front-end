import deleteUserLogin from "@/utils/user-cookies/delete-user-login";
import Link from "next/link";
import { redirect } from "next/navigation";

interface HeaderProps {
  showLoginButton: boolean;
  showRegisterButton: boolean;
  isUserLoggedIn: boolean;
  children: React.ReactNode;
}

export default function Header({
  showLoginButton,
  showRegisterButton,
  isUserLoggedIn,
  children,
}: HeaderProps) {
  function redirectLogin() {
    redirect("/user/login");
  }

  function redirectRegistration() {
    redirect("/user/register");
  }

  async function signUserOut() {
    const isUserSignedOut = deleteUserLogin();
    if (!isUserSignedOut) {
      alert("Signout failed!");
      return;
    }
    redirect("/user/login");
  }

  const RenderSignInOrOut = () => {
    return isUserLoggedIn ? (
      <button
        onClick={signUserOut}
        className="h-full outline outline-white p-1"
      >
        Sign Out
      </button>
    ) : (
      <button
        onClick={redirectLogin}
        className="h-full outline outline-white p-1"
      >
        Sign In
      </button>
    );
  };

  return (
    <>
      <div className="h-12 w-full p-2 flex justify-between items-center bg-blue-800 text-white">
        <Link href={{ pathname: "/" }} className="text-xl">
          Financial Tracker
        </Link>
        <div className="h-full flex gap-2">
          {showLoginButton && <RenderSignInOrOut />}
          {showRegisterButton && (
            <button
              onClick={redirectRegistration}
              className="h-full outline outline-white p-1"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
      <div className="max-h-[calc(100vh-3rem)] h-[calc(100vh-3rem)] overflow-y-auto p-2">{children}</div>
    </>
  );
}
