package app.repzoneserverside.Services;

import app.repzoneserverside.Repositories.ProductRepository;
import app.repzoneserverside.Repositories.ReviewRepository;
import app.repzoneserverside.Repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    private ReviewRepository reviewRepository;
    private UserRepository userRepository;
    private ProductRepository productRepository;

    public ReviewService(ReviewRepository reviewRepository, UserRepository userRepository, ProductRepository productRepository) {
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }
}
