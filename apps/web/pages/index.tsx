import { GetServerSideProps } from "next";
import { Button } from "ui";

export default function Web(props) {
  console.log(props)
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { data: 'test' } }
}