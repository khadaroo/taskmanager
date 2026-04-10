import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/logo-dark.svg"
        alt="task manager logo"
        width="180"
        height="32"
        className="hidden dark:block"
      />

      <Image
        src="/logo-light.svg"
        alt="task manager logo"
        width="180"
        height="32"
        className="block dark:hidden"
      />
    </>
  );
}
