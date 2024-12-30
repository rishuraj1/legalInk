import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { FacebookIcon, Globe } from "lucide-react";
import Link from "next/link";

interface SocialProps {
  socials: {
    [key: string]: string;
  };
}

const Socials = ({ socials }: SocialProps) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      {socials?.instagrams && (
        <Link href={socials.instagrams}>
          <InstagramLogoIcon className="w-8 h-8 cursor-pointer hover:text-gray-300 ease-in-out duration-150" />
        </Link>
      )}
      {socials?.linkedin && (
        <Link href={socials.linkedin}>
          <LinkedInLogoIcon className="w-8 h-8 cursor-pointer hover:text-gray-300 ease-in-out duration-150" />
        </Link>
      )}
      {socials?.github && (
        <Link href={socials.github}>
          <GitHubLogoIcon className="w-8 h-8 cursor-pointer hover:text-gray-300 ease-in-out duration-150" />
        </Link>
      )}
      {socials?.twitter && (
        <Link href={socials.twitter}>
          <TwitterLogoIcon className="w-8 h-8 cursor-pointer hover:text-gray-300 ease-in-out duration-150" />
        </Link>
      )}
      {socials?.website && (
        <Link href={socials?.website}>
          <Globe className="w-8 h-8 cursor-pointer hover:text-gray-300 ease-in-out duration-150" />
        </Link>
      )}
      {socials?.facebook && (
        <Link href={socials.facebook}>
          <FacebookIcon className="w-8 h-8 cursor-pointer hover:text-gray-300 ease-in-out duration-150" />
        </Link>
      )}
    </div>
  );
};

export default Socials;
