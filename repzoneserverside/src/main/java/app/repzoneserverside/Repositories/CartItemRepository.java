package app.repzoneserverside.Repositories;

import app.repzoneserverside.Beans.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Integer> {
}
