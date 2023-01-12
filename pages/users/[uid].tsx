import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IUser } from "../../pageInterfaces/IndexPageProps";

const UserPage: NextPage = () => {
  const router = useRouter();
  const { uid } = router.query;
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${uid}`).then((res) =>
      res
        .json()
        .then((user) => setUser(user))
        .catch((err) => console.log(err))
    );
  }, []);

  if (!user) return <h2 style={{ textAlign: "center" }}>LOADING...</h2>;

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default UserPage;
