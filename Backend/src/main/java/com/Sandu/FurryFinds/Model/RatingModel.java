package com.Sandu.FurryFinds.Model;

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

    private float prodRating;
    private int totalReview;
    HashMap<Integer , Integer> stars;

//    @OneToOne(mappedBy = "rating")
//    private ProductModel product;
}
