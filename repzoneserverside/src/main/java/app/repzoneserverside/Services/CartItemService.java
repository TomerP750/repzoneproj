package app.repzoneserverside.Services;

import app.repzoneserverside.Beans.Cart;
import app.repzoneserverside.Repositories.CartItemRepository;
import app.repzoneserverside.Repositories.CartRepository;

public class CartItemService {

    private CartItemRepository cartItemRepository;
    private CartRepository cartRepository;

    public CartItemService(CartItemRepository cartItemRepository, CartRepository cartRepository) {
        this.cartItemRepository = cartItemRepository;
        this.cartRepository = cartRepository;
    }

}

