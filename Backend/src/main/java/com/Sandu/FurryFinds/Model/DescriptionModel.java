package com.Sandu.FurryFinds.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Set;

@Entity
@Table(name = "descriptions")
@Getter
@Setter
public class DescriptionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String briefDescription;

    @ElementCollection
    @Column(columnDefinition = "TEXT")
    private Set<String> benefits;

    @ElementCollection
    @Column(columnDefinition = "TEXT")
    private Set<String> productDetails;

    @OneToOne(mappedBy = "description")
    private ProductModel product;
}
