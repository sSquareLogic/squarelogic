import Container from "@/components/Container";

const TOS = () => {
  return (
    <main className="tos">
      <Container className="py-10">
        <h1 className="font-bold text-3xl text-center pb-10">Terms & Services</h1>
        <pre>{`
              Last updated: April 30, 2024
              
              Welcome to SQUARELOGIC!
              
              By accessing and using our website (https://squarelogic.space), you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please refrain from using our website.
              
              SQUARELOGIC is a web design & development agency. For any inquiries or concerns, you can reach us at squarelogic.business@gmail.com.
              
              Ownership:
              Upon completion of our services, including designs and code, all intellectual property rights are transferred to the client.
              
              User Data:
              We may collect and store user data such as name and email for communication purposes.
              
              Non-personal Data Collection:
              We utilize web cookies for analytical and functional purposes.
              
              For detailed information on how we handle user data, please refer to our Privacy Policy: https://squarelogic.space/privacy-policy.
              
              Governing Law:
              These terms and conditions are governed by the laws of Japan.
              
              Updates to the Terms:
              We reserve the right to update or modify these terms at any time. Clients will be notified directly of any changes.
              
              Thank you for choosing SQUARELOGIC!
              `}</pre>
      </Container>
    </main>
  );
};
export default TOS;
