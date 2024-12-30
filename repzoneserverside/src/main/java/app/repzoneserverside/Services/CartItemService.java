package app.repzoneserverside.Services;

public class CartItemService {

    private CartItemRepository cartItemRepository;
    private CartRepository cartRepository;

    public CartItemService(CartItemRepository cartItemRepository, CartRepository cartRepository) {
        this.cartItemRepository = cartItemRepository;
        this.cartRepository = cartRepository;
    }

}

