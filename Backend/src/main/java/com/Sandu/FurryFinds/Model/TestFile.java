package com.Sandu.FurryFinds.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "test")
public class TestFile {
    @Id
    @GeneratedValue
    private Long id;

    private byte [] img;
    private String name;
}
