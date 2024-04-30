import Container from "@/components/Container";

const CommercialDisclosurePage = () => {
  return (
    <main className="commercial-disclosure text-xl">
      <Container className="pt-10 flex flex-col">
        <h1 className="text-3xl font-bold text-center pb-10">Commercial Disclosure (特定商取引法に基づく表記)</h1>
        <ul>
          <li>
            <strong>Legal Name:</strong> SQUARELOGIC
          </li>
          <li>
            <strong>Address:</strong> *We will disclose without delay if requested.*
          </li>
          <li>
            <strong>Phone number:</strong> *We will disclose without delay if requested.*
          </li>
          <li>
            <strong>Hours:</strong> 10:00 - 18:00 (excluding weekends and holidays)
          </li>
          <li>
            <strong>Email address:</strong> squarelogic.business@gmail.com
          </li>
          <li>
            <strong>Head of Operations:</strong> Aydogdy Agabayev
          </li>
          <li>
            <strong>Additional fees:</strong> None
          </li>
        </ul>
        <h2 className="text-2xl font-bold py-10">Exchanges & Returns Policy</h2>
        <ul>
          <li>
            <strong>Returns and exchanges requested by customers</strong>
            <ul>
              <li> If you`re not satisfied with our service, we offer a full refund.</li>
            </ul>
          </li>
        </ul>
        <h2 className="text-2xl font-bold py-10">Delivery times</h2>
        <ul>
          <li>We typically deliver results within 2 weeks.</li>
        </ul>
        <h2>Accepted payment methods</h2>
        <ul>
          <li>Credit cards or via bank transfer.</li>
        </ul>
        <h2>Payment period</h2>
        <ul>
          <li>Payment is due upon completion of the project.</li>
        </ul>
        <h2 className="text-2xl font-bold py-10">Price</h2>
        <ul>
          <li>Starting from $1000.</li>
        </ul>
        <p>
          <em>Amounts listed on each product page: Prices vary depending on the scope of the project.</em>
        </p>
      </Container>
    </main>
  );
};

export default CommercialDisclosurePage;
