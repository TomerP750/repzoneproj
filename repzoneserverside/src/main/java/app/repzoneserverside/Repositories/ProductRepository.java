package app.repzoneserverside.Repositories;

import app.repzoneserverside.Beans.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
