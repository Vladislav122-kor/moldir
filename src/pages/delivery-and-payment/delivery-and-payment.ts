import DeliveryAndPaymentContainer from '../../components/deliveyr-and-payment-container/deliveyr-and-payment-container';
import Component from '../../utils/component';

class DeliveryAndPayment extends Component {
  private deliveryAndPaymentContainer: DeliveryAndPaymentContainer;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['deliveyr-and-payment']);
    this.deliveryAndPaymentContainer = new DeliveryAndPaymentContainer(this.element);
  }
}

export default DeliveryAndPayment;