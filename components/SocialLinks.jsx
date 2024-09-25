import Link from "next/link";

import { SOCIAL_LINKS } from "@/data";

const SocialLinks = () => {
  return (
    <div className="inline-flex space-x-2 mx-auto py-2">
      {SOCIAL_LINKS.map(({ url, icon: Icon }, index) => (
        <Link key={index} href={url} target="_blank" rel="noopener noreferrer">
          <Icon className="text-xl cursor-pointer bg-transparent border-none hover:scale-125 transition ease-in-out delay-100" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
