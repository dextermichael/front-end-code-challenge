import Head from "next/head";
import styles from "./Index.module.scss";

export const IndexPage = () => {
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
        <div className={styles.serverStatus}>Plutonium</div>
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
            <tr>
              <td>Jeanette</td>
              <td>Penddreth</td>
              <td>Female</td>
              <td>jpenddreth@census.gov</td>
              <td>26.58.193.2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IndexPage;
