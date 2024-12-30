package app.repzoneserverside.Services;

import app.repzoneserverside.Beans.Review;
import app.repzoneserverside.Beans.User;
import app.repzoneserverside.Exceptions.ExistsException;
import app.repzoneserverside.Exceptions.InvalidInputException;
import app.repzoneserverside.Repositories.OrderRepository;
import app.repzoneserverside.Repositories.ReviewRepository;
import app.repzoneserverside.Repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    // Handles user management (authentication, registration, profile management).
    private final UserRepository userRepository;
    private OrderRepository orderRepository;
    private ReviewRepository reviewRepository;
    private int userId;

    public UserService(UserRepository userRepository, OrderRepository orderRepository, ReviewRepository reviewRepository) {
        this.userRepository = userRepository;
        this.orderRepository = orderRepository;
        this.reviewRepository = reviewRepository;
    }

    public boolean login(String email, String password) {
        if (userRepository.existsByEmailAndPassword(email, password)) {
            userId = userRepository.getIdByEmailAndPassword(email, password);
            return true;
        }
        return false;
    }

    public void register(User user) throws ExistsException, InvalidInputException {

        if (userRepository.existsByUsername(user.getUsername())) {
            throw new ExistsException("Username already been taken, Please try different username");
        }
        if (!isValidPassword(user.getPassword())) {
            throw new InvalidInputException("Invalid Password, Please use strong password for your safety");
        }
        if (user.getFirstName().isEmpty() || user.getLastName().isEmpty() || user.getUsername().isEmpty() || user.getPassword().isEmpty()
                || user.getEmail().isEmpty() || user.getAddress().isEmpty()) {
            throw new InvalidInputException("Missing information, please check that everything is valid");

        }
        if (user.getPhoneNumber().length() != 10 || !user.getPhoneNumber().matches("\\d+")) {
            throw new InvalidInputException("Invalid Phone Number");
        }
        // TODO how to make sure user is not admin need to cancel option for Role select - every register is User default
        userRepository.save(user);
        System.out.println("User " + user.getUsername() + " has been registered successfully");
    }

    public boolean isValidPassword(String password) {
        if (password.length() < 6) {
            return false;
        }
        String regex =  "^(?=.*[A-Za-z])(?=.*\\d).+$";
        return password.matches(regex);
    }

    public void deleteAccount() throws ExistsException {
        User user = userRepository.findById(userId).orElseThrow(()->new ExistsException("User not found"));
        orderRepository.deleteByUserId(userId);
        userRepository.delete(user);
    }

    public void updateAccount(User user) throws ExistsException, InvalidInputException {

        if (userRepository.existsByUsername(user.getUsername()) || userRepository.existsByEmail(user.getEmail())) {
            throw new ExistsException("username or email already exists");
        }
        if (user.isAdmin()) {
            throw new InvalidInputException("Unauthorized");
        }
        if (!isValidPassword(user.getPassword())) {
            throw new InvalidInputException("Invalid Password");
        }
        if (user.getFirstName().isEmpty() || user.getLastName().isEmpty() || user.getUsername().isEmpty() || user.getPassword().isEmpty()
                || user.getEmail().isEmpty() || user.getAddress().isEmpty()) {
            throw new InvalidInputException("Missing information, please check that everything is valid");

        }
        if (user.getPhoneNumber().length() != 10 || !user.getPhoneNumber().matches("\\d+")) {
            throw new InvalidInputException("Invalid Phone Number");
        }
        userRepository.save(user);
    }


    public User accountDetails() throws ExistsException {
        return userRepository.findById(userId).orElseThrow(()->new ExistsException("User Not Found"));
    }

    public void addReview(Review review) throws InvalidInputException {
        if (review.getRating() > 0 && review.getRating() < 5) {
            reviewRepository.save(review);
        } else {
            throw new InvalidInputException("Invalid Rating");
        }
    }

    public void deleteReview(int id) {
        reviewRepository.deleteById(id);
    }


}


