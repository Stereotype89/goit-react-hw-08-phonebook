import { StyledFooter, FooterText, FooterLink } from './AppFooter.styled';

export function AppFooter() {
  return (
    <StyledFooter>
      <FooterText>&copy; {new Date().getFullYear()} Developed by</FooterText>
      <FooterLink
        href="https://github.com/Stereotype89"
        target="_blank"
        rel="noopener noreferrer"
        title="Github profile"
        aria-label="Link to Github profile"
      >
        Oleksander Shyshman
      </FooterLink>
    </StyledFooter>
  );
}
