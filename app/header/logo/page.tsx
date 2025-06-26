import Image from "next/image"

export default function Logo() {
  return (
    <div className=" ">
      <Image src={'/assets/logo1.png'} alt="Logo" width={50} height={50}
      className="rounded-full"/>
    </div>
  )
}