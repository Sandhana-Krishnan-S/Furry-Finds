package com.Sandu.FurryFinds.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @Column
    private int star = 0;

    @Column(length = 255)
    private String reviewTitle;

    @Column(columnDefinition = "TEXT")
    private String reviewDescription;

    @Column(name = "reviewed_at")
    private LocalDateTime reviewedAt = LocalDateTime.now();
//
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private UserModel user;
//
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductModel product;

}
