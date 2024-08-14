package com.Sandu.FurryFinds.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
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
    @CollectionTable(name = "description_benefits", joinColumns = @JoinColumn(name = "description_id"))
    @Column(name = "benefit")
    private List<String> benefits;

    @ElementCollection
    @CollectionTable(name = "description_product_details", joinColumns = @JoinColumn(name = "description_id"))
    @Column(name = "product_detail")
    private List<String> productDetails;

    @JsonIgnore
    @OneToOne(mappedBy = "description")
    private ProductModel product;
}
