package com.Sandu.FurryFinds.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, length = 255)
    private String name;

    @Column(nullable = false, unique = true, length = 255)
    private String email;

    @Column(nullable = false)
    private String password; // Ensure passwords are hashed before storing

    @Column(columnDefinition = "TEXT")
    private String address;

    @Column(length = 20)
    private String phoneNo;

    @Enumerated(EnumType.STRING)
    @Column(length = 10, nullable = false)
    private UserRole role = UserRole.CUSTOMER;

    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<ReviewTable> reviews;

    public enum UserRole {
        CUSTOMER, ADMIN, SELLER
    }
}
