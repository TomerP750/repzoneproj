package app.repzoneserverside.Services;

import app.repzoneserverside.Beans.CartItem;
import app.repzoneserverside.Beans.Order;
import app.repzoneserverside.Exceptions.ExistsException;
import app.repzoneserverside.Repositories.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    //  Manages order creation and tracking.

    private OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public void createOrder(List<CartItem> cartItems) {

    }

    public Order getOrderById(int id) throws ExistsException {
        return orderRepository.findById(id).orElseThrow(()->new ExistsException("Not Found"));
    }
}
