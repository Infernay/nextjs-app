import Link from "next/link";

export default function Nav() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <Link href={"/page"}>Page1</Link>
      <Link href={"/page2"}>Page 2</Link>
    </>
  );
}
