package app.repzoneserverside.Controllers;

import app.repzoneserverside.Services.OrderService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    private OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


}
