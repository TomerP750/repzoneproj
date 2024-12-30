package app.repzoneserverside.Beans;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    private User user;
    private Status status;
    private int totalPrice;
    private String shippingAddress;
    @OneToMany
    private List<OrderItem> orderItems;
}
