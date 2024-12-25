package app.repzoneserverside.Repositories;

import app.repzoneserverside.Beans.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    boolean existsByEmailAndPassword(String email, String password);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    int getIdByEmailAndPassword(String email, String password);
}
