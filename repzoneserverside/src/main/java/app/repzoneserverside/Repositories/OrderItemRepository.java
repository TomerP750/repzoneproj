package app.repzoneserverside.Repositories;

import app.repzoneserverside.Beans.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
}
