function RefundPolicy() {
    return ( 
        <section className="p-5 bg-second text-dark">
        <h3 className="text-center">Refund Policy</h3>
        <div className="p-5 lh-base fst-normal">
            Please find below the details for refund policy.
            <br/><br/> 1. Customer will receive a full/partial refund if they cancel any parking before parking time starts
            <br/>2. Refund will be processed to the same mode of payment which was used during the parking booking
            <br/>3. No refund will be made if customer did not turn up (no show) after booking a parking spot and customer will be charged for first hour of booking in such cases.
            <br/>4. Management holds the right to cancel any confirmed booking in case of any unavoidable circumstances occur at the parking space. Customer will receive a full refund for such cases.
            <br/>5. Service charges will be applicable if customer cancels the booking at any given time. Refund amount will be = total amount - service charge.
            <br/><br/> Refund Amount:
            <br/><br/> Refund fees vary by city and by facility. Parking management has every right to decide how much percentage of refund is payable to customer.
        </div>
    </section>
     );
}

export default RefundPolicy;