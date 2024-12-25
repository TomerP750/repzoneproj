package app.repzoneserverside.Services;

import app.repzoneserverside.Beans.Product;
import app.repzoneserverside.Exceptions.ExistsException;
import app.repzoneserverside.Repositories.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    // Manages products (CRUD operations), including product listing, details, and
    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int id) throws ExistsException {
        return productRepository.findById(id).orElseThrow(()-> new ExistsException("Not Found!"));
    }
    //TODO implement logic
    public void createProduct(Product product) {
        productRepository.save(product);
    }

    public void updateProduct(Product product) {
        productRepository.save(product);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    public void searchProduct(String keyword) {

    }

}
