import Head from "next/head";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import styles from "./Index.module.scss";

export const IndexPage = () => {
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("000000");
  const [people, setPeople] = useState(null);

  useEffect(() => socketInitializer(), []);

  const socketInitializer = async () => {
    const socket = io(process.env.WS_URL, { transports: ["websocket"] });

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("connect_error", (error) => {
      setStatus(error.type);
    });
  };

  useEffect(() => {
    fetch(process.env.API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 200) {
          setPeople(data.body.people);
        }
      });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Padaster Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Rehash Code Challenge</h1>
        <h2 className={styles.name}>Dexter Hennington</h2>
        <h3 className={styles.subTitle}>Server Status</h3>
        <div className={styles.serverStatus} style={{ color: `#${color}` }}>
          {status}
        </div>
        <h3 className={styles.subTitle}>Database Entries</h3>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>IP Address</th>
            </tr>
          </thead>
          <tbody>
            {people &&
              people.map((p) => (
                <tr key={`people-${p.id}`}>
                  <td>{p.first_name}</td>
                  <td>{p.last_name}</td>
                  <td>{p.gender}</td>
                  <td>{p.email}</td>
                  <td>{p.ip_address}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IndexPage;
