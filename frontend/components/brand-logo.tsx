import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link href={"/"} className="flex leading-3 w-1/3">
      <span className="font-light text-2xl">Sure</span>
      <span className="font-bold text-2xl">Shot</span>
    </Link>
  );
};

export default BrandLogo;
