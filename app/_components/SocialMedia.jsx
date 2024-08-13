// import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function SocialMedia({ socialMedia }) {
  return (
    <div className="social-media-icons | container" data-type="narrowest">
      {socialMedia.map((singleSocialMedia) => {
        return (
          <a key={singleSocialMedia.name} href={singleSocialMedia.href}>
            <img
              src={singleSocialMedia.src}
              alt={`${singleSocialMedia.name} logo`}
            />
          </a>
        );
      })}
    </div>
  );
}
