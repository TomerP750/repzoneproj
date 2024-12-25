package app.repzoneserverside.Services;

import app.repzoneserverside.Beans.Cart;
import app.repzoneserverside.Beans.CartItem;
import app.repzoneserverside.Beans.Product;
import app.repzoneserverside.Exceptions.ExistsException;
import app.repzoneserverside.Exceptions.ProductNotAvailableException;
import app.repzoneserverside.Repositories.CartItemRepository;
import app.repzoneserverside.Repositories.CartRepository;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    // Manages the shopping cart (adding/removing items, viewing cart).
    private ProductService productService;
    private UserService userService;
    private CartRepository cartRepository;
    private CartItemRepository cartItemRepository;

    public CartService(ProductService productService, UserService userService, CartRepository cartRepository, CartItemRepository cartItemRepository) {
        this.productService = productService;
        this.userService = userService;
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
    }

    public void addItemToCart(int userId, int productId, int quantity) throws ProductNotAvailableException, ExistsException {
        Product product = productService.getProductById(productId);
        if (product == null) {
            throw new ProductNotAvailableException("Product not available");
        }
        Cart cart = cartRepository.findByUserId(userId);

        if (cart == null) { 
            cart = new Cart(); //TODO add constructor
        } else {
            CartItem cartItem = new CartItem(cart, product, quantity);
            cart.getCartItems().add(cartItem);
        }
        cartRepository.save(cart);
    }

    public void removeItemFromCart(int userId, int cartItemId) throws ExistsException {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) {
            throw new ExistsException("Cart not found");
        }

        CartItem cartItemToRemove = cart.getCartItems().stream()
                .filter(item->item.getId() == cartItemId)
                .findFirst()
                .orElseThrow(()->new ExistsException("not found"));

        if (cartItemToRemove == null) {
            throw new ExistsException("Cart item not found");
        }

        cart.getCartItems().remove(cartItemToRemove);
    }

    public Cart getCart(int userId) {
        return cartRepository.findByUserId(userId);
    }

    public void clearCart(int userId) throws ExistsException {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) {
            throw new ExistsException("Cart Not Found");
        }
        cart.getCartItems().clear();
        cartRepository.save(cart);
    }

    public void incrementCartItemQuantity(int userId, int cartItemId) throws ExistsException {

        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) {
            throw new ExistsException("Cart not Found");
        }

        CartItem cartItem = cart.getCartItems().stream().filter(item->item.getId() == cartItemId).findFirst().orElseThrow(()->new ExistsException("not found"));
        cartItem.setQuantity(cartItem.getQuantity() + 1);

        cartItemRepository.save(cartItem);
        cartRepository.save(cart);

    }

    public void decrementCartItemQuantity(int userId, int cartItemId) throws ExistsException {

        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) {
            throw new ExistsException("Cart not Found");
        }

        CartItem cartItem = cart.getCartItems().stream().filter(item->item.getId() == cartItemId).findFirst().orElseThrow(()->new ExistsException("not found"));
        if (cartItem.getQuantity() > 1) {
            cartItem.setQuantity(cartItem.getQuantity() - 1);
        } else {
            cart.getCartItems().remove(cartItem);
        }

        cartItemRepository.save(cartItem);
        cartRepository.save(cart);
    }

}
