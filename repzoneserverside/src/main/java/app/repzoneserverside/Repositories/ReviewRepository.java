package app.repzoneserverside.Repositories;

import app.repzoneserverside.Beans.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
}
