package com.Sandu.FurryFinds.Repository;

import com.Sandu.FurryFinds.Model.DescriptionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DescriptionRepository extends JpaRepository<DescriptionModel , Long> {
    //query place
}
