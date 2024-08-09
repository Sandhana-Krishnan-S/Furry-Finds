package com.Sandu.FurryFinds.Service;

import com.Sandu.FurryFinds.Model.ProductModel;
import com.Sandu.FurryFinds.Repository.ProductRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;
//    public ResponseEntity<?> addProduct(ProductModel request) {
//        try {
//            System.out.println(request.getImgVal());
//            byte[] decodedImg = Base64.getDecoder().decode(request.getImgVal());
//            request.setImg(decodedImg);
//            ProductModel res = repository.save(request);
//            return new ResponseEntity<>(res , HttpStatus.OK);
//        } catch (Exception e) {
//            System.out.println(e.getMessage());
//            return new ResponseEntity<>(HttpStatus.CONFLICT);
//        }
//    }

    public ResponseEntity<?> getProduct(Long id) {
        return new ResponseEntity<>(repository.findById(id) , HttpStatus.OK);
    }

    public ResponseEntity<?> getProductByCategory(ProductModel.Category category, int pageNo, int pageSize) {
        try {
            PageRequest pageRequest = PageRequest.of(pageNo , pageSize);
            Page<ProductModel> response  = repository.findAllByCategory(category , pageRequest);
            return new ResponseEntity<>(response , HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    public ResponseEntity<?> addAllProduct(List<ProductModel> product) {
        return new ResponseEntity<>(repository.saveAll(product) , HttpStatus.OK);
    }

}
