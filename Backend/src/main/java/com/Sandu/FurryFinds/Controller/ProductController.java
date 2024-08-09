package com.Sandu.FurryFinds.Controller;

import com.Sandu.FurryFinds.Model.DescriptionModel;
import com.Sandu.FurryFinds.Model.ProductModel;
import com.Sandu.FurryFinds.Model.RatingModel;
import com.Sandu.FurryFinds.Model.ReviewTable;
import com.Sandu.FurryFinds.Service.ProductService;
import jakarta.websocket.server.PathParam;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService service;

//    @PostMapping("/add-product")
//    public ResponseEntity<?> addProduct(@RequestBody ProductModel product) {
//        return service.addProduct(product);
//    }

    @PostMapping("/addAll-product")
    public ResponseEntity<?> addProductAll(@RequestBody List<ProductModel> product) {
        return service.addAllProduct(product);
    }

    @GetMapping("/get-product/{id}")
    public ResponseEntity<?> getProduct(@PathVariable Long id ) {
        return service.getProduct(id);
    }

    @GetMapping("/get-product/by-category/{category}")
    public ResponseEntity<?> getProductByCategory(@PathVariable ProductModel.Category category ) {
        return service.getProductByCategory(category);
    }
}
