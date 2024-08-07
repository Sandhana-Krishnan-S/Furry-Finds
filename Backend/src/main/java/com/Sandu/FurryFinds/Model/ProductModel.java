package com.Sandu.FurryFinds.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "products")
@Getter
@Setter
public class ProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private byte[] img;

    @Transient
    private String imgVal;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = false, length = 255)
    private String store;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Category category;

    @Column(nullable = false)
    private float price;

    @Column(columnDefinition = "TEXT")
    private String prodDescription;

    //temp
    private int totalReview;
    private float rating;

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "rating_id", referencedColumnName = "id")
//    private  RatingModel rating;
//
//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "description_id" , referencedColumnName = "id")
//    private DescriptionModel description;
//
//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "review_id" , referencedColumnName = "id")
//    private Set<ReviewTable> review;

    public enum Category {
        PET, ACCESSORY, GADGET, FOOD, AQUATIC
    }
}
