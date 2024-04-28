package api.services;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.gson.Gson;

import api.dao.impl.ProductDAOImpl;
import api.entities.Category;
import api.entities.Product;

@Path("/product/")
public class ProductService {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String findAll() {
		List<Product> products = new ProductDAOImpl().findAll();
		Gson gson = new Gson();
		return gson.toJson(products);
	}
	
	@GET
	@Path("/category")
	@Produces(MediaType.APPLICATION_JSON)
	public String finadAllCate() {
		List<Category> categories = new ProductDAOImpl().findCateAll();
		Gson gson = new Gson();
		return gson.toJson(categories);
	}
	
	@GET
	@Path("/category/{categoryId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String findByCategoryId(@PathParam(value = "categoryId") Integer categoryId) {
		List<Product> productByCategoryId = new ProductDAOImpl().findByCategoryId(categoryId);
		Gson gson = new Gson();
		return gson.toJson(productByCategoryId);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{productId}")
	public String findById(@PathParam("productId") Integer productId) {
		Product product = new ProductDAOImpl().findById(productId);
		Gson son = new Gson();
		return son.toJson(product);
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public String save(String jsonProduct) {
		Gson son = new Gson();
		Product product = son.fromJson(jsonProduct, Product.class);
		boolean blInsert = new ProductDAOImpl().save(product);
		return son.toJson(blInsert);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public String update(String jsonProduct) {
		Gson son = new Gson();
		Product product = son.fromJson(jsonProduct, Product.class);
		boolean blUpdate = new ProductDAOImpl().update(product);
		return son.toJson(blUpdate);
	}

	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/{productId}")
	public String delete(@PathParam("productId") Integer productId) {
		boolean blDelete = new ProductDAOImpl().delete(productId);
		Gson son = new Gson();
		return son.toJson(blDelete);
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/searchByName/{name}")
	public String findByName(@PathParam("name") String name) {
		List<Product> products = new ProductDAOImpl().findByName(name);
		Gson son = new Gson();
		return son.toJson(products);
	}

}
