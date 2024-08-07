package com.Sandu.FurryFinds.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.time.LocalDateTime;

@Entity
@Table(name = "reviews")
@Getter
@Setter
public class ReviewTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int star = 0;

    @Column(nullable = false, length = 255)
    private String reviewTitle;

    @Column(columnDefinition = "TEXT")
    private String reviewDescription;

    @Column(name = "reviewed_at", nullable = false)
    private LocalDateTime reviewedAt = LocalDateTime.now();
//
//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    private UserModel user;
//
//    @ManyToOne
//    @JoinColumn(name = "product_id" , nullable = false)
//    private ProductModel product;

}
