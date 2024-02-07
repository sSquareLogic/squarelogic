import Container from "../Container";
import CursorHover from "../animated/CursorHover";
import ParallaxText from "../animated/ParralaxText";
import ToTopBtn from "./ToTopBtn";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="mb-10">
        <ParallaxText baseVelocity={-3}>SQUARELOGIC</ParallaxText>
        <ParallaxText baseVelocity={3}>SQUARELOGIC</ParallaxText>
      </div>
      <Container className="pb-[169px] flex flex-col gap-10">
        <div className="grid grid-cols-THREE gap-8 max-md:flex max-md:flex-col max-md:gap-6 max-md:items-center">
          <div className="flex items-center gap-4 justify-self-start text-lg font-medium font-INTER -tracking-[1%] max-md:justify-between max-md:min-w-[300px] max-[450px]:min-w-none">
            <CursorHover>
              <a href="https://twitter.com/duggsquarelogic" target="_blank">
                Twitter
              </a>
            </CursorHover>
            <CursorHover>
              <a href="https://www.instagram.com/square_logic/" target="_blank">
                Instagram
              </a>
            </CursorHover>
            <CursorHover>
              <a href="https://t.me/duggthevicious" target="_blank">
                Telegram
              </a>
            </CursorHover>
          </div>
          <ToTopBtn />
          <p className="text-lg font-medium justify-self-end font-INTER -tracking-[1%]">SQUARELOGIC ©</p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
