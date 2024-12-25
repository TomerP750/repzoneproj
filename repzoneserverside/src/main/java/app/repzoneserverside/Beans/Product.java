package app.repzoneserverside.Beans;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private int price;
    private int quantityInStock;
    private String image;
    @Enumerated(EnumType.STRING)
    private Category category;
    @ManyToMany
    private List<CartItem> cartItems;

}
