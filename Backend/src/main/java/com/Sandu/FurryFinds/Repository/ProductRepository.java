package com.Sandu.FurryFinds.Repository;

import com.Sandu.FurryFinds.Model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductModel , Long> {
}
