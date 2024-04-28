package api.dao.impl;

import java.util.List;

import org.hibernate.Session;

import api.dao.ProductDAO;
import api.entities.Category;
import api.entities.Product;
import api.util.HibernateUtil;

public class ProductDAOImpl implements ProductDAO{

	@Override
	public List<Product> findAll() {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			List list = session.createQuery("from Product ORDER BY productId DESC").list();
			return list;
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			session.close();
		}
		return null;
	}
	
	@Override
	public Product findById(Integer productId) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			Product product = session.get(Product.class, productId);
			return product;
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			session.close();
		}
		return null;
	}

	@Override
	public boolean save(Product product) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			session.beginTransaction();
			session.save(product);
			session.getTransaction().commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		}finally {
			session.close();
		}
		return false;
	}

	@Override
	public boolean update(Product product) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			session.beginTransaction();
			session.update(product);
			session.getTransaction().commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		}finally {
			session.close();
		}
		return false;
	}

	@Override
	public boolean delete(Integer productId) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			session.beginTransaction();
			Product item = session.get(Product.class, productId);
			session.remove(item);
			session.getTransaction().commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		}finally {
			session.close();
		}
		return false;
	}

	@Override
	public List<Product> findByName(String name) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			if(name==null || name.length()==0)
				name = "%";
			else
				name = "%"+name+"%";
			List list = session.createQuery("from Product where name like :name")
					.setParameter("name", name)
					.list();
			return list;
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			session.close();
		}
		return null;
	}
	
	@Override
	public List<Category> findCateAll() {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			List<Category> list = session.createQuery("from Category").list();
			return list;
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			session.close();
		}
		return null;
	}
	
	@Override
	public List<Product> findByCategoryId(Integer categoryId) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			List list = session.createQuery("from Product where category_id = :categoryId")
					.setParameter("categoryId", categoryId)
					.list();
			return list;
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			session.close();
		}
		return null;
	}
	
}
