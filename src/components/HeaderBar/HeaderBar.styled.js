import styled from "styled-components";
import {
  blackColor,
  greyColor,
  borderGrey,
} from "../../globalVariables/globalColors";
import { Email, GitHub, LinkedIn, Telegram } from "@mui/icons-material";
import { mainOwnerFont } from "../../globalVariables/globalFonts";

export const HeaderBarMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${borderGrey};
`;

export const OwnerName = styled.span`
  display: block;
  font-family: ${mainOwnerFont};
  align-self: center;
`;

export const SocialUl = styled.ul`
  display: flex;
  gap: 10px;
`;

export const LinkedInIcon = styled(LinkedIn)`
  color: ${blackColor};
  & :hover {
    color: ${greyColor};
  }
`;

export const SocialElement = styled.li`
  cursor: pointer;
`;

export const TelegramInIcon = styled(Telegram)`
  color: ${blackColor};
  & :hover {
    color: ${greyColor};
  }
`;
export const GitHubIcon = styled(GitHub)`
  color: ${blackColor};
  & :hover {
    color: ${greyColor};
  }
`;
export const MailInIcon = styled(Email)`
  color: ${blackColor};
  & :hover {
    color: ${greyColor};
  }
`;
