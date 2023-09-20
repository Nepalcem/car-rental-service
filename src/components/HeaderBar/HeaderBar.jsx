import React from "react";

import {
  HeaderBarMain,
  OwnerName,
  SocialUl,
  SocialElement,
  LinkedInIcon,
  GitHubIcon,
  TelegramInIcon,
  MailInIcon,
} from "./HeaderBar.styled";

export default function HeaderBar() {
  return (
    <HeaderBarMain>
      <OwnerName>Michael Lykhovyd</OwnerName>
      <SocialUl>
        <SocialElement>
          <a href="https://www.linkedin.com/in/michael-lykhovyd/">
            <LinkedInIcon style={{ fontSize: 26 }} />
          </a>
        </SocialElement>
        <SocialElement>
            <a href="https://github.com/Nepalcem">
          <GitHubIcon />
          </a>
        </SocialElement>
        <SocialElement>
         <a href="https://t.me/MarkWds"> <TelegramInIcon />
         </a>
        </SocialElement>
        <SocialElement>
          <a href="mailto:mark.emailtest@gmail.com"><MailInIcon />
          </a>
        </SocialElement>
      </SocialUl>
    </HeaderBarMain>
  );
}
