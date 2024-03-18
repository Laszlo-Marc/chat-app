import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

function Signup() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imgUrlRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1 className="test-3x1 font-bold mb-8 text-center">Sign Up</h1>
      <form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end">
        <label htmlFor="userName">Username</label>
        <Input id="userName" pattern="\S*" required ref={userNameRef} />
        <label htmlFor="name">Name</label>
        <Input id="name" required ref={nameRef} />
        <label htmlFor="imgUrl">Username</label>
        <Input id="imgUrl" type="url" ref={imgUrlRef} />
        <Button type="submit" className="col-span-full">
          Submit
        </Button>
      </form>
    </>
  );
}

export default Signup;
