import Container from "./Container";
import ToTopBtn from "./ToTopBtn";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="pb-[169px] flex flex-col gap-10">
        <h1 className="text-[160px] font-bold uppercase max-md:text-[14vw]">SquareLogic</h1>
        <div className="grid grid-cols-THREE gap-8 max-md:flex max-md:flex-col max-md:gap-6 max-md:items-center">
          <div className="flex items-center gap-4 justify-self-start text-lg font-medium max-md:justify-between max-md:min-w-[300px] max-[450px]:min-w-none">
            <a href="https://twitter.com/duggthevicious" target="_blank">
              Twitter
            </a>
            <a href="https://www.instagram.com/square_logic/" target="_blank">
              Instagram
            </a>
            <a href="https://t.me/duggthevicious" target="_blank">
              Telegram
            </a>
          </div>
          <ToTopBtn />
          <p className="text-lg font-medium justify-self-end">SquareLogic ©</p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
