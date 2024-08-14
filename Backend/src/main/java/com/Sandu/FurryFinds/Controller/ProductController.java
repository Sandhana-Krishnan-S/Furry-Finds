package com.Sandu.FurryFinds.Controller;

import com.Sandu.FurryFinds.Model.DescriptionModel;
import com.Sandu.FurryFinds.Model.ProductModel;
import com.Sandu.FurryFinds.Model.RatingModel;
import com.Sandu.FurryFinds.Model.ReviewTable;
import com.Sandu.FurryFinds.Service.ProductService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.websocket.server.PathParam;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService service;

    @PostMapping("/addAll-product")
    public ResponseEntity<?> addProductAll(@RequestBody List<ProductModel> product) {
        return service.addAllProduct(product);
    }

    @PostMapping("/add-product")
    public ResponseEntity<?> addProduct(@RequestParam("product") String product , @RequestParam("image") MultipartFile img) throws JsonProcessingException {
        if(img == null || img.isEmpty()) {
            return new ResponseEntity<>("test" ,HttpStatus.BAD_REQUEST);
        }
        ObjectMapper objectMapper = new ObjectMapper();
        ProductModel user = objectMapper.readValue(product, ProductModel.class);

        return service.addProduct(user, img);
    }

    @GetMapping("/get-product/{id}")
    public ResponseEntity<?> getProduct(@PathVariable Long id ) {
        return service.getProduct(id);
    }

    @GetMapping("/get-product/by-category/{category}/{pageNo}/{pageSize}")
    public ResponseEntity<?> getProductByCategory(@PathVariable ProductModel.Category category , @PathVariable int pageNo , @PathVariable int pageSize ) {
        return service.getProductByCategory(category , pageNo , pageSize);
    }

    @PostMapping("/add-review")
    public ResponseEntity<?> addReview(@RequestParam Long id , @RequestBody ReviewTable review , @RequestParam Long userId) {
        return service.addReview(id, userId , review);
    }
}
