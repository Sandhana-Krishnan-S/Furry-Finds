package com.Sandu.FurryFinds.Service;

import com.Sandu.FurryFinds.AwsCredentials;
import com.Sandu.FurryFinds.Config.S3Config;
import com.Sandu.FurryFinds.Model.ProductModel;
import com.Sandu.FurryFinds.Model.ReviewTable;
import com.Sandu.FurryFinds.Model.UserModel;
import com.Sandu.FurryFinds.Repository.ProductRepository;
import com.Sandu.FurryFinds.Repository.UserRepository;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;

    @Autowired
    private UserRepository userRepository;

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

    public ResponseEntity<?> addProduct(ProductModel product, MultipartFile img) {
       try {
           String img_name = System.currentTimeMillis() + "-" + img.getName();
           AmazonS3 amazonS3 = S3Config.getS3Client();
           File convertedImage = convertMultipartFileToFile(img);
           amazonS3.putObject(new PutObjectRequest(AwsCredentials.bucketName , img_name , convertedImage));
           product.setImg(amazonS3.getUrl(AwsCredentials.bucketName , img_name).toString());
           ProductModel res = repository.save(product);
           convertedImage.delete();
//           return new ResponseEntity<>("Success" +  , HttpStatus.OK);
           return new ResponseEntity<>(res , HttpStatus.CREATED);
       } catch (IOException e) {
           return  new ResponseEntity<>("Failed to Create a product, Error :"  + e.getMessage() , HttpStatus.CONFLICT);
       }
    }

    private static File convertMultipartFileToFile(MultipartFile file) throws IOException {
        File convertedFile = new File(Objects.requireNonNull(file.getOriginalFilename()));
        try (InputStream is = file.getInputStream(); OutputStream os = new FileOutputStream(convertedFile)) {
            byte[] buffer = new byte[1024];
            int length;
            while ((length = is.read(buffer)) > 0) {
                os.write(buffer, 0, length);
            }
        }
        return convertedFile;
    }

    public ResponseEntity<?> addReview(Long id, Long userId, ReviewTable review) {
        Optional<ProductModel> exist = repository.findById(id);
        Optional<UserModel> user =userRepository.findById(userId);
        if(exist.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if(user.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        ProductModel product = exist.get();
        List<ReviewTable> reviews = product.getReview();
        UserModel userModel = user.get();
        List<ReviewTable> UserReviews = userModel.getReviews();
        reviews.add(review);
        review.setUser(userModel);
        product.setReview(reviews);
        UserReviews.add(review);
        userModel.setReviews(UserReviews);
        repository.save(product);
        userRepository.save(userModel);
        return new ResponseEntity<>("Sucess" , HttpStatus.OK);
    }
}
