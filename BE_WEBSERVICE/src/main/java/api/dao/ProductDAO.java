package api.dao;

import java.util.List;

import api.entities.Category;
import api.entities.Product;

public interface ProductDAO {
	public List<Product> findAll();
	public Product findById(Integer productId);
	public boolean save(Product product);
	public boolean update(Product product);
	public boolean delete(Integer productId);
	public List<Product> findByName(String name);
	public List<Category> findCateAll();   
	public List<Product> findByCategoryId(Integer categoryId);
}
