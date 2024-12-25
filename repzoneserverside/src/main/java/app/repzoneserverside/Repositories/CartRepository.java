package app.repzoneserverside.Repositories;

import app.repzoneserverside.Beans.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Integer> {

    Cart findByUserId(int userId);
    void deleteByUserId(int userId);
}
