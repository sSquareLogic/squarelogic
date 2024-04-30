import Container from "@/components/Container";

const TOS = () => {
  return (
    <main className="tos">
      <Container className="py-10">
        <h1 className="font-bold text-3xl text-center pb-10">Privacy Policy</h1>
        <pre>{`
              Last Updated: April 30, 2024

              Welcome to SQUARELOGIC!
              
              At SQUARELOGIC, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and your choices regarding your data.
              
              Information We Collect:
              Personal Information: We collect your name and email address when you provide it to us voluntarily through our website.
              Non-Personal Information: We may also collect non-personal information through web cookies for analytical purposes.
              Use of Information:
              We use your personal information to contact you regarding inquiries or requests you submit through our website.
              Non-personal information collected through cookies helps us improve our website's functionality and user experience.
              Data Sharing:
              We do not share your personal information with any third parties unless required by law.
              Children's Privacy:
              We do not knowingly collect personal information from children under the age of 13. Our services are intended for individuals 13 years of age and older.
              Updates to Privacy Policy:
              We may update this Privacy Policy from time to time. Any changes will be communicated to you directly.
              Contact Us:
              If you have any questions or concerns about our Privacy Policy or data practices, please contact us at business.squarelogic@gmail.com.
              By using our website, you consent to the terms of this Privacy Policy.
              
              Thank you for choosing SQUARELOGIC!
        `}</pre>
      </Container>
    </main>
  );
};
export default TOS;
