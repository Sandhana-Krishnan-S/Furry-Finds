package com.Sandu.FurryFinds.Repository;

import com.Sandu.FurryFinds.Model.ProductModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductModel , Long> {
    Page<ProductModel> findAllByCategory(ProductModel.Category category , PageRequest pageRequest);
}
