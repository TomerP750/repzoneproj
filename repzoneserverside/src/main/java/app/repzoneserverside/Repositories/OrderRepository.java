package app.repzoneserverside.Repositories;

import app.repzoneserverside.Beans.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer> {

    void deleteByUserId(int userId);
}
