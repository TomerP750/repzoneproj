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

    public Order() {
    }

    public Order(User user, Status status, int totalPrice, String shippingAddress) {
        this.user = user;
        this.status = status;
        this.totalPrice = totalPrice;
        this.shippingAddress = shippingAddress;
    }

    public User getUser() {
        return user;
    }

    public Status getStatus() {
        return status;
    }

    public int getTotalPrice() {
        return totalPrice;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public void setTotalPrice(int totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }
}
