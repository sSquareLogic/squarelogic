import Container from "@/components/Container";

const CommercialDisclosurePage = () => {
  return (
    <main className="commercial-disclosure text-xl">
      <Container className="pt-10 flex flex-col">
        <h1 className="text-3xl font-bold text-center pb-10">Commercial Disclosure (特定商取引法に基づく表記)</h1>
        <pre>{`
        Legal Name: SQUARELOGIC Agency

        Address: We will disclose without delay if requested.
        
        Phone number: We will disclose without delay if requested.
        
        Hours: 10:00 - 20:00 (excluding weekends and holidays)
        
        Email address: squarelogic.business@gmail.com
        
        Head of Operations: Aydogdy Agabayev
        
        Additional fees: None
        
        Exchanges & Returns Policy:
        ＜Returns and exchanges requested by customers＞
        If you're not satisfied with our service, we offer a full refund.
        
        Delivery times: We typically deliver results within 2 weeks.
        
        Accepted payment methods: Credit cards or via bank transfer.
        
        Payment period: Payment is due upon completion of the project.
        
        Price: Starting from $1000.
        
        Amounts listed on each product page: Prices vary depending on the scope of the project.`}</pre>
      </Container>
    </main>
  );
};

export default CommercialDisclosurePage;
