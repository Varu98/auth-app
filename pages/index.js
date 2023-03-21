import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useAuth } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const auth = useAuth();
  return auth.user ? (
    <div>
      <p>Email : {auth.user.email}</p>
      <button onClick={(e) => auth.signout()}>Signout</button>
    </div>
  ) : (
    <button onClick={(e) => auth.signinWithGithub()}>SignIn</button>
  );
}
