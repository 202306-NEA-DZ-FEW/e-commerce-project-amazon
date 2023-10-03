import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../lib/utils/firebase";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();


  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {
    const Logged = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        router.push("/shopcart");
      } else {
        setUser(null);
      }
    }, []);
    return () => {
      Logged();
    };
  }, [router]);

  return (
    <div className="flex lg:flex-row flex-col py-10 place-content-center ">
      <div className="flex flex-col py-2">
        <h2 className="mb-5">Sign up</h2>
        <form className="space-y-2 flex flex-col " onSubmit={signUp}>
          <div>sign up with google account</div>
          <label>E-mail :</label>
          <input
            type="email"
            className="border border-sky-500"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password :</label>
          <input
            type="password"
            className="border border-sky-500"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            type="submit"
            className="rounded-md mx-auto bg-black text-white font-semibold  w-[300px]"
          >
            {" "}
            Sign Up{" "}
          </button>
        </form>
      </div>

      <div className="flex flex-col px-4">
        <h2>Sign In</h2>
        <form className="space-y-2 flex flex-col " onSubmit={signIn}>
          <label>E-mail :</label>
          <input
            type="email"
            className="border border-sky-500 "
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password :</label>
          <input
            type="password"
            className="border border-sky-500"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            type="submit"
            className="rounded-md mx-auto bg-black text-white font-semibold  w-[300px]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
