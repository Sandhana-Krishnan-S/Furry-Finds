package com.Sandu.FurryFinds.Repository;

import com.Sandu.FurryFinds.Model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel , Long> {
    // add query methods needed
    UserModel findByEmail(String email);
}
