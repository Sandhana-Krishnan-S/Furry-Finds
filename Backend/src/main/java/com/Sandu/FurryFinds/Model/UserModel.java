package com.Sandu.FurryFinds.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "UserModel")
@Getter
@Setter
public class UserModel {
    @Id
    @GeneratedValue
    private int id;

    private String UserName;
    private String Email;
    private String Password;
}
