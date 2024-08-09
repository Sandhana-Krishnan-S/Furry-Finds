package com.Sandu.FurryFinds.Repository;

import com.Sandu.FurryFinds.Model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductModel , Long> {
    List<ProductModel> findAllByCategory(ProductModel.Category category);
}
