import { socialLinks } from "../data/portfolio";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ label, icon, url }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 text-white text-sm border border-main/50 rounded-xl px-4 py-2 hover:-translate-y-0.5 hover:border-main transition-all duration-500"
        >
          <i className={icon}></i>
          {label}
        </a>
      ))}
    </div>
  );
}
