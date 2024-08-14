package com.Sandu.FurryFinds.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;

@Entity
@Getter
@Setter
@Table(name = "rating")
public class RatingModel {
    @Id
    @GeneratedValue
    private Long id;

    private float prodRating = 0;
    private int totalReview = 0;

    @Column
    private int fiveStarCount = 0;

    @Column
    private int fourStarCount = 0;

    @Column
    private int threeStarCount = 0;

    @Column
    private int twoStarCount = 0;

    @Column
    private int oneStarCount = 0;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id" , referencedColumnName = "id")
    private ProductModel product;
}
